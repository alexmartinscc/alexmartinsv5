import { Info, AlertTriangle, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ITEMS = [
  {
    icon: Info,
    title: "Falta de informação",
    text: "Muitas pessoas conhecem o nome \"consórcio\", mas nunca tiveram alguém que explicasse de forma simples como ele realmente funciona.",
  },
  {
    icon: AlertTriangle,
    title: "Promessas irreais",
    text: "Promessas de contemplação rápida ou garantida criam expectativas que nem sempre correspondem às regras do sistema de consórcios. Aqui você receberá informações claras e transparentes.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    text: "Infelizmente existem golpes e falsas promessas no mercado. Por isso trabalho exclusivamente com soluções Ademicon, oferecendo segurança e acompanhamento durante toda a jornada.",
  },
];

export function Problems() {
  return (
    <section id="problema" className="scroll-mt-24 bg-secondary py-20 md:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">O problema</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-4xl">
            Muita gente já ouviu falar de consórcio.
          </h2>
          <p className="mt-4 text-xl font-semibold text-primary md:text-2xl">
            Mas pouca gente realmente entende como ele funciona.
          </p>
          <p className="mt-4 text-muted-foreground">
            O consórcio é uma excelente estratégia em muitos casos. Ainda assim, muitas pessoas
            desistem dele ou tomam decisões equivocadas porque receberam informações incompletas ou
            criaram expectativas irreais.
          </p>
          <p className="mt-4 text-muted-foreground">
            Meu objetivo é ajudar você a entender como ele realmente funciona para decidir com
            segurança se faz sentido para o seu projeto.
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

        <p className="mt-12 text-center text-lg font-semibold text-primary md:text-xl">
          Você merece tomar uma decisão baseada em informação, e não em promessas.
        </p>
      </div>
    </section>
  );
}
