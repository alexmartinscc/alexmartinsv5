import { Target, Calculator, CheckCircle2, Banknote, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";

const BENEFITS = [
  {
    icon: Target,
    title: "Planejamento Estratégico",
    text: "Transforme objetivos de longo prazo em metas concretas. O consórcio incentiva a disciplina financeira e a construção organizada de patrimônio.",
  },
  {
    icon: Calculator,
    title: "Previsibilidade de Custos",
    text: "Sem juros compostos. O custo é composto principalmente pela taxa de administração, distribuída ao longo do plano de forma previsível.",
  },
  {
    icon: CheckCircle2,
    title: "Flexibilidade na Escolha",
    text: "Na contemplação, você escolhe livremente o bem, serviço ou fornecedor que melhor atende ao seu projeto.",
  },
  {
    icon: Banknote,
    title: "Poder de Compra à Vista",
    text: "A carta de crédito permite negociar como comprador à vista, ampliando seu poder de negociação e acesso a melhores condições.",
  },
  {
    icon: TrendingUp,
    title: "Preservação do Capital",
    text: "O valor do crédito é atualizado periodicamente, ajudando a preservar o poder de compra ao longo do tempo.",
  },
];

export function WhyConsorcio() {
  return (
    <section id="por-que-consorcio" className="scroll-mt-24 bg-secondary py-28 md:py-40">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Benefícios</p>
          <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Por que o consórcio é uma estratégia tão utilizada?
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-[1.85] text-muted-foreground">
            Mais do que uma forma de compra, o consórcio é uma estratégia utilizada por milhões de
            brasileiros para realizar projetos, construir patrimônio e planejar o futuro.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {BENEFITS.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="h-full">
              <Card className="card-lift h-full rounded-3xl border-border/70 bg-background shadow-soft">
                <CardContent className="p-9">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary">
                    <item.icon className="h-5 w-5 text-gold" />
                  </span>
                  <h3 className="mt-7 text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
