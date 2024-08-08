---
title: Como exportar os logs da página em segundo plano
sidebar_position: 1
---

## Exportando registros da página em segundo plano na extensão

### Chrome

1. Abra a Extensão do AdGuard para navegador e, se possível, repita as ações que levaram ao erro. Observe a hora exata em que o erro ocorreu.

2. Navegue até `chrome://extensions`.

3. Ative o _Modo desenvolvedor_.

   ![Modo de desenvolvedor \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png)

4. Clique em `background.html`.

   ![Segundo plano \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png)

5. Abra a aba _Console_.

   ![A guia Console \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6. Abra o menu de contexto e selecione _Salvar como…_.

   ![Salvar como \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

### Firefox

1. Abra a Extensão do AdGuard para navegador e, se possível, repita as ações que levaram ao erro. Observe a hora exata em que o erro ocorreu.

2. Navegue até `about:addons`.

3. Clique em _Depurar complementos_.

   ![Depurar complementos \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4. Clique em _Inspecionar_.

   ![Inspecionar \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5. Vá para a aba _Console_.

   ![Console \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6. Clique em _Salvar todas as mensagens no arquivo_.

   ![Salvar \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

## Enviando logs

:::note

AdGuard is committed to protecting your privacy. We strictly follow our [Privacy Policy](https://adguard.com/privacy/browser-extension.html) and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don’t want to share. If it contains such personal information, we recommend that you delete it first.

:::

Now that you have collected the logs, please follow these steps to submit them to our development team:

1. Report the bug on [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Send your archive with logs and playback time to `devteam@adguard.com` and add a link to your GitHub issue. You can also upload the archive to Google Drive and add the link to it instead of attaching the file.
