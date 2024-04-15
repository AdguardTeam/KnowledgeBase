---
title: Einstellungen
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

_Settings_ is the section that requires the most attention. Hier können Sie die App so konfigurieren, dass sie genau Ihren Bedürfnissen entspricht: Sie blockiert nur das, was Sie stört, verwendet den DNS-Server des vertrauenswürdigen Anbieters, entfernt Cookies von Drittanbietern und so weiter.

![Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### Allgemeine Einstellungen

Hier können Sie die Sprache und das Design (dunkel oder hell) festlegen, den Start von AdGuard beim Systemstart und automatische Aktualisierungen im Hintergrund aktivieren, den Aktualisierungskanal auswählen und die Häufigkeit der Filteraktualisierungen festlegen. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Advanced Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

At the very bottom of the screen you will find _Advanced Settings_. Wenn Sie einige von ihnen unbedacht ändern, kann dies zu Problemen mit der Leistung führen, die Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsphäre gefährden. Deshalb empfehlen wir Ihnen, diesen Bereich nur zu öffnen, wenn Sie sicher sind, was Sie tun, oder wenn unser Support-Team Sie danach gefragt hat. If you want to know what can be set up in _Advanced Setting_ read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

### Werbeblocker

Dies ist das Hauptmodul von AdGuard für Windows, das Werbung von den von Ihnen besuchten Websites und von den auf Ihrem Gerät installierten Apps entfernt. To filter out advertising and privacy-threatening content such as banners, pop-ups, or trackers AdGuard uses different filters: groups of rules with a similar purpose written with a [special syntax](/general/ad-filtering/create-own-filters). To understand what filters are and how they work read [this article](/general/ad-filtering/how-ad-blocking-works).

![Ad Blocker \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/ad-blocker.png)

Im Werbeblocker-Modul können Sie:

- die automatische Aktivierung von sprachspezifischen Filtern ermöglichen,
- disable [search ads and self-promotion](/general/ad-filtering/search-ads) blocking,
- activate pre-installed filters such as _AdGuard Base filter_,
- install filters from the list or add a custom filter by clicking the _Add a filter_ button,
- make changes to existing rule groups using the _Filter editor_ button,
- see all the requests sent by browsers and apps installed on your computer by clicking the _Filtering log_ button. Von dort aus können Sie auch jede Anfrage sperren oder freigeben, indem Sie eine benutzerdefinierte Regel erstellen,
- einen Filter aus Ihren eigenen, manuell erstellten, importierten oder mit der Erweiterung Browser-Assistent erstellten Regeln zusammenstellen.

Before you start manually writing your own rules read our detailed [syntax guide](/general/ad-filtering/create-own-filters).

### Stealth Mode

Viele Websites sammeln Informationen über Personen, die sie besuchen, z. B. ihre IP-Adressen, Informationen über den Browser und das installierte Betriebssystem, die Bildschirmauflösung und sogar darüber, von welcher Seite die Benutzer:innen kamen oder weitergeleitet wurden. Einige Webseiten verwenden Cookies, um den Browser zu kennzeichnen und Ihre persönlichen Einstellungen und Vorlieben zu speichern oder Sie bei Ihrem nächsten Besuch wiederzuerkennen. Das Privatsphäre-Modul schützt Ihre persönlichen Informationen vor solchen Daten- und Statistiksammelsystemen.

![Stealth Mode \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Sie können die Funktionsweise dieses Moduls flexibel anpassen: Sie können z. B. verhindern, dass die Website die Suchanfrage erhält, mit der Sie sie im Internet gefunden haben, Sie können Cookies von Drittanbietern und der Website selbst automatisch löschen und Sie können die Standortfreigabe in Ihrem Browser deaktivieren, die dazu verwendet werden kann, Ihren Aufenthaltsort zu verfolgen.

To learn everything about Stealth Mode and its many options, [read this article](/general/stealth-mode).

### Browsing security

Browsing security gives strong protection against malicious and phishing websites. AdGuard für Windows ist natürlich kein Antivirenprogramm. Die App kann weder das Herunterladen eines Virus stoppen, wenn es bereits begonnen hat, noch bereits vorhandene Viren löschen. Sie werden jedoch gewarnt, wenn Sie eine Website aufrufen oder eine Datei von einer Website herunterladen, deren Domain in unserer Datenbank „Nicht vertrauenswürdige Websites“ aufgeführt ist. You can find more information about how this module works in the [dedicated article](/general/browsing-security).

In diesem Modul können Sie:

- Benachrichtigungen aktivieren, um Anfragen an bösartige und Phishing-Seiten zu sperren,
- akustische Benachrichtigungen aktivieren,
- sich bereit erklären, anonyme sicherheitsrelevante Informationen an den AdGuard-Server zu übermitteln, damit wir die Datenbank mit bösartigen und Phishing-Websites auf dem neuesten Stand halten können.

![Browsing security \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

In case you want to learn more about Browsing security, read [this article](/general/browsing-security).

### DNS-Schutz

Es gibt drei wichtige Gründe, warum Sie die DNS-Schutzeinstellungen untersuchen sollten. Erstens, um zu vermeiden, dass Ihr ISP (Internetdiensteanbieter) Sie verfolgt. Every time you open a website, for example `google.com`, your browser sends a request to a DNS server to get the IP address of the website in return. In der Regel gehört der DNS-Server zu Ihrem Internetanbieter, der damit Ihre Online-Aktivitäten verfolgen kann. Zweitens, um Ihren DNS-Verkehr zu verschlüsseln. And the third one is to [block content on DNS level](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

In the DNS protection module of AdGuard for Windows you can select the DNS servers from known DNS providers, including [AdGuard DNS](https://adguard-dns.io/kb/) that blocks ads and trackers, AdGuard DNS Family Protection that in addition blocks adult content, or AdGuard DNS Non-filtering that provides a secure and reliable connection, but doesn't filter anything. Sie können sogar eigene DNS-Server hinzufügen. Also there is an option to add custom rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). And if necessary, you can add [DNS filters of your choice](https://filterlists.com).

### Kindersicherung

Es gibt eine Reihe von Websites, auf die der Zugriff von einem von Kindern benutzten PC aus beschränkt werden sollte. Diese Aufgabe wird von der Kindersicherung wahrgenommen.

![Parental Control \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

Das Modul prüft den Inhalt der im Browser geöffneten Webseiten und filtert diejenigen mit für Kinder unerwünschten Inhalten: Bilder und Texte für Erwachsene, Schimpfwörter, Gewalt, Drogenpropaganda usw. Die Einstellungen der Kindersicherung sind passwortgeschützt, so dass das Kind die Einschränkungen nicht umgehen kann. Dieses Modul blockiert nicht nur die Weiterleitung auf unerwünschte Seiten, sondern kann auch die für Kinder ungeeigneten Links aus den Suchergebnissen entfernen.

In the Parental Control module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental Control_ module: you can select a specific Windows user to be protected by _Parental Control_ and set a password to protect AdGuard settings from change.

![Parental Control \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Browser-Assistent

![Browser Assistant \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

Von diesem Tab aus können Sie ganz einfach den AdGuard Browser-Assistenten installieren, dessen Hauptfunktion darin besteht, das Filtern direkt über den Browser zu verwalten. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
