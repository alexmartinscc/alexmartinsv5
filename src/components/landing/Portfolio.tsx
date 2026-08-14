import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";
import { Home, Car, TrendingUp, Wallet } from "lucide-react";

const ITEMS = [
  {
    title: "Imóvel",
    icon: Home,
    tags: [
      "Comprar",
      "Construir",
      "Reformar",
      "Terrenos",
      "Investimento",
      "Comercial",
    ],
  },
  {
    title: "Veículo",
    icon: Car,
    tags: [
      "Carros",
      "Motos",
      "Utilitários",
      "Caminhões",
      "Frotas",
    ],
  },
  {
    title: "Investimento e Renda",
    icon: TrendingUp,
    tags: [
      "Patrimônio",
      "Investir",
      "Gerar renda",
      "Longo prazo",
    ],
  },
  {
    title: "Crédito Inteligente",
    icon: Wallet,
    tags: [
      "Quitar financiamento",
      "Obter crédito",
      "Novos projetos",
      "Expandir negócios",
    ],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-background py-16 md:py-24">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Áreas de atuação</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Qual é a sua próxima conquista?
          </h2>
          <p className="mt-4 leading-[1.7] text-muted-foreground">
            Seja para conquistar um imóvel, ampliar seu patrimônio, investir ou impulsionar seu negócio, o consórcio oferece muito mais possibilidades do que a maioria das pessoas imagina.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 80} className="h-full">
                <Card className="card-lift h-full overflow-hidden rounded-3xl border-border/70 py-0 shadow-soft">
                  <CardContent className="flex h-full flex-col items-center p-5 text-center md:p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10">
                      <Icon className="h-6 w-6 text-primary/80" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-primary md:text-lg">{item.title}</h3>
                    <ul className="mt-3 flex flex-wrap justify-center gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-medium leading-none text-primary/80"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center" delay={320}>
          <p className="text-muted-foreground">
            E isso é apenas parte das possibilidades que o consórcio oferece.
          </p>
          <a
            href="#contato"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Quero conversar sobre meu projeto
          </a>
        </Reveal>
      </div>
    </section>
  );
}
