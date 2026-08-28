import logo from "@/assets/alex-martins-logo.png";

const LINKS = [
  { label: "Objetivos", href: "/#portfolio" },
  { label: "Consórcio", href: "/#por-que-consorcio" },
  { label: "Como funciona", href: "/#metodo" },
  { label: "Sobre", href: "/#sobre" },
  { label: "FAQ", href: "/#faq" },
];

type FooterProps = {
  links?: { label: string; href: string }[];
};

export function Footer({ links = LINKS }: FooterProps = {}) {
  const items = links;
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="section-shell flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logotipo Alex Martins"
            width={36}
            height={36}
            loading="lazy"
            className="h-9 w-9 shrink-0 object-contain"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="font-display text-sm font-extrabold text-primary">Alex Martins</span>
            <span className="text-xs text-muted-foreground">
              Especialista em Planejamento Patrimonial. Consultor Autorizado Ademicon.
            </span>
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-4 gap-y-1.5">
          {items.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="section-shell border-t border-border py-3">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Alex Martins Consultoria Patrimonial
        </p>
      </div>
    </footer>
  );
}
