import { Building2, ShieldCheck, Users } from "lucide-react";
import { ImageSlot } from "./ImageSlot";

const HIGHLIGHTS = [
  { icon: Building2, title: "Solidez", text: "Instituição consolidada no mercado." },
  { icon: ShieldCheck, title: "Segurança", text: "Operação regulada e transparente." },
  { icon: Users, title: "Estrutura", text: "Rede de atendimento em todo o país." },
];

export function Ademicon() {
  return (
    <section id="ademicon" className="scroll-mt-24 bg-secondary py-20 md:py-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Ademicon</p>
          <h2 className="mt-4 text-3xl font-extrabold text-primary md:text-4xl">
            Segurança para transformar planejamento em conquistas.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Quando o consórcio for a estratégia mais adequada para o seu projeto, você contará com
            toda a credibilidade e segurança da Ademicon, referência nacional em administração de
            consórcios.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div key={item.title}>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-background">
                  <item.icon className="h-5 w-5 text-gold" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <ImageSlot path="/logo-ademicon.svg" ratio="3 / 2" label="Logotipo Ademicon" />
      </div>
    </section>
  );
}
