---
title: Protect Mail Activity e AdGuard
sidebar_position: 8
---

:::info

Este artigo é sobre o AdGuard para Mac, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Veja como funciona ao [baixar o AdGuard](https://agrd.io/download-kb-adblock)

:::

## Em poucas palavras

O aplicativo Apple Mail agora usa um proxy para ocultar o endereço IP de um usuário ao baixar imagens de e-mails.

![Proteção de privacidade de e-mail](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

No entanto, isso não funcionará se houver uma conexão VPN ativa. Como ele trata o AdGuard como uma VPN, ele não pré-carrega imagens automaticamente.

A Apple explica esse problema [aqui](https://support.apple.com/HT212797).

## Em detalhe

O AdGuard para Mac agora usa a filtragem de soquete integrada do macOS com base na API de extensões de rede. Este mecanismo novo e bastante problemático substituiu as boas e velhas extensões do Kernel. Nos últimos 1,5 anos, relatamos mais de 20(!) bugs à Apple em relação ao seu novo método de filtragem.

A API de extensões de rede possui uma configuração semelhante a uma VPN com uma lista de entradas semelhantes a rotas. No Big Sur, o AdGuard usou regras de “túnel dividido” para evitar a criação da regra de “rota padrão”, pois ela causa problemas nos primeiros lançamentos do Big Sur. Esses problemas foram resolvidos em Monterey, então nada nos impede de usar a regra da “rota padrão”.

Em Monterey, o iCloud Private Relay foi introduzido. Os recursos de privacidade do Mail.app também usam servidores Private Relay.

Como consequência, o AdGuard não pode funcionar em conjunto com os recursos de privacidade do aplicativo iCloud Private Relay e Mail:

1. O iCloud Private Relay é aplicado às conexões no nível da biblioteca antes que elas atinjam o nível do soquete, onde o AdGuard opera.
2. O iCloud Private Relay usa QUIC, que o AdGuard não pode filtrar porque a filtragem HTTP/3 ainda não está disponível.
3. Consequently, AdGuard blocks QUIC, including iCloud Private Relay traffic —otherwise, ad blocking is impossible.
4. Ao usar o iCloud Private Relay e alternar o AdGuard para o modo "túnel dividido", você não poderá abrir sites no Safari.
5. Para contornar esse problema em Monterey, aplicamos a regra da "rota padrão". Quando o Private Relay vê essa regra, ele se desativa automaticamente. Portanto, o AdGuard funciona perfeitamente em Monterey, mas o iCloud Private Relay é desativado.

`network.extension.monterey.force.split.tunnel` restaura o comportamento "Big Sur", mas esta opção pode interromper o acesso a sites devido a (3) e (4). Continuamos buscando uma solução para esse problema. Uma das opções é implementar a filtragem HTTP/3.

## Solução recomendada

Neste ponto, recomendamos o uso de um serviço VPN mais tradicional, como [AdGuard VPN](https://adguard-vpn.com/), em vez dos recursos de privacidade mais recentes da Apple.
