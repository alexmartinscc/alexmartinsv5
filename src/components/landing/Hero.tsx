import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";

const BADGES = [
  "Representante Autorizado Ademicon",
  "Atendimento Personalizado",
  "Método MAPA",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden bg-background pt-36 pb-24 md:pt-44 md:pb-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-secondary/70"
      />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal className="max-w-xl">
          <div className="flex flex-wrap gap-2">
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

          <h1 className="mt-8 text-[2.25rem] leading-[1.08] font-extrabold text-primary md:text-[3.25rem]">
            Cada projeto tem um caminho ideal — e meu trabalho é ajudar você a encontrá-lo.
          </h1>

          <p className="measure mt-7 text-base leading-[1.8] text-muted-foreground md:text-lg">
            Talvez você tenha chegado até aqui procurando informações sobre consórcio, buscando uma
            alternativa ao financiamento ou porque ouviu falar da Ademicon.
          </p>
          <p className="measure mt-4 text-base leading-[1.8] font-semibold text-primary md:text-lg">
            Seja qual for o motivo, você está no lugar certo.
          </p>
          <p className="measure mt-4 text-base leading-[1.8] text-muted-foreground md:text-lg">
            Meu compromisso é explicar, de forma simples e transparente, como o consórcio funciona e
            ajudar você a descobrir se essa estratégia realmente faz sentido para o seu projeto.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-xl px-8 shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
            >
              <a href="#cta">Quero construir meu MAPA</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl px-8 transition-colors duration-200"
            >
              <a href="#">Conversar pelo WhatsApp</a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ImageSlot
            path="/hero-alex.webp"
            ratio="4 / 5"
            label="Foto principal"
            className="w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
