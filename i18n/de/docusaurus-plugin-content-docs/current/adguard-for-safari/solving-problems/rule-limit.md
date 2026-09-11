---
title: Probleme mit der Regelbegrenzung
sidebar_position: 1
---

:::info

In diesem Artikel geht es um AdGuard für Safari, der nur Ihren Safari-Browser schützt. Um Ihr gesamtes Gerät zu schützen, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## Regelbegrenzung für Inhaltsblocker

AdGuard für Safari verwendet die Content Blocking API, um Filterregeln auf Seiten im Safari-Browser anzuwenden. Derzeit sind maximal 150.000 Regeln für jede Erweiterung zulässig.

AdGuard für Safari verfügt über 6 Inhaltsblocker:

- AdGuard Allgemein
- AdGuard Datenschutz
- AdGuard Soziales
- AdGuard Sicherheit
- AdGuard Sonstiges
- AdGuard Benutzerdefiniert

Dies ergibt eine Gesamtzahl von 900.000 Filterregeln.

Allerdings kann **eine Erweiterung bis zu 150.000 Regeln** enthalten. Wenn Sie diese Grenze überschreiten, werden einige der Regeln nicht angewendet. Dies kann zu einer fehlerhaften Sperrung führen.

## So können Sie überprüfen, ob Sie die Regelgrenze überschreiten

1. Öffnen Sie AdGuard für Safari.
2. Blättern Sie nach unten und klicken Sie auf _Inhaltsblocker_.
3. Unter jedem Inhaltsblocker können Sie die aktivierten Filter und die Anzahl der aktiven Regeln sehen.
   ![Inhaltsblocker](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-cb.png)

Wenn mehr als 150.000 Regeln in einem Inhaltsblocker aktiviert sind, müssen Sie möglicherweise einige Filter oder Benutzerregeln deaktivieren. Öffnen Sie den Abschnitt _Filter_, wählen Sie die problematische Kategorie aus und deaktivieren Sie die Filter oder Benutzerregeln, die Sie nicht benötigen.
