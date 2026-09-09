import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Dores } from "@/components/landing/Dores";
import { Portfolio } from "@/components/landing/Portfolio";
import { WhyConsorcio } from "@/components/landing/WhyConsorcio";
import { MetodoMapa } from "@/components/landing/MetodoMapa";
import { About } from "@/components/landing/About";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <WhyConsorcio />
        <MetodoMapa />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
