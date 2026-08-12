import { Info, AlertTriangle, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: Info,
    title: "Muito além de casa e carro",
    text: "Com consórcio você compra, constrói ou reforma imóveis, adquire terrenos, quita financiamentos e investe no seu negócio.",
  },
  {
    icon: AlertTriangle,
    title: "Sem promessas irreais",
    text: "Contemplação não tem data garantida. Aqui você recebe informação clara sobre sorteios, lances e prazos antes de decidir.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança de verdade",
    text: "Atuo exclusivamente com soluções Ademicon, autorizada pelo Banco Central, com acompanhamento em toda a jornada.",
  },
];

export function Problems() {
  return (
    <section id="problema" className="scroll-mt-24 bg-background py-28 md:py-40">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">O que quase ninguém conta</p>
          <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Todo mundo já ouviu falar de consórcio.
          </h2>
          <p className="mt-4 text-xl font-semibold text-gold md:text-2xl">
            Poucos sabem o quanto ele pode fazer pelo seu patrimônio.
          </p>
          <p className="mx-auto mt-6 max-w-2xl leading-[1.8] text-muted-foreground">
            O consórcio é uma das formas mais eficientes de conquistar imóveis e construir
            patrimônio sem juros. Mesmo assim, muita gente desiste por falta de informação ou por
            expectativas criadas por quem só quer vender.
          </p>
          <p className="mx-auto mt-4 max-w-2xl leading-[1.8] text-muted-foreground">
            Aqui é diferente: você entende as regras, vê os números e decide com clareza.
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
            Decisão boa é a que nasce de informação, não de promessa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
