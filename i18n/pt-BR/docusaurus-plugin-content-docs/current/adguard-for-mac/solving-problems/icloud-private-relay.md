---
title: iCloud Private Relay e AdGuard
sidebar_position: 7
---

:::info

Este artigo é sobre o AdGuard para Mac, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

## Descrição do problema em poucas palavras

Por padrão, o AdGuard usa a "rota padrão" que desativa o iCloud Private Relay.

Atualmente, o AdGuard e o iCloud Private Relay não podem funcionar ao mesmo tempo. O AdGuard não pode bloquear anúncios porque o iCloud Private Relay criptografa o tráfego antes que o AdGuard possa filtrar as conexões de rede. Quando o iCloud Private Relay está ativo, qualquer filtragem (incluindo filtragem local) torna-se impossível. Portanto, o AdGuard não pode filtrar o tráfego ou realizar filtragem de DNS no Safari. Mesmo assim, o AdGuard ainda filtra o tráfego em outros navegadores. Para continuar usando o iCloud Private Relay, considere instalar o [AdGuard para Safari](https://adguard.com/adguard-safari/overview.html).

O mesmo se aplica ao uso de qualquer aplicativo VPN no Mac: você deve escolher entre usar o iCloud Private Relay ou um serviço VPN.

## Em detalhe

O AdGuard para Mac agora usa a filtragem de soquete integrada do macOS com base na API de extensões de rede. Este mecanismo novo e bastante problemático substituiu as boas e velhas extensões do Kernel. Nos últimos 1,5 anos, relatamos mais de 20(!) bugs à Apple em relação ao seu novo método de filtragem.

A API de extensões de rede possui uma configuração semelhante a uma VPN com uma lista de entradas semelhantes a rotas. No Big Sur, o AdGuard desenvolveu regras de “túnel dividido” para evitar a criação da regra de “rota padrão”, pois ela causa problemas nos primeiros lançamentos do Big Sur.

Em Monterey, o iCloud Private Relay foi introduzido. Os recursos de privacidade do Mail app também usam servidores Private Relay.

As a consequence, AdGuard can’t work together with iCloud Private Relay and the Mail app privacy features:

1. O iCloud Private Relay é aplicado às conexões no nível da biblioteca antes que elas atinjam o nível do soquete, onde o AdGuard opera.
2. iCloud Private Relay is implemented with HTTP/3 CONNECT proxies.
3. Since AdGuard does not filter CONNECT HTTP/3 requests yet, it attempts to downgrade HTTP/3 proxy connections to HTTP/1.1, which results in blocking iCloud Private Relay traffic.
4. When you use iCloud Private Relay and switch AdGuard into the Split-Tunnel mode, you can’t open websites in Safari.
5. To work around this issue for Monterey, we apply the “default route” rule. Quando o Private Relay vê essa regra, ele se desativa automaticamente. Portanto, o AdGuard funciona perfeitamente em Monterey, mas o iCloud Private Relay é desativado.

The `network.extension.monterey.force.split.tunnel` option restores the “Big Sur” behavior, but this option may break access to websites due to (3) and (4). Continuamos buscando uma solução para esse problema. One of the options is implementing HTTP/3 proxy filtering.

## Solução recomendada

Recomendamos usar o AdGuard junto com um serviço VPN mais tradicional, como o [AdGuard VPN](https://adguard-vpn.com/).

## Solução alternativa

Você pode impedir que o AdGuard use a "rota padrão" desativando a "rota padrão". Isso pode ser feito em Configurações avançadas → `network.extension.monterey.force.split.tunnel`.

![Desative a rota padrão nas configurações avançadas *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

Lembre-se que, neste caso, você enfrentará os problemas descritos acima.
