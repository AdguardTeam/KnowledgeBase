---
title: Como obter logs do sistema
sidebar_position: 4
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Os dados e/ou arquivos fornecidos nos logs são processados de acordo com [a Política de Privacidade do AdGuard](https://adguard.com/en/privacy.html).

:::

Às vezes, um registro regular pode não ser suficiente para identificar a origem do problema. Nesses casos, é necessário um log do sistema. Abaixo estão as instruções sobre como coletar e obtê-los: por meio das opções do desenvolvedor e do Logcat.

:::note

O AdGuard tem o compromisso de proteger sua privacidade. Seguimos rigorosamente nossa [Política de Privacidade](https://adguard.com/privacy/android.html) e não coletamos nenhuma informação privada sobre os usuários. Antes de enviar seus registros para a equipe de suporte, revise o arquivo, pois ele pode conter informações adicionais que você não deseja compartilhar. Se contiver tais informações pessoais, recomendamos que você as exclua primeiro.

:::

## Capture um relatório de bug de um dispositivo

Para obter um relatório de bug diretamente do seu dispositivo, faça o seguinte:

1. Certifique-se de ter as [Opções do desenvolvedor](https://developer.android.com/studio/run/device.html#developer-device-options) habilitadas.

1. Em **Opções do desenvolvedor**, toque em **Obter relatório de bug**.

    ![Relatório de bug *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporten.png)

1. Selecione o tipo de relatório de bug desejado e toque em **Reportar**.

    :::note

    Depois de um momento, você verá uma notificação de que o relatório de bug está pronto (veja a Figura 2).


:::

    ![Relatório de bug *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreporteen.png)

1. Para compartilhar o relatório de bug, toque na notificação.

    ![Relatório de bug *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/Android3.1/bugreport3en.png)

1. Envie esse registro para nossa equipe de suporte.

    :::note

    Nossa equipe de suporte processará seu tíquete muito mais rapidamente se você especificar o número do tíquete do HelpDesk ou o número do problema do GitHub na sua mensagem para o suporte.


:::

## Capture um relatório de bug via Logcat

Em dispositivos com Android 7 e anteriores, não é possível enviar um relatório de bug automaticamente. Depois, você pode capturá-lo manualmente por meio do Logcat — uma ferramenta de linha de comando padrão do Android que despeja um log de mensagens do sistema.

Siga estas instruções:

### Parte #1: prepare o dispositivo

1. Mude o dispositivo para o modo de desenvolvedor. Para fazer isso: vá para **Configurações** → **Sobre** → toque em **Número da compilação** 7 vezes.

1. Vá para **Opções do desenvolvedor**.

1. Ative **a depuração por USB**.

1. Aumente o tamanho do **buffer do Logger** para 4 MB por buffer.

4 MB devem ser suficientes para armazenar os logs necessários até que você possa fazer a segunda parte (obter o log do dispositivo);

### Parte #2: reproduza o problema

É importante reproduzir o problema depois de concluir a primeira parte.

1. Reproduza o problema.

1. Lembre-se/anote a data e a hora da reprodução e inclua-a no e-mail enviado ao nosso suporte posteriormente.

### Parte #3: obter o registro

1. Conecte seu dispositivo a um PC com um cabo USB.

1. Baixe as [Ferramentas da plataforma Android SDK](https://developer.android.com/studio/releases/platform-tools#downloads). Escolha o link de download apropriado para seu sistema operacional na seção Downloads. Depois de tocar no link, um arquivo ZIP será baixado. Você pode extrair os arquivos ADB (Android Debug Bridge) do arquivo ZIP e armazená-los onde quiser.

1. Teste se o ADB está funcionando corretamente: conecte seu dispositivo Android ao computador usando um cabo USB, abra o Prompt de Comando, PowerShell ou Terminal e execute o seguinte comando:

    `dispositivos adb`

    Um exemplo de resultado bem-sucedido:

    ![Passo 3](https://cdn.adtidy.org/content/kb/ad_blocker/android/logcat/logcat_step-3.png)

1. Em seguida, execute o seguinte comando (insira o caminho relevante):

    `adb logcat -v threadtime -d > C:\Arquivos de programas\plataforma-ferramentas\logs.txt`

    Envie por e-mail o arquivo `txt` criado, bem como o horário em que o problema foi reproduzido (da parte #2) para nosso suporte ao cliente em <support@adguard.com>.

### Maneira alternativa para usuários com ROOT

1. Baixe e execute [Logcat](https://play.google.com/store/apps/details?id=com.pluscubed.matlog).

1. Escolha **Gravar** no menu. Escolha um nome para o arquivo de log ou simplesmente pressione **OK**. Agora você pode pressionar o botão **Home**, o CatLog continuará gravando o log em segundo plano.

1. Reproduza o problema.

1. Abra o CatLog e pressione **Parar gravação** no menu.

1. Envie esse registro para nossa equipe de suporte.

:::note

Nossa equipe de suporte processará seu bilhete muito mais rapidamente se você especificar o número do bilhete do HelpDesk ou o número do problema do GitHub na sua mensagem para o suporte.

:::
