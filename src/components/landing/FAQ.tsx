import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const FAQ_ITEMS = [
  { q: "O que é consórcio e como funciona?", a: "Texto provisório sobre o formato do atendimento inicial." },
  { q: "Como acontece a contemplação?", a: "Texto provisório sobre requisitos e ponto de partida." },
  { q: "O lance é obrigatório?", a: "Texto provisório sobre prazos e acompanhamento." },
  { q: "Consórcio é melhor que financiamento?", a: "Texto provisório sobre as formas de atendimento." },
  { q: "Posso utilizar FGTS?", a: "Texto provisório sobre as formas de atendimento." },
  { q: "Como escolher o grupo ideal?", a: "Texto provisório sobre as formas de atendimento." },
  { q: "O consórcio serve para o meu projeto?", a: "Texto provisório sobre as formas de atendimento." },
  { q: "Quanto tempo leva para ser contemplado?", a: "Texto provisório sobre as formas de atendimento." },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background py-28 md:py-40">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
              Dúvidas frequentes
            </h2>
            <p className="mt-5 leading-[1.8] text-muted-foreground">
              Perguntas provisórias para estruturar a seção.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.q}
                value={item.q}
                className="rounded-2xl border border-border/70 bg-card px-6 shadow-soft transition-colors duration-200 hover:border-gold/40"
              >
                <AccordionTrigger className="py-6 text-left text-base font-semibold text-primary hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-[1.8] text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
