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
          <div className="measure mt-4 space-y-3 leading-[1.7] text-muted-foreground">
            <p>
              Acredito que conquistar patrimônio não deve ser resultado de improviso, mas de decisões bem planejadas ao longo do tempo.
            </p>
            <p>
              Meu papel é ajudar você a avaliar possibilidades, tomar decisões com mais segurança e acompanhar seu projeto ao longo da jornada.
            </p>
          </div>

          <div className="measure mt-5 flex items-start gap-3">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <div>
              <h3 className="text-base font-bold text-primary">Vale a pena conversar.</h3>
              <p className="mt-1 text-sm leading-[1.65] text-muted-foreground">
                Muitas pessoas acreditam que o consórcio não faz sentido para seus objetivos. Em uma conversa rápida, acabam descobrindo possibilidades que nunca haviam considerado.
              </p>
            </div>
          </div>

          <h3 className="mt-6 text-lg font-bold md:text-xl text-primary">
            O que você pode esperar ao trabalhar comigo
          </h3>

          <ul className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {DIFFERENTIALS.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={150 + index * 60}>
                  <li className="flex items-center gap-3">
                    <Icon className="h-[18px] w-[18px] shrink-0 text-gold" />
                    <span className="text-sm font-medium text-primary">{item.title}</span>
                  </li>
                </Reveal>
              );
            })}
          </ul>

          <div className="mt-6">
            <Button
              asChild
              size="lg"
              className="rounded-xl px-8 shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
            >
              <a href="#cta">Quero conversar sobre meu projeto</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
