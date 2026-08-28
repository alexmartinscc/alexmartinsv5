import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "@/components/landing/ImageSlot";
import { Reveal } from "@/components/landing/Reveal";
import { ADEMICON_CREDENTIAL_URL } from "@/lib/contact";
import sobreAlex from "@/assets/sobre-alex.jpg";

export function SobreIgrejas() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-secondary py-16 md:py-24">
      <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 [&>*]:min-w-0">
        <Reveal>
          <ImageSlot
            path="/sobre-alex.webp"
            src={sobreAlex}
            ratio="4 / 5"
            alt="Alex Martins durante um atendimento de consultoria"
            label="Foto do consultor"
            className="mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]"
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="eyebrow">Sobre mim</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-[2.5rem] md:leading-[1.15]">
            Planejamento com experiência e responsabilidade
          </h2>

          <div className="mt-5 space-y-4 leading-[1.7] text-muted-foreground">
            <p>
              Atuo profissionalmente com consórcio e planejamento patrimonial, ajudando pessoas,
              famílias e instituições a estruturar projetos com mais clareza, organização e
              segurança.
            </p>
            <p>
              Tenho mais de 20 anos de experiência na área de negócios e um perfil didático,
              organizado e analítico. Meu trabalho começa entendendo o objetivo, avaliando
              possibilidades e construindo um caminho que faça sentido para cada realidade.
            </p>
            <p>
              Na minha vida pessoal, também sirvo ao Senhor como pastor. Essa experiência me permite
              compreender de perto algumas das responsabilidades, desafios e decisões que fazem
              parte da rotina ministerial, sem misturar fé com abordagem comercial.
            </p>
            <p>
              Quando converso com um pastor ou com a liderança de uma igreja, procuro tratar cada
              projeto com respeito, transparência e responsabilidade, entendendo que por trás de
              cada decisão existem pessoas, famílias, recursos da igreja e muitos anos de trabalho.
            </p>
          </div>

          <p className="mt-6 border-l-2 border-gold bg-background px-5 py-4 text-base font-semibold leading-[1.7] text-primary">
            Meu papel é ajudar você a entender as possibilidades e planejar cada decisão com mais
            clareza.
          </p>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-primary md:text-xl">
              Especialista e Consultor Autorizado Ademicon
            </h3>
            <p className="mt-2 text-sm leading-[1.65] text-muted-foreground">
              Minha credencial pode ser verificada diretamente no site oficial da Ademicon.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-4 h-auto whitespace-normal rounded-xl py-3 text-center">
              <a
                href={ADEMICON_CREDENTIAL_URL}
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
