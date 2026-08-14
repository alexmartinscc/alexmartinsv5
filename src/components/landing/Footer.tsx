import { Instagram, MessageCircle, ShieldCheck } from "lucide-react";
import logo from "@/assets/alex-martins-logo.png.asset.json";
import {
  ADEMICON_CREDENTIAL_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "@/lib/contact";


const LINKS = [
  { label: "Objetivos", href: "/#portfolio" },
  { label: "Consórcio", href: "/#por-que-consorcio" },
  { label: "Como funciona", href: "/#metodo" },
  { label: "Sobre", href: "/#sobre" },
  { label: "FAQ", href: "/#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="section-shell grid gap-10 pt-12 pb-12 md:grid-cols-[1.2fr_1fr]">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Logotipo Alex Martins"
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 shrink-0 object-contain"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-extrabold text-primary">
                Alex Martins
              </span>
              <span className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                Entender. Planejar. Conquistar.
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Consultor Autorizado Ademicon. Especialista em Conquista Patrimonial.
          </p>

          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageCircle className="h-4 w-4 text-gold" />
              WhatsApp {WHATSAPP_NUMBER}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4 text-gold" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:justify-items-end">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="section-shell flex flex-col gap-3 border-t border-border pt-6 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-gold" />
          Consultor Autorizado Ademicon
          <span className="h-3 w-px bg-border" />
          <a
            href={ADEMICON_CREDENTIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-primary"
          >
            Verificar credencial
          </a>
        </p>
      </div>
    </footer>
  );
}
