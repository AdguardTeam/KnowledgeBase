---
title: How to collect AdGuard logs
sidebar_position: 3
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Os dados e/ou arquivos fornecidos nos logs são processados de acordo com [a Política de Privacidade do AdGuard](https://adguard.com/en/privacy.html).

:::

Para analisar e diagnosticar diferentes problemas que possam surgir, o serviço de suporte AdGuard pode precisar de arquivos de log. These files contain records about errors and other events that occur with the software. Há uma breve instrução abaixo que descreve a forma de obter os arquivos de log e enviá-los ao serviço de suporte, se necessário.

:::note

O AdGuard tem o compromisso de proteger sua privacidade. Seguimos rigorosamente nossa [Política de Privacidade](https://adguard.com/privacy/windows.html) e não coletamos nenhuma informação privada sobre os usuários. Antes de enviar seus registros para a equipe de suporte, revise o arquivo, pois ele pode conter informações adicionais que você não deseja compartilhar. Se contiver tais informações pessoais, recomendamos que você as exclua primeiro.

:::

### Registros de depuração {#debug-logs}

1. Abra as configurações do AdGuard. Go to the *General Settings* section, scroll down to the bottom of the screen, and switch the *Logging Level* to *Debug*.

    ![Nível de registro de depuração *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. Reproduza o problema.

    Aconselhamos fortemente que você anote o momento exato em que você reproduziu o problema: isso ajudará nossa equipe de suporte a encontrar entradas de log relevantes e resolver o problema mais rapidamente.

1. Export the collected logs using the *Export Logs* button.

    ![Exportar logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Salve o arquivo em qualquer pasta.

1. **Important**: after exporting the logs, set the logging level back to *Default*. O nível de registro *Depuração* deixará o aplicativo lento.

1. Envie o arquivo para o serviço de suporte do AdGuard em **support@adguard.com**, descreva o problema e não se esqueça de mencionar o horário em que você reproduziu o problema.

### Registros de rastreamento {#trace-logs}

Às vezes, os membros da equipe de suporte podem pedir que você envie *os logs de rastreamento*. Nesse caso, você precisará fazer o seguinte:

1. Pare o AdGuard clicando com o botão direito do mouse no ícone do AdGuard no menu da bandeja e escolhendo *Sair do AdGuard*:

    ![Sair do AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    Por favor, não deixe o serviço em execução:

    ![Interrompa o serviço AdGuard *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. Abra o console (digite cmd no painel de início).

1. Execute o aplicativo com o comando `C:\"Program Files"\Adguard\Adguard.exe /trace` independentemente da quantidade de bits do Windows, se você instalou o AdGuard v7.16 para Windows ou posterior.

Se você tiver uma versão mais antiga do AdGuard para Windows, execute o aplicativo com o comando C:\"Arquivos de Programas (x86)"\Adguard\Adguard.exe /trace se estiver usando o Windows de 64 bits e C:\"Program Arquivos"\Adguard\Adguard.exe /trace se você estiver usando 32 bits.

1. Reproduza o problema.

    Aconselhamos fortemente que você anote o momento exato em que você reproduziu o problema: isso ajudará nossa equipe de suporte a encontrar entradas de log relevantes e resolver o problema mais rapidamente.

1. Export the collected logs using the *Export Logs* button.

    ![Exportar logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Se o arquivo de registro for grande, não se preocupe. Precisamos saber o máximo de detalhes possível para resolver seu problema.
