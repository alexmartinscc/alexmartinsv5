import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { WhyConsorcio } from "@/components/landing/WhyConsorcio";
import { MetodoMapa } from "@/components/landing/MetodoMapa";
import { HeroIgrejas } from "@/components/igrejas/HeroIgrejas";
import { DoresIgrejas } from "@/components/igrejas/DoresIgrejas";
import { DoisProjetos } from "@/components/igrejas/DoisProjetos";
import { ProjetosIgreja } from "@/components/igrejas/ProjetosIgreja";
import { FuturoPastor } from "@/components/igrejas/FuturoPastor";
import { SobreIgrejas } from "@/components/igrejas/SobreIgrejas";
import { Lideranca } from "@/components/igrejas/Lideranca";
import { FAQIgrejas } from "@/components/igrejas/FAQIgrejas";
import { CTAIgrejas } from "@/components/igrejas/CTAIgrejas";

const NAV = [
  { label: "Objetivos", href: "#projetos" },
  { label: "Por que Consórcio", href: "#por-que-consorcio" },
  { label: "Como funciona", href: "#metodo" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Site principal", href: "/" },
];

export function Igrejas() {
  return (
    <div className="min-h-screen bg-background">
      <Header links={NAV} homeHref="#hero" />
      <main>
        <HeroIgrejas />
        <DoresIgrejas />
        <DoisProjetos />
        <ProjetosIgreja />
        <FuturoPastor />
        <WhyConsorcio
          title="Por que o consórcio pode ser a ferramenta para colocar esses planos em movimento?"
          intro="Depois de definir o que queremos construir, precisamos escolher uma forma eficiente de chegar lá. É aqui que o consórcio passa a fazer parte da estratégia."
          footer={
            <p className="mx-auto max-w-2xl text-base font-semibold leading-[1.6] text-primary md:text-lg">
              Ter a ferramenta certa é importante. Saber como utilizá-la dentro do seu projeto faz
              toda a diferença.
            </p>
          }
        />
        <MetodoMapa
          eyebrow="Como eu posso ajudar"
          intro="Seja para a igreja, para o seu futuro ou para um projeto pessoal, antes de falar em valores ou parcelas eu procuro entender o que realmente precisa ser construído. A partir daí, usamos o Método MAPA para transformar o objetivo em um caminho."
        />
        <SobreIgrejas />
        <Lideranca />
        <FAQIgrejas />
        <CTAIgrejas />
      </main>
      <Footer links={NAV.filter((item) => item.href.startsWith("#"))} />
    </div>
  );
}

export default Igrejas;
