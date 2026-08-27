import { createFileRoute } from "@tanstack/react-router";
import { Obrigado } from "@/pages/Obrigado";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Projeto recebido | Alex Martins Consultoria Patrimonial" },
      {
        name: "description",
        content:
          "Recebi as informações do seu projeto. Em breve entro em contato para combinarmos os próximos passos.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Projeto recebido | Alex Martins Consultoria Patrimonial" },
      {
        property: "og:description",
        content: "Recebi as informações do seu projeto e entrarei em contato em breve.",
      },
    ],
  }),
  component: Obrigado,
});
