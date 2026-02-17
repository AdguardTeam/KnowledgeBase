---
title: Estensioni di Safari
sidebar_position: 3
---

![Scheda estensioni](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Le estensioni Safari sono meccanismi che consentono di implementare blocca-contenuti — raggruppamenti tematici di filtri. Ad esempio, i filtri relativi alla riservatezza sono inclusi nel blocca-contenuti con il nome corrispondente — _AdGuard Privacy_.

Il blocca-contenuti è stato progettato per due ragioni: strutturare i filtri e conformarsi alle limitazioni di Apple.

[Nel 2019](https://adguard.com/blog/adguard-safari-1-5.html), Apple ha inserito delle limitazioni sui bloccatori di inserzioni per Safari, consentendogli di utilizzare esclusivamente 50.000 regole di filtraggio simultaneamente. Poiché questo numero non era sufficiente affinché un blocca-inserzioni fornisse una buona qualità di filtraggio (_AdGuard Base Filter_ da solo ha 30˙000 regole di filtraggio), abbiamo suddiviso AdGuard per Safari in sei blocca-contenuti ciascuno contenente fino a 50˙000 regole.

[Nel 2022](https://adguard.com/blog/adguard-for-safari-1-11.html), Apple ha incrementato il limite delle regole di filtraggio per ogni bloccatore di contenuti a 150.000 regole applicate contemporaneamente. Per quanto riguarda AdGuard Mini per Mac, è possibile abilitare fino a 900˙000 regole per tutti e sei i blocca-contenuti.

Mentre il limite è stato aumentato, la struttura dei blocchi dei contenuti è rimasta la stessa.

Nelle _estensioni Safari_, puoi vedere quali blocca-contenuti sono abilitati, quante regole ognuno di essi usa e quali filtri funzionano.

:::tip

Puoi gestire i filtri abilitati in _Impostazioni_ → _Filtri_. In _estensioni Safari_, puoi vedere solo la lista dei filtri abilitati e il numero di regole abilitate.

:::

## Lista delle estensioni Safari di AdGuard Mini

### AdGuard Generale

_AdGuard Generale_ è un bloccatore di contenuti che combina i filtri più essenziali per bloccare le inserzioni. Consigliamo di mantenere sempre abilitato il _Filtro di Base di AdGuard_.

### AdGuard Privacy

Questo blocco dei contenuti è lo strumento principale contro contatori e altri strumenti analitici web. Il _filtro di Protezione dal Tracciamento di AdGuard_ è abilitato per impostazione predefinita.

### AdGuard Social

_AdGuard Social_ contiene i filtri per pulsanti, widget, script e icone dei social. In questa sezione si possono trovare altri filtri delle scocciature: filtri contro comparse, striscioni, avvisi sui cookie e altro. Per attivarli, trova _Elementi social_ in _Impostazioni_ → _Filtri_.

### AdGuard Sicurezza

Questo blocco dei contenuti unisce diversi filtri correlati alla sicurezza. La _Malware Domains Blocklist_ blocca i domini noti per la diffusione di malware e spyware. _Spam404_ ti protegge dai truffatori di Internet. L'elenco di filtraggio _NoCoin Filter List_ disturba i cryptominer basati su browser, come Coinhive.

### AdGuard Altri

_AdGuard Altri_ contiene filtri con varie funzionalità. Ad esempio, contiene un filtro che sblocca gli annunci di ricerca e gli annunci di auto-promozione. In alcuni casi, aiuta a trovare esattamente ciò che stai cercando, poiché questo tipo di annunci sono più rilevanti e meno intrusivi di altri.

:::note Avvertenza

Non abbiamo alcuna "inserzione accettabile" pagata dagli inserzionisti. Invece, offriamo agli utenti la possibilità di vedere le [inserzioni di ricerca e l'auto-promozione dei siti web](/general/ad-filtering/search-ads).

:::

### AdGuard Personalizzati

![Crea filtro personale](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

Se hai bisogno di più filtri, puoi aggiungerli all'estensione _AdGuard Custom_.

Per aggiungere un filtro personale, vai in _Impostazioni_ → _Filtri_ → _Filtri personali_ e inserisci un URL o un percorso locale di file nel campo rilevante. Puoi trovare i filtri nuovi su [filterlists.com](https://filterlists.com/).
