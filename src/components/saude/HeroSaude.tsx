import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import heroSaude from "@/assets/hero-saude.png";

export function HeroSaude() {
  return (
    <section id="hero" className="relative isolate scroll-mt-24 overflow-hidden bg-primary-deep">
      <img
        src={heroSaude}
        width={1717}
        height={916}
        fetchPriority="high"
        decoding="async"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[72%_12%] md:object-[72%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-deep/86 via-primary-deep/84 to-primary-deep/95 md:bg-gradient-to-r md:from-primary-deep md:via-primary-deep/85 md:to-primary-deep/15"
      />

      <div className="section-shell flex min-h-[78vh] flex-col justify-center pt-28 pb-12 md:min-h-[86vh] md:pt-32 md:pb-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Estratégias patrimoniais para profissionais da saúde
          </p>

          <h1 className="mt-4 text-[2rem] font-extrabold leading-[1.12] text-primary-foreground md:text-[3rem] lg:text-[3.25rem]">
            Potencialize seus ganhos. Construa patrimônio.{" "}
            <span className="text-gold">Gere renda recorrente.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-[1.7] text-primary-foreground/85 md:text-lg">
            Utilize o consórcio de forma estratégica para alavancar conquistas, preservar capital e
            transformar seus recursos em novos patrimônios e fontes de renda ao longo do tempo.
          </p>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="h-auto w-full whitespace-normal rounded-xl bg-gold px-8 py-3 text-center text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto"
            >
              <a href="#cta" onClick={() => trackEvent("cta_hero_saude")}>
                Quero potencializar meus ganhos
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
        </div>
      </div>
    </section>
  );
}
