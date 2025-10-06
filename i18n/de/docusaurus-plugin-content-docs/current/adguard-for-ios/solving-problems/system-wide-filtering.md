---
title: So aktivieren Sie die systemweite Filterung in AdGuard für iOS
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für iOS, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um die Funktionsweise aus erster Hand zu erfahren, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## Über die systemweite Filterung

Systemweites Filtering ermöglicht es Ihnen, Werbung und Tracker nicht nur in Safari, sondern auch in anderen Apps und Browsern auf Ihrem iOS-Gerät zu blockieren. iOS ist ein ziemlich geschlossenes Betriebssystem, und Apple bietet nur begrenzte Möglichkeiten zum Blockieren von Werbung außerhalb von Safari. Die einzige Möglichkeit, Werbung und Tracker systemweit zu blockieren, ist über [DNS-Filterung](https://adguard-dns.io/kb/general/dns-filtering/). In diesem Artikel wird erklärt, wie Sie diese Funktion aktivieren können.

![So funktioniert DNS-Filterung](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

Als erstes muss der DNS-Schutz aktiviert werden:

1. Öffnen Sie *AdGuard*.
2. Tippen Sie auf das Symbol *Schutz* (Schildsymbol in der unteren Menüleiste).
3. Schalten Sie *DNS-Schutz* ein.

![DNS-Schutzbildschirm *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/dns_protection.png)

Sobald der DNS-Schutz aktiviert ist, haben Sie drei Optionen:

- **AdGuard DNS-Filter verwenden.** Um ihn zu aktivieren, gehen Sie zu *Schutz* → *DNS-Schutz* → *DNS-Filterung* → *DNS-Filter* → *AdGuard DNS-Filter*. Mit dieser Option sind Sie nicht an einen bestimmten Server gebunden — der Filter führt die gesamte Blockierung durch.
- **Einen blockierenden DNS-Server verwenden.** Gehen Sie zu *Schutz* → *DNS-Schutz* → *DNS-Server* und wählen Sie *AdGuard DNS* oder einen anderen Blockierungsserver nach Ihrem Geschmack.
- **Einen benutzerdefinierten DNS-Filter oder eine Hosts-Datei hinzufugen.** Es können mehrere DNS-Filter und Hosts-Dateien hinzugefügt werden. Beachten Sie, dass die Verwendung von zu vielen Filtern AdGuard verlangsamen kann.

## Hinzufügen von benutzerdefinierten DNS-Filtern und Hosts-Dateien

Fügen wir zum Beispiel die [OISD-Blockliste Big](https://oisd.nl/) hinzu.

1. Kopieren Sie den Link für OISD Blocklist Big: `https://big.oisd.nl`
2. Öffnen Sie *Schutz*  → *DNS-Schutz* → *DNS-Filterung* → *DNS-Filter*.
3. Tippen Sie auf *Filter hinzufügen*.
4. Fügen Sie den Link in das URL-Feld des Filters ein.
5. Tippen Sie auf *Weiter* → *Hinzufügen*.

![Hinzufügen eines DNS-Filters *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/adding_dns_filter.png)

Fügen Sie beliebig viele DNS-Filter hinzu, indem Sie Schritt 4 mit einer anderen URL wiederholen. Verschiedene Filterlisten und deren Links finden Sie unter [filterlists.com](https://filterlists.com).
