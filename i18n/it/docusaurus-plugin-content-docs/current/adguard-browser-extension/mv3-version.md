---
title: Estensione AdGuard Browser per Chrome MV3
sidebar_position: 5
---

Poiché le estensioni MV2 vengono gradualmente eliminate dal Chrome Web Store, gli utenti di Chrome potrebbero dover passare alle estensioni MV3, compatibili con il nuovo API Manifest V3 di Chrome. Le nostre riflessioni su questo argomento sono ampiamente discusse sul [nostro blog](https://adguard.com/en/blog/tag/manifest-v3.html).

La nostra estensione MV3 blocca in modo efficace gli annunci e i tracker, gestendo al tempo stesso widget sociali, banner e annunci video. La maggior parte degli utenti non noterà alcuna differenza operativa, ma ci sono alcune limitazioni e modifiche di cui essere a conoscenza.

## Dove trovare le nostre estensioni

La **versione MV3** ha sostituito la nostra vecchia estensione nel [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg).

La **versione beta di MV3** sarà ancora disponibile nel [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

La vecchia estensione beta verrà rinominata [**AdGuard Ad Blocker MV2**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl) e sarà supportata finché Google non la eliminerà gradualmente.

## Principali modifiche alle funzionalità e alle impostazioni

- **Nessun aggiornamento automatico o manuale dei filtri.** Le opzioni _Aggiorna automaticamente i filtri_ e _Controlla aggiornamento filtri_ non sono più disponibili nella scheda _Filtri_. Poiché alcune regole sono ora applicate in formato DNR, non possiamo aggiornare i filtri su richiesta, ma solo attraverso l'intero processo di aggiornamento dell'estensione insieme alla revisione negli negozi con app.

- **Registro di filtraggio**

  ! [Registro di filtraggio \*border](https://cdn.adtidy.org/content/blog/mv3/new/log.png)

  A causa delle restrizioni DNR, non possiamo mostrare esattamente quale regola ha funzionato, ma forniremo una "regola presunta che è stata attivata" in base al nostro motore. Per informazioni più precise, dovrai installare tu stesso la versione "scompattata" dell'estensione nel tuo browser. Troverai istruzioni dettagliate su come farlo in un [articolo separato](/adguard-browser-extension/solving-problems/debug-rules/).

- _Protezione dal tracciamento_ (precedentemente nota come _Modalità invisibile_)

  ![Protezione dal tracciamento \*border](https://cdn.adtidy.org/content/blog/mv3/new/tracking_screen.png)

  Non sono presenti sezioni _Cookie_, così come _Autodistruzione dei cookie proprietari_ e _Autodistruzione dei cookie di terze parti_, poiché non possiamo impostare il TTL dei cookie utilizzando regole dichiarative.

- La _protezione da phishing e malware_ non è più disponibile nelle impostazioni generali. Per proteggerti da siti web dannosi e truffe, attiva i filtri _Sicurezza_ appropriati nella scheda _Filtri_.

  ![Sicurezza \*border](https://cdn.adtidy.org/content/blog/mv3/new/security.png)

## Limitazioni

### Quantità massimale di regole e filtri

Manifest V3 impone limiti alle regole statiche e regex per estensione. Gli utenti potrebbero ricevere notifiche quando questi limiti vengono superati.

![Limiti regole \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Troppe estensioni \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

Fondamentalmente, Manifest V3 divide le regole in statiche (integrate) e dinamiche, con limiti rigorosi.

**Regole statiche:** minimo **30.000** regole per estensione, con un limite cumulativo di **330.000** per tutte le estensioni installate da un singolo utente.

Per le regole regex, il limite è impostato a **1.000 per estensione**.

Il numero massimo di filtri abilitati contemporaneamente è **50**.

**Regole dinamiche:** è imposto un limite massimo di **5.000** regole, che include un massimo di 1.000 regole regex.

Se questo limite viene superato, verranno applicate solo **5.000 regole convertite** nel seguente ordine: prima la Lista consentita, poi le Regole utente, i Filtri personalizzati e infine — il Filtro Quick Fixes delle correzioni rapide.

> Le **regole convertite** sono regole che sono state trasformate
> in \[formato DNR] utilizzando il [convertitore dichiarativo][github-declarative-converter].
> Durante questo processo di conversione, alcune regole potrebbero sovrascriverne altre (`$badfilter`), alcune potrebbero essere combinate (`$removeparam`), producendo un elenco di regole con un ordine leggermente diverso.
>
> Da questo elenco di regole convertite, ne utilizzeremo solo 5.000. Gli altri verranno visualizzati nell'editor, ma non applicati.

Ecco come una regola con un modificatore di base viene convertita in una regola dichiarativa:

```adblock
||example.org^$script,third-party,domain=example.com
```

viene convertita in

```json
[
    {
        "id": 1,
        "action": {
            "type": "block"
        },
        "condition": {
            "urlFilter": "||example.org^",
            "domainType": "thirdParty",
            "initiatorDomains": [
                "example.com"
            ],
            "resourceTypes": [
                "script"
            ]
        },
        "priority": 302
    }
]
```

Altri esempi possono essere trovati su [GitHub][github-declarative-converter-examples].

### Modificatori delle regole di rete

I modificatori delle regole di rete presentano delle limitazioni: alcuni di essi non possono essere implementati in MV3 oppure possono essere implementati solo con delle restrizioni.

Ulteriori dettagli sulle limitazioni sono disponibili su [GitHub][github-declarative-converter].
Per ulteriori informazioni sui modificatori, fare riferimento alla nostra [Knowledge base](/general/ad-filtering/create-own-filters).

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules

<!-- TODO: update the following urls after the release/v3.1 branch is merged -->

[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter#basic-examples
