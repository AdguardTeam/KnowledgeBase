---
title: Zertifikatsbezogene Probleme
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Windows, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Um den HTTPS-Verkehr zu filtern und Werbung und Tracker effizient zu blockieren, generiert AdGuard ein spezielles (und einzigartiges) Stammzertifikat und installiert es im Systemspeicher. You can learn more about why a certificate is required by reading [this article](/general/https-filtering/what-is-https-filtering).

Normalerweise vertrauen Browser dem AdGuard-Zertifikat, sobald es während des Installationsvorgangs zum Zertifikatspeicher des Systems hinzugefügt wurde. In manchen Fällen reicht dies jedoch nicht aus, und Sie können auf Warnungen oder Fehler stoßen. Dies geschieht am häufigsten in Firefox-basierten Browsern wie Mozilla Firefox, PaleMoon, Waterfox usw. oder in Yandex.Browser.

Hier einige häufig auftretende Probleme:

- [_Potential Security Risk_ error in Firefox-based browsers](#potential-security-risk-error-in-firefox-based-browsers)
- [Yandex.Browser certificate warning](#yandexbrowser-certificate-warning)
- [Non-official add-ons don’t update in Firefox-based browsers](#non-official-add-ons-dont-update-in-firefox-based-browsers)

## _Potential Security Risk_ error in Firefox-based browsers

![Security risk error](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Alte FireFox-Versionen sowie darauf basierende Browser vertrauen nicht auf Zertifikate aus dem Systemspeicher, sondern nur auf solche aus dem lokalen Speicher. Seit Version 68 vertraut FireFox den Systemzertifikaten, aber Sie können immer noch die Fehlermeldung „Verbindung ist nicht vertrauenswürdig” erhalten. If something like this happens, first try to click the _Reinstall Certificate_ button — you will find it in the _Network_ tab.

![Reinstall Certificate](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Wenn das nicht hilft, folgen Sie den Anweisungen zum manuellen Hinzufügen des AdGuard-Zertifikats zum FireFox-Speicher.

> Diese Anleitung gilt für den Firefox-Browser. Die Namen der Schaltflächen und Menüpunkte können in anderen Firefox-basierten Browsern abweichen.

1. Starten Sie AdGuard.

2. Go to [https://local.adguard.org/cert](https://local.adguard.org/cert) and click the _Download_ button. The browser should start downloading **cert.cer** file.

   :::note

   You can also open the download page by clicking the link via the AdGuard app at _Settings → Network → HTTPS filtering_.

   :::

   ![Certificate settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

3. Open your browser and then open _Settings_.

4. Go to _Privacy & Security_ tab.

5. Scroll down to _Certificates_ and click the _View Certificates_ button.

   ![View certificates window](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

6. Select _Authorities_ tab.

7. Click _Import..._.

   ![Certificate settings — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

8. Browse the downloaded **cert.cer** file and click _Open_.

9. Check the _Trust this CA to identify websites_ box and then click _OK_.

   ![Certificate settings — checkbox](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

Sie haben das AdGuard-Zertifikat erfolgreich installiert. Starten Sie den Browser neu und der Fehler sollte behoben sein.

## Yandex.Browser-Zertifikat-Warnung

Wenn Sie sowohl AdGuard für Windows als auch Yandex.Browser verwenden, sind Sie vielleicht schon auf diese Warnung gestoßen:

![Yandex certificate warning](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### Warum geschieht das?

Sowohl bei AdGuard als auch bei Yandex wird die Sicherheit im Internet sehr ernst genommen. Derzeit warnt Yandex vor jedem Zertifikat, das vom Browser nicht erkannt wird. Dies ist nicht unbegründet, denn manchmal können böswillige Anwendungen ihre eigenen Zertifikate einschleusen und dies nutzen, um das System zu schädigen und private Daten zu stehlen.

AdGuard fügt jedoch auch sein Zertifikat zu den vertrauenswürdigen Zertifikaten hinzu. Dies führt zu der Warnmeldung, die Sie erhalten haben.

### So kann das Problem gelöst werden

The easiest way is to click the **Go to site** button. Dadurch wird Yandex.Browser angewiesen, das AdGuard-Zertifikat als vertrauenswürdig zu betrachten, zumindest für eine gewisse Zeit. Normalerweise werden Sie diese Meldung nicht mehr sehen, aber es ist nicht ausgeschlossen, dass sie gelegentlich angezeigt wird, aus welchen Gründen auch immer. In such cases, simply press the same button again _(make sure it is AdGuard's certificate!)_.

Disabling the HTTPS filtering in AdGuard will also prevent Yandex.Browser from showing this message again, but it comes with a big price: all ads that are loaded by HTTPS (including **Yandex's own ads**) will show up — on such websites as YouTube, Facebook, Instagram, and many more. Wir raten dringend davon ab, wenn Sie die Qualität der Werbeblockierung hoch halten möchten.

## Nicht-offizielle Add-ons lassen sich in Firefox-basierten Browsern nicht aktualisieren

Wenn Sie Firefox-basierte Browser verwenden und Add-ons nutzen, die nicht aus Mozillas offiziellem Katalog stammen — und die HTTPS-Filterung in AdGuard aktiviert ist — können diese Add-ons nicht aktualisiert werden. Hier ist der Grund dafür.

Um Add-ons zu aktualisieren, prüft Firefox, ob die Verbindung zum Update-Server durch ein Zertifikat gesichert ist, das von einer vertrauenswürdigen Zertifizierungsstelle (CA) ausgestellt wurde. Firefox-basierte Browser vertrauen nur Zertifikaten von Zertifizierungsstellen, die in Mozillas integrierter Liste enthalten sind — eine Sicherheitsmaßnahme, um potenziell unsichere Aktualisierungen zu verhindern.

Das Zertifikat von AdGuard ist zwar sicher, ist aber nicht in dieser Liste enthalten. Aus diesem Grund sind Mozilla-Domains von der HTTPS-Filterung im AdGuard ausgeschlossen.

Nicht-offizielle Add-ons verwenden jedoch Server von Drittanbietern für Updates, und diese sind nicht standardmäßig von der HTTPS-Filterung ausgeschlossen. Sobald Firefox die Verbindung überprüft, wird er erkennt, dass das AdGuard-Zertifikat anstelle des Originalzertifikats verwendet wird und unterbindet das Update.

Wenn Sie Updates für solche Add-ons benötigen, sollten Sie AdGuard vorübergehend deaktivieren.
