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
            Conquiste seu patrimônio com consórcio
          </h1>

          <p className="mt-5 font-display text-xl font-bold tracking-tight text-gold md:text-2xl">
            Entender. Planejar. Conquistar.
          </p>

          <p className="measure mt-4 text-base leading-[1.8] text-muted-foreground md:text-lg">
            Sou Alex Martins, Consultor Autorizado Ademicon. Ajudo pessoas e empresas a conquistar
            imóveis e patrimônio de forma planejada.
          </p>

          <p className="measure mt-8 text-base leading-[1.8] font-semibold text-primary">
            O consórcio vai muito além de casa e carro.
          </p>
          <p className="measure mt-4 text-sm leading-[1.85] text-muted-foreground md:text-base">
            Ele pode ser usado para comprar, construir ou reformar imóveis, quitar financiamentos,
            gerar renda com aluguel e investir no seu negócio. Eu mostro o caminho certo para o seu
            objetivo.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-xl px-8 shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Quero conquistar meu imóvel
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl px-8 transition-colors duration-200"
            >
              <a href="#metodo">Ver como funciona</a>
            </Button>
          </div>

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
