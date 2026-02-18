---
title: Erweiterte Einstellungen
sidebar_position: 4
---

:::info

Dieser Artikel beschreibt AdGuard für Windows v8.0, einen umfassenden Werbeblocker, der Ihr Gerät auf Systemebene schützt. Es handelt sich hierbei um eine Beta-Version, die sich noch in der Entwicklung befindet. Um es auszuprobieren, laden Sie die [Beta-Version von AdGuard für Windows](https://agrd.io/windows_beta) herunter.

:::

Der Abschnitt _Erweiterte Einstellungen_ enthält Optionen, die über die üblichen Anforderungen hinausgehen. AdGuard für Windows funktioniert sofort nach der Installation einwandfrei, aber diese Einstellungen können in besonderen Fällen oder zur Fehlerbehebung nützlich sein.

:::caution

Das Ändern von erweiterten Einstellungen ohne entsprechende Kenntnisse kann zu Leistungsproblemen führen, Ihre Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsphäre beeinträchtigen. Ändern Sie diese nur, wenn Sie wissen, was Sie tun, oder wenn Sie von unserem Support-Team dazu aufgefordert werden.

:::

## Anwendung von der Filterung ausschließen, durch Angabe des vollständigen Pfads

Wenn Sie möchten, dass AdGuard eine bestimmte App nicht filtert, geben Sie hier den vollständigen Dateipfad ein. Sie können mehrere Apps hinzufügen, indem Sie deren Pfade durch Semikolons trennen.

## AdGuard Pop-up-Benachrichtigungen aktivieren

Aktivieren Sie diese Funktion, um Popup-Benachrichtigungen von AdGuard anzuzeigen. Sie werden nicht allzu oft angezeigt und enthalten nur wichtige Informationen. Sie können die letzte Benachrichtigung auch über den Infobereich der Taskleiste erneut öffnen.

## Filter-Abonnement URLs automatisch filtern

Wenn diese Option aktiviert ist, erkennt AdGuard automatisch Filter-Abonnement-Links (wie `abp:subscribe`) und öffnet ein Fenster, in dem Sie diese zu Ihren Filtern hinzufügen können.

## Umleitungstreiber-Modus verwenden

Wenn diese Option aktiviert ist, leitet AdGuard Ihren gesamten Datenverkehr zur Filterung an einen lokalen Proxy-Server weiter.

Ist diese Option jedoch deaktiviert, filtert AdGuard den Datenverkehr direkt, ohne ihn umzuleiten. In diesem Modus erkennt Windows AdGuard als die einzige App, die eine Verbindung zum Internet herstellt, da alle anderen Apps über AdGuard geleitet werden. Dies kann die Leistung geringfügig verbessern, jedoch die Wirksamkeit der System-Firewall beeinträchtigen.

## AdGuard beim Systemstart öffnen

Aktivieren Sie diese Option, um das AdGuard-Fenster automatisch zu öffnen, wenn Ihr PC gestartet wird.

## Filterung beim Systemstart aktivieren

Seit Version 7.12 beginnt AdGuard nicht mehr automatisch mit der Filterung des Datenverkehrs, nachdem Sie Ihren PC hochgefahren haben — es sei denn, die Option _AdGuard beim Systemstart öffnen_ ist aktiviert. Stattdessen läuft es in einem passiven „Leerlaufmodus“.

Wenn Sie diese Option aktivieren, kann AdGuard den Datenverkehr sofort filtern, auch wenn die App noch nicht geöffnet wurde.

## Localhost filtern

Aktivieren Sie diese Option, damit AdGuard den Loopback-Datenverkehr (localhost) filtern kann, den einige Apps für die Kommunikation innerhalb des Systems verwenden. Wenn AdGuard VPN installiert ist, ist diese Einstellung immer aktiviert, da das VPN dies für eine ordnungsgemäße Funktion benötigt.

## HAR erfassen

Dies dient ausschließlich dem Debugging. Wenn diese Option aktiviert ist, erstellt AdGuard eine HAR-Datei (HTTP Archive 1.2-Format) mit detaillierten Informationen zu allen gefilterten Anfragen. Diese lassen sich in Anwendungen wie Fiddler öffnen.

Bitte beachten Sie: Dies kann Ihre Surfgeschwindigkeit verringern.

## QUIC im Filterungsprotokoll anzeigen

Wenn diese Option aktiviert ist, nimmt AdGuard den Datenverkehr des QUIC-Protokolls in das Filterprotokoll auf — jedoch nur für blockierte Anfragen.

## Java blockieren

Einige Websites verwenden noch immer Java-Plug-ins, die auf veralteter und unsicherer Technologie basieren. Sie können diese Plug-ins aus Sicherheitsgründen deaktivieren.

Die Option _Java blockieren_ hat keine Auswirkungen auf JavaScript — dieses bleibt weiterhin aktiviert.

## Sperrmodus für DNS-Regeln

Wählen Sie aus, wie AdGuard reagieren soll, wenn eine Domain durch eine DNS-Regel auf Basis der [Hosts-Style-Syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax) blockiert wird.

- Einen `REFUSED`-Fehler zurückgeben
- Einen `NXDOMAIN`-Fehler zurückgeben
- Eine benutzerdefinierte IP-Adresse zurückgeben

### Benutzerdefinierte IPv4-Adresse

Wenn unter _Sperrmodus für DNS-Regeln_ die Option _Benutzerdefinierte IP-Adresse_ ausgewählt ist, wird diese IP-Adresse als Antwort auf blockierte A-Anfragen zurückgegeben. Wenn keine angegeben sind, antwortet AdGuard mit dem Standardfehler REFUSED.

### Benutzerdefiniertes IPv6-Adresse

Wenn unter _Sperrmodus für DNS-Regeln_ die Option _Benutzerdefinierte IP-Adresse_ ausgewählt ist, wird diese IP-Adresse als Antwort auf blockierte AAAA-Anfragen zurückgegeben. Wenn keine angegeben sind, antwortet AdGuard mit dem Standardfehler REFUSED.

## Fallback-Server

Legen Sie hier Backup-DNS-Server fest. AdGuard verwendet diese, wenn der Haupt-DNS-Server nicht innerhalb der von Ihnen festgelegten Zeit reagiert. Sie können:

- Die Standard-DNS-Server Ihres Systems verwenden
- Benutzerdefinierte Fallback-Server hinzufügen
- Oder Sie können sich dafür entscheiden, überhaupt keine Fallback-Server zu verwenden

## DNS-Server-Timeout

Geben Sie an, wie lange (in Millisekunden) AdGuard auf eine DNS-Antwort warten soll, bevor es zu einem Fallback-Server wechselt. Wenn dieser Wert leer oder ungültig ist, beträgt der Standardwert 5000 ms (5 Sekunden).

## Benutzerdefinierte Bootstrap-Adressen

Ein Bootstrap ist ein zwischengeschalteter DNS-Server, der dazu dient, die IP-Adresse des sicheren DNS-Servers zu ermitteln, den Sie zuvor im DNS-Schutz ausgewählt haben. Ein solcher „Mittelweg“ ist erforderlich, wenn Protokolle verwendet werden, die die Serveradresse durch Buchstaben bezeichnen (wie beispielsweise DNS-over-TLS). In diesem Fall fungiert der Bootstrap als Übersetzer und wandelt die Buchstaben in Zahlen um, die Ihr System versteht.

Bei Bedarf können Sie hier jedoch verschiedene IP-Adressen angeben — diese werden dann in der Reihenfolge von oben nach unten durchprobiert. Wenn keine davon funktioniert oder nichts eingegeben wird, greift AdGuard auf die Systemstandardwerte zurück.

## DNS-Ausschlüsse

Die hier aufgeführten Domains umgehen die DNS-Server von AdGuard. Ihre Anfragen werden über den Standardauflöser des Systems geleitet, und AdGuard wendet keine Sperrregeln auf sie an.
