---
title: Filtri
sidebar_position: 1
---

:::info

Questo articolo riguarda l'Estensione di browser AdGuard, che protegge solo il tuo browser. Per proteggere l'intero dispositivo, [scarica l'app AdGuard](https://agrd.io/download-kb-adblock)

:::

Il processo di blocco degli annunci è la funzionalità principale di qualsiasi app dedicata e l'Estensioni di browser AdGuard, non è un'eccezione. Il blocco degli annunci si basa su filtri: insiemi di regole scritte in un linguaggio speciale. Queste regole indicano quali elementi dovrebbero essere bloccati e quali no. AdGuard interpreta le regole e modifica le richieste web in base a esse. Di conseguenza, smetti di vedere annunci sulle pagine web.

![Filtri \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Tutti i filtri sono raggruppati a seconda del loro ruolo. Ad esempio, esistono categorie per i filtri di blocco degli annunci, di protezione della privacy, correlati ai social, etc. Puoi abilitare singoli filtri o l'intero gruppo, in una volta sola.

![Filtri di blocco degli annunci \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## Filtri personalizzati

Mentre le funzionalità degli altri gruppi di filtraggio sono più o meno autoesplicative, esiste un gruppo, detto _Personalizzati_, che potrebbe sollevare ulteriori dubbi.

![Filtri personalizzati \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

In questa scheda, puoi aggiungere filtri non presenti nell'estensione di default. Esistono numerosi [filtri disponibili pubblicamente su Internet](https://filterlists.com). Inoltre, puoi creare e aggiungere i tuoi filtri. In effetti, puoi creare qualsiasi serie di filtri e personalizzare il blocco degli annunci come preferisci.

Per aggiungere un filtro, basta cliccare _Aggiungi filtro personalizzato_, inserire l'URL o il percorso del file del filtro che desideri aggiungere e cliccare _Avanti_.

![Aggiungi un filtro personalizzato \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## Regole utente {#user-rules}

_Le regole utente_ sono un altro strumento che ti aiuta a personalizzare il blocco degli annunci.

![Regole utente \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Esistono diversi modi per aggiungere le nuove regole. La cosa più semplice è digitare una regola, ma richiede una certa conoscenza della [sintassi delle regole] (/general/ad-filtering/create-own-filters).

Inoltre, puoi importare un elenco di filtraggio pronto all'uso da un file di testo. **Assicurati che le differenti regole siano separate da interruzioni di riga.** Nota che è meglio importare un elenco di filtraggio pronto all'uso nella scheda dei Filtri personalizzati.

Inoltre, puoi esportare le tue regole di filtraggio. Quest'opzione è ottima per trasferire i tuoi elenchi di regole tra browser o dispositivi.

Quando aggiungi un sito web alla lista consentita (di più a riguardo di seguito) o utilizzi lo strumento Assistant per nascondere un elemento sulla pagina, una regola corrispondente è anche salvata nelle _Regole utente_.

## Lista consentita

La _lista consentita_ è utilizzata per escludere certi siti web dal filtraggio. Le regole di blocco non si applicano ai siti web di questo elenco.

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

Inoltre, la _lista consentita_ può essere invertita: puoi sbloccare gli annunci ovunque, tranne che sui siti web aggiunti a questo elenco. Per farlo, attiva l'opzione _Inverti lista consentita_.

! [Inverti allowlist \*border] (https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Inoltre, puoi importare ed esportare le liste consentite esistenti. È utile, ad esempio, se desideri applicare le stesse regole d'autorizzazione, su ognuno dei tuoi browser.
