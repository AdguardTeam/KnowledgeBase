---
title: How to collect Windows system logs
sidebar_position: 5
---

:::info

Este artigo aborda o AdGuard para Windows, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Os dados e/ou arquivos fornecidos nos registros do sistema são processados de acordo com [a Política de Privacidade do AdGuard](https://adguard.com/en/privacy.html).

:::

Para analisar e diagnosticar diferentes problemas que possam surgir, o serviço de suporte AdGuard pode precisar de arquivos de log do sistema Windows. Windows event logs contain records about all errors that occur with the installed software, including AdGuard. Há uma breve instrução abaixo que descreve a forma de obter os arquivos de log e enviá-los ao nosso serviço de suporte, se necessário.

1. Pressiona *Win + R*

1. Na janela que aparece, digite `eventvwr` e clique em *OK*:

    ![Janela de execução *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. A janela do Event Viewer é exibida conforme mostrado na figura.

    ![Visualizador de eventos *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    Para salvar os arquivos que precisamos, faça o seguinte:

    - Abra *o aplicativo*: *Event Viewer (local)* → *Registros do Windows* → *Aplicativo*.

    - Clique com o botão direito do mouse em *Aplicativo* e no menu suspenso selecione *Salvar todos os eventos como...*

    - Selecione um nome e onde salvar, clique em *Salvar*. Selecione *Exibir informações para os seguintes idiomas*. Você precisa marcar a caixa de seleção ao lado de *Inglês*. Clique em *OK*.

    - Abra *Sistema*: *Visualizador de Eventos (Local)* → *Logs do Windows* → *Sistema*.

    - Clique com o botão direito em *Sistema* e no menu suspenso selecione *Salvar todos os eventos como...*

    - Escolha uma pasta de destino, digite o nome, clique em *Salvar*. Selecione *Exibir informações para os seguintes idiomas*. Você precisa marcar a caixa ao lado de *Inglês*. Clique em *OK*.

Por favor, envie os dois arquivos que você salvou recentemente para **support@adguard.com**.

:::note

O AdGuard tem o compromisso de proteger sua privacidade. Seguimos rigorosamente nossa [Política de Privacidade](https://adguard.com/privacy/windows.html) e não coletamos nenhuma informação privada sobre os usuários. Antes de enviar seus registros para a equipe de suporte, revise o arquivo, pois ele pode conter informações adicionais que você não deseja compartilhar. Se contiver tais informações pessoais, recomendamos que você as exclua primeiro.

:::
