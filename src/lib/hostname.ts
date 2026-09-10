/**
 * Reconhecimento de hostname — permite que o domínio comercial
 * consorcioigrejas.com.br sirva a mesma página /igrejas sem redirecionar.
 */
export const IGREJAS_DOMAINS = ["consorcioigrejas.com.br", "www.consorcioigrejas.com.br"];

export const IGREJAS_DOMAIN_URL = "https://consorcioigrejas.com.br/";

export function isIgrejasHost(host: string | undefined | null): boolean {
  if (!host) return false;
  const hostname = host.split(":")[0]!.toLowerCase();
  return IGREJAS_DOMAINS.includes(hostname);
}

/** Hostname atual: cabeçalho da requisição no SSR, window no cliente. */
export async function resolveHostname(): Promise<string> {
  if (typeof window !== "undefined") return window.location.hostname;
  try {
    const { getRequestHost } = await import("@tanstack/react-start/server");
    return getRequestHost({ xForwardedHost: true });
  } catch {
    return "";
  }
}
