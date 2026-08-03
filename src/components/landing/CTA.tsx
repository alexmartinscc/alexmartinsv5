import { Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/contact";

export function CTA() {
  return (
    <section id="cta" className="scroll-mt-24 bg-background pb-28 md:pb-40">
      <div className="section-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary-deep px-6 py-20 text-center md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-primary-foreground md:text-[2.5rem] md:leading-[1.15]">
                Vamos conversar sobre o seu projeto?
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-[1.8] text-primary-foreground/70">
                Antes de tomar qualquer decisão, conheça todas as possibilidades.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-10 rounded-xl bg-gold px-8 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </Button>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-primary-foreground/70 sm:flex-row sm:gap-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-gold" />
                  {WHATSAPP_NUMBER}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground"
                >
                  <Instagram className="h-4 w-4 text-gold" />
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
