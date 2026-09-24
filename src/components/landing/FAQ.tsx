import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    q: "Por que conversar com você antes de tomar uma decisão?",
    a: "Prazo, custo, disponibilidade de recursos e objetivo podem mudar completamente a forma de estruturar um projeto. Minha função é ajudar você a enxergar essas variáveis antes de assumir um compromisso.",
  },
  {
    q: "Você trabalha somente com consórcio?",
    a: "Meu trabalho começa pelo seu objetivo, não pelo produto. Primeiro entendo seu projeto e estruturo a estratégia. O consórcio é uma das ferramentas que utilizo profissionalmente por meio do portfólio da Ademicon.",
  },
  {
    q: "Consórcio tem juros?",
    a: "O consórcio não possui juros de financiamento. Existem custos próprios da modalidade, como taxa de administração e outros valores previstos no contrato. Por isso, a comparação deve considerar o custo e as características de cada alternativa.",
  },
  {
    q: "Que tipos de projetos você atende?",
    a: "Projetos relacionados a imóveis, construção, reformas, terrenos, veículos, formação de patrimônio, geração de renda e necessidades empresariais.",
  },
  {
    q: "Como funciona a primeira conversa?",
    a: "Você me apresenta o que pretende realizar, seu momento e suas prioridades. A partir daí, começamos a identificar quais caminhos merecem ser analisados.",
  },
  {
    q: "Qual é sua relação com a Ademicon?",
    a: "Sou Consultor Autorizado Ademicon e utilizo seu portfólio na estruturação e execução dos projetos em que atuo. Minha credencial pode ser verificada diretamente no site oficial da Ademicon.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background py-12 md:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
              Dúvidas frequentes
            </h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-3">
            {ITEMS.map((item) => (
              <AccordionPrimitive.Item
                key={item.q}
                value={item.q}
                className="rounded-2xl border border-border/70 bg-card shadow-soft transition-colors data-[state=open]:border-gold/50"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="group flex flex-1 cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left text-base font-semibold leading-snug text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 md:px-6 md:py-6">
                    {item.q}
                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold group-data-[state=open]:bg-gold group-data-[state=open]:text-gold-foreground">
                      <Plus
                        className="h-4 w-4 group-data-[state=open]:scale-0 group-data-[state=open]:opacity-0"
                        aria-hidden="true"
                      />
                      <Minus
                        className="absolute h-4 w-4 scale-0 opacity-0 group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100"
                        aria-hidden="true"
                      />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden text-sm motion-safe:data-[state=closed]:animate-accordion-up motion-safe:data-[state=open]:animate-accordion-down">
                  <p className="max-w-2xl px-5 pb-5 leading-[1.8] text-muted-foreground md:px-6 md:pb-6">
                    {item.a}
                  </p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>
      </div>
    </section>
  );
}
