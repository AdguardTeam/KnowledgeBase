---
title: Protezione Safari
sidebar_position: 1
---

:::info

Questo articolo riguarda AdGuard per iOS, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

### Blocchi dei contenuti {#content-blockers}

I blocchi dei contenuti servono da 'contenitori' per filtrare le regole che svolgono il vero e proprio compito di bloccare annunci e tracciamento. AdGuard per iOS contiene sei blocchi di contenuti: Generale, Privacy, Social, Sicurezza, Personalizzato e Altro. Precedentemente, Apple consentiva a ogni blocco di contenuti di contenere soltanto un massimo di 50.000 regole di filtraggio ma, con l'uscita di iOS 15, il limite massimo è stato spostato a 150.000 regole.

Tutti i blocchi dei contenuti, il loro stato, i filtri tematici attualmente inclusi e il numero totale di regole di filtraggio utilizzate sono disponibili nella rispettiva schermata in _Impostazioni avanzate_ (clicca l'icona dell'ingranaggio in basso a destra → _Generale_ → _Impostazioni avanzate_ → _Blocchi dei contenuti_).

![Blocchi dei contenuti \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Mantieni abilitati tutti i blocchi dei contenuti per la migliore qualità di filtraggio.

:::

### Filtri {#filters}

Il funzionamento dei blocchi di contenuti si basa sui filtri, talvolta anche indicati come elenchi di filtri. Ogni filtro è un elenco di regole di filtraggio. Se hai abilitato il blocco annunci durante la navigazione, controlla costantemente le pagine visitate e gli elementi su di esse rispetto a tali regole e blocca qualsiasi cosa corrisponda. Le regole sono sviluppate per bloccare annunci, tracker e altri.

Tutti i filtri sono raggruppati in categorie tematiche. Per visualizzare l'elenco completo di queste categorie (da non confondere con i blocchi dei contenuti), apri la sezione _Protezione_ toccando l'icona dello scudo, quindi vai in _Protezione di Safari_ → _Filtri_.

![Gruppi di filtri \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

Ne esistono otto, ogni categoria unisce vari filtri che servono e condividono uno scopo comune, cioè bloccare annunci, widget social, avvisi sui cookie, proteggere l'utente dalle truffe online. Per decidere quali filtri soddisfano le tue esigenze, leggi le loro descrizioni e naviga tra le etichette ("annunci", "privacy", "consigliati", ecc.).

:::note

Più filtri abilitati non garantiscono che ci saranno meno annunci. Un gran numero di vari filtri abilitati simultaneamente riduce la qualità del blocco degli annunci.

:::

La categoria dei filtri personalizzati è vuota di default per consentire agli utenti di aggiungervi i propri filtri, per URL. Puoi trovare filtri su Internet o anche provare a [crearne uno tu stesso](/general/ad-filtering/create-own-filters).

### Regole utente {#user-rules}

Qui, puoi aggiungere nuove regole, inserendole manualmente o utilizzando lo [strumento di blocco manuale di AdGuard su Safari](#assistant). Utilizzalo per personalizzare il filtraggio di Safari senza aggiungere un intero elenco di filtri.

Scopri [come creare i tuoi filtri degli annunci](/general/ad-filtering/create-own-filters). Ma sei pregato di notare che molti di essi non funzioneranno su Safari su iOS.

![Schermata Regole utente \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Lista consentita {#allowlist}

La terza sezione della schermata _Protezione di Safari_. Se desideri disabilitare il blocco degli annunci su un certo sito web, l'Allowlist ti sarà d'aiuto. Ti consente di aggiungere domini e sottodomini alle esclusioni. AdGuard per iOS include una funzionalità Importa/Esporta, così, l'allowlist da un dispositivo è facilmente trasferibile a un altro.
