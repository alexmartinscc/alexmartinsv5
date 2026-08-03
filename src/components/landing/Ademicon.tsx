import { Building2, ShieldCheck, Users } from "lucide-react";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";
import parceria from "@/assets/ademicon-parceria.jpg";

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
            Segurança para transformar planejamento em conquistas.
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border/70 bg-background px-4 py-2 shadow-soft">
            <span className="text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
              Parceira
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="font-display text-sm font-extrabold tracking-tight text-primary">
              ademicon
            </span>
          </div>
          <p className="measure mt-6 leading-[1.85] text-muted-foreground">
            Quando o consórcio for a estratégia mais adequada para o seu projeto, você contará com
            toda a credibilidade e segurança da Ademicon, referência nacional em administração de
            consórcios.
          </p>
          <p className="measure mt-4 text-sm leading-[1.85] text-muted-foreground">
            O acompanhamento continua sendo meu: a Ademicon entra como parceira que sustenta a
            estratégia definida junto com você.
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
