---
title: Instalação do certificado em uma pasta segura
sidebar_position: 12
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

If you install AdGuard [in the *Secure folder*](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) on your Android device (this mainly applies to Samsung devices), you may have difficulty installing the HTTPS certificate. The *Secure folder* has its own storage space for certificates. However, if you follow the [regular certificate installation instructions](/adguard-for-android/features/settings#https-filtering), the certificate will be installed in the main memory and will not affect your ad blocker in the *Secure folder*. To install the certificate for AdGuard for Android in the *Secure folder’s* storage, follow these instructions instead:

1. After installing the app and connecting the local VPN, tap *HTTPS filtering is off* on the main screen.
1. Tap **Continue** → **Next** → **Save certificate**.
1. Salve o certificado (nessa etapa, você pode renomeá-lo para facilitar sua localização mais tarde, o que será necessário fazer).
1. Após o pop-up *Instruções de instalação* aparecer, **NÃO** toque em **Abra Configurações**.
1. Minimize o aplicativo e vá para a *pasta segura*.
1. Tap the three-dot menu and go to **Settings** → **Other security settings**.
1. Tap **Install from device storage** → **CA certificate** → **Install anyway**.
1. Confirme a instalação com sua chave gráfica/senha/impressão digital.
1. Localize e selecione o certificado salvo anteriormente e toque em **Concluído**.
1. Return to the AdGuard app and navigate back to the main screen.
1. Pronto! O certificado foi instalado.
