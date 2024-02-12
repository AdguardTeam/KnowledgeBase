---
title: Filtering doesn't stop when AdGuard for Safari is disabled
sidebar_position: 3
---

:::info

This article is about AdGuard for Safari, which safeguards only your Safari browser. To protect your entire device, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

This is usually caused by the issue when content blockers update takes too long.

## How to fix

 1. Open Safari.
 2. Click *Safari* in the left upper corner menu.
 3. Click *Settings…* → *Extensions*.
 4. Clear the checkboxes for AdGuard’s 6 content blocking extensions: *Custom*, *General*, *Other*, *Privacy*, *Security*, and *Social*.
    ![Unchecked content blockers](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-unchecked-cbs.png)
 5. Restart Safari.
 6. Return to *Settings...* → *Extensions* and re-enable the content blocking extensions.

Now everything should work as intended: filtering is on when AdGuard for Safari is enabled, and filtering is off when it is disabled.
