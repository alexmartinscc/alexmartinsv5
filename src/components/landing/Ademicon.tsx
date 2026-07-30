import { Building2, ShieldCheck, Users } from "lucide-react";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";

const HIGHLIGHTS = [
  { icon: Building2, title: "Solidez", text: "Instituição consolidada no mercado." },
  { icon: ShieldCheck, title: "Segurança", text: "Operação regulada e transparente." },
  { icon: Users, title: "Estrutura", text: "Rede de atendimento em todo o país." },
];

export function Ademicon() {
  return (
    <section id="ademicon" className="scroll-mt-24 bg-secondary py-24 md:py-36">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Ademicon</p>
          <h2 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Segurança para transformar planejamento em conquistas.
          </h2>
          <p className="measure mt-6 leading-[1.85] text-muted-foreground">
            Quando o consórcio for a estratégia mais adequada para o seu projeto, você contará com
            toda a credibilidade e segurança da Ademicon, referência nacional em administração de
            consórcios.
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
          <ImageSlot path="/logo-ademicon.svg" ratio="4 / 3" label="Logotipo Ademicon" />
        </Reveal>
      </div>
    </section>
  );
}
