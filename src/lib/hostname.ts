import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestHost } from "@tanstack/react-start/server";

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
export const resolveHostname = createIsomorphicFn()
  .client(() => window.location.hostname)
  .server(() => {
    try {
      return getRequestHost({ xForwardedHost: true });
    } catch {
      return "";
    }
  });
