---
title: Estensione Web per Safari
sidebar_position: 3
---

Le estensioni web aggiungono funzionalità personalizzate a Safari. Puoi trovare [ulteriori informazioni sulle estensioni Web qui](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![Come appare l'estensione Web su Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

L'estensione Web per Safari di AdGuard è uno strumento che sfrutta le nuove funzionalità di iOS 15. Serve a migliorare le capacità di AdGuard per iOS. Con essa, AdGuard può applicare regole di filtraggio avanzate e, infine, bloccare ulteriori annunci.

## Cosa fa

Di default, Safari fornisce soltanto strumenti essenziali ai blocchi di contenuto. Questi strumenti non offrono il livello di prestazioni di blocchi di contenuti di altri sistemi operativi (Windows, Mac, Android). Ad esempio, le app AdGuard su altre piattaforme possono utilizzare strumenti anti-annunci potenti come [regole CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [selettori CSS estesi](/general/ad-filtering/create-own-filters#extended-css-selectors) e [scriptlet](/general/ad-filtering/create-own-filters#scriptlets). Sfortunatamente, queste utilità sono assolutamente insostituibili affrontando casi più complessi, come ad esempio, gli annunci pre-roll su YouTube.

L'estensione Web per Safari di AdGuard completa AdGuard dandogli la capacità di impiegare questi tipi di regole di filtraggio.

Inoltre, l'estensione Web per Safari di AdGuard è utilizzabile per gestire rapidamente AdGuard per iOS, direttamente dal browser. Tocca il pulsante *Estensioni*: è quello con l'icona di un puzzle, a seconda del tipo del tuo dispositivo, si potrebbe trovare a sinistra o a destra della barra degli indirizzi. Trova **AdGuard** nell'elenco e toccalo.

![Menu dell'estensione web *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/open-safari-assistant.jpg)

> Su iPad, l'estensione web per Safari di AdGuard è accessibile direttamente toccando l'icona AdGuard nella barra degli indirizzi del browser.

Vedrai il seguente elenco di opzioni:

- **Abilitare/Disabilitare la protezione sul sito web**. Disattivando l'interruttore, AdGuard verrà disabilitato completamente per il sito web corrente e verrà aggiunta una rispettiva regola di esclusione. Riattivarlo farà riprendere la protezione per il sito web ed eliminerà la regola. Qualsiasi simile modifica richiederà del tempo per essere effettiva.

- **Bloccare manualmente gli elementi sulla pagina**. Tocca il pulsante *Blocca elementi su questa pagina* per richiedere un popup per il blocco degli elementi. Seleziona qualsiasi elemento sulla pagina che desideri nascondere, regola la zona di selezione, poi visualizza le modifiche in anteprima e conferma la rimozione. Una regola di filtraggio corrispondente sarà aggiunta ad AdGuard (che puoi poi disabilitare o eliminare per annullare la modifica).

- **Segnalare un problema**. Scorri in su per visualizzare il pulsante *Segnala un problema*. Utilizzalo per segnalare un annuncio non bloccato o qualsiasi altro problema tu abbia riscontrato sulla pagina corrente.

## Come abilitare l'estensione web per Safari di AdGuard

:::note

L'estensione Safari web di AdGuard richiede l'accesso al contenuto delle pagine web per funzionare, ma non lo utilizza per scopi diversi dal blocco degli annunci.

:::

### Nelle impostazioni di iOS

L'estensione web non è uno strumento autonomo e richiede AdGuard per iOS. Se non hai installato AdGuard per iOS sul tuo dispositivo, sei pregato di [installarla](../installation) e di completare il processo di configurazione per prepararla a funzionare.

Once done, open the *Settings* app and scroll down to *Apps*.

![Select Apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/apps.jpg)

Then, open *Safari* → *Extensions*.

![Select Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Select Extensions *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

In the **ALLOW THESE EXTENSIONS** section find **AdGuard** among the available extensions.

![Select AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/select-ag.jpg)

Tap it, then toggle the *Allow Extension* switch on.

Lower on the same screen, make sure *All Websites* is set *Allow* or *Ask*. If you choose *Allow*, you won't have to give permission every time you visit a new website. If you are unsure, choose *Ask* to grant permissions on a per-site basis.

![AdGuard extension in Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/ag-webext-in-settings.png)

### Su Safari

To enable the AdGuard extension right from the Safari browser, tap the icon on the left side of the URL field:

![In Safari tap icon on the left of URL field *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-1.jpg)

Then, tap *Manage Extensions*.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-2.jpg)

In the opened window, turn on the AdGuard switches. The top one is the AdGuard Web extension; the other six are content blockers needed for filtering.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-3.jpg)

You should now be able to see AdGuard among the available extensions. To enable **Advanced protection**, open AdGuard extension, tap the yellow **i** icon, press *Enable*, and confirm the action.

:::note

If you use AdGuard for iOS without Premium subscription, you won't be able to enable **Advanced protection**.

:::

Alternatively, you can enable **Advanced protection** directly from the app, in the **Protection** tab (second from the left in the bottom icon row).

AdGuard's Safari Web extension only works on iOS versions 15 and later.
