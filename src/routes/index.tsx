import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/Home";

const FAQ_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O consórcio é seguro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O sistema de consórcios é regulamentado e fiscalizado pelo Banco Central do Brasil, que também é responsável por autorizar e supervisionar as administradoras. Por isso, um dos primeiros cuidados é verificar se a empresa escolhida está devidamente autorizada. No meu atendimento, você conta com a estrutura da Ademicon e também pode verificar minha autorização como consultor diretamente no site oficial da empresa.",
      },
    },
    {
      "@type": "Question",
      name: "Consórcio realmente custa menos que financiamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O consórcio não cobra juros de financiamento. Seu custo inclui a taxa de administração e os demais componentes previstos no contrato. No financiamento, além dos juros sobre o saldo devedor, podem existir TR, seguros, tarifas e outros componentes do CET. Por isso, a melhor comparação não é somente entre parcelas, mas entre quanto você precisa desembolsar ao longo de todo o projeto. Quer saber como essa diferença ficaria no seu caso? Quero simular meu projeto.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso dar entrada para fazer um consórcio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. No consórcio você pode começar seu plano sem entrada. Isso é diferente do financiamento imobiliário tradicional, no qual normalmente uma parte do valor do imóvel precisa ser paga com recursos próprios. E existe uma diferença importante: lance não é entrada. Se você já possui algum capital disponível, podemos avaliar se é melhor mantê-lo investido, preservá-lo para outros projetos ou utilizá-lo posteriormente dentro de uma estratégia de lance.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a contemplação?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A contemplação é o momento em que o crédito fica disponível para utilização e pode acontecer de duas formas: sorteio ou lance, nas assembleias do grupo. Não existe promessa de uma data específica para contemplação. Meu trabalho é ajudar você a acompanhar esse processo, entender as possibilidades e organizar estratégias de lance de acordo com seu projeto, para que esteja preparado para aproveitar as oportunidades ao longo do plano.",
      },
    },
    {
      "@type": "Question",
      name: "Posso usar meu FGTS no consórcio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. No consórcio imobiliário, o FGTS pode ser uma ferramenta importante dentro da estratégia, desde que sejam atendidas as regras aplicáveis ao uso do Fundo. Dependendo da situação, o saldo pode ser utilizado para: ofertar lance; complementar o valor da carta de crédito para aquisição do imóvel; amortizar ou quitar o saldo devedor; pagar parte das prestações, conforme as regras vigentes. Se você tem saldo de FGTS, podemos analisar como utilizá-lo dentro do seu projeto.",
      },
    },
    {
      "@type": "Question",
      name: "E se eu precisar do imóvel ou do crédito em menos tempo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O prazo do projeto é uma das primeiras coisas que precisamos entender. Dependendo da sua situação, podemos avaliar estratégias de lance e outras formas de estruturar o consórcio. Também existem operações com cotas já contempladas, sujeitas à disponibilidade, análise e aprovação da administradora. Por isso, antes de definir uma estratégia, precisamos entender quanto você precisa, para quê e em qual prazo.",
      },
    },
    {
      "@type": "Question",
      name: "Posso usar o consórcio para comprar um imóvel e colocar para alugar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A carta de crédito imobiliário pode ser utilizada para aquisição de imóvel dentro das condições previstas no contrato. Depois da aquisição, o imóvel pode fazer parte da sua estratégia patrimonial e ser destinado à locação. Esse é um dos caminhos que podemos trabalhar para transformar renda de hoje em patrimônio capaz de gerar renda no futuro.",
      },
    },
    {
      "@type": "Question",
      name: "Posso comprar mais de um imóvel com a mesma carta contemplada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, desde que a operação esteja dentro das regras da modalidade contratada e do limite do crédito disponível. Uma carta de maior valor, por exemplo, pode permitir a aquisição de dois ou mais imóveis de menor valor, dependendo da documentação, dos valores envolvidos e da aprovação da operação.",
      },
    },
    {
      "@type": "Question",
      name: "Posso usar o crédito para quitar um financiamento imobiliário?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Depois da contemplação, o crédito pode ser utilizado para quitar um financiamento imobiliário existente, desde que a operação esteja de acordo com as regras aplicáveis e com as condições do contrato. Essa possibilidade pode ser interessante para quem já possui um financiamento e quer avaliar uma estratégia para reduzir sua exposição aos juros ao longo do tempo.",
      },
    },
    {
      "@type": "Question",
      name: "O que acontece se eu for contemplado e não quiser usar o crédito naquele momento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Você não precisa comprar o bem imediatamente. Depois da contemplação, o crédito pode permanecer disponível de acordo com as regras do plano até que você decida quando e como utilizá-lo. Enquanto isso, os recursos seguem o tratamento financeiro previsto contratualmente. Isso oferece mais liberdade para escolher o momento e a oportunidade de compra.",
      },
    },
    {
      "@type": "Question",
      name: "Posso vender ou transferir minha cota contemplada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A cota pode ser transferida para outra pessoa, desde que sejam cumpridas as regras aplicáveis e o novo titular seja aprovado pela administradora. Na Ademicon, também existe a possibilidade de encaminhar a cota contemplada para avaliação por meio da Contemplay, parceira exclusiva da Ademicon. A eventual proposta depende das características da cota e das condições de mercado no momento da análise.",
      },
    },
    {
      "@type": "Question",
      name: "Como o consórcio pode ajudar minha empresa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O consórcio pode ajudar sua empresa a adquirir patrimônio e ativos de forma planejada, sem os juros de um financiamento tradicional e sem precisar comprometer uma grande parcela do caixa com entrada. Dependendo da modalidade contratada, o crédito pode ser utilizado para ativos como: imóveis comerciais; veículos e utilitários; caminhões; máquinas; equipamentos; máquinas agrícolas; outros bens compatíveis com a modalidade contratada. Preservação de caixa: em vez de descapitalizar a empresa com uma entrada elevada, o capital pode continuar disponível para estoque, pessoas, marketing, capital de giro ou outras necessidades do negócio. Planejamento patrimonial e contábil: quando o bem adquirido atende aos critérios contábeis, ele pode passar a integrar o ativo da empresa. Bens do ativo imobilizado utilizados na operação podem estar sujeitos ao reconhecimento contábil de depreciação ao longo de sua vida útil. Possíveis efeitos tributários: dependendo do regime tributário, do tipo de ativo e da forma como ele é utilizado pela empresa, podem existir efeitos fiscais relacionados à depreciação ou a outros tratamentos previstos na legislação. O tratamento contábil e tributário depende da realidade de cada empresa, do regime de tributação e do ativo adquirido. Essas questões devem ser avaliadas com o contador da empresa. Meu papel é ajudar a estruturar a estratégia de aquisição e trabalhar de forma alinhada com essa orientação contábil.",
      },
    },
    {
      "@type": "Question",
      name: "O que acontece depois que eu contrato?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meu trabalho não termina com a assinatura do contrato. Cada cliente da minha carteira conta com um canal direto comigo para tirar dúvidas, receber informações importantes e acompanhar o andamento do plano. Também ajudo na organização de boletos, assembleias e estratégias de lance e, quando previamente combinado, faço a aplicação do lance para que você não perca uma oportunidade por falta de tempo ou esquecimento. Você continua cuidando da sua família, profissão ou negócio, enquanto eu ajudo a acompanhar os detalhes do seu projeto de consórcio.",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(FAQ_PAGE_SCHEMA),
      },
    ],
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Home,
});
