import { Building2, BriefcaseBusiness, Car, Landmark } from "lucide-react";
import { Reveal } from "./Reveal";
import { selectHomePriority } from "@/lib/home-priority";

const PRIORITIES = [
  { id: "imoveis", title: "Imóveis", text: "Comprar, construir, reformar ou adquirir um terreno.", icon: Building2, value: "Comprar um imóvel" },
  { id: "veiculos", title: "Veículos", text: "Carros, motos, utilitários, caminhões e frotas.", icon: Car, value: "Comprar ou trocar um veículo" },
  { id: "patrimonio", title: "Patrimônio e Renda", text: "Construir patrimônio e criar novas fontes de renda.", icon: Landmark, value: "Construir patrimônio" },
  { id: "empresariais", title: "Projetos Empresariais", text: "Expandir, adquirir ativos ou colocar novos projetos em prática.", icon: BriefcaseBusiness, value: "Expandir ou estruturar um negócio" },
];

export function Portfolio() {
  return (
    <section id="prioridades" className="scroll-mt-24 bg-background py-12 md:py-20">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Prioridades</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">Qual é a sua prioridade?</h2>
          <p className="mt-4 leading-[1.7] text-muted-foreground">Escolha o projeto que está mais perto da sua decisão. Eu ajudo você a entender como estruturá-lo.</p>
        </Reveal>
        <div className="mt-9 grid gap-3 sm:grid-cols-2 md:gap-5">
          {PRIORITIES.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} delay={index * 70} className="h-full">
                <a href="#contato" onClick={() => selectHomePriority(item.value)} data-cta-location="prioridades" data-cta-name={`prioridade_${item.id}`} className="group flex h-full items-start gap-4 rounded-2xl border border-border/70 bg-secondary/40 p-5 transition-colors hover:border-gold/50 hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 md:p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-background"><Icon className="h-6 w-6 text-gold" aria-hidden="true" /></span>
                  <div><h3 className="text-lg font-extrabold uppercase text-primary md:text-xl">{item.title}</h3><p className="mt-2 text-base leading-[1.6] text-muted-foreground">{item.text}</p></div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
