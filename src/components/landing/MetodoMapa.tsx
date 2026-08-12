import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";

const STEPS = [
  { letter: "M", title: "Mapear o objetivo", text: "Entender o que você quer conquistar, em quanto tempo e quanto cabe no orçamento." },
  { letter: "A", title: "Analisar as opções", text: "Comparar prazos, valores e modalidades de consórcio para o seu objetivo." },
  { letter: "P", title: "Planejar a estratégia", text: "Definir grupo, cota e estratégia de lance para acelerar sua contemplação." },
  { letter: "A", title: "Acompanhar a conquista", text: "Suporte em assembleias, lances e uso do crédito até o objetivo virar realidade." },
];

export function MetodoMapa() {
  return (
    <section
      id="metodo"
      className="scroll-mt-24 bg-primary py-28 text-primary-foreground md:py-40"
    >
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Método MAPA</p>
          <h2 className="mt-5 text-3xl font-extrabold md:text-[2.5rem] md:leading-[1.15]">
            Como funciona na prática
          </h2>
          <p className="mx-auto mt-7 max-w-xl leading-[1.85] text-primary-foreground/75">
            Nada de solução pronta. Cada pessoa tem um objetivo, um prazo e um orçamento.
          </p>
          <p className="mx-auto mt-5 max-w-xl leading-[1.85] text-primary-foreground/90 font-medium">
            Por isso sigo quatro passos simples: o Método MAPA.
          </p>
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

        <Reveal delay={120}>
          <p className="mx-auto mt-16 max-w-2xl border-t border-primary-foreground/15 pt-10 text-center text-lg leading-[1.8] font-semibold text-primary-foreground md:text-xl">
            No final, você tem um plano claro e feito sob medida para a sua conquista.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
