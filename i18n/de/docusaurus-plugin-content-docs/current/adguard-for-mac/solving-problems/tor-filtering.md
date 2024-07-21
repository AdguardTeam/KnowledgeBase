---
title: Filterung im Tor-Browser einrichten
sidebar_position: 10
---

:::info

Dieser Artikel behandelt AdGuard für Mac, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie die App funktioniert, [laden Sie AdGuard für Mac herunter](https://agrd.io/download-kb-adblock)

:::

Standardmäßig ist der Tor-Browser in der Liste der von AdGuard gefilterten Apps enthalten. Um es zu filtern, muss AdGuard jedoch die Sicherheitseinstellungen von Tor ändern. Dadurch vertraut Tor dem CA-Zertifikat von AdGuard.

Wenn Sie sich entscheiden, den Tor-Browser zu filtern, und ihn in *Preferences* → *Netzwerk* → *Anwendungen* aktivieren, wird Ihnen AdGuard dieses Dialogfeld zeigen:

![AdGuard-Dialogfeld](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

Durch die Aktualisierung der Tor-Einstellungen stellt AdGuard Folgendes ein:

`security.enterprise_roots.enabled`: true

Dadurch wird Tor Stammzertifikate vertrauen. [Mehr erfahren](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

Public Key Pinning ist eine Sicherheitsmaßnahme, mit der Websites sicherstellen können, dass die Verbindung zwischen einer Website und einem Benutzer authentisch ist. Dabei veröffentlicht die Website eine Liste mit öffentlichen Schlüsseln oder Pins, denen sie vertraut. Wenn die Erzwingungsebene auf 1 festgelegt ist, wird das Anheften für benutzerdefinierte Zertifizierungsstellen nicht erzwungen. [Mehr erfahren](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

Um die Änderungen zu übernehmen, müssen Sie den Tor-Browser neu starten.

Wenn Sie diese Einstellungen manuell ändern, wird die Tor-Filterung gestoppt.
