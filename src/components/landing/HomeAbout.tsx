import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ADEMICON_CREDENTIAL_URL } from "@/lib/contact";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";

export function HomeAbout() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-secondary py-12 md:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
        <Reveal>
          <ImageSlot
            path="/images/shared/alex-sobre.jpg"
            src="/images/shared/alex-sobre.jpg"
            ratio="4 / 5"
            alt="Alex Martins durante um atendimento de consultoria patrimonial"
            label="Foto de Alex Martins"
            className="mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]"
          />
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow">Sobre mim</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Experiência em estratégia aplicada ao seu patrimônio.
          </h2>
          <div className="measure mt-5 space-y-4 leading-[1.7] text-muted-foreground">
            <p>Minha trajetória profissional foi construída ao longo de mais de 20 anos no desenvolvimento de estratégias de negócios.</p>
            <p>Essa experiência me ensinou a analisar cenários, identificar oportunidades e transformar objetivos em planos estruturados.</p>
            <p>Hoje aplico essa visão como Consultor Autorizado Ademicon, ajudando pessoas, famílias e empresários a estruturar projetos patrimoniais com clareza, transparência e acompanhamento pessoal.</p>
          </div>
          <p className="measure mt-6 border-l-2 border-gold pl-4 text-base font-semibold leading-[1.65] text-primary md:text-lg">
            Você não recebe apenas uma proposta. Meu trabalho é ajudar você a entender a estratégia por trás da decisão.
          </p>
          <div className="mt-7 border-t border-border pt-6">
            <p className="text-sm font-bold text-primary">Consultor Autorizado Ademicon</p>
            <Button asChild variant="link" className="mt-1 h-auto p-0 text-gold">
              <a href={ADEMICON_CREDENTIAL_URL} target="_blank" rel="noopener noreferrer">
                Verificar minha credencial oficial <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
