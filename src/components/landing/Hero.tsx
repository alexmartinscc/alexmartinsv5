import { ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import { ADEMICON_CREDENTIAL_URL } from "@/lib/contact";
import heroAlexAsset from "@/assets/alex-martins-foto.png.asset.json";

const heroAlex = heroAlexAsset.url;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden bg-secondary/70 pt-24 pb-12 md:pt-36 md:pb-20"
    >
      <div className="section-shell relative grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Planejamento Patrimonial</p>

          <h1 className="mt-3 text-[2.5rem] leading-[1.05] font-extrabold text-primary md:text-[3.5rem]">
            Conquiste seu próximo patrimônio com estratégia.
          </h1>

          <p className="measure mt-3 text-base leading-[1.7] text-muted-foreground md:text-lg">
            Planejamento para conquistar imóveis, veículos, investimentos e outros projetos com mais estratégia e menor custo.
          </p>

          <div className="mt-6">
            <Button
              asChild
              size="lg"
              className="rounded-xl px-8 shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
            >
              <a href="#cta">Quero conversar sobre meu projeto</a>
            </Button>
          </div>

          <p className="measure mt-4 text-sm font-medium tracking-wide text-gold">
            Imóveis • Veículos • Investimentos • Crédito Inteligente
          </p>

          <p className="measure mt-2 text-sm leading-[1.7] text-muted-foreground">
            Uma conversa para entender seu projeto e apresentar as melhores possibilidades para o seu objetivo.
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

        <Reveal delay={120}>
          <ImageSlot
            path="/hero-alex.webp"
            src={heroAlex}
            priority
            ratio="4 / 5"
            alt="Alex Martins, consultor patrimonial"
            label="Alex Martins"
            className="mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none"
          />
        </Reveal>
      </div>
    </section>
  );
}
