---
title: So nutzen Sie AdGuard weiter, nachdem Chrome MV2 entfernt hat
sidebar_position: 1
---

In diesem Artikel werden zwei Möglichkeiten beschrieben, wie Sie weiterhin Werbung blockieren können: der Wechsel zur MV3-Version der AdGuard-Browsererweiterung in Chrome oder die weitere Verwendung von MV2 in einem Browser, der dies noch unterstützt.

Der [Chrome Web Store hat alle verbleibenden Manifest V2 (MV2)-Erweiterungen entfernt, einschließlich **AdGuard Werbeblocker MV2**](https://adguard.com/de/blog/adguard-adblocker-manifestv2-removal.html). Chrome deaktiviert solche Erweiterungen und meldet sie als nicht mehr unterstützt. Die MV3-Version ist davon nicht betroffen.

:::caution

Lassen Sie nur einen Werbeblocker im Browser aktiviert. Wenn zwei Blocker denselben Datenverkehr filtern, führt dies zu unblockierter Werbung, fehlerhaften Seitenlayouts und Seiten, die endlos laden. Wenn der Browser über eine integrierte Werbeblockierung verfügt, deaktivieren Sie diese vor der Installation von AdGuard.

:::

## Zu MV3 in Chrome wechseln

MV3 ist die aktuelle Version der AdGuard-Browsererweiterung für Chrome und die einzige, die im Chrome Web Store verfügbar ist.

Wenn Sie AdGuard von der Hauptseite des Web Stores installiert und Chrome erlaubt haben, Erweiterungen zu aktualisieren, verfügen Sie bereits über MV3 und müssen nichts weiter tun.

Wenn Sie **AdGuard Werbeblocker MV2** von dessen eigener Web Store-Seite installiert haben, kann Chrome die Erweiterung nicht automatisch ersetzen: Die beiden Versionen haben unterschiedliche Erweiterungs-IDs. So wechseln Sie zu MV3:

1. Installieren Sie den [AdGuard Werbeblocker](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg) aus dem Chrome Web Store.
2. Öffnen Sie `chrome://extensions`, entfernen Sie **AdGuard Werbeblocker MV2** und aktivieren Sie die MV3-Version.
3. Fügen Sie Ihre benutzerdefinierten Regeln und Filter von Drittanbietern erneut hinzu: MV3 importiert diese nicht aus MV2.
4. Laden Sie geöffnete Tabs neu.

MV3 wendet die meisten Blockierungsregeln über die deklarative Engine des Browsers an, was die Anzahl der Regeln begrenzt und die Art und Weise ändert, wie Filter aktualisiert werden. Lesen Sie vor dem Wechsel den Artikel [AdGuard Browser-Erweiterung für Chrome MV3](/adguard-browser-extension/mv3-version/).

## MV2 in anderen Browsern weiterverwenden

MV2 und MV3 basieren auf derselben Codebasis und werden gemeinsam veröffentlicht, sodass MV2 weiterhin Aktualisierungen der Filter-Engine, Filter-Updates, Fehlerbehebungen und Sicherheitskorrekturen erhält. Die Unterstützung für MV2 endet erst, wenn ein Browser Manifest V2 nicht mehr ausführt, und nicht, wenn wir die Bereitstellung von Updates einstellen.

### Firefox

Firefox unterstützt MV2-Erweiterungen und hat keine Pläne, diese einzustellen. AdGuard für Firefox basiert auf MV2 und wird über Firefox Add-ons bereitgestellt, sodass es wie jedes andere Add-on installiert und aktualisiert wird.

1. Rufen Sie die [Add-on-Seite für AdGuard Werbeblocker](https://addons.mozilla.org/firefox/addon/adguard-adblocker/) auf.
2. Klicken Sie auf _Zu Firefox hinzufügen_ und bestätigen Sie die Berechtigungen.

   ![AdGuard in Firefox \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/adguard_firefox.png)

Der verbesserte Schutz vor Aktivitätenverfolgung von Firefox blockiert Tracker statt Werbung und kann neben AdGuard aktiviert bleiben.

### Brave

Brave unterstützt MV2 über einen eigenen Kompatibilitätsmodus und hostet den AdGuard-Build auf seinem Backend, unabhängig vom Chrome Web Store. Brave installiert und aktualisiert diesen automatisch.

1. Rufen Sie `brave://settings/extensions/v2` auf.
2. Aktivieren Sie die Option _AdGuard aktivieren_.

   ![MV2-Erweiterungen in den Brave-Einstellungen \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/adguard_brave.png)

Brave beschreibt die MV2-Unterstützung als Best-Effort-Leistung und nicht als dauerhafte Garantie. Brave Shields blockiert ebenfalls Werbung — deaktivieren Sie es, wenn AdGuard die Filterung übernehmen soll.

### ungoogled-chromium, Helium und andere Chromium-Builds

Diese Browser behalten die MV2-Unterstützung bei, verfügen jedoch über keine Integration in den Chrome Web Store, sodass die Erweiterung manuell installiert werden muss:

- **ungoogled-chromium** ist ein modifiziertes Chromium, das die MV2-Unterstützung per Patch wiederherstellt.
- **Helium** ist ein quelloffener, Chromium-basierter Browser, der Chromium-Erweiterungen unterstützt und diejenigen importieren kann, die bereits in Ihrem vorherigen Browser installiert waren. Er blockiert standardmäßig Werbung und Tracker — deaktivieren Sie dies, wenn AdGuard die Filterung übernehmen soll.
- Für **portable Chromium-Builds**, die MV2 beibehalten haben, gelten dieselben Schritte. Prüfen Sie die Dokumentation des jeweiligen Builds, da einige Entwickler die MV2-Unterstützung entfernt haben.

1. Laden Sie `chrome.zip` von den [AdGuard-Browsererweiterung Releases](https://github.com/AdguardTeam/AdguardBrowserExtension/releases/latest) herunter und entpacken Sie die Datei in einen Ordner, den Sie nicht verschieben oder löschen.
2. Öffnen Sie `chrome://extensions`.
3. Aktivieren Sie den _Entwicklermodus_.
4. Klicken Sie auf _Entpackt laden_ und wählen Sie den Erweiterungsordner aus.

![Entwicklermodus \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

![Entpackt laden \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

:::note

Eine entpackte Erweiterung wird aus dem von Ihnen ausgewählten Ordner geladen und funktioniert nicht mehr, wenn dieser Ordner verschoben oder gelöscht wird. Entpackte Erweiterungen werden nicht automatisch aktualisiert: Um eine neue Version zu erhalten, laden Sie den Build erneut herunter und laden Sie ihn neu.

:::

Den vollständigen Ablauf von _Entwicklermodus_ → _Entpackt laden_ finden Sie im Abschnitt _So installieren Sie entpackte Erweiterung im Browser_ unter [So debuggen Sie Regeln in der MV3-Erweiterung](/adguard-browser-extension/solving-problems/debug-rules/).

### Microsoft Edge

Der MV2-Build ist weiterhin über Edge Add-ons verfügbar, Microsoft stellt Manifest V2 jedoch schrittweise ein: Erste Warnungen erschienen im August 2026, und der Übergang für die Endbenutzerversion von Edge wird voraussichtlich Ende 2026 abgeschlossen sein. Verwaltete Unternehmensinstallationen erhalten mehr Zeit. Betrachten Sie Edge als eine vorübergehende Option. Siehe [Edge stellt die Erweiterungsplattform ein, auf die sich Werbeblocker verlassen haben](https://adguard.com/de/blog/edge-phasing-out-mv2-ad-blockers.html).

## Systemweite AdGuard-Apps

Die AdGuard-App für [Windows](https://adguard.com/de/adguard-windows/overview.html), [Mac](https://adguard.com/de/adguard-mac/overview.html), [Android](https://adguard.com/de/adguard-android/overview.html), [iOS](https://adguard.com/de/adguard-ios/overview.html) und [Linux](https://adguard.com/de/adguard-linux/overview.html) filtert den Datenverkehr in allen Browsern und anderen Anwendungen, unabhängig von der Manifest-Version.
