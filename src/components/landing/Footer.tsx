const LINKS = [
  { label: "O Problema", href: "#problema" },
  { label: "Sobre", href: "#sobre" },
  { label: "Método MAPA", href: "#metodo" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Ademicon", href: "#ademicon" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-14">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-background text-[9px] text-muted-foreground">
              logo
            </span>
            <span className="font-display text-base font-extrabold text-primary">
              Consultor Patrimonial
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Consultoria patrimonial e representante autorizado Ademicon.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:justify-items-end">
          {LINKS.map((link) => (
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

      <div className="section-shell mt-10 border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
