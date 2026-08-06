import { createFileRoute } from "@tanstack/react-router";
import { ComoFuncionaConsorcio } from "@/pages/ComoFuncionaConsorcio";

const TITLE = "Como funciona o Consórcio? Guia Completo para Entender Antes de Contratar";
const DESCRIPTION =
  "Entenda como funciona o consórcio, como acontece a contemplação, o que são os lances, quais as vantagens e quando essa estratégia pode fazer sentido para o seu projeto.";
const URL = "https://alexmartinsv2.lovable.app/como-funciona-o-consorcio";

export const Route = createFileRoute("/como-funciona-o-consorcio")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Como funciona o consórcio? Guia completo para entender antes de contratar",
          description: DESCRIPTION,
          author: { "@type": "Person", name: "Alex Martins" },
          mainEntityOfPage: URL,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Início",
              item: "https://alexmartinsv2.lovable.app/",
            },
            { "@type": "ListItem", position: 2, name: "Central de Conhecimento", item: URL },
          ],
        }),
      },
    ],
  }),
  component: ComoFuncionaConsorcio,
});
