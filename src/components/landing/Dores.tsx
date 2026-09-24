import { CircleDollarSign, Hourglass, Landmark, Scale } from "lucide-react";
import { Reveal } from "./Reveal";

const QUESTIONS = [
  { icon: CircleDollarSign, text: "Você sabe quanto sua decisão vai custar até o final?" },
  { icon: Landmark, text: "Seu dinheiro está ajudando a construir patrimônio ou apenas mantendo o presente?" },
  { icon: Hourglass, text: "Seu projeto está parado porque parece financeiramente distante?" },
  { icon: Scale, text: "Você já comparou outras formas de chegar ao mesmo objetivo?" },
];

export function Dores() {
  return (
    <section id="reflexao" className="scroll-mt-20 bg-secondary py-12 md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Uma Reflexão Necessária</p>
          <h2 className="mt-4 text-balance text-2xl font-extrabold leading-[1.2] text-primary md:text-[2.5rem] md:leading-[1.15]">
            Quanto pode custar continuar adiando — ou decidir sem comparar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.6] text-muted-foreground md:text-lg">
            Projetos importantes envolvem decisões que podem acompanhar você por muitos anos. Antes de comprometer sua renda ou seu patrimônio, vale entender se existe um caminho mais eficiente.
          </p>
        </Reveal>
        <div className="mt-9 grid gap-0 md:grid-cols-2 md:gap-x-10">
          {QUESTIONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.text} delay={index * 70} className={`border-t border-border/70 py-6 ${index < 2 ? "md:first:border-t-0 md:[&:nth-child(2)]:border-t-0" : ""}`}>
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-background"><Icon className="h-5 w-5 text-gold" aria-hidden="true" /></span>
                  <h3 className="text-lg font-extrabold leading-[1.4] text-primary md:text-xl">{item.text}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
