---
title: Problemi di consumo energetico e di traffico
sidebar_position: 1
---

:::info

Questo articolo riguarda AdGuard per Android, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

A causa dei processi statistici integrati, un consumo elevato di dati e/o di batteria è stato spesso attribuito ad AdGuard da Android 6 e precedenti. Questo perché AdGuard contava tutto il traffico che filtrava da varie app. Di conseguenza, la quota di dati totali e l'utilizzo della batteria di AdGuard è stata sopravvalutata, mentre altre app sono state sottostimate.

Con Android 7, invece, questo scenario è migliorato. Ora i dati riflessi nelle statistiche sull'utilizzo dei dati integrate in Android sono molto vicini alla realtà, anche se ci sono piccole discrepanze nei dati sull'utilizzo della batteria.

Tuttavia, gli utenti di AdGuard possono sempre ottenere un quadro reale della situazione nella schermata *Utilizzo batteria*.

### Schermata delle statistiche di utilizzo della batteria

È possibile accedervi navigando su *Statistiche* → *Utilizzo della batteria*.

![Statistiche sulla batteria *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

All'interno troverai un grafico che mostra il consumo di risorse della batteria di AdGuard nelle ultime 24 ore, con un'opzione per ottenere dati orari più dettagliati toccando il grafico. Inoltre, è anche presente una ripartizione numerica dei dati rilevanti e una breve spiegazione tecnica.

### Quanta batteria consuma davvero AdGuard?

Prima di tutto, stabiliamo un po' di teoria e collegamenti con i dati necessari.

1. Android deriva il consumo del traffico secondo il cosiddetto Profilo Energetico, fornito da ogni produttore: <https://source.android.com/devices/tech/power/values.html>

1. La parte principale del Profilo Energetico è una serie di valori in mAh che definisce il consumo energetico per ogni componente del dispositivo: <https://source.android.com/devices/tech/power/values.html>

    Ad esempio, dalla tabella precedente:

    *wifi.active=* 31mA di consumo aggiuntivo in mAh causato dallo scambio di dati WiFi.

    *radio.active=* 100-300mA di consumo aggiuntivo in mAh causato dallo scambio di dati tramite la rete dati.

    *cpu.active=*: 100-200mA di consumo aggiuntivo in mAh, causati dal carico della CPU.

1. AdGuard stesso non consuma quasi alcun traffico, quindi, per valutare il consumo energetico, liberiamoci dei 'pacchetti Mobile/Wi-Fi', limitandoci alla 'CPU'.

    Formula per calcolare il consumo:

    > “CPU TIME (ms)” X “cpu.active” / (60 *60* 1000) = “POWER USE mA/h”

    Inseriamo i numeri reali in questa formula.

    Prendiamo il *totale CPU* dal secondo screenshot e convertiamolo in millisecondi: 506000

    Un coefficiente *cpu.active* per 2GHz sarebbe approssimativamente pari a 225mAh

    Risultato finale:

    > 506000 *225 / (60* 60 * 1000) = 31,625mAh

### Conclusione

Il consumo reale è **di diverse volte inferiore** di quanto mostrato nelle statistiche di Android. Instead of 220mAh it should be somewhere around 31-40mAh. On the other hand, browser's consumption should be not 66mAh, but ~200mAh.
