import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { HeroSaude } from "@/components/saude/HeroSaude";
import { Dores } from "@/components/saude/Dores";
import { Objetivos } from "@/components/saude/Objetivos";
import { PorQueConsorcioSaude } from "@/components/saude/PorQueConsorcioSaude";
import { MetodoSaude } from "@/components/saude/MetodoSaude";
import { SobreSaude } from "@/components/saude/SobreSaude";
import { FAQSaude } from "@/components/saude/FAQSaude";
import { CTASaude } from "@/components/saude/CTASaude";

const NAV = [
  { label: "Desafios", href: "#desafios" },
  { label: "Objetivos", href: "#objetivos" },
  { label: "Por que consórcio", href: "#por-que-consorcio" },
  { label: "Método MAPA", href: "#metodo" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Site principal", href: "/" },
];

export function Saude() {
  return (
    <div className="min-h-screen bg-background">
      <Header links={NAV} homeHref="#hero" />
      <main>
        <HeroSaude />
        <Dores />
        <Objetivos />
        <PorQueConsorcioSaude />
        <MetodoSaude />
        <SobreSaude />
        <FAQSaude />
        <CTASaude />
      </main>
      <Footer links={NAV} />
    </div>
  );
}

export default Saude;
