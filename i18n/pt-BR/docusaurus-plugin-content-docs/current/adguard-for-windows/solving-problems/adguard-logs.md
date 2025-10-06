---
title: Como coletar logs do AdGuard
sidebar_position: 3
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Os dados e/ou arquivos fornecidos nos logs são processados de acordo com [a Política de Privacidade do AdGuard](https://adguard.com/en/privacy.html).

:::

Para analisar e diagnosticar diferentes problemas que possam surgir, o serviço de suporte AdGuard pode precisar de arquivos de log. Esses arquivos contêm registros sobre erros e outros eventos que ocorrem com o software. Há uma breve instrução abaixo que descreve a forma de obter os arquivos de log e enviá-los ao serviço de suporte, se necessário.

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

O AdGuard tem o compromisso de proteger sua privacidade. Seguimos rigorosamente nossa [Política de Privacidade](https://adguard.com/privacy/windows.html) e não coletamos nenhuma informação privada sobre os usuários. Antes de enviar seus registros para a equipe de suporte, revise o arquivo, pois ele pode conter informações adicionais que você não deseja compartilhar. Se contiver tais informações pessoais, recomendamos que você as exclua primeiro.

:::

### Registros de depuração {#debug-logs}

1. Abra as configurações do AdGuard. Vá para a seção *Configurações gerais*, role para baixo até o final da tela e alterne o *Nível de registro* para *Depuração*.

    ![Nível de registro de depuração *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. Reproduza o problema.

    Aconselhamos fortemente que você anote o momento exato em que você reproduziu o problema: isso ajudará nossa equipe de suporte a encontrar entradas de log relevantes e resolver o problema mais rapidamente.

1. Exporte os registros coletados usando o botão *Exportar Logs*.

    ![Exportar logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Salve o arquivo em qualquer pasta.

1. **Importante**: após exportar os registros, defina o nível de registro de volta para *Padrão*. O nível de registro *Depuração* deixará o aplicativo lento.

1. Envie o arquivo para o serviço de suporte do AdGuard em **support@adguard.com**, descreva o problema e não se esqueça de mencionar o horário em que você reproduziu o problema.

### Registros de rastreamento {#trace-logs}

Às vezes, os membros da equipe de suporte podem pedir que você envie *os logs de rastreamento*. Nesse caso, você precisará fazer o seguinte:

1. Pare o AdGuard clicando com o botão direito do mouse no ícone do AdGuard no menu da bandeja e escolhendo *Sair do AdGuard*:

    ![Sair do AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    Por favor, não deixe o serviço em execução:

    ![Interrompa o serviço AdGuard *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. Abra o console (digite cmd no painel de início).

1. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard for Windows v7.16 or later.

Se você tiver uma versão mais antiga do AdGuard para Windows, execute o aplicativo com o comando C:\"Arquivos de Programas (x86)"\Adguard\Adguard.exe /trace se estiver usando o Windows de 64 bits e C:\"Program Arquivos"\Adguard\Adguard.exe /trace se você estiver usando 32 bits.

1. Reproduza o problema.

    Aconselhamos fortemente que você anote o momento exato em que você reproduziu o problema: isso ajudará nossa equipe de suporte a encontrar entradas de log relevantes e resolver o problema mais rapidamente.

1. Exporte os logs coletados usando o botão *Exportar Logs*.

    ![Exportar logs *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Se o arquivo de registro for grande, não se preocupe. Precisamos saber o máximo de detalhes possível para resolver seu problema.
