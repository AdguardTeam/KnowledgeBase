---
title: Filterprobleme in Chrome 142+ bei Verwendung des TDI-Treibers
sidebar_position: 1
---

:::info

Dieser Artikel beschreibt AdGuard für Windows v8.0, einen umfassenden Werbeblocker, der Ihr Gerät auf Systemebene schützt. Es handelt sich hierbei um eine Beta-Version, die sich noch in der Entwicklung befindet. Um es auszuprobieren, laden Sie die [Beta-Version von AdGuard für Windows](https://agrd.io/windows_beta) herunter.

:::

Einige könnten bemerken, dass [die App die Filterung des Datenverkehrs in Chromium-basierten Browsern stoppt](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). Ab Google Chrome 142+ erscheint der Browser-Datenverkehr nicht mehr auf der TDI-Treiberebene. Dadurch kann AdGuard ihn nicht mehr prüfen oder filtern.

Dieses Verhalten ist kein Bug in AdGuard, sondern eine Folge der jüngsten architektonischen und sicherheitsbezogenen Änderungen in modernen Browsern.

## Warum das passiert

Chromium-basierte Browser (Chrome, Edge, Brave, Vivaldi usw.) haben ihre Sicherheitsarchitektur verstärkt. Eine wesentliche Änderung besteht darin, sensible interne Prozesse in den [Windows AppContainer Sandbox](https://learn.microsoft.com/en-us/windows/win32/secauthz/appcontainer-isolation) zu verschieben, einschließlich des Netzwerkdienstes, der den gesamten Browser-Datenverkehr verwaltet.

### Was hat sich in Chrome 142 geändert?

Ab Chrome 142 wird der Netzwerkdienstprozess standardmäßig innerhalb von AppContainer gestartet.

Wenn das passiert, nutzen Apps, die in einem AppContainer ausgeführt werden, nicht mehr die veraltete TDI-Schnittstelle. Stattdessen wird ihr Datenverkehr über den moderneren WSK-(Winsock Kernel)-Stack geleitet. Infolgedessen kann der TDI-Treiber Verbindungen, die über WSK laufen, weder sehen noch abfangen oder verarbeiten. Der gesamte Browserverkehr bleibt für den von AdGuard verwendeten TDI-Treiber unsichtbar.

Dieses Verhalten wird ausschließlich durch die Sandboxing-Richtlinien von Chrome und interne Experimente (Feldversuche) gesteuert, nicht durch Benutzereinstellungen.

## Warum dies AdGuard betrifft

Der TDI-Treiber ist eine veraltete Windows-Technologie, die von Microsoft seit vielen Jahren nicht mehr unterstützt wird und als veraltet gilt. Er ist nicht kompatibel mit den modernen Isolations- und Sandboxing-Modellen, die von Browsern verwendet werden.

Deshalb wird die TDI-basierte Verkehrssichtbarkeit zunehmend instabil. In einigen Browsern ist sie bereits vollständig verschwunden, und irgendwann wird sie ganz verschwinden.

AdGuard behandelt den TDI-Treiber bereits als veraltet, und seine vollständige Entfernung ist im Zuge der Weiterentwicklung des Produkts geplant.

## Vorübergehende Lösung

Bestimmte Änderungen in der Windows-Registry können den Browser dazu zwingen, die Verwendung von AppContainer zu stoppen, wodurch dessen Prozesse wieder im nicht sandboxed Modus ausgeführt werden. Der Netzwerkdienst verwendet nicht mehr den WSK-Stack, sondern greift auf einen Netzwerkpfad zurück, den der TDI-Treiber sehen kann. AdGuard ist dann wieder in der Lage, den Browserverkehr zu filtern.

### Wie man die Registry in Chromium-basierten Browsern ändert

:::warning

Zum Bearbeiten der Registry sind Administratorrechte erforderlich. Fehlerhafte Änderungen können die Stabilität und Sicherheit des Systems oder Browsers beeinträchtigen. Erstellen Sie immer eine Sicherungskopie des Registry-Zweigs, bevor Sie sie ändern.

Bevor Sie fortfahren, sollten Sie bedenken, dass diese Lösung die Sicherheit von Sandbox/AppContainer verringert und den Browser weniger isoliert macht. Die Änderung gilt systemweit, da sie HKLM betrifft. Sie sollte daher nur zu Debug-Zwecken, für vorübergehende Workarounds, in kontrollierten Umgebungen oder dann eingesetzt werden, wenn die Verkehrserfassung über TDI wirklich notwendig ist.

Es sollte **nicht** breitflächig auf Endbenutzergeräte übernommen werden. **Fahren Sie nur fort, wenn Sie die Auswirkungen verstehen.**

:::

Sie können die erforderlichen Registry-Änderungen automatisch anwenden, indem Sie eine der unten stehenden, vorab generierten .reg-Dateien verwenden. Jede Datei deaktiviert das Sandboxen von AppContainer/Network Service für einen bestimmten Chromium-basierten Browser:

- [Chrome.reg herunterladen](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chrome.reg)
- [Chromium.reg herunterladen](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Chromium.reg)
- [Edge.reg herunterladen](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Edge.reg)
- [Brave.reg herunterladen](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Brave.reg)
- [Vivaldi.reg herunterladen](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_Vivaldi.reg)
- [YandexBrowser.reg herunterladen](https://cdn.adtidy.org/distr/windows/reg/DisableAppContainer_YandexBrowser.reg)

Wenn Ihr Browser nicht aufgeführt ist, befolgen Sie die unten stehenden Anweisungen aus der Anleitung, um die erforderlichen Einträge zu erstellen:

1. Ermitteln Sie den Zweig der Richtlinie, indem Sie die offizielle Dokumentation des Anbieters prüfen oder die Seite mit den internen Richtlinien öffnen. Navigieren Sie in Chrome zu `chrome://policy`. Andere Browser verwenden einen ähnlichen Pfad.

2. Ermitteln Sie den korrekten Registry-Zweig für Ihren Browser. Verschiedene Chromium-basierte Browser verwenden unterschiedliche Richtlinienpfade unter `HKLM`. Sie sollte dem Muster `HKLM\SOFTWARE\Policies\<Vendor>\<Product>` folgen.

3. Öffnen Sie den Registry-Editor:

   - Drücken Sie _Win + R_
   - Geben Sie _regedit_ ein und drücken Sie die _Eingabetaste_.
   - Genehmigen Sie die UAC-Eingabeaufforderung, indem Sie sie als Administrator ausführen

4. Sichern Sie den Richtlinien-Zweig:

   - Navigieren Sie im linken Bereich zu `HKEY_LOCAL_MACHINE\SOFTWARE\Policies`
   - Klicken Sie mit der rechten Maustaste auf _Richtlinien_ → _Exportieren_
   - Speichern Sie die Datei unter dem Namen _Policies_backup.reg_

   Falls etwas schiefgeht, können Sie die Sicherung wiederherstellen, indem Sie auf diese Datei doppelklicken.

5. Navigieren Sie zum Richtlinien-Schlüssel Ihres Browsers:

   - Erweitern Sie den Pfad `HKEY_LOCAL_MACHINE` → _SOFTWARE_ → _Richtlinien_.
   - Suchen Sie den Ordner, der Ihrem Browser entspricht.

Falls der Schlüssel nicht existiert, können Sie ihn manuell erstellen. Beispiel für Chrome:

- Klicken Sie mit der rechten Maustaste auf _Richtlinien_ → _Neu_ → _Schlüssel_ und benennen Sie ihn `Google`
- Erstellen Sie innerhalb von `Google` einen weiteren Schlüssel namens `Chrome`

Die gleiche Logik gilt für Chromium, Edge, Brave, Vivaldi, Yandex Browser usw. Sie sollten am Ende einen Schlüssel erhalten, der etwa so aussieht: `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\<Vendor>\<Product>`.

1. Fügen Sie die erforderlichen Registry-Werte hinzu:

   - Klicken Sie im richtigen Schlüssel auf das rechte Feld → _Neu_ → _DWORD (32-Bit)-Wert_.

   - Nennen Sie es `RendererAppContainerEnabled`

   - Doppelklicken Sie darauf und legen Sie fest:

     - **Wert:** 0
     - **Basis:** Hexadezimal oder Dezimal (beides ist in Ordnung)

   - Wiederholen Sie den Vorgang und erstellen Sie einen zweiten DWORD-Wert `NetworkServiceSandboxEnabled`.

   - Setzen Sie den Wert auf 0.

   Beide Parameter müssen `REG_DWORD` sein und den Wert **0** haben.

2. Schließen Sie den Browser und übernehmen Sie die Einstellungen. Um sicherzustellen, dass die Richtlinie geladen wird:

   - Schließen Sie den Browser vollständig.
   - Überprüfen Sie den Task-Manager und stellen Sie sicher, dass keine Prozesse wie _chrome.exe_, _msedge.exe_, _brave.exe_ weiterhin ausgeführt werden
   - Öffnen Sie den Browser erneut

3. Überprüfen Sie, ob die Richtlinien angewendet wurden, indem Sie den Richtlinien-Viewer für Ihren Browser öffnen.

Folgende Richtlinien sollten aktiv sein:

- `RendererAppContainerEnabled` — **0 / false**
- `NetworkServiceSandboxEnabled` — **0 / false**

Falls verfügbar, klicken Sie auf _Richtlinien neu laden_.

Fertig!

## Dauerhafte Lösung

Wir planen, in den kommenden Versionen Unterstützung für den SockFilter-Treiber hinzuzufügen. Dadurch werden Konflikte im WFP-Stack behoben und das Problem gelöst. [Weitere Informationen](https://github.com/AdguardTeam/AdguardForWindows/issues/5780).
