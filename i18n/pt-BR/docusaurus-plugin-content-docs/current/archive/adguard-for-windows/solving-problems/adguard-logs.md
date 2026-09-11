---
title: Como coletar logs do AdGuard
sidebar_position: 3
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Data and/or files provided in logs are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

Para analisar e diagnosticar diferentes problemas que possam surgir, o serviço de suporte AdGuard pode precisar de arquivos de log. Esses arquivos contêm registros sobre erros e outros eventos que ocorrem com o software. Há uma breve instrução abaixo que descreve a forma de obter os arquivos de log e enviá-los ao serviço de suporte, se necessário.

:::note

O AdGuard tem o compromisso de proteger sua privacidade. We strictly follow our [Privacy Policy](https://adguard.com/privacy/windows.html) and do not collect any private information about users. Antes de enviar seus registros para a equipe de suporte, revise o arquivo, pois ele pode conter informações adicionais que você não deseja compartilhar. Se contiver tais informações pessoais, recomendamos que você as exclua primeiro.

:::

### Debug logs {#debug-logs}

1. Abra as configurações do AdGuard. Go to the _General Settings_ section, scroll down to the bottom of the screen, and switch the _Logging Level_ to _Debug_.

   ![Debug logging level \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

2. Reproduza o problema.

   Aconselhamos fortemente que você anote o momento exato em que você reproduziu o problema: isso ajudará nossa equipe de suporte a encontrar entradas de log relevantes e resolver o problema mais rapidamente.

3. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Salve o arquivo em qualquer pasta.

4. **Important**: after exporting the logs, set the logging level back to _Default_. _Debug_ logging level will slow down the application.

5. Send the archive to the AdGuard support service at **support@adguard.com**, describe the problem and don't forget to mention the time when you reproduced the issue.

### Trace logs {#trace-logs}

Sometimes support team members may ask you to send _trace_ logs. Nesse caso, você precisará fazer o seguinte:

1. Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing _Exit AdGuard_:

   ![Exit AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

   Por favor, não deixe o serviço em execução:

   ![Stop AdGuard Service \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Open the console (type `cmd` in the start panel).

3. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard for Windows v7.16 or later.

Se você tiver uma versão mais antiga do AdGuard para Windows, execute o aplicativo com o comando C:\"Arquivos de Programas (x86)"\Adguard\Adguard.exe /trace se estiver usando o Windows de 64 bits e C:\"Program Arquivos"\Adguard\Adguard.exe /trace se você estiver usando 32 bits.

1. Reproduza o problema.

   Aconselhamos fortemente que você anote o momento exato em que você reproduziu o problema: isso ajudará nossa equipe de suporte a encontrar entradas de log relevantes e resolver o problema mais rapidamente.

2. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   Se o arquivo de registro for grande, não se preocupe. Precisamos saber o máximo de detalhes possível para resolver seu problema.
