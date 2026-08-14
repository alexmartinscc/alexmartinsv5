import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";
import { Compass, Search, Target, Handshake } from "lucide-react";

const STEPS = [
  { letter: "M", title: "Mapear", subtitle: "Seu objetivo", icon: Compass },
  { letter: "A", title: "Avaliar", subtitle: "As opções", icon: Search },
  { letter: "P", title: "Planejar", subtitle: "A estratégia", icon: Target },
  { letter: "A", title: "Aplicar", subtitle: "E acompanhar", icon: Handshake },
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
            Como funciona o Método MAPA
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-[1.7] text-primary-foreground/80">
            Um processo simples para transformar seu projeto em uma conquista.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 90} className="h-full">
                <Card className="card-lift h-full rounded-3xl border-primary-foreground/12 bg-primary-deep shadow-none">
                  <CardContent className="flex flex-col items-center p-5 text-center md:p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold font-display text-xl font-extrabold text-gold-foreground">
                      {step.letter}
                    </span>
                    <span className="mt-4 grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10">
                      <Icon className="h-5 w-5 text-gold" />
                    </span>
                    <h3 className="mt-3 text-base font-bold md:text-lg text-primary-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary-foreground/65">
                      {step.subtitle}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
