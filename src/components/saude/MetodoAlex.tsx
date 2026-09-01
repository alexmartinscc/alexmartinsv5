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

export function MetodoAlex() {
  return (
    <section id="metodo" className="scroll-mt-24 bg-primary py-14 text-primary-foreground md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Método MAPA</p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-[2.5rem] md:leading-[1.15]">
            Estratégia antes do produto.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-[1.7] text-primary-foreground/80">
            Você não precisa simplesmente de uma carta de crédito ou de uma linha de financiamento.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg font-semibold leading-[1.6] text-gold">
            Precisa de uma estratégia que faça sentido para o seu objetivo.
          </p>
          <p className="mx-auto mt-4 max-w-xl leading-[1.7] text-primary-foreground/80">
            Cada pessoa possui objetivos, prazos, patrimônio e capacidade financeira diferentes. Por
            isso, não trabalho com propostas prontas. Utilizo o Método MAPA para entender sua
            realidade antes de estruturar qualquer solução.
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

        <Reveal delay={200} className="mx-auto mt-14 max-w-2xl text-center md:mt-16">
          <h3 className="text-2xl font-extrabold md:text-3xl">Alex Martins</h3>
          <p className="mt-1 text-sm text-gold">
            Consultor Patrimonial | Consultor Autorizado Ademicon
          </p>
          <div className="mt-5 space-y-3 leading-[1.7] text-primary-foreground/85">
            <p>Meu trabalho começa antes da escolha do produto.</p>
            <p>Primeiro entendemos onde você está e onde quer chegar.</p>
            <p>Depois analisamos os recursos disponíveis e estruturamos o caminho.</p>
          </div>
          <p className="mt-6 text-lg font-semibold text-gold md:text-xl">
            Entender. Planejar. Conquistar.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 rounded-xl bg-gold px-8 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
          >
            <a href="#cta" onClick={() => trackEvent("cta_metodo_saude")}>
              Quero conversar sobre meu projeto
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
