import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";

export function Obrigado() {
  return (
    <div className="flex min-h-screen items-center bg-background">
      <main className="section-shell py-16">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow justify-center">Projeto recebido</span>
          <h1 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">Recebi seu projeto.</h1>
          <p className="mt-4 leading-[1.7] text-muted-foreground">
            Obrigado pelas informações. Vou analisar o que você me contou e entrar em contato para combinarmos os
            próximos passos.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Se preferir adiantar nossa conversa, você também pode falar comigo pelo WhatsApp.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="outline" className="rounded-xl">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Falar pelo WhatsApp
              </a>
            </Button>
            <Button asChild variant="ghost" className="rounded-xl">
              <Link to="/">Voltar para a página inicial</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Obrigado;
