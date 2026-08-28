import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { WhyConsorcio } from "@/components/landing/WhyConsorcio";
import { MetodoMapa } from "@/components/landing/MetodoMapa";
import { HeroIgrejas } from "@/components/igrejas/HeroIgrejas";
import { DoisProjetos } from "@/components/igrejas/DoisProjetos";
import { ProjetosIgreja } from "@/components/igrejas/ProjetosIgreja";
import { FuturoPastor } from "@/components/igrejas/FuturoPastor";
import { Seguranca } from "@/components/igrejas/Seguranca";
import { SobreIgrejas } from "@/components/igrejas/SobreIgrejas";
import { Lideranca } from "@/components/igrejas/Lideranca";
import { FAQIgrejas } from "@/components/igrejas/FAQIgrejas";
import { CTAIgrejas } from "@/components/igrejas/CTAIgrejas";

const NAV = [
  { label: "Projetos", href: "#projetos" },
  { label: "Consórcio", href: "#por-que-consorcio" },
  { label: "Como funciona", href: "#metodo" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
];

export function Igrejas() {
  return (
    <div className="min-h-screen bg-background">
      <Header links={NAV} homeHref="#hero" />
      <main>
        <HeroIgrejas />
        <DoisProjetos />
        <ProjetosIgreja />
        <FuturoPastor />
        <WhyConsorcio intro="Seja para os projetos da igreja ou para a construção do seu patrimônio, entender como o consórcio funciona ajuda você a tomar uma decisão com mais clareza." />
        <Seguranca />
        <MetodoMapa intro="Antes de falar em valores ou parcelas, eu procuro entender o que você quer construir — seja um projeto para sua igreja, para sua família ou para o seu futuro. A partir daí, usamos o Método MAPA para estruturar o caminho." />
        <SobreIgrejas />
        <Lideranca />
        <FAQIgrejas />
        <CTAIgrejas />
      </main>
      <Footer links={NAV} />
    </div>
  );
}

export default Igrejas;
