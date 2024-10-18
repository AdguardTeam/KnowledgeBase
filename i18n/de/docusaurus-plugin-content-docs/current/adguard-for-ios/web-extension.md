---
title: Safari-Web-Erweiterung
sidebar_position: 3
---

Web-Erweiterungen fügen benutzerdefinierte Funktionen zu Safari hinzu. [Weitere Informationen über Web-Erweiterungen](https://developer.apple.com/documentation/safariservices/safari_web_extensions)

![So sieht die Web-Erweiterung in Safari aus *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

Die Safari-Web-Erweiterung von AdGuard ist ein Tool, das sich die neuen Funktionen von iOS 15 zunutze macht. Sie dient dazu, die Möglichkeiten von AdGuard für iOS zu erweitern. Damit kann AdGuard erweiterte Filterregeln anwenden und letztlich mehr Werbung blockieren.

## Was sie bewirkt

By default, Safari provides only basic tools for content blockers. These tools don't offer the level of performance found in content blockers on other operating systems (Windows, Mac, Android). For example, AdGuard apps on other platforms can use such powerful anti-ad weapons as [CSS rules](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [Extended CSS selectors](/general/ad-filtering/create-own-filters#extended-css-selectors), and [scriptlets](/general/ad-filtering/create-own-filters#scriptlets). Unfortunately, these utilities are absolutely irreplaceable when dealing with more complex cases, such as pre-roll ads on YouTube.

Die Web-Erweiterung von AdGuard ergänzt die AdGuard-App, indem sie es der App ermöglicht, diese Art von Filterregeln anzuwenden.

Darüber hinaus kann die Safari-Web-Erweiterung von AdGuard verwendet werden, um AdGuard für iOS schnell und direkt im Browser zu verwalten. Tippen Sie auf die Schaltfläche *Erweiterungen* — das ist die Schaltfläche mit dem Puzzlesymbol, die sich je nach Gerätetyp links oder rechts von der Adressleiste befindet. Suchen Sie **AdGuard** in der Liste und tippen Sie darauf.

![Menü der Web-Erweiterung *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/ext_adguard_en.png?1)

> On iPads, AdGuard's Safari web extension can be accessed directly by tapping the AdGuard icon in the browser's address bar.

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

Öffnen Sie anschließend *Einstellungen → Safari → Erweiterungen*.

![Wählen Sie "Safari" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Wählen Sie "Erweiterungen" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

Suchen Sie den Abschnitt **Diese Erweiterungen zulassen** und suchen Sie dann **AdGuard** unter den verfügbaren Erweiterungen.

![Wählen Sie "AdGuard" im Abschnitt "Diese Erweiterungen zulassen" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings3_en.png)

Tippen Sie darauf und legen Sie dann den Schalter um. Auf demselben Bildschirm setzen Sie die Berechtigung *Alle Websites* für AdGuard entweder auf *Zulassen* oder *Fragen*. Wenn Sie *Zulassen* wählen, müssen Sie nicht jedes Mal, wenn Sie eine neue Website besuchen, Ihre Zustimmung geben. Wenn Sie sich nicht sicher sind, wählen Sie *Fragen*, um die Berechtigungen für jeden Website zu erteilen.

![Erweiterungseinstellungen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings4_en.png)

### In Safari

You can also enable the AdGuard extension from the Safari browser. To do it, tap *Extensions* (if you don't see it next to the address bar, tap the `aA` icon).

![Tippen Sie in Safari auf das Symbol aA *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari1_en.png)

Suchen Sie dann die Option *Erweiterungen verwalten* in der Liste und tippen Sie darauf. In dem geöffneten Fenster schalten Sie den Schalter neben **AdGuard** ein.

![Erweiterungen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari2_en.png)

![Erweiterungen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari3_en.png)

Wenn Sie diese Methode verwenden, müssen Sie möglicherweise die Safari-Einstellungen aufrufen, um der AdGuard-Erweiterung die erforderlichen Berechtigungen zu erteilen.

Sie sollten nun AdGuard unter den verfügbaren Erweiterungen sehen können. Tippen Sie darauf und dann auf das gelbe Symbol **i**. Aktivieren Sie den **Erweiterten Schutz**durch Antippen der Schaltfläche *Einschalten* und bestätigen Sie die Aktion.

:::note

Wenn Sie AdGuard für iOS ohne Premium-Abonnement verwenden, können Sie den **Erweiterten Schutz** nicht aktivieren.

:::

Alternativ können Sie den **Erweiterten Schutz** auch direkt in der App im Tab **Schutz** (zweite von links in der unteren Symbolleiste) aktivieren.

Die Safari-Web-Erweiterung von AdGuard funktioniert nur auf iOS-Versionen 15 und höher.
