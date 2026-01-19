---
title: Filtering doesn’t stop when AdGuard Mini is disabled
sidebar_position: 3
---

:::info

This article is about AdGuard Mini for Mac, which safeguards only your Safari browser. To protect your Mac entirely, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

If filtering doesn’t stop when AdGuard Mini for Mac is disabled, it may be because content blockers take too long to update.

## Как исправить

1. Откройте Safari.
2. Нажмите _Safari_ в левом верхнем углу меню.
3. Нажмите _Настройки…_ → _Расширения_.
4. Clear the checkboxes for AdGuard Mini’s extensions: _Custom_, _General_, _Other_, _Privacy_, _Security_, _Social_, and _AdGuard for Safari_.
   ![Unchecked extensions](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/unchecked-extensions.png)
5. Перезапустите Safari.
6. Return to Safari → _Settings..._ → _Extensions_ and re-enable the AdGuard extensions.

Now everything should work as intended: filtering is on when AdGuard Mini is enabled, and filtering is off when it is disabled.
