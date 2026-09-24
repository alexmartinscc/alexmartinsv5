# Refatoração institucional da Home

## Escopo e preservação
- Alterar somente a Home, aproveitando os componentes atuais e preservando paleta, tipografia, logotipo, fotos, ícones e linguagem visual.
- Não criar páginas e não alterar conteúdo ou apresentação de `/saude` e `/igrejas`.
- Quando um componente também for compartilhado, usar configuração exclusiva da Home e manter o comportamento padrão atual nas demais páginas.

## Nova jornada da Home
- Atualizar o menu para **Prioridades, Como trabalho, Sobre, FAQ** e o destaque **Falar comigo**, todos ligados às âncoras solicitadas.
- Reescrever a Hero com a copy fornecida, mantendo a foto oficial e dois CTAs: formulário final e Método MAPA.
- Simplificar “Uma Reflexão Necessária” para quatro perguntas informativas, sem aparência ou comportamento de botão.
- Transformar “Qual é a sua prioridade?” em quatro opções clicáveis; cada clique rolará ao contato e preencherá a prioridade correspondente no formulário.
- Substituir a seção atual de benefícios do consórcio por uma comparação consultiva com três critérios, fechamento e CTA, sem tabela de produtos.
- Consolidar “Como eu trabalho” no Método MAPA, com a introdução e as quatro etapas fornecidas, sem outra seção redundante.
- Atualizar “Sobre mim” com a trajetória, frase de posicionamento e credencial oficial discreta.
- Reduzir o FAQ às seis perguntas e respostas fornecidas, em accordion compacto.
- Simplificar o contato final para Nome, WhatsApp, Prioridade e mensagem opcional, preservando envio real, UTMs, proteção anti-bot, estados de sucesso/erro e eventos sem dados pessoais.
- Atualizar o rodapé com posicionamento, assinatura, credencial e contatos já aprovados. Como o briefing proíbe novas páginas e não fornece o conteúdo ou URLs legais, não criarei destinos fictícios para Política de Privacidade e Termos de Uso.

## SEO e conteúdo técnico
- Atualizar title, description, canonical, Open Graph, Twitter e dados estruturados da Home para refletirem as seis novas perguntas do FAQ.
- Garantir um único H1, hierarquia correta de H2/H3, textos alternativos adequados, favicon preservado e Home indexável.
- Ajustar o envio da Home para aceitar exatamente os novos campos, sem enfraquecer as validações dos formulários de Saúde e Igrejas.
- Atualizar o mapeamento de categorias dos eventos para as novas opções, sem PII.

## Validação
- Conferir desktop e mobile em 360, 375, 390, 430, 768 e 1440 px, sem rolagem horizontal, excesso de altura ou quebras ruins.
- Testar menu, âncoras, CTAs, preenchimento automático do dropdown e submissão do formulário até a resposta disponível no ambiente.
- Confirmar no DOM ausência de seções antigas redundantes e apenas um H1.
- Verificar links, SEO, rota `/`, integridade visual de `/saude` e `/igrejas`, testes e build de produção.
