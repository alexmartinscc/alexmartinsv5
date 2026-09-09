import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "@/lib/contact";
const HERO_IMAGE = "/images/home/hero-image.webp";
const HERO_IMAGE_MOBILE = "/images/home/hero-image-mobile.webp";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#041628] pt-[42vh] pb-14 md:pt-32 md:pb-20 lg:flex lg:min-h-[85vh] lg:items-center"
    >
      <picture>
        <source media="(max-width: 767px)" srcSet={heroImageMobile.url} type="image/webp" />
        <img
          src={heroImage.url}
          alt=""
          aria-hidden
          width={1672}
          height={941}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_top] md:object-[center_right]"
        />
      </picture>

      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(4,22,40,0.22)_0%,rgba(4,22,40,0.45)_24%,rgba(4,22,40,0.90)_38%,rgba(4,22,40,0.96)_60%,rgba(4,22,40,0.98)_100%)] md:bg-[linear-gradient(90deg,rgba(4,22,40,0.96)_0%,rgba(4,22,40,0.88)_35%,rgba(4,22,40,0.55)_55%,rgba(4,22,40,0.10)_82%)]"
      />


      <div className="section-shell relative">
        <Reveal className="max-w-[640px]">
          <p className="eyebrow">Planejamento Patrimonial</p>

          <h1 className="mt-4 text-[2rem] leading-[1.1] font-extrabold text-white sm:text-[2.4rem] md:text-[2.75rem] lg:text-[3.125rem]">
            Construa hoje seu patrimônio.
            <br className="hidden sm:block" />{" "}
            <span className="text-gold">Gere renda para o futuro.</span>
          </h1>

          <p className="mt-5 max-w-[600px] text-base leading-[1.7] text-white/85 md:text-[1.125rem]">
            Ajudo pessoas, profissionais autônomos e empresários a usar o consórcio para conquistar
            imóveis, construir patrimônio e gerar renda para ter mais independência financeira e
            segurança no futuro.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="w-full rounded-xl bg-gold px-8 text-gold-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90 focus-visible:ring-gold focus-visible:ring-offset-[#041628] sm:w-auto"
            >
              <a href="#cta">Conte-me sobre o seu projeto</a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full rounded-xl border-white/45 bg-white/5 px-6 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/12 hover:text-white focus-visible:ring-gold focus-visible:ring-offset-[#041628] sm:w-auto"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar pelo WhatsApp"
              >
                <MessageCircle className="h-4 w-4 text-gold" />
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-7 max-w-[520px]">
            <p className="text-sm font-semibold text-white/90">Em parceria com a Ademicon</p>
            <p className="mt-1 text-xs leading-[1.6] text-white/65 md:text-[0.8125rem]">
              Administradora autorizada pelo Banco Central do Brasil e associada à ABAC.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
