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

### SockFilter und andere Netzwerktreiber

In _Netzwerk_ können Sie auch die Datenverkehrsfilterung aktivieren und auswählen, welcher Treiber verwendet werden soll: SockFilter, WFP oder TDI.

**WFP** (Windows Filtering Platform) ist ein leistungsstarker Treiber, kann jedoch für einige Benutzer Stabilitätsrisiken mit sich bringen, wie beispielsweise [gelegentliche Systemabstürze (BSOD)](https://github.com/AdguardTeam/AdguardForWindows/issues/5792).

Der **TDI**-Treiber ist ebenfalls verfügbar, jedoch veraltet und kann [in einigen Versionen von Google Chrome zu Filterproblemen führen](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). [A temporary workaround exists](https://adguard.com/kb/adguard-for-windows/solving-problems/tdi-driver-and-Chrome-142/), but it’s not a reliable long-term solution.

Der **SockFilter** ist ein _experimenteller_, schlanker Kernel-Modus-Netzwerktreiber, der auf Socket-Ebene (TCP/UDP) arbeitet. Anstatt Pakete zu überprüfen oder zu modifizieren, während sie den gesamten Windows-Netzwerkstack durchlaufen, fängt ein Sock-Filter Socket-Aufrufe (z. B. connect, send, receive, bind) auf einer höheren, stabileren Abstraktionsebene ab. This makes it ideal for applications that need to monitor or control network activity without deep packet processing.

Derzeit ist SockFilter Right noch instabil, und es können Probleme auftreten. Nach vollständiger Erprobung und Implementierung bietet SockFilter gegenüber anderen Treibern mehrere entscheidende Vorteile:

- **Es wird auf einer höheren Ebene ausgeführt**: SockFilter arbeitet mit Socket-Operationen statt mit Rohpaketen, wodurch es weniger komplex und stabiler ist als die Low-Level-Paketfilterung von WFP.
- **Keine Beeinträchtigung anderer Netzwerktreiber**: Da es über den VPN-, Firewall- und Antivirus-WFP-Filtern angesiedelt ist, vermeidet es Probleme mit der Filterreihenfolge und Kompatibilitätskonflikte, die im WFP-Stack häufig auftreten.
- **Deutlich reduziertes Risiko von NETIO-bedingten BSODs**: SockFilter wird nicht innerhalb der NETIO-Paketpipeline ausgeführt, sodass die typischen Absturzszenarien vermieden werden, die durch WFP-Callouts verursacht werden, die Puffer, Klassifizierungsergebnisse oder Paketspeicher fehlerhaft verarbeiten.

Was die Nachteile betrifft, so sieht der SockFilter-Treiber nur Vorgänge auf Socket-Ebene und erfasst keinen Datenverkehr, der von anderen Kernel-Treibern oder Komponenten erzeugt wird, welche die Standard-Winsock-API umgehen. Aus Sicht der Low-Level-Vernetzung kann dies als Einschränkung angesehen werden, da der Treiber nicht auf Rohpakete zugreifen oder Nicht-Socket-Datenverkehr überprüfen kann. However, for an ad-blocking application, this behavior is not just acceptable but optimal. All relevant traffic from browsers and user-mode applications goes through standard sockets, and that's exactly what we need to control. At the same time, ignoring low-level driver traffic removes unnecessary complexity, avoids compatibility issues, and keeps the system stable.

### AdGuard VPN

The last section is dedicated to AdGuard VPN — an ideal tool that provides security and anonymity each time you browse the Internet. You can download it by clicking the _Download_ button or go to the AdGuard VPN website by clicking the _Homepage_ button.

Wie funktioniert AdGuard VPN? Ohne auf technische Details einzugehen, kann gesagt werden, dass VPN einen sicheren verschlüsselten Tunnel zwischen einem Gerät und einem entfernten VPN-Server herstellt. Auf diese Weise bleibt der Datenschutz gewahrt und damit auch die Anonymität, denn ein fremder Beobachter sieht die IP-Adresse des VPN-Servers und nicht die tatsächliche IP-Adresse.

**Was AdGuard VPN leistet:**

- verbirgt Ihren tatsächlichen Aufenthaltsort und hilft Ihnen, anonym zu bleiben
- ändert Ihre IP-Adresse, um Ihre Daten vor Verfolgung zu schützen
- verschlüsselt Ihren Datenverkehr, um ihn für Dritte unlesbar zu machen
- lässt Sie konfigurieren, wo VPN verwendet werden soll und wo nicht (Ausschlussfunktion)

Weitere Informationen über AdGuard VPN finden Sie in der [AdGuard VPN Wissensdatenbank](https://adguard-vpn.com/kb/).
