import { User, Wallet, ListChecks, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "./ImageSlot";
import { Reveal } from "./Reveal";

const ATTRIBUTES = [
  {
    icon: User,
    title: "Atendimento direto e humanizado",
    text: "Você fala comigo, não com robôs ou menus intermináveis.",
  },
  {
    icon: Wallet,
    title: "Acompanhamento da sua carteira",
    text: "Informação e suporte ao longo de todo o plano.",
  },
  {
    icon: ListChecks,
    title: "Organização das oportunidades",
    text: "Apoio com boletos, assembleias e estratégias de lance.",
  },
  {
    icon: TrendingUp,
    title: "Experiência aplicada ao projeto",
    text: "Mais de 20 anos de experiência em negócios ajudando a analisar cenários.",
  },
];

const ADEMICON_URL = "https://www.ademicon.com.br/licensed/984100/alexsandro-martins";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-secondary py-12 md:py-20">
      <div className="section-shell flex flex-col gap-8 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-x-14 lg:gap-y-5">
        {/* Mobile order 1 / Desktop column 2 row 1: eyebrow, title, first paragraph */}
        <Reveal className="order-1 lg:col-start-2 lg:row-start-1 lg:self-start">
          <p className="eyebrow">Sobre mim</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Como posso te ajudar
          </h2>
          <p className="measure mt-4 leading-[1.7] text-muted-foreground">
            Meu trabalho começa entendendo o que você quer conquistar. Antes de apresentar uma proposta, procuro conhecer seus objetivos, tirar suas dúvidas e explorar diferentes caminhos para construir um projeto alinhado à sua realidade.
          </p>
        </Reveal>

        {/* Mobile order 2 / Desktop column 1 spanning rows: photo */}
        <Reveal
          delay={80}
          className="order-2 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:self-center"
        >
          <ImageSlot
            path="/images/shared/alex-sobre.jpg"
            src="/images/shared/alex-sobre.jpg"
            ratio="4 / 5"
            alt="Alex Martins ouvindo uma cliente durante o atendimento"
            label="Foto do consultor"
            className="mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[440px]"
          />
        </Reveal>

        {/* Mobile order 3 / Desktop column 2 row 2: second paragraph, attributes, credential */}
        <Reveal
          delay={120}
          className="order-3 lg:col-start-2 lg:row-start-2 lg:self-start"
        >
          <p className="measure leading-[1.7] text-muted-foreground">
            Tenho mais de 20 anos de experiência na área de negócios e um perfil didático, organizado e investigativo. Uso essa experiência para analisar cenários, comparar possibilidades e ajudar você a tomar decisões com mais clareza.
          </p>

          <h3 className="mt-8 text-lg font-bold md:text-xl text-primary">
            Um atendimento que continua depois da contratação
          </h3>

          <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {ATTRIBUTES.map((attr) => {
              const Icon = attr.icon;
              return (
                <li
                  key={attr.title}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 p-4"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">{attr.title}</h4>
                    <p className="mt-1 text-sm leading-[1.65] text-muted-foreground">
                      {attr.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-8">
            <h3 className="text-lg font-bold md:text-xl text-primary">
              Especialista e Consultor Autorizado Ademicon
            </h3>
            <p className="measure mt-2 text-sm leading-[1.65] text-muted-foreground">
              Minha credencial pode ser verificada diretamente no site oficial da Ademicon.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-4 rounded-xl whitespace-normal px-4 sm:px-8"
            >
              <a
                href={ADEMICON_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver minha autorização na Ademicon (abre em nova aba)"
              >
                Ver minha autorização na Ademicon
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
