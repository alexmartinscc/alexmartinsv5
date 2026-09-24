import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV = [
  { label: "Objetivos", href: "/#portfolio" },
  { label: "Por que Consórcio", href: "/#por-que-consorcio" },
  { label: "Como funciona", href: "/#metodo" },
  { label: "Sobre", href: "/#sobre" },
  { label: "FAQ", href: "/#faq" },
];

type HeaderProps = {
  links?: { label: string; href: string }[];
  homeHref?: string;
  cta?: { label: string; href: string };
};

export function Header({ links = NAV, homeHref = "/#hero", cta }: HeaderProps = {}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="section-shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <a href={homeHref} className="flex min-w-0 items-center gap-3">
          <img
            src="/images/shared/logo-alex-martins.png"
            alt="Alex Martins — Consultoria Patrimonial"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 object-contain"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-base font-extrabold text-primary">
              Alex Martins
            </span>
            <span className="truncate text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Entender. Planejar. Conquistar.
            </span>
          </span>
        </a>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            {cta ? (
              <Button
                asChild
                className="rounded-xl bg-gold px-5 text-gold-foreground hover:bg-gold/90"
              >
                <a href={cta.href} data-cta-location="header" data-cta-name="falar_comigo">
                  {cta.label}
                </a>
              </Button>
            ) : null}
          </nav>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="rounded-xl lg:hidden"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="section-shell flex flex-col py-4">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            {cta ? (
              <Button
                asChild
                className="mt-2 w-full rounded-xl bg-gold text-gold-foreground hover:bg-gold/90"
              >
                <a
                  href={cta.href}
                  data-cta-location="menu_mobile"
                  data-cta-name="falar_comigo"
                  onClick={() => setOpen(false)}
                >
                  {cta.label}
                </a>
              </Button>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
