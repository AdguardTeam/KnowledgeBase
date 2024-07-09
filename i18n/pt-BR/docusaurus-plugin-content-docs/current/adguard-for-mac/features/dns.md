---
title: DNS
sidebar_position: 4
---

:::info

Este artigo é sobre o AdGuard para Mac, um bloqueador de anúncios multifuncional que protege seu dispositivo no nível do sistema. Para ver como funciona, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

## Proteção DNS

A seção _DNS_ contém um recurso, _Proteção DNS_, com múltiplas configurações:

- Provedores
- Filtros
- Lista de bloqueio
- Lista de permissões

![DNS](https://cdn.adtidy.org/content/kb/ad_blocker/mac/dns.png)

Se você ativar a _proteção DNS_, o tráfego DNS será gerenciado pelo AdGuard.

### Provedores

Em _Provedores_, você pode selecionar um servidor DNS para criptografar seu tráfego DNS e bloquear anúncios e rastreadores, se necessário. Recomendamos o AdGuard DNS. Para uma configuração mais avançada, você pode [configurar um servidor AdGuard DNS privado](https://adguard-dns.io/welcome.html) ou adicionar um personalizado clicando no ícone `+` no canto inferior esquerdo.

### Filtros

Os filtros DNS aplicam regras de bloqueio de anúncios no nível do DNS. Essa filtragem é menos precisa do que o bloqueio normal de anúncios, mas é particularmente útil para bloquear um domínio inteiro. Para adicionar um filtro DNS, clique em `+`. Você pode encontrar mais filtros DNS em [filterlists.com](https://filterlists.com/).

### Lista de bloqueio

Os domínios desta lista serão bloqueados. Para adicionar um domínio, clique em `+`. Você pode adicionar nomes de domínio ou regras de filtragem de DNS usando uma [sintaxe especial](https://adguard-dns.io/kb/general/dns-filtering-syntax/).

Para exportar ou importar uma lista de bloqueio, abra o menu de contexto.

### Lista de permissões

Os domínios desta lista não são filtrados. Para adicionar um domínio, clique em `+`. Para exportar ou importar uma lista de permissões, abra o menu de contexto.
