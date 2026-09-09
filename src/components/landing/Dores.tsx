import { Wallet, Activity, CalendarClock, Compass } from "lucide-react";
import { Reveal } from "./Reveal";

const PAINS = [
  {
    id: "dinheiro-entra",
    icon: Wallet,
    title: "O dinheiro entra. Mas quanto realmente fica?",
    text: "Você trabalha, vende, produz, fatura — e ainda assim percebe que boa parte do resultado desaparece entre despesas, compromissos e novas necessidades. Os anos passam, mas o patrimônio nem sempre cresce na mesma proporção.",
  },
  {
    id: "renda-depende-ritmo",
    icon: Activity,
    title: "Se você diminuir o ritmo, sua renda também diminui?",
    text: "Para muita gente, a renda ainda depende diretamente da profissão, do negócio ou da produção. Enquanto tudo vai bem, isso parece natural. Mas construir patrimônio também significa criar alternativas para não depender para sempre apenas da própria capacidade de trabalhar.",
  },
  {
    id: "projeto-ano-que-vem",
    icon: CalendarClock,
    title: "Quantas vezes um projeto importante já ficou para o ano que vem?",
    text: "O imóvel, a construção, a expansão, aquele novo projeto ou investimento continuam nos planos — mas sempre aparece outra prioridade. Sem uma estratégia, sonhos importantes podem passar anos esperando o “momento ideal”.",
  },
  {
    id: "prioridades-mudam",
    icon: Compass,
    title: "Você está preparado para o momento em que suas prioridades mudarem?",
    text: "Hoje o foco pode estar na carreira, na empresa, na família ou na produção. Amanhã, talvez você queira trabalhar menos, aproveitar mais o tempo, ajudar seus filhos ou simplesmente ter liberdade para escolher. O patrimônio que você constrói hoje pode ampliar essas escolhas no futuro.",
  },
];

export function Dores() {
  return (
    <section id="dores" className="scroll-mt-24 bg-background py-14 md:py-24">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Pare e pense</p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Você está construindo o futuro — ou apenas sustentando o presente?
          </h2>
          <p className="mt-4 text-balance leading-[1.7] text-muted-foreground">
            A rotina exige muito. A renda entra, o negócio gira, a produção continua e novas
            responsabilidades aparecem. Mas, em algum momento, surge uma pergunta importante: quanto
            de todo esse esforço está realmente se transformando em patrimônio, renda e liberdade
            para o futuro?
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
          {PAINS.map((pain, index) => {
            const Icon = pain.icon;
            return (
              <Reveal key={pain.id} delay={index * 80} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border-t-2 border-gold/40 bg-secondary/30 px-6 py-6 md:px-8 md:py-8">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-background">
                    <Icon className="h-5 w-5 fill-gold/20 text-gold" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold leading-snug tracking-tight text-primary md:text-xl">
                    {pain.title}
                  </h3>
                  <p className="mt-3 leading-[1.7] text-muted-foreground">{pain.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 md:mt-14" delay={180}>
          <div className="mx-auto max-w-3xl rounded-2xl border-l-2 border-gold bg-secondary px-6 py-6 md:px-8 md:py-8">
            <p className="text-center text-base font-semibold leading-[1.7] text-primary md:text-lg">
              Trabalhar muito pode construir uma boa renda. Transformar essa renda em patrimônio
              exige decisão e planejamento.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
