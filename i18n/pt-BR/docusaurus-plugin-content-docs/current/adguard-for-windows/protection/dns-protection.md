---
title: Proteção DNS
sidebar_position: 4
---

:::info

Este artigo descreve o AdGuard para Windows v8.0, um bloqueador de anúncios completo que protege seu dispositivo em nível de sistema. Esta é uma versão beta que ainda está em desenvolvimento. Para experimentá-lo, baixe a [versão beta do AdGuard para Windows](https://agrd.io/windows_beta).

:::

A proteção de DNS oferece mais controle sobre como seu dispositivo se conecta à Internet. Existem três razões principais pelas quais isso pode ser útil:

## 1. Proteja a sua privacidade contra seu ISP

Cada vez que você abre um site, por exemplo `google.com`, seu navegador envia uma solicitação a um servidor DNS para obter em troca o endereço IP do site. Normalmente, o servidor DNS pertence ao seu provedor de internet, o que significa que ele pode rastrear os sites que você visita. Se você mudar para outro servidor DNS, como o AdGuard DNS, seu provedor de internet não verá mais sua atividade online.

## 2. Criptografe seu tráfego DNS

Protocolos modernos como DNS-sobre-TLS e DNS-sobre-HTTPS garantem que suas solicitações de DNS sejam criptografadas. Isso os protege de serem interceptados, modificados ou espionados por pessoas mal intencionadas.

## 3. Bloqueie conteúdo indesejado no nível DNS

A proteção de DNS pode filtrar anúncios, rastreadores, sites de phishing e outros conteúdos nocivos ou irritantes antes mesmo de serem carregados no seu navegador ou aplicativos. [Saiba mais sobre filtragem DNS](https://adguard-dns.io/kb/general/dns-filtering/)

![Proteção DNS](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns.png)

Veja o que você pode configurar na proteção de DNS:

## Escolha um servidor DNS

![Servidores DNS](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns_server.png)

Você pode selecionar entre vários provedores de DNS confiáveis. O próprio AdGuard oferece várias opções para diferentes necessidades:

- AdGuard DNS — bloqueia anúncios e rastreadores.

- AdGuard DNS Family Protection — bloqueia anúncios, rastreadores e conteúdo adulto.

- AdGuard DNS sem filtragem — fornece uma conexão segura e confiável sem qualquer filtragem.

Você pode usar um de nossos servidores públicos, adicionar seu próprio servidor DNS personalizado ou escolher outra opção confiável da nossa [lista de provedores de DNS confiáveis](https://adguard-dns.io/kb/general/dns-providers/).

## Adicionar filtros e regras de DNS

Para ajustar a proteção, você pode criar seus próprios filtros DNS usando a [sintaxe de regras DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/) ou importar [filtros DNS](https://filterlists.com) prontos.

Além disso, você pode criar regras de DNS personalizadas para bloquear, desbloquear ou redirecionar domínios conforme necessário. Use nosso construtor de regras integrado.
