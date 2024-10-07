---
title: App-Verwaltung
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Das Modul _App-Verwaltung_ kann durch Tippen auf den Tab _App-Verwaltung_ (drittes Symbol von links am unteren Rand des Bildschirms) aufgerufen werden. In diesem Abschnitt können Sie Berechtigungen und Filtereinstellungen für alle auf Ihrem Gerät installierten Apps verwalten.

![App-Verwaltung \*mobile\_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

Wenn Sie auf eine App tippen, können Sie deren Einstellungen verwalten:

- App-Verkehr durch AdGuard leiten
- Werbung und Trackern in dieser App blockieren (_Inhalte der App filtern_)
- HTTPS-Verkehr filtern (für Apps, die nicht im Browser ausgeführt werden, müssen Sie [das CA-Zertifikat von AdGuard im Systemspeicher installieren](/adguard-for-android/solving-problems/https-certificate-for-rooted/)). Diese Option ist nur auf gerooteten Geräten verfügbar
- Datenverkehr über den von Ihnen angegebenen Proxy-Server oder AdGuard VPN im Integrationsmodus leiten

![App-Verwaltung in Chrome \*mobile\_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

Über das Kontextmenü können Sie auch auf die Statistiken der App zugreifen.

![App-Verwaltung in Chrome. Kontextmenü \*mobile\_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### „Problemlose“ und „problematische“ Apps

Most apps work correctly when filtered. Bei solchen Apps wird der Datenverkehr durch AdGuard geleitet und standardmäßig gefiltert.

Einige Apps, wie z. B. Download Manager, Radio, System-Apps mit UID 1000 und 1001 (z. B. Google Play-Dienste), sind „problematisch“ und funktionieren möglicherweise nicht richtig, wenn sie durch AdGuard geleitet werden. Aus diesem Grund kann die folgende Warnung angezeigt werden, wenn Sie versuchen, alle Apps zu leiten oder zu filtern:

![Dialog „Alle Apps leiten“ \*mobile\_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

Um die einwandfreie Funktion aller auf Ihrem Gerät installierten Apps zu gewährleisten, empfehlen wir Ihnen dringend, nur problemfreie Apps über AdGuard zu leiten. Die vollständige Liste der Apps, die nicht für die Filterung empfohlen werden, finden Sie unter _Einstellungen_ → _Allgemein_ → _Erweitert_ → _Low-Level-Einstellungen_ → _Schutz_ → _Ausgeschlossene Apps_.
