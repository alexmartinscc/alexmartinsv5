import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type FaqBlock = string | { list: string[] } | { sub: string; text: string };

type FaqItem = {
  q: string;
  content: FaqBlock[];
  /** Destaque + CTA de simulação ao final da resposta */
  highlight?: string;
  cta?: string;
};

type FaqGroup = {
  label: string;
  items: FaqItem[];
};

const FAQ_GROUPS: FaqGroup[] = [
  {
    label: "Mais procuradas",
    items: [
      {
        q: "O consórcio é seguro?",
        content: [
          "Sim. O sistema de consórcios é regulamentado e fiscalizado pelo Banco Central do Brasil, que também é responsável por autorizar e supervisionar as administradoras. Por isso, um dos primeiros cuidados é verificar se a empresa escolhida está devidamente autorizada.",
          "No meu atendimento, você conta com a estrutura da Ademicon e também pode verificar minha autorização como consultor diretamente no site oficial da empresa.",
        ],
      },
      {
        q: "Consórcio realmente custa menos que financiamento?",
        content: [
          "O consórcio não cobra juros de financiamento. Seu custo inclui a taxa de administração e os demais componentes previstos no contrato. No financiamento, além dos juros sobre o saldo devedor, podem existir TR, seguros, tarifas e outros componentes do CET.",
          "Por isso, a melhor comparação não é somente entre parcelas, mas entre quanto você precisa desembolsar ao longo de todo o projeto.",
        ],
        highlight: "Quer saber como essa diferença ficaria no seu caso?",
        cta: "Quero simular meu projeto",
      },
      {
        q: "Preciso dar entrada para fazer um consórcio?",
        content: [
          "Não. No consórcio você pode começar seu plano sem entrada. Isso é diferente do financiamento imobiliário tradicional, no qual normalmente uma parte do valor do imóvel precisa ser paga com recursos próprios.",
          "E existe uma diferença importante: lance não é entrada. Se você já possui algum capital disponível, podemos avaliar se é melhor mantê-lo investido, preservá-lo para outros projetos ou utilizá-lo posteriormente dentro de uma estratégia de lance.",
        ],
      },
      {
        q: "Como funciona a contemplação?",
        content: [
          "A contemplação é o momento em que o crédito fica disponível para utilização e pode acontecer de duas formas: sorteio ou lance, nas assembleias do grupo. Não existe promessa de uma data específica para contemplação.",
          "Meu trabalho é ajudar você a acompanhar esse processo, entender as possibilidades e organizar estratégias de lance de acordo com seu projeto, para que esteja preparado para aproveitar as oportunidades ao longo do plano.",
        ],
      },
      {
        q: "Posso usar meu FGTS no consórcio?",
        content: [
          "Sim. No consórcio imobiliário, o FGTS pode ser uma ferramenta importante dentro da estratégia, desde que sejam atendidas as regras aplicáveis ao uso do Fundo.",
          "Dependendo da situação, o saldo pode ser utilizado para:",
          {
            list: [
              "ofertar lance;",
              "complementar o valor da carta de crédito para aquisição do imóvel;",
              "amortizar ou quitar o saldo devedor;",
              "pagar parte das prestações, conforme as regras vigentes.",
            ],
          },
          "Se você tem saldo de FGTS, podemos analisar como utilizá-lo dentro do seu projeto.",
        ],
      },
      {
        q: "E se eu precisar do imóvel ou do crédito em menos tempo?",
        content: [
          "O prazo do projeto é uma das primeiras coisas que precisamos entender.",
          "Dependendo da sua situação, podemos avaliar estratégias de lance e outras formas de estruturar o consórcio. Também existem operações com cotas já contempladas, sujeitas à disponibilidade, análise e aprovação da administradora.",
          "Por isso, antes de definir uma estratégia, precisamos entender quanto você precisa, para quê e em qual prazo.",
        ],
      },
    ],
  },
  {
    label: "Imóveis e patrimônio",
    items: [
      {
        q: "Posso usar o consórcio para comprar um imóvel e colocar para alugar?",
        content: [
          "Sim. A carta de crédito imobiliário pode ser utilizada para aquisição de imóvel dentro das condições previstas no contrato. Depois da aquisição, o imóvel pode fazer parte da sua estratégia patrimonial e ser destinado à locação.",
          "Esse é um dos caminhos que podemos trabalhar para transformar renda de hoje em patrimônio capaz de gerar renda no futuro.",
        ],
      },
      {
        q: "Posso comprar mais de um imóvel com a mesma carta contemplada?",
        content: [
          "Sim, desde que a operação esteja dentro das regras da modalidade contratada e do limite do crédito disponível.",
          "Uma carta de maior valor, por exemplo, pode permitir a aquisição de dois ou mais imóveis de menor valor, dependendo da documentação, dos valores envolvidos e da aprovação da operação.",
        ],
      },
      {
        q: "Posso usar o crédito para quitar um financiamento imobiliário?",
        content: [
          "Sim. Depois da contemplação, o crédito pode ser utilizado para quitar um financiamento imobiliário existente, desde que a operação esteja de acordo com as regras aplicáveis e com as condições do contrato.",
          "Essa possibilidade pode ser interessante para quem já possui um financiamento e quer avaliar uma estratégia para reduzir sua exposição aos juros ao longo do tempo.",
        ],
      },
      {
        q: "O que acontece se eu for contemplado e não quiser usar o crédito naquele momento?",
        content: [
          "Você não precisa comprar o bem imediatamente.",
          "Depois da contemplação, o crédito pode permanecer disponível de acordo com as regras do plano até que você decida quando e como utilizá-lo. Enquanto isso, os recursos seguem o tratamento financeiro previsto contratualmente.",
          "Isso oferece mais liberdade para escolher o momento e a oportunidade de compra.",
        ],
      },
      {
        q: "Posso vender ou transferir minha cota contemplada?",
        content: [
          "Sim. A cota pode ser transferida para outra pessoa, desde que sejam cumpridas as regras aplicáveis e o novo titular seja aprovado pela administradora.",
          "Na Ademicon, também existe a possibilidade de encaminhar a cota contemplada para avaliação por meio da Contemplay, parceira exclusiva da Ademicon.",
          "A eventual proposta depende das características da cota e das condições de mercado no momento da análise.",
        ],
      },
    ],
  },
  {
    label: "Empresas",
    items: [
      {
        q: "Como o consórcio pode ajudar minha empresa?",
        content: [
          "O consórcio pode ajudar sua empresa a adquirir patrimônio e ativos de forma planejada, sem os juros de um financiamento tradicional e sem precisar comprometer uma grande parcela do caixa com entrada.",
          "Dependendo da modalidade contratada, o crédito pode ser utilizado para ativos como:",
          {
            list: [
              "imóveis comerciais;",
              "veículos e utilitários;",
              "caminhões;",
              "máquinas;",
              "equipamentos;",
              "máquinas agrícolas;",
              "outros bens compatíveis com a modalidade contratada.",
            ],
          },
          {
            sub: "Preservação de caixa",
            text: "Em vez de descapitalizar a empresa com uma entrada elevada, o capital pode continuar disponível para estoque, pessoas, marketing, capital de giro ou outras necessidades do negócio.",
          },
          {
            sub: "Planejamento patrimonial e contábil",
            text: "Quando o bem adquirido atende aos critérios contábeis, ele pode passar a integrar o ativo da empresa. Bens do ativo imobilizado utilizados na operação podem estar sujeitos ao reconhecimento contábil de depreciação ao longo de sua vida útil.",
          },
          {
            sub: "Possíveis efeitos tributários",
            text: "Dependendo do regime tributário, do tipo de ativo e da forma como ele é utilizado pela empresa, podem existir efeitos fiscais relacionados à depreciação ou a outros tratamentos previstos na legislação.",
          },
          "O tratamento contábil e tributário depende da realidade de cada empresa, do regime de tributação e do ativo adquirido. Essas questões devem ser avaliadas com o contador da empresa. Meu papel é ajudar a estruturar a estratégia de aquisição e trabalhar de forma alinhada com essa orientação contábil.",
        ],
      },
    ],
  },
  {
    label: "Meu atendimento",
    items: [
      {
        q: "O que acontece depois que eu contrato?",
        content: [
          "Meu trabalho não termina com a assinatura do contrato.",
          "Cada cliente da minha carteira conta com um canal direto comigo para tirar dúvidas, receber informações importantes e acompanhar o andamento do plano.",
          "Também ajudo na organização de boletos, assembleias e estratégias de lance e, quando previamente combinado, faço a aplicação do lance para que você não perca uma oportunidade por falta de tempo ou esquecimento.",
          "Você continua cuidando da sua família, profissão ou negócio, enquanto eu ajudo a acompanhar os detalhes do seu projeto de consórcio.",
        ],
      },
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
      className="overflow-hidden text-sm motion-safe:data-[state=closed]:animate-accordion-up motion-safe:data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("px-5 pb-5 pt-0 md:px-6 md:pb-6", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

function FaqAnswer({ blocks, highlight, cta }: { blocks: FaqBlock[]; highlight?: string; cta?: string }) {
  return (
    <div className="max-w-2xl space-y-3 leading-[1.8] text-muted-foreground">
      {blocks.map((block, index) => {
        if (typeof block === "string") {
          return <p key={index}>{block}</p>;
        }
        if ("list" in block) {
          return (
            <ul key={index} className="list-disc space-y-1 pl-5">
              {block.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <div key={index} className="pt-1">
            <p className="font-semibold text-primary">{block.sub}</p>
            <p className="mt-1">{block.text}</p>
          </div>
        );
      })}
      {highlight && cta && (
        <div className="pt-2">
          <p className="font-semibold text-primary">{highlight}</p>
          <Button
            asChild
            size="lg"
            className="mt-3 rounded-xl bg-gold px-8 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
          >
            <a href="#contato" data-cta-location="faq" data-cta-name="simular_projeto">{cta}</a>
          </Button>
        </div>
      )}
    </div>
  );
}

function FaqGroupBlock({ group }: { group: FaqGroup }) {
  return (
    <div>
      <h3 className="mb-3 mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {group.label}
      </h3>
      <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-3">
        {group.items.map((item) => (
          <AccordionPrimitive.Item
            key={item.q}
            value={item.q}
            className="rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-200 hover:border-gold/40 hover:shadow-card data-[state=open]:border-gold/50 data-[state=open]:bg-card"
          >
            <FaqTrigger>{item.q}</FaqTrigger>
            <FaqContent>
              <FaqAnswer blocks={item.content} highlight={item.highlight} cta={item.cta} />
            </FaqContent>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    </div>
  );
}

export function FAQ() {
  const [showAll, setShowAll] = React.useState(false);
  const [firstGroup, ...extraGroups] = FAQ_GROUPS;

  return (
    <section id="faq" className="scroll-mt-24 bg-background py-12 md:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
              Dúvidas frequentes
            </h2>
            <p className="mt-5 leading-[1.8] text-muted-foreground">
              Encontre respostas para as principais dúvidas sobre consórcio, imóveis, empresas e meu acompanhamento.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-8">
            <FaqGroupBlock group={firstGroup} />

            <div className="flex justify-center">
              <Button
                type="button"
                variant="outline"
                size="lg"
                aria-expanded={showAll}
                aria-controls="faq-grupos-extras"
                onClick={() => setShowAll((v) => !v)}
                className="rounded-xl border-gold/40 px-8 text-primary transition-colors hover:border-gold hover:bg-gold/10"
              >
                {showAll ? "Mostrar menos perguntas" : "Ver todas as perguntas"}
                <ChevronDown
                  className={cn("h-4 w-4 text-gold transition-transform duration-200", showAll && "rotate-180")}
                  aria-hidden="true"
                />
              </Button>
            </div>

            <div id="faq-grupos-extras" className={cn("space-y-8", !showAll && "hidden")}>
              {extraGroups.map((group) => (
                <FaqGroupBlock key={group.label} group={group} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
