---
title: Instalação
sidebar_position: 2
---

:::info

Este artigo é sobre o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

## Requisitos do sistema

**Versão do OS:** Android **7,0** ou superior

**RAM:** pelo menos 2 GB

**Espaço livre em disco:** 500 MB

## Instalação

A maioria dos aplicativos baseados em Android é distribuída via Google Play; no entanto, o AdGuard não está presente lá, porque o Google proíbe a distribuição de bloqueadores de anúncio em nível de rede via Google Play, ou seja, aplicativos que bloqueiam publicidade em outros aplicativos. Você encontrará mais informações sobre a política restritiva do Google [em nosso blog](https://adguard.com/blog/adguard-google-play-removal.html).

É por isso que você só pode instalar o AdGuard para Android manualmente. Para usar o aplicativo em seu dispositivo móvel, você precisará fazer o seguinte:

1. **Baixe o aplicativo em seu dispositivo**. Aqui estão algumas maneiras de fazer isso:

    - vá para [nosso site](https://adguard.com/adguard-android/overview.html) e toque no botão *Baixar*
    - inicie o navegador e digite o seguinte URL: [https://adguard.com/apk](https://adguard.com/apk)
    - ou escaneie este QR code:

    ![QR code *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst-qr-en-1.png)

1. **Permitir a instalação de aplicativos de fontes desconhecidas**. Uma vez que o download do arquivo estiver completo, toque em *Abrir* na notificação.

    ![Instalando aplicativos de fontes desconhecidas *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    Um pop-up aparecerá. Toque em *Configurações*, navegue até *Instalar aplicativos desconhecidos*, e permita a permissão para o navegador que você usou para baixar o arquivo.

    ![Instalando aplicativos de fontes desconhecidas *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

1. **Instale o aplicativo**. Uma vez que o navegador obteve as permissões necessárias, o sistema perguntará se você deseja instalar o aplicativo. Toque em *Instalar*.

    ![Instalando aplicativos de fontes desconhecidas *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

    Em seguida, você será convidado a ler o *Contrato de licença* e a *Política de privacidade* do AdGuard. Você também pode participar do desenvolvimento de produtos. To do this, check the boxes for *Send crash reports automatically* and *Send technical and interaction data*. Then tap *Continue*.

    ![Privacy policy *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **Create a local VPN**. In order to filter all traffic directly on your device and not route it through a remote server, AdGuard needs to establish a VPN connection.

    ![Create a local VPN *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. **Enable HTTPS filtering**. It is not a mandatory option, however, we advice to turn it on for the best ad-blocking quality.

    If your device is running Android 7–9, you'll be prompted to install a root certificate and configure HTTPS filtering after the local VPN setup.

    ![Enable HTTPS filtering on Android 7-9 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    After you tap *Install now*, a prompt will appear asking you to authenticate the certificate installation with a password or fingerprint.

    ![Enable HTTPS filtering on Android 7-9. Step 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    If you have Android 10+ on your device, then after creating a local VPN, you will see the main app screen with a snack bar at the bottom with a suggestion to enable HTTPS filtering: tap *Enable* and follow the instructions on the next screen or check [the article about certificate installation](solving-problems/manual-certificate.md) for more information.

    ![Enable HTTPS filtering *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## Uninstalling/Reinstalling AdGuard

If you need to uninstall AdGuard on your mobile device, open *Settings* and choose *Apps* (Android 7) or *Apps & notifications* (Android 8+). Find AdGuard in the list of installed apps and press *Uninstall*.

![Reinstall AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

To reinstall AdGuard, just download the apk file again and follow the steps outlined in the Installation section. Uninstallation is not required beforehand.
