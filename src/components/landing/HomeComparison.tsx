import { Clock3, Scale, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const POINTS = [
  {
    icon: WalletCards,
    title: "Quanto vai custar?",
    text: "Não olhe apenas para a parcela. Entenda o impacto total da decisão.",
  },
  {
    icon: Clock3,
    title: "Quanto tempo você tem?",
    text: "O prazo pode mudar completamente a estratégia.",
  },
  {
    icon: Scale,
    title: "Quanto da sua renda ou capital será comprometido?",
    text: "Uma conquista não deveria colocar outros objetivos em risco.",
  },
];

export function HomeComparison() {
  return (
    <section className="bg-secondary py-12 md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Antes de decidir, compare</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Não tome uma decisão patrimonial sem antes comparar.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-[1.7] text-muted-foreground">
            Financiamento, recursos próprios, consórcio e outras estratégias podem levar ao mesmo objetivo — mas com custos, prazos e impactos muito diferentes.
          </p>
        </Reveal>

        <div className="mx-auto mt-9 max-w-5xl">
          <p className="text-sm font-bold uppercase text-primary">Antes de decidir, compare:</p>
          <div className="mt-4 grid gap-0 md:grid-cols-3 md:gap-8">
            {POINTS.map((point, index) => {
              const Icon = point.icon;
              return (
                <Reveal key={point.title} delay={index * 80} className="border-t border-border py-6 md:border-l md:border-t-0 md:py-2 md:pl-6 first:md:border-l-0 first:md:pl-0">
                  <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-extrabold leading-snug text-primary">{point.title}</h3>
                  <p className="mt-2 text-base leading-[1.6] text-muted-foreground">{point.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mx-auto mt-8 max-w-3xl border-t border-gold/30 pt-8 text-center" delay={180}>
          <p className="text-lg font-semibold leading-[1.55] text-primary md:text-xl">
            Uma decisão de longo prazo merece mais do que uma simulação. Merece estratégia.
          </p>
          <Button asChild size="lg" className="mt-6 w-full rounded-xl bg-gold px-8 text-gold-foreground hover:bg-gold/90 sm:w-auto">
            <a href="#contato" data-cta-location="comparacao" data-cta-name="comparar_cenario">Quero comparar meu cenário</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
