import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Martins | Consórcio Imobiliário e Conquista Patrimonial" },
      {
        name: "description",
        content:
          "Consultor Autorizado Ademicon. Conquiste imóveis e patrimônio com consórcio: sem juros, com estratégia e acompanhamento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:title",
        content: "Alex Martins | Consórcio Imobiliário e Conquista Patrimonial",
      },
      {
        property: "og:description",
        content:
          "Consultor Autorizado Ademicon. Conquiste imóveis e patrimônio com consórcio: sem juros, com estratégia e acompanhamento.",
      },
    ],
  }),
  component: Home,
});
