import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";
import { Home, Car, TrendingUp, Wallet } from "lucide-react";

const ITEMS = [
  {
    title: "Imóvel",
    icon: Home,
    rows: [
      ["Comprar", "Construir"],
      ["Reformar", "Terrenos"],
      ["Investimento", "Comercial"],
    ],
  },
  {
    title: "Veículo",
    icon: Car,
    rows: [
      ["Carros", "Motos"],
      ["Utilitários", "Caminhões"],
      ["Frotas"],
    ],
  },
  {
    title: "Investimento e Renda",
    icon: TrendingUp,
    rows: [
      ["Patrimônio", "Investir"],
      ["Gerar renda", "Longo prazo"],
    ],
  },
  {
    title: "Crédito Inteligente",
    icon: Wallet,
    rows: [
      ["Quitar financiamento"],
      ["Obter crédito", "Novos projetos"],
      ["Expandir negócios"],
    ],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-background py-14 md:py-24">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Possibilidades</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Qual é a sua próxima conquista?
          </h2>
          <p className="mt-3 leading-[1.7] text-muted-foreground">
            O consórcio pode ajudar muito mais do que a maioria das pessoas imagina.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 80} className="h-full">
                <a href="#cta" className="block h-full">
                  <Card className="card-lift h-full overflow-hidden rounded-3xl border-border/70 py-0 shadow-soft">
                    <CardContent className="flex h-full flex-col items-center p-4 text-center md:p-5">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary">
                        <Icon className="h-6 w-6 fill-gold/20 text-gold" />
                      </span>
                      <h3 className="mt-3 text-lg font-extrabold uppercase tracking-tight text-primary md:text-xl">
                        {item.title}
                      </h3>
                      <div className="mt-2.5 space-y-1">
                        {item.rows.map((row) => (
                          <p
                            key={row.join("-")}
                            className="text-[12px] leading-[1.5] text-muted-foreground"
                          >
                            {row.map((tag, i) => (
                              <span key={tag}>
                                {i > 0 && <span className="mx-1.5 text-gold/70">•</span>}
                                {tag}
                              </span>
                            ))}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 text-center" delay={320}>
          <p className="text-muted-foreground">
            E isso é apenas parte das possibilidades que o consórcio oferece.
          </p>
          <a
            href="#cta"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Quero conversar sobre meu projeto
          </a>
        </Reveal>
      </div>
    </section>
  );
}
