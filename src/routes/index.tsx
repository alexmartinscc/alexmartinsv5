import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/Home";
import { Igrejas } from "@/pages/Igrejas";
import { buildIgrejasHead } from "@/lib/igrejas-seo";
import { IGREJAS_DOMAIN_URL, isIgrejasHost, resolveHostname } from "@/lib/hostname";

const SITE_URL = "https://www.alexmartins.cc/";
const OG_IMAGE = "https://www.alexmartins.cc/images/shared/og-image.jpg";
const TITLE = "Consultoria Patrimonial e Planejamento de Projetos | Alex Martins";
const DESCRIPTION =
  "Consultoria patrimonial para imóveis, veículos e patrimônio. Planejamento, estratégias sem juros e acompanhamento pessoal com Alex Martins.";

const FAQ_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    [
      "Por que conversar com você antes de tomar uma decisão?",
      "Prazo, custo, disponibilidade de recursos e objetivo podem mudar completamente a forma de estruturar um projeto. Minha função é ajudar você a enxergar essas variáveis antes de assumir um compromisso.",
    ],
    [
      "Você trabalha somente com consórcio?",
      "Meu trabalho começa pelo seu objetivo, não pelo produto. Primeiro entendo seu projeto e estruturo a estratégia. O consórcio é uma das ferramentas que utilizo profissionalmente por meio do portfólio da Ademicon.",
    ],
    [
      "Consórcio tem juros?",
      "O consórcio não possui juros de financiamento. Existem custos próprios da modalidade, como taxa de administração e outros valores previstos no contrato. Por isso, a comparação deve considerar o custo e as características de cada alternativa.",
    ],
    [
      "Que tipos de projetos você atende?",
      "Projetos relacionados a imóveis, construção, reformas, terrenos, veículos, formação de patrimônio, geração de renda e necessidades empresariais.",
    ],
    [
      "Como funciona a primeira conversa?",
      "Você me apresenta o que pretende realizar, seu momento e suas prioridades. A partir daí, começamos a identificar quais caminhos merecem ser analisados.",
    ],
    [
      "Qual é sua relação com a Ademicon?",
      "Sou Consultor Autorizado Ademicon e utilizo seu portfólio na estruturação e execução dos projetos em que atuo. Minha credencial pode ser verificada diretamente no site oficial da Ademicon.",
    ],
  ].map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text },
  })),
};

export const Route = createFileRoute("/")({
  loader: async () => ({ igrejasDomain: isIgrejasHost(resolveHostname()) }),
  head: ({ loaderData }) => {
    if (loaderData?.igrejasDomain) {
      return buildIgrejasHead({ pageUrl: IGREJAS_DOMAIN_URL, robots: "noindex, follow" });
    }
    return {
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(FAQ_PAGE_SCHEMA),
        },
      ],
      meta: [
        { title: TITLE },
        { name: "description", content: DESCRIPTION },
        { name: "robots", content: "index, follow" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: SITE_URL },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: TITLE },
        { name: "twitter:description", content: DESCRIPTION },
        { name: "twitter:image", content: OG_IMAGE },
      ],
      links: [{ rel: "canonical", href: SITE_URL }],
    };
  },
  component: RootPage,
});

function RootPage() {
  const { igrejasDomain } = Route.useLoaderData();
  return igrejasDomain ? <Igrejas /> : <Home />;
}
