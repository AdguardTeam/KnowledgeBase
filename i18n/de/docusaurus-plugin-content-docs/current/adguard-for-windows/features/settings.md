---
title: Einstellungen
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock).

:::

_Einstellungen_ ist der Bereich, der die meiste Aufmerksamkeit erfordert. Hier können Sie die App so konfigurieren, dass sie genau Ihren Bedürfnissen entspricht: Sie blockiert nur das, was Sie stört, verwendet den DNS-Server des vertrauenswürdigen Anbieters, entfernt Cookies von Drittanbietern und so weiter.

### General settings

Here you can set the language and theme (Dark or Light), enable AdGuard launching at system start-up and silent automatic updates, choose the update channel and filter update check interval. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

At the very bottom of the screen you will find _Advanced Settings_. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

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

Viele Websites sammeln Informationen über Personen, die sie besuchen, z. B. ihre IP-Adressen, Informationen über den Browser und das installierte Betriebssystem, die Bildschirmauflösung und sogar darüber, von welcher Seite die Benutzer:innen kamen oder weitergeleitet wurden. Einige Webseiten verwenden Cookies, um den Browser zu kennzeichnen und Ihre persönlichen Einstellungen und Vorlieben zu speichern oder Sie bei Ihrem nächsten Besuch wiederzuerkennen. _Tracking-Schutz_ schützt Ihre persönlichen Daten vor solchen Daten- und Statistikerfassungssystemen.

![Tracking-Schutz \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection.png)

You can flexibly adjust the work of _Tracking protection_: for instance, you can prohibit the website to receive the search request you used to find it on the Internet, automatically delete both third-party and website’s own cookies, and disable location sharing in your browser that can be used to track your whereabouts.

To learn everything about _Tracking protection_ and its many options, [read this article](/general/stealth-mode).

### Internetsicherheit

Internetsicherheit bietet starken Schutz vor bösartigen und Phishing-Websites. AdGuard für Windows ist natürlich kein Antivirenprogramm. Die App kann weder das Herunterladen eines Virus stoppen, wenn es bereits begonnen hat, noch bereits vorhandene Viren löschen. Sie werden jedoch gewarnt, wenn Sie eine Website aufrufen oder eine Datei von einer Website herunterladen, deren Domain in unserer Datenbank „Nicht vertrauenswürdige Websites“ aufgeführt ist. Weitere Informationen über die Funktionsweise dieses Moduls finden Sie im [entsprechenden Artikel](/general/browsing-security).

In diesem Modul können Sie:

- Benachrichtigungen aktivieren, um Anfragen an bösartige und Phishing-Seiten zu sperren,
- akustische Benachrichtigungen aktivieren,
- sich bereit erklären, anonyme sicherheitsrelevante Informationen an den AdGuard-Server zu übermitteln, damit wir die Datenbank mit bösartigen und Phishing-Websites auf dem neuesten Stand halten können.

![Internetsicherheit \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

Wenn Sie mehr über Internetsicherheit erfahren möchten, lesen Sie [diesen Artikel](/general/browsing-security).

### DNS-Schutz

Es gibt drei wichtige Gründe, warum Sie die DNS-Schutzeinstellungen untersuchen sollten. Erstens, um zu vermeiden, dass Ihr ISP (Internetdiensteanbieter) Sie verfolgt. Jedes Mal, wenn Sie eine Website öffnen, zum Beispiel „google.com“, sendet Ihr Browser eine Anfrage an einen DNS-Server, um die IP-Adresse der Website zu erhalten. In der Regel gehört der DNS-Server zu Ihrem Internetanbieter, der damit Ihre Online-Aktivitäten verfolgen kann. Zweitens, um Ihren DNS-Verkehr zu verschlüsseln. Und die dritte Möglichkeit ist das [Sperren von Inhalten auf DNS-Ebene](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS-Schutz \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

Im DNS-Schutzmodul von AdGuard für Windows können Sie DNS-Server von bekannten DNS-Anbietern auswählen, darunter AdGuard DNS, das Werbung und Tracker blockiert, AdGuard DNS Familienschutz, das auch Inhalte für Erwachsene blockiert, oder AdGuard DNS Ohne Filterung, das eine sichere und zuverlässige Verbindung bietet, aber nichts filtert. Sie können sogar benutzerdefinierte DNS-Server und -Regeln mit der [DNS-Regelsyntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/) hinzufügen. Bei Bedarf können Sie [DNS-Filter Ihrer Wahl](https://filterlists.com) hinzufügen.

Ab Version 7.20 können Sie Filter auch hinzufügen, indem Sie sie einfach aus einer Liste vorgefertigter, vertrauenswürdiger Filter auswählen. Sie sind in vier Kategorien unterteilt:

- **Allgemein**: Sperren von Werbung und Trackern
- **Regional**: Sperren von Werbung und Trackern auf sprachspezifischen Websites
- **Sicherheit**: Sperren von Phishing- und nicht vertrauenswürdigen Websites
- **Sonstiges**: für spezielle Anwendungsfälle, die nicht in die oben genannten Kategorien passen

![DNS-Filter \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental control

Es gibt eine Reihe von Websites, auf die der Zugriff von einem von Kindern benutzten PC aus beschränkt werden sollte. This task is accomplished by _Parental control_.

![Parental control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

Das Modul prüft den Inhalt der im Browser geöffneten Webseiten und filtert diejenigen mit für Kinder unerwünschten Inhalten: Bilder und Texte für Erwachsene, Schimpfwörter, Gewalt, Drogenpropaganda usw. Parental control settings are password-protected so that the child is not able to go round the restrictions. Dieses Modul blockiert nicht nur die Weiterleitung auf unerwünschte Seiten, sondern kann auch die für Kinder ungeeigneten Links aus den Suchergebnissen entfernen.

In the _Parental control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. Sie können auch das Kontrollkästchen _Herunterladen von ausführbaren Dateien sperren_ aktivieren, um zu verhindern, dass Ihr Kind Software auf den Computer herunterlädt und installiert. There are two more options in the _Parental control_ module: you can select a specific Windows user to be protected by _Parental control_ and set a password to protect AdGuard settings from change.

### Browser-Assistent

![Browser-Assistent \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

Von diesem Tab aus können Sie ganz einfach den AdGuard Browser-Assistenten installieren, dessen Hauptfunktion darin besteht, das Filtern direkt über den Browser zu verwalten. Wie Sie damit arbeiten und was zu tun ist, wenn es für Ihren Browser keinen Browser-Assistenten gibt, wird in einem [separaten Artikel](/adguard-for-windows/browser-assistant.md) näher erläutert.
