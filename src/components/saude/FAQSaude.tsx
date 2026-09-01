import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

type FaqItem = { q: string; a: string[] };

export const FAQ_SAUDE: FaqItem[] = [
  {
    q: "O consórcio faz sentido mesmo para quem já possui dinheiro investido?",
    a: [
      "Sim. Uma das estratégias é utilizar o consórcio como ferramenta de alavancagem patrimonial, preservando parte do capital investido e mantendo esse patrimônio com potencial de continuar gerando rendimentos.",
      "Assim, você pode ampliar seu poder de compra e construir novos ativos sem precisar concentrar todo o patrimônio financeiro em uma única aquisição.",
    ],
  },
  {
    q: "Consórcio demora muito para ser contemplado?",
    a: [
      "Não existe uma única estratégia para todos os projetos. Há alternativas para necessidades de curto, médio e longo prazo.",
      "O primeiro passo é entender o que você deseja realizar e em quanto tempo. A partir disso, avaliamos as possibilidades disponíveis e estruturamos uma estratégia adequada ao seu objetivo.",
      "É exatamente essa análise que fazemos na conversa inicial.",
    ],
  },
  {
    q: "Posso utilizar essas estratégias para minha clínica ou consultório?",
    a: [
      "Sim. Existem possibilidades para imóveis comerciais, construção, reforma, veículos, máquinas, equipamentos e outros projetos relacionados à sua atividade.",
      "A estratégia será definida de acordo com seu objetivo.",
    ],
  },
  {
    q: "Posso utilizar o consórcio para construir patrimônio e gerar renda?",
    a: [
      "Sim. A aquisição planejada de imóveis pode fazer parte de uma estratégia progressiva para ampliar patrimônio e desenvolver novas fontes de renda ao longo do tempo.",
    ],
  },
  {
    q: "Tenho um imóvel quitado. Posso utilizá-lo para obter crédito?",
    a: [
      "Sim. Existem possibilidades de geração de crédito utilizando seu imóvel como garantia, sem precisar vender o patrimônio já conquistado.",
      "Esses recursos podem atender necessidades de curto, médio ou longo prazo, de acordo com seu objetivo e a estratégia definida.",
    ],
  },
  {
    q: "Como saber qual estratégia faz mais sentido para mim?",
    a: [
      "Esse é justamente o objetivo da conversa inicial.",
      "Primeiro entendemos o que você quer conquistar, os recursos disponíveis e o prazo. Depois avaliamos as alternativas e estruturamos o caminho mais adequado ao seu projeto.",
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
