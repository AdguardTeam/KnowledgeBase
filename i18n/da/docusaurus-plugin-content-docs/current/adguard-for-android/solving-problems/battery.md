---
title: Problemer med strøm- og trafikforbrug
sidebar_position: 1
---

:::info

Denne artikel dækker AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Grundet indbyggede statistikprocesser blev et højt data- og/eller batteriforbrug ofte tilskrevet AdGuard af Android 6 og tidligere. Dette skyldtes, at AdGuard opregnede al den trafik, den filtrerede fra forskellige apps. Resultat var, at AdGuards andel af det samlede data- og strømforbrug blev sat for højt, og for lavt for andre apps.

Dette scenarie blev dog forbedret med Android 7. Nu er dataangivelserne i Androids indbyggede dataforbrugsstatistik meget tæt på virkeligheden, selvom der er mindre uoverensstemmelser i strømforbrugsdataene.

AdGuard-brugere kan dog altid få et reelt billede af situationen via skærmen *Batteriforbrug*.

### Egen strømforbrugsstatistikskærm

Denne kan tilgås ved at gå til *Statistik* → *Batteriforbrug*.

![Batteristatistik *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

Her findes et diagram, der viser AdGuards strømforbrug inden for de seneste 24 timer samt mulighed for at se mere detaljerede time-for-time data ved at trykke på på diagrammet. Der er desuden en numerisk opdeling af de relevante data samt en kort teknisk forklaring.

Der er flere andre parametre under diagrammet: *CPU forgrund*, *CPU baggrund*, *Mobildatabrug* og *Wi-Fi-databrug*.

*CPU forgrund* og *CPU baggrund* viser, hvor meget CPU-tid AdGuard bruger, når appen er aktiv eller kører i baggrunden.

Med *Mobildatabrug* og *Wi-Fi-databrug* kan endvidere ses, hvor meget trafik, AdGuard har forbrugt, mens mobilen brugte mobildata eller var tilsluttet Wi-Fi.

### Hvor meget strøm forbruger AdGuard reelt?

Lad os se på lidt teori og links med nødvendige data.

1. Androids trafikforbrugsvurdering baseres på en såkaldt Power Profile leveret af hver enkelt producent: <https://source.android.com/devices/tech/power/values.html>

1. Hovedindholdet i Power Profile er værdsæt i mAh, der definerer strømforbruget for hver komponent i enheden: [https://source.android.com/devices/tech/power/values.html](https://source.android.com/devices/tech/power/values.html)

    F.eks. fra tabellen ovenfor:

    *wifi.active=* 31mA ekstra forbrug forårsaget af Wi-Fi-dataudveksling.

    *radio.active=* 100-300mA ekstra forbrug forårsaget af dataudveksling via mobilnetværk.

    *cpu.active=* 100-200mA ekstra forbrug forårsaget af CPU-belastning.

1. AdGuard forbruger i sig selv næsten ingen trafik, så lad os for at evaluere strømforbruget fjerne 'Mobil-/Wi-Fi-pakker' og holde os til 'CPU'.

    Formel til forbrugsberegningen:

    > “CPU-TID (ms)” X “cpu.active” / (60 *60* 1000) = “STRØMFORBRUG mAh”

    Lad os sætte reelle tal ind i formlen.

    Lad os tage *CPU i alt* fra det andet skærmfoto og konvertere til millisekunder: 506.000

    Koefficienten *cpu.active* for 2GHz vil være nogenlunde lig med 225mAh

    Endeligt resultat:

    > 506000 *225/(60*60*1000)= 31,625mAh

### Konklusion

Det reelle forbrug er **mange gange lavere** end vist i Android-statistikken. I stedet for 220mAh, bør det være i omegnen af 31-40mAh. Omvendt, så bør webbrowserens forbrug ikke vise 66mAh, men ~200mAh.
