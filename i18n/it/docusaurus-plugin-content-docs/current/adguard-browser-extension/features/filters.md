---
title: Filtri
sidebar_position: 1
---

:::info

Questo articolo riguarda l'Estensione di browser AdGuard, che protegge solo il tuo browser. Per proteggere l'intero dispositivo, [scarica l'app AdGuard](https://agrd.io/download-kb-adblock)

:::

Blocking ads is the key functionality of any ad blocker, and AdGuard Browser Extension is not an exception. Ad blocking is based on filters — sets of rules written in a special language. These rules tell which elements should be blocked and which should not. AdGuard interpretes the rules and modifies web requests based on them. Di conseguenza, smetti di vedere annunci sulle pagine web.

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Tutti i filtri sono raggruppati a seconda del loro ruolo. Ad esempio, esistono categorie per i filtri di blocco degli annunci, di protezione della privacy, correlati ai social, etc. Puoi abilitare singoli filtri o l'intero gruppo, in una volta sola.

![Ad blocking filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## Filtri personalizzati

While the features of other filter groups are more or less predictable, there is a group called _Custom_ that may raise additional questions.

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

In questa scheda, puoi aggiungere filtri non presenti nell'estensione di default. There are plenty of [publicly available filters on the Internet](https://filterlists.com). Inoltre, puoi creare e aggiungere i tuoi filtri. In effetti, puoi creare qualsiasi serie di filtri e personalizzare il blocco degli annunci come preferisci.

To add a filter, just click _Add custom filter_, enter the URL or the file path of the filter you want to be added and click _Next_.

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## User rules {#user-rules}

_User rules_ is another tool that helps you customize the blocking of ads.

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Esistono diversi modi per aggiungere le nuove regole. The most straightforward is to just type a rule in, but it requires some knowledge of the [rule syntax](/general/ad-filtering/create-own-filters).

Inoltre, puoi importare un elenco di filtraggio pronto all'uso da un file di testo. **Make sure that different rules are separated by line breaks.** Note that importing a ready-to-use filter list is better done in the Custom filters tab.

Inoltre, puoi esportare le tue regole di filtraggio. Quest'opzione è ottima per trasferire i tuoi elenchi di regole tra browser o dispositivi.

When you add a website to the Allowlist (more on that below) or use the Assistant tool for hiding an element on the page, a corresponding rule is also saved in _User rules_.

## Lista consentita

The _allowlist_ is used to exclude certain websites from filtering. Le regole di blocco non si applicano ai siti web di questo elenco.

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

The _allowlist_ can be inverted, too: you can unblock ads everywhere except on the websites added to this list. To do that, activate the _Invert allowlist_ option.

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

Inoltre, puoi importare ed esportare le liste consentite esistenti. È utile, ad esempio, se desideri applicare le stesse regole d'autorizzazione, su ognuno dei tuoi browser.
