---
title: Einstellungen
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

_Einstellungen_ ist der Bereich, der die meiste Aufmerksamkeit erfordert. Hier können Sie die App so konfigurieren, dass sie genau Ihren Bedürfnissen entspricht: Sie blockiert nur das, was Sie stört, verwendet den DNS-Server des vertrauenswürdigen Anbieters, entfernt Cookies von Drittanbietern und so weiter.

![Einstellungen \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### Allgemeine Einstellungen

Hier können Sie die Sprache und das Design (dunkel oder hell) festlegen, den Start von AdGuard beim Systemstart und automatische Aktualisierungen im Hintergrund aktivieren, den Aktualisierungskanal auswählen und die Häufigkeit der Filteraktualisierungen festlegen. Die Einstellungen sind auch der richtige Ort, wenn AdGuard für Windows nicht richtig funktioniert und das Support-Team Sie gebeten hat, _Fehlersuchprotokolle_ zu erfassen (/adguard-for-windows/solving-problems/adguard-logs.md).

![Erweiterte Einstellungen \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

Ganz unten auf dem Bildschirm finden Sie _Erweiterte Einstellungen_. Wenn Sie einige von ihnen unbedacht ändern, kann dies zu Problemen mit der Leistung führen, die Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsphäre gefährden. Deshalb empfehlen wir Ihnen, diesen Bereich nur zu öffnen, wenn Sie sicher sind, was Sie tun, oder wenn unser Support-Team Sie danach gefragt hat. Wenn Sie wissen möchten, was unter _Erweiterte Einstellungen_ eingestellt werden kann, lesen Sie den [entsprechenden Artikel](/adguard-for-windows/solving-problems/low-level-settings.md).

### Werbeblocker

Dies ist das Hauptmodul von AdGuard für Windows, das Werbung von den von Ihnen besuchten Websites und von den auf Ihrem Gerät installierten Apps entfernt. Um Werbung und datenschutzgefährdende Inhalte wie Banner, Pop-ups oder Tracker auszufiltern, verwendet AdGuard verschiedene Filter: Gruppen von Regeln mit einem ähnlichen Zweck, die mit einer [speziellen Syntax](/general/ad-filtering/create-own-filters) geschrieben werden. Um zu verstehen, was Filter sind und wie sie funktionieren, lesen Sie [diesen Artikel](/general/ad-filtering/how-ad-blocking-works).

![Werbeblocker \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

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

### Privatsphäre

Viele Websites sammeln Informationen über Personen, die sie besuchen, z. B. ihre IP-Adressen, Informationen über den Browser und das installierte Betriebssystem, die Bildschirmauflösung und sogar darüber, von welcher Seite die Benutzer:innen kamen oder weitergeleitet wurden. Einige Webseiten verwenden Cookies, um den Browser zu kennzeichnen und Ihre persönlichen Einstellungen und Vorlieben zu speichern oder Sie bei Ihrem nächsten Besuch wiederzuerkennen. Das Privatsphäre-Modul schützt Ihre persönlichen Informationen vor solchen Daten- und Statistiksammelsystemen.

![Privatsphäre \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Sie können die Funktionsweise dieses Moduls flexibel anpassen: Sie können z. B. verhindern, dass die Website die Suchanfrage erhält, mit der Sie sie im Internet gefunden haben, Sie können Cookies von Drittanbietern und der Website selbst automatisch löschen und Sie können die Standortfreigabe in Ihrem Browser deaktivieren, die dazu verwendet werden kann, Ihren Aufenthaltsort zu verfolgen.

Um alles über das Modul Tracking-Schutz und seine Optionen zu erfahren, [lesen Sie diesen Artikel](/general/stealth-mode).

### Internetsicherheit

Internetsicherheit bietet starken Schutz vor bösartigen und Phishing-Websites. AdGuard für Windows ist natürlich kein Antivirenprogramm. Die App kann weder das Herunterladen eines Virus stoppen, wenn es bereits begonnen hat, noch bereits vorhandene Viren löschen. Sie werden jedoch gewarnt, wenn Sie eine Website aufrufen oder eine Datei von einer Website herunterladen, deren Domain in unserer Datenbank „Nicht vertrauenswürdige Websites“ aufgeführt ist. Weitere Informationen über die Funktionsweise dieses Moduls finden Sie im [entsprechenden Artikel](/general/browsing-security).

In diesem Modul können Sie:

- Benachrichtigungen aktivieren, um Anfragen an bösartige und Phishing-Seiten zu sperren,
- akustische Benachrichtigungen aktivieren,
- sich bereit erklären, anonyme sicherheitsrelevante Informationen an den AdGuard-Server zu übermitteln, damit wir die Datenbank mit bösartigen und Phishing-Websites auf dem neuesten Stand halten können.

![Internetsicherheit \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

Wenn Sie mehr über Internetsicherheit erfahren möchten, lesen Sie [diesen Artikel](/general/browsing-security).

### DNS-Schutz

Es gibt drei wichtige Gründe, warum Sie die DNS-Schutzeinstellungen untersuchen sollten. Erstens, um zu vermeiden, dass Ihr ISP (Internetdiensteanbieter) Sie verfolgt. Jedes Mal, wenn Sie eine Website öffnen, zum Beispiel „google.com“, sendet Ihr Browser eine Anfrage an einen DNS-Server, um die IP-Adresse der Website zu erhalten. In der Regel gehört der DNS-Server zu Ihrem Internetanbieter, der damit Ihre Online-Aktivitäten verfolgen kann. Zweitens, um Ihren DNS-Verkehr zu verschlüsseln. Und die dritte Möglichkeit ist das [Sperren von Inhalten auf DNS-Ebene](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS-Schutz \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

In the DNS protection module of AdGuard for Windows, you can choose DNS servers from known DNS providers, including AdGuard DNS, which blocks ads and trackers, AdGuard DNS Family Protection, which also blocks adult content, or AdGuard DNS Non-filtering, which provides a secure and reliable connection but doesn’t filter anything. You can even add custom DNS servers and rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). If necessary, you can add [DNS filters of your choice](https://filterlists.com).

Starting with v7.20, you can also add filters by simply selecting them from a list of pre-built, trusted filters. They are grouped into four categories for your convenience:

- **General**: block ads and trackers
- **Regional**: block ads and trackers on language-specific websites
- **Security**: block phishing and unreliable websites
- **Other**: cover special use cases that don’t fit into the above categories

![DNS filters \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental Control

There are several websites to which access should be restricted from a PC used by children. This task is accomplished by Parental Control.

![Parental Control \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

The module checks the contents of web pages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental Control settings are password-protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results.

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental Control_ module: you can select a specific Windows user to be protected by _Parental Control_ and set a password to protect AdGuard settings from change.

![Parental Control \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Browser-Assistent

![Browser Assistant \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
