import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { OBJETIVOS_CONQUISTAR, PUBLICOS } from "./objetivos";

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-background py-14 md:py-24">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Objetivos</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            O que você quer conquistar?
          </h2>
          <p className="mt-3 leading-[1.7] text-muted-foreground">
            Com planejamento, o consórcio pode ajudar você a transformar seus planos em
            patrimônio, renda e novas possibilidades.
          </p>
        </Reveal>

        {/* Dois objetivos principais — mesmo peso visual */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
          {OBJETIVOS_CONQUISTAR.map((bloco, index) => {
            const Icon = bloco.icon;
            return (
              <Reveal key={bloco.id} delay={index * 80} className="h-full">
                <a href="#cta" className="block h-full">
                  <Card className="card-lift h-full overflow-hidden rounded-3xl border-border/70 bg-secondary/50 py-0 shadow-soft">
                    <CardContent className="flex h-full flex-col p-6 md:p-8">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-background">
                        <Icon className="h-6 w-6 fill-gold/20 text-gold" />
                      </span>
                      <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-primary md:text-[1.75rem]">
                        {bloco.title}
                      </h3>
                      <ul className="mt-4 grid gap-y-2">
                        {bloco.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm leading-[1.6] text-muted-foreground"
                          >
                            <span className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Públicos atendidos — composição leve */}
        <Reveal className="mt-10 md:mt-14" delay={160}>
          <div className="text-center">
            <h3 className="text-lg font-extrabold tracking-tight text-primary md:text-xl">
              Quem pode se beneficiar
            </h3>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
            {PUBLICOS.map((publico, index) => {
              const Icon = publico.icon;
              const isLast = index === PUBLICOS.length - 1;
              return (
                <a
                  key={publico.id}
                  href="#cta"
                  className={cn(
                    "group flex flex-col items-center gap-2 rounded-2xl px-3 py-3 transition-colors hover:bg-secondary/30",
                    isLast && "col-span-2 justify-self-center sm:col-span-1"
                  )}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary">
                    <Icon className="h-5 w-5 fill-gold/20 text-gold transition-colors group-hover:fill-gold/30" />
                  </span>
                  <span className="text-center text-sm font-semibold text-primary">
                    {publico.label}
                  </span>
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-8 text-center" delay={240}>
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Quero conversar sobre meu projeto
          </a>
        </Reveal>
      </div>
    </section>
  );
}
