---
title: Filterung im Tor-Browser einrichten
sidebar_position: 10
---

:::info

This article covers AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

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

If you manually change these settings, Tor filtering will be stopped.
