import { Building2, Landmark, BadgeCheck, FileCheck2, History } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

const SINAIS = [
  { icon: History, text: "35 anos de história" },
  { icon: Building2, text: "Maior administradora independente em créditos ativos" },
  { icon: Landmark, text: "Autorizada e fiscalizada pelo Banco Central do Brasil" },
  { icon: BadgeCheck, text: "Associada à ABAC" },
  { icon: FileCheck2, text: "Demonstrações financeiras auditadas" },
];

export function Seguranca() {
  return (
    <section id="seguranca" className="scroll-mt-24 bg-primary-deep py-16 text-primary-foreground md:py-20">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Com segurança e garantia
          </p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-[2.5rem] md:leading-[1.15]">
            Planejar o futuro exige confiança.
          </h2>
          <p className="mt-4 leading-[1.7] text-primary-foreground/80">
            Seu projeto conta com a estrutura e experiência da Ademicon, administradora de
            consórcios com 35 anos de atuação, autorizada e fiscalizada pelo Banco Central do
            Brasil.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SINAIS.map((sinal, index) => (
            <li key={sinal.text}>
              <Reveal
                delay={index * 60}
                className="flex h-full items-start gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4"
              >
                <sinal.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-sm font-medium leading-[1.6] text-primary-foreground/90">
                  {sinal.text}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
