import { FAQ_IGREJAS } from "@/components/igrejas/FAQIgrejas";

export const IGREJAS_TITLE = "Consórcio para Igrejas e Pastores | Alex Martins";
export const IGREJAS_DESCRIPTION =
  "Planejamento com consórcio para igrejas realizarem projetos e pastores construírem patrimônio, renda e segurança para o futuro.";
export const IGREJAS_OG_IMAGE = "https://www.alexmartins.cc/images/igrejas/og-igrejas.jpg";
export const IGREJAS_CANONICAL_URL = "https://www.alexmartins.cc/igrejas";

export const IGREJAS_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_IGREJAS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a.join(" ") },
  })),
};

/**
 * Metadados da página Igrejas.
 * O domínio principal de SEO continua sendo alexmartins.cc/igrejas (index, follow).
 * O domínio comercial serve o mesmo conteúdo como noindex, follow.
 */
export function buildIgrejasHead(options: { pageUrl: string; robots: string }) {
  const { pageUrl, robots } = options;
  return {
    meta: [
      { title: IGREJAS_TITLE },
      { name: "description", content: IGREJAS_DESCRIPTION },
      { name: "robots", content: robots },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:title", content: IGREJAS_TITLE },
      { property: "og:description", content: IGREJAS_DESCRIPTION },
      { property: "og:image", content: IGREJAS_OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: IGREJAS_TITLE },
      { name: "twitter:description", content: IGREJAS_DESCRIPTION },
      { name: "twitter:image", content: IGREJAS_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(IGREJAS_FAQ_SCHEMA) }],
  };
}
