---
title: Probleme mit dem Akku- und Datenverkehrverbrauch
sidebar_position: 1
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

Aufgrund der eingebauten Statistikprozesse wurde AdGuard bei Android 6 und früher oft ein hoher Daten- und/oder Akkuverbrauch zugeschrieben. Das lag daran, dass AdGuard der gesamte von ihm gefilterte Datenverkehr von verschiedenen Anwendungen zugerechnet wurde. Infolgedessen wurde der Anteil von AdGuard an der gesamten Daten- und Batterienutzung überbewertet, während andere Anwendungen zu niedrig bewertet wurden.

Mit Android 7 hat sich dieses Szenario jedoch verbessert. Die Daten, die sich in den in Android integrierten Statistiken zur Datennutzung widerspiegeln, kommen der Realität sehr nahe, auch wenn es bei den Daten zur Akku-Nutzung geringfügige Diskrepanzen gibt.

AdGuard-Nutzer:innen können sich jedoch jederzeit auf dem Bildschirm *Batterieverbrauch* ein genaues Bild der Situation machen.

### Eigene Statistiken zum Batterieverbrauch

Sie können darauf zugreifen, indem Sie zu *Statistiken* → *Batterieverbrauch* navigieren.

![Batteriestatistik *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

Darin finden Sie ein Diagramm, das den Verbrauch der AdGuard-Batterieressourcen in den letzten 24 Stunden anzeigt, mit der Option, durch Antippen des Diagramms detailliertere Daten von Stunde zu Stunde zu erhalten. Darüber hinaus gibt es auch eine numerische Aufschlüsselung der relevanten Daten und eine kurze technische Erklärung.

There are several other parameters below the chart: *CPU foreground*, *CPU background*, *Mobile data usage*, and *Wi-Fi data usage*.

*CPU foreground* and *CPU background* show how much CPU time is used by AdGuard when the app is active or running in the background.

And with *Mobile data usage* and *Wi-Fi data usage*, you can see how much traffic AdGuard consumed when your phone was using mobile Internet or connected to Wi-Fi.

### Wie viel Batteriekapazität verbraucht AdGuard wirklich?

Lassen Sie uns zunächst ein paar theoretische Überlegungen anstellen und mit den erforderlichen Daten verknüpfen.

1. Android leitet den Datenverkehr nach dem sogenannten Power Profile (Energieprofil) ab, das von jedem Hersteller vorgegeben wird: <https://source.android.com/devices/tech/power/values.html>

1. Hauptbestandteil des Energieprofils ist eine Reihe von Werten in mAh, die den Batterieverbrauch für jede Komponente des Geräts definieren: <https://source.android.com/devices/tech/power/values.html>

    Ein Beispiel aus der obigen Tabelle:

    *wifi.active=* 31mA zusätzlicher Verbrauch in mAh durch WLAN-Datenaustausch.

    *radio.active=* 100-300mA zusätzlicher Verbrauch in mAh durch Datenaustausch über das Mobilfunknetz.

    *cpu.active=* 100-200mA zusätzlicher Verbrauch in mAh, verursacht durch CPU-Last.

1. AdGuard selbst verbraucht so gut wie keinen Datenverkehr, also verzichten wir für die Auswertung des Stromverbrauchs auf „Mobile/WLAN-Pakete“ und bleiben bei „CPU“.

    Formel für die Berechnung des Verbrauchs:

    > “CPU TIME (ms)” X “cpu.active” / (60 *60* 1000) = “POWER USE mAh”

    Setzen wir reale Zahlen in diese Formel ein.

    Nehmen wir *CPU total* aus dem zweiten Bildschirmfoto und rechnen es in Millisekunden um: 506000

    Ein Koeffizient *cpu.active* für 2GHz entspricht ungefähr 225mAh

    Endergebnis:

    > 506000 *225 / (60* 60 * 1000) = 31,625mAh

### Fazit

Der tatsächliche Verbrauch ist **mehrfach geringer** als er in den Android-Statistiken ausgewiesen wird. Statt 220mAh sollten es etwa 31-40mAh sein. Andererseits sollte der Verbrauch des Browsers nicht 66 mAh, sondern ~200 mAh betragen.
