---
title: Netzwerk
sidebar_position: 4
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Das Modul _Netzwerk_ ist der Netzwerkfilterung gewidmet, und hier finden Sie zusätzliche netzwerkbezogene Optionen. Zwei davon sind standardmäßig aktiviert: _Datenverkehrsfilterung aktivieren_ und _HTTPS filtern_. Dies sind wichtige zusätzliche Vorsichtsmaßnahmen, um Ihren Webspace besser zu filtern. Die meisten Websites verwenden jetzt HTTPS, und dies gilt auch für die Werbung. Von vielen Websites, wie youtube.com, facebook.com und x.com, ist es unmöglich, Werbung ohne HTTPS-Filterung zu entfernen. Lassen Sie also die Funktion _HTTPS filtern_ aktiviert, es sei denn, Sie haben einen triftigen Grund, dies nicht zu tun.

![Netzwerkeinstellungen \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/network/network_settings_2.png)

In diesem Modul können Sie das Kontrollkästchen _AdGuard als HTTP-Proxy verwenden_ aktivieren, um AdGuard als regulären HTTP-Proxy zu verwenden, der den gesamten Datenverkehr filtert, der ihn durchläuft. Sie können auch die Funktion _Websites mit EV-Zertifikaten filtern_ aktivieren. Extended Validation (EV) SSL-Zertifikate bieten eine stärkere Sicherheitsgarantie; die Inhaber solcher Websites müssen ein gründliches und weltweit standardisiertes Identitätsprüfungsverfahren durchlaufen, das durch EV-Richtlinien definiert ist. Daher werden Websites mit solchen Zertifikaten vertraut und nicht gefiltert.

Schließlich gibt es noch einen Abschnitt mit Proxy-Einstellungen. Dort können Sie angeben, welchen Proxyserver AdGuard verwenden soll, um Filter zu aktualisieren, neue Versionen zu erhalten usw.

### Datenverkehrsfilterung aktivieren

Die Datenverkehrsfilterung ist der zentrale Mechanismus, der es AdGuard ermöglicht, den von Anwendungen auf Ihrem Computer erzeugten Netzwerkdatenverkehr zu überprüfen und zu steuern. Wenn diese Funktion aktiviert ist, fängt AdGuard ausgehende und eingehende Verbindungen ab und gleicht sie mit seinen Filterregeln ab. Wenn eine Anfrage einer Blockierregel entspricht, kann AdGuard sie je nach Konfiguration blockieren, ändern oder zulassen. In AdGuard für Windows wird dieses Abfangen des Datenverkehrs über Netzwerktreiber umgesetzt.

Wenn die HTTPS-Filterung aktiviert ist, fängt AdGuard den TLS-Datenverkehr kontrolliert lokal ab: Es entschlüsselt ihn mithilfe seines lokalen Zertifikats, wendet Filterregeln an und verschlüsselt ihn erneut, bevor es ihn an den Browser weiterleitet. Der Treiber gewährt lediglich den Zugriff auf Systemebene, den AdGuard benötigt, um diese Verbindungen abzufangen.

In _Netzwerk_ können Sie auch die Datenverkehrsfilterung aktivieren und auswählen, welcher Treiber verwendet werden soll: SockFilter, WFP oder TDI.

#### SockFilter

Der **SockFilter** ist ein _experimenteller_, schlanker Kernel-Modus-Netzwerktreiber, der auf Socket-Ebene (TCP/UDP) arbeitet. Anstatt Pakete zu überprüfen oder zu modifizieren, während sie den gesamten Windows-Netzwerkstack durchlaufen, fängt ein Sock-Filter Socket-Aufrufe (z. B. connect, send, receive, bind) auf einer höheren, stabileren Abstraktionsebene ab. Dies eignet sich ideal für Anwendungen, die Netzwerkaktivitäten ohne Deep Packet Processing überwachen oder steuern müssen.

SockFilter wurde erstmals in Version 7.22.4 implementiert und gilt nach wie vor als instabil – es können Fehler auftreten. Sobald SockFilter vollständig getestet und implementiert ist, könnte es gegenüber anderen Treibern mehrere Vorteile bieten:

