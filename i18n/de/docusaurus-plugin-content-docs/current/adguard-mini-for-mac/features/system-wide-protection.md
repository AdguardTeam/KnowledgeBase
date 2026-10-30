---
title: Systemweiter Schutz
sidebar_position: 9
---

Ab Version 3.0 bietet AdGuard Mini für Mac einen _systemweiten Schutz_, eine Funktion, die Werbung und Tracker nicht nur in Safari, sondern auch in anderen Apps auf Ihrem Mac blockiert.

Die Funktion steht Nutzer:innen mit einer AdGuard-Lizenz zur Verfügung. Sie können [die Lizenz sofort kaufen](https://adguard.com/license.html) oder unter _Erweiterter Schutz_ auf _Kostenlos testen_ klicken, um eine 14-tägige kostenlose Testversion zu starten.

## So funktioniert es

_Systemweiter Schutz_ basiert auf Apples [**URL-Filter**](https://developer.apple.com/documentation/networkextension/filtering-traffic-by-url), einer Filter-API, die für die systemweite Filterung des Datenverkehrs verwendet wird. So funktioniert es.

Zuerst prüft macOS eine URL anhand eines Bloom-Filters — eines auf Ihrem Mac gespeicherten Vorfilters, der im Hintergrund aktualisiert wird. Die meisten Adressen werden lokal freigegeben, ohne Netzwerkanfrage für die Überprüfung selbst.

Wenn der Vorfilter eine mögliche Übereinstimmung findet, fragt macOS den Server von AdGuard mithilfe von Private Information Retrieval (PIR) nach einem Urteil. Diese Methode ermöglicht es Ihrem Mac, Daten vom Server anzufordern, ohne preiszugeben, nach welcher genauen Adresse er gefragt hat. Die Anfrage kann nicht mit Ihrem Konto oder Gerät verknüpft werden. Wenn der Server nicht antwortet, lädt die Seite normal.

Sie können [eine detaillierte Analyse von Apples Ansatz zur systemweiten Filterung](https://adguard.com/de/blog/apple-url-filter-system-wide-filtering-api.html) in unserem Blog lesen.

## So aktivieren Sie den Systemweiten Schutz

Sie finden _Systemweiter Schutz_ unter _Erweiterter Schutz_ in der AdGuard Mini-App. Um die Funktion zu aktivieren, schalten Sie den Schalter ein.

![Systemweiter Schutz](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/system-wide-protection-de.png)

Wenn Sie den _systemweiten Schutz_ zum ersten Mal aktivieren, erhalten Sie eine Anfrage, den URL-Filter auf Ihrem Computer zu installieren. Klicken Sie auf _Installieren_. Daraufhin erscheint eine Systemmeldung, in der Sie aufgefordert werden, Filterkonfigurationen hinzuzufügen. Dies ist das Standardverhalten von macOS. AdGuard sieht oder speichert keine dieser Daten.

![Systemweiter Schutz erfordert einen URL-Filter](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/install-screen.png)

Nachdem Sie den URL-Filter installiert haben, bleibt der _Systemweite Schutz_ standardmäßig aktiviert. Wenn Sie ihn ausschalten möchten, schalten Sie den Schalter _Systemweiter Schutz_ unter _Erweiterter Schutz_ aus.

Sie können auch auf das Kontextmenü in der oberen rechten Ecke (⋮) klicken und _URL-Filter entfernen_ auswählen. Wenn Sie den Filter zurücksetzen möchten, ohne ihn zu löschen, um Verbindungsprobleme zu beheben, wählen Sie _Cache zurücksetzen_.

Es ist auch möglich, den URL-Filter in den _Systemeinstellungen_ Ihres Mac → _Netzwerk_ → _VPN & Filter_ → _Filter & Proxys_ zu deaktivieren. Ändern Sie im Menü _Status_ die Einstellung von _Aktiviert_ auf _Deaktiviert_. AdGuard Mini schaltet dann den _Systemweiten Schutz_ automatisch aus.

## Schutzstufen

Es stehen drei Schutzstufen zur Auswahl. _Basis_ ist standardmäßig aktiviert.

- _Basis_: blockiert Werbung und Tracker
- _Sicher_: blockiert Werbung, Tracker, Phishing und Malware
- _Familie_: blockiert Werbung, Tracker, Phishing, Schadsoftware und Inhalte für Erwachsene

![Drei Schutzstufen](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/levels-of-protection-de.png)

## Fehlersuche

### Systemweiter Schutz funktioniert nicht mit jeder App oder jedem Browser

Die Abdeckung hängt davon ab, wie jede App Netzwerkanfragen verarbeitet, sodass manche Apps möglicherweise nicht gefiltert werden. Dies ist eine Einschränkung seitens Apple.

Chromium-basierte Browser wie Chrome, Edge, Opera und Brave verwenden ihren eigenen Netzwerkcode anstelle der Frameworks von Apple, sodass der URL-Filter ihre Anfragen nicht überprüfen kann.

### Der Systemweite Schutz lässt sich nicht aktivieren

- **Auf Ihrem Mac läuft eine ältere Version von macOS.** Apples URL-Filter erfordert macOS 26 Tahoe oder neuer. In früheren Versionen ist die Einstellung deaktiviert und die App fordert Sie auf, _auf macOS Tahoe 26 oder neuer zu aktualisieren_.
- **Ihr Konto wird nicht unterstützt.** _Systemweiter Schutz_ funktioniert nur mit dem ersten auf einem Mac erstellten Nutzerkonto. Wenn Ihr Konto erst später hinzugefügt wurde, ist die Einstellung deaktiviert und es wird _Auf diesem Mac-Konto nicht unterstützt_ angezeigt. Siehe [Kann ich die Nutzer-ID meines Mac-Kontos ändern?](/adguard-mini-for-mac/features/system-wide-protection/#can-i-change-my-mac-accounts-user-id) weiter unten.
- **Sie nutzen die kostenlose Version.** Um den _Systemweiten Schutz_ zu nutzen, [kaufen Sie eine AdGuard-Lizenz](https://adguard.com/license.html) oder klicken Sie unter _Erweiterter Schutz_ auf _Kostenlos testen_, um eine 14-tägige kostenlose Testphase zu starten.

### Kann ich die Nutzer-ID meines Mac-Kontos ändern?

Ja. _Systemweiter Schutz_ funktioniert nur mit dem ersten auf einem Mac erstellten Nutzerkonto mit der Nutzer-ID (UID) 501. Wenn Ihr Mac über mehr als ein Konto verfügt oder Sie Ihr Konto von einem älteren Mac migriert haben, kann Ihre UID abweichen. Folgen Sie den nachstehenden Schritten, um Ihre UID zu überprüfen und gegebenenfalls 501 freizugeben und Ihrem Konto zuzuweisen.

:::warning

Dies ist ein fortgeschrittener, riskanter Vorgang. Tun Sie dies nur, wenn Sie keine andere Möglichkeit haben. Um UID 501 freizugeben, muss ein bestehendes Konto gelöscht und ein neues über das Terminal erstellt werden. Wenn etwas schiefgeht, kann dies zu permanentem Datenverlust führen. Sichern Sie alle Daten auf Ihrem Mac, bevor Sie fortfahren.

:::

1. **Prüfen Sie Ihre aktuelle UID.** Öffnen Sie das Terminal, geben Sie `id -u` ein und drücken Sie die Eingabetaste. Wenn das Ergebnis 501 lautet, hat Ihr Konto bereits die richtige UID. Sie müssen nichts weiter tun.

2. **Finden Sie heraus, wer die UID 501 hat.** Wenn Ihre UID nicht 501 ist, führen Sie diesen Befehl aus:

    ```bash
    dscacheutil -q user -a uid 501 | grep -E '^(name|uid|gecos):'
    ```

   Dies zeigt den Nutzernamen, die UID und den vollständigen Namen dieses Kontos. Stellen Sie sicher, dass Sie keine Dateien davon benötigen, oder sichern Sie diese, bevor Sie fortfahren.

3. **Löschen Sie das Konto mit UID 501.** Während Sie in Ihrem eigenen Admin-Konto angemeldet sind, öffnen Sie _Systemeinstellungen_ → _Nutzer & Gruppen_, wählen Sie das Konto aus Schritt 2 aus und löschen Sie es. Wenn macOS fragt, was mit dessen Benutzerordner geschehen soll, wählen Sie _Benutzerordner in einem Disk-Image speichern_ — dadurch bleiben die Dateien des Kontos erhalten, falls Sie sie später benötigen.

4. **Erstellen Sie ein neues Konto mit UID 501.** Führen Sie den folgenden Befehl aus und ersetzen Sie dabei `username` und `Name Surname` durch die gewünschten Angaben:

    ```bash
    sudo sysadminctl -addUser username \
      -fullName "Name Surname" \
      -password - \
      -admin \
      -UID 501
    ```

   `-password -` sorgt dafür, dass Terminal Sie interaktiv zur Eingabe des Passworts auffordert; `-admin` verleiht dem neuen Konto Administratorrechte.

5. **Überprüfen Sie die Änderung.** Melden Sie sich im neuen Konto an und überprüfen Sie dann die UID erneut: Öffnen Sie das Terminal, geben Sie `id -u` ein und drücken Sie die Eingabetaste. Das Ergebnis sollte jetzt 501 sein.
