---
title: Erweiterungen
sidebar_position: 6
---

## Benutzerskripte

Benutzerskripte (wir nennen sie auch „Erweiterungen“) sind im Grunde genommen in JavaScript geschriebene Miniprogramme. Sie ändern oder erweitern die Funktionalität einer oder mehrerer Websites. Viele AdGuard-Benutzer sind vielleicht bereits mit Benutzerskripten wie AdGuard Assistant, Popup Blocker und AdGuard Extra vertraut.

:::note Unterstützte Apps

AdGuard kann die Funktionalität einer Website erheblich erweitern, indem er als Benutzer-Script-Verwaltung fungiert. Sie können Ihre eigenen Skripte hinzufügen oder die vorhandenen Skripte in unseren drei Produkten verwalten: [AdGuard für Windows](/adguard-for-windows/features/extensions), [AdGuard für Android](/adguard-for-android/features/settings#userscripts), und [AdGuard für Mac](/adguard-for-mac/features/extensions).

:::

### Empfohlene AdGuard-Skripte

Diese Benutzerskripte stammen direkt von AdGuard und wir können garantieren, dass sie effektiv und sicher sind. Für einige der von anderen entwickelten Benutzerskripte, die wir für gut und zuverlässig halten, [blättern Sie nach unten zum nächsten Abschnitt](#top-picks). Sie können auch einige der [beliebten Websites mit Skripten](#more-userscripts) unten finden, aber bedenken Sie, dass Sie sich einem gewissen Risiko aussetzen, wenn Sie ein Benutzerskript von einer unbekannten Quelle herunterladen, da einige Skripte schädlich für Ihren Computer sein können.

#### AdGuard Extra

Eine Erweiterung, die Werbung in schwierigen Fällen blockiert, wenn der übliche filterbasierte Ansatz nicht ausreicht. AdGuard Extra ist in den Einzelanwendungen von AdGuard vorinstalliert, mit Ausnahme der Anwendung für iOS, sodass Sie nichts tun müssen, um es zu aktivieren. Wenn Sie es jedoch zusammen mit AdGuard Browsererweiterung oder einem anderen Werbeblocker verwenden möchten, müssen Sie eine zusätzliche Erweiterung verwenden. Erfahren Sie mehr auf [GitHub](https://github.com/AdguardTeam/AdGuardExtra) über dieses Benutzerskript und wie man es installiert.

![AdGuard Extra](https://cdn.adtidy.org/content/kb/ad_blocker/general/adguard-extra.png)

#### AdGuard Pop-up-Blocker

Der Name spricht für sich selbst: Es sperrt Popups — eine der lästigsten Arten von Werbung auf Websites. Erfahren Sie mehr auf [GitHub](https://github.com/AdguardTeam/PopupBlocker) über dieses Benutzerskript, dessen Hauptmerkmale und Installation.

![AdGuard Pop-up-Blocker](https://cdn.adtidy.org/content/kb/ad_blocker/general/popup-blocker-installation.png)

#### AdGuard-Assistent (alte Version)

Diese benutzerdefinierte Erweiterung wurde entwickelt, um das Filtern direkt von der Browserseite aus zu steuern (manuelles Sperren, Zulassen von Listen usw.).

:::note

Diese Version des Assistenten ist veraltet und es ergibt keinen Sinn, sie auf neuen Systemen zu verwenden, da sie durch den vollwertigen [Browser-Assistenten] (https://adguard.com/adguard-assistant/overview.html) ersetzt wurde. Der bisherige Assistent kann jedoch nützlich sein, wenn es keinen Browser-Assistenten für Ihren Browser gibt. Wenn dies bei Ihnen der Fall ist, können Sie auf [GitHub](https://github.com/AdguardTeam/AdguardAssistant) erfahren, wie Sie den AdGuard Assistenten installieren.

:::

#### AMP deaktivieren

Ein Skript, das nur in AdGuard für Android vorinstalliert ist. Es deaktiviert AMP (Accelerated Mobile Pages) auf der Google-Suchergebnisseite. Erfahren Sie mehr auf [GitHub](https://github.com/AdguardTeam/DisableAMP) über dieses Benutzerskript und wie man es installiert.

![AMP deaktivieren](https://cdn.adtidy.org/content/kb/ad_blocker/general/disable-amp-installation.png)

### Beste Tipps außerhalb von AdGuard{#top-picks}

Diese Benutzerskripte werden nicht von AdGuard entwickelt und daher können wir keine 100%ige Garantie geben, dass sie sicher sind und/oder jederzeit funktionieren. Unserer Erfahrung nach verdienen sie jedoch eine Empfehlung, weil sie alle ihren guten Ruf verdient haben.

#### Don't track me Google

Dieses Skript entfernt die Tracking-Funktion von Google aus den Links in den Google-Suchergebnissen. Sie beschleunigt das Laden der Suchergebnisse und ermöglicht es Ihnen, mit der rechten Maustaste zu klicken oder zu tippen, um die Link-URL zu kopieren.

Der Quellcode ist [auf GitHub verfügbar](https://github.com/Rob--W/dont-track-me-google). Dieses Benutzerskript kann von [GreasyFork](https://greasyfork.org/en/scripts/428243-don-t-track-me-google) heruntergeladen und in jeder AdGuard CoreLibs-basierten Anwendung installiert werden.

#### tinyShield

Ein Benutzerskript für Besucher koreanischer und einiger internationaler Websites. Das tinyShield-Benutzerskript blockiert Ad-Shield-Werbung und Anti-Adblock. Dieses Benutzerskript kann in AdGuard CoreLibs-basierten Anwendungen, Violentmonkey, Tampermonkey und [quoid/userscripts](https://github.com/quoid/userscripts) installiert werden. Erfahren Sie mehr auf [GitHub](https://github.com/List-KR/tinyShield) über dieses Benutzerskript und wie man es installiert.

### Wo kann man weitere Benutzerskripte erhalten? {#more-userscripts}

Da Benutzerskripte hauptsächlich von Enthusiasten erstellt werden, sollten Sie bei deren Installation vorsichtig sein. Jedes Skript aus einer unbekannten Quelle birgt ein potenzielles Risiko. Es gibt jedoch eine Vielzahl interessanter Skripte, die, wenn sie sorgfältig und verantwortungsbewusst installiert werden, die Nutzung einiger Websites wirklich bequemer machen können.

Im Folgenden werden einige der beliebtesten Benutzerskript-Kataloge beschrieben.

#### Userscript.Zone

[Userscript.Zone](https://www.userscript.zone) ist eine Website, die die Suche nach Benutzerskripten durch Eingabe einer passenden URL oder Domain ermöglicht. Die Website ist einfach zu bedienen und hat ein hohes Maß an Glaubwürdigkeit, da nur Skripte von moderierten Seiten angezeigt werden.

#### Greasy Fork

[Greasy Fork](https://greasyfork.org/) ist ein Benutzerskript-Katalog von Stylish-Entwicklern. Die Skripte in diesem Katalog werden moderiert, so dass ihre Glaubwürdigkeit entsprechend höher ist.

#### OpenUserJS.org

[OpenUserJS.org](https://openuserjs.org/) ist ein quelloffener Benutzerskript-Katalog, der in nodeJS geschrieben ist. Dieser Katalog wird nicht moderiert, achten Sie also auf verdächtige Skripte.

#### Community

Wenn Ihnen die Idee gefällt, Ihren Browser mit Benutzerskripten anzupassen, und Sie Fragen haben, können Sie diese auf einer dieser Websites stellen:

- [Stackoverflow](https://stackoverflow.com/questions/tagged/userscripts)
- [FreeNode](https://webchat.freenode.net/#greasemonkey)
- [Reddit](https://www.reddit.com/r/userscripts/)

### Entwicklung

#### Lizenz anfordern

Wenn Sie Ihr eigenes Benutzerskript entwickeln und testen möchten, wie es mit AdGuard zusammenwirkt, können Sie eine Lizenz anfordern, indem Sie [das Formular](https://surveys.adguard.com/en/for_developers_request/form.html) ausfüllen.

#### Kompatibilität

#### Metadaten-Block

#### Unterstützte Eigenschaften

```text
@name
@namespace
@description
@version
@match
@include
@exclude
@grant
@connect
@require
@resource
@downloadURL
@updateURL
@supportURL
@homepageURL
@homepage
@website
@source
@run-at
@noframes
@icon
@iconURL
@defaulticon
@icon64
@icon64URL
```

#### Nicht unterstützte Eigenschaften

Diese Eigenschaften werden von AdGuard einfach ignoriert.

```text
@unwrap
```

#### Unterstützte GM-Funktionen

AdGuard unterstützt sowohl die alten GM\_-Funktionen als auch die neue GM4-API, die das GM-Objekt verwendet.

#### Werte

:::note

Alle aufgeführten früheren Greasemonkey-Funktionen sind veraltet, werden aber weiterhin unterstützt.

:::

```text
GM.info / GM_info
GM.setValue / GM_setValue
GM.getValue / GM_getValue
GM.listValues / GM_listValues
GM.deleteValue / GM_deleteValue
GM.getResourceUrl / GM_getResourceURL
GM.setClipboard / GM_setClipboard
GM.xmlHttpRequest / GM_xmlhttpRequest
GM.openInTab / GM_openInTab
GM.notification
unsafeWindow
GM_getResourceText
GM_addStyle
GM_log
```

[Hier](https://wiki.greasespot.net/GM.info) finden Sie weitere Informationen über die Greasemonkey-API.

#### Beispiel

```javascript
// ==Benutzerskript==
// @name            Name, wie er dem Benutzer angezeigt wird, wenn das Gebietsschema Englisch oder unbekannt ist
// @name:ru         Name, wie er dem Benutzer angezeigt wird, wenn das Gebietsschema russisch ist
// @description     Beschreibung, wie sie dem Benutzer angezeigt wird, wenn das Gebietsschema englisch oder unbekannt ist
// @description:ru  Beschreibung, wie sie dem Benutzer angezeigt wird, wenn das Gebietsschema russisch ist
// @icon            https://myhomepage.com/myuserscript.png
// @version         1.0.0.0
// @downloadURL     https://dl.myhomepage.org/myuserscript.user.js
// @updateURL       https://dl.myhomepage.org/myuserscript.meta.js
// @homepageURL     https://myhomepage.com/myuserscript
// @include         *
// @exclude         *://website.com/*
// @resource        https://myhomepage.com/myuserscript.css
// @require         https://myhomepage.com/mylibrary.js
// @grant           property:settings
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_deleteValue
// @grant           GM_listValues
// @grant           GM_getResourceText
// @grant           GM_getResourceURL
// @grant           GM_addStyle
// @grant           GM_log
// @grant           GM_setClipboard
// @grant           GM_xmlhttpRequest
// @grant           unsafeWindow
// @grant           GM_info
// @grant           GM_openInTab
// @grant           GM_registerMenuCommand
// @run-at document-start
// ==/UserScript==
!function(){(
    console.log("I am loaded!");
)}();
```

## Benutzerstile (Userstyles)

Mit Benutzerstilen kann man das Aussehen beliebter Websites ändern.

AdGuard bietet die Möglichkeit, eigene Benutzerstile hochzuladen oder zu erstellen. Da es sich hierbei um eine technisch anspruchsvolle Funktion handelt, benötigen Sie einige Kenntnisse in HTML und CSS.

:::info Unterstützte Apps

Derzeit gibt es zwei AdGuard-Anwendungen, mit denen Sie Benutzerstile erstellen und verwalten können: AdGuard für Windows (v7.19 oder höher) und AdGuard für Mac (v2.16 oder höher). Es ist zudem geplant, diese neue Funktion in AdGuard v4.8 für Android in naher Zukunft zu implementieren.

:::

Es handelt sich hierbei um eine experimentelle Funktion. Wenn Sie also beim Hinzufügen oder Erstellen eines Benutzerstils auf Probleme stoßen, wenden Sie sich bitte an unser Support-Team unter <support@adguard.com>.

### So richten Sie einen Benutzerstil in AdGuard ein

Sie können Benutzerstile von verschiedenen Websites herunterladen. Eine der populärsten Benutzerstil-Webseiten ist [https://userstyles.world/](https://userstyles.world/explore), die hier als Beispiel für die folgende Anleitung zur Einrichtung des Benutzerstils in AdGuard verwendet wird.

1. Folgen Sie dem obigen Link und wählen Sie den gewünschten Benutzerstil

2. Klicken Sie auf _Kopieren_ neben der Adresse des Benutzerstils

3. Öffnen Sie die Einstellungen von AdGuard ➜ _Erweiterungen_

4. Drücken Sie auf die Schaltfläche [+] und fügen Sie den Benutzerstil-Link ein

5. Fertig!

Wenn Sie mit den CSS-Regeln vertraut sind, können Sie auch selbst Benutzerstile erstellen.

:::note

Es werden keine Benutzerstile unterstützt, die `@var` oder `@advanced` in den Metadaten enthalten. AdGuard unterstützt auch nicht `@preprocessor` ohne den `default`-Wert.

:::

1. Öffnen Sie die Einstellungen von AdGuard ➜ _Erweiterungen_

2. Drücken Sie auf die Schaltfläche [+] und wählen Sie die Option _Benutzerstil erstellen_. Es wird ein neues Fenster auf Ihrem Bildschirm angezeigt

3. Um einen Benutzerstil zu erstellen, schreiben Sie zunächst den Titel mit Metadaten, zum Beispiel

   ```CSS
   /* ==UserStyle==
   @name New userstyle
   @version 1.0
   ==/UserStyle== */
   ```

4. Schreiben Sie den CSS-Teil nach den Metadaten. AdGuard unterstützt den Abgleich von Website-Domainnamen (`@-moz-document domain(…), …`). Zum Beispiel:

   ```CSS
   body {
     background: gray;
     }
   ```

   oder:

   ```CSS
   @-moz-document domain('example.org'),
   domain('example.net'),
   domain('example.com') body {
     background: gray;
     }
   ```

5. Wenn Sie fertig sind, drücken Sie _Speichern und schließen_. Ihr neuer Benutzerstil wurde erfolgreich zu AdGuard hinzugefügt

### Beispiel

```css
/* ==UserStyle==
@name         Example userstyle
@namespace    https://example.org/userstyle
@homepageURL  https://example.org/userstyle
@version      1.0.0
@license      Other
@description  This is an example
@author       example
@preprocessor default
==/UserStyle== */
@-moz-document regexp("https?\:\/\/(www\.)?example\.(org|com).*") {
    body {
        background-color: #000000 !important;
    }
}
```
