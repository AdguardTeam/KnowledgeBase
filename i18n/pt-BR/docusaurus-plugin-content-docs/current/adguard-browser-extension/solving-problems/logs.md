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

> O AdGuard tem o compromisso de proteger sua privacidade. We strictly follow our [Privacy Policy](https://adguard.com/en/privacy/browser-extension.html) and do not collect any private information about users. Antes de enviar seus registros para a equipe de suporte, revise o arquivo, pois ele pode conter informações adicionais que você não deseja compartilhar. Se contiver tais informações pessoais, recomendamos que você as exclua primeiro.

Agora que você coletou os logs, siga estas etapas para enviá-los à nossa equipe de desenvolvimento:

1. Relate o bug no [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Envie o arquivo com os registros e o tempo de reprodução para `devteam@adguard.com` e anexe um link para seu issue no GitHub. Você também pode fazer upload do arquivo para o Google Drive e adicionar o link a ele em vez de anexar o arquivo.
