import { Target, Calculator, CheckCircle2, Banknote, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";

const BENEFITS = [
  {
    icon: Calculator,
    title: "Sem juros",
    text: "Você paga taxa de administração, não juros. O custo é previsível do começo ao fim do plano.",
  },
  {
    icon: Banknote,
    title: "Poder de compra à vista",
    text: "Com a carta de crédito você negocia como comprador à vista e conquista melhores condições.",
  },
  {
    icon: CheckCircle2,
    title: "Liberdade de escolha",
    text: "Contemplado, você escolhe o imóvel, o bem ou o fornecedor que fizer mais sentido para o seu projeto.",
  },
  {
    icon: Target,
    title: "Patrimônio no seu ritmo",
    text: "Parcelas que cabem no orçamento e disciplina para transformar um objetivo grande em conquista real.",
  },
  {
    icon: TrendingUp,
    title: "Crédito que acompanha o mercado",
    text: "O valor do crédito é atualizado periodicamente, preservando seu poder de compra ao longo do tempo.",
  },
];

export function WhyConsorcio() {
  return (
    <section id="por-que-consorcio" className="scroll-mt-24 bg-secondary py-28 md:py-40">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Benefícios</p>
          <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Por que tanta gente conquista patrimônio com consórcio?
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-[1.85] text-muted-foreground">
            Milhões de brasileiros usam o consórcio para comprar imóveis, ampliar patrimônio e
            crescer com planejamento. Estes são os motivos.
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
