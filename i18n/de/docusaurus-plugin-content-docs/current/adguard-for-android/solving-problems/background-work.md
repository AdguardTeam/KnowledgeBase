---
title: Einrichten des AdGuard-Hintergrundbetriebs
sidebar_position: 8
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

In einigen Fällen bleiben Apps aufgrund der Optimierungsfunktion des Android-Betriebssystems oder des so genannten „Batteriesparmodus“ nicht im Hintergrund („aktiv“ oder im Ruhemodus) — diese Funktion kann Hintergrund-Apps abschalten. Es kann lästig sein, sie jedes Mal neu zu starten, wenn sie geschlossen wurden. Um das Beenden von Apps im Hintergrund zu vermeiden, müssen Sie die Schritte befolgen, die wir für jeden Hersteller (Version) von Android OS separat beschrieben haben. Beachten Sie, dass die Anleitungen der verschiedenen Hersteller meist sehr ähnlich sind.

## Asus

Die Informationen über Asus-Geräte sind noch lange nicht vollständig, so dass es noch mehr Probleme geben kann, als hier aufgeführt sind. Wir werden diesen Teil des Artikels aktualisieren, sobald wir mehr wissen.

Die Hauptursache für mögliche Probleme mit der Hintergrundarbeit bei Asus-Geräten ist die Optimierungs-App namens Power Master. Sie ist vorinstalliert und verfügt über ziemlich aggressive Standardeinstellungen, z. B. zum Sperren des Starts von Apps und zum Beenden von Hintergrundaufgaben, wenn der Bildschirm ausgeschaltet wird. Um sicherzustellen, dass die Hintergrundverarbeitung von Apps funktioniert, richten Sie Folgendes ein:

1. Öffnen Sie den **Mobile Manager** → **PowerMaster** → **Einstellungen** (oder **Batteriesparoptionen**) → Deaktivieren Sie **Aufräumen im Standby-Modus**

1. Öffnen Sie den **Mobile Manager** → **PowerMaster** → **Einstellungen** (oder **Batteriesparoptionen**) → Deaktivieren Sie **Apps vom automatischen Start ausschließen**

Anstatt **Automatischer Start von Apps** komplett zu deaktivieren, können Sie auch **Einstellungen** → **Batteriesparoptionen** → **Autostart-Manager** → **AdGuard** aufrufen und die Markierung entfernen.

## Xiaomi

Xiaomi-Geräte (und insbesondere MIUI-Geräte) gehören zu den problematischsten Geräten, wenn es um Hintergrundaufgaben geht. Sie sind dafür bekannt, dass sie Hintergrundprozesse einschränken und nicht standardmäßige Berechtigungen haben, und obendrein fehlt eine angemessene Dokumentation. Manchmal funktionieren Apps auf Xiaomi-Telefonen einfach nicht richtig und es gibt wenig, was man dagegen tun kann. Im Folgenden finden Sie einige Maßnahmen, die Sie durchführen können, wenn Sie Probleme mit den Hintergrundfunktionen von AdGuard auf verschiedenen Xiaomi-Geräten haben.

### MIUI 13+ und HyperOS

Je nach MIUI- und HyperOS-Version gibt es zwei Möglichkeiten, die Einstellungen für die Akkuoptimierung auf Ihrem Telefon zu ändern und Werbung effizienter zu sperren.

Option 1

1. Öffnen Sie **Einstellungen** → **Apps** → **Berechtigungen** → **Automatisch im Hintegrund starten** und erlauben Sie AdGuard, im Hintergrund ausgeführt zu werden

1. Wechseln Sie zurück zu **Einstellungen** → **Apps** → **Apps verwalten** → **AdGuard** und entfernen Sie das Häkchen bei **App-Aktivität anhalten, wenn nicht genutzt**

1. Öffnen Sie <0>Batteriesparer</0> und tippen Sie auf <0>Keine Einschränkungen</0>.

Option 2

1. Öffnen Sie **Einstellungen** → **Apps** → **Apps verwalten** → **AdGuard** und aktivieren Sie **Autostart**

1. Öffnen Sie <0>Batteriesparer</0> und tippen Sie auf <0>Keine Einschränkungen</0>.

