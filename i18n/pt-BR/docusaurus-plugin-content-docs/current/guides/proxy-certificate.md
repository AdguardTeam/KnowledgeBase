---
title: Como instalar um certificado de proxy
sidebar_position: 2
---

Our desktop apps, AdGuard for Windows and AdGuard for Mac, can be used as a proxy for other devices. This means that you can route other devices’ traffic through AdGuard (all traffic or traffic of specific apps and browsers).

:::note

These devices must be in the same network as the PC or Mac with AdGuard.

:::

HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install the AdGuard certificate on the connected device.

## Como baixar e instalar o certificado

Depending on the operating system of the device whose traffic you want to filter, follow one of these instructions:

### Windows {#windows}

1. Note the IP address of your desktop computer with AdGuard installed.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. On the same computer with AdGuard, follow this link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clique no botão **Baixar**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Windows device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On that device, press **Win**, type `Manage computer certificates` and press **Enter**.

1. On the *Certificates — Local Computer* page, find the *Trusted Root Certification Authorities* → *Certificates* folder.

1. Clique com o botão direito do mouse na pasta *Certificados* e clique em **Todas as tarefas** → **Importar**.

1. Na página *Assistente de importação de certificados*, clique em **Avançar**.

1. Clique em **Procurar** para importar o certificado.

1. Navigate to the **cert.cer** certificate file, select it, click **Open**, then **Next**.

1. Selecione o botão **Colocar todos os certificados no seguinte repositório** caixa de seleção.

1. Make sure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

1. Clique em **Concluir**.

1. Press **Win**, then open **Settings**.

1. Selecione **Rede & Internet** → **Proxy**.

1. Desativar *Detectar configurações automaticamente*.

1. Clique em **Configurar** na guia *Usar um servidor proxy*.

1. Ative esta opção. For **Proxy IP address**, type the IP address of your desktop computer that you noted in step 1. Para **Port**, insira a porta escolhida nas configurações de rede do aplicativo AdGuard para desktop.

1. Clique em **Salvar**.

### Mac {#mac}

1. Anote o endereço IP do seu computador desktop com o AdGuard instalado.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clique no botão **Baixar**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Mac device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Clique duas vezes no arquivo de certificado baixado.

1. Digite a senha de administrador e clique em **Modificar Keychain**.

1. Go to **Spotlight** (the search icon in the top right corner), type in `Keychain Access`, and then select **Keychain Access** from the search results.

1. Em *Sistema*, destaque o certificado que adicionou.

1. Right-click it and select **Get Info** from the context menu.

1. Expanda *Confiança* para exibir as políticas de confiança para o certificado.

1. Em *Secure Sockets Layers (SSL)*, selecione **Confiar sempre**.

1. Open **System Preferences** → **Network** and select the active connection at the top.

1. Clique em **Detalhes...** e navegue até a guia **Proxies**.

1. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, type the IP address of your computer that you noted in step 1. No campo **Porta**, insira a porta escolhida nas configurações de rede do aplicativo de desktop AdGuard.

### Android {#android}

1. Anote o endereço IP do seu computador desktop com o AdGuard instalado.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. No computador com AdGuard, siga este link usando um navegador: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clique no botão **Baixar**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Android device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Locate and tap the previously downloaded **cert.cer** certificate to open the file and follow the instructions to install the certificate.

1. Android devices do not trust certificates by default, so there will be a warning — you can ignore it. On some phones you may be asked to enter your device password. Do so, then press **OK**. The certificate will be installed.

1. Abra as configurações avançadas da rede Wi-Fi ativa.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your desktop computer you noted in step 1. Para **Proxy port**, insira a porta escolhida nas configurações de rede do aplicativo de desktop AdGuard.

### iOS {#ios}

1. Anote o endereço IP do seu computador desktop com o AdGuard instalado.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. No computador com AdGuard, siga este link usando um navegador: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Clique no botão **Baixar**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the iOS device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On your iOS device, open **Settings** → **Profile Downloaded** and tap **Install** in the top right corner. Digite sua senha e confirme a instalação. Toque em **Concluído**.

1. Vá para **Configurações** → **Geral** → **Sobre** → **Configurações do certificado de confiança**. Habilite a chave ao lado de *Adguard Personal CA*. O certificado agora está instalado.

1. Nesse dispositivo, abra as configurações avançadas da rede Wi-Fi ativa.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, type the IP address of your computer you noted in step 1. Para **Proxy port**, insira a porta escolhida nas configurações de rede do aplicativo de desktop AdGuard.
