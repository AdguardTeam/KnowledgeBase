---
title: Como coletar um arquivo HAR
sidebar_position: 1
---

Os arquivos HAR ajudam nossas equipes de suporte técnico a solucionar problemas complexos. Para criar esses arquivos, recomendamos o uso do Chrome ou Firefox. No entanto, IE 11, Edge e Safari também fornecem capacidade de geração e exportação de arquivo `.har`.

## Chrome {#chrome}

Para criar um arquivo HAR no Chrome:

1. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

2. Open **Developer Tools**:

- From menu: **Menu → More Tools → Developer Tools**.
- Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

3. Click on the **Network tab**.

4. Localize o botão redondo no canto superior esquerdo da guia Rede e confirme se está no modo de gravação vermelho. Se estiver cinza, clique para ficar vermelho para iniciar a gravação.

5. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

6. Select the **Preserve log** check box on the Network tab.

7. Check the **Disable cache** check box.

![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

8. Reproduza as etapas que criam o problema.

9. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

10. Encaminhe para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Edge {#edge}

1. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

2. Open **Developer Tools**:

- From menu: **Menu → More Tools → Developer Tools**.
- Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

3. Click on the **Network tab**.

4. Localize o botão redondo no canto superior esquerdo da guia Rede e confirme se está no modo de gravação vermelho. Se estiver cinza, clique para ficar vermelho para iniciar a gravação.

5. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

6. Select the **Preserve log** check box on the Network tab.

7. Check the **Disable cache** check box.

![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

8. Reproduza as etapas que criam o problema.

9. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

10. Encaminhe para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Firefox {#firefox}

Para criar um arquivo HAR no Firefox:

1. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

2. Open Developer Tools in **Network** mode:
- From menu: **Menu → Web Developer → Network**.
- Keyboard: **Ctrl+Shift+C**, or **⌥+⌘+E (Mac)**.

3. Note the **Play/Pause** button at the top left of the Network tab.
- O botão deve estar no modo de reprodução.

4. If any information is currently displayed in the grid, clear by clicking the **Delete trash can** button next to the play/pause button.

5. Select the **Persist Logs** check box on the Network tab.

6. Check the **Disable cache** check box.

![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

7. Reproduza as etapas que criam o problema.

8. Save session as a .har file by right-clicking the grid and selecting **Save all as HAR**.

9. Encaminhe para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Internet Explorer 11 {#ie11}

Para criar um arquivo HAR no Internet Explorer 11:

1. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

2. Open Developer Tools in **Network** mode:
- From Tools cog wheel menu: **Developer Tools** → **Network tab**.
- Keyboard: **F12 → Network** tab.

3. Note the start profiling session **Play** button and stop profiling **Stop** button at top left of Network tab.
- O botão Reproduzir ficará cinza durante a gravação e o botão Parar ficará vermelho. Put in **Play** mode.

4. Clear any session info appearing in the lower grid using the **Clear session** button on Network tab. Passe o mouse sobre os ícones para ver os nomes.
- **Clear session** button is a three line icon with an x on it.

5. Check the **Disable cache** check box.

6. Reproduza as etapas que criam o problema.

7. Save session as a .har file by clicking on the **Save disk** button (Export as HAR) on Network tab.

8. Encaminhe para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Safari {#safari}

Para criar um arquivo HAR no Safari:

1. Check the Safari menu bar at the top of the screen for a **Develop** menu.
- If not visible, turn it on by going to **Safari → Settings → Advanced**.
- Check the checkbox at the bottom next to **Show Develop menu in menu bar**.

2. Acesse a URL onde ocorre o problema. Não reproduza o problema ainda.

3. Open **Network** tab in Web Inspector:
- From menu: **Develop → Show Web Inspector → Network**.
- Keyboard: **⌥+⌘+I→Network**

4. Check **Preserve Log** checkbox on left side of the Network tabs, within the **Other filter options...** menu.

![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

5. Clear current Network items by clicking the **Delete Trash** icon at the far right of Network tabs.
- Keyboard: **⌘+K**

6. Check the **Disable caches** check box.

7. Reproduza as etapas que criam o problema.

8. Save session as a .har file by clicking the **Export** icon next to the **Delete Trash** icon.

9. Encaminhe para o suporte do AdGuard (support@adguard.com) com uma explicação detalhada do problema. Capturas de tela de suporte também podem ser úteis.

## Android {#android}

To create HAR files, follow these steps:

1. Open AdGuard and go to **Settings**.

2. Choose **Advanced** in the menu.

3. Choose **Low Level Settings**

4. Ative `pref.har.capture` (você terá que reiniciar a proteção).

5. Agora reproduza o problema: abra o aplicativo, execute as ações necessárias para fazer o anúncio aparecer.

6. Agora desligue `pref.har.capture` novamente.

7. Go back and tap **Export logs and system info** → **Save**.

## Windows {#windows}

1. Open **Settings*** → **General settings** → **Advanced settings** and scroll down.

2. Check the **Enable HAR writing** box.

3. Reproduza o problema.

4. Go to **General settings** → Click **Export logs** → **Save**.

5. Desative a gravação HAR desmarcando a caixa correspondente.
