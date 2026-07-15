---
title: Como exportar os logs da página em segundo plano
sidebar_position: 1
---

## Exportando registros da página em segundo plano na extensão

### Chrome

1. Abra a Extensão do AdGuard para navegador e, se possível, repita as ações que levaram ao erro. Observe a hora exata em que o erro ocorreu.

2. Navegue até `chrome://extensions`.

3. Ative o _Modo desenvolvedor_.

   ![Developer mode \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_extensions.png)

4. Find AdGuard Browser Extension and click `service worker`.

   ![Background \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_developer_mode.png)

5. Open the tab _Console_, right-click anywhere inside the console area, and select _Save as…_.

   ![Save as \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_console_save.png)

### Firefox

1. Abra a Extensão do AdGuard para navegador e, se possível, repita as ações que levaram ao erro. Observe a hora exata em que o erro ocorreu.

2. Navegue até `about:addons`.

3. Click the gear icon and select _Debug Add-ons_.

   ![Debug Add-ons \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_debug_addons.png)

4. Clique em _Inspecionar_.

   ![Inspect \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_inspect.png)

5. In the tab _Console_ tab, right-click anywhere inside the console area and select _Save all Messages to File_.

   ![Console \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_console_save.png)

## Enviando logs

:::note

O AdGuard tem o compromisso de proteger sua privacidade. Seguimos rigorosamente nossa [Política de Privacidade](https://adguard.com/privacy/browser-extension.html) e não coletamos nenhuma informação privada sobre os usuários. Antes de enviar seus registros para a equipe de suporte, revise o arquivo, pois ele pode conter informações adicionais que você não deseja compartilhar. Se contiver tais informações pessoais, recomendamos que você as exclua primeiro.

:::

Agora que você coletou os logs, siga estas etapas para enviá-los à nossa equipe de desenvolvimento:

1. Relate o bug no [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Envie o arquivo com os registros e o tempo de reprodução para `devteam@adguard.com` e anexe um link para seu issue no GitHub. Você também pode fazer upload do arquivo para o Google Drive e adicionar o link a ele em vez de anexar o arquivo.
