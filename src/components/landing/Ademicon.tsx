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
            Parceria Estratégica com a Ademicon
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
            Para oferecer soluções com segurança, transparência e respaldo, atuo em parceria com a
            Ademicon, a maior administradora independente de consórcios do Brasil e autorizada pelo
            Banco Central.
          </p>
          <p className="measure mt-4 leading-[1.85] text-muted-foreground">
            Essa parceria une um atendimento personalizado à estrutura, tecnologia e solidez de uma
            empresa reconhecida nacionalmente.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border/70 bg-background shadow-soft">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/70">
                  <th className="px-6 py-4 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Solução
                  </th>
                  <th className="px-6 py-4 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Empresa
                  </th>
                </tr>
              </thead>
              <tbody>
                {SOLUTIONS.map((row) => (
                  <tr key={row.solution} className="border-b border-border/50 last:border-0">
                    <td className="px-6 py-4 font-semibold text-primary">{row.solution}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
