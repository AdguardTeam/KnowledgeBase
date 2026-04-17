---
title: Netzwerkeinstellungen
sidebar_position: 3
---

:::info

Dieser Artikel beschreibt AdGuard für Windows v8.0, einen umfassenden Werbeblocker, der Ihr Gerät auf Systemebene schützt. Es handelt sich hierbei um eine Beta-Version, die sich noch in der Entwicklung befindet. Um es auszuprobieren, laden Sie die [Beta-Version von AdGuard für Windows](https://agrd.io/windows_beta) herunter.

:::

In diesem Abschnitt können Sie festlegen, wie AdGuard Ihren Internetverkehr filtern soll, und erhalten zusätzliche Werkzeuge zur Steuerung netzwerkbezogener Funktionen.

![Netzwerk-Einstellungen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/network_settings.png)

## AdGuard als einen HTTP-Proxy verwenden

Aktivieren Sie diese Option, damit AdGuard als HTTP-Proxy genutzt werden kann. Der gesamte Datenverkehr, der darüber geleitet wird, wird gefiltert — nicht nur auf Ihrem Computer, sondern auch auf anderen Geräten in Ihrem Heimnetzwerk.

Um den Datenverkehr auf anderen Geräten filtern zu können, installieren Sie das Root-Zertifikat von AdGuard auf diesen Geräten und richten Sie den Proxy manuell ein.

Weitere Einstellungen sind standardmäßig aktiviert.

## HTTPS-Filterung

Die meisten Websites verwenden heute HTTPS-Verschlüsselung. Ohne HTTPS-Filterung kann AdGuard Werbung auf Websites wie YouTube, Facebook oder X (ehemals Twitter) nicht blockieren.

Wir empfehlen, die Option _HTTPS filtern_ aktiviert zu lassen, es sei denn, Sie haben einen bestimmten Grund, sie zu deaktivieren.

Mit dieser Option haben Sie folgende Möglichkeiten:

- Das AdGuard-Zertifikat neu Installieren oder herunterladen

- Websites zu einer Liste hinzufügen, die nicht gefiltert wird

- Auswählen, ob Websites mit EV-Zertifikaten (Extended Validation) gefiltert werden sollen

## Proxy für App- und Filter-Updates

Hier können Sie festlegen, welchen Proxy AdGuard zum Herunterladen von Filter-Updates oder neuen App-Versionen verwenden soll — den System-Proxy, einen benutzerdefinierten Proxy oder gar keinen Proxy.

![Proxy-Einstellungen](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/proxy_apps.png)

## SockFilter-Treiber verwenden

Aktivieren Sie diese Option, um den SockFilter-Treiber zu verwenden, der dabei hilft, Werbung und Tracker in Apps unter Windows 8 und höher zu blockieren. Wenn diese Option deaktiviert ist, wechselt AdGuard stattdessen zum älteren WFP-Treiber.

SockFilter wurde erstmals in Version 8.0 RC eingeführt. Der SockFilter ist ein _experimenteller_, schlanker Kernel-Modus-Netzwerktreiber, der auf Socket-Ebene (TCP/UDP) arbeitet. Anstatt Pakete zu überprüfen oder zu modifizieren, während sie den gesamten Windows-Netzwerkstack durchlaufen, fängt ein Sock-Filter Socket-Aufrufe (z. B. connect, send, receive, bind) auf einer höheren, stabileren Abstraktionsebene ab. Dies eignet sich ideal für Apps, die Netzwerkaktivitäten ohne Deep Packet Processing überwachen oder steuern müssen.

Nach vollständiger Erprobung und Implementierung bietet SockFilter gegenüber anderen Treibern mehrere entscheidende Vorteile:

- **It operates at a higher, socket-level layer**: SockFilter works with socket operations rather than raw packets, making it less complex and more stable than WFP’s low-level packet filtering.
- **Keine Beeinträchtigung anderer Netzwerktreiber**: Da es über den VPN-, Firewall- und Antivirus-WFP-Filtern angesiedelt ist, vermeidet es Probleme mit der Filterreihenfolge und Kompatibilitätskonflikte, die im WFP-Stack häufig auftreten.
- **Deutlich geringeres Risiko von NETIO-bedingten BSODs**: SockFilter läuft nicht innerhalb der NETIO-Paketpipeline, wodurch die typischen Absturzszenarien vermieden werden, die durch WFP-Callouts verursacht werden, bei denen Puffer, Klassifizierungsergebnisse oder der Paketspeicher falsch verarbeitet werden.

Was die Nachteile betrifft, so sieht der SockFilter-Treiber nur Vorgänge auf Socket-Ebene und erfasst keinen Datenverkehr, der von anderen Kernel-Treibern oder Komponenten erzeugt wird, welche die Standard-Winsock-API umgehen. Aus Sicht der Low-Level-Vernetzung kann dies als Einschränkung angesehen werden, da der Treiber nicht auf Rohpakete zugreifen oder Nicht-Socket-Datenverkehr überprüfen kann. Für eine Werbeblocker-App ist dieses Verhalten jedoch nicht nur akzeptabel, sondern optimal. Der gesamte relevante Datenverkehr von Browsern und Apps im Benutzermodus wird über Standard-Sockets geleitet, und genau das muss durch AdGuard geregelt werden. Gleichzeitig wird durch das Ignorieren von Low-Level-Treiberdatenverkehr unnötige Komplexität vermieden, Kompatibilitätsprobleme werden umgangen und die Stabilität des Systems bleibt gewahrt.
