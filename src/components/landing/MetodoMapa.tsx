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
  eyebrow?: string;
  ctaLabel?: string;
  ctaName?: string;
};

export function MetodoMapa({
  intro = "Antes de falar em valores ou parcelas, eu procuro entender o que você quer conquistar, seu momento e seus objetivos. A partir daí, usamos o Método MAPA para estruturar o caminho.",
  eyebrow = "Método MAPA",
  ctaLabel = "Conte-me sobre o seu projeto",
  ctaName = "conte_me_projeto",
}: MetodoMapaProps = {}) {
  return (
    <section
      id="metodo"
      className="scroll-mt-24 bg-primary py-10 text-primary-foreground md:py-16"
    >
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-[2.5rem] md:leading-[1.15]">
            Cada projeto precisa de um plano
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-[1.7] text-primary-foreground/80">
{intro}
          </p>
        </Reveal>

        {/* Uma única estrutura no DOM: timeline vertical no mobile,
            jornada horizontal no desktop (apenas CSS responsivo). */}
        <div className="relative mt-8 lg:mt-10">
          <div className="absolute left-[1.375rem] top-5 bottom-5 w-px bg-primary-foreground/20 lg:left-0 lg:right-0 lg:top-10 lg:bottom-auto lg:h-px lg:w-auto" />

          <div className="relative space-y-7 lg:grid lg:grid-cols-4 lg:gap-6 lg:space-y-0">
            {STEPS.map((step, index) => (
              <Reveal
                key={`${index}-${step.letter}`}
                delay={index * 100}
                className="relative pl-12 lg:pl-0 lg:text-center"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center bg-primary lg:static lg:mx-auto lg:h-20 lg:w-auto"
                >
                  <span className="font-display text-3xl font-extrabold text-gold lg:bg-primary lg:px-2 lg:text-6xl">
                    {step.letter}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gold lg:mt-3">
                    <strong className="font-extrabold">{step.title.charAt(0)}</strong>
                    {step.title.slice(1)}
                  </h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-primary-foreground/90">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>


        <Reveal className="mt-10 text-center md:mt-12" delay={200}>
          <p className="mx-auto max-w-2xl text-lg font-semibold leading-relaxed text-primary-foreground md:text-xl">
            Você não recebe apenas uma simulação. Construímos juntos um plano
            para o seu objetivo.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 rounded-xl bg-gold px-8 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            <a href="#contato" data-cta-location="mapa" data-cta-name={ctaName}>{ctaLabel}</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
