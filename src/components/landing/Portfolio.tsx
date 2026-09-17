import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
            Qual projeto você quer realizar?
          </h2>
          <p className="mt-3 leading-[1.7] text-muted-foreground">
            O consórcio pode fazer parte de diferentes estratégias. O primeiro passo é entender o
            que você deseja conquistar.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:gap-5">
          {OBJETIVOS_CONQUISTAR.map((bloco, index) => {
            const Icon = bloco.icon;
            return (
              <Reveal key={bloco.id} delay={index * 80} className="h-full">
                <a
                  href="#contato"
                  data-cta-location="conquistas"
                  data-cta-name={`projeto_${bloco.id}`}
                  className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2"
                >
                  <Card className="h-full overflow-hidden rounded-2xl border-border/70 bg-secondary/40 py-0 shadow-none transition-colors group-hover:border-gold/40 group-hover:bg-secondary/60">
                    <CardContent className="flex h-full items-start gap-4 p-5 md:p-6">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-background">
                        <Icon className="h-6 w-6 fill-gold/20 text-gold" />
                      </span>
                      <div>
                        <h3 className="text-lg font-extrabold text-primary md:text-xl">{bloco.title}</h3>
                        <p className="mt-2 text-sm leading-[1.6] text-muted-foreground">{bloco.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6 md:mt-8" delay={120}>
          <div className="flex flex-col gap-5 border-y border-border/70 py-6 md:flex-row md:items-center md:justify-between md:gap-10 md:py-7">
            <div className="max-w-2xl">
              <h3 className="text-xl font-extrabold text-primary md:text-2xl">Cada projeto exige uma estratégia diferente.</h3>
              <p className="mt-2 text-sm leading-[1.7] text-muted-foreground md:text-base">
                Analiso seu objetivo, prazo e capacidade financeira para estruturar uma proposta adequada à sua realidade.
              </p>
            </div>
            <Button asChild size="lg" className="w-full shrink-0 rounded-xl bg-gold px-7 text-gold-foreground hover:bg-gold/90 md:w-auto">
              <a href="#contato" data-cta-location="objetivos_transicao" data-cta-name="analisar_projeto">
                Quero analisar meu projeto
              </a>
            </Button>
          </div>
        </Reveal>

        {/* Públicos atendidos — composição leve */}
        <Reveal className="mt-8 md:mt-12" delay={160}>
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
