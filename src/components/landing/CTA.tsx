import { useMemo, useState, type FormEvent } from "react";
import { Check, CheckCircle2, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "./Reveal";
import { ValueStepper, buildScale } from "./ValueStepper";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/contact";
import { getLeadOrigin } from "@/lib/lead-tracking";
import { ERRO_ENVIO, sendLead } from "@/lib/send-lead";
import { getProjectCategory, trackLeadGenerated } from "@/lib/analytics";

const OBJETIVOS = [
  "Comprar imóvel ou terreno",
  "Construir ou reformar",
  "Quitar financiamento imobiliário",
  "Gerar renda com imóveis",
  "Ter uma aposentadoria confortável",
  "Obter crédito usando meu imóvel",
  "Comprar veículo ou utilitário",
  "Projeto empresarial ou agro",
  "Outro",
];

const CREDITO_MIN = 40000;
const PARCELA_MIN = 270;

const CONVERSA_PASSOS = [
  "Entender seu objetivo e suas prioridades",
  "Avaliar prazo e capacidade de investimento",
  "Analisar as possibilidades disponíveis",
  "Definir os próximos passos",
];

function maskPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

type Errors = Partial<Record<"nome" | "whatsapp" | "email" | "objetivo" | "modo", string>>;

export function CTA() {
  const creditoScale = useMemo(
    () =>
      buildScale(CREDITO_MIN, 5000000, [
        { upTo: 500000, step: 10000 },
        { upTo: 1000000, step: 25000 },
        { upTo: Infinity, step: 50000 },
      ]),
    [],
  );
  const parcelaScale = useMemo(
    () =>
      buildScale(PARCELA_MIN, 30000, [
        { upTo: 2000, step: 50 },
        { upTo: 5000, step: 100 },
        { upTo: Infinity, step: 250 },
      ]),
    [],
  );

  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [modo, setModo] = useState<"credito" | "parcela" | "">("");
  const [credito, setCredito] = useState(CREDITO_MIN);
  const [parcela, setParcela] = useState(PARCELA_MIN);
  const [errors, setErrors] = useState<Errors>({});
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erroEnvio, setErroEnvio] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enviando || enviado) return;
    setErroEnvio("");
    const next: Errors = {};
    if (!nome.trim()) next.nome = "Informe seu nome para que eu saiba com quem estou falando.";
    if (whatsapp.replace(/\D/g, "").length < 10)
      next.whatsapp = "Informe seu WhatsApp para que eu possa entrar em contato.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()))
      next.email = "Informe um e-mail válido para eu enviar as informações.";
    if (!objetivo) next.objetivo = "Escolha o que você está buscando.";
    if (!modo) next.modo = "Escolha se quer indicar o crédito ou o valor mensal.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const payload = {
      nome: nome.trim(),
      whatsapp,
      email: email.trim(),
      objetivo,
      tipo_valor: modo,
      valor: modo === "credito" ? credito : parcela,
      source_page: "home",
      empresa_site: honeypot,
      ...getLeadOrigin(),
    };
    if (typeof window !== "undefined") {
      (window as unknown as { __ultimoLead?: unknown }).__ultimoLead = payload;
    }

    setEnviando(true);
    const ok = await sendLead(payload);
    setEnviando(false);
    if (ok) {
      trackLeadGenerated("home", getProjectCategory(objetivo));
      setEnviado(true);
    } else setErroEnvio(ERRO_ENVIO);
  };

  return (
    <section id="contato" className="scroll-mt-24 bg-background py-12 md:py-20">
      <div className="section-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary-deep px-5 py-10 md:px-12 md:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
            />
            <div className="relative grid gap-8 lg:grid-cols-[42fr_58fr] lg:items-start lg:gap-12">
              <div>
                <h2 className="text-3xl font-extrabold text-primary-foreground md:text-[2.25rem] md:leading-[1.15]">
                  Vamos analisar seu projeto?
                </h2>
                <p className="mt-4 leading-[1.7] text-primary-foreground/70">
                  Em uma conversa de aproximadamente 30 minutos, vou entender seu objetivo e avaliar, junto com você,
                  quais possibilidades fazem mais sentido para o seu momento.
                </p>
                <ol className="mt-6 space-y-3">
                  {CONVERSA_PASSOS.map((passo, index) => (
                    <li key={passo} className="flex items-start gap-3 text-sm leading-[1.6] text-primary-foreground/80">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-xs font-bold text-gold-foreground">
                        {index + 1}
                      </span>
                      {passo}
                    </li>
                  ))}
                </ol>
                <div className="mt-7 border-t border-primary-foreground/15 pt-5">
                  <h3 className="text-sm font-semibold text-gold">Como posso falar com você?</h3>
                  <div className="mt-3 flex flex-col gap-2 text-sm text-primary-foreground/70">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="inline-flex w-fit items-center gap-2 transition-colors hover:text-primary-foreground"
                    >
                      <Mail className="h-4 w-4 text-gold" aria-hidden />
                      {CONTACT_EMAIL}
                    </a>
                    <span className="inline-flex w-fit items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-gold" aria-hidden />
                      {WHATSAPP_NUMBER}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-card p-5 md:p-7">
                {enviado ? (
                  <div aria-live="polite" className="py-6 text-center">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-gold" aria-hidden />
                    <h3 className="mt-4 text-2xl font-bold text-card-foreground">Recebi seu projeto.</h3>
                    <p className="mx-auto mt-3 max-w-md leading-[1.7] text-muted-foreground">
                      Obrigado pelas informações. Vou analisar o que você me contou e entrar em contato para
                      combinarmos os próximos passos.
                    </p>
                    <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                      Se preferir adiantar nossa conversa, você também pode falar comigo pelo WhatsApp.
                    </p>
                    <Button asChild variant="outline" className="mt-6 rounded-xl">
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" aria-hidden />
                        Falar pelo WhatsApp
                      </a>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="hidden" aria-hidden>
                      <label htmlFor="lead-empresa-site">Não preencher</label>
                      <input
                        id="lead-empresa-site"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lead-nome">Nome</Label>
                      <Input
                        id="lead-nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        autoComplete="name"
                        maxLength={100}
                        aria-invalid={!!errors.nome}
                        aria-describedby={errors.nome ? "erro-nome" : undefined}
                      />
                      {errors.nome && (
                        <p id="erro-nome" className="text-sm text-destructive">
                          {errors.nome}
                        </p>
                      )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="lead-whatsapp">WhatsApp</Label>
                        <Input
                          id="lead-whatsapp"
                          type="tel"
                          inputMode="tel"
                          placeholder="(11) 90000-0000"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(maskPhone(e.target.value))}
                          autoComplete="tel"
                          aria-invalid={!!errors.whatsapp}
                          aria-describedby={errors.whatsapp ? "erro-whatsapp" : undefined}
                        />
                        {errors.whatsapp && (
                          <p id="erro-whatsapp" className="text-sm text-destructive">
                            {errors.whatsapp}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="lead-email">E-mail</Label>
                        <Input
                          id="lead-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="email"
                          maxLength={255}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "erro-email" : undefined}
                        />
                        {errors.email && (
                          <p id="erro-email" className="text-sm text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="lead-objetivo">O que você está buscando?</Label>
                      <Select value={objetivo} onValueChange={setObjetivo}>
                        <SelectTrigger
                          id="lead-objetivo"
                          aria-invalid={!!errors.objetivo}
                          aria-describedby={errors.objetivo ? "erro-objetivo" : undefined}
                          className="w-full"
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
                        <p id="erro-objetivo" className="text-sm text-destructive">
                          {errors.objetivo}
                        </p>
                      )}
                    </div>

                    <fieldset className="space-y-2">
                      <legend className="text-sm font-medium text-card-foreground">
                        Qual informação você já tem?
                      </legend>
                      <RadioGroup
                        value={modo}
                        onValueChange={(value) => setModo(value as "credito" | "parcela")}
                        className="grid gap-2 sm:grid-cols-2"
                        aria-describedby={errors.modo ? "erro-modo" : undefined}
                      >
                        <div className="flex items-center gap-2 rounded-lg border border-border p-3">
                          <RadioGroupItem value="credito" id="modo-credito" />
                          <Label htmlFor="modo-credito" className="cursor-pointer font-normal">
                            Valor do crédito que procuro
                          </Label>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-border p-3">
                          <RadioGroupItem value="parcela" id="modo-parcela" />
                          <Label htmlFor="modo-parcela" className="cursor-pointer font-normal">
                            Valor que posso investir por mês
                          </Label>
                        </div>
                      </RadioGroup>
                      {errors.modo && (
                        <p id="erro-modo" className="text-sm text-destructive">
                          {errors.modo}
                        </p>
                      )}
                    </fieldset>

                    {modo === "credito" && (
                      <ValueStepper
                        label="Quanto crédito você busca?"
                        value={credito}
                        onChange={setCredito}
                        scale={creditoScale}
                      />
                    )}

                    {modo === "parcela" && (
                      <ValueStepper
                        label="Quanto você pode investir por mês?"
                        value={parcela}
                        onChange={setParcela}
                        scale={parcelaScale}
                        suffix="/mês"
                      />
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={enviando}
                      className="w-full rounded-xl bg-gold text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
                    >
                      <Send className="h-4 w-4" aria-hidden />
                      {enviando ? "Enviando..." : "Quero analisar meu projeto"}
                    </Button>

                    <p className="text-center text-xs font-medium text-muted-foreground">
                      <Check className="mr-1 inline h-3.5 w-3.5 text-gold" aria-hidden />
                      Sem compromisso de contratação.
                    </p>

                    {erroEnvio && (
                      <p role="alert" className="text-sm text-destructive">
                        {erroEnvio}
                      </p>
                    )}


                    <p className="text-xs leading-[1.6] text-muted-foreground">
                      Ao enviar, você concorda que eu utilize essas informações para entrar em contato sobre o seu
                      projeto. Seus dados não serão compartilhados para fins comerciais com terceiros.
                    </p>

                    <div className="border-t border-border pt-4 text-center">
                      <p className="text-sm text-muted-foreground">Prefere falar comigo agora?</p>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-primary underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <MessageCircle className="h-4 w-4" aria-hidden />
                        Falar pelo WhatsApp
                      </a>
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
