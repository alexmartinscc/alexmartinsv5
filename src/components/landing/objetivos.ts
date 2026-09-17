import {
  Building2,
  Car,
  Landmark,
  BriefcaseBusiness,
  Users,
  Briefcase,
  Sprout,
  HeartPulse,
  Church,
  type LucideIcon,
} from "lucide-react";

export type ObjetivoBloco = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
};

export type Publico = {
  id: string;
  label: string;
  icon: LucideIcon;
  href?: string;
  highlight?: boolean;
};

/** Blocos de objetivos patrimoniais — reutilizáveis em futuras páginas por público. */
export const OBJETIVOS_CONQUISTAR: ObjetivoBloco[] = [
  {
    id: "imovel",
    title: "Imóvel",
    icon: Building2,
    description: "Comprar, construir, reformar, adquirir terrenos ou investir em imóveis.",
  },
  {
    id: "veiculo",
    title: "Veículo",
    icon: Car,
    description: "Comprar ou trocar carros, motos, utilitários, caminhões ou estruturar uma frota.",
  },
  {
    id: "investimento-patrimonio",
    title: "Investimento e Patrimônio",
    icon: Landmark,
    description: "Planejar novas aquisições, ampliar patrimônio ou construir fontes futuras de renda.",
  },
  {
    id: "novos-projetos",
    title: "Crédito para Novos Projetos",
    icon: BriefcaseBusiness,
    description: "Quitar financiamentos, estruturar novos projetos ou apoiar a expansão do negócio.",
  },
];

export const PUBLICOS: Publico[] = [
  { id: "pessoas", label: "Pessoas e Famílias", icon: Users },
  { id: "empreendedores", label: "Empreendedores", icon: Briefcase },
  { id: "agro", label: "Agro", icon: Sprout },
  {
    id: "saude",
    label: "Profissionais da Saúde",
    icon: HeartPulse,
    href: "/saude",
    highlight: true,
  },
  {
    id: "igrejas",
    label: "Igrejas e Organizações Religiosas",
    icon: Church,
    href: "/igrejas",
    highlight: true,
  },
];
