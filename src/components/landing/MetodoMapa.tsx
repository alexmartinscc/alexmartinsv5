import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";

const STEPS = [
  { letter: "M", title: "Mapear seu objetivo", text: "Entender o que você deseja conquistar, seus prazos, prioridades e expectativas." },
  { letter: "A", title: "Avaliar as opções", text: "Analisar as alternativas disponíveis, pesquisar oportunidades e identificar condições que possam tornar seu projeto mais eficiente e vantajoso." },
  { letter: "P", title: "Planejar a melhor estratégia", text: "Estruturar uma solução alinhada ao seu momento, capacidade financeira e objetivos de curto, médio e longo prazo." },
  { letter: "A", title: "Aplicar e acompanhar seu projeto", text: "Auxilio você na contratação da solução escolhida de forma simples e segura. Depois disso, mantenho um canal direto de atendimento e acompanho a evolução do seu projeto ao longo do tempo." },
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
            Seu próximo patrimônio começa com um bom planejamento.
          </h2>
          <p className="mx-auto mt-7 max-w-xl leading-[1.85] text-primary-foreground/75">
            Cada pessoa possui objetivos, prazos e condições diferentes.
          </p>
          <p className="mx-auto mt-5 max-w-xl leading-[1.85] text-primary-foreground/90 font-medium">
            Por isso, antes de indicar qualquer solução, utilizo o Método MAPA para identificar as melhores possibilidades e construir uma estratégia adequada ao seu projeto.
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

        <Reveal delay={120} className="text-center">
          <p className="mx-auto mt-16 max-w-2xl border-t border-primary-foreground/15 pt-10 text-center text-lg leading-[1.8] font-semibold text-primary-foreground md:text-xl">
            Não existe uma solução única para todos.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-[1.8] text-primary-foreground/80">
            Cada projeto possui características, objetivos e desafios diferentes. Por isso, a estratégia mais adequada depende do seu momento e daquilo que você deseja conquistar.
          </p>
          <a
            href="#contato"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Quero conversar sobre meu projeto
          </a>
        </Reveal>
      </div>
    </section>
  );
}
