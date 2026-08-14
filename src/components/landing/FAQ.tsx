import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";

type FaqBlock = string | { list: string[] };

const FAQ_ITEMS: { q: string; content: FaqBlock[] }[] = [
  {
    q: "E se eu não tiver certeza de que o consórcio é a melhor opção para mim?",
    content: [
      "Perfeito.",
      "É justamente para isso que serve nossa primeira conversa.",
      "Vamos entender seu objetivo, esclarecer suas dúvidas e avaliar juntos as alternativas antes de qualquer decisão.",
      "Muitas pessoas descobrem possibilidades que nunca haviam considerado.",
    ],
  },
  {
    q: "O consórcio demora?",
    content: [
      "Depende da estratégia escolhida.",
      "O consórcio oferece alternativas para quem possui objetivos de curto, médio ou longo prazo.",
      "Na nossa conversa, vou entender o seu momento e apresentar as estratégias mais adequadas para que você conquiste seu patrimônio da forma mais inteligente.",
    ],
  },
  {
    q: "Prefiro financiar para sair do aluguel. Vale a pena considerar o consórcio?",
    content: [
      "Pode valer muito a pena.",
      "Embora o financiamento permita a compra imediata, ele normalmente possui um custo financeiro maior ao longo do contrato.",
      "Dependendo do seu objetivo e do seu planejamento, pode ser mais vantajoso continuar pagando aluguel por um período e utilizar o consórcio para conquistar o imóvel com um custo total menor.",
      "Na nossa conversa, podemos comparar as alternativas e identificar qual faz mais sentido para o seu momento.",
    ],
  },
  {
    q: "O consórcio é indicado apenas para quem quer comprar um imóvel?",
    content: [
      "Não.",
      "O consórcio pode ser utilizado para muito mais do que imóveis e veículos.",
      "Dependendo da modalidade, ele também pode atender objetivos como construção, reforma, viagens, festas, intercâmbio, fertilização in vitro, cirurgia estética, aquisição de equipamentos agrícolas, médicos, hospitalares, industriais, maquinários e diversos outros projetos.",
      "Na nossa conversa, posso mostrar quais possibilidades fazem sentido para o seu objetivo.",
    ],
  },
  {
    q: "O consórcio é vantajoso para empresas de qualquer porte?",
    content: [
      "Sim.",
      "O consórcio pode ser uma excelente estratégia para empresas que desejam crescer preservando o caixa da operação.",
      "Para pequenas e médias empresas:",
      {
        list: [
          "Renovação de frotas, máquinas, equipamentos e imóveis.",
          "Preservação do capital de giro.",
          "Planejamento da expansão sem recorrer aos juros bancários.",
        ],
      },
      "Para empresas tributadas pelo Lucro Real:",
      "Dependendo da operação e da forma de contabilização, o consórcio pode oferecer vantagens fiscais previstas na legislação. Esse ponto deve ser avaliado juntamente com a contabilidade da empresa.",
      "Na nossa conversa, posso mostrar exemplos práticos de aplicação para o seu negócio.",
    ],
  },
  {
    q: "Posso utilizar o consórcio para investir?",
    content: [
      "Sim.",
      "Muitas pessoas utilizam o consórcio como estratégia para construir patrimônio.",
      "Dependendo do objetivo, ele pode ser utilizado para adquirir imóveis destinados à geração de renda, ampliar o patrimônio ou aproveitar oportunidades com uma carta contemplada.",
      "Na nossa conversa, posso mostrar algumas estratégias utilizadas por investidores.",
    ],
  },
  {
    q: "As parcelas do consórcio sobem muito?",
    content: [
      "O seu crédito é atualizado anualmente para preservar o seu poder de compra.",
      "Por isso, as parcelas também recebem reajustes previstos em contrato.",
      "Na prática, essa atualização mantém o valor da sua carta de crédito alinhado ao mercado, permitindo que você continue tendo condições de adquirir o bem desejado.",
      "Durante nossa conversa, explicarei como esse reajuste funciona e por que, na maioria dos casos, ele representa uma vantagem para o consorciado.",
    ],
  },
  {
    q: "E se eu tiver um imprevisto e não puder pagar?",
    content: [
      "Imprevistos podem acontecer.",
      "O regulamento do consórcio prevê alternativas que oferecem flexibilidade para ajudar o cliente em diferentes situações.",
      "Se isso acontecer, vou orientar você sobre as opções disponíveis para encontrar a melhor solução.",
    ],
  },
  {
    q: "Existem taxas ou custos escondidos?",
    content: [
      "Não.",
      "Os custos do consórcio são simples, previsíveis e apresentados com total transparência.",
      "Durante nossa conversa, explicarei cada item para que você tome sua decisão com segurança.",
    ],
  },
  {
    q: "A primeira conversa tem algum custo ou compromisso?",
    content: [
      "Nenhum.",
      "A primeira conversa é gratuita e sem compromisso.",
      "Meu objetivo é entender seu projeto, esclarecer suas dúvidas e avaliar quais estratégias fazem sentido para o seu momento.",
      "Depois disso, a decisão será totalmente sua.",
    ],
  },
];

function FaqTrigger({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex flex-1 cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left text-base font-semibold leading-snug text-primary transition-all duration-200 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:px-6 md:py-6",
          className,
        )}
        {...props}
      >
        {children}
        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-colors duration-200 group-hover:bg-gold/20 group-data-[state=open]:bg-gold group-data-[state=open]:text-gold-foreground">
          <Plus className="h-4 w-4 transition-all duration-200 group-data-[state=open]:scale-0 group-data-[state=open]:opacity-0" aria-hidden="true" />
          <Minus className="absolute h-4 w-4 scale-0 opacity-0 transition-all duration-200 group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100" aria-hidden="true" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function FaqContent({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("px-5 pb-5 pt-0 md:px-6 md:pb-6", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

function FaqAnswer({ blocks }: { blocks: FaqBlock[] }) {
  return (
    <div className="max-w-2xl space-y-3 leading-[1.8] text-muted-foreground">
      {blocks.map((block, index) =>
        typeof block === "string" ? (
          <p key={index}>{block}</p>
        ) : (
          <ul key={index} className="list-disc space-y-1 pl-5">
            {block.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background py-16 md:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
              Tire suas dúvidas antes de decidir.
            </h2>
            <p className="mt-5 leading-[1.8] text-muted-foreground">
              Estas são algumas das perguntas que mais recebo de pessoas que estão avaliando um consórcio pela primeira vez.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionPrimitive.Item
                key={item.q}
                value={item.q}
                className="rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-200 hover:border-gold/40 hover:shadow-card data-[state=open]:border-gold/50 data-[state=open]:bg-card"
              >
                <FaqTrigger>{item.q}</FaqTrigger>
                <FaqContent>
                  <div className="space-y-4">
                    <FaqAnswer blocks={item.content} />
                    {index === FAQ_ITEMS.length - 1 && (
                      <Button
                        asChild
                        size="lg"
                        className="mt-4 rounded-xl bg-gold px-8 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
                      >
                        <a href="#cta">Quero conversar sobre meu projeto</a>
                      </Button>
                    )}
                  </div>
                </FaqContent>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>
      </div>
    </section>
  );
}
