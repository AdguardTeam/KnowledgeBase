---
title: So automatisieren Sie AdGuard für Android
sidebar_position: 3
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Viele Menschen entscheiden sich für Android, weil sie die Einstellungen gerne anpassen und ihr Gerät vollständig kontrollieren möchten. Und es ist ganz normal, dass manche mit dem Standardverhalten von AdGuard nicht zufrieden sind. Angenommen, Sie möchten, dass der Schutz beim Starten einer bestimmten Anwendung angehalten und beim Schließen der Anwendung wieder gestartet wird. Dies ist eine Aufgabe für die Tasker-App.

## AdGuard-Benutzeroberfläche

Es gibt viele Tasker-Apps, zum Beispiel [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&noprocess), [AutomateIt](https://play.google.com/store/apps/details?id=AutomateIt.mainPackage&noprocess) usw. AdGuard bietet eine Schnittstelle, über die diese Anwendungen verschiedene Automatisierungsregeln einrichten können.

![Automation *mobile_border](https://cdn.adtidy.org/blog/new/mmwmfautomation.jpg)

Dank dieser Schnittstelle kann jede Anwendung eine spezielle Nachricht (genannt „Intent“) senden, die den Namen der Aktion und gegebenenfalls einige zusätzliche Daten enthält. AdGuard prüft diese Intent und führt die erforderlichen Maßnahmen durch.

### Sicherheitsbedenken

Ist es nicht gefährlich, die Verwaltung von AdGuard irgendwelchen Apps zu überlassen? Ja, und deshalb wird mit dem Intent auch ein Passwort mitgesendet. Dieses Passwort wird von AdGuard automatisch generiert, aber Sie können es natürlich jederzeit ändern.

### Verfügbare Aktionen

Hier finden Sie Aktionen, die von AdGuard verstanden werden, wenn sie im Intent enthalten sind:

`start` startet den Schutz, es werden keine weiteren Daten benötigt;

`stop` beendet den Schutz, ohne dass zusätzliche Daten erforderlich sind;

`pause` pausiert den Schutz. Der Unterschied zu `stop` besteht darin, dass eine Benachrichtigung angezeigt wird, die den Schutz neu startet, wenn Sie darauf tippen. Keine zusätzlichen Daten erforderlich;

`update` prüft auf verfügbare Filter- und App-Updates, es werden keine zusätzlichen Daten benötigt;

-----

`dns_filtering` schaltet die DNS-Filterung ein und aus. Erfordert einen zusätzlichen Befehl:

`enable:true` oder `enable:false` aktiviert oder deaktiviert die DNS-Filterung entsprechend.

`fake_dns` erlaubt die Auflösung von DNS-Anfragen auf dem angegebenen Proxy-Server. Dies erfordert ein zusätzliches Flag:

`enable:true` oder `enable:false` aktiviert bzw. deaktiviert die Einstellung *FakeDNS verwenden*.

:::note

Wenn die Einstellung *FakeDNS verwenden* aktiviert ist, wird der *DNS-Schutz* automatisch deaktiviert. DNS-Anfragen werden nicht lokal gefiltert.

:::

-----

`dns_server` wechselt zwischen DNS-Servern. Sie müssen zusätzliche Daten einfügen:

 `server:adguard dns` wechselt zum AdGuard DNS-Server;

:::note

Die vollständige Liste der unterstützten Anbieter finden Sie in unserer [Liste der bekannten DNS-Anbieter](https://adguard-dns.io/kb/general/dns-providers/).

:::

 `server:custom` wechselt zu dem zuvor hinzugefügten Server namens `custom`;

 `Server:tls://dns.adguard.com` erstellt einen neuen Server und wechselt zu diesem, wenn die zuvor hinzugefügten Server und Anbieter keinen Server mit derselben Adresse enthalten. Andernfalls wird zum entsprechenden Server gewechselt. Sie können Serveradressen als IP (normaler DNS), `sdns://…` (DNSCrypt oder DNS-over-HTTPS), `https://…` (DNS-over-HTTPS) oder `tls://...` (DNS-over-TLS) hinzufügen;

 `server:1.1.1.1, tls://1.1.1.1` erstellt einen Server mit durch Komma getrennten Adressen und wechselt zu ihm. Wenn ein Server über `server:1.1.1.1, tls://1.1.1.1` hinzugefügt wird, wird der zuvor hinzugefügte Server entfernt.

 `server:system` setzt die DNS-Einstellungen auf die Standard-DNS-Server des Systems zurück.

 -----

`proxy_state` aktiviert/deaktiviert den ausgehenden Proxy. Erfordert einen zusätzlichen Befehl:

`enable:true` oder `enable:false` aktiviert oder deaktiviert den ausgehenden Proxy entsprechend.

-----

`proxy_default` setzt den Proxy aus der Liste der zuvor hinzugefügten Proxys als Standard oder erstellt einen neuen, wenn der Server noch nicht hinzugefügt wurde.

Sie müssen zusätzliche Daten angeben:

`server:[name]` wobei `[name]` der Name des ausgehenden Proxys aus der Liste ist.

Oder Sie können die Serverparameter manuell konfigurieren:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

`proxy_remove` entfernt den Proxyserver aus der Liste der zuvor hinzugefügten Server.

`server:[name]` wobei `[name]` der Name des ausgehenden Proxys aus der Liste ist.

Oder Sie können die Parameter zum Entfernen manuell konfigurieren:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

- **Pflichtparameter**:

`[type]` — Proxy-Server-Typ:

- HTTP
- SOCKS4
- SOCKS5
- HTTPS_CONNECT

`[host]` — Domain oder IP-Adresse des ausgehenden Proxys;

`[port]` — ausgehender Proxy-Port (ganzzahlige Zahl von 1 bis 65535);

- **Optionale Parameter**:

 <`[Benutzername und Passwort]` — nur wenn der Proxy dies verlangt. Diese Daten werden bei der Einrichtung von **SOCKS4** ignoriert;

 `[udp]` gilt nur für **SOCKS5** Servertyp und beinhaltet die Option **UDP through SOCKS5**. Es ist notwendig, den Wert **true** oder **false** zu setzen;

 `[trust]` gilt nur für **HTTPS_CONNECT** Servertyp und schließt die Option **beliebigen Zertifikaten vertrauen**ein. Es ist notwendig, den Wert **true** oder **false** zu setzen.

:::note Beispiel

`Einstellung nach Name`: server:MyServer

`manuelle Einstellungen`: server:host=1.2.3.4&port=80&type=SOCKS5&username=foo&password=bar&udp=true

:::

**Vergessen Sie nicht, das Passwort, den Paketnamen und die Klasse anzugeben. Sie müssen dies für jeden Intent tun.**

Extra: `password:*******`

Paketname: `com.adguard.android`

Klasse: `com.adguard.android.receiver.AutomationReceiver`

:::note

Vor Version 4.0 hieß die Klasse `com.adguard.android.receivers.AutomationReceiver`, aber dann haben wir ihren Namen in `com.adguard.android.receiver.AutomationReceiver`geändert. Wenn diese Funktion verwendet wird, denken Sie daran, den neuen Namen zu aktualisieren.

:::

### Ausführung ohne Benachrichtigung

Um eine Aufgabe auszuführen, ohne einen Hinweis anzuzeigen, fügen Sie ein zusätzliches EXTRA `quiet: true` hinzu

### Beispiel

![Automatisierung *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/tasker/automation2.png)
