import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

type FaqItem = { q: string; a: string[] };

export const FAQ_IGREJAS: FaqItem[] = [
  {
    q: "Uma igreja pode contratar consórcio?",
    a: [
      "Sim. Pessoas jurídicas, incluindo instituições religiosas, podem participar de grupos de consórcio, atendendo aos requisitos de documentação e análise cadastral da administradora.",
      "A contratação é feita em nome da instituição, com a documentação e as autorizações internas exigidas pelo estatuto da igreja.",
    ],
  },
  {
    q: "O consórcio é realmente sem juros?",
    a: [
      "Sim. No consórcio não há cobrança de juros como em um financiamento. O plano possui taxa de administração e, conforme a modalidade contratada, outros componentes previstos em contrato.",
      "Por não existir a cobrança dos juros de um financiamento, o consórcio pode ser uma alternativa econômica e planejada para adquirir um bem.",
    ],
  },
  {
    q: "A igreja precisa dar entrada?",
    a: [
      "Não. O plano pode ser iniciado sem entrada. O lance é opcional, pode ser ofertado desde a primeira assembleia e faz parte das estratégias de contemplação, não sendo uma exigência para participar do grupo.",
    ],
  },
  {
    q: "A igreja pode comprar terreno e construir?",
    a: [
      "Sim. O crédito imobiliário pode ser utilizado para aquisição de terreno, construção ou ambos, conforme as regras do contrato e a análise da administradora.",
    ],
  },
  {
    q: "Podemos utilizar o crédito para reforma ou ampliação?",
    a: [
      "Sim, dentro das modalidades e condições previstas em contrato. A destinação do crédito é definida no momento da utilização, após a contemplação, com a devida comprovação.",
    ],
  },
  {
    q: "É possível adquirir vans, automóveis, utilitários ou equipamentos?",
    a: [
      "Sim. Existem modalidades para veículos leves, utilitários e pesados, que podem atender às necessidades de transporte e serviço da igreja.",
      "A Ademicon também possui modalidades para outros bens móveis duráveis e equipamentos, permitindo avaliar itens adequados às necessidades da instituição, de acordo com as regras e a categoria do consórcio contratado.",
    ],
  },
  {
    q: "Como funciona a contemplação?",
    a: [
      "A contemplação acontece por sorteio ou por lance, nas assembleias do grupo.",
      "Meu papel é ajudar a igreja a entender o processo, acompanhar as assembleias e organizar estratégias de lance conforme a realidade da instituição.",
    ],
  },
  {
    q: "Um pastor pode usar o consórcio para construir patrimônio?",
    a: [
      "Sim. Como pessoa física, tanto o pastor quanto os membros da igreja podem utilizar o consórcio para adquirir imóveis, terrenos, construir ou comprar veículos, estruturando o projeto de acordo com sua renda e seus objetivos.",
      "O consórcio pode fazer parte de uma estratégia de construção patrimonial de médio e longo prazo.",
    ],
  },
  {
    q: "Como imóveis podem fazer parte do planejamento para aposentadoria ou jubilação?",
    a: [
      "Imóveis podem compor uma estratégia de longo prazo, seja para uso próprio, seja para gerar renda complementar por locação.",
    ],
  },
  {
    q: "Você pode apresentar o projeto para a diretoria ou liderança da igreja?",
    a: [
      "Sim. Posso participar de uma conversa com a diretoria, o conselho ou a liderança administrativa para explicar o funcionamento, esclarecer dúvidas e analisar possibilidades.",
      "O encontro pode ser por videochamada, WhatsApp ou presencial, quando aplicável.",
    ],
  },
];

export function FAQIgrejas() {
  return (
    <section id="faq" className="scroll-mt-24 bg-secondary py-16 md:py-24">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Perguntas frequentes</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Dúvidas de igrejas e pastores
          </h2>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-8 max-w-3xl">
          <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-3">
            {FAQ_IGREJAS.map((item, index) => (
              <AccordionPrimitive.Item
                key={item.q}
                value={`item-${index}`}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="group flex w-full items-start justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-primary transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-lg">
                    <span>{item.q}</span>
                    <span className="mt-0.5 shrink-0 text-gold" aria-hidden="true">
                      <Plus className="h-5 w-5 group-data-[state=open]:hidden" />
                      <Minus className="hidden h-5 w-5 group-data-[state=open]:block" />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="space-y-3 px-5 pb-5 leading-[1.7] text-muted-foreground">
                    {item.a.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
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
