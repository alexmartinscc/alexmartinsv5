import { Card, CardContent } from "@/components/ui/card";
import { ImageSlot } from "./ImageSlot";

const ITEMS = [
  { title: "Conquistar", text: "Primeiro imóvel ou primeiro grande objetivo.", image: "/conquistar.webp" },
  { title: "Evoluir", text: "Trocar de patamar com planejamento.", image: "/evoluir.webp" },
  { title: "Proteger", text: "Preservar o que já foi construído.", image: "/proteger.webp" },
  { title: "Gerar Renda", text: "Transformar patrimônio em renda.", image: "/gerar-renda.webp" },
  { title: "Expandir", text: "Ampliar o patrimônio com consistência.", image: "/expandir.webp" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Portfólio</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-4xl">
            Objetivos que podemos planejar juntos
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
