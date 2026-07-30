import { Compass, LineChart, Timer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ITEMS = [
  {
    icon: Compass,
    title: "Falta de direção",
    text: "Decisões tomadas por impulso, sem um plano de longo prazo.",
  },
  {
    icon: Timer,
    title: "Tempo perdido",
    text: "Anos de esforço sem transformar renda em patrimônio.",
  },
  {
    icon: LineChart,
    title: "Excesso de opções",
    text: "Muita informação e pouca clareza sobre o próximo passo.",
  },
];

export function Problems() {
  return (
    <section id="problema" className="scroll-mt-24 bg-secondary py-20 md:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">O problema</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-4xl">
            O patrimônio não cresce por falta de plano
          </h2>
          <p className="mt-4 text-muted-foreground">
            Situações comuns que atrasam a construção patrimonial de famílias e empresários.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ITEMS.map((item) => (
            <Card key={item.title} className="rounded-3xl border-border/70 shadow-soft">
              <CardContent className="p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-background">
                  <item.icon className="h-5 w-5 text-gold" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
