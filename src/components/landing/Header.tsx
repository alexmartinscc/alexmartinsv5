import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV = [
  { label: "O Problema", href: "#problema" },
  { label: "Sobre", href: "#sobre" },
  { label: "Método MAPA", href: "#metodo" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Ademicon", href: "#ademicon" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="section-shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-muted text-[9px] font-medium text-muted-foreground">
            logo
          </span>
          <span className="truncate font-display text-base font-extrabold text-primary">
            Consultor Patrimonial
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button asChild size="lg" className="ml-3 hidden rounded-xl sm:inline-flex">
            <a href="#cta">Falar com o consultor</a>
          </Button>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="section-shell flex flex-col py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="lg" className="mt-3 rounded-xl">
              <a href="#cta" onClick={() => setOpen(false)}>
                Falar com o consultor
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
