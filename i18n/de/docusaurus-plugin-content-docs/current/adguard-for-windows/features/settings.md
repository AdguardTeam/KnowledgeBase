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

Im DNS-Schutzmodul von AdGuard für Windows können Sie DNS-Server von bekannten DNS-Anbietern auswählen, darunter AdGuard DNS, das Werbung und Tracker blockiert, AdGuard DNS Familienschutz, das auch Inhalte für Erwachsene blockiert, oder AdGuard DNS Ohne Filterung, das eine sichere und zuverlässige Verbindung bietet, aber nichts filtert. Sie können sogar benutzerdefinierte DNS-Server und -Regeln mit der [DNS-Regelsyntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/) hinzufügen. Bei Bedarf können Sie [DNS-Filter Ihrer Wahl](https://filterlists.com) hinzufügen.

Ab Version 7.20 können Sie Filter auch hinzufügen, indem Sie sie einfach aus einer Liste vorgefertigter, vertrauenswürdiger Filter auswählen. Sie sind in vier Kategorien unterteilt:

- **Allgemein**: Sperren von Werbung und Trackern
- **Regional**: Sperren von Werbung und Trackern auf sprachspezifischen Websites
- **Sicherheit**: Sperren von Phishing- und nicht vertrauenswürdigen Websites
- **Sonstiges**: für spezielle Anwendungsfälle, die nicht in die oben genannten Kategorien passen

![DNS-Filter \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Kindersicherung

Es gibt eine Reihe von Websites, auf die der Zugriff von einem von Kindern benutzten PC aus beschränkt werden sollte. Diese Aufgabe wird von der Kindersicherung wahrgenommen.

![Kindersicherung \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

Das Modul prüft den Inhalt der im Browser geöffneten Webseiten und filtert diejenigen mit für Kinder unerwünschten Inhalten: Bilder und Texte für Erwachsene, Schimpfwörter, Gewalt, Drogenpropaganda usw. Die Einstellungen der Kindersicherung sind passwortgeschützt, so dass das Kind die Einschränkungen nicht umgehen kann. Dieses Modul blockiert nicht nur die Weiterleitung auf unerwünschte Seiten, sondern kann auch die für Kinder ungeeigneten Links aus den Suchergebnissen entfernen.

Im Modul _Kindersicherung_ können Sie die _Sichere Suche_ aktivieren und die _Sperrliste_ und die _Positivliste_ verwalten, um die Funktionsweise dieser Option anzupassen. Sie können auch das Kontrollkästchen _Herunterladen von ausführbaren Dateien sperren_ aktivieren, um zu verhindern, dass Ihr Kind Software auf den Computer herunterlädt und installiert. Im Modul _Kindersicherung_ gibt es zwei weitere Optionen: Sie können einen bestimmten Windows-Benutzer auswählen, der durch die _Kindersicherung_ geschützt werden soll, und ein Passwort festlegen, um die Einstellungen vor Änderungen zu schützen.

![Kindersicherung \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Browser-Assistent

![Browser-Assistent \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

Von diesem Tab aus können Sie ganz einfach den AdGuard Browser-Assistenten installieren, dessen Hauptfunktion darin besteht, das Filtern direkt über den Browser zu verwalten. Wie Sie damit arbeiten und was zu tun ist, wenn es für Ihren Browser keinen Browser-Assistenten gibt, wird in einem [separaten Artikel](/adguard-for-windows/browser-assistant.md) näher erläutert.
