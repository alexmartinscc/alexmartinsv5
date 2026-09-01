import { Building2, Landmark, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import { trackEvent } from "@/lib/analytics";

const CARDS = [
  {
    icon: Landmark,
    title: "Construir patrimônio e gerar renda",
    text: "Adquira imóveis, diversifique seus ativos e construa novas fontes de renda.",
    micro: "Imóveis • Patrimônio • Renda recorrente",
  },
  {
    icon: Building2,
    title: "Crescer preservando capital",
    text: "Invista na clínica, em equipamentos, veículos, imóveis ou novos projetos sem concentrar todo o seu capital em uma única aquisição.",
    micro: "Expansão • Equipamentos • Veículos • Novos projetos",
  },
  {
    icon: KeyRound,
    title: "Transformar patrimônio em crédito",
    text: "Utilize um imóvel quitado como garantia para acessar recursos e financiar novas oportunidades.",
    micro: "Home Equity • Crédito • Investimentos • Crescimento",
  },
];

export function Necessidades() {
  return (
    <section id="necessidades" className="scroll-mt-24 bg-background py-14 md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Seu próximo projeto</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Escolha o próximo movimento do seu patrimônio.
          </h2>
          <p className="mt-4 leading-[1.7] text-muted-foreground">
            Você não precisa começar escolhendo um produto. Comece pelo que deseja conquistar.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-4 md:grid-cols-3 md:gap-6">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 90}>
              <article className="card-lift h-full rounded-2xl border border-border bg-card p-5 md:p-6">
                <card.icon
                  className="h-7 w-7 text-gold"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-bold text-primary md:text-xl">{card.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-muted-foreground md:text-base">
                  {card.text}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  {card.micro}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-9 text-center" delay={160}>
          <Button
            asChild
            size="lg"
            className="rounded-xl bg-gold px-8 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
          >
            <a href="#cta" onClick={() => trackEvent("cta_necessidades_saude")}>
              Quero avaliar meu projeto
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
