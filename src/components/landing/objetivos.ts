import {
  Building2,
  TrendingUp,
  Users,
  Briefcase,
  Sprout,
  type LucideIcon,
} from "lucide-react";

export type ObjetivoBloco = {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
};

export type Publico = {
  id: string;
  label: string;
  icon: LucideIcon;
};

/** Blocos de objetivos patrimoniais — reutilizáveis em futuras páginas por público. */
export const OBJETIVOS_CONQUISTAR: ObjetivoBloco[] = [
  {
    id: "patrimonio",
    title: "Construir meu patrimônio",
    icon: Building2,
    items: [
      "Comprar imóveis ou terrenos",
      "Construir ou reformar",
      "Quitar financiamento imobiliário",
      "Adquirir veículos e utilitários",
    ],
  },
  {
    id: "renda-negocio",
    title: "Gerar renda ou obter crédito para meu negócio",
    icon: TrendingUp,
    items: [
      "Gerar renda com imóveis alugados",
      "Ter uma aposentadoria confortável",
      "Obter crédito usando meu imóvel como garantia",
    ],
  },
];

export const PUBLICOS: Publico[] = [
  { id: "pessoas", label: "Pessoas e Famílias", icon: Users },
  { id: "empreendedores", label: "Empreendedores", icon: Briefcase },
  { id: "agro", label: "Agro", icon: Sprout },
];
