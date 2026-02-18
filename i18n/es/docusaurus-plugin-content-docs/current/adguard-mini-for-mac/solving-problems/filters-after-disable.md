---
title: Filtering doesn’t stop when AdGuard Mini is disabled
sidebar_position: 3
---

:::info

Este artículo trata sobre AdGuard Mini para Mac, que protege solo tu navegador Safari. Para proteger completamente tu Mac, [descarga la aplicación AdGuard](https://agrd.io/download-kb-adblock)

:::

If filtering doesn’t stop when AdGuard Mini for Mac is disabled, it may be because content blockers take too long to update.

## Cómo solucionarlo

1. Abre Safari.
2. Haz clic en _Safari_ en el menú de la esquina superior izquierda.
3. Haz clic en _Configuración…_ → _Extensiones_.
4. Clear the checkboxes for AdGuard Mini’s extensions: _Custom_, _General_, _Other_, _Privacy_, _Security_, _Social_, and _AdGuard for Safari_.
   ![Extensiones sin marcar](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/unchecked-extensions.png)
5. Reinicia Safari.
6. Return to Safari → _Settings..._ → _Extensions_ and re-enable the AdGuard extensions.

Now everything should work as intended: filtering is on when AdGuard Mini is enabled, and filtering is off when it is disabled.
