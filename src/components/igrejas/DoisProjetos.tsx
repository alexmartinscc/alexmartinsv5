import { Church, Home, Users } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

const AREAS = [
  {
    icon: Church,
    title: "Para sua igreja",
    items: [
      "Sair do aluguel",
      "Comprar terreno",
      "Construir uma sede",
      "Reformar ou ampliar",
      "Adquirir veículos, vans ou equipamentos",
    ],
  },
  {
    icon: Home,
    title: "Para você, pastor",
    items: [
      "Construir patrimônio",
      "Comprar imóveis",
      "Gerar renda com locação",
      "Planejar aposentadoria ou jubilação",
      "Realizar projetos da família",
    ],
  },
  {
    icon: Users,
    title: "Para os membros da igreja",
    items: [
      "Casa própria",
      "Terreno ou construção",
      "Veículos",
      "Imóveis para renda",
      "Formação de patrimônio",
    ],
  },
];

export function DoisProjetos() {
  return (
    <section id="projetos" className="scroll-mt-24 bg-background py-12 md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">O próximo passo</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            O que você quer tornar possível?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-[1.6] text-muted-foreground">
            Reconhecer o que precisa mudar é o primeiro passo. Agora é hora de definir o que queremos
            construir.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-3 md:gap-10">
          {AREAS.map((area, index) => (
            <Reveal key={area.title} delay={index * 100}>
              <div className="h-full border-t-2 border-gold pt-6">
                <area.icon className="h-7 w-7 text-gold" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-extrabold text-primary">{area.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-primary">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      />
                      <span className="text-base leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-10">
          <p className="mx-auto max-w-3xl border-t border-gold/30 pt-8 text-center text-base font-semibold leading-[1.55] text-primary md:text-lg">
            Os objetivos são diferentes. O que todos têm em comum é a necessidade de transformar
            intenção em planejamento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
