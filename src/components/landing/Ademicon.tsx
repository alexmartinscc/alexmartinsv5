import { Building2, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import parceria from "@/assets/ademicon-parceria.jpg";
import ademiconLogo from "@/assets/ademicon-logo.png.asset.json";
import { ADEMICON_URL } from "@/lib/contact";

const HIGHLIGHTS = [
  { icon: Building2, title: "Solidez", text: "Instituição consolidada no mercado." },
  { icon: ShieldCheck, title: "Segurança", text: "Operação regulada e transparente." },
  { icon: Users, title: "Estrutura", text: "Rede de atendimento em todo o país." },
];

export function Ademicon() {
  return (
    <section id="ademicon" className="scroll-mt-24 bg-secondary py-28 md:py-40">
      <div className="section-shell grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Parceria estratégica</p>
          <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            A estratégia é minha. A solidez é da Ademicon.
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border/70 bg-background px-4 py-2 shadow-soft">
            <span className="text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
              Parceira
            </span>
            <span className="h-4 w-px bg-border" />
            <img
              src={ademiconLogo.url}
              alt="Logotipo Ademicon"
              width={96}
              height={24}
              loading="lazy"
              className="h-6 w-auto object-contain"
            />
          </div>
          <p className="measure mt-6 leading-[1.85] text-muted-foreground">
            Para garantir o sucesso do seu projeto, trabalho com a Ademicon, a maior administradora
            independente de consórcios do Brasil.
          </p>
          <p className="measure mt-4 leading-[1.85] text-muted-foreground">
            Com um portfólio completo de soluções para pessoas físicas, empresas e produtores
            rurais, ela oferece a segurança e a solidez necessárias para transformar planejamento em
            conquistas.
          </p>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="mt-8 rounded-xl px-8 transition-colors duration-200"
          >
            <a href={ADEMICON_URL} target="_blank" rel="noopener noreferrer">
              Conheça a Ademicon
            </a>
          </Button>

          <p className="measure mt-8 text-sm leading-[1.85] text-muted-foreground">
            Após ajudá-lo na definição do seu projeto, na escolha da melhor estratégia e da solução
            mais adequada, continuarei acompanhando seu contrato, realizando a gestão mensal,
            estratégias de lance e todo o suporte necessário durante a sua jornada.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="card-lift rounded-3xl border border-border/70 bg-background p-6 shadow-soft"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold/12">
                  <item.icon className="h-5 w-5 text-gold" />
                </span>
                <h3 className="mt-5 text-sm font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ImageSlot
            path="/ademicon-parceria.webp"
            src={parceria}
            ratio="4 / 3"
            alt="Aperto de mãos selando uma parceria de confiança"
            label="Parceria"
          />
        </Reveal>
      </div>
    </section>
  );
}
