import { Card, CardContent } from "@/components/ui/card";

const FLOW = ["Projeto", "MAPA", "ROTA Personalizada", "Conquista"];

const STEPS = [
  { letter: "M", title: "Mapear", text: "Entender o momento atual e os objetivos." },
  { letter: "A", title: "Ampliar", text: "Avaliar cenários e possibilidades reais." },
  { letter: "P", title: "Planejar", text: "Definir o caminho e as prioridades." },
  { letter: "A", title: "Acompanhar", text: "Revisar e ajustar ao longo do tempo." },
];

export function MetodoMapa() {
  return (
    <section id="metodo" className="scroll-mt-24 bg-primary py-20 text-primary-foreground md:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">
            Método MAPA
          </p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
            Como funciona meu atendimento?
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          {FLOW.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-full bg-primary-deep px-5 py-2.5 text-sm font-semibold">
                {step}
              </span>
              {index < FLOW.length - 1 && (
                <span className="text-gold">↓</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Card
              key={step.title}
              className="rounded-3xl border-primary-foreground/15 bg-primary-deep shadow-none"
            >
              <CardContent className="p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold font-display text-lg font-extrabold text-gold-foreground">
                  {step.letter}
                </span>
                <p className="mt-6 text-xs text-primary-foreground/50">Etapa {index + 1}</p>
                <h3 className="mt-1 text-lg font-bold text-primary-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                  {step.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
