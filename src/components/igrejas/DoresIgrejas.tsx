import { Building2, CalendarClock, HeartHandshake, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/landing/Reveal";

const PAINS = [
  {
    id: "estrutura",
    icon: Building2,
    title: "A igreja cresceu. Mas a estrutura já não acompanha.",
    text: "Falta espaço, uma reforma precisa acontecer, o aluguel continua consumindo recursos ou aquele terreno e a sede própria permanecem como planos para o futuro.",
  },
  {
    id: "recomecar",
    icon: CalendarClock,
    title: "Cada novo projeto parece exigir começar tudo de novo.",
    text: "Uma construção, uma ampliação, uma van ou outro projeto importante pode ficar anos esperando o momento em que haverá dinheiro suficiente disponível.",
  },
  {
    id: "pastor",
    icon: HeartHandshake,
    title: "Quem cuida de tantas pessoas também pode deixar o próprio futuro para depois.",
    text: "O pastor dedica anos à igreja, à família e às pessoas que serve. E, nessa caminhada, construir patrimônio e preparar a aposentadoria ou jubilação pode acabar ficando sempre para o próximo ano.",
  },
  {
    id: "membros",
    icon: Home,
    title: "Existem sonhos dentro da comunidade que ainda não se transformaram em planos.",
    text: "Casa própria, patrimônio, veículos e projetos familiares fazem parte da realidade de muitos membros — mas ter um objetivo é diferente de ter um caminho para realizá-lo.",
  },
];

export function DoresIgrejas() {
  return (
    <section id="dores" className="scroll-mt-24 bg-[#F3F6F8] py-12 md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Pare e pense</p>
          <h2 className="mt-4 text-balance text-[1.5rem] font-extrabold leading-[1.22] text-primary md:text-[2.25rem] md:leading-[1.15]">
            Enquanto a igreja avança, quais projetos continuam esperando?
          </h2>
          <p className="mt-4 text-balance text-base leading-[1.55] text-muted-foreground md:text-[1.0625rem] md:leading-[1.6]">
            O trabalho continua, novas pessoas chegam, as necessidades aumentam e novos sonhos
            surgem. Mas nem sempre os recursos, a estrutura e o planejamento conseguem avançar no
            mesmo ritmo.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-14">
          <div className="grid gap-0 md:grid-cols-2 md:gap-x-10 md:gap-y-2">
            {PAINS.map((pain, index) => {
              const Icon = pain.icon;
              const row = Math.floor(index / 2);

              return (
                <Reveal key={pain.id} delay={index * 70} className="h-full">
                  <div
                    className={cn(
                      "h-full py-6 md:py-8",
                      index > 0 && "border-t border-border/60",
                      row > 0 ? "md:border-t md:border-border/60" : "md:border-t-0",
                    )}
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/50">
                      <Icon className="h-5 w-5 fill-gold/20 text-gold" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg font-extrabold leading-[1.3] tracking-tight text-primary md:text-xl">
                      {pain.title}
                    </h3>
                    <p className="mt-2 text-base leading-[1.55] text-muted-foreground">
                      {pain.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-8 md:mt-12" delay={180}>
          <div className="mx-auto max-w-3xl border-t border-gold/30 pt-8 md:pt-10">
            <p className="text-center text-base font-semibold leading-[1.5] text-primary md:text-lg md:leading-[1.55]">
              Alguns projetos precisam de recursos. Outros precisam, primeiro, de um plano.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
