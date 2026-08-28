import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";

export function ProjetosIgreja() {
  return (
    <section id="igreja" className="scroll-mt-24 bg-secondary py-16 md:py-24">
      <div className="section-shell grid items-center gap-8 lg:grid-cols-[52fr_48fr] lg:gap-14 [&>*]:min-w-0">
        <Reveal className="order-1 lg:order-2">
          <img
            src="/images/igrejas/expansao-igreja.webp"
            srcSet="/images/igrejas/expansao-igreja-800.webp 800w, /images/igrejas/expansao-igreja.webp 1600w"
            sizes="(min-width: 1024px) 48vw, 100vw"
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            alt="Construção e expansão de uma igreja contemporânea"
            className="aspect-[4/3] w-full rounded-[calc(var(--radius)+20px)] object-cover shadow-card"
          />
        </Reveal>

        <Reveal delay={80} className="order-2 lg:order-1">
          <p className="eyebrow">Para sua igreja</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Realize os próximos projetos da sua igreja com planejamento.
          </h2>

          <div className="mt-5 space-y-4 leading-[1.7] text-muted-foreground">
            <p>
              Toda igreja tem projetos. Muitas vezes, o desafio não é saber o que precisa ser feito,
              mas encontrar uma forma de realizar sem comprometer de uma só vez os recursos da
              instituição.
            </p>
            <p>
              Com o consórcio, é possível planejar a aquisição de imóveis, terrenos, construções,
              reformas e veículos com parcelas organizadas de acordo com a realidade da igreja.
            </p>
            <p>
              Após a contemplação e liberação do crédito, a carta proporciona poder de compra para
              negociar à vista.
            </p>
          </div>

          <p className="mt-6 border-l-2 border-gold bg-background px-5 py-4 text-base font-semibold leading-[1.7] text-primary">
            A igreja não precisa esperar sobrar dinheiro para começar a planejar sua próxima
            conquista.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-6 h-auto w-full whitespace-normal rounded-xl bg-gold px-8 py-3 text-center text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto"
          >
            <a href="#cta?projeto=igreja">Quero falar sobre o projeto da minha igreja</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
