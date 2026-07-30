import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";

const FLOW = ["Projeto", "MAPA", "ROTA Personalizada", "Conquista"];

const STEPS = [
  { letter: "M", title: "Mapear", text: "Entender o momento atual e os objetivos." },
  { letter: "A", title: "Ampliar", text: "Avaliar cenários e possibilidades reais." },
  { letter: "P", title: "Planejar", text: "Definir o caminho e as prioridades." },
  { letter: "A", title: "Acompanhar", text: "Revisar e ajustar ao longo do tempo." },
];

export function MetodoMapa() {
  return (
    <section
      id="metodo"
      className="scroll-mt-24 bg-primary py-24 text-primary-foreground md:py-36"
    >
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Método MAPA</p>
          <h2 className="mt-5 text-3xl font-extrabold md:text-[2.5rem] md:leading-[1.15]">
            Como funciona meu atendimento?
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            {FLOW.map((step, index) => (
              <div key={step} className="flex flex-col items-center gap-3 sm:flex-row">
                <span className="rounded-full border border-primary-foreground/15 bg-primary-deep px-6 py-3 text-sm font-semibold">
                  {step}
                </span>
                {index < FLOW.length - 1 && (
                  <span className="text-gold sm:-rotate-90">↓</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 90} className="h-full">
              <Card className="card-lift h-full rounded-3xl border-primary-foreground/12 bg-primary-deep shadow-none">
                <CardContent className="p-9">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold font-display text-lg font-extrabold text-gold-foreground">
                    {step.letter}
                  </span>
                  <p className="mt-7 text-[11px] tracking-[0.18em] text-primary-foreground/45 uppercase">
                    Etapa {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-primary-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-primary-foreground/70">
                    {step.text}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
