---
title: Netzwerk
sidebar_position: 9
---

:::info

Dieser Artikel behandelt AdGuard für Mac, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

## Allgemein

![Netzwerk](https://cdn.adtidy.org/content/kb/ad_blocker/mac/network.png)

### Anwendungen automatisch filtern

Standardmäßig blockiert AdGuard Werbung und Tracker in den meisten Browsern ([Tor Browser ist eine Ausnahme](/adguard-for-mac/solving-problems/tor-filtering)). Mit dieser Einstellung kann AdGuard auch Werbung in Apps sperren.

Um gefilterte Anwendungen zu verwalten, klicken Sie auf _Anwendungen_.

### HTTPS-Protokoll filtern

Diese Einstellung ermöglicht es AdGuard, das sichere HTTPS-Protokoll zu filtern, das derzeit von den meisten Websites und Apps verwendet wird. Standardmäßig werden Websites mit potenziell sensiblen Informationen, wie z. B. Bankdienste, nicht gefiltert. Um HTTPS-Ausschlüsse zu verwalten, klicken Sie auf _Ausschlüsse_.

Standardmäßig filtert der AdGuard keine Websites mit Extended Validation (EV)-Zertifikaten. Falls erforderlich, können Sie die Option _Websites mit EV-Zertifikaten filtern_ aktivieren.

## Outbound-Proxy

Sie können AdGuard so einrichten, dass der gesamte Datenverkehr Ihres Geräts über Ihren Proxy-Server geleitet wird.

## HTTP-Proxy

Sie können AdGuard als HTTP-Proxy-Server verwenden. So können Sie den Datenverkehr auf anderen Geräten filtern, die mit dem Proxy verbunden sind.

Vergewissern Sie sich, dass Ihr Mac und Ihr anderes Gerät mit demselben Netzwerk verbunden sind, und geben Sie den Proxy-Port auf dem Gerät ein, das Sie über Ihren Proxy-Server leiten möchten (normalerweise in den Netzwerkeinstellungen). Um auch HTTPS-Verkehr zu filtern, [übertragen Sie das Proxy-Zertifikat von AdGuard](http://local.adguard.org/cert) auf dieses Gerät. [Weitere Informationen zur Installation eines Proxy-Zertifikats](/guides/proxy-certificate)
