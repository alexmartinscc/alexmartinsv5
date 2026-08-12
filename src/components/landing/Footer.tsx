import { Instagram, MessageCircle, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logo from "@/assets/alex-martins-logo.png.asset.json";
import {
  ADEMICON_CREDENTIAL_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "@/lib/contact";


const LINKS = [
  { label: "Consórcio", href: "/#problema" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Como funciona", href: "/#metodo" },
  { label: "Objetivos", href: "/#portfolio" },
  { label: "Ademicon", href: "/#ademicon" },
  { label: "FAQ", href: "/#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="section-shell py-14">
        <div className="rounded-2xl border border-border/70 bg-card px-7 py-9 shadow-soft md:flex md:items-center md:justify-between md:gap-8 md:px-10">
          <div className="max-w-xl">
            <h2 className="font-display text-xl font-extrabold text-primary md:text-2xl">
              Continue aprendendo
            </h2>
            <p className="mt-3 text-[15px] leading-[1.8] text-muted-foreground">
              Entenda o consórcio de forma simples e descubra como usá-lo para conquistar
              imóveis, patrimônio e novos projetos.
            </p>
          </div>
          <Button asChild size="lg" className="mt-6 rounded-xl md:mt-0 md:shrink-0">
            <Link to="/central-de-conhecimento">Acessar Central de Conhecimento</Link>
          </Button>
        </div>
      </div>

      <div className="section-shell grid gap-10 border-t border-border pt-14 pb-14 md:grid-cols-[1.2fr_1fr]">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Logotipo Alex Martins"
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 shrink-0 object-contain"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-extrabold text-primary">
                Alex Martins
              </span>
              <span className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                Entender. Planejar. Conquistar.
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Consultor Autorizado Ademicon. Especialista em Conquista Patrimonial.
          </p>

          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageCircle className="h-4 w-4 text-gold" />
              WhatsApp {WHATSAPP_NUMBER}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4 text-gold" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
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
          <Link
            to="/central-de-conhecimento"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Central de Conhecimento
          </Link>
        </nav>
      </div>

      <div className="section-shell mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-gold" />
          Consultor Autorizado Ademicon
          <span className="h-3 w-px bg-border" />
          <a
            href={ADEMICON_CREDENTIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-primary"
          >
            Verificar credencial
          </a>
        </p>
      </div>
    </footer>
  );
}
