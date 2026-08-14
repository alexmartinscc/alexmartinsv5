import { CalendarDays, ArrowLeftRight, Layers, Users, Banknote, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";

const BENEFITS = [
  {
    icon: CalendarDays,
    title: "Planejamento",
    text: "Ideal para quem deseja conquistar patrimônio com organização e visão de longo prazo.",
  },
  {
    icon: ArrowLeftRight,
    title: "Flexibilidade",
    text: "Utilize o crédito para comprar, construir, reformar, investir ou atender outros objetivos, conforme as regras da modalidade.",
  },
  {
    icon: Layers,
    title: "Mais possibilidades",
    text: "Uma única solução pode atender diferentes projetos pessoais, familiares ou empresariais.",
  },
  {
    icon: Users,
    title: "Para pessoas e empresas",
    text: "Uma alternativa utilizada tanto por quem deseja conquistar patrimônio quanto por empresas que querem crescer.",
  },
  {
    icon: Banknote,
    title: "Negociação à vista",
    text: "Após a contemplação, você pode negociar como comprador à vista, ampliando seu poder de negociação.",
  },
  {
    icon: Compass,
    title: "Estratégia",
    text: "Quando utilizada no momento certo, pode ser uma excelente alternativa para conquistar patrimônio.",
  },
];

export function WhyConsorcio() {
  return (
    <section id="por-que-consorcio" className="scroll-mt-24 bg-secondary py-16 md:py-24">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Benefícios</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Por que tantas pessoas estão escolhendo o consórcio?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-[1.7] text-muted-foreground">
            O consórcio deixou de ser apenas uma forma de comprar imóveis ou veículos. Hoje, é utilizado por quem deseja conquistar patrimônio com planejamento, flexibilidade e visão de longo prazo.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {BENEFITS.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="h-full">
              <a href="#cta" className="block h-full">
                <Card className="card-lift h-full rounded-3xl border-border/70 bg-background shadow-soft">
                  <CardContent className="p-4 md:p-5">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary">
                      <item.icon className="h-6 w-6 fill-gold/20 text-gold" />
                    </span>
                    <h3 className="mt-3 text-lg font-extrabold tracking-tight text-primary md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.6] text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={540}>
          <p className="text-muted-foreground">
            Cada projeto possui características diferentes. Entender qual estratégia faz mais sentido é o primeiro passo.
          </p>
          <a
            href="#cta"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Quero conversar sobre meu projeto
          </a>
        </Reveal>
      </div>
    </section>
  );
}

