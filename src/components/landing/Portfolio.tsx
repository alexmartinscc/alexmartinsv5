import { Card, CardContent } from "@/components/ui/card";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import conquistar from "@/assets/conquistar.jpg";
import evoluir from "@/assets/evoluir.jpg";
import proteger from "@/assets/proteger.jpg";
import gerarRenda from "@/assets/gerar-renda.jpg";
import expandir from "@/assets/expandir.jpg";
import grandesSonhos from "@/assets/grandes-sonhos.jpg";

const ITEMS = [
  {
    title: "Conquistar seu Espaço",
    text: "Ideal para quem deseja dar os primeiros passos na construção do patrimônio, transformando projetos importantes em realidade de forma planejada.",
    tags: ["Primeiro imóvel", "Construir ou reformar", "Comprar um terreno", "Primeiro carro ou moto"],
    image: "/conquistar.webp",
    src: conquistar,
    alt: "Casal em frente à fachada da sua primeira casa própria",
  },
  {
    title: "Evoluir seu Patrimônio",
    text: "Para quem já conquistou as primeiras metas e deseja ampliar patrimônio, conforto e qualidade de vida para a família.",
    tags: [
      "Trocar por um imóvel maior",
      "Segundo imóvel ou casa de praia",
      "Segundo veículo da família",
      "Imóvel comercial próprio",
    ],
    image: "/evoluir.webp",
    src: evoluir,
    alt: "Casal com os filhos em frente à nova casa da família",
  },
  {
    title: "Proteger suas Finanças",
    text: "Estratégias para reduzir custos financeiros, reorganizar as finanças e utilizar o patrimônio de forma inteligente.",
    tags: [
      "Quitar financiamentos",
      "Reduzir gastos com juros",
      "Crédito com garantia de imóvel",
      "Reorganização financeira",
    ],
    image: "/proteger.webp",
    src: proteger,
    alt: "Profissional analisando documentos financeiros",
  },
  {
    title: "Gerar Renda e Futuro",
    text: "Construa patrimônio com foco em geração de renda, independência financeira e tranquilidade no longo prazo.",
    tags: [
      "Imóveis para locação",
      "Planejamento de aposentadoria",
      "Independência financeira",
      "Formação de renda recorrente",
    ],
    image: "/gerar-renda.webp",
    src: gerarRenda,
    alt: "Casa residencial de bom padrão adquirida como investimento para geração de renda",
  },
  {
    title: "Expandir seu Negócio",
    text: "Invista no crescimento da empresa ou da propriedade rural sem comprometer o capital de giro.",
    tags: [
      "Renovação de frota",
      "Máquinas e equipamentos",
      "Tecnologia e infraestrutura",
      "Soluções para o agronegócio",
    ],
    image: "/expandir.webp",
    src: expandir,
    alt: "Empresário observando a frota da própria empresa",
  },
  {
    title: "Realizar Grandes Sonhos",
    text: "Porque alguns dos momentos mais importantes da vida também merecem planejamento.",
    tags: [
      "Casamento e formatura",
      "Intercâmbio",
      "Estudos e especializações",
      "Fertilização e procedimentos médicos",
    ],
    image: "/grandes-sonhos.webp",
    src: grandesSonhos,
    alt: "Casal comemorando juntos uma conquista importante",
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
            Cada projeto possui objetivos, prazos e necessidades diferentes. Conheça algumas das
            estratégias que podem ajudá-lo a transformar planos em realidade.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="h-full">
              <Card className="card-lift h-full overflow-hidden rounded-3xl border-border/70 py-0 shadow-soft">
                <CardContent className="flex h-full flex-col p-0">
                  <ImageSlot
                    path={item.image}
                    src={item.src}
                    alt={item.alt}
                    ratio="4 / 3"
                    label={item.title}
                    className="rounded-none border-0 shadow-none"
                  />
                  <div className="flex flex-1 flex-col px-7 pt-7 pb-9">
                    <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{item.text}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[12px] font-medium leading-none text-primary/80"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
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
