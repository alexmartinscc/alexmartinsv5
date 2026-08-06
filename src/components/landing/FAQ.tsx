import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";

const FAQ_ITEMS = [
  {
    q: "O que é o consórcio e quais são as vantagens?",
    a: "O consórcio é uma modalidade de compra planejada em que pessoas com o mesmo objetivo formam um grupo para conquistar um bem ou serviço.\n\nTodos contribuem mensalmente para um fundo comum e, nas assembleias mensais, um ou mais participantes são contemplados por sorteio ou lance.\n\nEntre as principais vantagens estão a ausência de juros, maior poder de negociação na compra à vista e a possibilidade de realizar projetos com planejamento financeiro e menor custo quando comparado a outras modalidades de crédito.",
  },
  {
    q: "Como acontece a contemplação?",
    a: "A contemplação pode ocorrer de duas formas: por sorteio ou por lance.\n\nOs sorteios acontecem em todas as assembleias mensais.\n\nJá o lance permite antecipar parcelas para aumentar as chances de receber a carta de crédito antes.\n\nCada grupo possui regras próprias e não existe uma data garantida para contemplação.\n\nDurante nosso atendimento explicarei cada uma dessas possibilidades para que você compreenda como funciona esse processo.",
  },
  {
    q: "Como funcionam os lances?",
    a: "O lance é uma antecipação de parcelas utilizada para aumentar as chances de contemplação.\n\nDependendo do grupo podem existir modalidades como lance livre, lance fixo e outras previstas em regulamento.\n\nMeu trabalho é ajudá-lo a entender essas modalidades e definir a estratégia de lances mais adequada para o seu projeto, sempre considerando seus objetivos e seu planejamento financeiro.",
  },
  {
    q: "Consórcio ou financiamento?",
    a: "Não existe uma resposta única.\n\nTudo depende do seu objetivo, do prazo e da sua necessidade.\n\nO financiamento costuma atender quem precisa adquirir o bem imediatamente.\n\nO consórcio pode ser uma excelente alternativa para quem consegue planejar sua conquista e deseja reduzir o custo financeiro.\n\nMeu papel é ajudá-lo a compreender essas diferenças para escolher a estratégia mais adequada ao seu projeto.",
  },
  {
    q: "Consórcio de carro vale a pena?",
    a: "Pode ser uma excelente alternativa para quem deseja adquirir ou trocar de veículo com planejamento e economia.\n\nApós a contemplação, a carta de crédito permite negociar como comprador à vista, aumentando seu poder de negociação.\n\nCada projeto deve ser analisado individualmente para verificar se essa estratégia atende às suas necessidades.",
  },
  {
    q: "Consórcio imobiliário vale a pena?",
    a: "O consórcio imobiliário oferece diversas possibilidades.\n\nAlém da compra de imóveis novos e usados, ele pode ser utilizado para construção, reforma, aquisição de terrenos, quitação de financiamento e outras finalidades previstas em regulamento.\n\nPara quem consegue planejar seus projetos, costuma ser uma alternativa muito eficiente para reduzir o custo financeiro.",
  },
  {
    q: "O que é e como funciona o consórcio de serviços?",
    a: "O consórcio de serviços funciona da mesma forma que as demais modalidades.\n\nA diferença está na utilização da carta de crédito, que pode ser destinada a diversos objetivos, como reformas, energia solar, educação, viagens, procedimentos médicos, casamentos e outros serviços autorizados pela administradora.",
  },
  {
    q: "Como garantir uma aposentadoria mais tranquila utilizando o consórcio?",
    a: "Muitas pessoas utilizam o consórcio como estratégia para adquirir imóveis destinados à geração de renda por meio de aluguel.\n\nCom planejamento e visão de longo prazo, essa pode ser uma forma de construir uma fonte de renda complementar para o futuro e aumentar sua segurança financeira durante a aposentadoria.",
  },
  {
    q: "Vale a pena comprar uma carta contemplada?",
    a: "A carta contemplada pode ser uma boa alternativa para quem deseja utilizar o crédito rapidamente.\n\nNo entanto, é importante analisar cuidadosamente o contrato, a documentação e as condições da negociação.\n\nMeu papel é ajudá-lo a avaliar se essa realmente é a melhor estratégia para o seu projeto antes de tomar qualquer decisão.",
  },
  {
    q: "Ainda tenho dúvidas. O que devo fazer?",
    a: "Cada projeto possui objetivos, recursos e prazos diferentes.\n\nPor isso, prefiro primeiro entender sua necessidade antes de recomendar qualquer estratégia.\n\nEm uma conversa, explicarei como o consórcio funciona, responderei suas dúvidas e mostrarei como ele pode ajudá-lo a realizar o seu projeto.\n\nSe houver uma alternativa mais adequada para a sua situação, também vou orientá-lo com total transparência.",
  },
];

function FaqTrigger({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex flex-1 cursor-pointer items-center justify-between gap-4 rounded-2xl px-6 py-6 text-left text-base font-semibold leading-snug text-primary transition-all duration-200 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
      <div className={cn("px-6 pb-6 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background py-28 md:py-40">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
              Dúvidas Frequentes
            </h2>
            <p className="mt-5 leading-[1.8] text-muted-foreground">
              É natural ter dúvidas antes de tomar uma decisão importante.
            </p>
            <p className="mt-4 leading-[1.8] text-muted-foreground">
              Reuni aqui as perguntas que mais recebo dos meus clientes, respondidas de forma simples e objetiva.
            </p>
            <p className="mt-4 leading-[1.8] text-muted-foreground">
              Se a sua dúvida não estiver aqui, será um prazer conversar com você.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionPrimitive.Item
                key={item.q}
                value={item.q}
                className="rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-200 hover:border-gold/40 hover:shadow-card data-[state=open]:border-gold/50 data-[state=open]:bg-card"
              >
                <FaqTrigger>{item.q}</FaqTrigger>
                <FaqContent>
                  <div className="max-w-2xl space-y-4 leading-[1.9] text-muted-foreground">
                    {item.a.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                    {index === FAQ_ITEMS.length - 1 && (
                      <Button
                        asChild
                        size="lg"
                        className="mt-4 rounded-xl bg-gold px-8 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
                      >
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                          Conversar pelo WhatsApp
                        </a>
                      </Button>
                    )}
                  </div>
                </FaqContent>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>

          <div className="mt-10 rounded-2xl border border-gold/20 bg-primary-deep px-6 py-10 text-center md:px-10 md:py-12">
            <h3 className="text-xl font-bold text-primary-foreground md:text-2xl">
              Ainda ficou com alguma dúvida?
            </h3>
            <p className="mx-auto mt-4 max-w-lg leading-[1.8] text-primary-foreground/80">
              Cada projeto é único e merece uma estratégia personalizada.
            </p>
            <p className="mx-auto mt-3 max-w-lg leading-[1.8] text-primary-foreground/80">
              Se preferir, converse diretamente comigo. Será um prazer entender seus objetivos, esclarecer suas dúvidas e mostrar como o consórcio pode ajudá-lo a realizar seus projetos.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 rounded-xl bg-gold px-8 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Conversar pelo WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
