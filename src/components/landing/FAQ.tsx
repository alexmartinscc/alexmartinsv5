import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section id="faq" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">FAQ</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-4xl">
            Dúvidas frequentes
          </h2>
          <p className="mt-4 text-muted-foreground">Perguntas provisórias para estruturar a seção.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.q} value={item.q} className="border-border/70">
              <AccordionTrigger className="py-6 text-left text-base font-semibold text-primary hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
