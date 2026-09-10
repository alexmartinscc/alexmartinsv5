import { createFileRoute } from "@tanstack/react-router";

type LeadBody = Record<string, unknown>;

const BREVO_URL = "https://api.brevo.com/v3/smtp/email";
const FROM = { name: "Site Alex Martins", email: "formularios@alexmartins.cc" };
const TO = [{ email: "contato@alexmartins.cc" }];

function str(value: unknown, max = 500): string {
  if (typeof value === "number") return String(value);
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const LABELS: Record<string, string> = {
  nome: "Nome",
  whatsapp: "WhatsApp",
  email: "E-mail",
  projeto_para: "Projeto para",
  profissao: "Profissão",
  objetivo: "O que está buscando",
  tipo_valor: "Tipo de valor informado",
  valor: "Valor informado",
  mensagem: "Mensagem",
  source_page: "Origem (página)",
  source_domain: "Domínio",
  url_atual: "URL da página",
  pagina_origem: "Referrer",
  utm_source: "utm_source",
  utm_medium: "utm_medium",
  utm_campaign: "utm_campaign",
  utm_content: "utm_content",
  utm_term: "utm_term",
};

const ORDER = Object.keys(LABELS);

function formatValor(body: LeadBody): string {
  const valor = Number(body["valor"]);
  if (!Number.isFinite(valor) || valor <= 0) return "";
  const formatted = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
  return body["tipo_valor"] === "parcela" ? `${formatted} por mês` : formatted;
}

function subjectFor(sourcePage: string, sourceDomain: string): string {
  if (sourcePage === "saude") return "Novo projeto | Saúde";
  if (sourcePage === "igrejas" || sourceDomain.includes("consorcioigrejas"))
    return "Novo projeto | Igrejas";
  return "Novo projeto | Site Principal";
}

export const Route = createFileRoute("/api/lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["BREVO_API_KEY"];

        let body: LeadBody;
        try {
          body = (await request.json()) as LeadBody;
        } catch {
          return Response.json({ ok: false }, { status: 400 });
        }

        // Honeypot: bots preenchem o campo invisível.
        if (str(body["empresa_site"])) {
          return Response.json({ ok: true });
        }

        const nome = str(body["nome"], 120);
        const whatsapp = str(body["whatsapp"], 40);
        const email = str(body["email"], 255);
        const sourcePage = str(body["source_page"], 40) || "home";
        const sourceDomain = str(body["source_domain"], 120);

        const digits = whatsapp.replace(/\D/g, "");
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
        // Em /saude o e-mail é opcional; quando informado, precisa ser válido.
        const emailObrigatorio = sourcePage !== "saude";
        if (!nome || digits.length < 10 || !sourcePage || (email ? !emailOk : emailObrigatorio)) {
          return Response.json({ ok: false, error: "invalid" }, { status: 400 });
        }

        if (!apiKey) {
          console.error("[lead] BREVO_API_KEY ausente no ambiente do servidor");
          return Response.json({ ok: false, error: "config" }, { status: 200 });
        }

        const rows: Array<[string, string]> = [];
        for (const key of ORDER) {
          const value = key === "valor" ? formatValor(body) : str(body[key], 1200);
          if (value) rows.push([LABELS[key]!, value]);
        }
        rows.push([
          "Data/hora",
          new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
        ]);

        const subject = subjectFor(sourcePage, sourceDomain);
        const htmlContent = `<!doctype html><html><body style="margin:0;background:#f5f7fa;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#1f2937">
<div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;padding:24px">
<h1 style="margin:0 0 4px;font-size:18px;color:#0f2a43">${escapeHtml(subject)}</h1>
<p style="margin:0 0 16px;font-size:13px;color:#6b7280">Novo contato enviado pelo site.</p>
<table style="width:100%;border-collapse:collapse;font-size:14px">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="padding:8px 0;border-bottom:1px solid #eef2f6;color:#6b7280;width:180px;vertical-align:top">${escapeHtml(
        label,
      )}</td><td style="padding:8px 0;border-bottom:1px solid #eef2f6;color:#111827">${escapeHtml(
        value,
      )}</td></tr>`,
  )
  .join("")}
</table>
</div></body></html>`;

        const textContent = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

        try {
          const response = await fetch(BREVO_URL, {
            method: "POST",
            headers: { "api-key": apiKey, "content-type": "application/json" },
            body: JSON.stringify({
              sender: FROM,
              to: TO,
              ...(email ? { replyTo: { email, name: nome } } : {}),
              subject,
              htmlContent,
              textContent,
            }),
          });

          const raw = await response.text();
          if (!response.ok) {
            console.error(`[lead] Brevo falhou [${response.status}]: ${raw}`);
            return Response.json({ ok: false, error: "provider" }, { status: 200 });
          }

          let messageId: string | undefined;
          try {
            messageId = (JSON.parse(raw) as { messageId?: string }).messageId;
          } catch {
            messageId = undefined;
          }
          console.log(`[lead] enviado (${sourcePage}) messageId=${messageId ?? "n/d"}`);
          return Response.json({ ok: true, messageId });
        } catch (error) {
          console.error("[lead] erro ao chamar a Brevo:", error);
          return Response.json({ ok: false, error: "network" }, { status: 200 });
        }
      },
    },
  },
});
