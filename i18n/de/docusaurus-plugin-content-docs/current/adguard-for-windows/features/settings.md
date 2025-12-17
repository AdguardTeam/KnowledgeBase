---
title: Einstellungen
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock).

:::

_Einstellungen_ ist der Bereich, der die meiste Aufmerksamkeit erfordert. Hier können Sie die App so konfigurieren, dass sie genau Ihren Bedürfnissen entspricht: Sie blockiert nur das, was Sie stört, verwendet den DNS-Server des vertrauenswürdigen Anbieters, entfernt Cookies von Drittanbietern und so weiter.

### Allgemeine Einstellungen

Hier können Sie die Sprache und das Design (dunkel oder hell) festlegen, den Start von AdGuard beim Systemstart und automatische Aktualisierungen im Hintergrund aktivieren, den Aktualisierungskanal auswählen und die Häufigkeit der Filteraktualisierungen festlegen. Die Einstellungen sind auch der richtige Ort, wenn AdGuard für Windows nicht richtig funktioniert und das Support-Team Sie gebeten hat, _Fehlersuchprotokolle_ zu erfassen (/adguard-for-windows/solving-problems/adguard-logs.md).

![Einstellungen \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

Ganz unten auf dem Bildschirm finden Sie _Erweiterte Einstellungen_. Wenn Sie einige von ihnen unbedacht ändern, kann dies zu Problemen mit der Leistung führen, die Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsphäre gefährden. Deshalb empfehlen wir Ihnen, diesen Bereich nur zu öffnen, wenn Sie sicher sind, was Sie tun, oder wenn unser Support-Team Sie danach gefragt hat. Wenn Sie wissen möchten, was unter _Erweiterte Einstellungen_ eingestellt werden kann, lesen Sie den [entsprechenden Artikel](/adguard-for-windows/solving-problems/low-level-settings.md).

![Erweiterte Einstellungen \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

### Werbeblocker

Dies ist das Hauptmodul von AdGuard für Windows, das Werbung von den von Ihnen besuchten Websites und von den auf Ihrem Gerät installierten Apps entfernt. Um Werbung und datenschutzgefährdende Inhalte wie Banner, Pop-ups oder Tracker auszufiltern, verwendet AdGuard verschiedene Filter: Gruppen von Regeln mit einem ähnlichen Zweck, die mit einer [speziellen Syntax](/general/ad-filtering/create-own-filters) geschrieben werden. Um zu verstehen, was Filter sind und wie sie funktionieren, lesen Sie [diesen Artikel](/general/ad-filtering/how-ad-blocking-works).

![Werbeblocker \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

Im Werbeblocker-Modul können Sie:

- die automatische Aktivierung von sprachspezifischen Filtern ermöglichen,
- das Sperren von [Suchanzeigen und Eigenwerbung](/general/ad-filtering/search-ads) zu deaktivieren,
- Werbung im Startmenü unter Windows 11 deaktivieren,
- vorinstallierte Filter wie z. B. _AdGuard Basisfilter_ aktivieren,
- Filter aus der Liste installieren oder einen eigenen Filter hinzufügen, indem Sie auf die Schaltfläche _Filter hinzufügen_ klicken,
- Änderungen an bestehenden Regelgruppen über die Schaltfläche _Filter bearbeiten_ vornehmen,
- alle von den auf Ihrem Computer installierten Browsern und Anwendungen gesendeten Anfragen anzeigen, indem Sie auf die Schaltfläche _Protokoll filtern_ klicken. Von dort aus können Sie auch jede Anfrage sperren oder freigeben, indem Sie eine benutzerdefinierte Regel erstellen,
- einen Filter aus Ihren eigenen, manuell erstellten, importierten oder mit der Erweiterung Browser-Assistent erstellten Regeln zusammenstellen.

Bevor Sie mit dem manuellen Schreiben eigener Regeln beginnen, lesen Sie unsere detaillierte [Syntax-Anleitung](/general/ad-filtering/create-own-filters).

### Tracking-Schutz

Many websites gather information about their visitors, such as their IP addresses, browser and operating system details, screen resolution, and the webpage from which the user came or was redirected. Some websites use cookies to mark and identify your browser, save your personal settings and preferences. This allows them to “recognize” you on your next visit. Tracking protection safeguards your personal information from these data- and statistics-gathering systems.

![Tracking protection levels \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection1.png)

You can adjust the _Tracking Protection_ settings as needed. For example, you can prevent websites from receiving the search request that you used to find them on the Internet, automatically delete third- and first-party cookies, and disable location sharing in your browser, to prevent tracking of your whereabouts.

![Tracking protection custom features \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection2.png)

To learn everything about _Tracking protection_ and its many options, [read this article](/general/stealth-mode).

### Internetsicherheit

Browsing security gives strong protection against malicious and phishing websites. No, AdGuard for Windows is not an antivirus. It will neither stop the download of a virus when it’s already started, nor delete the already existing ones. But it will warn you if you’re about to proceed to a website whose domain has been added to our “untrusted sites” database, or to download a file from such website. You can find more information about how this module works in the [dedicated article](/general/browsing-security).

In this module, you can:

- enable notifications to block requests to malicious and phishing sites,
- activate sound notifications,
- agree to submit anonymous security-related info to the AdGuard server to help us keep the malicious and phishing websites database up to date.

![Browsing security \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browsing_security.png)

In case you want to learn more about Browsing security, read [this article](/general/browsing-security).

### DNS Protection

There are three significant reasons why you might want to explore the DNS protection settings. First, to avoid being tracked by your ISP. Every time you open a website, for example `google.com`, your browser sends a request to a DNS server to get the IP address of the website in return. Usually, the DNS server belongs to your ISP, which allows them to track your online activity. Second, to encrypt you DNS traffic. And the third one is to [block content on DNS level](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

In the DNS protection module of AdGuard for Windows, you can choose DNS servers from known DNS providers, including AdGuard DNS, which blocks ads and trackers, AdGuard DNS Family Protection, which also blocks adult content, or AdGuard DNS Non-filtering, which provides a secure and reliable connection but doesn’t filter anything. You can even add custom DNS servers and rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). If necessary, you can add [DNS filters of your choice](https://filterlists.com).

Starting with v7.20, you can also add filters by simply selecting them from a list of pre-built, trusted filters. They are grouped into four categories for your convenience:

- **General**: block ads and trackers
- **Regional**: block ads and trackers on language-specific websites
- **Security**: block phishing and unreliable websites
- **Other**: cover special use cases that don’t fit into the above categories

![DNS filters \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental control

There are several websites to which access should be restricted from a PC used by children. This task is accomplished by _Parental control_.

![Parental control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

The module checks the contents of webpages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental control settings are password-protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results.

In the _Parental control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental control_ module: you can select a specific Windows user to be protected by _Parental control_ and set a password to protect AdGuard settings from change.

### Browser-Assistent

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
