---
title: Safari-Web-Erweiterung
sidebar_position: 3
---

Web-Erweiterungen fügen benutzerdefinierte Funktionen zu Safari hinzu. [Weitere Informationen über Web-Erweiterungen](https://developer.apple.com/documentation/safariservices/safari_web_extensions)

![So sieht die Web-Erweiterung in Safari aus *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

Die Safari-Web-Erweiterung von AdGuard ist ein Tool, das sich die neuen Funktionen von iOS 15 zunutze macht. Sie dient dazu, die Möglichkeiten von AdGuard für iOS zu erweitern. Damit kann AdGuard erweiterte Filterregeln anwenden und letztlich mehr Werbung blockieren.

## Was sie bewirkt

Standardmäßig bietet Safari nur grundlegende Tools für Inhaltsblocker. Diese Tools sind nicht so leistungsfähig wie Inhaltsblocker auf anderen Betriebssystemen (Windows, Mac, Android). Beispielsweise können AdGuard-Apps auf anderen Plattformen so mächtige Anti-Werbe-Waffen wie [CSS-Regeln](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [Erweiterte CSS-Selektoren](/general/ad-filtering/create-own-filters#extended-css-selectors) und [Scriptlets](/general/ad-filtering/create-own-filters#scriptlets)verwenden. Leider sind diese Hilfsmittel bei komplexeren Fällen, wie z. B. Pre-Roll-Anzeigen auf YouTube, absolut unersetzlich.

Die Web-Erweiterung von AdGuard ergänzt die AdGuard-App, indem sie es der App ermöglicht, diese Art von Filterregeln anzuwenden.

Darüber hinaus kann die Safari-Web-Erweiterung von AdGuard verwendet werden, um AdGuard für iOS schnell und direkt im Browser zu verwalten. Tippen Sie auf die Schaltfläche *Erweiterungen* — das ist die Schaltfläche mit dem Puzzlesymbol, die sich je nach Gerätetyp links oder rechts von der Adressleiste befindet. Suchen Sie **AdGuard** in der Liste und tippen Sie darauf.

![Menü der Web-Erweiterung *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/open-safari-assistant.jpg)

> Auf dem iPad kann die Safari-Web-Erweiterung von AdGuard direkt durch Tippen auf das AdGuard-Symbol in der Adressleiste des Browsers aufgerufen werden.

Dort wird die folgende Liste von Optionen angezeigt:

- **Schutz auf der Website aktivieren/deaktivieren**. Wenn Sie die Option ausschalten, wird AdGuard für die aktuelle Website vollständig deaktiviert und eine entsprechende Ausschlussregel hinzugefügt. Wenn Sie die Option wieder einschalten, wird der Schutz für die Website wieder aktiviert und die Regel gelöscht. Es wird einige Zeit dauern, bis eine solche Änderung wirksam wird.

- **Manuelles Sperren von Elementen auf der aktuellen Seite**. Tippen Sie auf die Schaltfläche *Element auf dieser Seite sperren*, um ein Pop-up zum Sperren von Elementen aufzurufen. Wählen Sie ein beliebiges Element auf der Seite aus, das Sie ausblenden möchten, passen Sie den Auswahlbereich an, lassen Sie die Änderungen in der Vorschau anzeigen und bestätigen Sie das Entfernen. Eine entsprechende Filterregel wird AdGuard hinzugefügt. Sie können diese Regel später deaktivieren oder löschen, um die Änderung zu widerrufen.

- **Problem melden**. Tippen Sie auf den kleinen Pfeil am unteren Ende des Fensters und dann auf „AdGuard“, um die Schaltfläche *Problem melden* aufzurufen. Verwenden Sie diese Option, um einen Bericht über eine verpasste Anzeige oder ein anderes Problem auf der aktuellen Seite zu senden.

## So aktivieren Sie die Safari-Web-Erweiterung von AdGuard

:::note

Die Safari-Web-Erweiterung von AdGuard benötigt für ihre Funktion Zugriff auf den Inhalt von Webseiten, nutzt diesen aber nicht für andere Zwecke als das Blockieren von Werbung.

:::

### In den iOS-Einstellungen

Die Web-Erweiterung ist kein eigenständiges Werkzeug und erfordert AdGuard für iOS. Wenn Sie AdGuard für iOS noch nicht auf Ihrem Gerät installiert haben, [installieren Sie bitte zunächst die App](../installation) und schließen Sie den Installationsvorgang ab, um die App für die Arbeit vorzubereiten.

Once done, open the *Settings* app and scroll down to *Apps*.

![Select Apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/apps.jpg)

Then, open *Safari* → *Extensions*.

![Select Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Select Extensions *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

In the **ALLOW THESE EXTENSIONS** section find **AdGuard** among the available extensions.

![Select AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/select-ag.jpg)

Tap it, then toggle the *Allow Extension* switch on.

Lower on the same screen, make sure *All Websites* is set *Allow* or *Ask*. If you choose *Allow*, you won't have to give permission every time you visit a new website. If you are unsure, choose *Ask* to grant permissions on a per-site basis.

![AdGuard extension in Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/ag-webext-in-settings.png)

### In Safari

To enable the AdGuard extension right from the Safari browser, tap the icon on the left side of the URL field:

![In Safari tap icon on the left of URL field *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-1.jpg)

Then, tap *Manage Extensions*.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-2.jpg)

In the opened window, turn on the AdGuard switches. The top one is the AdGuard Web extension; the other six are content blockers needed for filtering.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-3.jpg)

You should now be able to see AdGuard among the available extensions. To enable **Advanced protection**, open AdGuard extension, tap the yellow **i** icon, press *Enable*, and confirm the action.

:::note

If you use AdGuard for iOS without Premium subscription, you won't be able to enable **Advanced protection**.

:::

Alternatively, you can enable **Advanced protection** directly from the app, in the **Protection** tab (second from the left in the bottom icon row).

AdGuard's Safari Web extension only works on iOS versions 15 and later.
