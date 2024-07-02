---
title: Rule limit issues
sidebar_position: 1
---

:::info

Эта статья об AdGuard для Safari, которое защищает только этот браузер. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы защитить своё устройство

:::

## Safari content blocker rule limit

AdGuard for Safari uses the Content Blocking API to apply filtering rules to pages in the Safari browser. Для каждого расширения, блокирующего контент, разрешено не более 150 000 правил.

AdGuard for Safari has 6 content blockers:

- AdGuard Основные
- AdGuard Конфиденциальность
- AdGuard Виджеты соцсетей
- AdGuard Безопасность
- AdGuard Другие
- AdGuard Пользовательские

Всего получается 900 000 правил фильтрации.

However, **an extension can contain up to 150,000 rules**. If you exceed this limit, some of the rules will not be applied. This may lead to incorrect blocking.

## How to check if you are exceeding the rule limit

1. Откройте приложение AdGuard для Safari.
2. Прокрутите вниз и нажмите _Блокировщики контента_.
3. Под каждым блокировщиком контента вы можете увидеть включённые фильтры и количество активных правил.
   ![Блокировщики контента](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-cb.png)

If more than 150,000 rules are enabled in a content blocker, you may need to disable some filters or user rules from it. Перейдите в раздел _Фильтры_, выберите проблемную категорию и отключите ненужные фильтры или пользовательские правила.
