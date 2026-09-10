import { Building2, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";

const CARDS = [
  {
    icon: Building2,
    title: "Expandir seu negócio",
    text: "Investir no crescimento da sua atividade, ampliar sua estrutura e criar novas possibilidades de atendimento e faturamento.",
    exemplos: [
      "Aquisição de sala comercial",
      "Construção ou reforma",
      "Equipamentos",
      "Veículos",
      "Ampliação da clínica ou consultório",
      "Nova unidade",
    ],
    micro: "Clínica • Consultório • Estrutura • Expansão",
  },
  {
    icon: Landmark,
    title: "Construir patrimônio e novas fontes de renda",
    text: "Criar uma estrutura patrimonial capaz de gerar renda no futuro, apoiar o planejamento da aposentadoria e contribuir para a manutenção do seu padrão de vida ao longo do tempo.",
    exemplos: [
      "Imóveis para renda",
      "Salas comerciais",
      "Terrenos",
      "Patrimônio imobiliário",
      "Diversificação patrimonial",
      "Construção de renda recorrente",
    ],
    micro: "Imóveis • Patrimônio • Renda recorrente • Aposentadoria",
  },
];

export function Objetivos() {
  return (
    <section id="objetivos" className="scroll-mt-24 bg-secondary py-14 md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Seus objetivos</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Qual é a sua principal prioridade hoje?
          </h2>
          <p className="mt-4 leading-[1.7] text-muted-foreground">
            Identificar o que você quer conquistar é o primeiro passo para estruturarmos a
            estratégia mais adequada ao seu momento.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-4 md:grid-cols-2 md:gap-6">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 90}>
              <article className="card-lift h-full rounded-2xl border border-border bg-card p-5 md:p-7">
                <card.icon
                  className="h-7 w-7 fill-gold/20 text-gold"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold text-primary md:text-2xl">{card.title}</h3>
                <p className="mt-2 leading-[1.7] text-muted-foreground">{card.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {card.exemplos.map((ex) => (
                    <li
                      key={ex}
                      className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-primary md:text-sm"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.08em] text-gold">
                  {card.micro}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-9 text-center" delay={180}>
          <Button
            asChild
            size="lg"
            className="h-auto whitespace-normal rounded-xl bg-gold px-8 py-3 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
          >
            <a href="#contato" data-cta-location="conquistas" data-cta-name="estruturar_objetivo">
              Quero estruturar meu objetivo
            </a>
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            Vamos entender sua prioridade e avaliar a melhor estratégia para alcançá-la.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
