/**
 * Camada mínima de eventos de conversão.
 * Envia para o dataLayer / gtag quando existirem — sem instalar novas bibliotecas.
 */
type EventPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  try {
    w.dataLayer?.push({ event: name, ...payload });
    w.gtag?.("event", name, payload);
  } catch {
    /* nunca quebrar a página por causa de analytics */
  }
}
