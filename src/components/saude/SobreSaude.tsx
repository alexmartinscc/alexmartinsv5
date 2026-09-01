import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "@/components/landing/ImageSlot";
import { Reveal } from "@/components/landing/Reveal";
import { ADEMICON_CREDENTIAL_URL } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import sobreAlex from "@/assets/sobre-alex.jpg";

export function SobreSaude() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-secondary py-14 md:py-20">
      <div className="section-shell flex flex-col gap-8 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-x-14">
        <Reveal delay={80} className="order-2 lg:order-1">
          <ImageSlot
            path="/sobre-alex.webp"
            src={sobreAlex}
            ratio="4 / 5"
            alt="Alex Martins durante um atendimento de consultoria"
            label="Foto do consultor"
            className="mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[440px]"
          />
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <p className="eyebrow">Sobre mim</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Seu projeto merece mais do que uma proposta pronta.
          </h2>
          <div className="measure mt-4 space-y-4 leading-[1.7] text-muted-foreground">
            <p>Meu trabalho começa entendendo o que você deseja conquistar.</p>
            <p>
              A partir do seu objetivo, prazo e realidade financeira, analisamos as possibilidades e
              estruturamos uma estratégia para transformar planos em conquistas patrimoniais.
            </p>
            <p>
              Mais do que apresentar um produto, meu papel é ajudar você a entender as alternativas,
              tomar decisões com clareza e acompanhar sua jornada.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-lg font-bold text-primary">Alex Martins</p>
            <p className="text-sm text-muted-foreground">Consultor Patrimonial</p>
            <a
              href={ADEMICON_CREDENTIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultor Autorizado Ademicon — ver credencial oficial (abre em nova aba)"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline underline-offset-4 transition-colors hover:text-gold"
            >
              Consultor Autorizado Ademicon
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-6 border-l-2 border-gold bg-background px-5 py-4 text-base font-semibold leading-[1.7] text-primary md:text-lg">
            Entender. Planejar. Conquistar.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-6 h-auto w-full whitespace-normal rounded-xl bg-gold px-8 py-3 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto"
          >
            <a href="#cta" onClick={() => trackEvent("cta_sobre_saude")}>
              Quero conversar com Alex
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
