---
title: Instalação manual do certificado de segurança no navegador Firefox
sidebar_position: 10
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

Para que o AdGuard filtre com êxito o tráfego HTTPS no Firefox, o navegador precisa confiar no certificado do AdGuard. Isso pode ser obtido de forma diferente para diferentes versões do Firefox.

### Método 1

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Este método funciona no Firefox para Android versão 90.0 e posteriores.

:::

Para fazer com que o Firefox confie no certificado do AdGuard, faça o seguinte:

1. Execute o navegador.

1. Vá até **Configurações** → **Sobre o Firefox**.

    ![Sobre o Firefox *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_about_en.jpeg)

1. Toque no logotipo do Firefox cinco vezes.

1. Navegue até **Configurações** → **Configurações secretas**.

    ![Configurações secretas *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/firefox-certificates/ff_nightly_secret.jpeg)

1. Ative **Usar certificados CA de terceiros**.

### Método 2

Proíbe o Google Chrome de enviar sua versão e informações de modificação com solicitações para domínios do Google (incluindo Double Click e Google Analytics).

Este método só funcionará em dispositivos com ** root **.

:::

1. [Instale e configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) o ADB; Na plataforma Windows, os usuários da **Samsung** talvez precisem instalar [esse utilitário](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Ative o **modo de desenvolvedor** e ative a **depuração USB**:

    - Abra as **Configurações** em seu telefone;
    - Vá para a seção **Sistema** (último item no menu de configurações). Nesta seção, encontre o subitem **Sobre o telefone**;
    - Toque na linha **Número de build** 7 vezes. Depois disso, você receberá uma notificação de que **Você agora é um desenvolvedor** (Se necessário, insira um código de desbloqueio para o dispositivo);
    - Abra **Configurações do sistema** → **Opções do desenvolvedor** → Role para baixo e ative **Depuração USB** → Confirme se a depuração está ativada na janela **Permitir depuração USB** depois de ler o aviso com atenção.

1. Instale o navegador [Firefox](https://www.mozilla.org/en-US/firefox/releases/) (versão de lançamento);

1. Abra as configurações do AdGuard **** (ícone de engrenagem no canto inferior direito) → **Filtragem** → **Rede** → **Filtragem HTTPS** → **Certificado de segurança** → **Instruções para o Firefox** → **Instalar para versões antigas**;

1. Abra a pasta `data/data/org.mozilla.firefox/files/mozilla` usando `adb shell su` e `cd data/data/...`, então navegue até a pasta chamada `xxxxxxx.default` e memorize seu nome;

1. Na pasta especificada, estamos interessados em dois arquivos:

    - `cert9.db`
    - `key4.db`

1. Precisamos mover esses arquivos para uma pasta do navegador onde ocorreu o problema do certificado de segurança:

    - `data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyy.default`.

1. O comando completo ficará assim:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxxx.default/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    Caso você tenha recebido a notificação do sistema **permissão negada**, você deve primeiro mover os arquivos especificados para o diretório que não exige permissão. Depois disso, você deve movê-los para a pasta necessária no seu navegador Firefox.

    O comando completo deve ser assim:

    - `adb shell su`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxx.default/cert9.db sdcard/Download`
    - `cp -R data/data/org.mozilla.firefox/files/mozilla/xxxxxxxxx.default/key4.db sdcard/Download`
    - `cp -R sdcard/Download/cert9.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`
    - `cp -R sdcard/Download/key4.db data/data/org.mozilla.<browser_name>/files/mozilla/yyyyyyyyyy.default`

    Se `adb shell su` não funcionar, você deve tentar inicialmente `adb shell` e depois `su`.
