---
title: So aktivieren Sie die systemweite Filterung in AdGuard für iOS
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für iOS, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um die Funktionsweise aus erster Hand zu erfahren, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## Über die systemweite Filterung

Systemweite Filterung bedeutet, dass Werbung und Tracker über den Safari-Browser hinaus blockiert werden, d. h. in anderen Apps und Browsern. In diesem Artikel erfahren Sie, wie Sie diese Funktion auf Ihrem iOS-Gerät aktivieren können.

Unter iOS ist die einzige Möglichkeit, Werbung und Tracker systemweit zu blockieren, die [DNS-Filterung](https://adguard-dns.io/kb/general/dns-filtering/).

Zunächst müssen Sie den DNS-Schutz aktivieren. Um dies zu tun:

1. Öffnen Sie *AdGuard für iOS*.
2. Tippen Sie auf das Symbol *Schutz* (das zweite Symbol in der unteren Menüleiste).
3. Schalten Sie *DNS-Schutz* ein.

![DNS-Schutzbildschirm *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

Es gibt drei Möglichkeiten, wenn Sie Werbung und Tracker systemweit blockieren möchten:

 1. Verwenden Sie den AdGuard DNS-Filter: *Schutz* (das Schildsymbol im unteren Menü) → *DNS-Schutz* → *DNS-Filterung* → *DNS-Filter* → *AdGuard DNS-Filter*.
 2. Verwenden Sie den AdGuard DNS-Server: *Schutz* (das Schildsymbol im unteren Menü) → *DNS-Schutz* → *DNS-Server* → *AdGuard DNS*) oder einen anderen DNS-Server nach Ihrem Geschmack.
 3. Fügen Sie eine benutzerdefinierte DNS-Filter-/Hosts-Datei nach Ihren Wünschen hinzu.

Die erste und dritte Option haben folgende Vorteile:

- Sie können jeden beliebigen DNS-Server verwenden und sind nicht an einen bestimmten Sperrserver gebunden, da der Filter die Blockierung übernimmt.
- Sie können mehrere DNS-Filter und/oder Hosts-Dateien hinzufügen. Beachten Sie jedoch, dass die Verwendung von zu vielen Dateien AdGuard beeinträchtigen kann.

![So funktioniert DNS-Filterung](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## So fügen Sie benutzerdefinierte DNS-Filter/Hosts-Dateien hinzu

Sie können jeden beliebigen DNS-Filter oder jede beliebige Hosts-Datei hinzufügen.

Für das Beispiel fügen wir [OISD Blocklist Big](https://oisd.nl/) hinzu.

1. Kopieren Sie diesen Link: `https://big.oisd.nl` (es ist ein Link für den Filter OISD Blocklist Big)
2. Öffnen Sie *Schutz* (das Schildsymbol im unteren Menü) → *DNS-Schutz* → *DNS-Filterung* → *DNS-Filter*.
3. Tippen Sie auf *Filter hinzufügen*.
4. Fügen Sie den Link in das URL-Feld des Filters ein.
5. Tippen Sie auf *Weiter* → *Hinzufügen*.

![Bildschirm DNS-Filter hinzufügen *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

Fügen Sie auf die gleiche Weise eine beliebige Anzahl anderer DNS-Filter hinzu, indem Sie in Schritt 4 eine andere URL einfügen. Sie können verschiedene Filter und Links zu ihnen [hier](https://filterlists.com) finden.
