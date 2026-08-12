import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import heroAlexAsset from "@/assets/alex-martins-foto.png.asset.json";
import { WHATSAPP_URL } from "@/lib/contact";

const heroAlex = heroAlexAsset.url;

const BADGES = [
  "Consultor Autorizado Ademicon",
  "Consórcio Imobiliário",
  "Estratégia Personalizada",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden bg-background pt-36 pb-28 md:pt-48 md:pb-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-secondary/70"
      />

      <div className="section-shell relative grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Especialista em Conquista Patrimonial</p>

          <h1 className="mt-6 text-[2.5rem] leading-[1.05] font-extrabold text-primary md:text-[3.5rem]">
            Conquiste seu próximo patrimônio com estratégia.
          </h1>

          <p className="measure mt-5 text-base leading-[1.8] text-muted-foreground md:text-lg">
            Imóveis, veículos, investimentos e soluções inteligentes para transformar seus projetos em realidade.
          </p>

          <p className="measure mt-8 text-base leading-[1.8] font-semibold text-primary">
            Alex Martins
          </p>
          <p className="measure text-sm leading-[1.85] text-muted-foreground md:text-base">
            Consultor Autorizado Ademicon
            <br />
            Especialista em Conquista Patrimonial
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-xl px-8 shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Quero conversar sobre meu projeto
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl px-8 transition-colors duration-200"
            >
              <a href="#metodo">Conheça o Método MAPA</a>
            </Button>
          </div>

          <p className="measure mt-5 text-sm leading-[1.85] text-muted-foreground">
            Uma conversa para entender seu projeto e apresentar as melhores possibilidades para o seu objetivo.
          </p>

          <p className="measure mt-3 text-sm font-medium tracking-wide text-gold">
            Imóveis • Veículos • Investimentos • Crédito Inteligente
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-4 py-1.5 text-xs font-medium text-primary shadow-soft"
              >
                <ShieldCheck className="h-4 w-4 text-gold" />
                {badge}
              </span>
            ))}
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
            className="w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
