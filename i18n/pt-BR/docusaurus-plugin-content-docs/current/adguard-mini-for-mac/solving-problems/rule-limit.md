---
title: Problemas de limite de regras
sidebar_position: 1
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Limite de regras do bloqueador de conteúdo do Safari

AdGuard Mini for Mac uses the Content Blocking API to apply filtering rules to pages in the Safari browser. Atualmente, são permitidas no máximo 150.000 regras para cada extensão de bloqueio de conteúdo.

AdGuard Mini for Mac has 6 content blockers:

- AdGuard Custom
- AdGuard Privacy
- AdGuard Social
- AdGuard Security
- AdGuard Other
- AdGuard Custom

Isso totaliza 900.000 regras de filtragem.

However, **one extension can contain only up to 150,000 rules**. Se você exceder esse limite, algumas regras não serão aplicadas. Isto pode levar a um bloqueio incorreto.

## Como verificar se você está excedendo o limite de regras

1. Open AdGuard Mini app.
2. Go to _Settings_ → _Safari extensions_.
3. Below each extension, you can see the enabled filters and the number of active rules.
   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Se mais de 150.000 regras estiverem habilitadas em um bloqueador de conteúdo, pode ser necessário desativar alguns filtros ou regras de usuário. Vá para _Filtros_, selecione a categoria problemática e desative os filtros ou regras de usuário de que você não precisa.
