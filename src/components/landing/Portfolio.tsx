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
    <section id="portfolio" className="scroll-mt-24 bg-background py-28 md:py-40">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Áreas de atuação</p>
          <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Qual é a sua próxima conquista?
          </h2>
          <p className="mt-5 leading-[1.8] text-muted-foreground">
            Seja para conquistar um imóvel, ampliar seu patrimônio, investir ou impulsionar seu negócio, o consórcio oferece muito mais possibilidades do que a maioria das pessoas imagina.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 80} className="h-full">
                <Card className="card-lift h-full overflow-hidden rounded-3xl border-border/70 py-0 shadow-soft">
                  <CardContent className="flex h-full flex-col items-center p-8 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10">
                      <Icon className="h-8 w-8 text-primary/80" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-primary">{item.title}</h3>
                    <ul className="mt-5 flex flex-wrap justify-center gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[12px] font-medium leading-none text-primary/80"
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

        <Reveal className="mt-16 text-center" delay={320}>
          <p className="text-muted-foreground">
            E isso é apenas parte das possibilidades que o consórcio oferece.
          </p>
          <a
            href="#contato"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Quero conversar sobre meu projeto
          </a>
        </Reveal>
      </div>
    </section>
  );
}
