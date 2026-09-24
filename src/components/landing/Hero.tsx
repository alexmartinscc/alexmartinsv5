import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const HERO_IMAGE = "/images/home/hero-image.webp";
const HERO_IMAGE_MOBILE = "/images/home/hero-image-mobile.webp";

export function Hero() {
  return (
    <section id="hero" className="relative isolate scroll-mt-24 overflow-hidden bg-primary-deep pt-[38vh] pb-12 md:pt-32 md:pb-20 lg:flex lg:min-h-[82vh] lg:items-center">
      <picture>
        <source media="(max-width: 767px)" srcSet={HERO_IMAGE_MOBILE} type="image/webp" />
        <img src={HERO_IMAGE} alt="Alex Martins, consultor patrimonial" width={1672} height={941} loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_top] md:object-[center_right]" />
      </picture>
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-primary-deep)_12%,transparent)_0%,color-mix(in_oklab,var(--color-primary-deep)_45%,transparent)_30%,var(--color-primary-deep)_55%,var(--color-primary-deep)_100%)] md:bg-[linear-gradient(90deg,var(--color-primary-deep)_0%,color-mix(in_oklab,var(--color-primary-deep)_88%,transparent)_38%,color-mix(in_oklab,var(--color-primary-deep)_18%,transparent)_80%)]" />
      <div className="section-shell relative">
        <Reveal className="max-w-[670px]">
          <p className="eyebrow">Consultoria Patrimonial</p>
          <h1 className="mt-4 text-[2rem] font-extrabold leading-[1.1] text-primary-foreground sm:text-[2.4rem] md:text-[2.75rem] lg:text-[3.125rem]">
            Conquistar patrimônio pode custar menos do que você imagina.
          </h1>
          <p className="mt-5 max-w-[620px] text-base leading-[1.65] text-primary-foreground/90 md:text-lg">
            Ajudo pessoas, famílias e empresários a realizar projetos de imóveis, veículos e patrimônio com planejamento e estratégias sem juros.
          </p>
          <p className="mt-3 max-w-[590px] text-sm leading-[1.65] text-primary-foreground/70 md:text-base">
            Antes de financiar, adiar seus planos ou tomar uma decisão, descubra o que vale a pena comparar.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full rounded-xl bg-gold px-7 text-gold-foreground shadow-soft hover:bg-gold/90 sm:w-auto">
              <a href="#contato" data-cta-location="hero" data-cta-name="descobrir_opcoes">Quero descobrir minhas opções</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full rounded-xl border-primary-foreground/40 bg-primary-deep/20 px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto">
              <a href="#metodo" data-cta-location="hero" data-cta-name="como_trabalho">Como eu trabalho</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
