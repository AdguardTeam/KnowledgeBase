---
title: How to generate a HAR file
sidebar_position: 1
---

Os arquivos HAR ajudam nossas equipes de suporte técnico a solucionar problemas complexos. Para criar esses arquivos, recomendamos o uso do Chrome ou Firefox. No entanto, IE 11, Edge e Safari também fornecem capacidade de geração e exportação de arquivo `.har`.

## Chrome {#chrome}

Para criar um arquivo HAR no Chrome, siga estas etapas:

1. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

1. Abra **Ferramentas para desenvolvedores**:

    - No menu: **Menu → Mais ferramentas → Ferramentas para desenvolvedores**.
    - Teclado: **Ctrl+Shift+C**ou **Ctrl+Alt+I**ou **⌥+⌘+I para Mac**.

1. Clique na aba **Rede**.

1. Localize o botão redondo no canto superior esquerdo da guia Rede e confirme se está no modo de gravação vermelho. Se estiver cinza, clique para ficar vermelho para iniciar a gravação.

1. Use o botão **Limpar** (o botão circular com uma linha ao lado do botão de gravação) para limpar todas as atividades anteriores.

1. Marque a caixa de seleção **Preservar registro** na guia Rede.

1. Marque a caixa de seleção **Desativar cache**.

    ![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

1. Reproduza as etapas que criam o problema.

1. Salve a sessão como um arquivo .har clicando com o botão direito na grade e selecionando **Salvar como HAR com conteúdo**.

1. Envie para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Edge {#edge}

1. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

1. Abra **Ferramentas para desenvolvedores**:

    - No menu: **Menu → Mais ferramentas → Ferramentas para desenvolvedores**.
    - Teclado: **Ctrl+Shift+C**ou **Ctrl+Alt+I**ou **⌥+⌘+I para Mac**.

1. Clique na aba **Rede**.

1. Localize o botão redondo no canto superior esquerdo da guia Rede e confirme se está no modo de gravação vermelho. Se estiver cinza, clique para ficar vermelho para iniciar a gravação.

1. Use o botão **Limpar** (o botão circular com uma linha ao lado do botão de gravação) para limpar todas as atividades anteriores.

1. Marque a caixa de seleção **Preservar registro** na guia Rede.

1. Marque a caixa de seleção **Desativar cache**.

    ![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

1. Reproduza as etapas que criam o problema.

1. Salve a sessão como um arquivo .har clicando com o botão direito na grade e selecionando **Salvar como HAR com conteúdo**.

1. Envie para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Firefox {#firefox}

Para criar um arquivo HAR no Firefox, siga estas etapas:

1. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

1. Abra as Ferramentas do Desenvolvedor no modo **Rede**:

    - No menu: **Menu → Desenvolvedor Web → Rede**.
    - Teclado: **Ctrl+Shift+C**ou **⌥+⌘+E (Mac)**.

1. Observe o botão **Reproduzir/Pausar** no canto superior esquerdo da guia Rede.

    - O botão deve estar no modo de reprodução.

1. Se alguma informação for exibida atualmente na grade, limpe clicando no botão **Esvaziar lixeira** próximo ao botão reproduzir/pausar.

1. Marque a caixa de seleção **Manter registros** na aba Rede.

1. Marque a caixa de seleção **Desativar cache**.

    ![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

1. Reproduza as etapas que criam o problema.

1. Salve a sessão como um arquivo .har clicando com o botão direito na grade e selecionando **Salvar tudo como HAR**.

1. Envie para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Internet Explorer 11 {#ie11}

Para criar um arquivo HAR no Internet Explorer 11, siga estas etapas:

1. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

1. Abra as Ferramentas do Desenvolvedor no modo **Rede**:

    - No menu Ferramentas: **Ferramentas do desenvolvedor** → **aba Rede**.
    - Teclado: **F12 → Rede**.

1. No canto superior esquerdo da aba Rede, observe os botões **Iniciar**, para iniciar a criação de perfil, e **Parar**, para para a criação de perfil.

    - O botão Reproduzir ficará cinza durante a gravação e o botão Parar ficará vermelho. Coloque no modo **Play**.

1. Limpe todas as informações da sessão que aparecem na grade inferior usando o botão **Limpar sessão** na guia Rede. Passe o mouse sobre os ícones para ver os nomes.

    - **O botão Limpar sessão** é um ícone de três linhas com um x.

1. Marque a caixa de seleção **Desativar cache**.

1. Reproduza as etapas que criam o problema.

1. Salve a sessão como um arquivo .har clicando no botão **Salvar disco** (Exportar como HAR) na aba Rede.

1. Envie para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Safari {#safari}

Para criar um arquivo HAR no Safari, siga estas etapas:

1. Verifique a barra de menu do Safari na parte superior da tela para ver o menu **Desenvolver**.

    - Se não estiver visível, ative-o acessando **Safari → Configurações → Avançado**.
    - Marque a caixa de seleção na parte inferior ao lado de **Mostrar menu Desenvolver na barra de menu**.

1. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

1. Abra a guia **Rede** no Web Inspector:

    - No menu: **Desenvolver → Mostrar Web Inspector → Rede**.
    - Teclado: **⌥+⌘+I → Rede**

1. Marque a caixa de seleção **Preservar registro** no lado esquerdo das abas Rede, no menu **Outras opções de filtro...**.

    ![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

1. Limpe os itens atuais da rede clicando no ícone **Esvaziar lixeira** no canto direito das abas Rede.

    - Teclado: **⌘+K**

1. Marque a caixa de seleção **Desativar caches**.

1. Reproduza as etapas que criam o problema.

1. Salve a sessão como um arquivo .har clicando no ícone **Exportar** próximo ao ícone **Excluir Lixeira**.

1. Envie para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Android {#android}

Para criar arquivos HAR, siga as etapas seguintes:

1. Abra o AdGuard e vá para **Configurações**.

1. Escolha **Avançado** no menu.

1. Selecione **Configurações de baixo nível**

1. Ative `pref.har.capture` (você terá que reiniciar a proteção).

1. Agora reproduza o problema: abra o aplicativo e execute as ações necessárias para fazer o anúncio aparecer.

1. Agora desligue `pref.har.capture` novamente.

1. Volte e toque em **Exportar registros e informações do sistema** → **Salvar**.

## Windows {#windows}

1. Abra **Configurações*** → **Configurações gerais** → **Configurações avançadas** e role para baixo.

1. Marque a caixa **Habilitar gravação HAR**.

1. Reproduza o problema.

1. Vá para **Configurações gerais** → Clique em **Exportar registros** → **Salvar**.

1. Desative a gravação HAR desmarcando a caixa correspondente.
