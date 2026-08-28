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

type MetodoMapaProps = {
  intro?: string;
};

export function MetodoMapa({
  intro = "Antes de falar em valores ou parcelas, eu procuro entender o que você quer conquistar, seu momento e seus objetivos. A partir daí, usamos o Método MAPA para estruturar o caminho.",
}: MetodoMapaProps = {}) {
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
{intro}
          </p>
        </Reveal>

        {/* Uma única estrutura no DOM: timeline vertical no mobile,
            jornada horizontal no desktop (apenas CSS responsivo). */}
        <div className="relative mt-10 lg:mt-12">
          <div className="absolute left-[1.375rem] top-5 bottom-5 w-px bg-primary-foreground/20 lg:left-0 lg:right-0 lg:top-[3.25rem] lg:bottom-auto lg:h-px lg:w-auto" />

          <div className="relative space-y-10 lg:grid lg:grid-cols-4 lg:gap-6 lg:space-y-0">
            {STEPS.map((step, index) => (
              <Reveal
                key={`${index}-${step.letter}`}
                delay={index * 100}
                className="relative pl-12 lg:pl-0 lg:text-center"
              >
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center bg-primary lg:static lg:mx-auto lg:h-[6.5rem] lg:w-auto">
                  <span className="font-display text-3xl font-extrabold text-gold lg:bg-primary lg:px-2 lg:text-6xl">
                    {step.letter}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold/80">
                    {step.letter} — {step.title}
                  </span>
                  <h3 className="mt-0.5 text-lg font-bold text-primary-foreground lg:mt-5">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-primary-foreground/90 lg:mt-2">
                    {step.description}
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
