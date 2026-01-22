---
title: Probleme mit der Regelbegrenzung
sidebar_position: 1
---

:::info

In diesem Artikel geht es um AdGuard Mini für Mac, der nur Ihren Safari-Browser schützt. Um Ihren Mac vollständig zu schützen, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## Regelbegrenzung für Inhaltsblocker

AdGuard Mini for Mac uses the Content Blocking API to apply filtering rules to pages in the Safari browser. Derzeit sind maximal 150.000 Regeln für jede Erweiterung zulässig.

AdGuard Mini for Mac has 6 content blockers:

- AdGuard General (Allgemein)
- AdGuard Privacy (Datenschutz)
- AdGuard Soziales
- AdGuard Security (Sicherheit)
- AdGuard Other (Sonstiges)
- AdGuard Benutzerdefiniert

Dies ergibt eine Gesamtzahl von 900.000 Filterregeln.

However, **one extension can contain only up to 150,000 rules**. Wenn Sie diese Grenze überschreiten, werden einige der Regeln nicht angewendet. Dies kann zu einer fehlerhaften Sperrung führen.

## So können Sie überprüfen, ob Sie die Regelgrenze überschreiten

1. Open AdGuard Mini app.
2. Go to _Settings_ → _Safari extensions_.
3. Below each extension, you can see the enabled filters and the number of active rules.
   ![Tab „Erweiterungen“](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Wenn mehr als 150.000 Regeln in einem Inhaltsblocker aktiviert sind, müssen Sie möglicherweise einige Filter oder Benutzerregeln deaktivieren. Öffnen Sie den Abschnitt _Filter_, wählen Sie die problematische Kategorie aus und deaktivieren Sie die Filter oder Benutzerregeln, die Sie nicht benötigen.
