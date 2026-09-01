import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/landing/Reveal";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/contact";
import { getLeadOrigin } from "@/lib/lead-tracking";
import { trackEvent } from "@/lib/analytics";

const WHATSAPP_SAUDE_URL =
  "https://wa.me/5511933838030?text=" +
  encodeURIComponent(
    "Olá, Alex. Acessei a página para profissionais da saúde e gostaria de conversar sobre uma estratégia para o meu projeto.",
  );

const OBJETIVOS = [
  "Expandir meu negócio",
  "Construir patrimônio e gerar renda",
  "Quero avaliar minhas possibilidades",
];

function maskPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

type Errors = Partial<Record<"nome" | "whatsapp" | "email" | "objetivo", string>>;

export function CTASaude() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [profissao, setProfissao] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enviando || enviado) return;

    const next: Errors = {};
    if (!nome.trim()) next.nome = "Informe seu nome para que eu saiba com quem estou falando.";
    if (whatsapp.replace(/\D/g, "").length < 10)
      next.whatsapp = "Informe seu WhatsApp para que eu possa entrar em contato.";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()))
      next.email = "Informe um e-mail válido.";
    if (!objetivo) next.objetivo = "Escolha o seu principal objetivo.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setEnviando(true);
    const payload = {
      nome: nome.trim(),
      whatsapp,
      email: email.trim(),
      profissao: profissao.trim(),
      objetivo,
      mensagem: mensagem.trim(),
      source_page: "saude",
      ...getLeadOrigin(),
    };
    if (typeof window !== "undefined") {
      (window as unknown as { __ultimoLead?: unknown }).__ultimoLead = payload;
    }
    trackEvent("form_submit", { source_page: "saude", objetivo });
    setEnviado(true);
    setEnviando(false);
  };

  return (
    <section id="cta" className="scroll-mt-24 bg-background pb-14 md:pb-20">
      <div className="section-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary-deep px-5 py-10 md:px-12 md:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
            />
            <div className="relative grid gap-8 lg:grid-cols-[42fr_58fr] lg:items-start lg:gap-12 [&>*]:min-w-0">
              <div>
                <h2 className="text-3xl font-extrabold text-primary-foreground md:text-[2.25rem] md:leading-[1.15]">
                  Você trabalha muito pelo seu dinheiro. Faça ele trabalhar pelos seus próximos
                  objetivos.
                </h2>
                <p className="mt-4 leading-[1.7] text-primary-foreground/70">
                  Se você quer expandir seu negócio, construir patrimônio, preservar capital ou
                  criar novas fontes de renda, o primeiro passo é entender como utilizar melhor os
                  recursos que já possui.
                </p>
                <p className="mt-4 border-l-2 border-gold pl-4 text-base font-semibold leading-[1.7] text-primary-foreground">
                  Não comece escolhendo o produto.
                </p>
                <p className="mt-5 text-xl font-extrabold leading-[1.3] text-primary-foreground md:text-2xl">
                  Comece definindo a estratégia.
                </p>
                <p className="mt-3 leading-[1.7] text-primary-foreground/70">
                  Conte-me o que você deseja conquistar.
                </p>

                <div className="mt-6 flex flex-col gap-2 text-sm text-primary-foreground/70">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex w-fit items-center gap-2 transition-colors hover:text-primary-foreground"
                  >
                    <Mail className="h-4 w-4 text-gold" aria-hidden />
                    {CONTACT_EMAIL}
                  </a>
                  <a
                    href={WHATSAPP_SAUDE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("whatsapp_click", { local: "cta_saude" })}
                    className="inline-flex w-fit items-center gap-2 transition-colors hover:text-primary-foreground"
                  >
                    <MessageCircle className="h-4 w-4 text-gold" aria-hidden />
                    {WHATSAPP_NUMBER}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-card p-5 md:p-7">
                {enviado ? (
                  <div aria-live="polite" className="py-6 text-center">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-gold" aria-hidden />
                    <h3 className="mt-4 text-2xl font-bold text-card-foreground">
                      Recebi suas informações.
                    </h3>
                    <p className="mx-auto mt-3 max-w-md leading-[1.7] text-muted-foreground">
                      Vou analisar o que você me contou e entrar em contato para estruturarmos os
                      próximos passos.
                    </p>
                    <Button asChild variant="outline" className="mt-6 rounded-xl">
                      <a href={WHATSAPP_SAUDE_URL} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" aria-hidden />
                        Falar com Alex pelo WhatsApp
                      </a>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <input type="hidden" name="source_page" value="saude" />

                    <div className="space-y-1.5">
                      <Label htmlFor="saude-nome">Nome</Label>
                      <Input
                        id="saude-nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        autoComplete="name"
                        maxLength={120}
                        aria-invalid={!!errors.nome}
                        aria-describedby={errors.nome ? "erro-saude-nome" : undefined}
                      />
                      {errors.nome && (
                        <p id="erro-saude-nome" className="text-sm text-destructive">
                          {errors.nome}
                        </p>
                      )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="saude-whatsapp">WhatsApp</Label>
                        <Input
                          id="saude-whatsapp"
                          type="tel"
                          inputMode="tel"
                          placeholder="(11) 90000-0000"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(maskPhone(e.target.value))}
                          autoComplete="tel"
                          aria-invalid={!!errors.whatsapp}
                          aria-describedby={errors.whatsapp ? "erro-saude-whatsapp" : undefined}
                        />
                        {errors.whatsapp && (
                          <p id="erro-saude-whatsapp" className="text-sm text-destructive">
                            {errors.whatsapp}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="saude-email">E-mail (opcional)</Label>
                        <Input
                          id="saude-email"
                          type="email"
                          inputMode="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="email"
                          maxLength={255}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "erro-saude-email" : undefined}
                        />
                        {errors.email && (
                          <p id="erro-saude-email" className="text-sm text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="saude-profissao">Profissão</Label>
                      <Input
                        id="saude-profissao"
                        value={profissao}
                        onChange={(e) => setProfissao(e.target.value)}
                        maxLength={80}
                        placeholder="Médico, dentista, gestor de clínica…"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="saude-objetivo">Qual é o seu principal objetivo?</Label>
                      <Select value={objetivo} onValueChange={setObjetivo}>
                        <SelectTrigger
                          id="saude-objetivo"
                          className="w-full"
                          aria-invalid={!!errors.objetivo}
                          aria-describedby={errors.objetivo ? "erro-saude-objetivo" : undefined}
                        >
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          {OBJETIVOS.map((item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.objetivo && (
                        <p id="erro-saude-objetivo" className="text-sm text-destructive">
                          {errors.objetivo}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="saude-mensagem">
                        Conte-me brevemente o que você deseja conquistar
                      </Label>
                      <Textarea
                        id="saude-mensagem"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        rows={4}
                        maxLength={800}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={enviando}
                      className="w-full rounded-xl bg-gold text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
                    >
                      <Send className="h-4 w-4" aria-hidden />
                      Quero potencializar meus recursos
                    </Button>

                    <p className="text-xs leading-[1.6] text-muted-foreground">
                      Ao enviar, você concorda que eu utilize essas informações para entrar em
                      contato sobre o seu projeto. Seus dados não serão compartilhados para fins
                      comerciais com terceiros.
                    </p>

                    <div className="border-t border-border pt-4 text-center">
                      <p className="text-sm text-muted-foreground">Prefere conversar agora?</p>
                      <a
                        href={WHATSAPP_SAUDE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent("whatsapp_click", { local: "form_saude" })}
                        className="mt-1 inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-primary underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <MessageCircle className="h-4 w-4" aria-hidden />
                        Falar com Alex pelo WhatsApp
                      </a>
                      <p className="mt-2 text-xs leading-[1.6] text-muted-foreground">
                        Uma conversa inicial para entender seu projeto e avaliar os caminhos
                        possíveis.
                      </p>
                    </div>
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
