import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Coins, CalendarDays, Handshake, ArrowLeftRight, ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Row = {
  label: string;
  consorcio: string;
  financiamento: string;
  highlight?: boolean;
};

const ROWS: Row[] = [
  { label: "Valor do imóvel", consorcio: "R$ 300.000", financiamento: "R$ 300.000" },
  { label: "Entrada", consorcio: "R$ 0", financiamento: "R$ 90.000", highlight: true },
  { label: "Crédito contratado", consorcio: "R$ 300.000", financiamento: "R$ 210.000" },
  { label: "Taxa", consorcio: "≈ 1,3% a.a.*", financiamento: "14% a.a.", highlight: true },
  { label: "Prazo", consorcio: "220 meses", financiamento: "420 meses" },
  { label: "Parcela inicial/base", consorcio: "≈ R$ 1.695", financiamento: "≈ R$ 2.329" },
  {
    label: "Desembolso total estimado",
    consorcio: "R$ 372.900**",
    financiamento: "≈ R$ 1.068.000***",
    highlight: true,
  },
];

function ComparisonTable() {
  return (
    <div className="mt-4">
      {/* Mobile: pares empilhados por indicador */}
      <div className="space-y-3 md:hidden">
        {ROWS.map((row) => (
          <div key={row.label} className="rounded-2xl border border-border/70 bg-background p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {row.label}
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-secondary px-3 py-2">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-muted-foreground">
                  Consórcio
                </p>
                <p
                  className={cn(
                    "mt-1 text-sm font-extrabold text-primary",
                    row.highlight && "text-base text-gold",
                  )}
                >
                  {row.consorcio}
                </p>
              </div>
              <div className="rounded-xl bg-secondary px-3 py-2">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-muted-foreground">
                  Financiamento
                </p>
                <p
                  className={cn(
                    "mt-1 text-sm font-extrabold text-primary",
                    row.highlight && "text-base",
                  )}
                >
                  {row.financiamento}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: tabela */}
      <div className="hidden max-w-3xl overflow-hidden rounded-2xl border border-border/70 md:block">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">Comparação entre consórcio e financiamento</caption>
          <thead>
            <tr className="bg-secondary text-left">
              <th scope="col" className="px-4 py-3 font-semibold text-primary">
                Informação
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-primary">
                Consórcio
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-primary">
                Financiamento
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label} className="border-t border-border/70">
                <th scope="row" className="px-4 py-3 text-left font-medium text-muted-foreground">
                  {row.label}
                </th>
                <td
                  className={cn(
                    "px-4 py-3 font-semibold text-primary",
                    row.highlight && "text-base font-extrabold text-gold",
                  )}
                >
                  {row.consorcio}
                </td>
                <td
                  className={cn(
                    "px-4 py-3 font-semibold text-primary",
                    row.highlight && "text-base font-extrabold",
                  )}
                >
                  {row.financiamento}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function MenorCustoContent() {
  return (
    <div className="space-y-5">
      <div>
        <h4 className="text-base font-extrabold text-primary">Consórcio x Financiamento</h4>
        <p className="mt-1 text-sm leading-[1.7] text-muted-foreground">
          Veja um exemplo ilustrativo para a compra de um imóvel de R$ 300 mil.
        </p>
      </div>

      <ComparisonTable />

      <p className="max-w-2xl rounded-2xl border-l-2 border-gold bg-secondary px-4 py-3 text-sm leading-[1.7] text-primary">
        No exemplo acima, um imóvel de R$ 300 mil exige R$ 90 mil de entrada no financiamento e pode
        resultar em um desembolso total superior a R$ 1 milhão ao longo do contrato.
      </p>

      <div className="max-w-2xl">
        <h4 className="text-base font-extrabold text-primary">E os R$ 90 mil da entrada?</h4>
        <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
          No financiamento, esse dinheiro precisa ser usado logo no início da compra. No consórcio,
          ele pode continuar disponível para você — investido, reservado para outros projetos ou
          utilizado posteriormente em uma estratégia de lance.
        </p>
      </div>

      <div className="max-w-2xl space-y-2 text-xs leading-[1.6] text-muted-foreground">
        <p>
          * Para facilitar a comparação, os 1,3% a.a. representam a taxa de administração total de
          24,3% distribuída didaticamente ao longo de aproximadamente 18 anos. Não se trata de uma
          taxa anual de juros.
        </p>
        <p>
          ** O valor de R$ 372.900 representa o valor-base do crédito acrescido da taxa de
          administração de 24,3%. Crédito e parcelas do consórcio estão sujeitos aos reajustes
          previstos contratualmente, que não foram projetados nesta simulação.
        </p>
        <p>
          *** Simulação ilustrativa de financiamento pelo sistema Price, considerando imóvel de R$
          300 mil, entrada de 30%, crédito financiado de R$ 210 mil, prazo de 420 meses e juros de
          14% a.a. A simulação não considera TR, seguros, tarifas ou outros componentes do CET. As
          condições reais variam conforme instituição financeira e perfil do cliente.
        </p>
      </div>

      <div className="max-w-2xl rounded-2xl border border-border/70 bg-background p-4 md:p-5">
        <h4 className="text-base font-extrabold text-primary">Quer saber como ficaria no seu caso?</h4>
        <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
          Cada projeto tem valores, prazos e objetivos diferentes. Entre em contato para fazermos uma
          simulação usando os dados da sua realidade.
        </p>
        <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
          No momento da contratação, também podem existir condições e incentivos comerciais vigentes
          que tornem a proposta ainda mais atrativa.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-4 w-full rounded-xl bg-gold px-8 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto"
        >
          <a href="#contato" data-cta-location="consorcio" data-cta-name="simular_projeto">Quero simular meu projeto</a>
        </Button>
      </div>
    </div>
  );
}

export type WhyItem = {
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  lead: string;
  hint?: string;
  content: React.ReactNode;
};

const ITEMS: WhyItem[] = [
  {
    id: "menor-custo",
    icon: Coins,
    title: "Menor custo",
    lead:
      "Sem juros de financiamento e sem precisar comprometer seu capital com uma entrada para começar.",
    hint: "Veja a comparação",
    content: <MenorCustoContent />,
  },
  {
    id: "planejamento",
    icon: CalendarDays,
    title: "Planejamento",
    lead: "Quem começa antes tem mais tempo e mais opções para construir patrimônio.",
    content: (
      <div className="max-w-2xl space-y-4">
        <p className="text-sm leading-[1.7] text-muted-foreground">
          Quando você não precisa resolver tudo com urgência, pode organizar melhor as parcelas,
          preparar estratégias de lance e construir seu patrimônio ao longo do tempo.
        </p>
        <p className="rounded-2xl border-l-2 border-gold bg-secondary px-4 py-3 text-sm font-semibold leading-[1.7] text-primary">
          Consórcio não é apenas sobre esperar. É sobre começar antes.
        </p>
      </div>
    ),
  },
  {
    id: "poder-de-compra",
    icon: Handshake,
    title: "Poder de compra",
    lead: "Com a carta contemplada, você negocia com poder de compra à vista.",
    content: (
      <div className="max-w-2xl space-y-4">
        <p className="text-sm leading-[1.7] text-muted-foreground">
          Depois da contemplação e da liberação do crédito, você escolhe o bem e pode negociar a
          compra como comprador à vista, buscando melhores condições na negociação.
        </p>
        <p className="rounded-2xl border-l-2 border-gold bg-secondary px-4 py-3 text-sm font-semibold leading-[1.7] text-primary">
          Carta contemplada = poder de compra
        </p>
      </div>
    ),
  },
  {
    id: "flexibilidade",
    icon: ArrowLeftRight,
    title: "Flexibilidade",
    lead: "Seu crédito pode abrir diferentes possibilidades de acordo com o seu projeto.",
    content: (
      <div className="max-w-2xl space-y-3">
        <p className="text-sm leading-[1.7] text-muted-foreground">
          Conforme as regras da modalidade e do contrato, você pode ter possibilidades como:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-[1.7] text-muted-foreground">
          <li>
            comprar mais de um imóvel utilizando a mesma carta contemplada, dentro do limite do
            crédito e das regras aplicáveis;
          </li>
          <li>não utilizar imediatamente o crédito após a contemplação;</li>
          <li>manter o crédito aplicado enquanto decide quando e como utilizá-lo;</li>
          <li>transferir ou vender a cota contemplada conforme as condições aplicáveis.</li>
        </ul>
      </div>
    ),
  },
];

type WhyConsorcioProps = {
  /** Eyebrow opcional (padrão: texto da Home). */
  eyebrow?: string;
  /** Título opcional (padrão: texto da Home). */
  title?: string;
  /** Texto introdutório opcional (padrão: texto da Home). */
  intro?: string;
  /** Itens do accordion (padrão: itens da Home). */
  items?: WhyItem[];
  /** Bloco final opcional (padrão: texto da Home). */
  footer?: React.ReactNode;
};

export function WhyConsorcio({
  eyebrow = "Benefícios",
  title = "Por que tantas pessoas estão escolhendo o consórcio?",
  intro = "Quando você compara custo, planejamento e liberdade de escolha, fica mais fácil entender as vantagens do consórcio.",
  items = ITEMS,
  footer,
}: WhyConsorcioProps = {}) {
  return (
    <section id="por-que-consorcio" className="scroll-mt-24 bg-secondary py-12 md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-[1.7] text-muted-foreground">{intro}</p>
        </Reveal>


        <Reveal delay={100} className="mx-auto mt-8 max-w-4xl md:mt-10">
          <AccordionPrimitive.Root
            type="single"
            collapsible
            className="w-full divide-y divide-border/70 rounded-3xl border border-border/70 bg-background"
          >
            {items.map((item) => (
              <AccordionPrimitive.Item key={item.id} value={item.id} className="px-4 md:px-6">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="group flex w-full cursor-pointer items-start gap-3 py-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:gap-4 md:py-6">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary">
                      <item.icon className="h-5 w-5 fill-gold/20 text-gold" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-base font-extrabold tracking-tight text-primary md:text-lg">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm leading-[1.6] text-muted-foreground">
                        {item.lead}
                      </span>
                      {item.hint && (
                        <span className="mt-2 block text-sm font-semibold text-gold">
                          {item.hint}
                        </span>
                      )}
                    </span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-colors group-hover:bg-gold/20 group-data-[state=open]:bg-gold group-data-[state=open]:text-gold-foreground">
                      <ChevronDown
                        className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none">
                  <div className="pb-6 pt-0 md:pl-14">{item.content}</div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </Reveal>

        <Reveal className="mt-10 text-center" delay={180}>
          {footer ?? (
            <p className="text-muted-foreground">
              Cada projeto possui características diferentes. Entender qual estratégia faz mais
              sentido é o primeiro passo.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
