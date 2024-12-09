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

    Em seguida, você será convidado a ler o *Contrato de licença* e a *Política de privacidade* do AdGuard. Você também pode participar do desenvolvimento de produtos. Para fazer isso, selecione as caixas de verificação para *Enviar relatórios de falha automaticamente* e *Enviar dados técnicos e de interação*. Em seguida, toque em *Continuar*.

    ![Política de privacidade *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **Criar VPN local**. Para filtrar todo o tráfego diretamente no seu dispositivo e não encaminhá-lo através de um servidor remoto, o AdGuard precisa estabelecer uma conexão VPN.

    ![Criar uma VPN local *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. **Ativar a filtragem HTTPS**. Não é uma opção obrigatória, no entanto, aconselhamos ativá-la para a melhor qualidade de bloqueio de anúncios.

    Se o seu dispositivo estiver rodando o Android 7–9, você será convidado a instalar um certificado e configurar a filtragem HTTPS após as configurações do VPN local.

    ![Ativar filtragem HTTPS no Android 7-9 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    Após tocar em *Instalar agora*, uma solicitação aparecerá pedindo que você autentique a instalação do certificado com uma senha ou impressão digital.

    ![Ativar a filtragem HTTPS no Android 7-9. Etapa 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    Se você tiver Android 10+ em seu dispositivo, após criar uma VPN local, será exibida a tela principal do aplicativo com uma barra de aviso na parte inferior sugerindo ativar a Filtragem HTTPS: toque em *Ativar* e siga as instruções na próxima tela ou verifique [o artigo sobre instalação de certificado](solving-problems/manual-certificate.md) para mais informações.

    ![Ativar filtragem HTTPS *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## Desinstalando/reinstalando o AdGuard

Se você precisar desinstalar o AdGuard no seu dispositivo móvel, abra *Configurações* e escolha *Aplicativos* (Android 7) ou *Aplicativos e notificações* (Android 8+). Selecione AdGuard na lista de aplicativos instalados e clique em *Desinstalar*.

![Reinstalar o AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

Para reinstalar o AdGuard, basta baixar o arquivo apk novamente e seguir os passos descritos na seção de instalação. Não é necessária desinstalação prévia.
