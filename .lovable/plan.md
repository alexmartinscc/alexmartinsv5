# Instalar GTM e eventos de conversão

## Implementação
- Instalar uma única vez o container `GTM-NMLHWP3L` no shell global, com script no topo do `<head>` e `noscript` logo após `<body>`.
- Ajustar a camada de analytics para inicializar `window.dataLayer` e enviar somente eventos ao GTM, removendo qualquer chamada direta a `gtag`.
- Disparar `generate_lead` nos formulários Home, Igrejas e Saúde somente após a confirmação positiva do endpoint Brevo, usando apenas `page_segment`, `source_domain` e uma categoria genérica.
- Instrumentar todos os links de WhatsApp com `whatsapp_click`, segmento da página, hostname atual e posição curta do CTA, sem alterar URLs ou mensagens.

## Segurança e privacidade
- Não enviar nome, e-mail, telefone, WhatsApp, mensagem, objetivo detalhado ou qualquer dado identificável ao `dataLayer`.
- Preservar integralmente captura de UTMs, envio Brevo, telas de sucesso/erro e proteção contra envio duplicado.

## Validação
- Verificar que o ID GTM aparece uma vez no HTML e que não existe instalação direta de GA4/`gtag`.
- Testar Home, `/igrejas`, `/saude` e a Home com hostname `consorcioigrejas.com.br`.
- Simular respostas de sucesso e falha do endpoint para confirmar a ordem dos eventos e ausência de dados pessoais.
- Testar cliques de WhatsApp e executar os testes automatizados do projeto; a validação de produção real dependerá da publicação desta versão.
