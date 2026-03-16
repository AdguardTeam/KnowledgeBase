---
title: Probleme mit der Regelbegrenzung
sidebar_position: 1
---

:::info

In diesem Artikel geht es um AdGuard Mini für Mac, der nur Ihren Safari-Browser schützt. Um Ihren Mac vollständig zu schützen, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## Regelbegrenzung für Inhaltsblocker

AdGuard Mini für Mac verwendet die Content Blocking API, um Filterregeln auf Seiten im Safari-Browser zu übernehmen. Derzeit sind maximal 150.000 Regeln für jede Erweiterung zulässig.

AdGuard Mini für Mac verfügt über 6 Inhaltsblocker:

- AdGuard Allgemein
- AdGuard Datenschutz
- AdGuard Soziales
- AdGuard Sicherheit
- AdGuard Sonstiges
- AdGuard Benutzerdefiniert

Dies ergibt eine Gesamtzahl von 900.000 Filterregeln.

Allerdings kann **eine Erweiterung nur bis zu 150.000 Regeln** enthalten. Wenn Sie diese Grenze überschreiten, werden einige der Regeln nicht angewendet. Dies kann zu einer fehlerhaften Sperrung führen.

## So können Sie überprüfen, ob Sie die Regelgrenze überschreiten

1. Öffnen Sie die AdGuard Mini-App.
2. Gehen Sie zu _Einstellungen_ → _Safari-Erweiterungen_.
3. Unter jeder Erweiterung können Sie die aktivierten Filter und die Anzahl der aktiven Regeln sehen.
   ![Tab „Erweiterungen“](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Wenn mehr als 150.000 Regeln in einem Inhaltsblocker aktiviert sind, müssen Sie möglicherweise einige Filter oder Benutzerregeln deaktivieren. Öffnen Sie den Abschnitt _Filter_, wählen Sie die problematische Kategorie aus und deaktivieren Sie die Filter oder Benutzerregeln, die Sie nicht benötigen.
