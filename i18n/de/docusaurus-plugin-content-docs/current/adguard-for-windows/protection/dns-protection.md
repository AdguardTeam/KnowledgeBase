---
title: DNS-Schutz
sidebar_position: 4
---

DNS-Schutz gibt Ihnen mehr Kontrolle darüber, wie Ihr Gerät mit dem Internet verbunden wird. Es gibt drei Hauptgründe, warum dies nützlich sein kann:

## 1. Ihre Privatsphäre vor Ihrem ISP schützen

Jedes Mal, wenn Sie eine Website öffnen, zum Beispiel `google.com`, sendet Ihr Browser eine Anfrage an einen DNS-Server, um die IP-Adresse der Website zu erhalten. Normalerweise gehört der DNS-Server zu Ihrem ISP (Internetdienstanbieter), was bedeutet, dass dieser die Websites, die Sie besuchen, verfolgen kann. Wenn Sie zu einem anderen DNS-Server wie AdGuard DNS wechseln, kann Ihr Internetdienstanbieter Ihre Online-Aktivitäten nicht mehr nachverfolgen.

## 2. Ihren DNS-Datenverkehr verschlüsseln

Moderne Protokolle wie DNS-over-TLS und DNS-over-HTTPS stellen sicher, dass Ihre DNS-Anfragen verschlüsselt werden. Dadurch werden sie vor dem Abfangen, dem Verändern oder dem Ausspähen durch Angreifer geschützt.

## 3. Unerwünschte Inhalte auf DNS-Ebene blockieren

Der DNS-Schutz kann Werbung, Tracker, Phishing-Websites und andere schädliche oder störende Inhalte herausfiltern, bevor sie überhaupt in Ihrem Browser oder Ihren Apps geladen werden. [Mehr über DNS-Filterung](https://adguard-dns.io/kb/general/dns-filtering/)

![DNS protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns.png)

Folgendes können Sie im DNS-Schutz konfigurieren:

## DNS-Server auswählen

![DNS servers \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/dns_server.png)

Sie können aus mehreren vertrauenswürdigen DNS-Anbietern auswählen. AdGuard selbst bietet mehrere Optionen für unterschiedliche Anforderungen:

- AdGuard DNS blockiert Werbung und Tracker.

- AdGuard DNS Familienschutz blockiert Werbung, Tracker und nicht jugendfreie Inhalte.

- AdGuard DNS Ohne Filterung bietet eine sichere und zuverlässige Verbindung ohne jegliche Filterung.

Sie können einen unserer öffentlichen Server verwenden, Ihren eigenen benutzerdefinierten DNS-Server hinzufügen oder eine andere vertrauenswürdige Option aus unserer [Liste vertrauenswürdiger DNS-Anbieter](https://adguard-dns.io/kb/general/dns-providers/) auswählen.

## DNS-Filter und -Regeln hinzufügen

Um den Schutz zu optimieren, können Sie Ihre eigenen DNS-Filter mithilfe der [DNS-Regelsyntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/) erstellen oder vorgefertigte [DNS-Filter](https://filterlists.com) importieren.

Darüber hinaus können Sie benutzerdefinierte DNS-Regeln erstellen, um Domains nach Bedarf zu blockieren, zuzulassen oder umzuleiten. Nutzen Sie dazu unseren integrierten Regelkonstruktor.
