import { Card, CardContent } from "@/components/ui/card";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import conquistar from "@/assets/conquistar.jpg";
import evoluir from "@/assets/evoluir.jpg";
import proteger from "@/assets/proteger.jpg";
import gerarRenda from "@/assets/gerar-renda.jpg";
import expandir from "@/assets/expandir.jpg";

const ITEMS = [
  {
    title: "Conquistar",
    text: "Primeiro imóvel, construção, reforma e veículos.",
    image: "/conquistar.webp",
    src: conquistar,
    alt: "Família recebendo as chaves da primeira casa",
  },
  {
    title: "Evoluir",
    text: "Troca por imóvel maior, segundo imóvel, troca de veículo e segundo veículo.",
    image: "/evoluir.webp",
    src: evoluir,
    alt: "Casal com os filhos em frente à nova casa da família",
  },
  {
    title: "Proteger",
    text: "Quitação de financiamento para redução do custo com juros.",
    image: "/proteger.webp",
    src: proteger,
    alt: "Profissional analisando documentos financeiros",
  },
  {
    title: "Gerar Renda",
    text: "Aquisição de imóveis para renda, independência financeira, investimento e planejamento para aposentadoria.",
    image: "/gerar-renda.webp",
    src: gerarRenda,
    alt: "Proprietária revisando o contrato de locação do seu imóvel",
  },
  {
    title: "Expandir seu Negócio",
    text: "Imóveis comerciais, máquinas, equipamentos e frota.",
    image: "/expandir.webp",
    src: expandir,
    alt: "Empresário conversando dentro da própria oficina",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-background py-28 md:py-40">
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

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="h-full">
              <Card className="card-lift h-full overflow-hidden rounded-3xl border-border/70 py-0 shadow-soft">
                <CardContent className="p-0">
                  <ImageSlot
                    path={item.image}
                    src={item.src}
                    alt={item.alt}
                    ratio="4 / 3"
                    label={item.title}
                    className="rounded-none border-0 shadow-none"
                  />
                  <div className="px-7 pt-7 pb-9">
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
