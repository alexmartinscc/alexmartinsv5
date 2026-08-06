import { createFileRoute } from "@tanstack/react-router";
import { CentralDeConhecimento } from "@/pages/CentralDeConhecimento";

const TITLE = "Central de Conhecimento | Alex Martins";
const DESCRIPTION =
  "Conteúdos claros sobre consórcio e estratégias financeiras para você entender cada detalhe antes de decidir como realizar o seu projeto.";
const URL = "https://alexmartinsv2.lovable.app/central-de-conhecimento";

export const Route = createFileRoute("/central-de-conhecimento")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: CentralDeConhecimento,
});
