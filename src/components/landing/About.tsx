import { ShieldCheck, Target, MessageSquare, Calendar, User, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import sobreAlex from "@/assets/sobre-alex.jpg";
import { WHATSAPP_URL } from "@/lib/contact";

const DIFFERENTIALS = [
  {
    icon: User,
    title: "Atendimento personalizado",
    text: "Cada projeto possui objetivos, prazos e prioridades diferentes.",
  },
  {
    icon: Target,
    title: "Estratégia para seu objetivo",
    text: "Avaliação das possibilidades e construção da melhor estratégia para o seu momento.",
  },
  {
    icon: MessageSquare,
    title: "Canal direto comigo",
    text: "Você terá um canal de comunicação direto comigo para um atendimento humano e objetivo.",
  },
  {
    icon: Calendar,
    title: "Acompanhamento contínuo",
    text: "Informações sobre sorteios, oportunidades de lance, revisão de estratégia e apoio no processo de liberação do crédito após a contemplação.",
  },
  {
    icon: ShieldCheck,
    title: "Credibilidade e segurança",
    text: "Você será atendido por um profissional certificado e autorizado pela Ademicon, com acesso às melhores condições e oportunidades que só a maior administradora de consórcios do Brasil pode oferecer.",
  },
];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-secondary py-20 md:py-28">
      <div className="section-shell grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal>
          <ImageSlot
            path="/sobre-alex.webp"
            src={sobreAlex}
            ratio="4 / 5"
            alt="Alex Martins ouvindo uma cliente durante o atendimento"
            label="Foto do consultor"
          />
        </Reveal>

        <Reveal delay={100} className="flex flex-col justify-center">
          <p className="eyebrow">Sobre mim</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Prazer, sou Alex Martins.
          </h2>
          <p className="mt-4 text-base font-semibold text-primary md:text-lg">
            Consultor Autorizado Ademicon e Especialista em Conquista Patrimonial.
          </p>

          <div className="measure mt-6 space-y-4 leading-[1.85] text-muted-foreground">
            <p>
              Acredito que conquistar patrimônio não deve ser resultado de improviso, mas de decisões bem planejadas ao longo do tempo.
            </p>
            <p>
              Meu papel é ajudar você a avaliar possibilidades, tomar decisões com mais segurança e acompanhar seu projeto ao longo da jornada.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-border/70 border-l-4 border-l-gold bg-background px-6 py-6 shadow-soft">
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

          <h3 className="mt-10 text-xl font-bold text-primary">
            O que você pode esperar ao trabalhar comigo
          </h3>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIALS.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={150 + index * 80}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-border/70 bg-background px-5 py-5 shadow-soft">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15">
                      <Icon className="h-5 w-5 text-gold" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-primary">{item.title}</h3>
                      <p className="mt-1 text-sm leading-[1.65] text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-10 text-base font-semibold text-primary">
            Meu compromisso é ajudar você a transformar projetos em conquistas, com orientação, acompanhamento e suporte em cada etapa da jornada.
          </p>

          <div className="mt-8">
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
