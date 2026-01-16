---
title: Проблемы с лимитом правил
sidebar_position: 1
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

## Лимит правил блокировки контента Safari

AdGuard Mini for Mac uses the Content Blocking API to apply filtering rules to pages in the Safari browser. Для каждого расширения, блокирующего контент, разрешено не более 150 000 правил.

AdGuard Mini for Mac has 6 content blockers:

- AdGuard Основные
- AdGuard Конфиденциальность
- AdGuard Виджеты соцсетей
- AdGuard Безопасность
- AdGuard Другие
- AdGuard Пользовательские

Всего получается 900 000 правил фильтрации.

However, **one extension can contain only up to 150,000 rules**. Если вы превысите этот лимит, некоторые правила не будут применяться. Это может привести к некорректной блокировке.

## Как проверить, не превышаете ли вы лимит правил

1. Open AdGuard Mini app.
2. Go to _Settings_ → _Safari extensions_.
3. Below each extension, you can see the enabled filters and the number of active rules.
   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Если в блокировщике контента включено более 150 000 правил, возможно, потребуется отключить в нём некоторые фильтры или пользовательские правила. Перейдите в раздел _Фильтры_, выберите проблемную категорию и отключите ненужные фильтры или пользовательские правила.
