---
title: Funktionsübersicht
sidebar_position: 1
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

AdGuard für Windows ist ein einfach zu bedienendes Tool, das lästige Banner, Pop-ups, Videoanzeigen und Tracker blockiert. Aber das ist noch nicht alles: Es hilft Ihnen, Datenverkehr zu sparen, Webseiten schneller zu laden und Ihren Computer vor unerwünschten und potenziell bösartigen Websites zu schützen. AdGuard schützt Sie auch vor Phishing-Websites und sorgt dafür, dass Ihre Kinder keinen Zugang zu ungeeigneten Inhalten haben.

## Startseite

![Hauptbildschirm *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/home-screen.png)

Sobald Sie AdGuard für Windows starten, wird der Hauptbildschirm der App angezeigt. Das auffälligste Detail ist die Schaltfläche *Schutz deaktiviert/Schutz ist aktiviert*. Auf dieser Seite können Sie auch Statistiken über blockierte Werbung, Tracker und Bedrohungen einsehen, die aktuelle Version der App abrufen oder die App aktualisieren. Außerdem gibt es vier Tabs in der oberen rechten Ecke: *Einstellungen*, *Support*, *Lizenz* und *Über*. Jeder dieser Punkte ist es wert, gesondert behandelt zu werden.

## Einstellungen

![Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

*Einstellungen* ist der Bereich, der die meiste Aufmerksamkeit erfordert. Hier können Sie die App so konfigurieren, dass sie genau Ihren Bedürfnissen entspricht: Sie blockiert nur das, was Sie stört, verwendet den DNS-Server des vertrauenswürdigen Anbieters, entfernt Cookies von Drittanbietern und so weiter.

### Allgemeine Einstellungen

Hier können Sie die Sprache und das Design (dunkel oder hell) festlegen, den Start von AdGuard beim Systemstart und automatische Aktualisierungen im Hintergrund aktivieren, den Aktualisierungskanal auswählen und die Häufigkeit der Filteraktualisierungen festlegen. Die Einstellungen sind auch der richtige Ort, wenn AdGuard für Windows nicht richtig funktioniert und das Support-Team Sie gebeten hat, [*Protokolle* zu exportieren](../solving-problems/adguard-logs).

![Erweiterte Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

Ganz unten auf dem Bildschirm finden Sie *Erweiterte Einstellungen*. Wenn Sie einige von ihnen unbedacht ändern, kann dies zu Problemen mit der Leistung führen, die Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsphäre gefährden. Deshalb empfehlen wir Ihnen, diesen Bereich nur zu öffnen, wenn Sie sicher sind, was Sie tun, oder wenn unser Support-Team Sie danach gefragt hat. Wenn Sie wissen möchten, was unter *Erweiterte Einstellungen* eingestellt werden kann, lesen Sie den [bezogenen Artikel](../solving-problems/low-level-settings).

### Werbeblocker

Dies ist das Hauptmodul von AdGuard für Windows, das Werbung von den von Ihnen besuchten Websites und von den auf Ihrem Gerät installierten Apps entfernt. Um Werbung und datenschutzgefährdende Inhalte wie Banner, Pop-ups oder Tracker herauszufiltern, verwendet AdGuard verschiedene Filter: Gruppen von Regeln mit einem ähnlichen Zweck, die in einer [speziellen Syntax](/general/ad-filtering/create-own-filters) geschrieben werden. Um zu verstehen, was Filter sind und wie sie funktionieren, lesen Sie [diesen Artikel](/general/ad-filtering/how-ad-blocking-works).

![Werbeblocker *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/ad-blocker.png)

Im Werbeblocker-Modul können Sie:

- die automatische Aktivierung von sprachspezifischen Filtern ermöglichen,
- das Sperren von [Werbung in Suchmaschinen und Eigenwerbung zulassen](/general/ad-filtering/search-ads) deaktivieren,
- vorinstallierte Filter wie den *AdGuard Basisfilter* aktivieren,
- Filter aus der Liste installieren oder einen eigenen Filter hinzufügen, indem Sie auf die Schaltfläche *Filter hinzufügen* klicken,
- Änderungen an bestehenden Regelgruppen über die Schaltfläche *Filter bearbeiten* vornehmen,
- alle von den auf Ihrem Computer installierten Browsern und Apps gesendeten Anfragen sehen, indem Sie auf die Schaltfläche *Filter-Protokoll* klicken. Von dort aus können Sie auch jede Anfrage sperren oder freigeben, indem Sie eine benutzerdefinierte Regel erstellen,
- einen Filter aus Ihren eigenen, manuell erstellten, importierten oder mit der Erweiterung Browser-Assistent erstellten Regeln zusammenstellen.

Bevor Sie mit der manuellen Erstellung Ihrer eigenen Regeln beginnen, lesen Sie unsere ausführliche [Syntax-Anleitung](/general/ad-filtering/create-own-filters).

### Privatsphäre

Viele Websites sammeln Informationen über Personen, die sie besuchen, z. B. ihre IP-Adressen, Informationen über den Browser und das installierte Betriebssystem, die Bildschirmauflösung und sogar darüber, von welcher Seite die Benutzer:innen kamen oder weitergeleitet wurden. Einige Webseiten verwenden Cookies, um den Browser zu kennzeichnen und Ihre persönlichen Einstellungen und Vorlieben zu speichern oder Sie bei Ihrem nächsten Besuch wiederzuerkennen. Das Privatsphäre-Modul schützt Ihre persönlichen Informationen vor solchen Daten- und Statistiksammelsystemen.

![Privatsphäre *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Sie können die Funktionsweise dieses Moduls flexibel anpassen: Sie können z. B. verhindern, dass die Website die Suchanfrage erhält, mit der Sie sie im Internet gefunden haben, Sie können Cookies von Drittanbietern und der Website selbst automatisch löschen und Sie können die Standortfreigabe in Ihrem Browser deaktivieren, die dazu verwendet werden kann, Ihren Aufenthaltsort zu verfolgen.

Um alles über das Privatsphäre-Modul und seine vielen Optionen zu erfahren, [lesen Sie diesen Artikel](/general/stealth-mode).

### Internetsicherheit

Internetsicherheit bietet starken Schutz vor bösartigen und Phishing-Websites. AdGuard für Windows ist natürlich kein Antivirenprogramm. Die App kann weder das Herunterladen eines Virus stoppen, wenn es bereits begonnen hat, noch bereits vorhandene Viren löschen. Sie werden jedoch gewarnt, wenn Sie eine Website aufrufen oder eine Datei von einer Website herunterladen, deren Domain in unserer Datenbank „Nicht vertrauenswürdige Websites“ aufgeführt ist. Weitere Informationen über die Funktionsweise dieses Moduls finden Sie in dem [speziellen Artikel](/general/browsing-security).

In diesem Modul können Sie:

- Benachrichtigungen aktivieren, um Anfragen an bösartige und Phishing-Seiten zu sperren,
- akustische Benachrichtigungen aktivieren,
- sich bereit erklären, anonyme sicherheitsrelevante Informationen an den AdGuard-Server zu übermitteln, damit wir die Datenbank mit bösartigen und Phishing-Websites auf dem neuesten Stand halten können.

![Internetsicherheit *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

Wenn Sie mehr über Internetsicherheit erfahren möchten, lesen Sie [diesen Artikel](/general/browsing-security).

### DNS-Schutz

Es gibt drei wichtige Gründe, warum Sie die DNS-Schutzeinstellungen untersuchen sollten. Erstens, um zu vermeiden, dass Ihr ISP (Internetdiensteanbieter) Sie verfolgt. Every time you open a website, for example `google.com`, your browser sends a request to a DNS server to get the IP address of the website in return. In der Regel gehört der DNS-Server zu Ihrem Internetanbieter, der damit Ihre Online-Aktivitäten verfolgen kann. Zweitens, um Ihren DNS-Verkehr zu verschlüsseln. Und der dritte Grund ist, dass [man Inhalte auf DNS-Ebene blockieren kann](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS-Schutz *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

Im DNS-Schutzmodul können Sie die DNS-Server von bekannten DNS-Anbietern auswählen, darunter [AdGuard DNS](https://adguard-dns.io/kb/), der Werbung und Tracker blockiert, AdGuard DNS Familienschutz, der zusätzlich Inhalte für Erwachsene sperrt, oder AdGuard DNS Ohne Filterung, der eine sichere und zuverlässige Verbindung bietet, aber nichts filtert. Sie können sogar eigene DNS-Server hinzufügen. Außerdem gibt es die Möglichkeit, benutzerdefinierte Regeln mit der [DNS-Regelsyntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/) hinzuzufügen. Und wenn nötig, können Sie [DNS-Filter Ihrer Wahl](https://filterlists.com) hinzufügen.

### Kindersicherung

Es gibt eine Reihe von Websites, auf die der Zugriff von einem von Kindern benutzten PC aus beschränkt werden sollte. Diese Aufgabe wird von der Kindersicherung wahrgenommen.

![Kindersicherung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

Das Modul prüft den Inhalt der im Browser geöffneten Webseiten und filtert diejenigen mit für Kinder unerwünschten Inhalten: Bilder und Texte für Erwachsene, Schimpfwörter, Gewalt, Drogenpropaganda usw. Die Einstellungen der Kindersicherung sind passwortgeschützt, so dass das Kind die Einschränkungen nicht umgehen kann. Dieses Modul blockiert nicht nur die Weiterleitung auf unerwünschte Seiten, sondern kann auch die für Kinder ungeeigneten Links aus den Suchergebnissen entfernen.

Im Modul Kindersicherung können Sie die *Sichere Suche* aktivieren und die *Sperrliste* und die *Positivliste* verwalten, um die Funktionsweise dieser Option anzupassen. Sie können auch das Kästchen *Herunterladen von ausführbaren Dateien sperren* aktivieren, um zu verhindern, dass Ihr Kind Software auf den Computer herunterlädt und installiert. Im Modul *Kindersicherung* gibt es zwei weitere Optionen: Sie können einen bestimmten Windows-Benutzer auswählen, der durch die *Kindersicherung* geschützt werden soll, und ein Kennwort festlegen, um die AdGuard-Einstellungen vor Änderungen zu schützen.

![Kindersicherung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Browser-Assistent

![Browser-Assistent *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

Von diesem Tab aus können Sie ganz einfach den AdGuard Browser-Assistenten installieren, dessen Hauptfunktion darin besteht, das Filtern direkt über den Browser zu verwalten. Wie Sie damit arbeiten und was Sie tun können, wenn es für Ihren Browser keinen Browser-Assistenten gibt, haben wir im [anderen Artikel](../browser-assistant) erklärt.

## Erweiterungen

AdGuard kann als [Benutzerskriptverwaltung](/general/userscripts) die Funktionalität einer Website erheblich erweitern. Sie können ihre eigenen Skripte hinzufügen und bestehende Skripte verwalten.

![Erweiterungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/userscripts.png)

**Benutzerskripte automatisch erkennen**

Wenn diese Option aktiviert ist, definiert AdGuard automatisch Browser-Anfragen an Benutzerskripte und schlägt deren Installation vor. Andernfalls können die Erweiterungen (Benutzerskripte) heruntergeladen und manuell installiert werden.

Die folgenden Erweiterungen werden mit AdGuard installiert:

![Vorinstallierte Benutzerskripte *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/preinstalled-userscripts.png)

**AdGuard-Assistent**

Assistent ist ein älterer Assistent, den Sie verwenden können, wenn der [neue Assistent](../browser-assistant) für Ihren Browser nicht verfügbar ist. Der Name dieser Erweiterung ist durchaus beabsichtigt: Sie unterstützt den Benutzer:innen bei der Änderung grundlegender AdGuard-Einstellungen direkt im Browser, ohne dass er die App selbst öffnen muss. Assistent funktioniert mit allen mit Microsoft Windows kompatiblen Browsern. Außerdem wird das AdGuard Assistent-Symbol nicht auf Websites angezeigt, die als Ausschlüsse aufgeführt sind, sowie auf bestimmten Seiten, bei denen die Gefahr besteht, dass falsche Inhalte angezeigt werden.

**AdGuard Extra**

Dies ist eine benutzerdefinierte Erweiterung, die entwickelt wurde, um die Technik der Wiedereinführung blockierter Werbung zu bekämpfen — die so genannte Umgehung von Werbeblockern/Ad Reinjection. Beides sind fortschrittliche Anti-Werbeblocker-Methoden, die sich bei den Werbetreibenden immer größerer Beliebtheit erfreuen.

AdGuard Extra ist im Wesentlichen ein Miniprogramm, das die Funktionsweise von Seiten so verändert, dass es für Websites sehr viel schwieriger wird, die oben genannten Methoden zur Umgehung von Blockern zu verwenden.

**AdGuard Pop-up-Blocker**

Diese Erweiterung verhindert das Öffnen von Pop-up-Fenstern, wenn Sie Webseiten aufrufen. Einige Pop-ups werden als nützlich erachtet — sie können Einstellungen für die Verwaltung der Website oder zusätzliche Referenzinformationen enthalten, die beim Anklicken eines Links angezeigt werden. Aus diesem Grund können Sie den Blocker bei Bedarf ausschalten. This extension doesn’t work on websites added to the AdGuard exceptions list either. Sie ist standardmäßig ausgeschaltet, kann aber in den Einstellungen aktiviert werden. Ausführlichere Informationen über diese Erweiterung finden Sie in unserer Wissensdatenbank.

**Web of Trust**

Mit Web of Trust können Sie den Ruf jeder Website auf der Grundlage von Nutzermeinungen einsehen. Die Website wird nach einer Reihe spezifischer Kriterien bewertet: Vertrauen, Sicherheit usw. Diese Erweiterung ist standardmäßig deaktiviert, kann aber in den Einstellungen aktiviert werden. Bitte beachten Sie, dass diese Erweiterung nicht von AdGuard entwickelt wurde.

### Netzwerk

Das vorletzte Modul ist der Netzwerkfilterung gewidmet, und hier finden Sie weitere netzwerkbezogene Optionen. Zwei davon sind standardmäßig aktiviert: *Verkehrsfilterung aktivieren* und *HTTPS-Protokoll filtern*. Dies sind wichtige zusätzliche Vorsichtsmaßnahmen, um Ihren Webspace besser zu filtern. Die meisten Websites verwenden jetzt HTTPS, und das Gleiche gilt für die Werbung. Von vielen Websites, wie youtube.com, facebook.com und twitter.com, ist es unmöglich, Werbung ohne HTTPS-Filterung zu entfernen. Lassen Sie also die Funktion *HTTPS-Protokoll filtern* aktiviert, es sei denn, Sie haben einen triftigen Grund, dies nicht zu tun.

![Netzwerkeinstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

In diesem Modul können Sie das Kontrollkästchen „AdGuard als HTTP-Proxy verwenden“ aktivieren, um AdGuard als regulären HTTP-Proxy zu verwenden, der den gesamten Datenverkehr filtert. Sie können auch die Funktion *Websites mit EV-Zertifikaten filtern* aktivieren. Extended Validation (EV) SSL-Zertifikate bieten eine stärkere Sicherheitsgarantie; die Inhaber solcher Websites müssen ein gründliches und weltweit standardisiertes Identitätsprüfungsverfahren durchlaufen, das durch EV-Richtlinien definiert ist. Aus diesem Grund vertrauen einige Benutzer Websites mit solchen Zertifikaten und ziehen es vor, sie nicht zu filtern.

Schließlich gibt es noch einen Abschnitt mit Proxy-Einstellungen. Dort können Sie angeben, welchen Proxyserver AdGuard verwenden soll, um Filter zu aktualisieren, neue Versionen zu erhalten usw.

### AdGuard VPN

Der letzte Abschnitt ist AdGuard VPN gewidmet, einem nützlichen Tool, das Sicherheit und Anonymität beim Surfen im Internet bietet. Sie können es herunterladen, indem Sie auf die entsprechende Schaltfläche klicken. Oder besuchen Sie die AdGuard VPN Website, indem Sie auf die Schaltfläche *Startseite* klicken.

Wie funktioniert AdGuard VPN? Ohne auf technische Details einzugehen, können wir sagen, dass VPN einen sicheren verschlüsselten Tunnel zwischen dem Computer oder Mobilgerät und einem entfernten VPN-Server herstellt. Auf diese Weise bleibt die Vertraulichkeit der Daten und Ihre Anonymität gewahrt, da ein Dritter nur die IP-Adresse des VPN-Servers und nicht Ihre tatsächliche IP-Adresse sieht.

**Was AdGuard VPN leistet:**

- verbirgt Ihren tatsächlichen Aufenthaltsort und hilft Ihnen, anonym zu bleiben
- ändert Ihre IP-Adresse, um Ihre Daten vor Verfolgung zu schützen
- verschlüsselt Ihren Datenverkehr, um ihn für Dritte unlesbar zu machen
- lässt Sie konfigurieren, wo VPN verwendet werden soll und wo nicht (Ausschlussfunktion)

Weitere Informationen über AdGuard VPN finden Sie in der [AdGuard VPN Wissensdatenbank](https://adguard-vpn.com/kb/).

## Andere Optionen

AdGuard verfügt über weitere nützliche Funktionen, die erwähnenswert sind, da sie die Nutzung der App erheblich vereinfachen.

### Support

![Support *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/support.png)

Wenn Sie auf den Tab „Support“ klicken, öffnet sich ein Dialogfeld, in dem Sie einen Fehler melden, eine Funktionsanfrage stellen oder einfach Ihre Meinung über das Produkt mitteilen können.

### Lizenz

![Lizenz *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/license.png)

Auf diesem Tab finden Sie Informationen zu Ihrer Lizenz. Hier können Sie:

- den Lizenztyp (Nightly-Build, Beta oder Release), die Anzahl der Geräte, die gleichzeitig mit AdGuard verbunden werden können, und das Ablaufdatum der Lizenz herausfinden;
- zur Seite für den Lizenzerwerb zu gelangen und eine Lizenz zu aktivieren, zurückzusetzen oder wiederherzustellen.

### Über uns

![Über *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/about.png)

Zusätzlich zu den Informationen über die aktuelle Version des Programms bietet dieser Tab einige nützliche Links zu den Seiten Lizenzvereinbarung, Datenschutzerklärung, Danksagungen, Diskussionen und Versionsverlauf.

### Auf Aktualisierungen prüfen

![Auf Aktualisierungen prüfen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/check-updates.png)

Um zu prüfen, ob Filter und Benutzerskripte aktualisiert wurden, klicken Sie auf das Symbol mit den rotierenden Pfeilen in der oberen rechten Ecke des Hauptbildschirms der App.

### Infobereich der Taskleiste

Um Ihnen die Navigation durch die Menüs des AdGuard zu ersparen, sind viele der häufig verwendeten Optionen und Einstellungen über den Infobereich der Taskleiste verfügbar. Um das Menü aufzurufen, klicken Sie mit der rechten Maustaste auf das AdGuard-Symbol in der Taskleiste. Es bietet Ihnen die folgenden Optionen:

- Schutz aktivieren
- Schutz deaktivieren: vollständig oder für 30 Sekunden
- *Einstellungen* aufrufen
- die Menüs *Extras* und *Erweitert* öffnen
- auf Filteraktualisierungen prüfen
- nach App-Aktualisierungen suchen
- die letzte Pop-up-Meldung aufrufen
- zu den Abschnitten *Support* und *Über* gelangen
- AdGuard schließen, aber weiterhin filtern
- AdGuard beenden
