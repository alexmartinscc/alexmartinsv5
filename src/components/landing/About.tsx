import { Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import sobreAlex from "@/assets/sobre-alex.jpg";
import { ADEMICON_CREDENTIAL_URL } from "@/lib/contact";

const POINTS = [
  {
    title: "Entendimento completo do consórcio",
    text: "Explico cada etapa para que você tome decisões com segurança.",
  },
  {
    title: "Estratégia personalizada",
    text: "Escolha dos grupos, cotas e definição da melhor estratégia de lances.",
  },
  {
    title: "Acompanhamento até a conquista",
    text: "Gestão contínua do contrato, suporte mensal e atendimento próximo durante toda a jornada.",
  },
];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-secondary py-28 md:py-40">
      <div className="section-shell grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <Reveal>
          <ImageSlot
            path="/sobre-alex.webp"
            src={sobreAlex}
            ratio="4 / 5"
            alt="Alex Martins ouvindo uma cliente durante o atendimento"
            label="Foto do consultor"
          />
        </Reveal>

        <Reveal delay={100} className="max-w-xl">
          <p className="eyebrow">Sobre</p>
          <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Prazer, sou Alex Martins.
          </h2>
          <p className="measure mt-6 leading-[1.85] text-muted-foreground">
            Atuo como Representante Autorizado Ademicon, unindo um atendimento próximo e
            personalizado à estrutura, segurança e credibilidade de uma das maiores administradoras
            independentes de consórcio do Brasil.
          </p>
          <p className="measure mt-4 leading-[1.85] text-muted-foreground">
            Meu compromisso é entender seus objetivos, explicar de forma clara como funcionam as
            soluções disponíveis e ajudá-lo a definir a melhor estratégia para realizar o seu
            projeto.
          </p>
          <p className="measure mt-4 leading-[1.85] text-muted-foreground">
            Após a contratação, continuo acompanhando toda a sua jornada, realizando a gestão do
            contrato, orientando sobre estratégias de lances, comunicando os resultados das
            assembleias e oferecendo suporte sempre que necessário.
          </p>
          <p className="measure mt-6 border-l-2 border-gold pl-5 text-base leading-[1.8] font-semibold text-primary">
            Você nunca estará sozinho durante essa jornada.
          </p>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border/70 bg-background px-5 py-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/15">
                <ShieldCheck className="h-4 w-4 text-gold" />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-primary">
                  Representante Autorizado Ademicon
                </span>
                <span className="text-sm leading-[1.7] text-muted-foreground">
                  Você pode confirmar minha credencial oficial diretamente no portal da Ademicon.
                  Essa é uma forma simples de garantir que está sendo atendido por um representante
                  credenciado.
                </span>
              </span>
            </div>
            <Button asChild variant="outline" className="shrink-0 rounded-xl">
              <a href={ADEMICON_CREDENTIAL_URL} target="_blank" rel="noopener noreferrer">
                Verificar credencial oficial
              </a>
            </Button>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-1">
            {POINTS.map((point) => (
              <li
                key={point.title}
                className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background px-5 py-4 shadow-soft"
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/15">
                  <Check className="h-3.5 w-3.5 text-gold" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-primary">{point.title}</span>
                  <span className="text-sm leading-[1.7] text-muted-foreground">{point.text}</span>
                </span>
              </li>
            ))}
          </ul>

        </Reveal>
      </div>
    </section>
  );
}
