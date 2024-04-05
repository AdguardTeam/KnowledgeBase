---
title: Funktionsübersicht
sidebar_position: 1
---

:::info

In diesem Artikel geht es um AdGuard für Safari, der nur Ihren Safari-Browser schützt. Um Ihr gesamtes Gerät zu schützen, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

AdGuard für Safari wurde so entwickelt, dass es den Apple-Beschränkungen für werbeblockierende Browsererweiterungen entspricht und ist der beliebteste Werbeblocker für Safari. Although it can't be compared to our desktop ad blocking apps, it's free and can protect you from ads, trackers, phishing, and malicious websites.

## Allgemein {#general}

![Tab Allgemein](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/General.png)

Der erste Tab ist der Bildschirm „Allgemein”, auf dem Sie grundlegende Dinge wie Benachrichtigungen, Aktualisierungsintervalle und den Start von AdGuard beim Systemstart einstellen können. Sie können außerdem festlegen, dass das AdGuard-Symbol in der Menüleiste angezeigt wird. Dort können Sie zudem [Inhaltsblocker](#contentblockers) aktivieren, um Werbung, Tracker, Belästigungen usw. zu blockieren.

## Filter {#filters}

![Tab Filter](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Filters.png)

Ein Filter ist eine Liste von Regeln, die in einer speziellen Syntax geschrieben sind. Nach diesen Regeln können Inhaltsblocker den Webverkehr filtern und Werbung oder Anfragen an bösartige Websites blockieren.

Filter sind in acht thematischen Kategorien zusammengefasst: *Werbeblocker, Datenschutz, Soziale Widgets, Belästigungen, Sicherheit, Sprachspezifische, Benutzerdefinierte und Sonstige Filter*.

Erfahren Sie mehr über [AdGuard-Filter](/general/ad-filtering/adguard-filters) oder [Werbeblockierung im Allgemeinen](/general/ad-filtering/how-ad-blocking-works).

Im Tab „Filter” können Sie die gesamte Kategorie oder einzelne Filter aktivieren. Änderungen auf dem Tab „Filter” werden im Abschnitt „Inhaltsblocker” (auf dem Tab „Allgemein”) übernommen.

## Inhaltsblocker {#contentblockers}

![Tab Inhaltsblocker](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png)

Ein Inhaltsblocker ist eine thematische Ansammlung von Filtern. Datenschutzbezogene Filter sind im Inhaltsblocker mit dem entsprechenden Namen enthalten — *AdGuard Datenschutz*.

Content Blockers were designed for two reasons: to structure filters and to conform to Apple's restrictions.

[Im Jahr 2019](https://adguard.com/en/blog/adguard-safari-1-5.html) hat Apple die Werbeblocker für Safari eingeschränkt. Es können nur noch 50.000 Filterregeln gleichzeitig verwendet werden. Da diese Anzahl für einen Werbeblocker nicht ausreicht, um eine gute Filterqualität zu bieten (AdGuard Basisfilter hat allein 30.000 Filterregeln), haben wir AdGuard für Safari in sechs Inhaltsblocker mit jeweils bis zu 50.000 Regeln unterteilt.

[Im Jahr 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html) erhöhte Apple das Limit der Filterregeln für jeden Inhaltsblocker auf 150.000 gleichzeitig angewandte Regeln. Bei AdGuard für Safari können bis zu 900.000 Regeln für alle sechs Inhaltsblocker aktiviert werden.

Während der Grenzwert erhöht wurde, ist die Struktur der Inhaltsblocker gleich geblieben.

Im Tab „Inhaltsblocker” können Sie sehen, welche Inhaltsblocker aktiviert sind, wie viele Regeln jeder von ihnen verwendet und welche Filter funktionieren.

:::tip

Sie können aktivierte Filter auf dem Tab „Filter” verwalten. Im Abschnitt Inhaltsblocker sehen Sie nur die Liste der bereits aktivierten Filter.

:::

### AdGuard General (Allgemein) {#adguard_general}

*AdGuard Allgemein* ist ein Inhaltsblocker, der die wichtigsten Filter zum Blockieren von Werbung vereint. Wir empfehlen, den AdGuard Basisfilter immer aktiviert zu lassen.

### AdGuard Privacy (Datenschutz) {#adguard_privacy}

Dieser Inhaltsblocker ist das Hauptwerkzeug gegen Besucherzähler und andere Webanalysetools. Der *AdGuard Tracking-Schutzfilter* ist standardmäßig aktiviert.

### AdGuard Soziales {#adguard_social}

*AdGuard Soziales* enthält Filter gegen Schaltflächen, Widgets, Skripte und Symbole für soziale Medien. In diesem Abschnitt finden Sie auch andere Belästigungsfilter: Filter gegen Pop-ups, Banner für mobile Apps, Cookie-Hinweise und mehr. Um sie zu aktivieren, suchen Sie im Tab „Filter” nach *Soziale Widgets*.

### AdGuard Security (Sicherheit) {#adguard_security}

Dieser Inhaltsblocker vereint mehrere sicherheitsrelevante Filter. *Malware Domains Blocklist* blockiert Domains, die für die Verbreitung von Malware und Spyware berüchtigt sind. *Spam404* schützt Sie vor Internet-Betrügern. *NoCoin Filter List* stört browserbasierte Kryptominers, wie z. B. Coinhive.

### AdGuard Other (Sonstiges) {#adguard_other}

*AdGuard Sonstiges* enthält Filter mit verschiedenen Funktionen. So gibt es zum Beispiel einen Filter, der Suchanzeigen und Eigenwerbung freischaltet. In manchen Fällen hilft es, genau das zu finden, wonach man sucht, denn diese Art von Werbung ist relevanter und weniger aufdringlich als andere.

:::note Haftungsausschluss

We don't have any 'acceptable ads' paid by advertisers. Stattdessen bieten wir den Nutzer:innen die Möglichkeit, [Suchanzeigen und Eigenwerbung von Websites](/general/ad-filtering/search-ads) zu sehen.

:::

### AdGuard Benutzerdefiniert {#adguard_custom}

![Tab Benutzerdefiniert](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/AGCustom.png)

Wenn Sie weitere Filter benötigen, können Sie diese zu *AdGuard Benutzerdefiniert* hinzufügen. Um einen benutzerdefinierten Filter hinzuzufügen, geben Sie eine URL oder einen lokalen Dateipfad in das entsprechende Feld ein. Neue Filter finden Sie auf [filterlists.com](https://filterlists.com/).

## Benutzerregeln {#userrules}

Benutzerregeln können verwendet werden, um die Werbeblockierung anzupassen. Sie können manuell hinzugefügt oder importiert werden. Sie werden automatisch erstellt, wenn Sie ein Element auf der Seite blockieren. Um Ihre eigenen Filterregeln hinzuzufügen, verwenden Sie eine [spezielle Syntax](/general/ad-filtering/create-own-filters).

## Über uns {#about}

![Tab Über uns](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/About.png)

Im Tab „Über uns” finden Sie Informationen über die aktuelle Version Ihres Produkts und Links zu rechtlichen Dokumenten. Es gibt auch einen Link zu unserem Repository auf GitHub. Dort können Sie die Produktentwicklung verfolgen, Funktionsanfragen stellen und Fehler melden.

:::note Erinnerung

AdGuard für Safari kann kostenlos [aus dem App Store](https://apps.apple.com/app/adguard-for-safari/id1440147259) heruntergeladen werden. Eine ausführliche Installationsanleitung finden Sie in der [Wissensdatenbank](../Installation).

:::
