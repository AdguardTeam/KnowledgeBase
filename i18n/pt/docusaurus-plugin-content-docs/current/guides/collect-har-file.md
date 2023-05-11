---
title: Como coletar um arquivo HAR
sidebar_position: 1
---

Os arquivos HAR ajudam nossas equipes de suporte técnico a solucionar problemas complexos. Para criar esses arquivos, recomendamos o uso do Chrome ou Firefox. No entanto, IE 11, Edge e Safari também fornecem capacidade de geração e exportação de arquivo `.har`.

## Chrome {#chrome}

Para criar um arquivo HAR no Chrome:

1. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

2. Abrir ***Ferramentas do desenvolvedor***:

- No menu: ***Menu → Mais ferramentas → Ferramentas do desenvolvedor***.
- Teclado: ***Ctrl+Shift+C***, ou ***Ctrl+Alt+I***, ou ***⌥+⌘+I para Mac***.

3. Clique na ***guia Rede***.

4. Localize o botão redondo no canto superior esquerdo da guia Rede e confirme se está no modo de gravação vermelho. Se estiver cinza, clique para ficar vermelho para iniciar a gravação.

5. Use o botão ***clear*** (o botão de círculo com uma linha ao lado do botão de gravação) para limpar todas as atividades anteriores.

6. Marque a caixa de seleção ***Preservar log*** na guia Rede.

7. Marque a caixa de seleção ***Desativar cache***.

![chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

8. Reproduza as etapas que criam o problema.

9. Save session as a .har file by right-clicking the grid and selecting ***Save as HAR with content***.

10. Encaminhe para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Edge {#edge}

1. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

2. Abrir ***Ferramentas do desenvolvedor***:

- No menu: ***Menu → Mais ferramentas → Ferramentas do desenvolvedor***.
- Teclado: ***Ctrl+Shift+C***, ou ***Ctrl+Alt+I***, ou ***⌥+⌘+I para Mac***.

3. Clique na ***guia Rede***.

4. Localize o botão redondo no canto superior esquerdo da guia Rede e confirme se está no modo de gravação vermelho. Se estiver cinza, clique para ficar vermelho para iniciar a gravação.

5. Use o botão ***clear*** (o botão de círculo com uma linha ao lado do botão de gravação) para limpar todas as atividades anteriores.

6. Marque a caixa de seleção ***Preservar log*** na guia Rede.

7. Marque a caixa de seleção ***Desativar cache***.

![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

8. Reproduza as etapas que criam o problema.

9. Save session as a .har file by right-clicking the grid and selecting ***Save as HAR with content***.

10. Encaminhe para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Firefox {#firefox}

Para criar um arquivo HAR no Firefox:

1. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

2. Abra as Ferramentas do Desenvolvedor no modo ***Rede***:
- No menu: ***Menu→Desenvolvedor Web→Rede***.
- Teclado: ***Ctrl+Shift+C***, ou **⌥+⌘+E (Mac)**.

3. Observe o botão ***reproduzir/pausar*** no canto superior esquerdo da guia Rede.
- O botão deve estar no modo de reprodução.

4. Se alguma informação estiver sendo exibida na grade, limpe clicando no botão ***excluir lixeira*** ao lado do botão reproduzir/pausar.

5. Marque a caixa de seleção ***Persist Logs*** na guia Rede.

6. Marque a caixa de seleção ***Desativar cache***.

![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

7. Reproduza as etapas que criam o problema.

8. Save session as a .har file by right-clicking the grid and selecting ***Save all as HAR***.

9. Encaminhe para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Internet Explorer 11 {#ie11}

Para criar um arquivo HAR no Internet Explorer 11:

1. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

2. Abra as Ferramentas do Desenvolvedor no modo ***Rede***:
- No menu Ferramentas: ***Ferramentas do desenvolvedor*** → ***Guia Rede***.
- Teclado: ***F12→Rede***.

3. Observe o botão Iniciar sessão de criação de perfil ***Reproduzir*** e parar a criação de perfil ***Parar*** no canto superior esquerdo da guia Rede.
- O botão Reproduzir ficará cinza durante a gravação e o botão Parar ficará vermelho. Coloque no modo ***Play***.

4. Limpe todas as informações de sessão que aparecem na grade inferior usando o botão ***Limpar sessão*** na guia Rede. Passe o mouse sobre os ícones para ver os nomes.
- O botão ***Limpar sessão*** é um ícone de três linhas com um x.

5. Marque a caixa de seleção ***Desativar cache***.

6. Reproduza as etapas que criam o problema.

7. Salve a sessão como um arquivo .har clicando no botão ***Salvar disco*** (Exportar como HAR) na guia Rede.

8. Encaminhe para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Safari {#safari}

Para criar um arquivo HAR no Safari:

1. Verifique a barra de menu do Safari na parte superior da tela para um menu ***Develop***. Marque a caixa de verificação no fundo ao lado de ***Mostrar menu Develop na barra de menu***.
- Se não estiver visível, ative-o em ***Safari→Preferências→Avançado***.

2. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

3. Abra a guia ***Rede*** no Web Inspector:
- No menu: ***Desenvolver→Mostrar Inspetor da Web→Rede***.
- Teclado: ***⌥+⌘+I→Rede***

4. Marque a caixa de seleção ***Preservar log*** no lado direito das guias Rede.

5. Limpe os itens atuais da Rede clicando no ícone ***excluir Lixeira*** na extremidade direita das guias Rede.

6. Marque a caixa de seleção ***Desativar cache***.

7. Reproduza as etapas que criam o problema.

8. Salve a sessão como um arquivo .har clicando no ícone ***Exportar*** ao lado de ***Preservar Log***.

9. Encaminhe para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Android {#android}

Para obter arquivos HAR, siga estas etapas:

1. Abra o AdGuard e vá para ***Configurações***.

2. Escolha ***Avançado*** no menu.

3. Escolha ***Configurações de baixo nível***

4. Ative `pref.har.capture` (você terá que reiniciar a proteção).

5. Agora reproduza o problema: abra o aplicativo, execute as ações necessárias para fazer o anúncio aparecer.

6. Agora desligue `pref.har.capture` novamente.

7. Volte e toque em ***Exportar registros e informações do sistema*** → ***Salvar***.

## Windows {#windows}

1. Abra ***Configurações*** → ***Configurações gerais*** → ***Configurações avançadas** e role para baixo.

2. Marque a caixa ***Ativar gravação HAR***.

3. Reproduza o problema.

4. Vá para ***Configurações gerais*** → Clique em ***Exportar logs*** → ***Salvar***.

5. Desative a gravação HAR desmarcando a caixa correspondente.
