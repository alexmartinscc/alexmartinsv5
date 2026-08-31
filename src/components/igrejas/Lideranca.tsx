import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import { selecionarProjeto } from "./projeto-preset";

export function Lideranca() {
  return (
    <section id="lideranca" className="scroll-mt-24 bg-background py-16 md:py-24">
      <div className="section-shell grid items-center gap-8 lg:grid-cols-2 lg:gap-14 [&>*]:min-w-0">
        <Reveal className="order-1 lg:order-2">
          <img
            src="/images/igrejas/reuniao-lideranca-alex.webp"
            srcSet="/images/igrejas/reuniao-lideranca-alex-800.webp 800w, /images/igrejas/reuniao-lideranca-alex.webp 1600w"
            sizes="(min-width: 1024px) 50vw, 100vw"
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
            alt="Alex Martins conversando com a liderança de uma igreja sobre planejamento"
            className="aspect-[4/3] w-full rounded-[calc(var(--radius)+20px)] object-cover shadow-card"
          />
        </Reveal>

        <Reveal delay={80} className="order-2 lg:order-1">
          <p className="eyebrow">Liderança da igreja</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Vamos conversar sobre o projeto da sua igreja?
          </h2>

          <div className="mt-5 space-y-4 leading-[1.7] text-muted-foreground">
            <p>Nem sempre uma decisão como essa depende apenas do pastor.</p>
            <p>
              Se a igreja possui diretoria, conselho ou liderança administrativa, posso participar
              de uma conversa para explicar como o consórcio funciona, responder às principais
              dúvidas e analisar possibilidades para o projeto da instituição.
            </p>
            <p>
              A conversa pode acontecer por videochamada, WhatsApp ou reunião presencial, quando
              aplicável. Também posso orientar projetos pessoais do pastor e de membros da
              comunidade, sempre de forma individual e sem qualquer vínculo com a igreja.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="mt-6 h-auto w-full whitespace-normal rounded-xl bg-gold px-8 py-3 text-center text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto"
          >
            <a href="#cta" onClick={() => selecionarProjeto("igreja")}>
              Quero conversar com a liderança
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
