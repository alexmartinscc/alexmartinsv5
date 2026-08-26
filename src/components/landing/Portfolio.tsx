import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";
import {
  OBJETIVOS_PRINCIPAIS,
  OBJETIVOS_SECUNDARIOS,
  OBJETIVOS_VEICULOS,
} from "./objetivos";

export function Portfolio() {
  const [imoveis, renda] = OBJETIVOS_PRINCIPAIS;
  const Veiculos = OBJETIVOS_VEICULOS.icon;

  return (
    <section id="portfolio" className="scroll-mt-24 bg-background py-14 md:py-24">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Objetivos</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            O que você quer construir para o seu futuro?
          </h2>
          <p className="mt-3 leading-[1.7] text-muted-foreground">
            Cada objetivo pede um caminho diferente — e o consórcio pode ser a ferramenta
            estratégica para chegar até ele.
          </p>
        </Reveal>

        {/* Destaque principal */}
        <div className="mt-8 grid gap-4 lg:grid-cols-5 lg:gap-6">
          {[imoveis, renda].map((bloco, index) => {
            const Icon = bloco.icon;
            const wide = index === 0;
            return (
              <Reveal
                key={bloco.id}
                delay={index * 80}
                className={wide ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <a href="#cta" className="block h-full">
                  <Card className="card-lift h-full overflow-hidden rounded-3xl border-border/70 bg-secondary/50 py-0 shadow-soft">
                    <CardContent className="flex h-full flex-col p-6 md:p-8">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-background">
                        <Icon className="h-6 w-6 fill-gold/20 text-gold" />
                      </span>
                      <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-primary md:text-[1.75rem]">
                        {bloco.title}
                      </h3>
                      <ul
                        className={
                          wide
                            ? "mt-4 grid gap-y-2 gap-x-6 sm:grid-cols-2"
                            : "mt-4 grid gap-y-2"
                        }
                      >
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
                      {!wide ? (
                        <p className="mt-5 text-sm font-medium leading-[1.6] text-primary">
                          Renda de hoje → patrimônio → imóveis → renda no futuro.
                        </p>
                      ) : null}
                    </CardContent>
                  </Card>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Destaque intermediário */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:mt-6 lg:gap-6">
          {OBJETIVOS_SECUNDARIOS.map((bloco, index) => {
            const Icon = bloco.icon;
            return (
              <Reveal key={bloco.id} delay={index * 80} className="h-full">
                <a href="#cta" className="block h-full">
                  <Card className="card-lift h-full overflow-hidden rounded-3xl border-border/70 py-0 shadow-soft">
                    <CardContent className="flex h-full flex-col p-5 md:p-6">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary">
                          <Icon className="h-5 w-5 fill-gold/20 text-gold" />
                        </span>
                        <h3 className="text-lg font-extrabold tracking-tight text-primary">
                          {bloco.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-[1.6] text-muted-foreground">
                        {bloco.items.map((item, i) => (
                          <span key={item}>
                            {i > 0 && <span className="mx-1.5 text-gold/70">•</span>}
                            {item}
                          </span>
                        ))}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Secundário */}
        <Reveal className="mt-4 lg:mt-6" delay={160}>
          <a href="#cta" className="block">
            <div className="card-lift flex flex-col gap-2 rounded-3xl border border-border/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
              <div className="flex items-center gap-3">
                <Veiculos className="h-5 w-5 fill-gold/20 text-gold" />
                <h3 className="text-base font-bold tracking-tight text-primary">
                  {OBJETIVOS_VEICULOS.title}
                </h3>
              </div>
              <p className="text-sm leading-[1.6] text-muted-foreground">
                {OBJETIVOS_VEICULOS.items.map((item, i) => (
                  <span key={item}>
                    {i > 0 && <span className="mx-1.5 text-gold/70">•</span>}
                    {item}
                  </span>
                ))}
              </p>
            </div>
          </a>
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
