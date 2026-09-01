import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

type FaqItem = { q: string; a: string[] };

export const FAQ_SAUDE: FaqItem[] = [
  {
    q: "Consórcio faz sentido mesmo para quem já possui dinheiro investido?",
    a: [
      "Sim. O ponto não é apenas como comprar. É avaliar se faz sentido utilizar todo o capital disponível ou preservar parte dos recursos para continuar investindo e aproveitando outras oportunidades.",
    ],
  },
  {
    q: "Posso utilizar essas estratégias para minha clínica ou consultório?",
    a: [
      "Sim. Existem soluções para imóveis comerciais, construção, reforma, equipamentos, veículos e diferentes projetos relacionados ao crescimento da atividade profissional. A estratégia depende do seu projeto.",
    ],
  },
  {
    q: "Posso utilizar consórcio para construir patrimônio e gerar renda?",
    a: [
      "Sim. Imóveis adquiridos de forma planejada podem fazer parte de uma estratégia progressiva de construção patrimonial e geração de novas fontes de renda.",
    ],
  },
  {
    q: "Tenho um imóvel quitado. Posso utilizá-lo para obter crédito?",
    a: [
      "Sim. Por meio do Home Equity, seu imóvel pode ser utilizado como garantia para acessar crédito sem precisar ser vendido.",
    ],
  },
  {
    q: "Como saber qual estratégia faz mais sentido para mim?",
    a: [
      "Começamos pelo seu objetivo. Depois analisamos patrimônio, recursos disponíveis, prazo, capacidade financeira e alternativas possíveis. A partir disso, estruturamos a estratégia.",
    ],
  },
];

export function FAQSaude() {
  return (
    <section id="faq" className="scroll-mt-24 bg-secondary py-14 md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">FAQ</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Perguntas frequentes
          </h2>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-8 max-w-3xl">
          <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-3">
            {FAQ_SAUDE.map((item, index) => (
              <AccordionPrimitive.Item
                key={item.q}
                value={`item-${index}`}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger asChild>
                    <button
                      type="button"
                      id={`faq-saude-trigger-${index}`}
                      aria-controls={`faq-saude-panel-${index}`}
                      className="group flex w-full items-start justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-primary transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-lg"
                    >
                      <span>{item.q}</span>
                      <span className="mt-0.5 shrink-0 text-gold" aria-hidden="true">
                        <Plus className="h-5 w-5 group-data-[state=open]:hidden" />
                        <Minus className="hidden h-5 w-5 group-data-[state=open]:block" />
                      </span>
                    </button>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content forceMount asChild>
                  <div
                    id={`faq-saude-panel-${index}`}
                    data-faq-answer
                    aria-labelledby={`faq-saude-trigger-${index}`}
                    className="overflow-hidden data-[state=closed]:h-0 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  >
                    <div className="space-y-3 px-5 pb-5 leading-[1.7] text-muted-foreground">
                      {item.a.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>
      </div>
    </section>
  );
}
