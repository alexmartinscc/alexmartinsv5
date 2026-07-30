import { Check } from "lucide-react";
import { ImageSlot } from "./ImageSlot";

const POINTS = [
  "Atendimento consultivo e personalizado",
  "Foco em planejamento de longo prazo",
  "Acompanhamento em cada etapa",
];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ImageSlot path="/sobre-alex.webp" ratio="1 / 1" label="Foto do consultor" />

        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Sobre</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-4xl">
            Prazer, sou Alex Martins.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Sou representante autorizado da Ademicon e ajudo pessoas e empresas a utilizar o
            consórcio de forma estratégica para realizar seus projetos.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Meu trabalho é explicar, de forma simples e transparente, como o consórcio funciona,
            quais são suas vantagens, quais são suas limitações e, principalmente, se ele realmente
            faz sentido para o seu momento.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Se essa for a melhor estratégia para você, terei satisfação em acompanhar toda a sua
            jornada.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Acredito que confiança se conquista com informação, clareza e respeito.
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-muted">
                  <Check className="h-3.5 w-3.5 text-gold" />
                </span>
                <span className="text-sm text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
