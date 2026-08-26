import { Building2, TrendingUp, Briefcase, Sprout, Car, type LucideIcon } from "lucide-react";

export type ObjetivoBloco = {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
};

/** Blocos de objetivos patrimoniais — reutilizáveis em futuras páginas por público. */
export const OBJETIVOS_PRINCIPAIS: ObjetivoBloco[] = [
  {
    id: "imoveis",
    title: "Imóveis e patrimônio",
    icon: Building2,
    items: [
      "Comprar o primeiro imóvel",
      "Comprar um novo imóvel",
      "Construir ou reformar",
      "Comprar terreno",
      "Investir em imóvel para locação",
      "Formar patrimônio imobiliário",
    ],
  },
  {
    id: "renda-futura",
    title: "Renda futura",
    icon: TrendingUp,
    items: [
      "Criar renda com imóveis alugados",
      "Construir uma fonte de renda para o futuro",
      "Planejar patrimônio para aposentadoria",
      "Reduzir a dependência exclusiva da renda do trabalho",
    ],
  },
];

export const OBJETIVOS_SECUNDARIOS: ObjetivoBloco[] = [
  {
    id: "empresas",
    title: "Empresas e profissionais",
    icon: Briefcase,
    items: [
      "Construir patrimônio fora da atividade principal",
      "Adquirir imóveis comerciais",
      "Expandir negócios",
      "Estruturar projetos de médio e longo prazo",
    ],
  },
  {
    id: "agro",
    title: "Agro",
    icon: Sprout,
    items: [
      "Aquisição de imóveis e propriedades",
      "Máquinas e equipamentos",
      "Expansão patrimonial",
      "Projetos de maior porte",
    ],
  },
];

export const OBJETIVOS_VEICULOS: ObjetivoBloco = {
  id: "veiculos",
  title: "Veículos e mobilidade",
  icon: Car,
  items: ["Automóveis", "Utilitários", "Caminhões", "Frotas"],
};
