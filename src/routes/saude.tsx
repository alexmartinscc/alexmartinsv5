import { createFileRoute } from "@tanstack/react-router";
import { Saude } from "@/pages/Saude";
import { FAQ_SAUDE } from "@/components/saude/FAQSaude";

const PAGE_URL = "https://www.alexmartins.cc/saude";
const OG_IMAGE = "https://www.alexmartins.cc/og-image.jpg";
const TITLE = "Planejamento Patrimonial para Profissionais da Saúde | Alex Martins";
const DESCRIPTION =
  "Estratégias para profissionais da saúde que desejam construir patrimônio, preservar capital, expandir seus projetos e criar novas fontes de renda.";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_SAUDE.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a.join(" ") },
  })),
};

export const Route = createFileRoute("/saude")({
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
  component: Saude,
});
