/** Camada mínima de eventos para o Google Tag Manager. */
type EventPayload = Record<string, string | number | boolean | undefined>;

type DataLayerWindow = Window & { dataLayer?: unknown[] };

export function ensureDataLayer(): unknown[] {
  if (typeof window === "undefined") return [];
  const currentWindow = window as DataLayerWindow;
  currentWindow.dataLayer = currentWindow.dataLayer ?? [];
  return currentWindow.dataLayer;
}

export function trackEvent(name: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;
  try {
    ensureDataLayer().push({ event: name, ...payload });
  } catch {
    /* nunca quebrar a página por causa de analytics */
  }
}

export function getPageSegment(): string {
  if (typeof window === "undefined") return "home";
  if (window.location.hostname.includes("consorcioigrejas")) return "igrejas";
  if (window.location.pathname.startsWith("/igrejas")) return "igrejas";
  if (window.location.pathname.startsWith("/saude")) return "saude";
  return "home";
}

export type PageSegment = "home" | "igrejas" | "saude";

const PROJECT_CATEGORIES: Record<string, string> = {
  "Comprar imóvel ou terreno": "comprar_imovel",
  "Construir ou reformar": "construir_reformar",
  "Quitar financiamento imobiliário": "quitar_financiamento",
  "Gerar renda com imóveis": "gerar_renda_imoveis",
  "Ter uma aposentadoria confortável": "aposentadoria",
  "Obter crédito usando meu imóvel": "credito_com_imovel",
  "Comprar veículo ou utilitário": "veiculo",
  "Projeto empresarial ou agro": "projeto_empresarial_agro",
  "Comprar sede ou imóvel": "igreja_sede",
  "Comprar terreno": "comprar_imovel",
  Construir: "construir_reformar",
  "Reformar ou ampliar": "igreja_expansao",
  "Comprar veículos ou vans": "veiculo",
  "Outro projeto da igreja": "outro",
  "Comprar imóvel": "comprar_imovel",
  "Planejar patrimônio": "aposentadoria",
  "Comprar veículo": "veiculo",
  "Expandir meu negócio": "projeto_empresarial_agro",
  "Construir patrimônio e gerar renda": "gerar_renda_imoveis",
  "Quero avaliar minhas possibilidades": "outro",
  Outro: "outro",
};

export function getProjectCategory(objective: string, projectFor?: string): string {
  const normalizedObjective = objective.replace(/^(Igreja|Pessoal) — /, "");
  if (projectFor === "igreja" && normalizedObjective === "Comprar terreno") return "igreja_sede";
  if (projectFor === "igreja" && normalizedObjective === "Construir") return "igreja_expansao";
  return PROJECT_CATEGORIES[normalizedObjective] ?? "outro";
}

export function trackLeadGenerated(pageSegment: PageSegment, projectCategory: string) {
  if (typeof window === "undefined") return;
  trackEvent("generate_lead", {
    page_segment: pageSegment,
    source_domain: window.location.hostname,
    project_category: projectCategory,
  });
}

/** Rastreia CTAs internos e o WhatsApp final por uma única delegação global. */
export function installConversionTracking(): () => void {
  if (typeof document === "undefined") return () => undefined;

  const onClick = (event: MouseEvent) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const anchor = target.closest<HTMLAnchorElement>("a[href]");
    if (!anchor) return;

    if (anchor.hash === "#contato" && anchor.dataset.ctaLocation && anchor.dataset.ctaName) {
      trackEvent("cta_click", {
        page_segment: getPageSegment(),
        source_domain: window.location.hostname,
        cta_location: anchor.dataset.ctaLocation,
        cta_name: anchor.dataset.ctaName,
      });
      return;
    }

    let hostname = "";
    try {
      hostname = new URL(anchor.href, window.location.href).hostname;
    } catch {
      return;
    }
    if (hostname !== "wa.me" && hostname !== "api.whatsapp.com" && hostname !== "web.whatsapp.com") return;
    if (!anchor.closest("#contato")) return;

    trackEvent("whatsapp_click", {
      page_segment: getPageSegment(),
      source_domain: window.location.hostname,
      cta_location: "contato_final",
    });
  };

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
