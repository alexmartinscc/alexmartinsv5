import { Info, AlertTriangle, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";

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
    <section id="problema" className="scroll-mt-24 bg-background py-24 md:py-36">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">O problema</p>
          <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Muita gente já ouviu falar de consórcio.
          </h2>
          <p className="mt-4 text-xl font-semibold text-gold md:text-2xl">
            Mas pouca gente realmente entende como ele funciona.
          </p>
          <p className="mx-auto mt-6 max-w-2xl leading-[1.8] text-muted-foreground">
            O consórcio é uma excelente estratégia em muitos casos. Ainda assim, muitas pessoas
            desistem dele ou tomam decisões equivocadas porque receberam informações incompletas ou
            criaram expectativas irreais.
          </p>
          <p className="mx-auto mt-4 max-w-2xl leading-[1.8] text-muted-foreground">
            Meu objetivo é ajudar você a entender como ele realmente funciona para decidir com
            segurança se faz sentido para o seu projeto.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="h-full">
              <Card className="card-lift h-full rounded-3xl border-border/70 bg-card shadow-soft">
                <CardContent className="p-9">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary">
                    <item.icon className="h-5 w-5 text-gold" />
                  </span>
                  <h3 className="mt-7 text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-16 max-w-2xl border-t border-border pt-10 text-center text-lg font-semibold text-primary md:text-xl">
            Você merece tomar uma decisão baseada em informação, e não em promessas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
