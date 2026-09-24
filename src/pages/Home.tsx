import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Dores } from "@/components/landing/Dores";
import { Portfolio } from "@/components/landing/Portfolio";
import { HomeComparison } from "@/components/landing/HomeComparison";
import { HomeMetodoMapa } from "@/components/landing/HomeMetodoMapa";
import { HomeAbout } from "@/components/landing/HomeAbout";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { HomeFooter } from "@/components/landing/HomeFooter";

const HOME_NAV = [
  { label: "Prioridades", href: "#prioridades" },
  { label: "Como trabalho", href: "#metodo" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
];

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header links={HOME_NAV} homeHref="#hero" cta={{ label: "Falar comigo", href: "#contato" }} />
      <main>
        <Hero />
        <Dores />
        <Portfolio />
        <HomeComparison />
        <HomeMetodoMapa />
        <HomeAbout />
        <FAQ />
        <CTA />
      </main>
      <HomeFooter />
    </div>
  );
}

export default Home;
