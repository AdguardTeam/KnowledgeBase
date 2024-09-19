---
title: Einstellungen
sidebar_position: 4
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Der Tab _Einstellungen_ kann durch Tippen auf das Symbol ganz rechts am unteren Bildschirmrand aufgerufen werden. Dieser Abschnitt enthält verschiedene Einstellungen, Informationen über Ihre App, Lizenz und Abonnement sowie verschiedene Support-Ressourcen.

## Allgemein

In diesem Abschnitt können Sie das Aussehen und das Verhalten der App konfigurieren: Sie können das Design und die Sprache einstellen, Benachrichtigungen verwalten und vieles mehr. Wenn Sie das AdGuard-Team bei der Erkennung von Abstürzen und der Untersuchung der Benutzerfreundlichkeit unterstützen möchten, können Sie _Abstürze automatisch melden_ und _Technische Daten und Interaktionsdaten senden_ aktivieren.

![Allgemein \*mobile\_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

Unter _App- und Filteraktualisierungen_ können Sie automatische Filteraktualisierungen konfigurieren und einen App-Aktualisierungskanal auswählen. Wählen Sie _Release_ für mehr Stabilität und _Beta_ oder _Nightly_ für einen frühen Zugang zu neuen Funktionen.

![Aktualisierungen \*mobile\_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Erweiterte Einstellungen

Mit _Automatisierung_ können Sie AdGuard über Tasker-Apps verwalten.

_Watchdog_ hilft, AdGuard davor zu schützen, vom System deaktiviert zu werden. [Lesen Sie mehr über den Batteriesparmodus von Android](/adguard-for-android/solving-problems/background-work/). Der von Ihnen eingegebene Wert ist das Intervall in Sekunden zwischen den Watchdog-Prüfungen.

Die _Protokollierungsebene_ legt fest, welche Daten über die Funktion der App protokolliert werden sollen. Standardmäßig sammelt die App die Daten über ihre Ereignisse. Die Ebene _Fehlersuche_ protokolliert mehr Ereignisse. Aktivieren Sie sie, wenn das AdGuard-Team sie darum bittet, um ein besseres Verständnis des Problems zu erhalten. [Read more about collecting and sending logs](/adguard-for-android/solving-problems/log/)

![Erweitert \*mobile\_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

Der Abschnitt _Low-Level-Einstellungen_ ist für erfahrene Benutzer:innen gedacht. [Weitere Informationen über Low-Level-Einstellungen](/adguard-for-android/solving-problems/low-level-settings/)

![Low-Level-Einstellungen \*mobile\_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filterung

In diesem Abschnitt können Sie die Einstellungen für die HTTPS-Filterung, Filter und Benutzerskripte verwalten und einen Proxyserver einrichten.

![Filtern \*mobile\_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

### Filter

AdGuard blockiert Werbung, Tracker und Belästigungen, indem es Regeln aus seinen Filtern anwendet. Die meisten Funktionen aus dem Bereich _Schutz_ werden durch [AdGuard-Filter](/general/ad-filtering/adguard-filters/#adguard-filters) realisiert. Wenn Sie den _Basisschutz_ aktivieren, werden automatisch der AdGuard Basisfilter und der AdGuard Filter gegen mobile Werbung aktiviert. Und umgekehrt: Wenn Sie beide Filter ausschalten, wird auch der _Basisschutz_ deaktiviert.

![Filter \*mobile\_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Die standardmäßig aktivierten Filter sind für den normalen Betrieb von AdGuard ausreichend. Wenn Sie die Blockierung von Werbung jedoch individuell anpassen möchten, können Sie andere Filter von AdGuard oder Drittanbietern verwenden. Wählen Sie dazu eine Kategorie aus und aktivieren Sie die gewünschten Filter. Um einen benutzerdefinierten Filter hinzuzufügen, tippen Sie auf _Benutzerdefinierte Filter_ ➜ _Benutzerdefinierten Filter hinzufügen_ und geben Sie die URL oder den Dateipfad ein.

:::note

Wenn Sie zu viele Filter aktivieren, kann es sein, dass einige Websites nicht richtig funktionieren.

:::

[Lesen Sie mehr über Filter](https://adguard.com/en/blog/what-are-filters.html)

### Benutzerskripte

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. Um ein Benutzerskript zu installieren, benötigen Sie einen speziellen Benutzerskript-Manager. AdGuard verfügt über eine solche Funktion und ermöglicht das Hinzufügen von Benutzerskripten per URL oder aus einer Datei.

![Benutzerskripte \*mobile\_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

#### AdGuard Extra

AdGuard Extra ist ein benutzerdefiniertes Skript, das komplexe Werbung und Mechanismen, die Werbung auf Websites einschleusen, blockiert.

#### AMP deaktivieren

„AMP deaktivieren“ ist ein Benutzerskript, das [Accelerated Mobile Pages](https://de.wikipedia.org/wiki/Accelerated_Mobile_Pages) auf der Google-Suchergebnisseite deaktiviert.

### Netzwerk

#### HTTPS-Filterung

Um Werbung und Tracker auf den meisten Websites und in den meisten Apps zu blockieren, muss AdGuard deren HTTPS-Datenverkehr filtern. [Lesen Sie mehr über HTTPS-Filterung](/general/https-filtering/what-is-https-filtering)

##### Sicherheitszertifikate

Um den verschlüsselten Datenverkehr zu verwalten, installiert AdGuard sein CA-Zertifikat auf Ihrem Gerät. Es ist sicher: Der Datenverkehr wird lokal gefiltert und AdGuard prüft die Sicherheit der Verbindung.

Bei älteren Android-Versionen wird das Zertifikat automatisch installiert. Unter Android 11 und höher müssen Sie es manuell installieren. [Installationsanweisungen](/adguard-for-android/solving-problems/manual-certificate/)

Das CA-Zertifikat im Benutzerspeicher reicht aus, um den HTTPS-Datenverkehr in Browsern und einigen Apps zu filtern. Es gibt jedoch Apps, die nur Zertifikaten aus dem Systemspeicher vertrauen. Um dort HTTPS-Verkehr zu filtern, müssen Sie das CA-Zertifikat von AdGuard im Systemspeicher installieren. [Anleitung](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### HTTPS-gefilterte Apps

Dieser Abschnitt enthält die Liste der Apps, für die AdGuard HTTPS-Datenverkehr filtert. Bitte beachten Sie, dass diese Einstellung nur dann auf alle Apps angewendet werden kann, wenn sich die CA-Zertifikate sowohl im Benutzerspeicher als auch im Systemspeicher befinden.

##### HTTPS-gefilterte Websites

Mit dieser Einstellung können Sie Websites verwalten, für die AdGuard HTTPS-Verkehr filtern soll.

Die HTTPS-Filterung ermöglicht es AdGuard, den Inhalt von Anfragen und Antworten zu filtern, aber es werden keine Daten gesammelt oder gespeichert. Um jedoch die Sicherheit zu erhöhen, [schließen wir Websites, die potenziell sensible Informationen enthalten, von der HTTPS-Filterung aus](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

Sie können auch Websites, die Sie für notwendig erachten, zu den Ausschlüssen hinzufügen, indem Sie einen der Modi auswählen:

- Bestimmte Websites von der HTTPS-Filterung ausschließen
- Filtert HTTPS-Datenverkehr nur auf den Websites, die zu den Ausschlüssen hinzugefügt wurden

Standardmäßig werden auch keine Websites mit Extended Validation (EV)-Zertifikaten gefiltert, wie z. B. Finanzseiten. Falls erforderlich, können Sie die Option _Websites mit EV-Zertifikaten filtern_ aktivieren.

#### Proxy

Sie können AdGuard so einrichten, dass der gesamte Datenverkehr Ihres Geräts über Ihren Proxy-Server geleitet wird. [So richten Sie einen Outbound-Proxy ein](/adguard-for-android/solving-problems/outbound-proxy)

In diesem Abschnitt können Sie auch ein VPN eines Drittanbieters für die Verwendung mit AdGuard einrichten, sofern Ihr VPN-Anbieter dies zulässt.

Unter _Über Proxy geleitete Apps_, können Sie Apps auswählen, die ihren Datenverkehr über den von Ihnen angegebenen Proxy leiten sollen. Wenn Sie _Integration mit AdGuard VPN_ aktiviert haben, übernimmt diese Einstellung die Rolle der App-Ausschlüsse von AdGuard VPN: Sie können hier Apps angeben, die durch den AdGuard VPN-Tunnel geleitet werden sollen.

#### Routing-Modus

In diesem Abschnitt können Sie die Methode zur Filterung des Datenverkehrs auswählen.

- _Lokales VPN_ filtert den Datenverkehr durch ein lokal eingerichtetes VPN. Dies ist der zuverlässigste Modus. Aufgrund der Android-Einschränkungen ist dies auch die einzige systemweite Methode zur Filterung des Datenverkehrs, die auf nicht gerooteten Geräten verfügbar ist.

:::note

Der Modus _Lokales VPN_ erlaubt es nicht, AdGuard gleichzeitig mit anderen VPNs zu verwenden. Um ein anderes VPN mit AdGuard zu verwenden, müssen Sie es für den Proxy-Modus umkonfigurieren und einen ausgehenden Proxy im AdGuard einrichten. Bei AdGuard VPN geschieht dies automatisch mit Hilfe des [_Integrierten Modus_](/adguard-for-android/features/integration-with-vpn).

:::

- Der _Automatische Proxy_ ist eine alternative Methode zur Weiterleitung des Datenverkehrs, die keine Verwendung eines VPNs erfordert. Ein wesentlicher Vorteil ist, dass er parallel zu einem VPN betrieben werden kann. Dieser Modus erfordert Root-Zugriff.

- Beim _Manuellen Proxy_ wird ein Proxyserver an einem bestimmten Port eingerichtet, der dann in den WLAN-Einstellungen konfiguriert werden kann. Dieser Modus erfordert Root-Zugriff für Android 10 und höher.

## Lizenz

In diesem Abschnitt finden Sie Informationen über Ihre Lizenz und können sie verwalten:

- Eine AdGuard-Lizenz kaufen, um [die Funktionen der Vollversion](/adguard-for-android/features/free-vs-full) zu aktivieren
- Sich bei Ihrem AdGuard-Konto anmelden oder den Lizenzschlüssel eingeben, um Ihre Lizenz zu aktivieren
- Sich anmelden, um Ihren 7-tägigen Testzeitraum zu aktivieren, falls Sie ihn noch nicht genutzt haben
- Refresh the license status from the three-dots menu (⋮)
- Das AdGuard-Konto öffnen und Ihre Lizenz dort verwalten
- Ihre Lizenz zurücksetzen — zum Beispiel, wenn Sie das Gerätelimit für diese Lizenz erreicht haben und eine andere Lizenz beantragen möchten

![Lizenzbildschirm \*mobile\_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## Support

Nutzen Sie diesen Abschnitt, wenn Sie Fragen oder Anregungen zu AdGuard für Android haben. Wir empfehlen, die _[FAQ](https://adguard.com/support/adguard_for_android.html)_ oder diese Wissensdatenbank zu konsultieren, bevor Sie den Support kontaktieren.

![Support \*mobile\_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

Wenn Sie eine übersehene Werbung bemerken, melden Sie sie bitte über _Fehlerhaftes Sperren melden_.

Bei unerwartetem Verhalten der App wählen Sie _Fehler melden_. Wenn möglich, beschreiben Sie Ihr Problem detailliert und fügen Sie App-Protokolle hinzu. [So beschreiben Sie ein Problem](/guides/report-bugs/#how-to-describe-a-problem)

Für Ihre Vorschläge verwenden Sie bitte _Funktion vorschlagen_.

:::note

GitHub ist eine alternative Möglichkeit, Fehler zu melden und neue Funktionen vorzuschlagen. [Anleitungen und Repository-Links](/guides/report-bugs/#adguard-for-android)

:::