Fertig! Sie haben AdGuard erfolgreich für das Verwenden im Hintergrund eingerichtet.

### MIUI 12.0.8

Damit Ihre AdGuard-App erfolgreich im Hintergrund läuft, gehen Sie wie folgt vor:

Scrollen Sie in **Einstellungen** → **Anwendungen** → **Anwendungen verwalten** nach unten, um **AdGuard** zu finden und setzen Sie **Autostart** auf „Ein“.

![Xiaomi Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

Scrollen Sie nach unten zu **Batteriesparer**, tippen Sie darauf und setzen Sie es auf „Keine Einschränkungen”.

![Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

Setzen Sie unter **Weitere Berechtigungen** alle möglichen Berechtigungen auf „Ein“

Starten Sie die App **Sicherheit**.

Tippen Sie auf das **Zahnrad**-Symbol in der oberen rechten Ecke des Bildschirms.

![Miui Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

Tippen Sie auf **Geschwindigkeit erhöhen** in den Funktionseinstellungen.

![Miui Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

Tippen Sie auf **Apps sperren**.

![Miui Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

Stellen Sie auf dem Bildschirm **Apps sperren** den Kippschalter für die AdGuard-App auf „Ein”.

![Miui Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

Fertig! Sie haben die AdGuard-App erfolgreich angeheftet.

### MIUI 12

Öffnen Sie **Einstellungen** → **Apps** → **Apps verwalten** → **AdGuard**.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- Setzen Sie den Autostart auf„Ein”
- Setzen Sie alle möglichen Berechtigungen unter „Andere Berechtigungen“ auf „Ein“
- Setzen Sie den Batterieschutz auf **Keine Einschränkungen**

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

Starten Sie nun den Manager für aktive Apps, indem Sie vom unteren Bildschirmrand nach oben wischen und nach der AdGuard-App suchen.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

Tippen Sie darauf und halten Sie sie gedrückt, bis ein Menü angezeigt wird. Wählen Sie das Schlosssymbol.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

Das Schlosssymbol sollte über dem App-Fenster angezeigt werden.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi8en.jpeg)

### MIUI 10-11

Um Ihre App erfolgreich im Hintergrund auszuführen, konfigurieren Sie ihre Einstellungen wie folgt:

- Setzen Sie den Autostart auf„Ein”

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- **Einstellungen** → **Akku und Leistung** → Deaktivieren Sie die Funktion **Akkuschonung**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- Öffnen Sie anschließend die **Batteriesparer**-Einstellungen → **AdGuard** → **Keine Einschränkungen**

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi3en.png)

### Alle Modelle

Die folgenden Schritte sollten auf jedem Xiaomi-Gerät durchgeführt werden, welches die AdGuard-App immer wieder deaktiviert:

#### Energieverwaltung

Bitte aktivieren Sie:

- **Einstellungen** → **Erweiterte Einstellungen** → **Batteriemanager** → stellen Sie den **Energieplan** auf **Leistung**
- **Geräteeinstellungen** → **Erweiterte Einstellungen** → **Akku-Manager** → **Geschützte Apps** — AdGuard muss **Geschützt** werden
- **Geräteeinstellungen** → **Apps** → **AdGuard** → **Akku** → **Energieintensive Anforderung** und **Nach Ausschalten des Bildschirms weiterlaufen lassen**
- **Einstellungen** → **Weitere Einstellungen** → **Akku und Leistung** → **Akkuverbrauch von Apps verwalten** und hier:

1. Schalten Sie die Energiesparmodi auf „Aus”
1. Wählen Sie die folgenden Optionen: **Stromsparen im Hintergrund** → **Apps auswählen** → **AdGuard** → **Hintergrundeinstellungen** → **Keine Einschränkungen**

#### Energiesparmodus

Stellen Sie **Sicherheit** → **Akku** → **Energiesparmodus** → **AdGuard** auf **Keine Einschränkung**

#### App anheften

Um die Hintergrundaktivität von AdGuard für Xiaomi-Geräte einzurichten, sollten Sie die Punkte Akku und Berechtigungen beachten.

- Klicken Sie auf die Schaltfläche **Vorherige Aufgaben** und wischen Sie AdGuard nach unten, um die Optionen *sichtbar* zu machen (wie auf dem Bildschirmfoto gezeigt):

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- Tippen Sie auf das Symbol **Sperren**. Dies wird Xiaomi davon abhalten, AdGuard automatisch zu schließen. Es sollte wie folgt aussehen:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- Öffnen Sie **Batterie**

- Wählen Sie eine App zum **Batteriesparen**

- Suchen und wählen Sie **AdGuard**

- Richten Sie die folgenden **Hintergrundeinstellungen** ein:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- Wechseln Sie zu **Berechtigungen**

- Wählen Sie **Autostart**

- Stellen Sie sicher, dass die Autostart-Funktion für AdGuard aktiviert ist:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Samsung

Auf vielen Samsung-Geräten kann eine App, die 3 Tage lang nicht benutzt wurde, nicht mehr im Hintergrund gestartet werden. Um dies zu verhindern, sollten Sie die Optionen **Adaptiver Akku** und **Apps in den Ruhezustand versetzen** möglichst ausschalten. Beachten Sie, dass diese Einstellungen nach einer App- oder Betriebssystemaktualisierung oft auf ihre Standardwerte zurückgesetzt werden und erneut deaktiviert werden müssen.

### Android 11+

Unter Android 11 verhindert Samsung standardmäßig, dass Apps (einschließlich AdGuard) im Hintergrund ausgeführt werden, es sei denn, Sie schließen sie von den Akku-Optimierungen aus. Um sicherzustellen, dass AdGuard nicht im Hintergrund ausgeführt wird:

1. Pinnen Sie AdGuard in „Kürzlich verwendete” an

    - Offen Sie **Zuletzt verwendete Apps**.
    - Suchen Sie nach AdGuard.
    - Drücken Sie lange auf das Symbol der AdGuard-App.

1. Damit AdGuard ordnungsgemäß funktioniert:

    Öffnen Sie **Einstellungen** → **Apps** → **AdGuard** → **Akku** → **Akkuverbrauch optimieren**

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    Wählen Sie im Auswahlmenü **Alle**. Suchen Sie dann AdGuard in der Liste und setzen Sie den Status auf **Nicht optimieren** (bei einigen Modellen gibt es möglicherweise einen Schalter, den Sie deaktivieren müssen).

    ![Samsung](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    Auf einigen Geräten kann die entsprechende Einstellung anders heißen und sich an anderen Stellen befinden. Zu den möglichen Pfaden zählen:

    **Einstellungen** → **Apps** → (⁝) Menü → **Spezialzugriff** → **Akkuverbrauch optimieren** → Suchen Sie die AdGuard-App in der Liste und wählen Sie sie aus

1. Deaktivieren Sie die automatische Optimierung. Um dies zu tun:

    Öffnen Sie das Menü **Batterie** → (⁝) Menü → Wählen Sie **Automatisierung** → Schalten Sie dort alle Einstellungen aus

    Auch hier kann der genaue Pfad variieren. Beispielsweise sollte der folgende Pfad auf einigen Geräten funktionieren:

    Telefon **Einstellungen** → **Gerätepflege** → Tippen Sie auf das (⁝) 3-Punkte-Menü → **Erweitert** → Deaktivieren Sie **Automatische Optimierung** und **Optimierungseinstellungen**

1. Wenn Ihr Handy über diese Funktion verfügt, deaktivieren Sie den Adaptiven Akku:

    Öffnen Sie die Telefon-**Einstellungen** → **Akku** → **Weitere Akkueinstellungen** → Ausschalten **Adaptiver Akku**

1. Ruhemodus für Apps deaktivieren (der genaue Name dieser Einstellung und der Pfad zu ihr können je nach Gerät variieren):

    Öffnen Sie die Telefon-**Einstellungen** → **Akku** → **Hintergrundnutzung begrenzen** → Deaktivieren Sie **Ungenutzte Apps in den Ruhezustand versetzen**

### Android 9 und 10

- Öffnen Sie die **Telefoneinstellungen** → **Gerätepflege** → Tippen Sie auf den Punkt **Akku** → (⁝) **3-Punkte-Menü** → **Einstellungen** und entfernen Sie das Häkchen bei **Ungenutzte Apps in den Ruhezustand versetzen** und **Ungenutzte Apps automatisch deaktivieren**.

- Prüfen Sie, ob **Telefoneinstellungen** → **Apps** → **Ruhezustand als Android** → **Akku** → **Hintergrundbeschränkung** auf **App kann Akku im Hintergrund verwenden** für AdGuard eingestellt ist.

- Entfernen Sie AdGuard aus Apps im Ruhezustand. Um dies zu tun:

    1. Öffnen Sie die **Telefoneinstellungen** → **Gerätepflege**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. Tippen Sie auf **Batterie**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. Tippen Sie auf das **3-Punkte-Menü (⋮)** → **Einstellungen**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. Tippen Sie auf **Schlafende Apps**

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. **Wecken Sie** AdGuard über das Mülleimer-Symbol auf

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### Ältere Samsung-Geräte

Bei frühen Samsung-Geräten ist es nicht unbedingt notwendig, den Hintergrundbetrieb einzurichten, aber wenn in Ihrem Fall die AdGuard-App nach einer Weile geschlossen wird oder aus den letzten Aufgaben verschwindet, gehen Sie wie folgt vor:

- Tippen Sie auf die Schaltfläche **Neueste Aufgaben** und dann auf das Symbol **Zusätzliche Einstellungen**. Es sollte wie folgt aussehen:

 ![Samsung Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Tippen Sie auf **Apps sperren**:

 ![Samsung Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Tippen Sie auf das Schloss-Symbol

 ![Samsung Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

Huawei und seine Android-Anpassung **EMUI** gehören zu den problematischsten auf dem Markt, was die Beschränkungen von nicht standardmäßigen Hintergrundprozessen angeht. Bei den Standardeinstellungen treten bei praktisch allen Anwendungen, die im Hintergrund ausgeführt werden, Probleme auf, die schließlich zum Absturz führen.

### „App Launch” (App-Start) auf einigen EMUI 8, 9 und 10 Geräten (Huawei P20, Huawei P20 Lite, Huawei Mate 10 …)

Diese Funktion ist möglicherweise nicht für alle Geräte verfügbar oder anders beschriftet.

1. Öffnen Sie die Telefon-**Einstellungen** → **Akku** → **App Launch**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Deaktivieren Sie **Alle automatisch verwalten**

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Setzen Sie AdGuard auf **Manuell verwalten** und aktivieren Sie alle Schaltflächen.

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Deaktivieren Sie den **Autostart-Manager**, der verhindert, dass Anwendungen nach dem Starten des Telefons automatisch ausgeführt werden.

    Öffnen Sie die **Einstellungen** → **Alle** → **Autostart-Manager** → Deaktivieren Sie AdGuard

    Um zuverlässige Hintergrundprozesse zu gewährleisten, müssen Sie möglicherweise **PowerGenie** wie unten beschrieben deinstallieren.

### EMUI 9+ Geräte und PowerGenie

:::note

Auf Handys mit EMUI 9+ (Android P+) gibt es eine Task-Killer-App namens PowerGenie, die das Beenden aller Apps erzwingt, die nicht auf der Positivliste von Huawei stehen, und dem Nutzer keine Konfigurationsmöglichkeiten bietet. Nachfolgend wird die Vorgehensweise zum Deinstallieren beschrieben.

:::

Huawei ist sehr erfinderisch, wenn es darum geht, Apps für seine Geräte zu entwickeln. Zusätzlich zu all den unten beschriebenen, nicht standardmäßigen Energieverwaltungsmaßnahmen wurde eine Task-Killer-App eingeführt, die direkt in EMUI 9 auf Android Pie integriert ist.

Es heißt **PowerGenie** und beendet alle Anwendungen, die nicht auf seiner Positivliste enthalten sind. Sie können keine Apps auf deren vordefinierte Positivliste hinzufügen. Das bedeutet, dass es keine andere Möglichkeit gibt, eine ordnungsgemäße App-Funktionalität auf Huawei zu erreichen, als PowerGenie zu deinstallieren.

Leider handelt es sich dabei um eine System-App, die nur über ADB (Android Debug Bridge) vollständig deinstalliert werden kann.

:::note Quelle

[XDA forum](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**Vorgehensweise**:

Es ist nicht bestätigt, aber es könnte möglich sein, PowerGenie in den **Telefoneinstellungen** → **Apps** einfach zu deaktivieren. Wenn diese Einstellung in den Einstellungen Ihres Geräts vorhanden ist, können Sie die folgenden Schritte überspringen. Allerdings muss es bei jedem Neustart des Geräts erneut angewendet werden. Wenn es keine solche Einstellung gibt, folgen Sie dieser Anweisung:

1. [Installieren Sie ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) auf Ihrem Computer;

1. Verbinden Sie Ihr Telefon mit einem Datenkabel;

1. Aktivieren Sie [Entwickleroptionen](https://developer.android.com/studio/debug/dev-options.html);

1. Aktivieren Sie **USB-Debugging** in den Entwickleroptionen auf Ihrem Telefon;

1. Führen Sie die folgenden Befehle auf Ihrem Computer aus:

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

Wenn AdGuard weiterhin abgebrochen wird, versuchen Sie auch

`adb shell pm stopservice hwPfwService`

### EMUI 6+ Geräte (und einige EMUI 5 Geräte)

- **Telefoneinstellungen** → **Erweiterte Einstellungen** → **Akkumanager** → **Energieplan** auf **Leistung** festlegen;
- **Telefoneinstellungen** → **Erweiterte Einstellungen** → **Batteriemanager** → **Geschützte Apps** — AdGuard als **Geschützt** festlegen;
- **Telefoneinstellungen** → **Apps** → **Ihre App** → **Akku** → **Energieintensive Anforderung** `[deaktivieren]` und **Nach Ausschalten des Bildschirms weiterlaufen lassen** `[aktivieren]`;
- **Telefoneinstellungen** → **Apps** → **Erweitert (ganz unten)** → **Optimierungen ignorieren** → „Erlauben” antippen → **Alle Apps** → AdGuard in der Liste finden und auf **Erlauben** festlegen.

#### Huawei P9 Plus

Öffnen Sie die Geräteeinstellungen → **Apps** → **Einstellungen** → **Spezieller Zugriff** → wählen Sie **Akkuoptimierung ignorieren** → wählen Sie für AdGuard **Zulassen**.

### Huawei P20, Huawei Honor 9 Lite und Huawei Mate 9 Pro

Öffnen Sie die Geräteeinstellungen → **Akku** → **App-Start** → und setzen Sie AdGuard auf **Manuell verwalten** und stellen Sie sicher, dass alles eingeschaltet ist.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Telefoneinstellungen** → **Akku** → **App-Start** und dann AdGuard auf **Manuell verwalten** einstellen und sicherstellen, dass alles eingeschaltet ist. Auch für zuverlässige Hintergrundprozesse müssen Sie PowerGenie wie oben beschrieben deinstallieren.

### Ältere Huawei-Geräte

Alte Huawei-Geräte sind am einfachsten einzurichten. Es genügen zwei einfache Schritte, um AdGuard im Hintergrund zu sperren, damit die App nicht durch einen Batteriespar- oder Hintergrundabschaltungsprozess beendet wird.

- Tippen Sie auf die Schaltfläche **Letzte Aufgaben**:

    ![Zuletzt verwendete Huawei-Apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Tippen Sie auf das Schloss-Symbol:

    ![Huawei sperren *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

Um die Funktion von AdGuard im Hintergrund effektiver zu gestalten, sollten Sie die Geräteeinstellungen öffnen und folgende Schritte ausführen:

- Öffnen Sie die **Einstellungen** → dann **Batteriemanager** → stellen Sie **Energieplan** auf **Leistung** ein;
- Wählen Sie dann **Geschützte Anwendungen** in der **Batterieverwaltung** und prüfen Sie, ob AdGuard geschützt ist;
- Öffnen Sie **Apps** in den Haupteinstellungen und tippen Sie dort auf AdGuard → wählen Sie **Batterie** → aktivieren Sie **Energieintensive Eingabeaufforderung** und **Ausgeführt lassen, wenn der Bildschirm ausgeschaltet ist**;
- Öffnen Sie dann im Abschnitt **Apps** **Einstellungen** (ganz unten) → **Sonderzugriff** → wählen Sie **Akkuoptimierung ignorieren** → drücken Sie **Erlauben** → **Alle Apps** → suchen Sie AdGuard in der Liste und setzen Sie es auf **Ablehnen**.

## Meizu

Meizu hat fast die gleiche Herangehensweise an die Einschränkungen der Hintergrundprozesse wie Huawei und Xiaomi. Sie können also vermeiden, die Hintergrundtätigkeit von AdGuard und jeder anderen Anwendung zu deaktivieren, indem Sie die folgenden Einstellungen vornehmen:

- Öffnen Sie die **Erweiterten Einstellungen** → dann **Batteriemanager** → stellen Sie **Energieplan** auf **Leistung** ein;
- Wählen Sie dann **Geschützte Anwendungen** in der **Batterieverwaltung** und prüfen Sie, ob AdGuard geschützt ist;
- Wechseln Sie zum Abschnitt **Apps** und tippen Sie dort auf AdGuard → **Battery** → aktivieren Sie **Energieintensive Eingabeaufforderung** und **Ausgeführt lassen, wenn der Bildschirm ausgeschaltet ist**.

## Nokia

Bei Nokia-Geräten mit Android 9+ ist **Der Evenwell-Energiesparmodus** deaktiviert, der der Hauptverursacher für das Beenden von Hintergrundprozessen war. Wenn AdGuard auf Ihrem Nokia-Telefon immer noch nicht funktioniert, sehen Sie sich die [alte Anleitung](https://dontkillmyapp.com/hmd-global) an.

### Nokia 1 (Android Go)

1. [Installieren Sie ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) auf Ihrem Computer;

1. Verbinden Sie Ihr Telefon mit einem Datenkabel;

1. Aktivieren Sie [Entwickleroptionen](https://developer.android.com/studio/debug/dev-options.html);

1. Aktivieren Sie **USB-Debugging** in den Entwickleroptionen auf Ihrem Telefon;

1. Deinstallieren Sie das Paket **com.evenwell.emm** mit den folgenden ADB-Befehlen:

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 und 5.1

Auf diesen Geräten gibt es einen Task-Killer namens **DuraSpeed**, der alle Hintergrundanwendungen beendet. Dieser kann nicht mit normalen Mitteln deinstalliert oder deaktiviert werden. Diese Aktionen erfordern ADB, und selbst dann, wenn sie deaktiviert sind, aktiviert sich DuraSpeed beim Neustart erneut. Sie benötigen eine Tasker-App wie [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) für das automatische Deaktivieren von DuraSpeed.

1. [Installieren Sie ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) auf Ihrem Computer;

1. Verbinden Sie Ihr Telefon mit einem Datenkabel;

1. Aktivieren Sie [Entwickleroptionen](https://developer.android.com/studio/debug/dev-options.html);

1. Aktivieren Sie **USB-Debugging** in den Entwickleroptionen auf Ihrem Telefon;

1. Geben Sie MacroDroid (oder einer Automatisierungsanwendung Ihrer Wahl) die Möglichkeit, in den globalen Einstellungsspeicher zu schreiben, indem Sie diesen Befehl eingeben:

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. Erstellen Sie eine Aufgabe, die bei **Gerätestart** ausgelöst wird und Folgendes ausführt:

    - Systemeinstellung: Typ **Global**, Name `setting.duraspeed.enabled`, Wert **-1**
    - Systemeinstellung: Typ **System**, Name `setting.duraspeed.enabled`, Wert **-1**
    - Systemeinstellung: Typ **Global**, Name `setting.duraspeed.enabled`, Wert **0**
    - Systemeinstellung: Typ **System**, Name `setting.duraspeed.enabled`, Wert **0**

    ![Nokia tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    Sie benötigen sowohl **Globale** als auch **System**-Einstellungen. Das Bildschirmfoto zeigt nur „Global” als Beispiel.


:::

### Andere Nokia-Modelle

- Öffnen Sie die Telefon-**Einstellungen** → **Apps** → **Alle Apps anzeigen**.

- Tippen Sie auf das Menü in der rechten oberen Ecke → **System anzeigen**.

Finden Sie die **Energiespar-App** in der Liste, wählen Sie sie aus und tippen Sie auf **Schließen erzwingen**. Er bleibt zunächst eine Weile gestoppt, wird aber irgendwann wieder gestartet.

Von nun an sollte AdGuard normal funktionieren und die standardmäßigen Android-Akku-Optimierungen verwenden, bis der Power Saver neu gestartet wird.

Eine alternative, dauerhaftere Lösung für technisch versiertere Nutzer:innen:

1. [Installieren Sie ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) auf Ihrem Computer;

1. Verbinden Sie Ihr Telefon mit einem Datenkabel;

1. Aktivieren Sie [Entwickleroptionen](https://developer.android.com/studio/debug/dev-options.html);

1. Aktivieren Sie **USB-Debugging** in den Entwickleroptionen auf Ihrem Telefon;

1. Deinstallieren Sie das Paket **com.evenwell.powersaving.g3** über die folgenden ADB-Befehle:

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## Oppo

Manchmal werden beim Ausschalten des Bildschirms Hintergrunddienste beendet (einschließlich der Eingabehilfedienste, die dann wieder aktiviert werden müssen). Bislang wurde dies durch folgende Maßnahmen umgangen:

Öffnen Sie das **Sicherheitszentrum** → **Datenschutzberechtigungen** → **Startup-Manager** und erlauben Sie der AdGuard-App, im Hintergrund ausgeführt zu werden.

Weitere Lösungen:

- Heften Sie AdGuard an den Bildschirm der letzten Apps
- Aktivieren Sie AdGuard in der App-Liste im „Startup Manager“ und in der „Floating App List“ der Sicherheits-App (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Deaktivieren Sie die Akku-Optimierungen

## OnePlus

Geräte mit OxygenOS an Bord sind die problematischsten, mit seiner OS-spezifischen Cache-Bereinigung und freiem RAM, einschließlich OS-Optimierung. Außerdem kann OxygenOS die Funktionsfähigkeit von AdGuard unterbrechen, wenn Sie es eine Zeit lang nicht verwenden. Um diese unerwünschten Folgen zu vermeiden, sollten Sie die folgenden Schritte befolgen.

### Sperren der App

- Öffnen Sie die **Einstellungen**

- **Batterie** → **Batterieoptimierung**

- Suchen Sie AdGuard

- Tippen Sie darauf und wählen Sie die Option **Nicht optimieren**

- Tippen Sie zum Speichern auf **Fertig**

- Öffnen Sie das Menü „Letzte Anwendungen“ (wie auf diesem Screenshot gezeigt):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Sperren Sie die AdGuard-App:

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::caution

Auf einigen OnePlus-Telefonen gibt es auch eine Funktion namens App Auto-Launch und Deep Optimization, die im Wesentlichen verhindert, dass Apps im Hintergrund ausgeführt werden. Bitte deaktivieren Sie es für AdGuard.

:::

### Batterieoptimierung

- Öffnen Sie die Geräteeinstellungen→ **Akku** → **Akkuoptimierung** → wechseln Sie zur Liste **Alle Apps** (oberes Menü) → wählen Sie AdGuard → aktivieren Sie **Nicht optimieren**

- Öffnen Sie die Geräteeinstellungen → **Akku** → **Akku-Optimierung** → (⁝) Drei-Punkte-Menü → **Erweiterte Optimierung** → Deep-Optimierung deaktivieren

### App Auto-Launch

App Auto-Launch (auf einigen OnePlus-Telefonen) verhindert im Wesentlichen, dass Apps im Hintergrund ausgeführt werden. Bitte deaktivieren Sie es für AdGuard.

### Verbesserte/Erweiterte Optimierung

Für OnePlus 6 und höher:

- Öffnen Sie die **Systemeinstellungen** → **Akku** → **Akkuoptimierung** → (⁝) Drei-Punkte-Menü → **Erweiterte Optimierung**
- Deaktivieren Sie **Tiefenoptimierung** / **Adaptive Batterie**
- Deaktivieren Sie die **Schlafbereitschaftsoptimierung**. OnePlus versucht zu erkennen, wann Sie normalerweise schlafen, und deaktiviert dann die Netzwerkverbindungen des Telefons. Diese Einstellung verhindert, dass Push-Benachrichtigungen zugestellt werden.

Für OnePlus unter 6:

- Deaktivieren Sie **Systemeinstellungen** → **Akku** → **Akkuoptimierung** → (⁝) Drei-Punkte-Menü → **Erweiterte Optimierung**.

### Verhalten beim Leeren der letzten Anwendungen

Wenn Sie eine App wegwischen, wird sie normalerweise nicht geschlossen. Bei OnePlus kann dies jedoch auf andere Weise funktionieren. Der Manager für das Löschverhalten der letzten App kann so eingerichtet sein, dass die App durch Wischen geschlossen wird. Um in den „normalen“ Modus zurückzukehren:

Öffnen Sie die **Einstellungen** → **Erweitert** → **Verwaltung der letzten Apps** → Wechseln Sie zu **Normal löschen**

## Sony

Sony war der erste Entwickler von mobilen Betriebssystemen, der eine nicht standardmäßige Optimierung von Hintergrundprozessen eingeführt hat. Er nennt sich **Ausdauermodus** und unterbricht sofort alle Hintergrundprozesse, wenn er aktiviert ist. Um dieses Problem zu lösen:

Öffnen Sie die **Einstellungen** → **Akku** → **STAMINA-Modus** deaktivieren

![Sony Stamina Modus *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

Unter Android 11+ gibt es auf dem gleichen Bildschirm mit dem STAMINA-Modus eine Einstellung namens **Adaptive Batterie**, die Sie ebenfalls deaktivieren sollten.

Außerdem müssen Sie AdGuard als von der Energiesparfunktion ausgenommen einstellen:

**Systemeinstellungen** → **Apps & Benachrichtigungen** → **Erweitert** → **Spezieller App-Zugriff** → **Energiesparfunktion** → AdGuard umschalten auf **Akzeptiert**

## Wiko

Wiko-Geräte sind problematisch in Bezug auf nicht standardmäßige Optimierungen von Hintergrundprozessen. Um AdGuard im Hintergrund ausführen zu lassen, gehen Sie wie folgt vor:

- Öffnen Sie den **Telefonassistent** → **Akku** → Deaktivieren Sie den **Eco-Modus**
- Wechseln Sie zurück und öffnen Sie den **Manuellen Modus**
- Tippen Sie auf das **Zahnrad**-Symbol oben rechts → **Positivliste für Hintergrundanwendungen** → Wählen Sie **AdGuard**

## Android-Standardgeräte Pixel/Nexus/Nubia/Essential

Android Stock OS steht normalerweise nicht in Konflikt mit Apps, die im Hintergrund arbeiten, aber wenn Sie Probleme haben, müssen Sie den **Always-on VPN**-Modus einschalten.

- Öffnen Sie die **Einstellungen** → **Netzwerk und Internet**

    ![Stocknetwork *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Tippen Sie auf **VPN** und wählen Sie **AdGuard**

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Einrichten des **Always-on VPN**-Modus

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)

## Realme

Auf Geräten mit Realme UI 4.0 gibt es drei wichtige Konfigurationen, um sicherzustellen, dass AdGuard ordnungsgemäß im Hintergrund funktioniert.

1. AdGuard-App einrichten:

    - Drücken Sie lange auf das AdGuard-Symbol
    - Wählen Sie aus dem angezeigten Menü **App-Info**
    - Wechseln Sie zu **Batterienutzung** und aktivieren Sie alle Optionen:
        - Hintergrundaktivität zulassen
        - Vordergrundaktivität zulassen
        - Automatischen Start zulassen
    - Blättern Sie im Abschnitt **App-Info** nach unten und deaktivieren Sie die Option **App-Aktivität bei Nichtbenutzung anhalten**

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. Batterie einrichten:

    - Öffnen Sie **Einstellungen → Akku → Weitere Einstellungen → Akkuverbrauch optimieren**
    - Suchen Sie AdGuard in der Liste und aktivieren Sie **Nicht optimieren**
    - Prüfen Sie unter **Sonstige Einstellungen** den Abschnitt **App Quick Freeze** und deaktivieren Sie ihn für AdGuard

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. *Always-On VPN* für AdGuard aktivieren:

    - Öffnen Sie **Einstellungen → Verbindung & Freigabe → VPN**
    - Suchen Sie **AdGuard** und aktivieren Sie die Option **Always-on VPN**

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)
