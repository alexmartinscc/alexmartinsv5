import { Card, CardContent } from "@/components/ui/card";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";

const ITEMS = [
  { title: "Conquistar", text: "Primeiro imóvel, construção, reforma e veículos.", image: "/conquistar.webp" },
  { title: "Evoluir", text: "Troca por imóvel maior, segunda aquisição e evolução patrimonial.", image: "/evoluir.webp" },
  { title: "Proteger", text: "Quitação de financiamento, redução de custos financeiros e reorganização patrimonial.", image: "/proteger.webp" },
  { title: "Gerar Renda", text: "Formação de patrimônio e aquisição de imóveis para renda.", image: "/gerar-renda.webp" },
  { title: "Expandir seu Negócio", text: "Imóveis comerciais, máquinas, equipamentos e frota.", image: "/expandir.webp" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-background py-24 md:py-36">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Portfólio</p>
          <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Em qual projeto posso ajudar você?
          </h2>
          <p className="mt-5 leading-[1.8] text-muted-foreground">
            Cada objetivo pede uma estratégia diferente.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="h-full">
              <Card className="card-lift h-full overflow-hidden rounded-3xl border-border/70 shadow-soft">
                <CardContent className="p-6">
                  <ImageSlot path={item.image} ratio="4 / 3" label={item.title} />
                  <div className="px-2 pt-7 pb-2">
                    <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