- **Es wird auf einer höheren Ebene ausgeführt, nämlich auf Socket-Ebene**: SockFilter arbeitet mit Socket-Operationen statt mit rohen Paketen, wodurch es weniger komplex und stabiler ist als die Low-Level-Paketfilterung von WFP.
- **Keine Beeinträchtigung anderer Netzwerktreiber**: Da es über den VPN-, Firewall- und Antivirus-WFP-Filtern angesiedelt ist, vermeidet es Probleme mit der Filterreihenfolge und Kompatibilitätskonflikte, die im WFP-Stack häufig auftreten.
- **Deutlich geringeres Risiko von NETIO-bedingten BSODs**: SockFilter läuft nicht innerhalb der NETIO-Paketpipeline, wodurch die typischen Absturzszenarien vermieden werden, die durch WFP-Callouts verursacht werden, bei denen Puffer, Klassifizierungsergebnisse oder der Paketspeicher falsch verarbeitet werden.

Was die Nachteile betrifft, so sieht der SockFilter-Treiber nur Vorgänge auf Socket-Ebene und erfasst keinen Datenverkehr, der von anderen Kernel-Treibern oder Komponenten erzeugt wird, welche die Standard-Winsock-API umgehen. Aus Sicht der Low-Level-Vernetzung kann dies als Einschränkung angesehen werden, da der Treiber nicht auf Rohpakete zugreifen oder Nicht-Socket-Datenverkehr überprüfen kann. Für eine Ad-Blocking-App ist dieses Verhalten jedoch nicht nur akzeptabel, sondern optimal. Der gesamte relevante Datenverkehr von Browsern und Apps im Benutzermodus wird über Standard-Sockets geleitet, und genau das muss durch AdGuard geregelt werden. Gleichzeitig wird durch das Ignorieren von Low-Level-Treiberdatenverkehr unnötige Komplexität vermieden, Kompatibilitätsprobleme werden umgangen und die Stabilität des Systems bleibt gewahrt.

#### WFP

**WFP** (Windows Filtering Platform) ist ein in Windows integriertes Netzwerk-Framework von Microsoft, das es Software ermöglicht, Netzwerkpakete auf verschiedenen Ebenen des Netzwerkstacks des Systems zu filtern und zu überwachen. AdGuard nutzt WFP, um sich sicher in den Netzwerkdatenfluss von Anwendungen einzubinden und Filterregeln anzuwenden, bevor der Datenverkehr den Browser oder das Internet erreicht. [Weitere Informationen](https://learn.microsoft.com/en-us/windows/win32/fwp/windows-filtering-platform-architecture-overview).

Obwohl es sich um einen leistungsstarken Treiber handelt, kann er Stabilitätsrisiken mit sich bringen, wie beispielsweise [gelegentliche Systemabstürze (BSOD)](https://github.com/AdguardTeam/AdguardForWindows/issues/5792) und eine geringere Internetgeschwindigkeit bei einigen Nutzern.

#### TDI

Der **TDI**-Treiber ist ebenfalls verfügbar, jedoch veraltet und kann [in einigen Versionen von Google Chrome zu Filterproblemen führen](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). [Es gibt eine vorübergehende Umgehungslösung](https://adguard.com/kb/archive/adguard-for-windows/solving-problems/tdi-driver-and-Chrome-142/), aber sie ist langfristig nicht zuverlässig.

### AdGuard VPN

Der letzte Abschnitt ist AdGuard VPN gewidmet – einem idealen Tool, das Ihnen bei jedem Besuch im Internet Sicherheit und Anonymität bietet. Sie können es herunterladen, indem Sie auf die Schaltfläche _Herunterladen_ klicken, oder Sie können die AdGuard VPN-Website aufrufen, indem Sie auf die Schaltfläche _Homepage_ klicken.

Wie funktioniert AdGuard VPN? Ohne auf technische Details einzugehen: Ein VPN erstellt einen sicheren, verschlüsselten Tunnel zwischen Ihrem Computer oder Mobilgerät und einem entfernten VPN-Server. Auf diese Weise bleibt der Datenschutz gewahrt und damit auch die Anonymität, denn ein fremder Beobachter sieht die IP-Adresse des VPN-Servers und nicht die tatsächliche IP-Adresse.

**Was AdGuard VPN leistet:**

- verbirgt Ihren tatsächlichen Aufenthaltsort und hilft Ihnen, anonym zu bleiben
- ändert Ihre IP-Adresse, um Ihre Daten vor Verfolgung zu schützen
- verschlüsselt Ihren Datenverkehr, um ihn für Dritte unlesbar zu machen
- ermöglicht Ihnen festzulegen, wo Sie VPN verwenden und wo nicht (Ausschlussfunktion)

Weitere Informationen über AdGuard VPN finden Sie in der [AdGuard VPN Wissensdatenbank](https://adguard-vpn.com/kb/).
