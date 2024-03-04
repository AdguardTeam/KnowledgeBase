---
title: Internetsicherheit
sidebar_position: 3
---

Jeden Tag werden Zehntausende von Menschen Opfer von Virenangriffen oder Betrug im Internet. Wir haben der AdGuard-App spezielle Filter hinzugefügt, um Sie vor bösartigen und Phishing-Websites zu schützen.

Bislang wurden mehr als 15 Millionen Websites kategorisiert, und unsere Filter enthalten etwa 1,5 Millionen Phishing- und Malware-Websites. Denken Sie einfach mal darüber nach: 10 % aller bekannten Websites können für Sie gefährlich sein! Unerfahrene Nutzer:innen können leicht Opfer von Betrügern oder Hackern werden. Wir hoffen, dass der Schutz vor bösartigen Websites Ihnen helfen wird, alle Gefahren zu vermeiden, denen Sie begegnen könnten.

## Wie funktioniert eine Überprüfung?

Je nach verwendetem Produkt sind der Umfang und die Methoden der Überprüfungen unterschiedlich. In unseren Browsererweiterungen untersucht AdGuard nur die Seiten, die Sie besuchen. AdGuard für Windows, Mac oder Android bietet Ihnen den bestmöglichen Schutz, indem sowohl die Seiten als auch alle darauf geladenen Objekte überprüft werden.

### AdGuard für Windows, Mac und Android

Wir verwenden das Protokoll [Safe Browsing API Version 2.2](https://code.google.com/p/google-safe-browsing/wiki/Protocolv2Spec) für unsere Arbeit mit Filtern. Dieses Protokoll ermöglicht es uns, Ihre persönlichen Daten absolut sicher zu halten. Unser Server weiß nichts über die Websites, die Sie besuchen. Für die Überprüfung verwenden wir Hash-Präfixe, nicht die geöffneten URLs.

Die folgende Abbildung zeigt die Funktionsweise des Moduls Internetsicherheit am Beispiel von AdGuard für Windows.

![Funktionsalgorithmus des Moduls Internetsicherheit](https://cdn.adtidy.org/public/Adguard/En/Articles/safebrowsing_adguard_for_windows.png)

### AdGuard Browsererweiterung

Browsererweiterungen arbeiten anders und verwenden die sogenannte [*Lookup API*](https://github.com/AdguardTeam/AdguardForAndroid/issues/162#issue-115487668), um die von Ihnen besuchten Seiten zu überprüfen. Jedes Mal, wenn Sie eine Website besuchen, tauscht Ihr lokaler Client Informationen mit unserem Backend-Server in Form von Hashes und Hash-Präfixen aus. Based on this exchange, the local client determines whether or not the site is listed in the potentially dangerous sites database. Für diejenigen, die sich für den Prozess auf einer tieferen Ebene interessieren, ist der obige Link hilfreich.

Wir weisen Sie darauf hin, dass wir in keinem Fall Informationen erhalten, die es uns ermöglichen würden, festzustellen, welche Websites Sie besuchen, und diese Informationen in irgendeiner Weise zu verwenden.

Ein ungefährer Algorithmus für die Funktionsweise des Moduls Internetsicherheit ist in der nachstehenden Abbildung dargestellt.

![Funktionsalgorithmus des Moduls Internetsicherheit in den AdGuard-Browsererweiterungen.](https://cdn.adtidy.org/public/Adguard/En/Articles/safebrowsing_extension.png)

## AdGuard-Filter

Wir pflegen derzeit zwei AdGuard-Filter. Eine schützt vor Phishing und betrügerischen Websites. Die andere schützt vor bösartigen Websites, deren Besuch zu einer Virusinfektion führen kann.

### Filter für Phishing-Websites

*Phishing* ist eine Art Online-Betrug, der darauf abzielt, Zugang zu vertraulichen Daten — Benutzernamen und Passwörtern — zu erhalten. Wenn Sie sich für dieses Thema interessieren, empfehlen wir Ihnen, [diesen Artikel bei Wikipedia](https://de.wikipedia.org/wiki/Phishing) zu lesen.

Neben Phishing-Websites deckt dieser Filter auch verschiedene betrügerische Websites ab, darunter alle Arten von Betrug, den Verkauf von nicht existierenden Inhalten usw.

### Filter für bösartige Websites

This filter contains links to pages that could execute malicious code, leading to potential leaks, data loss, or damage to a user’s device. Code execution can be authorized (for example, when downloading and running the executable file) or unauthorized (for example, when being attacked with spyware).

## How do we add new addresses to our filters?

Most of the work is automated, so you can be sure that new malware and phishing addresses are added to our database as quickly as possible.

### AdGuard Browsing Security Community

An important tool for maintaining the highest level of filtering is the *AdGuard Browsing Security Community*. Alle Nutzer:innen unserer Produkte können sich der Community anschließen und uns bei der Weiterentwicklung der AdGuard-Filter helfen.

In the image below, you can see an algorithm of how Browsing Security Community works:

![So funktioniert die AdGuard Browsing Security Community](https://cdn.adtidy.org/public/Adguard/En/Articles/browsing_security_community.png)

### Möchten Sie mithelfen?

Wir nehmen jede Hilfe gerne an! Wenn Sie uns eine Meldung über eine Phishing- oder Malware-Website schicken möchten, können Sie dies über den technischen Support unter **support@adguard.com** tun.

### Falsch-positive Antworten

Gelegentlich werden einige nicht bösartige Websites zu den AdGuard-Filtern hinzugefügt. Wir tun unser Bestes, um den Prozentsatz der Falschmeldungen zu verringern, aber sie kommen trotzdem vor. Wenn Sie dieses Verhalten von AdGuard feststellen, senden Sie uns bitte eine Beschwerde über den falsch-positiven Alarm. Sie können solche Meldungen über unseren technischen Support unter **support@adguard.com** einreichen.
