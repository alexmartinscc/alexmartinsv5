import { ChevronRight, Clock, Info, Lightbulb, MessageCircle, ShieldCheck, ThumbsUp, TriangleAlert } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Reveal } from "@/components/landing/Reveal";
import { ADEMICON_CREDENTIAL_URL, WHATSAPP_URL } from "@/lib/contact";

type NoteProps = {
  icon: typeof Info;
  label: string;
  children: React.ReactNode;
};

function Note({ icon: Icon, label, children }: NoteProps) {
  return (
    <div className="my-8 rounded-2xl border border-border/70 bg-secondary px-6 py-6 shadow-soft">
      <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-gold/15">
          <Icon className="h-3.5 w-3.5 text-gold" />
        </span>
        {label}
      </p>
      <div className="mt-3 text-[15px] leading-[1.85] text-muted-foreground">{children}</div>
    </div>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 pt-14 text-2xl font-extrabold text-primary md:text-[2rem] md:leading-[1.2]"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-8 text-lg font-bold text-primary">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-[1.9] text-muted-foreground">{children}</p>;
}

const SUMMARY = [
  { id: "o-que-e", label: "O que é o consórcio" },
  { id: "como-funciona", label: "Como funciona na prática" },
  { id: "contemplacao", label: "Como acontece a contemplação" },
  { id: "lances", label: "O que são os lances" },
  { id: "custos", label: "Custos: taxa de administração e fundo de reserva" },
  { id: "vantagens", label: "Principais vantagens" },
  { id: "quando-vale", label: "Quando vale a pena" },
  { id: "carta-contemplada", label: "O que fazer com a carta contemplada" },
  { id: "cuidados", label: "Cuidados antes de contratar" },
];

export function ComoFuncionaConsorcio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-secondary pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="section-shell">
            <nav aria-label="Você está aqui" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <li>
                  <Link to="/" className="transition-colors hover:text-primary">
                    Início
                  </Link>
                </li>
                <ChevronRight className="h-3 w-3" aria-hidden />
                <li>Central de Conhecimento</li>
                <ChevronRight className="h-3 w-3" aria-hidden />
                <li className="font-semibold text-primary">Como funciona o consórcio</li>
              </ol>
            </nav>

            <Reveal className="max-w-3xl">
              <p className="eyebrow">Central de Conhecimento</p>
              <h1 className="mt-5 text-3xl font-extrabold text-primary md:text-[3rem] md:leading-[1.1]">
                Como funciona o consórcio?
              </h1>
              <p className="mt-4 text-lg font-semibold text-primary/80 md:text-xl">
                Guia completo para entender antes de contratar.
              </p>
              <p className="measure mt-6 leading-[1.9] text-muted-foreground">
                Entenda como funciona o consórcio, como acontece a contemplação, quais são suas
                vantagens e descubra quando essa estratégia pode ser uma excelente alternativa para
                realizar seus projetos.
              </p>
              <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-4 py-2 text-xs text-muted-foreground shadow-soft">
                <Clock className="h-3.5 w-3.5 text-gold" />
                Tempo estimado de leitura: 8 minutos
              </p>
            </Reveal>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="bg-background py-16 md:py-24">
          <div className="section-shell grid gap-14 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-border/70 bg-secondary p-7 shadow-soft">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                  Neste guia
                </p>
                <ul className="mt-5 space-y-3">
                  {SUMMARY.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm leading-[1.6] text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <article className="max-w-2xl">
              <P>
                O consórcio é uma das formas mais utilizadas no Brasil para conquistar bens de maior
                valor de maneira planejada e sem juros. Ainda assim, muitas pessoas deixam de
                considerá-lo simplesmente porque nunca receberam uma explicação clara sobre como ele
                funciona.
              </P>
              <P>
                Este guia foi escrito para mudar isso. A ideia é que, ao final da leitura, você
                entenda o mecanismo, saiba avaliar se ele se encaixa no seu projeto e reconheça
                quando outra estratégia pode ser mais adequada.
              </P>

              <H2 id="o-que-e">O que é o consórcio</H2>
              <P>
                O consórcio é uma compra coletiva e programada. Um grupo de pessoas com um objetivo
                semelhante — comprar um imóvel, um veículo, equipamentos ou serviços — se reúne sob
                a administração de uma empresa autorizada e fiscalizada pelo Banco Central do
                Brasil.
              </P>
              <P>
                Cada participante paga uma parcela mensal, e o dinheiro arrecadado forma um fundo
                comum. Todos os meses, esse fundo é utilizado para contemplar participantes, ou
                seja, entregar a eles o crédito contratado para a compra do bem.
              </P>

              <Note icon={Info} label="Você sabia?">
                O consórcio é regulamentado pela Lei nº 11.795/2008 e fiscalizado pelo Banco Central
                do Brasil. As administradoras precisam de autorização para operar e prestam contas
                sobre os recursos dos grupos.
              </Note>

              <H2 id="como-funciona">Como funciona na prática</H2>
              <H3>1. Escolha do crédito</H3>
              <P>
                Você define o valor do crédito de que precisa — por exemplo, R$ 300 mil para um
                imóvel. Esse valor é a sua carta de crédito, e é ele que determina o valor das suas
                parcelas.
              </P>
              <H3>2. Entrada no grupo</H3>
              <P>
                Você passa a integrar um grupo com prazo definido (por exemplo, 200 meses) e começa
                a pagar as parcelas mensais. Não há entrada obrigatória nem juros.
              </P>
              <H3>3. Assembleias mensais</H3>
              <P>
                Todos os meses acontece uma assembleia. É nela que os participantes são contemplados
                por sorteio ou por lance.
              </P>
              <H3>4. Contemplação e uso do crédito</H3>
              <P>
                Ao ser contemplado, você recebe a carta de crédito e pode utilizá-la para comprar o
                bem à vista, o que costuma dar um bom poder de negociação. Depois disso, você segue
                pagando as parcelas restantes.
              </P>

              <Note icon={Lightbulb} label="Dica do Alex">
                O valor do crédito pode ser maior ou menor do que o bem que você pretende comprar. O
                importante é planejar a parcela dentro do seu orçamento e definir uma estratégia
                para antecipar a contemplação.
              </Note>

              <H2 id="contemplacao">Como acontece a contemplação</H2>
              <P>Existem duas formas de ser contemplado em um consórcio:</P>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="card-lift rounded-3xl border border-border/70 bg-secondary p-6 shadow-soft">
                  <h3 className="text-sm font-bold text-primary">Sorteio</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                    Realizado nas assembleias mensais. Todos os participantes em dia concorrem em
                    igualdade de condições, independentemente de quando entraram no grupo.
                  </p>
                </div>
                <div className="card-lift rounded-3xl border border-border/70 bg-secondary p-6 shadow-soft">
                  <h3 className="text-sm font-bold text-primary">Lance</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                    Uma antecipação de parcelas oferecida pelo participante. O maior lance da
                    assembleia é contemplado, conforme as regras do grupo.
                  </p>
                </div>
              </div>

              <Note icon={TriangleAlert} label="Importante">
                Ninguém pode garantir a data da sua contemplação. Qualquer promessa de contemplação
                imediata deve acender um sinal de alerta. O que existe é estratégia: escolher bem o
                grupo e planejar o lance aumenta significativamente as suas chances.
              </Note>

              <H2 id="lances">O que são os lances</H2>
              <P>
                O lance é a principal ferramenta estratégica do consórcio. Ao ofertar um lance, você
                antecipa parte do saldo devedor em troca da chance de ser contemplado antes.
              </P>
              <H3>Lance livre</H3>
              <P>
                Você oferta o percentual que desejar. Vence quem oferecer o maior valor naquela
                assembleia.
              </P>
              <H3>Lance fixo</H3>
              <P>
                O grupo define um percentual fixo. Todos que ofertarem esse valor concorrem entre si
                por sorteio.
              </P>
              <H3>Lance embutido</H3>
              <P>
                Parte do lance é retirada da própria carta de crédito, reduzindo o valor final
                recebido. É útil para quem não tem recursos disponíveis no momento.
              </P>

              <Note icon={Lightbulb} label="Dica do Alex">
                A escolha entre lance livre, fixo ou embutido muda completamente o resultado. Eu
                acompanho o histórico dos grupos e ajudo você a definir o momento e o percentual com
                a melhor relação entre custo e chance de contemplação.
              </Note>

              <H2 id="custos">Custos: taxa de administração e fundo de reserva</H2>
              <P>
                O consórcio não tem juros, mas tem custos — e é fundamental conhecê-los antes de
                contratar.
              </P>
              <ul className="mt-6 space-y-4">
                {[
                  {
                    t: "Taxa de administração",
                    d: "Remuneração da administradora pela gestão do grupo. É diluída ao longo das parcelas.",
                  },
                  {
                    t: "Fundo de reserva",
                    d: "Reserva de segurança do grupo, usada para cobrir eventuais inadimplências e manter o equilíbrio das contemplações.",
                  },
                  {
                    t: "Seguro (quando houver)",
                    d: "Proteção que garante a continuidade do contrato em situações previstas em apólice.",
                  },
                  {
                    t: "Reajuste do crédito",
                    d: "A carta de crédito é atualizada periodicamente para não perder poder de compra — e as parcelas acompanham essa correção.",
                  },
                ].map((item) => (
                  <li
                    key={item.t}
                    className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background px-5 py-4 shadow-soft"
                  >
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/15">
                      <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-primary">{item.t}</span>
                      <span className="text-sm leading-[1.7] text-muted-foreground">{item.d}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <H2 id="vantagens">Principais vantagens</H2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {[
                  { t: "Sem juros", d: "Você paga taxa de administração, não juros compostos como em um financiamento." },
                  { t: "Parcelas menores", d: "Para o mesmo valor de crédito, a parcela costuma ser mais leve do que a de um financiamento." },
                  { t: "Poder de compra à vista", d: "A carta de crédito funciona como dinheiro à vista e abre espaço para negociar descontos." },
                  { t: "Disciplina financeira", d: "É um planejamento de médio e longo prazo que organiza a realização do projeto." },
                  { t: "Flexibilidade", d: "O crédito pode ser usado para imóvel, veículo, reforma, equipamentos ou quitação de financiamento." },
                  { t: "Possibilidade de acelerar", d: "Com uma boa estratégia de lances é possível antecipar bastante a contemplação." },
                ].map((item) => (
                  <div
                    key={item.t}
                    className="card-lift rounded-3xl border border-border/70 bg-secondary p-6 shadow-soft"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gold/12">
                      <ThumbsUp className="h-4 w-4 text-gold" />
                    </span>
                    <h3 className="mt-4 text-sm font-bold text-primary">{item.t}</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">{item.d}</p>
                  </div>
                ))}
              </div>

              <H2 id="quando-vale">Quando vale a pena</H2>
              <Note icon={ThumbsUp} label="Quando vale a pena">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Você tem um projeto planejado e não precisa do bem imediatamente.</li>
                  <li>Quer evitar os juros de um financiamento.</li>
                  <li>Deseja formar patrimônio de forma disciplinada.</li>
                  <li>Pretende trocar de imóvel ou de veículo nos próximos anos.</li>
                  <li>Quer quitar um financiamento caro e reduzir o custo total.</li>
                  <li>Planeja construir renda com imóveis ao longo do tempo.</li>
                </ul>
              </Note>

              <Note icon={TriangleAlert} label="Quando outra estratégia pode ser mais adequada">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Você precisa do bem com urgência e não pode aguardar a contemplação.</li>
                  <li>O orçamento atual não comporta a parcela com folga.</li>
                  <li>Você já possui o valor à vista e não vê vantagem em parcelar.</li>
                </ul>
                <p className="mt-3">
                  Nesses casos, o mais honesto é dizer isso com clareza — e é exatamente o que eu
                  faço em cada atendimento.
                </p>
              </Note>

              <H2 id="carta-contemplada">O que fazer com a carta contemplada</H2>
              <P>
                Depois de contemplado, o crédito pode ser usado de várias formas, sempre dentro da
                categoria contratada:
              </P>
              <P>
                Comprar um imóvel pronto, na planta ou usado; construir ou reformar; adquirir um
                terreno; comprar veículos, máquinas ou equipamentos; e ainda quitar um financiamento
                existente, reduzindo o custo com juros.
              </P>

              <Note icon={Info} label="Você sabia?">
                Como o pagamento é feito à vista ao vendedor, é comum conseguir descontos
                relevantes na negociação — o que, na prática, aumenta o valor real do seu crédito.
              </Note>

              <H2 id="cuidados">Cuidados antes de contratar</H2>
              <P>
                Verifique se a administradora é autorizada pelo Banco Central, leia o contrato com
                atenção, entenda o prazo do grupo, a taxa de administração, as regras de lance e a
                forma de reajuste do crédito. Desconfie de promessas de contemplação garantida.
              </P>
              <P>
                E, principalmente, escolha alguém que explique tudo antes de recomendar qualquer
                coisa. Um bom consultor entende o seu projeto primeiro e só depois apresenta a
                solução — se ela realmente fizer sentido.
              </P>
            </article>

            <Reveal>
              <aside className="measure mt-16 rounded-3xl border border-border/70 bg-secondary p-8 shadow-soft md:p-10">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/15">
                    <ShieldCheck className="h-4 w-4 text-gold" />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-primary">Sobre o autor</h2>
                    <p className="mt-3 text-sm leading-[1.85] text-muted-foreground">
                      Sou Alex Martins, Representante Autorizado Ademicon.
                    </p>
                    <p className="mt-3 text-sm leading-[1.85] text-muted-foreground">
                      Meu trabalho é ajudar pessoas e empresas a entenderem as diferentes
                      estratégias financeiras disponíveis para realizar seus projetos com
                      planejamento, segurança e tranquilidade.
                    </p>
                    <p className="mt-3 text-sm leading-[1.85] text-muted-foreground">
                      Acredito que boas decisões começam com informação de qualidade.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Button asChild className="rounded-xl">
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4" />
                          Conversar pelo WhatsApp
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="rounded-xl">
                        <a
                          href={ADEMICON_CREDENTIAL_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Verificar credencial oficial
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>


        {/* CTA final */}
        <section className="bg-background pb-28 md:pb-40">
          <div className="section-shell">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-primary-deep px-6 py-20 text-center md:px-16 md:py-24">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
                />
                <div className="relative">
                  <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-primary-foreground md:text-[2.5rem] md:leading-[1.15]">
                    Vamos conversar sobre o seu projeto?
                  </h2>
                  <p className="mx-auto mt-5 max-w-2xl leading-[1.8] text-primary-foreground/70">
                    Cada projeto possui objetivos, recursos e prazos diferentes. Será um prazer
                    entender sua necessidade, esclarecer suas dúvidas e mostrar como o consórcio
                    pode ajudar você a realizar seus projetos.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="mt-10 rounded-xl bg-gold px-8 text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      Conversar pelo WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ComoFuncionaConsorcio;
