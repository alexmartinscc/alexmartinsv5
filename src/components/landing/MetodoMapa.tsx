import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    letter: "M",
    title: "Mapear",
    description: "Entender onde você está e o que quer conquistar.",
  },
  {
    letter: "A",
    title: "Analisar opções",
    description: "Avaliar os caminhos possíveis para o seu projeto.",
  },
  {
    letter: "P",
    title: "Planejar a estratégia",
    description: "Transformar as opções em um plano.",
  },
  {
    letter: "A",
    title: "Acompanhar a jornada",
    description: "Estar ao seu lado durante o caminho.",
  },
];

export function MetodoMapa() {
  return (
    <section
      id="metodo"
      className="scroll-mt-24 bg-primary py-16 text-primary-foreground md:py-24"
    >
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Método MAPA</p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-[2.5rem] md:leading-[1.15]">
            Cada projeto precisa de um plano
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-[1.7] text-primary-foreground/80">
            Antes de falar em valores ou parcelas, eu procuro entender o que você
            quer conquistar, seu momento e seus objetivos. A partir daí, usamos o
            Método MAPA para estruturar o caminho.
          </p>
        </Reveal>

        {/* Desktop: jornada horizontal */}
        <div className="relative mt-12 hidden lg:block">
          <div className="absolute top-[3.25rem] left-0 right-0 h-px bg-primary-foreground/20" />

          <div className="relative grid grid-cols-4 gap-6">
            {STEPS.map((step, index) => (
              <Reveal
                key={`${step.letter}-${step.title}`}
                delay={index * 120}
                className="text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-[6.5rem] items-center justify-center">
                    <span className="bg-primary px-2 font-display text-6xl font-extrabold text-gold">
                      {step.letter}
                    </span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold/80">
                    {step.letter} — {step.title}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-primary-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-primary-foreground/90">
                    {step.description}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">
                    {step.details}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: timeline vertical */}
        <div className="relative mt-10 lg:hidden">
          <div className="absolute top-5 bottom-5 left-[1.375rem] w-px bg-primary-foreground/20" />

          <div className="relative space-y-10">
            {STEPS.map((step, index) => (
              <Reveal
                key={`${step.letter}-${step.title}`}
                delay={index * 100}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center bg-primary">
                  <span className="font-display text-3xl font-extrabold text-gold">
                    {step.letter}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold/80">
                    {step.letter} — {step.title}
                  </span>
                  <h3 className="mt-0.5 text-lg font-bold text-primary-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-primary-foreground/90">
                    {step.description}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/65">
                    {step.details}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-14 text-center md:mt-16" delay={200}>
          <p className="mx-auto max-w-2xl text-lg font-semibold leading-relaxed text-primary-foreground md:text-xl">
            Você não recebe apenas uma simulação. Construímos juntos um plano
            para o seu objetivo.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 rounded-xl bg-gold px-8 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            <a href="#cta">Conte-me sobre o seu projeto</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
