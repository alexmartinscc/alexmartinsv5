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
  if (window.location.pathname === "/") return "home";
  return window.location.pathname.split("/").filter(Boolean)[0]?.replace(/-/g, "_") ?? "home";
}

export function trackLeadGenerated(pageSegment: "home" | "igrejas" | "saude") {
  if (typeof window === "undefined") return;
  trackEvent("generate_lead", {
    page_segment: pageSegment,
    source_domain: window.location.hostname,
    project_category: "planejamento_patrimonial",
  });
}

function getCtaLocation(anchor: HTMLAnchorElement): string {
  const explicitLocation = anchor.dataset.ctaLocation;
  if (explicitLocation) return explicitLocation;
  if (anchor.closest("header")) return "header";
  if (anchor.closest("form") || anchor.closest("#cta")) return "formulario";
  if (anchor.closest("#hero")) return "hero";
  return "conteudo";
}

/** Rastreia todos os links de WhatsApp atuais e futuros por delegação de eventos. */
export function installWhatsAppTracking(): () => void {
  if (typeof document === "undefined") return () => undefined;

  const onClick = (event: MouseEvent) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const anchor = target.closest<HTMLAnchorElement>("a[href]");
    if (!anchor) return;

    let hostname = "";
    try {
      hostname = new URL(anchor.href, window.location.href).hostname;
    } catch {
      return;
    }
    if (hostname !== "wa.me" && hostname !== "api.whatsapp.com" && hostname !== "web.whatsapp.com") return;

    trackEvent("whatsapp_click", {
      page_segment: getPageSegment(),
      source_domain: window.location.hostname,
      cta_location: getCtaLocation(anchor),
    });
  };

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
