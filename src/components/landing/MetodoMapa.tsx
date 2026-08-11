import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";

const STEPS = [
  { letter: "M", title: "Mapear", text: "Entender seu momento atual, seus objetivos, prioridades e expectativas." },
  { letter: "A", title: "Analisar Opções", text: "Avaliar as alternativas disponíveis e identificar os caminhos mais adequados para o seu projeto." },
  { letter: "P", title: "Planejar a Estratégia", text: "Definir a melhor estrutura, incluindo grupos, cotas e estratégias de lance quando aplicáveis." },
  { letter: "A", title: "Acompanhar a Jornada", text: "Oferecer suporte contínuo, orientação e acompanhamento até a utilização do crédito." },
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
            Como funciona meu atendimento
          </h2>
          <p className="mx-auto mt-7 max-w-xl leading-[1.85] text-primary-foreground/75">
            Cada pessoa possui objetivos, prazos e uma realidade financeira diferente.
          </p>
          <p className="mx-auto mt-5 max-w-xl leading-[1.85] text-primary-foreground/75">
            Por isso, não acredito em soluções prontas.
          </p>
          <p className="mx-auto mt-5 max-w-xl leading-[1.85] text-primary-foreground/75">
            Antes de sugerir qualquer estratégia, procuro compreender o seu momento, seus objetivos e o que você deseja realizar. A partir desse entendimento, construímos juntos um caminho mais claro para transformar o seu projeto em realidade.
          </p>
          <p className="mx-auto mt-5 max-w-xl leading-[1.85] text-primary-foreground/90 font-medium">
            Para tornar esse processo simples e organizado, utilizo um método próprio de atendimento: o Método MAPA.
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
            O resultado desse processo é uma estratégia personalizada construída exclusivamente
            para o seu projeto.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
