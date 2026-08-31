import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import { selecionarProjeto } from "./projeto-preset";

export function FuturoPastor() {
  return (
    <section id="futuro" className="scroll-mt-24 bg-background py-16 md:py-24">
      <div className="section-shell grid items-center gap-8 lg:grid-cols-[48fr_52fr] lg:gap-14 [&>*]:min-w-0">
        <Reveal>
          <img
            src="/images/igrejas/futuro-pastor.webp"
            srcSet="/images/igrejas/futuro-pastor-800.webp 800w, /images/igrejas/futuro-pastor.webp 1600w"
            sizes="(min-width: 1024px) 48vw, 100vw"
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            alt="Casal maduro planejando uma aposentadoria tranquila"
            className="aspect-[4/3] w-full rounded-[calc(var(--radius)+20px)] object-cover shadow-card"
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="eyebrow">Pense no futuro</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Seu ministério continua.
            <br />
            Seu futuro merece planejamento.
          </h2>

          <div className="mt-5 space-y-4 leading-[1.7] text-muted-foreground">
            <p>A vocação ministerial não termina.</p>
            <p>
              Durante muitos anos, é natural que o pastor coloque a igreja e as pessoas que serve à
              frente de muitas decisões pessoais. Nesse caminho, o próprio planejamento patrimonial
              pode acabar ficando para depois.
            </p>
            <p>
              Mas, em algum momento, chegam a aposentadoria, a jubilação ou simplesmente a
              necessidade de diminuir o ritmo das atividades.
            </p>
            <p>Começar enquanto existe renda e tempo pode fazer uma diferença significativa no futuro.</p>
          </div>

          <h3 className="mt-8 text-lg font-bold text-primary md:text-xl">
            Transforme parte da renda de hoje em patrimônio para amanhã.
          </h3>
          <div className="mt-3 space-y-4 leading-[1.7] text-muted-foreground">
            <p>
              Imóveis, terrenos e outros ativos podem fazer parte de uma estratégia para construir
              patrimônio e criar fontes complementares de renda para a aposentadoria.
            </p>
            <p>
              O objetivo não é deixar o ministério. É conquistar mais liberdade para continuar
              servindo com o apoio e a segurança de uma renda complementar — seja para ajudar a
              pagar um plano de saúde, planejar férias, formar uma reserva de emergência ou
              simplesmente viver essa nova fase com mais tranquilidade.
            </p>
          </div>

          <p className="mt-6 border-l-2 border-gold bg-secondary px-5 py-4 text-base font-semibold leading-[1.7] text-primary">
            O consórcio pode ser uma forma econômica e planejada de proteger o futuro das pessoas
            que você ama.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-6 h-auto w-full whitespace-normal rounded-xl bg-gold px-8 py-3 text-center text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto"
          >
            <a href="#cta" onClick={() => selecionarProjeto("pessoal")}>
              Quero planejar meu futuro
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
