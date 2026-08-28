import { createFileRoute } from "@tanstack/react-router";
import { Igrejas } from "@/pages/Igrejas";
import { FAQ_IGREJAS } from "@/components/igrejas/FAQIgrejas";

const PAGE_URL = "https://www.alexmartins.cc/igrejas";
const OG_IMAGE = "https://www.alexmartins.cc/images/igrejas/og-igrejas.jpg";
const TITLE = "Consórcio para Igrejas e Pastores | Alex Martins";
const DESCRIPTION =
  "Planejamento com consórcio para igrejas realizarem projetos e pastores construírem patrimônio, renda e segurança para o futuro.";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_IGREJAS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a.join(" ") },
  })),
};

export const Route = createFileRoute("/igrejas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(FAQ_SCHEMA) }],
  }),
  component: Igrejas,
});
