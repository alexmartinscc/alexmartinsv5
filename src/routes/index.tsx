import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Consultor Patrimonial | Planejamento com método" },
      {
        name: "description",
        content:
          "Consultoria patrimonial com método claro. Representante autorizado Ademicon.",
      },
      { property: "og:title", content: "Consultor Patrimonial | Planejamento com método" },
      {
        property: "og:description",
        content:
          "Consultoria patrimonial com método claro. Representante autorizado Ademicon.",
      },
    ],
  }),
  component: Home,
});
