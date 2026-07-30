import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "./ImageSlot";

const BADGES = [
  "Representante Autorizado Ademicon",
  "Atendimento Personalizado",
  "Método MAPA",
];

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 bg-background pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <div className="flex flex-wrap gap-2">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-xs font-medium text-primary"
              >
                <ShieldCheck className="h-4 w-4 text-gold" />
                {badge}
              </span>
            ))}
          </div>

          <h1 className="mt-6 text-4xl leading-[1.1] font-extrabold text-primary md:text-5xl">
            Cada projeto tem um caminho ideal — e meu trabalho é ajudar você a encontrá-lo.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Talvez você tenha chegado até aqui procurando informações sobre consórcio, buscando uma
            alternativa ao financiamento ou porque ouviu falar da Ademicon.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Seja qual for o motivo, você está no lugar certo.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Meu compromisso é explicar, de forma simples e transparente, como o consórcio funciona e
            ajudar você a descobrir se essa estratégia realmente faz sentido para o seu projeto.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-xl">
              <a href="#cta">Quero construir meu MAPA</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl">
              <a href="#">Conversar pelo WhatsApp</a>
            </Button>
          </div>
        </div>

        <ImageSlot path="/hero-alex.webp" ratio="4 / 5" label="Foto principal" className="w-full" />
      </div>
    </section>
  );
}
