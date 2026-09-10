import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { OBJETIVOS_CONQUISTAR, PUBLICOS } from "./objetivos";

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-background py-12 md:py-20">
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
                <a
                  href="#contato"
                  data-cta-location="conquistas"
                  data-cta-name="entender_possibilidades"
                  className="block h-full"
                >
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
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
            {PUBLICOS.map((publico, index) => {
              const Icon = publico.icon;
              const isLast = index === PUBLICOS.length - 1;
              const isSpecialized = !!publico.href;
              const baseClasses = cn(
                "group flex h-full flex-col items-center gap-2 rounded-2xl px-2 py-4 transition-colors sm:px-3",
                "hover:bg-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
                isSpecialized &&
                  "bg-gold/[0.03] ring-1 ring-gold/20 hover:bg-gold/[0.07]",
                isLast && "col-span-2 justify-self-center md:col-span-1"
              );
              const content = (
                <>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary">
                    <Icon
                      className="h-5 w-5 fill-gold/20 text-gold transition-colors group-hover:fill-gold/30"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-center text-xs font-semibold leading-tight text-primary sm:text-sm">
                    {publico.label}
                  </span>
                  {isSpecialized && (
                    <>
                      <span className="text-center text-xs font-medium text-gold">
                        Conteúdo especializado
                      </span>
                      <span className="mt-1 text-center text-xs font-semibold text-primary transition-colors group-hover:text-gold">
                        Ver página para{" "}
                        {publico.id === "saude" ? "Saúde" : "Igrejas"} →
                      </span>
                    </>
                  )}
                </>
              );

              return isSpecialized ? (
                <Link
                  key={publico.id}
                  to={publico.href}
                  className={baseClasses}
                  aria-label={publico.label}
                  onClick={() =>
                    trackEvent("specialized_content_click", {
                      segment: publico.id,
                    })
                  }
                >
                  {content}
                </Link>
              ) : (
                <a
                  key={publico.id}
                  href="#contato"
                  data-cta-location="conquistas"
                  data-cta-name="entender_possibilidades"
                  className={baseClasses}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
