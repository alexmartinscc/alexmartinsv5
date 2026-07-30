import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="cta" className="scroll-mt-24 bg-background pb-20 md:pb-28">
      <div className="section-shell">
        <div className="rounded-4xl bg-primary-deep px-6 py-16 text-center md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-primary-foreground md:text-4xl">
            Vamos organizar seu próximo passo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
            Uma conversa direta para entender seu objetivo e apresentar o caminho.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-xl bg-gold text-gold-foreground hover:bg-gold/90"
          >
            Falar com o consultor
          </Button>
        </div>
      </div>
    </section>
  );
}
