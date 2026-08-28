import { Church, Home } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

const AREAS = [
  {
    icon: Church,
    title: "Para sua igreja",
    subtitle: "Planeje os próximos passos da sua igreja.",
    items: [
      "Sair do aluguel",
      "Comprar terreno",
      "Construir o templo",
      "Reformar ou ampliar",
      "Adquirir veículos, vans e utilitários",
    ],
  },
  {
    icon: Home,
    title: "Para você e sua família",
    subtitle: "Construa patrimônio para o seu futuro.",
    items: [
      "Casa própria",
      "Imóveis para renda",
      "Terrenos e construção",
      "Patrimônio para aposentadoria",
      "Veículos",
    ],
  },
];

export function DoisProjetos() {
  return (
    <section id="projetos" className="scroll-mt-24 bg-background py-16 md:py-24">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Planejamento</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Dois tipos de projetos.
            <br />
            Dois tipos de responsabilidade.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-[1.7] text-muted-foreground">
            Cuidar da obra e cuidar do futuro da sua família podem caminhar juntos quando existe
            planejamento.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-2 md:gap-12">
          {AREAS.map((area, index) => (
            <Reveal key={area.title} delay={index * 100}>
              <div className="h-full border-t-2 border-gold pt-6">
                <area.icon className="h-7 w-7 text-gold" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-extrabold text-primary md:text-2xl">
                  {area.title}
                </h3>
                <p className="mt-2 leading-[1.7] text-muted-foreground">{area.subtitle}</p>
                <ul className="mt-5 space-y-2.5">
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

        <Reveal delay={150} className="mt-12">
          <p className="mx-auto max-w-3xl border-l-2 border-gold bg-secondary px-5 py-4 text-base leading-[1.7] text-primary md:text-lg">
            Cuidar da igreja e cuidar do futuro da sua família não precisam ser projetos
            concorrentes. Com planejamento, é possível construir os dois caminhos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
