/** Campos ocultos de origem do lead — usados na futura integração de backend. */
export type LeadOrigin = {
  pagina_origem: string;
  url_atual: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
};

const EMPTY: LeadOrigin = {
  pagina_origem: "",
  url_atual: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
};

export function getLeadOrigin(): LeadOrigin {
  if (typeof window === "undefined") return EMPTY;
  const params = new URLSearchParams(window.location.search);
  const get = (key: string) => params.get(key) ?? "";
  return {
    pagina_origem: document.referrer || "",
    url_atual: window.location.href,
    utm_source: get("utm_source"),
    utm_medium: get("utm_medium"),
    utm_campaign: get("utm_campaign"),
    utm_content: get("utm_content"),
    utm_term: get("utm_term"),
  };
}

/** Rota preparada para mensuração de conversões (integração futura). */
export const THANK_YOU_PATH = "/obrigado";
