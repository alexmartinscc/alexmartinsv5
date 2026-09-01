import { MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, ADEMICON_CREDENTIAL_URL } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import heroSaude from "@/assets/hero-saude.png";

export function HeroSaude() {
  return (
    <section id="hero" className="relative isolate scroll-mt-24 overflow-hidden bg-primary-deep">
      <img
        src={heroSaude}
        width={1600}
        height={1067}
        fetchPriority="high"
        decoding="async"
        alt="Profissional da saúde em uma clínica moderna"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[78%_18%] md:object-[70%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-deep/92 via-primary-deep/80 to-primary-deep/88 md:bg-gradient-to-r md:from-primary-deep md:via-primary-deep/85 md:to-primary-deep/20"
      />

      <div className="section-shell flex min-h-[80vh] flex-col justify-center pt-28 pb-12 md:min-h-[86vh] md:pt-32 md:pb-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Estratégias patrimoniais para profissionais da saúde
          </p>

          <h1 className="mt-4 text-[2.125rem] font-extrabold leading-[1.1] text-primary-foreground md:text-[3rem] lg:text-[3.25rem]">
            Faça sua carreira construir <span className="text-gold">mais do que renda.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-[1.7] text-primary-foreground/85 md:text-lg">
            Alavanque seu patrimônio, preserve capital e construa novas fontes de renda com
            estratégias planejadas para seus próximos projetos.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-[1.7] text-primary-foreground/70 md:text-base">
            Invista, cresça e prepare seu futuro sem concentrar todos os seus recursos em uma única
            decisão.
          </p>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="h-auto w-full whitespace-normal rounded-xl bg-gold px-8 py-3 text-center text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto"
            >
              <a href="#cta" onClick={() => trackEvent("cta_hero_saude")}>
                Quero estruturar meu próximo passo
              </a>
            </Button>

            <p className="mt-3 text-sm text-primary-foreground/80">
              Prefere conversar agora?{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { local: "hero_saude" })}
                className="inline-flex items-center gap-1.5 font-semibold text-gold underline underline-offset-4"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Fale comigo pelo WhatsApp.
              </a>
            </p>
          </div>

          <div className="mt-8 border-t border-primary-foreground/15 pt-5">
            <p className="text-sm font-semibold text-primary-foreground">
              Alex Martins | Consultor Patrimonial
            </p>
            <a
              href={ADEMICON_CREDENTIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 text-xs text-primary-foreground/75 underline underline-offset-4 transition-colors hover:text-primary-foreground"
            >
              Consultor Autorizado Ademicon
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
