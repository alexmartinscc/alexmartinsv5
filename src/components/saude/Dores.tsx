import { Clock, Activity, Building2, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

const BLOCOS = [
  {
    icon: Clock,
    title: "A rotina ocupa quase todo o seu tempo",
    text: "Você cuida dos pacientes, da agenda, da equipe e do negócio.",
    destaque: "Planejar patrimônio acaba ficando para depois.",
  },
  {
    icon: Activity,
    title: "Sua renda depende muito da sua presença?",
    text: "Quando atendimentos, procedimentos ou plantões diminuem, parte da renda também pode diminuir.",
    destaque: "Construir outras fontes de receita amplia suas possibilidades para o futuro.",
  },
  {
    icon: Building2,
    title: "Crescer exige capital",
    text: "Uma nova sala, equipamentos, reforma, imóvel ou expansão demandam recursos.",
    destaque:
      "O desafio é continuar crescendo sem comprometer sua capacidade de investir nos próximos projetos.",
  },
  {
    icon: TrendingUp,
    title: "Seu dinheiro poderia estar fazendo mais?",
    text: "Ganhar bem é importante.",
    destaque:
      "Mas utilizar seus recursos com estratégia pode fazer o resultado do seu trabalho produzir muito mais ao longo do tempo.",
  },
];

export function Dores() {
  return (
    <section id="desafios" className="scroll-mt-24 bg-background py-14 md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Trabalho, patrimônio e futuro</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Você trabalha muito para gerar renda. Mas quanto disso está se transformando em
            patrimônio?
          </h2>
          <p className="mt-4 leading-[1.7] text-muted-foreground">
            Entre pacientes, atendimentos, plantões, procedimentos e gestão, sobra pouco tempo para
            pensar em como fazer o dinheiro conquistado hoje trabalhar também pelo seu futuro.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-4 md:grid-cols-2 md:gap-6">
          {BLOCOS.map((bloco, i) => (
            <Reveal key={bloco.title} delay={i * 80}>
              <article className="h-full rounded-2xl border border-border bg-card p-5 md:p-6">
                <bloco.icon
                  className="h-7 w-7 fill-gold/20 text-gold"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-bold text-primary md:text-xl">{bloco.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-muted-foreground md:text-base">
                  {bloco.text}
                </p>
                <p className="mt-4 border-l-2 border-gold bg-secondary px-4 py-3 text-sm font-semibold leading-[1.7] text-primary">
                  {bloco.destaque}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mx-auto mt-9 max-w-3xl">
          <p className="rounded-2xl bg-primary-deep px-5 py-6 text-center text-lg font-semibold leading-[1.6] text-primary-foreground md:px-8 md:text-xl">
            Com a estratégia certa, você pode{" "}
            <span className="text-gold">potencializar seus ganhos</span>, acelerar seus negócios e
            construir um futuro mais tranquilo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
