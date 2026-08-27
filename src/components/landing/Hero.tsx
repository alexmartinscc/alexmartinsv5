import { ExternalLink, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { ADEMICON_CREDENTIAL_URL, WHATSAPP_URL } from "@/lib/contact";
import heroAlex from "@/assets/alex-martins-foto.png";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden bg-secondary/70 pt-24 pb-12 md:pt-32 md:pb-16"
    >
      <div className="section-shell relative grid items-start gap-8 lg:grid-cols-[1.16fr_0.84fr] lg:gap-12">
        <Reveal className="max-w-xl pt-2 lg:pt-6">
          <p className="eyebrow">Planejamento Patrimonial</p>

          <h1 className="mt-4 text-[2.25rem] leading-[1.08] font-extrabold text-primary md:text-[3rem] lg:text-[3.25rem]">
            Construa hoje seu patrimônio.
            <br />
            Gere renda para o futuro.
          </h1>

          <p className="measure mt-4 text-base leading-[1.7] text-muted-foreground md:text-lg">
            Ajudo pessoas, profissionais autônomos e empresários a usar o consórcio para conquistar imóveis, construir patrimônio e gerar renda para ter mais independência financeira e segurança no futuro.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="w-full rounded-xl px-8 shadow-soft transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              <a href="#cta">Conte-me sobre o seu projeto</a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full rounded-xl px-6 text-primary/90 transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar pelo WhatsApp"
              >
                <MessageCircle className="h-4 w-4 text-gold" />
                Prefiro falar pelo WhatsApp
              </a>
            </Button>
          </div>

          <p className="measure mt-3 text-xs leading-[1.6] text-muted-foreground/80 md:text-sm">
            Leva menos de 2 minutos. Você não precisa falar comigo agora.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={ADEMICON_CREDENTIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Verificar credenciamento na Ademicon"
              aria-label="Verificar credenciamento na Ademicon"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border/70 bg-background px-4 py-1.5 text-xs font-medium text-primary shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/50 active:translate-y-0 active:scale-[0.98]"
            >
              <ShieldCheck className="h-4 w-4 text-gold" />
              Consultor Autorizado Ademicon
              <ExternalLink className="h-3 w-3 text-gold" />
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-4 py-1.5 text-xs font-medium text-primary shadow-soft">
              <ShieldCheck className="h-4 w-4 text-gold" />
              Estratégia Personalizada
            </span>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex items-start justify-center lg:justify-end">
          <ImageSlot
            path="/hero-alex.webp"
            src={heroAlex}
            priority
            ratio="4 / 5"
            alt="Alex Martins, consultor patrimonial"
            label="Alex Martins"
            className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[360px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
