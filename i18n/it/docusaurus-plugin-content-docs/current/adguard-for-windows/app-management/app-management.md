---
title: Gestione delle app
sidebar_position: 1
---

:::info

Questo articolo descrive AdGuard per Windows v8.0, un blocca-inserzioni completo che protegge il tuo dispositivo a livello di sistema. Questo è una versione beta ancora in fase di sviluppo. Per provarlo, scarica la [versione beta di AdGuard per Windows](https://agrd.io/windows_beta).

:::

Nella sezione _Gestione app_, puoi gestire le impostazioni di instradamento e filtraggio per tutte le app installate nel tuo dispositivo.

Quando AdGuard rileva che un'app è andata in rete, è automaticamente aggiunta a _Gestione app_, e il suo traffico è instradato tramite AdGuard.

Per impostazione predefinita, AdGuard filtra tutto il traffico, ma puoi scegliere cosa escludere.

AdGuard filtra anche il traffico HTTPS, poiché la maggior parte dei siti web oggigiorno usa HTTPS. Questo è particolarmente importante per bloccare le inserzioni in siti come youtube.com, facebook.com e x.com, dove è impossibile rimuovere le inserzioni senza il filtraggio HTTPS.

Quando l'instradamento e il filtraggio sono abilitati per un'app, le icone sotto ogni app diventeranno verdi.

Puoi lasciare le impostazioni così come sono, disabilitare sia il filtraggio sia l'instradamento, oppure affinarle manualmente per ogni app. Puoi anche accedere alle statistiche dell'app.

![Statistiche app](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/stats_app.png)

## Come funzionano il filtraggio delle app e l'instradamento in AdGuard per Windows v8.0

AdGuard per Windows v8.0 introduce una logica aggiornata per la gestione delle app. Aiuta a prevenire problemi di compatibilità pur dandoti il controllo su quali app vengono filtrate. Analizziamo nel dettaglio come funziona.

Ci sono app “senza problemi” e app “problematiche”. Alcune app sono considerate "problematiche" e potrebbero non funzionare correttamente se instradate tramite AdGuard. Ciò può essere causato da funzionalità come l'intercettazione HTTPS o l'utilizzo di proxy.

Per evitare di compromettere il funzionamento delle app appena installate, AdGuard non filtra tutto indiscriminatamente. Invece, si basa su un elenco di compatibilità — un insieme di app che sono note per funzionare correttamente con il filtraggio abilitato.

:::note

“Non filtrare tutto” non significa “non filtrare nulla.” Le app attendibili (come i browser) sono sempre filtrate.

:::

Ogni app dispone di tre livelli di elaborazione indipendenti: instradamento del traffico tramite AdGuard, filtraggio (blocco di annunci e tracker) e filtraggio HTTPS (intercettazione del traffico cifrato).

Questi sono determinati da tre fonti:

- _Elenco di compatibilità_

  Applicazioni testate dal nostro team e confermate come funzionanti correttamente con il filtraggio.
  Questo elenco viene aggiornato tramite test interni e segnalazioni degli utenti nel [repository dedicato all'elenco dei problemi di compatibilità di AdGuard](https://github.com/AdguardTeam/CompatibilityIssues).

- _Liste esclusioni_

  Liste separate per instradamento, filtraggio e filtraggio HTTPS. Queste includono app note per interrompersi quando viene applicato il filtraggio.

- _Filtra app sconosciute_

  Questa impostazione definisce come vengono gestite tutte le altre app (non presenti in alcun elenco).

:::info

Gli elenchi di compatibilità vengono aggiornati continuamente — e puoi contribuire a migliorarli. Se noti che un'app non funziona correttamente con il filtraggio attivo, **segnala il problema su [GitHub](https://github.com/AdguardTeam/CompatibilityIssues)** oppure contatta l'assistenza tramite l'app. Il tuo feedback aiuta a migliorare AdGuard per tutti.

:::

## Filtra app sconosciute

![Filtra app sconosciute \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/app_management/app-management.png)

L'impostazione _Filtra app sconosciute_ è abilitata per impostazione predefinita e determina il modo in cui AdGuard gestisce le nuove app che non sono ancora presenti negli elenchi di compatibilità o di esclusione

Quando è abilitata, il traffico dell'app viene instradato tramite AdGuard, viene applicato il filtraggio standard e **il filtraggio HTTPS NON è abilitato automaticamente**. Questo è intenzionale: l'intercettazione HTTPS è la parte più sensibile dell'elaborazione del traffico e può influire sul comportamento dell'app.

Quando disabilitato, le nuove app non vengono elaborate da AdGuard — dovrai configurare manualmente L'instradamento per esse.

Ecco una breve panoramica di come si comportano le diverse categorie di app in base a questa impostazione:

| Categoria dell'app                                                                              | Attiva (predefinito)                             | Disattiva                                                         |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Compatibili, o senza problemi (ad es. browser)               | · Instradamento ✅ <br /> · Filtraggio ✅ <br /> · Filtraggio HTTPS ✅ | Stesso comportamento — non dipende dall'interruttore              |
| Problematici (dalle liste di esclusione, il filtraggio può causare problemi) | · Instradamento ❌ <br /> · Filtraggio ❌ <br /> · Filtraggio HTTPS ❌ | Stesso comportamento — non dipende dall'interruttore              |
| Altri / (appena rilevati, sconosciuti, non presenti negli elenchi)           | · Instradamento ✅ <br /> · Filtraggio ✅ <br /> · Filtraggio HTTPS ❌ | Non instradato tramite AdGuard, deve essere abilitato manualmente |

:::info Cosa succede durante il ripristino

Se fai clic su **Reimposta ai valori predefiniti**, accadono due cose:

1. Tutte le autorizzazioni specifiche dell'app sono state cancellate (impostate su “non configurato”).
2. Le regole predefinite vengono applicate alle app note come sicure (come i browser), compreso il filtraggio HTTPS.

:::
