import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Droplets, LineChart, Sparkles, Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import { trackEvent } from "@/lib/analytics";

const PERDAS = [
  { icon: Droplets, label: "Liquidez" },
  { icon: LineChart, label: "Rendimentos" },
  { icon: Wallet, label: "Capacidade de investimento" },
  { icon: Sparkles, label: "Novas oportunidades" },
];

const HOME_EQUITY_USOS = [
  "Expansão da clínica",
  "Equipamentos",
  "Investimentos",
  "Novos imóveis",
  "Novos projetos",
];

export function Alavancagem() {
  return (
    <section id="alavancagem" className="scroll-mt-24 bg-secondary py-14 md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Alavancagem patrimonial</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Você não precisa usar todo o seu capital para conquistar um novo patrimônio.
          </h2>
          <p className="mt-5 leading-[1.7] text-muted-foreground">
            Comprar à vista pode parecer a decisão mais simples.
          </p>
          <p className="mt-3 leading-[1.7] text-muted-foreground">
            Mas retirar uma grande quantia dos investimentos significa abrir mão de liquidez,
            rendimentos, capacidade de investimento e novas oportunidades.
          </p>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
          {PERDAS.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center gap-2 rounded-2xl bg-card px-3 py-4 text-center"
            >
              <p.icon className="h-6 w-6 text-gold" strokeWidth={1.75} aria-hidden="true" />
              <span className="text-xs font-semibold leading-snug text-primary md:text-sm">
                {p.label}
              </span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-8 max-w-3xl">
          <p className="border-l-2 border-gold bg-background px-5 py-4 text-base font-semibold leading-[1.7] text-primary md:text-lg">
            Você realmente precisa tirar todo esse dinheiro dos seus investimentos para realizar
            essa compra?
          </p>
          <p className="mt-5 leading-[1.7] text-muted-foreground">
            Com planejamento, o consórcio pode permitir a conquista de um novo ativo preservando
            parte do patrimônio financeiro.
          </p>
        </Reveal>

        {/* Cenário ilustrativo em sanfona — fechada por padrão */}
        <Reveal delay={160} className="mx-auto mt-8 max-w-3xl">
          <AccordionPrimitive.Root type="single" collapsible className="w-full">
            <AccordionPrimitive.Item
              value="cenario"
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <AccordionPrimitive.Header>
                <AccordionPrimitive.Trigger asChild>
                  <button
                    type="button"
                    id="cenario-trigger"
                    aria-controls="cenario-panel"
                    onClick={() => trackEvent("abrir_cenario_alavancagem")}
                    className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-primary transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-lg"
                  >
                    <span>Veja como essa estratégia pode funcionar na prática</span>
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-gold transition-transform duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </button>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>

              <AccordionPrimitive.Content
                id="cenario-panel"
                aria-labelledby="cenario-trigger"
                className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
              >
                <div className="space-y-6 border-t border-border px-5 py-6 text-muted-foreground">
                  <p className="leading-[1.7]">
                    <strong className="text-primary">Um exemplo ilustrativo.</strong> Você possui
                    R$ 1 milhão investidos e deseja adquirir um imóvel de R$ 1 milhão.
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl bg-secondary p-4">
                      <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-primary">
                        Opção 1 — Compra à vista
                      </h3>
                      <ul className="mt-3 space-y-1.5 text-sm leading-[1.7]">
                        <li>R$ 1.000.000 investidos</li>
                        <li aria-hidden="true">↓</li>
                        <li>R$ 1.000.000 utilizados na compra</li>
                        <li aria-hidden="true">↓</li>
                        <li>Imóvel de R$ 1.000.000</li>
                      </ul>
                      <p className="mt-4 text-sm">
                        <strong className="text-primary">Resultado:</strong> novo imóvel de
                        R$ 1.000.000 e capital financeiro preservado de R$ 0.
                      </p>
                      <p className="mt-3 text-sm leading-[1.7]">
                        Você conquistou o imóvel, mas utilizou todo o capital disponível para essa
                        aquisição.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-gold/40 bg-background p-4">
                      <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-primary">
                        Opção 2 — Estratégia de alavancagem
                      </h3>
                      <ul className="mt-3 space-y-1.5 text-sm leading-[1.7]">
                        <li>Carta de crédito: R$ 1.000.000</li>
                        <li>Taxa de administração considerada: 24%</li>
                        <li>Lance ilustrativo: R$ 700.000</li>
                        <li>
                          <strong className="text-primary">Capital preservado: R$ 300.000</strong>
                        </li>
                      </ul>
                      <p className="mt-3 text-sm leading-[1.7]">
                        Após a amortização ilustrativa do lance, a parcela inicial estimada fica em
                        aproximadamente R$ 2.454/mês. Considerando uma rentabilidade hipotética de
                        1% ao mês sobre os R$ 300 mil preservados, o rendimento estimado seria de
                        R$ 3.000/mês.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-primary-deep p-5 text-primary-foreground">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                      Resultado inicial ilustrativo
                    </p>
                    <dl className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-xl bg-primary-foreground/5 px-4 py-3">
                        <dt className="text-xs text-primary-foreground/70">Rendimento estimado</dt>
                        <dd className="mt-1 text-lg font-bold">R$ 3.000</dd>
                      </div>
                      <div className="rounded-xl bg-primary-foreground/5 px-4 py-3">
                        <dt className="text-xs text-primary-foreground/70">Parcela estimada</dt>
                        <dd className="mt-1 text-lg font-bold">− R$ 2.454</dd>
                      </div>
                      <div className="rounded-xl bg-gold/15 px-4 py-3">
                        <dt className="text-xs text-primary-foreground/70">Diferença estimada</dt>
                        <dd className="mt-1 text-lg font-bold text-gold">+ R$ 546/mês</dd>
                      </div>
                    </dl>
                    <p className="mt-4 text-sm font-semibold text-gold">
                      R$ 300 mil do patrimônio financeiro preservados.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-base font-semibold leading-[1.7] text-primary">
                      Não estamos comparando apenas duas formas de comprar um imóvel. Estamos
                      comparando duas formas de construir patrimônio.
                    </p>
                    <p className="leading-[1.7]">
                      Na compra à vista, todo o capital é utilizado. Na estratégia de alavancagem,
                      parte do capital permanece investida enquanto um novo ativo passa a fazer
                      parte do patrimônio.
                    </p>
                    <p className="border-l-2 border-gold bg-secondary px-5 py-4 text-base font-semibold leading-[1.7] text-primary">
                      O ganho não está apenas no imóvel conquistado. Está também no capital que
                      continuou com você.
                    </p>
                    <p className="text-xs leading-[1.6] text-muted-foreground">
                      Simulação meramente ilustrativa. Valores, rentabilidade, reajustes, custos,
                      condições de contemplação e resultados podem variar de acordo com o produto,
                      o mercado e a estratégia adotada.
                    </p>
                  </div>
                </div>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          </AccordionPrimitive.Root>
        </Reveal>

        {/* Home Equity — bloco compacto dentro da mesma seção */}
        <Reveal delay={200} className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-5 md:p-7">
            <p className="eyebrow">Já possui um imóvel quitado?</p>
            <h3 className="mt-3 text-2xl font-extrabold text-primary md:text-[1.75rem]">
              Seu patrimônio pode financiar o próximo projeto.
            </h3>
            <p className="mt-3 leading-[1.7] text-muted-foreground">
              Com o Home Equity, um imóvel já conquistado pode ser utilizado como garantia para
              acessar crédito sem precisar ser vendido.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {HOME_EQUITY_USOS.map((uso) => (
                <li
                  key={uso}
                  className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-primary md:text-sm"
                >
                  {uso}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-l-2 border-gold bg-secondary px-5 py-4 text-base font-semibold leading-[1.7] text-primary">
              Você já construiu patrimônio. Agora ele também pode ajudar a financiar seu próximo
              crescimento.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-5 w-full rounded-xl bg-gold text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto"
            >
              <a href="#cta" onClick={() => trackEvent("cta_home_equity_saude")}>
                Quero avaliar essa possibilidade
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
