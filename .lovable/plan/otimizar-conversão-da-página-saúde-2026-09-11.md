# Otimizar conversão da página Saúde

## Objetivo
Ajustar apenas a hierarquia visual e os pontos de conversão de `/saude`, preservando conteúdo, SEO, formulário, Brevo, GTM e demais páginas.

## Implementação
- Remover dos quatro quadros de Dores os estilos de elevação e interação, mantendo-os como blocos informativos.
- Transformar os dois quadros de Objetivos em links acessíveis para `#contato`, com foco visível e um único `cta_click` por clique.
- Usar `cta_name: expandir_negocio` e `cta_name: construir_patrimonio` e remover o CTA separado ao fim da seção.
- Remover o CTA final de “Por que Consórcio” sem alterar o conteúdo explicativo compartilhado.
- Remover apenas a frase iniciada por “Uma conversa...” no contato final e fechar o espaço resultante.

## Validação
- Conferir desktop e mobile, navegação por teclado, rolagem para `#contato` e emissão única dos eventos.
- Confirmar ausência dos textos removidos, manutenção do formulário e do WhatsApp final e ausência de espaços excessivos.
- Executar os testes disponíveis e validar a compilação de produção.
