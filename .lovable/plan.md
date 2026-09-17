# Melhorar a conversão consultiva da Home

## Objetivo
Tornar o próximo passo mais claro na página principal, preservando identidade, estrutura, Método MAPA, conteúdo institucional, formulário, integrações e hotsites.

## Implementação
- Padronizar os CTAs de contato da Home como **“Quero analisar meu projeto”**, mantendo `#contato`, estilos e eventos existentes.
- Reorganizar a seção Objetivos em quatro opções compactas: Imóvel, Veículo, Investimento e Patrimônio, e Crédito para Novos Projetos; cada opção levará ao contato sem parecer um botão promocional.
- Inserir, dentro do fluxo da própria seção Objetivos, uma chamada compacta de transição com o texto e CTA solicitados.
- Atualizar somente a apresentação do contato final: novo título, explicação da conversa, quatro passos escaneáveis e nota “Sem compromisso de contratação.”, preservando todos os campos, validações, Brevo, WhatsApp e estados atuais.
- Quando um componente também for usado por Saúde ou Igrejas, adicionar configuração opcional e aplicar a mudança apenas na Home.

## Validação
- Confirmar desktop e mobile sem excesso de altura, sobreposição ou rolagem horizontal.
- Verificar que todos os CTAs alterados apontam para `#contato` e continuam gerando apenas o evento esperado.
- Testar formulário, WhatsApp final e build do projeto, sem alterações em `/saude` ou `/igrejas`.
