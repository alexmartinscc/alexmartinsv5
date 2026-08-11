import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problems } from "@/components/landing/Problems";
import { About } from "@/components/landing/About";
import { MetodoMapa } from "@/components/landing/MetodoMapa";
import { WhyConsorcio } from "@/components/landing/WhyConsorcio";
import { Portfolio } from "@/components/landing/Portfolio";
import { Ademicon } from "@/components/landing/Ademicon";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problems />
        <About />
        <MetodoMapa />
        <Portfolio />
        <Ademicon />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
