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

Öffnen Sie anschließend *Einstellungen* und scrollen Sie nach unten zu *Apps*.

![Apps auswählen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/apps.jpg)

Öffnen Sie dann *Safari* → *Erweiterungen*.

![Safari auswählen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Erweiterungen auswählen *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

Im Abschnitt **DIESE ERWEITERUNGEN ERLAUBEN** finden Sie **AdGuard** unter den verfügbaren Erweiterungen.

![AdGuard wählen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/select-ag.jpg)

Tippen Sie darauf und aktivieren Sie dann den Schalter *Erweiterung erlauben*.

Stellen Sie sicher, dass im selben Bildschirm bei *Alle Websites* die Option *Zulassen* oder *Fragen* ausgewählt ist. Wenn Sie *Zulassen* wählen, müssen Sie nicht jedes Mal, wenn Sie eine neue Website besuchen, Ihre Zustimmung geben. Wenn Sie sich nicht sicher sind, wählen Sie *Fragen*, um die Berechtigungen für jeden Website zu erteilen.

![AdGuard-Erweiterung in den Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/ag-webext-in-settings.png)

### In Safari

Um die AdGuard-Erweiterung direkt im Safari-Browser zu aktivieren, tippen Sie auf das Symbol auf der linken Seite des URL-Feldes:

![Tippen Sie in Safari auf das Symbol links neben dem URL-Feld *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-1.jpg)

Tippen Sie dann auf *Erweiterungen verwalten*.

![Erweiterungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-2.jpg)

Schalten Sie im geöffneten Fenster die AdGuard-Schalter ein. Die oberste ist die AdGuard-Web-Erweiterung; die anderen sechs sind Inhaltsblocker, die für die Filterung benötigt werden.

![Erweiterungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-3.jpg)

Sie sollten nun AdGuard unter den verfügbaren Erweiterungen sehen können. Um den **Erweiterten Schutz** zu aktivieren, öffnen Sie die AdGuard-Erweiterung, tippen Sie auf das gelbe Symbol **i**, drücken Sie *Aktivieren* und bestätigen Sie die Aktion.

:::note

Wenn Sie AdGuard für iOS ohne Premium-Abonnement verwenden, können Sie den **Erweiterten Schutz** nicht aktivieren.

:::

Alternativ können Sie den **Erweiterten Schutz** auch direkt in der App im Tab **Schutz** (zweite von links in der unteren Symbolleiste) aktivieren.

Die Safari-Web-Erweiterung von AdGuard funktioniert nur auf iOS-Versionen 15 und höher.
