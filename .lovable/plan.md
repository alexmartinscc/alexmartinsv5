# Centralizar o fluxo de conversão

## Objetivo
Conduzir todos os CTAs comerciais intermediários de Home, Igrejas e Saúde à seção final `#contato`, mantendo formulário, Brevo, páginas, visual e SEO.

## Implementação
- Renomear o identificador das três seções finais para `contato` e atualizar todos os links comerciais internos.
- Trocar links intermediários de WhatsApp por âncoras acessíveis para `#contato`, ajustando somente os rótulos que prometiam abertura imediata do WhatsApp.
- Marcar cada CTA intermediário com localização e nome normalizados, rastreados por um único listener global como `cta_click`.
- Restringir `whatsapp_click` aos links reais de WhatsApp dentro de `#contato`, com `cta_location: contato_final` e sem evento adicional.
- Derivar `project_category` da opção selecionada em cada formulário por um mapeamento explícito e genérico, sem enviar dados pessoais ou texto livre.
- Preservar `generate_lead` somente após confirmação positiva do envio pelo backend.

## Detalhes técnicos
- Reutilizar a camada global de `dataLayer` e delegação de eventos, evitando listeners acumulados na navegação interna.
- Usar atributos `data-cta-location` e `data-cta-name` nos links intermediários.
- Manter links editoriais, credenciais externas e menus sem função comercial inalterados.
- Validar DOM, rolagem, eventos únicos, ausência de PII, segmentos/hostnames e build de produção.
