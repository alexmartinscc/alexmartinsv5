import { createFileRoute } from "@tanstack/react-router";
import { Igrejas } from "@/pages/Igrejas";
import { buildIgrejasHead, IGREJAS_CANONICAL_URL } from "@/lib/igrejas-seo";

export const Route = createFileRoute("/igrejas")({
  head: () => buildIgrejasHead({ pageUrl: IGREJAS_CANONICAL_URL, robots: "index, follow" }),
  component: Igrejas,
});
