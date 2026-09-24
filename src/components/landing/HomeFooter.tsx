import { ExternalLink } from "lucide-react";
import {
  ADEMICON_CREDENTIAL_URL,
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
} from "@/lib/contact";

const LINKS = [
  { label: "Prioridades", href: "#prioridades" },
  { label: "Como trabalho", href: "#metodo" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
];

export function HomeFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="section-shell grid gap-7 py-8 md:grid-cols-[1.3fr_0.7fr] md:items-start">
        <div className="flex items-start gap-3">
          <img
            src="/images/shared/logo-alex-martins.png"
            alt="Alex Martins — Consultoria Patrimonial"
            width={40}
            height={40}
            loading="lazy"
            className="h-10 w-10 shrink-0 object-contain"
          />
          <div>
            <p className="font-display text-sm font-extrabold text-primary">
              Alex Martins — Consultoria Patrimonial
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Entender. Planejar. Conquistar.</p>
            <a
              href={ADEMICON_CREDENTIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-gold"
            >
              Consultor Autorizado Ademicon{" "}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="section-shell flex flex-col gap-2 border-t border-border py-4 text-xs text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-between">
        <p>© {new Date().getFullYear()} Alex Martins Consultoria Patrimonial</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary">
            {CONTACT_EMAIL}
          </a>
          <span>{WHATSAPP_NUMBER}</span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </footer>
  );
}
