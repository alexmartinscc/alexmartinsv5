import { ShieldCheck, Target, MessageSquare, Calendar, User, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import sobreAlex from "@/assets/sobre-alex.jpg";
import { WHATSAPP_URL } from "@/lib/contact";

const DIFFERENTIALS = [
  { icon: User, title: "Atendimento personalizado" },
  { icon: Target, title: "Estratégia para seu objetivo" },
  { icon: MessageSquare, title: "Canal direto comigo" },
  { icon: Calendar, title: "Acompanhamento contínuo" },
  { icon: ShieldCheck, title: "Credibilidade e segurança" },
];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-secondary py-16 md:py-24">
      <div className="section-shell grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <ImageSlot
            path="/sobre-alex.webp"
            src={sobreAlex}
            ratio="4 / 5"
            alt="Alex Martins ouvindo uma cliente durante o atendimento"
            label="Foto do consultor"
            className="mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none"
          />
        </Reveal>

        <Reveal delay={100} className="flex flex-col justify-center">
          <p className="eyebrow">Sobre mim</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Prazer, sou Alex Martins.
          </h2>
          <p className="mt-3 text-base font-semibold text-primary md:text-lg">
            Consultor Autorizado Ademicon e Especialista em Conquista Patrimonial.
          </p>

          <div className="measure mt-4 space-y-3 leading-[1.7] text-muted-foreground">
            <p>
              Acredito que conquistar patrimônio não deve ser resultado de improviso, mas de decisões bem planejadas ao longo do tempo.
            </p>
            <p>
              Meu papel é ajudar você a avaliar possibilidades, tomar decisões com mais segurança e acompanhar seu projeto ao longo da jornada.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-border/70 border-l-4 border-l-gold bg-background px-5 py-4 shadow-soft">
            <div className="flex items-start gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/15">
                <Lightbulb className="h-5 w-5 text-gold" />
              </span>
              <div>
                <h3 className="text-base font-bold text-primary">Vale a pena conversar.</h3>
                <p className="mt-1 text-sm leading-[1.65] text-muted-foreground">
                  Muitas pessoas acreditam que o consórcio não se encaixa em seus objetivos. Mas, em uma conversa rápida, acabam descobrindo possibilidades que nunca haviam considerado para seus projetos.
                </p>
              </div>
            </div>
          </div>

          <h3 className="mt-8 text-lg font-bold md:text-xl text-primary">
            O que você pode esperar ao trabalhar comigo
          </h3>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {DIFFERENTIALS.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={150 + index * 80}>
                  <div className="flex flex-col gap-2 rounded-2xl border border-border/70 bg-background px-4 py-3 shadow-soft">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15">
                      <Icon className="h-5 w-5 text-gold" />
                    </span>
                    <h3 className="text-sm font-bold text-primary leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-8 text-base font-semibold text-primary">
            Meu compromisso é ajudar você a transformar projetos em conquistas, com orientação, acompanhamento e suporte em cada etapa da jornada.
          </p>

          <div className="mt-6">
            <Button
              asChild
              size="lg"
              className="rounded-xl px-8 shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Quero conversar sobre meu projeto
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
