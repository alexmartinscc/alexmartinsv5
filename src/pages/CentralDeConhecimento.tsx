import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Reveal } from "@/components/landing/Reveal";

type Article = {
  to: string;
  category: string;
  title: string;
  description: string;
  readingTime: string;
};

const ARTICLES: Article[] = [
  {
    to: "/como-funciona-o-consorcio",
    category: "Consórcio",
    title: "Como funciona o Consórcio?",
    description:
      "Guia completo para entender a contemplação, os lances, os custos e quando essa estratégia realmente faz sentido para o seu projeto.",
    readingTime: "8 min de leitura",
  },
];

export function CentralDeConhecimento() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="border-b border-border bg-secondary py-16 md:py-20">
          <div className="section-shell max-w-3xl">
            <Reveal>
              <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gold/15">
                  <BookOpen className="h-3.5 w-3.5 text-gold" />
                </span>
                Central de Conhecimento
              </p>
              <h1 className="mt-5 text-3xl font-extrabold text-primary md:text-[2.6rem] md:leading-[1.15]">
                Conhecimento gera decisões melhores
              </h1>
              <p className="mt-5 text-[17px] leading-[1.9] text-muted-foreground">
                Conteúdos claros e didáticos sobre consórcio e estratégias financeiras, para você
                entender cada detalhe antes de decidir como realizar o seu projeto.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="section-shell">
            <h2 className="text-xl font-bold text-primary md:text-2xl">Artigos publicados</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ARTICLES.map((article) => (
                <Reveal key={article.to}>
                  <Link
                    to={article.to}
                    className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">
                      {article.category}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-primary">{article.title}</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-[1.8] text-muted-foreground">
                      {article.description}
                    </p>
                    <span className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gold" />
                        {article.readingTime}
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-primary">
                        Ler artigo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}

              <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-border bg-secondary/60 p-7 text-center">
                <p className="text-sm font-semibold text-primary">Novos conteúdos em breve</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Esta central será ampliada com novos guias sobre consórcio e estratégias
                  patrimoniais.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
