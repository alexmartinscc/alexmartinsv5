import { ShieldCheck, Target, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import sobreAlex from "@/assets/sobre-alex.jpg";
import { ADEMICON_CREDENTIAL_URL } from "@/lib/contact";

const DIFFERENTIALS = [
  {
    icon: ShieldCheck,
    title: "Credencial Verificada",
    text: "Representante Autorizado Ademicon.",
    action: {
      label: "Verificar Profissional",
      href: ADEMICON_CREDENTIAL_URL,
    },
  },
  {
    icon: Target,
    title: "Planejamento Personalizado",
    text: "Estratégia alinhada aos seus objetivos e ao momento da sua vida.",
  },
  {
    icon: Handshake,
    title: "Acompanhamento Completo",
    text: "Do planejamento à conquista, com suporte próximo durante toda a jornada.",
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

          <div className="measure mt-6 space-y-4 leading-[1.85] text-muted-foreground">
            <p>
              Como Representante Autorizado Ademicon, uno a segurança e a credibilidade de uma das
              maiores administradoras de consórcio do Brasil a um atendimento próximo, humano e
              focado no que realmente importa: o seu projeto.
            </p>
            <p>
              Meu trabalho não é apenas apresentar uma solução financeira. É entender seus
              objetivos, esclarecer suas dúvidas e ajudá-lo a construir a melhor estratégia para
              transformar seus planos em realidade.
            </p>
            <p>
              E o diferencial não termina na contratação. Após a adesão, continuo ao seu lado
              acompanhando toda a jornada. Auxilio na definição das estratégias de lance, acompanho
              os resultados das assembleias, ofereço suporte nas etapas burocráticas e estou
              disponível para orientar você sempre que necessário.
            </p>
            <p className="font-semibold text-primary">
              Do planejamento à conquista, você conta com um profissional comprometido em tornar
              esse processo mais simples, seguro e transparente.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                    {item.action && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-auto w-full rounded-xl"
                      >
                        <a
                          href={item.action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.action.label}
                        </a>
                      </Button>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
