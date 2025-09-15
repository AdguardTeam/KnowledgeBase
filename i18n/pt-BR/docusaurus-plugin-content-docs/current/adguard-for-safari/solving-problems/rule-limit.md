---
title: Problemas de limite de regras
sidebar_position: 1
---

:::info

Este artigo é sobre o AdGuard para Safari, que protege apenas o seu navegador Safari. Para proteger todo o seu dispositivo, [baixe o aplicativo AdGuard](https://agrd.io/download-kb-adblock)

:::

## Limite de regras do bloqueador de conteúdo do Safari

O AdGuard para Safari usa a API de bloqueio de conteúdo para aplicar regras de filtragem às páginas do navegador Safari. Atualmente, são permitidas no máximo 150.000 regras para cada extensão de bloqueio de conteúdo.

AdGuard para Safari possui 6 bloqueadores de conteúdo:

- AdGuard Custom
- AdGuard Privacy
- AdGuard Social
- AdGuard Security
- AdGuard Other
- AdGuard Custom

Isso totaliza 900.000 regras de filtragem.

No entanto, **uma extensão pode conter até 150.000 regras**. Se você exceder esse limite, algumas regras não serão aplicadas. Isto pode levar a um bloqueio incorreto.

## Como verificar se você está excedendo o limite de regras

1. Abra o aplicativo AdGuard para Safari.
2. Role para baixo e clique em _Bloqueadores de conteúdo_.
3. Abaixo de cada bloqueador de conteúdo, você pode ver os filtros ativados e o número de regras ativas.
   ![Bloqueadores de conteúdo](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-cb.png)

Se mais de 150.000 regras estiverem habilitadas em um bloqueador de conteúdo, pode ser necessário desativar alguns filtros ou regras de usuário. Vá para _Filtros_, selecione a categoria problemática e desative os filtros ou regras de usuário de que você não precisa.
