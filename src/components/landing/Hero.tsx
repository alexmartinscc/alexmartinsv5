import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "./ImageSlot";

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 bg-background pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-xs font-medium text-primary">
            <ShieldCheck className="h-4 w-4 text-gold" />
            Representante autorizado Ademicon
          </span>

          <h1 className="mt-6 text-4xl leading-[1.1] font-extrabold text-primary md:text-5xl">
            Planejamento patrimonial com clareza e método
          </h1>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Uma conversa organizada para entender seu momento e desenhar o caminho de conquista do
            seu patrimônio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-xl">
              <a href="#cta">Iniciar conversa</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl">
              <a href="#metodo">Conhecer o método</a>
            </Button>
          </div>
        </div>

        <ImageSlot path="/hero-alex.webp" ratio="4 / 5" label="Foto principal" className="w-full" />
      </div>
    </section>
  );
}
