import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import { trackEvent } from "@/lib/analytics";

const STEPS = [
  { letter: "M", title: "Mapear", description: "Entender seus objetivos, recursos e prioridades." },
  { letter: "A", title: "Analisar opções", description: "Comparar as alternativas disponíveis." },
  {
    letter: "P",
    title: "Planejar a estratégia",
    description: "Definir o caminho mais adequado para o seu projeto.",
  },
  {
    letter: "A",
    title: "Acompanhar a jornada",
    description: "Estar presente durante o processo e nos próximos passos.",
  },
];

export function MetodoSaude() {
  return (
    <section id="metodo" className="scroll-mt-24 bg-primary py-14 text-primary-foreground md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Uma estratégia para cada objetivo</p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-[2.5rem] md:leading-[1.15]">
            Estratégia antes do produto.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-[1.7] text-primary-foreground/80">
            Quem precisa ampliar uma clínica agora tem uma necessidade diferente de quem pretende
            construir patrimônio para os próximos anos.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg font-semibold leading-[1.6] text-gold">
            É por isso que eu não trabalho com propostas prontas.
          </p>
          <p className="mx-auto mt-4 max-w-xl leading-[1.7] text-primary-foreground/80">
            Utilizo o Método MAPA para entender seu objetivo, prazo e recursos antes de estruturar
            qualquer solução.
          </p>
        </Reveal>

        <div className="relative mt-10 lg:mt-12">
          <div className="absolute left-[1.375rem] top-5 bottom-5 w-px bg-primary-foreground/20 lg:left-0 lg:right-0 lg:top-[3.25rem] lg:bottom-auto lg:h-px lg:w-auto" />

          <div className="relative space-y-10 lg:grid lg:grid-cols-4 lg:gap-6 lg:space-y-0">
            {STEPS.map((step, index) => (
              <Reveal
                key={`${index}-${step.letter}`}
                delay={index * 100}
                className="relative pl-12 lg:pl-0 lg:text-center"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center bg-primary lg:static lg:mx-auto lg:h-[6.5rem] lg:w-auto"
                >
                  <span className="font-display text-3xl font-extrabold text-gold lg:bg-primary lg:px-2 lg:text-6xl">
                    {step.letter}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-foreground lg:mt-5">
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

        <Reveal delay={200} className="mx-auto mt-12 max-w-2xl text-center md:mt-14">
          <p className="text-lg font-semibold text-gold md:text-xl">
            Entender. Planejar. Conquistar.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 h-auto whitespace-normal rounded-xl bg-gold px-8 py-3 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
          >
            <a href="#cta" onClick={() => trackEvent("cta_metodo_saude")}>
              Quero construir minha estratégia
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
