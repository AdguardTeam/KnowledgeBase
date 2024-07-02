---
title: Фильтрация не прекращается, когда AdGuard для Safari отключён
sidebar_position: 3
---

:::info

Эта статья об AdGuard для Safari, которое защищает только этот браузер. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы защитить своё устройство

:::

If filtering doesn’t stop when AdGuard for Safari is disabled, it may be because content blockers take too long to update.

## Как исправить

1. Откройте Safari.
2. Нажмите _Safari_ в левом верхнем углу меню.
3. Нажмите _Настройки…_ → _Расширения_.
4. Clear the checkboxes for AdGuard’s 6 content-blocking extensions: _Custom_, _General_, _Other_, _Privacy_, _Security_, and _Social_.
   ![Unchecked content blockers](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-unchecked-cbs.png)
5. Перезапустите Safari.
6. Вернитесь в _Настройки..._ → _Расширения_ и снова включите расширения, блокирующие контент.

Now everything should work as intended: filtering is on when AdGuard for Safari is enabled, and filtering is off when it is disabled.
