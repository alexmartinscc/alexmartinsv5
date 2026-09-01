import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import { trackEvent } from "@/lib/analytics";

const FLUXO = ["Renda profissional", "Patrimônio", "Renda recorrente", "Mais liberdade de escolha"];

const LIBERDADE = [
  "reduzir plantões",
  "trabalhar menos horas",
  "escolher melhor seus projetos",
  "reinvestir no negócio",
  "preparar a aposentadoria",
  "continuar trabalhando porque quer",
];

export function RendaPatrimonial() {
  return (
    <section id="renda" className="scroll-mt-24 bg-background py-14 md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Renda patrimonial</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Sua agenda gera renda. Seu patrimônio também pode.
          </h2>
          <p className="mt-5 leading-[1.7] text-muted-foreground">
            Consultas, procedimentos, plantões, atendimentos e gestão do negócio geram renda.
          </p>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-6 max-w-3xl">
          <p className="border-l-2 border-gold bg-secondary px-5 py-4 text-base font-semibold leading-[1.7] text-primary md:text-lg">
            Mas existe uma diferença importante entre ganhar bem e construir patrimônio capaz de
            gerar renda.
          </p>
          <p className="mt-5 leading-[1.7] text-muted-foreground">
            Ao longo da carreira, imóveis e outros ativos podem criar novas fontes de receita e
            reduzir sua dependência exclusiva da atividade profissional.
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-8 max-w-3xl">
          <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {FLUXO.map((etapa, i) => (
              <li
                key={etapa}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-2xl font-extrabold text-gold"
                >
                  {i + 1}
                </span>
                <span className="text-sm font-semibold leading-snug text-primary">{etapa}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={160} className="mx-auto mt-8 max-w-3xl">
          <p className="font-semibold text-primary">Essa liberdade pode significar:</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {LIBERDADE.map((item) => (
              <li key={item} className="flex gap-2 leading-[1.7] text-muted-foreground">
                <span aria-hidden="true" className="text-gold">
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-7 border-l-2 border-gold bg-secondary px-5 py-4 text-base font-semibold leading-[1.7] text-primary md:text-lg">
            Transforme parte da renda de hoje em patrimônio para o futuro.
          </p>

          <div className="mt-7 text-center">
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-gold px-8 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
            >
              <a href="#cta" onClick={() => trackEvent("cta_renda_patrimonial_saude")}>
                Quero construir renda patrimonial
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
