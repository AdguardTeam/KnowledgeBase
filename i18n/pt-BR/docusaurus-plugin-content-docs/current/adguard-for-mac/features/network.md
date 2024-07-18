---
title: Rede
sidebar_position: 9
---

:::info

Este artigo é sobre o AdGuard para Mac, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

## Geral

![Rede](https://cdn.adtidy.org/content/kb/ad_blocker/mac/network.png)

### Filtrar aplicativos automaticamente

Por padrão, o AdGuard bloqueia anúncios e rastreadores na maioria dos navegadores ([Tor Browser é uma exceção](/adguard-for-mac/solving-problems/tor-filtering)). Essa configuração também permite que o AdGuard bloqueie anúncios em aplicativos.

Para gerenciar aplicativos filtrados, clique em _Aplicativos_.

### Filtrar protocolo HTTPS

Esta configuração permite que o AdGuard filtre o protocolo HTTPS seguro, que é usado atualmente pela maioria dos sites e aplicativos. Por padrão, os sites com informações potencialmente confidenciais, como serviços bancários, não são filtrados. Para gerenciar exclusões de HTTPS, clique em _Exclusões_.

Por padrão, o AdGuard não filtra sites com certificados de validação estendida (EV). Se necessário, você pode ativar a opção _Filtrar sites com certificados EV_.

## Proxy de saída

Você pode configurar o AdGuard para rotear todo o tráfego do seu dispositivo através do seu servidor proxy.

## Proxy HTTP

Você pode usar o AdGuard como um servidor proxy HTTP. Isso permitirá filtrar o tráfego em outros dispositivos conectados ao proxy.

Verifique se o Mac e o outro dispositivo estão conectados à mesma rede e insira a porta proxy no dispositivo que deseja rotear por meio do servidor proxy (geralmente nas configurações de rede). Para filtrar também o tráfego HTTPS, [transfira o certificado proxy do AdGuard](http://local.adguard.org/cert) para este dispositivo. [Saiba mais sobre como instalar um certificado proxy](/guides/proxy-certificate)
