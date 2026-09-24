import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Reveal } from "./Reveal";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/contact";
import { getLeadOrigin } from "@/lib/lead-tracking";
import { ERRO_ENVIO, sendLead } from "@/lib/send-lead";
import { getProjectCategory, trackLeadGenerated } from "@/lib/analytics";
import { HOME_PRIORITY_EVENT } from "@/lib/home-priority";

const PRIORITIES = [
  "Comprar um imóvel",
  "Construir ou reformar",
  "Comprar um terreno",
  "Construir patrimônio",
  "Gerar renda",
  "Comprar ou trocar um veículo",
  "Veículos ou frota para empresa",
  "Expandir ou estruturar um negócio",
  "Quitar um financiamento",
  "Outro projeto",
];

function maskPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

type Errors = Partial<Record<"nome" | "whatsapp" | "prioridade", string>>;

export function CTA() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erroEnvio, setErroEnvio] = useState("");
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    const onPriority = (event: Event) => {
      const priority = (event as CustomEvent<string>).detail;
      if (PRIORITIES.includes(priority)) {
        setPrioridade(priority);
        setErrors((current) => ({ ...current, prioridade: undefined }));
      }
    };
    window.addEventListener(HOME_PRIORITY_EVENT, onPriority);
    return () => window.removeEventListener(HOME_PRIORITY_EVENT, onPriority);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enviando || enviado) return;
    setErroEnvio("");
    const next: Errors = {};
    if (!nome.trim()) next.nome = "Informe seu nome para que eu saiba com quem estou falando.";
    if (whatsapp.replace(/\D/g, "").length < 10) next.whatsapp = "Informe seu WhatsApp para que eu possa entrar em contato.";
    if (!prioridade) next.prioridade = "Escolha a prioridade do seu projeto.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const payload = { nome: nome.trim(), whatsapp, objetivo: prioridade, mensagem: mensagem.trim(), source_page: "home", empresa_site: honeypot, ...getLeadOrigin() };
    setEnviando(true);
    const ok = await sendLead(payload);
    setEnviando(false);
    if (ok) {
      trackLeadGenerated("home", getProjectCategory(prioridade));
      setEnviado(true);
    } else setErroEnvio(ERRO_ENVIO);
  };

  return (
    <section id="contato" className="scroll-mt-24 bg-background py-12 md:py-20">
      <div className="section-shell">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-primary-deep px-5 py-10 md:px-12 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[42fr_58fr] lg:items-start lg:gap-12">
              <div>
                <h2 className="text-3xl font-extrabold text-primary-foreground md:text-[2.25rem] md:leading-[1.15]">Antes de decidir, descubra se existe um caminho melhor para o seu projeto.</h2>
                <p className="mt-4 leading-[1.7] text-primary-foreground/75">Conte-me o que você pretende realizar. Vamos entender seu cenário, suas prioridades e o que merece ser comparado antes da sua decisão.</p>
                <div className="mt-7 border-t border-primary-foreground/15 pt-5 text-sm text-primary-foreground/70">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="flex w-fit items-center gap-2 hover:text-primary-foreground"><Mail className="h-4 w-4 text-gold" aria-hidden="true" />{CONTACT_EMAIL}</a>
                  <span className="mt-3 flex w-fit items-center gap-2"><MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />{WHATSAPP_NUMBER}</span>
                </div>
              </div>
              <div className="rounded-2xl bg-card p-5 md:p-7">
                {enviado ? (
                  <div aria-live="polite" className="py-6 text-center">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-gold" aria-hidden="true" />
                    <h3 className="mt-4 text-2xl font-bold text-card-foreground">Recebi seu projeto.</h3>
                    <p className="mx-auto mt-3 max-w-md leading-[1.7] text-muted-foreground">Obrigado pelas informações. Vou analisar o que você me contou e entrar em contato para combinarmos os próximos passos.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="hidden" aria-hidden><label htmlFor="lead-empresa-site">Não preencher</label><input id="lead-empresa-site" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} /></div>
                    <div className="space-y-1.5"><Label htmlFor="lead-nome">Nome</Label><Input id="lead-nome" value={nome} onChange={(event) => setNome(event.target.value)} autoComplete="name" maxLength={100} aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "erro-nome" : undefined} />{errors.nome ? <p id="erro-nome" className="text-sm text-destructive">{errors.nome}</p> : null}</div>
                    <div className="space-y-1.5"><Label htmlFor="lead-whatsapp">WhatsApp</Label><Input id="lead-whatsapp" type="tel" inputMode="tel" placeholder="(11) 90000-0000" value={whatsapp} onChange={(event) => setWhatsapp(maskPhone(event.target.value))} autoComplete="tel" aria-invalid={!!errors.whatsapp} aria-describedby={errors.whatsapp ? "erro-whatsapp" : undefined} />{errors.whatsapp ? <p id="erro-whatsapp" className="text-sm text-destructive">{errors.whatsapp}</p> : null}</div>
                    <div className="space-y-1.5"><Label htmlFor="lead-prioridade">Qual é a sua prioridade?</Label><Select value={prioridade} onValueChange={setPrioridade}><SelectTrigger id="lead-prioridade" aria-invalid={!!errors.prioridade} aria-describedby={errors.prioridade ? "erro-prioridade" : undefined} className="w-full"><SelectValue placeholder="Selecione uma opção" /></SelectTrigger><SelectContent>{PRIORITIES.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select>{errors.prioridade ? <p id="erro-prioridade" className="text-sm text-destructive">{errors.prioridade}</p> : null}</div>
                    <div className="space-y-1.5"><Label htmlFor="lead-mensagem">Conte brevemente o que você pretende realizar <span className="font-normal text-muted-foreground">(opcional)</span></Label><Textarea id="lead-mensagem" value={mensagem} onChange={(event) => setMensagem(event.target.value)} maxLength={1200} rows={4} /></div>
                    <Button type="submit" size="lg" disabled={enviando} className="w-full rounded-xl bg-gold text-gold-foreground hover:bg-gold/90"><Send className="h-4 w-4" aria-hidden="true" />{enviando ? "Enviando..." : "Quero descobrir minhas opções"}</Button>
                    <p className="text-center text-sm font-medium text-muted-foreground">Atendimento direto comigo.</p>
                    {erroEnvio ? <p role="alert" className="text-sm text-destructive">{erroEnvio}</p> : null}
                    <p className="text-xs leading-[1.6] text-muted-foreground">Ao enviar, você concorda que eu utilize essas informações para entrar em contato sobre o seu projeto. Seus dados não serão compartilhados para fins comerciais com terceiros.</p>
                    <div className="border-t border-border pt-4 text-center"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-primary underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><MessageCircle className="h-4 w-4" aria-hidden="true" />Falar pelo WhatsApp</a></div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
