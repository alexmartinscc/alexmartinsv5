import { Check } from "lucide-react";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import sobreAlex from "@/assets/sobre-alex.jpg";

const POINTS = [
  "Atendimento consultivo e personalizado",
  "Foco em planejamento de longo prazo",
  "Acompanhamento em cada etapa",
];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-secondary py-28 md:py-40">
      <div className="section-shell grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <Reveal>
          <ImageSlot
            path="/sobre-alex.webp"
            src={sobreAlex}
            ratio="4 / 5"
            alt="Alex Martins ouvindo uma cliente durante o atendimento"
            label="Foto do consultor"
          />
        </Reveal>

        <Reveal delay={100} className="max-w-xl">
          <p className="eyebrow">Sobre</p>
          <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Prazer, sou Alex Martins.
          </h2>
          <p className="measure mt-6 leading-[1.85] text-muted-foreground">
            Sou representante autorizado da Ademicon e ajudo pessoas e empresas a utilizar o
            consórcio de forma estratégica para realizar seus projetos.
          </p>
          <p className="measure mt-4 leading-[1.85] text-muted-foreground">
            Meu trabalho é entender seus objetivos e mostrar como o consórcio pode ser utilizado de
            forma estratégica para realizar seu projeto.
          </p>
          <p className="measure mt-4 leading-[1.85] text-muted-foreground">
            Explico cada detalhe com clareza e acompanho você em toda a jornada, do planejamento
            inicial até a conquista.
          </p>
          <p className="measure mt-6 border-l-2 border-gold pl-5 text-base leading-[1.8] font-semibold text-primary">
            Acredito que confiança se conquista com informação, clareza e respeito.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-1">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background px-5 py-4 shadow-soft"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/15">
                  <Check className="h-3.5 w-3.5 text-gold" />
                </span>
                <span className="text-sm font-medium text-primary">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
