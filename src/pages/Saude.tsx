import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { HeroSaude } from "@/components/saude/HeroSaude";
import { Necessidades } from "@/components/saude/Necessidades";
import { Alavancagem } from "@/components/saude/Alavancagem";
import { RendaPatrimonial } from "@/components/saude/RendaPatrimonial";
import { MetodoAlex } from "@/components/saude/MetodoAlex";
import { FAQSaude } from "@/components/saude/FAQSaude";
import { CTASaude } from "@/components/saude/CTASaude";

const NAV = [
  { label: "Possibilidades", href: "#necessidades" },
  { label: "Alavancagem", href: "#alavancagem" },
  { label: "Renda patrimonial", href: "#renda" },
  { label: "Método MAPA", href: "#metodo" },
  { label: "FAQ", href: "#faq" },
  { label: "Site principal", href: "/" },
];

export function Saude() {
  return (
    <div className="min-h-screen bg-background">
      <Header links={NAV} homeHref="#hero" />
      <main>
        <HeroSaude />
        <Necessidades />
        <Alavancagem />
        <RendaPatrimonial />
        <MetodoAlex />
        <FAQSaude />
        <CTASaude />
      </main>
      <Footer links={NAV} />
    </div>
  );
}

export default Saude;
