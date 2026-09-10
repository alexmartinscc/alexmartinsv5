import { Coins, CalendarDays, Handshake, ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhyConsorcio, MenorCustoContent, type WhyItem } from "@/components/landing/WhyConsorcio";

const ITEMS: WhyItem[] = [
  {
    id: "menor-custo",
    icon: Coins,
    title: "Menor custo",
    lead: "Sem juros de financiamento e sem precisar comprometer seu capital com uma entrada para começar.",
    hint: "Veja a comparação",
    content: <MenorCustoContent />,
  },
  {
    id: "planejamento",
    icon: CalendarDays,
    title: "Planejamento",
    lead: "Estratégias para necessidades de curto, médio e longo prazo.",
    content: (
      <p className="max-w-2xl text-sm leading-[1.7] text-muted-foreground">
        Seu projeto pode exigir uma solução mais imediata ou permitir um planejamento para os
        próximos anos. Por isso, primeiro entendemos seu objetivo e prazo para então avaliar as
        alternativas disponíveis.
      </p>
    ),
  },
  {
    id: "poder-de-compra",
    icon: Handshake,
    title: "Poder de compra",
    lead: "Com a carta contemplada, você negocia com poder de compra à vista.",
    content: (
      <p className="max-w-2xl text-sm leading-[1.7] text-muted-foreground">
        Depois da contemplação e da liberação do crédito, você escolhe o bem e pode negociar a
        compra como comprador à vista, buscando melhores condições na negociação.
      </p>
    ),
  },
  {
    id: "flexibilidade",
    icon: ArrowLeftRight,
    title: "Flexibilidade",
    lead: "Uma mesma estratégia pode atender diferentes objetivos patrimoniais.",
    content: (
      <p className="max-w-2xl text-sm leading-[1.7] text-muted-foreground">
        A carta pode ser utilizada para adquirir um bem, estruturar estratégias de alavancagem
        patrimonial ou aproveitar oportunidades relacionadas à valorização e à venda de uma carta
        contemplada.
      </p>
    ),
  },
];

export function PorQueConsorcioSaude() {
  return (
    <WhyConsorcio
      eyebrow="Por que consórcio?"
      title="Por que o consórcio é uma alternativa inteligente para construir patrimônio?"
      intro="Uma forma planejada de realizar grandes conquistas, preservar capacidade financeira e ampliar patrimônio sem os juros de um financiamento."
      items={ITEMS}
      footer={
        <Button
          asChild
          size="lg"
          className="h-auto whitespace-normal rounded-xl bg-gold px-8 py-3 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
        >
          <a href="#contato" data-cta-location="consorcio" data-cta-name="entender_estrategia">
            Quero entender qual estratégia atende meu prazo
          </a>
        </Button>
      }
    />
  );
}
