---
title: Funktionsübersicht
sidebar_position: 6
---


:::info

Dieser Artikel behandelt AdGuard für iOS, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Wenn Sie im App Store nach AdGuard suchen, finden Sie zwei Apps: [AdGuard](https://itunes.apple.com/app/id1047223162) und [AdGuard Pro](https://itunes.apple.com/app/id1126386264). Diese Apps dienen zum Blockieren von Werbung und Trackern in Safari, anderen Browsern und Apps sowie zur Verwaltung des DNS-Schutzes. Lassen Sie sich nicht von den Namen in die Irre führen, beide Apps blockieren Werbung auf Smartphones und Tablets von Apple. Früher unterschieden sie sich aufgrund der sich ändernden Überprüfungsrichtlinien im App Store in der Funktionalität, aber jetzt sind diese beiden Apps [im Grunde gleich](https://adguard.com/en/blog/updating-adguard-pro-for-ios.html). Wenn Sie also AdGuard Pro erworben haben, brauchen Sie AdGuard nicht herunterzuladen und dort eine Lizenz zu erwerben, und umgekehrt.

## Funktionen {#features}

AdGuard und AdGuard Pro für iOS bieten zahlreiche Funktionen zum Blockieren von Werbung und Trackern sowie zum Erstellen von Benutzerregeln, sowohl in Safari als auch auf Netzwerkebene.

### Inhaltsblocker {#content-blockers}

Inhaltsblocker dienen als „Container“ für Filterregeln, die die eigentliche Aufgabe des Blockierens von Werbung und Tracking übernehmen. AdGuard für iOS enthält sechs Inhaltsblocker: General, Privacy, Social, Security, Custom und Other. Zuvor erlaubte Apple nur, dass jeder Inhaltsblocker maximal 50.000 Filterregeln enthält, aber mit der Veröffentlichung von iOS 15 wurde die Obergrenze auf 150.000 Regeln angehoben.

Alle Inhaltsblocker, deren Status, welche thematischen Filter sie derzeit enthalten und die Gesamtzahl der verwendeten Filterregeln finden Sie auf dem entsprechenden Bildschirm in *Erweiterte Einstellungen* (tippen Sie auf das Zahnradsymbol unten rechts → *Allgemein* → *Erweiterte Einstellungen* → *Inhaltsblocker*).

![Inhaltsblocker *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Lassen Sie alle Inhaltsblocker aktiviert, um die beste Filterqualität zu erzielen.

:::

### Filter {#filters}

Die Funktion von Inhaltsblockern basiert auf Filtern, die manchmal auch als Filterlisten bezeichnet werden. Jeder Filter ist eine Liste von Filterregeln. Wenn Sie beim Surfen einen Werbeblocker aktiviert haben, überprüft dieser ständig die besuchten Seiten und deren Elemente anhand dieser Filterregeln und blockiert alles, was diesen Regeln entspricht. Es werden Regeln entwickelt, um Werbung und Tracker zu blockieren.

Alle Filter sind in thematische Kategorien eingeteilt. Um die vollständige Liste dieser Kategorien zu sehen (nicht zu verwechseln mit Inhaltsblockern), öffnen Sie den Bereich *Schutz*, indem Sie auf das Schildsymbol tippen, und öffnen Sie dann *Schutz in Safari* → *Filter*.

![Filtergruppen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

Es gibt acht davon. Jede Kategorie vereint mehrere Filter, die einem gemeinsamen Zweck dienen, z. B. dem Blockieren von Werbung, Social-Media-Widgets, Cookie-Hinweisen und dem Schutz vor Online-Betrug. Um zu entscheiden, welche Filter Ihren Bedürfnissen entsprechen, lesen Sie die Beschreibungen und navigieren Sie anhand der Bezeichnungen (`ads`, `privacy`, `recommended`, usw.).

:::note

Viele aktivierte Filter sind keine Garantie dafür, dass es weniger Werbung geben wird. Eine große Anzahl gleichzeitig aktivierter Filter mindert die Qualität der Werbeblockierung.

:::

Die Kategorie „Custom” ist standardmäßig leer, damit die Benutzer:innen dort ihre Filter per URL hinzufügen können. Sie können Filter im Internet finden oder sogar versuchen, einen [selbst zu erstellen](/general/ad-filtering/create-own-filters).

### Benutzerregeln {#user-rules}

Hier können Sie entweder durch manuelle Eingabe oder mit Hilfe des [manuellen Blockiertools von AdGuard in Safari](#assistant) neue Regeln hinzufügen. Mit diesem Tool können Sie die Safari-Filterung anpassen, ohne eine ganze Filterliste hinzufügen zu müssen.

Erfahren Sie, [wie Sie Ihre eigenen Anzeigenfilter erstellen können](/general/ad-filtering/create-own-filters). Bitte beachten Sie aber, dass viele von ihnen in Safari unter iOS nicht funktionieren.

![Bildschirm Benutzerregeln *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Positivliste {#allowlist}

Der dritte Abschnitt des Bildschirms *Safari-Schutz*. Wenn Sie das Blockieren von Werbung auf einer bestimmten Website deaktivieren möchten, hilft Ihnen die Positivliste weiter. Damit können Sie Domains und Subdomains zu den Ausschlüssen hinzufügen. AdGuard für iOS verfügt über eine Import-/Exportfunktion, so dass die Positivliste von einem Gerät einfach auf ein anderes übertragen werden kann.

### DNS-Schutz {#dns-protection}

[DNS-Schutzmodul](https://adguard-dns.io/kb/general/dns-filtering/) verbessert Ihre Privatsphäre, indem es Ihren DNS-Datenverkehr verschlüsselt. Im Gegensatz zum Blockieren von Inhalten in Safari funktioniert der DNS-Schutz systemweit, also über Safari hinaus, in Apps und anderen Browsern. Sie müssen dieses Modul erst aktivieren, bevor Sie es verwenden können. Sie können dies auf dem Startbildschirm tun, indem Sie auf das Schildsymbol oben auf dem Bildschirm tippen oder den Tab *Schutz* → *DNS-Schutz* aufrufen.

:::note

Um die DNS-Einstellungen verwalten zu können, muss für die AdGuard-Apps ein lokales VPN eingerichtet werden. Ihr Datenverkehr wird nicht über einen externen Server geleitet. Dennoch werden Sie vom System aufgefordert, die Zugriffsberechtigung zu bestätigen.

:::

### DNS-Implementierung {#dns-implementation}

![Bildschirm DNS-Implementierung *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

In diesem Abschnitt gibt es zwei Optionen: AdGuard und Nativ. Im Grunde sind dies zwei Methoden zur Einrichtung von DNS.

Bei der nativen Implementierung wird das DNS vom System und nicht von der App verwaltet. Das bedeutet, dass AdGuard kein lokales VPN einrichten muss. Leider können Sie damit die Systembeschränkungen nicht umgehen und AdGuard zusammen mit anderen VPN-basierten Apps verwenden. Bei aktiviertem VPN wird das native DNS ignoriert. Sie werden daher nicht in der Lage sein, den Datenverkehr lokal zu filtern oder unser brandneues Protokoll [DNS-over-QUIC (DoQ)](https://adguard.com/en/blog/dns-over-quic.html) zu verwenden.

### DNS-Server {#dns-servers}

The next section you'll see on the DNS Protection screen is DNS server. Hier werden der aktuell ausgewählte DNS-Server und die Verschlüsselungsart angezeigt. Um eine der beiden Optionen zu ändern, tippen Sie auf die Schaltfläche, um den Bildschirm „DNS-Server” aufzurufen.

![DNS-Server *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Die Server unterscheiden sich durch ihre Geschwindigkeit, das verwendete Protokoll, die Vertrauenswürdigkeit, die Protokollierungspolitik usw. Standardmäßig schlägt AdGuard mehrere DNS-Server aus den beliebtesten vor (einschließlich AdGuard DNS). Tippen Sie auf eine beliebige Option, um die Verschlüsselungsart zu ändern (sofern der Eigentümer des Servers eine solche Option anbietet) oder um die Homepage des Servers anzuzeigen. Wir haben Bezeichnungen wie `Keine Protokollierung`, `Sperren von Werbung`, `Sicher` hinzugefügt, um Ihnen die Auswahl zu erleichtern.

Darüber hinaus gibt es am unteren Rand des Bildschirms die Möglichkeit, einen benutzerdefinierten DNS-Server hinzuzufügen. Es werden reguläre, DNSCrypt-, DNS-over-HTTPS-, DNS-over-TLS- und DNS-over-QUIC-Server unterstützt.

### Netzwerk-Einstellungen {#network-settings}

![Bildschirm Netzwerk-Einstellungen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Die Benutzer:innen können ihre DNS-Sicherheit auch im Bereich „Netzwerk-Einstellungen” festlegen. *Mobile Daten filtern* und *WLAN filtern* aktivieren oder deaktivieren den DNS-Schutz für die jeweiligen Netzwerktypen. Weiter unten, unter *WLAN-Ausnahmen*, können Sie bestimmte WLAN-Netzwerke vom DNS-Schutz ausschließen (z. B. können Sie Ihr Heimnetzwerk ausschließen, wenn Sie [AdGuard Home](https://adguard.com/adguard-home/overview.html) verwenden).

### DNS-Filterung {#dns-filtering}

Mit der DNS-Filterung können Sie Ihren DNS-Verkehr anpassen, indem Sie AdGuard DNS filter aktivieren, benutzerdefinierte DNS-Filter hinzufügen und die Sperr-/Positivliste verwenden.

So finden Sie diese Funktion:

*Protection* (the shield icon in the bottom menu bar) → *DNS protection* → *DNS filtering*

![Bildschirm DNS-Filterung *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS-Filter {#dns-filters}

Ähnlich wie die Filter in Safari, sind DNS-Filter Regelsätze, die nach einer speziellen [Syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/)geschrieben wurden. AdGuard überwacht Ihren DNS-Verkehr und blockiert Anfragen, die einer oder mehreren Regeln entsprechen. Sie können Filter wie den [AdGuard DNS filter](https://github.com/AdguardTeam/AdguardSDNSFilter) verwenden oder Hosts-Dateien als Filter hinzufügen. Es können mehrere Filter gleichzeitig hinzugefügt werden. Um zu wissen, wie das funktioniert, sollten Sie sich mit diesem [ausführlichen Leitfaden](../solving-problems/system-wide-filtering) vertraut machen.

#### Positivliste und Sperrliste {#allowlist-blocklist}

Zusätzlich zu den DNS-Filtern können Sie die DNS-Filterung gezielt beeinflussen, indem Sie einzelne Domains zur Sperrliste oder zur Positivliste hinzufügen. Die Sperrliste unterstützt sogar dieselbe DNS-Syntax, und beide können importiert und exportiert werden, genau wie die Positivliste bei der Inhaltsblockierung von Safari.

### Erweiterter Schutz {#advanced-protection}

In iOS 15 hat Apple die Unterstützung für Safari-Web-Erweiterungen hinzugefügt, und wir haben im Gegenzug ein neues Modul „*Erweiterter Schutz*” zu AdGuard für iOS hinzugefügt. Es ermöglicht AdGuard die Anwendung fortgeschrittener Filterregeln, wie CSS-Regeln, CSS-Selektoren und Scriptlets, und somit auch den Umgang mit komplexen Anzeigen, wie z. B. Werbung in YouTube.

![Bildshirm Erweiterter Schutz *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/protection_screen_15_en.jpeg)

Um den *Erweiterten Schutz* zu aktivieren, öffnen Sie den Tab *Schutz*, indem Sie auf das zweite linke Symbol am unteren Rand des Bildschirms tippen, wählen Sie das Modul *Erweiterter Schutz*, aktivieren Sie die Funktion, indem Sie den Schieberegler umlegen, und folgen Sie den nachstehenden Anweisungen.

:::note

Der *Erweiterte Schutz* funktioniert nur unter iOS 15 und späteren Versionen. Wenn Sie frühere Versionen von iOS verwenden, sehen Sie in der App das Modul *YouTube-Werbeblockierung* anstelle des *Erweiterten Schutzes*.

:::

![Bildschirm Schutz unter iOS 14 und früher *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/protection_screen_14_en.jpeg)

### Kompatibilität mit AdGuard VPN {#compatibility}

In den meisten Fällen können der Werbeblocker und die VPN-App nicht zusammenarbeiten, weil es einfach Systembeschränkungen gibt. Dennoch ist es uns gelungen, eine Lösung zu finden, um [AdGuard VPN](https://adguard-vpn.com/) und AdGuard Werbeblocker miteinander zu verbinden. Im Bereich *Schutz* können Sie ganz einfach zwischen zwei Apps wechseln.

### Assistent {#assistant}

![Safari-Assistent *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/assistant_en.jpeg)

„Assistent” ist ein Werkzeug, mit dem Sie das Filtern in Safari direkt vom Browser aus verwalten können, ohne zurück zur App wechseln zu müssen.

Um sie zu sehen, gehen Sie wie folgt vor: Öffnen Sie Safari und tippen Sie auf das Teilen-Symbol (Pfeil-in-Kasten). Scrollen Sie dann nach unten zu AdGuard/AdGuard Pro (je nach der von Ihnen verwendeten App) und tippen Sie darauf, um ein Fenster mit mehreren Optionen aufzurufen:

1. **Auf dieser Seite aktivieren**. Schalten Sie den Schalter aus, um die aktuelle Domain in die Positivliste aufzunehmen.
2. **Ein Element auf dieser Seite sperren.** Tippen Sie darauf, um den Modus „Element sperren” aufzurufen: Wählen Sie ein beliebiges Element auf der Seite aus, passen Sie die Größe an, indem Sie auf „+” (Plus) oder „-” (Minus) tippen, sehen Sie sich bei Bedarf eine Vorschau an und tippen Sie dann zur Bestätigung auf das Häkchen-Symbol ✔. Das ausgewählte Element wird auf der Seite ausgeblendet und eine entsprechende Regel wird den Benutzerregeln hinzugefügt. Entfernen oder deaktivieren Sie sie, um die Änderung zu widerrufen.
3. **Einen Fehler auf dieser Seite melden.** Öffnet ein Web-Reporting-Tool, mit dem Sie mit wenigen Klicks einen Fehlerbericht senden können. Verwenden Sie diese Option, wenn Sie eine fehlende Werbung oder eine fehlerhafte Sperrung auf der Seite bemerken.

:::tip

Auf iOS 15-Geräten sind die Assistentenfunktionen über die [AdGuard Safari Web-Erweiterung](../web-extension) verfügbar, die die Funktionen von AdGuard für iOS erweitert und es Ihnen ermöglicht, die Vorteile von iOS 15 zu nutzen. Mit dieser Web-Erweiterung kann AdGuard erweiterte Filterregeln anwenden und so mehr Werbung blockieren.

:::

### Aktivität {#activity}

Dies ist die „Informationszentrale” der DNS-Schutzsuite von AdGuard. Sie können schnell dorthin wechseln, indem Sie auf das dritte Symbol in der Reihe unten auf dem Bildschirm tippen. Anmerkung: Dieser Bildschirm wird nur angezeigt, wenn der DNS-Schutz aktiviert ist.

![Bildschirm Aktivität *mobile_border](https://cdn.adtidy.org/content/github/ad_blocker/ios/activity.png)

Hier werden Statistiken über die DNS-Anfragen des Geräts angezeigt, z. B. die Gesamtzahl, die Anzahl der blockierten Anfragen und die durch die Blockierung gesparten Daten. AdGuard kann die Statistiken für einen Tag, eine Woche, einen Monat oder insgesamt anzeigen.

Nachfolgend finden Sie den Feed *Letzte Aktivität*. AdGuard speichert die letzten 1.500 DNS-Anfragen, die von Ihrem Gerät ausgegangen sind, und zeigt deren Attribute wie Protokolltyp und Zieldomain an.

:::note

AdGuard sendet diese Informationen nirgendwo hin. Alle Informationen werden lokal gespeichert und verlassen Ihr Gerät nicht.

:::

Tippen Sie auf eine Anfrage, um weitere Details anzuzeigen. Es wird auch Schaltflächen geben, um die Anfrage mit einem Fingertipp zur Sperrliste/Positivliste hinzuzufügen.

![Details anfordern *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/request_info_en.jpeg)

Die *aktivsten* und *meist blockierten* Unternehmen werden oberhalb des Aktivitäts-Feeds angezeigt. Tippen Sie auf die einzelnen Felder, um die Daten der letzten 1.500 Anfragen anzuzeigen.

### Statistiken {#statistics}

Abgesehen vom *Aktivitätsbildschirm* finden Sie globale Statistiken auf dem Startbildschirm und den Widgets.

## Low-Level-Einstellungen {#low-level-settings}

![Low-Level-Einstellungen *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

Um die *Low-Level-Einstellungen*zu öffnen, gehen Sie zu *Einstellungen* → *Allgemein* → (Aktivieren Sie *Erweiterter Modus*, wenn er ausgeschaltet ist) → *Erweiterte Einstellungen* → *Low-Level-Einstellungen*.

Die meisten Einstellungen in diesem Abschnitt sollten nicht geändert werden: Verwenden Sie sie nur, wenn Sie sich sicher sind, was Sie tun, oder wenn das Support-Team Sie darum bittet. Einige Einstellungen können jedoch ohne Risiko geändert werden.

### IPv6 sperren {#blockipv6}

Bei jeder DNS-Anfrage, die zum Abrufen einer IPv6-Adresse gesendet wird, gibt unsere App eine leere Antwort zurück (als ob diese IPv6-Adresse nicht existieren würde). Jetzt gibt es eine Option, die IPv6-Adressen nicht zurückgibt. An dieser Stelle wird die Beschreibung dieser Funktion zu technisch: Die Konfiguration oder Deaktivierung von IPv6 ist ausschließlich Sache für fortgeschrittene Benutzer:innen. Für sie ist diese Funktion nützlich, für die anderen ist es nicht notwendig, ins Detail zu gehen.

### Bootstrap- und Fallback-Server {#bootstrap-fallback}

Fallback ist ein Backup-DNS-Server. Wenn Sie sich für einen DNS-Server entschieden haben und dieser nicht mehr funktioniert, ist ein Fallback erforderlich, um den Backup-DNS-Server einzustellen, bis der Hauptserver antwortet.

Bei Bootstrap ist es ein wenig komplizierter. Damit AdGuard für iOS einen benutzerdefinierten sicheren DNS-Server verwenden kann, muss unsere App zunächst ihre IP-Adresse abrufen. Zu diesem Zweck wird standardmäßig der System-DNS verwendet, aber manchmal ist dies aus verschiedenen Gründen nicht möglich. In solchen Fällen kann Bootstrap verwendet werden, um die IP-Adresse des ausgewählten sicheren DNS-Servers zu ermitteln. Hier sind zwei Beispiele, die zeigen, wann ein benutzerdefinierter Bootstrap-Server hilfreich sein kann:

1. Wenn ein Standard-DNS-Server des Systems nicht die IP-Adresse eines sicheren DNS-Servers zurückgibt und es nicht möglich ist, einen sicheren Server zu verwenden.
2. Wenn unsere App und das VPN eines Drittanbieters gleichzeitig verwendet werden und es nicht möglich ist, System DNS als Bootstrap zu verwenden.

## Weitere Funktionen {#other-features}

Während das Blockieren von Inhalten in Safari und der DNS-Schutz zweifellos die beiden Hauptmodule von AdGuard/AdGuard Pro sind, gibt es noch einige andere, weniger wichtige Funktionen, die nicht direkt mit diesen beiden Modulen in Verbindung stehen, aber dennoch nützlich sein können und über die man Bescheid wissen sollte.

- **Dunkles Design**

![Helles Design *mobile_border](https://cdn.adtidy.org/blog/new/26vo4homelight.jpeg)

![Dunkles Design *mobile_border](https://cdn.adtidy.org/blog/new/bgko8homedark.jpeg)

Diese Einstellung befindet sich ganz oben auf dem Bildschirm **Einstellungen** → **Allgemein** und ermöglicht es Ihnen, zwischen dunklen und hellen Farbschemen zu wechseln.

- **Widgets**

![Widgets *Mobil](https://cdn.adtidy.org/public/Adguard/Release_notes/iOS/v4.0/widget_en.jpg)

AdGuard unterstützt Widgets, die einen schnellen Zugriff auf die Schaltflächen zum Blockieren von Inhalten in Safari und zum DNS-Schutz in Safari ermöglichen sowie Statistiken zu globalen Anfragen anzeigen.

- **Auto-Update nur über WLAN**

Wenn diese Einstellung aktiviert ist, verwendet AdGuard nur WLAN, um die Filter im Hintergrund zu aktualisieren.

- **Positivliste umkehren**

Ein alternativer Modus für die Safari-Filterung, der das Blockieren von Werbung überall aufhebt, außer für die in der Liste angegebenen Websites. Standardmäßig deaktiviert.

- **Erweiterter Modus**

**Erweiterter Modus** entsperrt die **Erweiterten Einstellungen**. Wir raten davon ab, daran zu rütteln, es sei denn, Sie wissen, was Sie tun, oder Sie haben vorher den technischen Support konsultiert.

- **Statistiken zurücksetzen**

Löscht alle statistischen Daten, wie z. B. die Anzahl der Anfragen usw.

- **Einstellungen zurücksetzen**

Mit dieser Option werden alle Ihre Einstellungen zurückgesetzt.

- **Support**

Nutzen Sie diese Option, um den Support zu kontaktieren, eine verpasste Anzeige zu melden (obwohl wir Ihnen empfehlen, den Assistenten oder die Safari-Web-Erweiterung von AdGuard zu verwenden), Protokolle zu exportieren oder eine Funktionsanfrage zu stellen.

- **Über uns**

Enthält die aktuelle Version der App und eine Reihe von selten benötigten Optionen und Links.
