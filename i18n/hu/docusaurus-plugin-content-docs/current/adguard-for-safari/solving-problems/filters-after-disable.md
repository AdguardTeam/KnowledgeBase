---
title: Filtering doesn’t stop when AdGuard for Safari is disabled
sidebar_position: 3
---

:::info

This article is about AdGuard for Safari, which safeguards only your Safari browser. To protect your entire device, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

If filtering doesn’t stop when AdGuard for Safari is disabled, it may be because content blockers take too long to update.

## How to fix

1. Open Safari.
2. Click _Safari_ in the left upper corner menu.
3. Click _Settings…_ → _Extensions_.
4. Clear the checkboxes for AdGuard’s extensions: _Custom_, _General_, _Other_, _Privacy_, _Security_, _Social_, _AdGuard for Safari_, and _AdGuard Assistant_.
    ![Unchecked content blockers](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-unchecked-cbs.png)
5. Restart Safari.
6. Return to _Settings..._ → _Extensions_ and re-enable the content-blocking extensions.

Now everything should work as intended: filtering is on when AdGuard for Safari is enabled, and filtering is off when it is disabled.
