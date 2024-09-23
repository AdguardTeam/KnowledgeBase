---
title: Proteção de DNS
sidebar_position: 4
---

:::info

Este artigo aborda o AdGuard para Android, um bloqueador de anúncios multifuncional que protege seu dispositivo a nível de sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

O módulo de proteção DNS pode ser acessado tocando na guia _Proteção_ (segundo ícone à esquerda na parte inferior da tela) e selecionando _Proteção DNS_.

:::tip

A proteção DNS funciona de maneira diferente do bloqueio normal de anúncios e rastreadores. You can [learn more about it and how it works from a dedicated article](https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work)

:::

_Proteção DNS_ permite filtrar solicitações DNS com a ajuda de um servidor DNS selecionado, filtros DNS e regras de usuário:

- Alguns servidores DNS possuem listas de bloqueio que ajudam a bloquear solicitações de DNS para domínios potencialmente prejudiciais

- Além dos servidores DNS, o AdGuard pode filtrar solicitações de DNS por conta própria usando um filtro DNS especial. Ele contém uma grande lista de domínios de anúncios e rastreamento, e as solicitações para eles são redirecionadas para um servidor blackhole

- Você também pode bloquear e desbloquear domínios criando regras de usuário. Talvez seja necessário consultar nosso artigo sobre [sintaxe da regra de filtragem de DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![Proteção DNS \*mobile\_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### Servidor DNS

Nessa seção, é possível selecionar um servidor DNS para resolver solicitações de DNS, bloquear anúncios e rastreadores e criptografar o tráfego DNS. Toque em um servidor para ler sua descrição completa e selecionar um protocolo. Se você não encontrou o servidor desejado, você pode adicioná-lo manualmente:

- Toque em _Adicionar servidor DNS_ e digite o endereço (ou endereços) do servidor

- Como alternativa, você pode selecionar um servidor DNS na [lista de provedores de DNS conhecidos](https://adguard-dns.io/kb/general/dns-providers/) e tocar em _Adicionar ao AdGuard_ ao lado dele

- Se você estiver usando um servidor DNS privado do AdGuard, poderá adicioná-lo ao AdGuard no [painel](https://adguard-dns.io/dashboard/)

Por padrão, _DNS automático_ está selecionado. Ele define um servidor DNS com base no AdGuard e nas configurações do dispositivo. Se você tiver [integração com AdGuard VPN](/adguard-for-android/features/integration-with-vpn) ou outro proxy SOCKS5 ativado, ele se conectará ao _AdGuard DNS sem filtragem_ ou a qualquer outro servidor que você especificar. Em todos os outros casos, ele se conecta ao servidor DNS selecionado nas configurações do seu dispositivo.

#### Filtros DNS

Esta seção permite adicionar filtros DNS personalizados e regras de filtragem DNS. Você pode encontrar mais filtros em [filterlists.com](https://filterlists.com/).
