import { MessageCircle, ShieldCheck, Wallet, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";

const BENEFITS = [
  { icon: Wallet, label: "Sem entrada" },
  { icon: Percent, label: "Sem juros" },
  { icon: ShieldCheck, label: "Com segurança e garantia" },
];

export function HeroIgrejas() {
  return (
    <section id="hero" className="relative isolate scroll-mt-24 overflow-hidden bg-primary-deep">
      <img
        src="/images/igrejas/hero-igrejas.webp"
        srcSet="/images/igrejas/hero-igrejas-800.webp 800w, /images/igrejas/hero-igrejas.webp 1600w"
        sizes="100vw"
        width={1600}
        height={1067}
        fetchPriority="high"
        decoding="async"
        alt="Culto em uma igreja protestante contemporânea"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-deep/90 via-primary-deep/75 to-primary-deep/85 md:bg-gradient-to-r md:from-primary-deep md:via-primary-deep/85 md:to-primary-deep/25"
      />

      <div className="section-shell flex min-h-[78vh] flex-col justify-center pt-28 pb-12 md:min-h-[85vh] md:pt-32 md:pb-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Planejamento para igrejas e pastores
          </p>

          <h1 className="mt-4 text-[2.125rem] font-extrabold leading-[1.1] text-primary-foreground md:text-[3rem] lg:text-[3.25rem]">
            Sua igreja tem projetos.
            <br />
            Sua família também <span className="text-gold">tem um futuro.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-[1.7] text-primary-foreground/85 md:text-lg">
            O consórcio pode ajudar sua igreja a crescer, realizar projetos e construir patrimônio
            sem juros de financiamento. E também pode ajudar você a planejar o futuro da sua
            família, construindo patrimônio e renda para a aposentadoria ou jubilação.
          </p>

          <ul className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-4">
            {BENEFITS.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2 text-sm font-semibold text-primary-foreground"
              >
                <b.icon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                {b.label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-auto w-full whitespace-normal rounded-xl bg-gold px-8 py-3 text-center text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto"
            >
              <a href="#cta">Conte-me sobre o seu projeto</a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full rounded-xl border-primary-foreground/40 bg-transparent px-6 text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar pelo WhatsApp (abre em nova aba)"
              >
                <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
