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
  "Comprar imóvel ou terreno": "imovel",
  "Construir ou reformar": "imovel",
  "Quitar financiamento imobiliário": "imovel",
  "Gerar renda com imóveis": "patrimonio_renda",
  "Ter uma aposentadoria confortável": "patrimonio_renda",
  "Obter crédito usando meu imóvel": "patrimonio_renda",
  "Comprar veículo ou utilitário": "veiculo",
  "Projeto empresarial ou agro": "negocio",
  "Comprar sede ou imóvel": "institucional_religioso",
  "Comprar terreno": "imovel",
  Construir: "imovel",
  "Reformar ou ampliar": "institucional_religioso",
  "Comprar veículos ou vans": "veiculo",
  "Outro projeto da igreja": "outro",
  "Comprar imóvel": "imovel",
  "Planejar patrimônio": "patrimonio_renda",
  "Comprar veículo": "veiculo",
  "Expandir meu negócio": "negocio",
  "Construir patrimônio e gerar renda": "patrimonio_renda",
  "Quero avaliar minhas possibilidades": "outros",
  Outro: "outros",
  "Comprar um imóvel": "imovel",
  "Comprar um terreno": "imovel",
  "Construir patrimônio": "patrimonio_renda",
  "Gerar renda": "patrimonio_renda",
  "Comprar ou trocar um veículo": "veiculo",
  "Veículos ou frota para empresa": "veiculo",
  "Expandir ou estruturar um negócio": "negocio",
  "Quitar um financiamento": "imovel",
  "Outro projeto": "outros",
};

export function getProjectCategory(objective: string, projectFor?: string): string {
  const normalizedObjective = objective.replace(/^(Igreja|Pessoal) — /, "");
  if (projectFor === "igreja" || projectFor === "ambos") return "institucional_religioso";
  return PROJECT_CATEGORIES[normalizedObjective] ?? "outros";
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

    if (
      anchor.getAttribute("href") === "#contato" &&
      anchor.dataset.ctaLocation &&
      anchor.dataset.ctaName
    ) {
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
    if (hostname !== "wa.me" && hostname !== "api.whatsapp.com" && hostname !== "web.whatsapp.com")
      return;
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
