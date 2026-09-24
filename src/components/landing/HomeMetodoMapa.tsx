import { Reveal } from "./Reveal";

const STEPS = [
  {
    letter: "M",
    label: "Mapear",
    title: "Entender seu projeto",
    description: "Onde você está, o que deseja conquistar, em quanto tempo e quais recursos possui.",
  },
  {
    letter: "A",
    label: "Analisar opções",
    title: "Comparar antes de decidir",
    description: "Avaliar caminhos, custos, prazos, vantagens e limitações.",
  },
  {
    letter: "P",
    label: "Planejar a estratégia",
    title: "Transformar possibilidades em um plano",
    description: "Estruturar um caminho coerente com seu objetivo e sua capacidade financeira.",
  },
  {
    letter: "A",
    label: "Acompanhar a jornada",
    title: "Meu trabalho não termina na decisão",
    description:
      "Você continua contando com meu atendimento pessoal para acompanhar o projeto, avaliar mudanças e manter a estratégia alinhada ao que foi planejado.",
  },
];

export function HomeMetodoMapa() {
  return (
    <section id="metodo" className="scroll-mt-24 bg-primary py-12 text-primary-foreground md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Método MAPA</p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-[2.5rem] md:leading-[1.15]">Como eu trabalho</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold leading-[1.6] text-primary-foreground">
            Antes de indicar um caminho, eu preciso entender aonde você quer chegar.
          </p>
          <p className="mx-auto mt-3 max-w-2xl leading-[1.7] text-primary-foreground/80">
            Uso o Método MAPA para organizar seu objetivo, prazo, recursos e possibilidades em uma estratégia clara — e acompanho você durante a jornada.
          </p>
        </Reveal>

        <div className="relative mt-9 lg:mt-12">
          <div className="absolute bottom-5 left-[1.375rem] top-5 w-px bg-primary-foreground/20 lg:left-0 lg:right-0 lg:top-10 lg:h-px lg:w-auto" />
          <div className="relative space-y-7 lg:grid lg:grid-cols-4 lg:gap-6 lg:space-y-0">
            {STEPS.map((step, index) => (
              <Reveal key={step.label} delay={index * 90} className="relative pl-12 lg:pl-0 lg:text-center">
                <div aria-hidden="true" className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center bg-primary lg:static lg:mx-auto lg:h-20 lg:w-auto">
                  <span className="font-display text-3xl font-extrabold text-gold lg:bg-primary lg:px-2 lg:text-6xl">{step.letter}</span>
                </div>
                <p className="text-xs font-bold uppercase text-primary-foreground/60 lg:mt-3">{step.label}</p>
                <h3 className="mt-1 text-lg font-extrabold leading-snug text-gold">{step.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-primary-foreground/85">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
