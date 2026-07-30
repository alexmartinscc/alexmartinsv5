import { Card, CardContent } from "@/components/ui/card";
import { ImageSlot } from "./ImageSlot";

const ITEMS = [
  { title: "Conquistar", text: "Primeiro imóvel, construção, reforma e veículos.", image: "/conquistar.webp" },
  { title: "Evoluir", text: "Troca por imóvel maior, segunda aquisição e evolução patrimonial.", image: "/evoluir.webp" },
  { title: "Proteger", text: "Quitação de financiamento, redução de custos financeiros e reorganização patrimonial.", image: "/proteger.webp" },
  { title: "Gerar Renda", text: "Formação de patrimônio e aquisição de imóveis para renda.", image: "/gerar-renda.webp" },
  { title: "Expandir seu Negócio", text: "Imóveis comerciais, máquinas, equipamentos e frota.", image: "/expandir.webp" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Portfólio</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-4xl">
            Em qual projeto posso ajudar você?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada objetivo pede uma estratégia diferente.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <Card key={item.title} className="overflow-hidden rounded-3xl border-border/70 shadow-soft">
              <CardContent className="p-6">
                <ImageSlot path={item.image} ratio="16 / 10" label={item.title} />
                <h3 className="mt-6 text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
