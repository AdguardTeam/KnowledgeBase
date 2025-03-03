---
title: Extensie de browser AdGuard pentru Chrome MV3
sidebar_position: 5
---

Pe măsură ce extensiile MV2 sunt eliminate treptat din Chrome Web Store, utilizatorii Chrome ar putea fi nevoiți să treacă la extensii MV3 care sunt compatibile cu noul API Manifest V3. Our thoughts on this topic are extensively discussed on [our blog](https://adguard.com/en/blog/tag/manifest-v3.html).

Extensia noastră MV3 blochează eficient reclamele și trackerele în timp ce gestionează fără probleme widgeturile sociale, bannerele și reclamele video. Cei mai mulți utilizatori nu vor observa nicio diferență operațională, dar există unele limitări și schimbări de care trebuie să fiți conștienți.

## Unde să găsești extensiile noastre

Versiunea **MV3** a înlocuit vechea noastră extensie din [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg).

Versiunea **beta a MV3** va fi în continuare disponibilă în [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

Vechea extensie beta va fi redenumită în [**AdGuard Ad Blocker MV2**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl) și va fi suportată până când Google o va elimina.

## Principalele schimbări în caracteristici și setări

- **No auto and manual filter updates.** The options _Auto-update filters_ and _Check filters update_ are no longer available in the _Filters_ tab. Deoarece unele dintre reguli sunt acum aplicate în formă DNR, nu putem actualiza filtrele la cerere, ci doar prin procesul complet de actualizare a extensiei împreună cu revizuirea în magazine.

- **Jurnal de filtrare**

    ![Jurnal de filtrare \*border](https://cdn.adtidy.org/content/blog/mv3/new/log.png)

    Din cauza restricțiilor DNR, nu putem arăta exact care regulă a funcționat, dar vom oferi o “regulă presupusă care a fost declanșată” pe baza motorului nostru. Pentru informații precise, va trebui să instalați singur forma “dezgolită” a extensiei în browserul dumneavoastră. Veți găsi instrucțiuni detaliate despre cum să faceți acest lucru într-un [articol separat](/adguard-browser-extension/solving-problems/debug-rules/).

- _Tracking protection_ (formerly known as _Stealth mode_)

    ![Protecția împotriva urmăririi \*border](https://cdn.adtidy.org/content/blog/mv3/new/tracking_screen.png)

    There are no _Cookies_ section, along with _Self-destruction of first-party cookies_ and _Self-destruction of third-party cookies_ since we cannot set the TTL of cookies using declarative rules.

- _Protecția împotriva phishingului și malware-ului_ nu mai este disponibilă în setările generale. To protect yourself from malicious websites and scams, enable the appropriate _Security_ filters in the _Filters_ tab.

    ![Securitate \*border](https://cdn.adtidy.org/content/blog/mv3/new/security.png)

## Limitări

### Numărul maxim de reguli și filtre

Manifest V3 impune limite asupra regulilor statice și regex pe extensie. Utilizatorii pot primi notificări când aceste limite sunt depășite.

![Limite reguli \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Prea multe extensii \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

În esență, Manifest V3 împarte regulile în statice (încorporate) și dinamice, cu limite stricte impuse.

**Reguli statice:** minimum **30.000** reguli pe extensie, cu o limită cumulată de **330.000** pentru toate extensiile instalate de un singur utilizator.

Pentru regulile regex, limita este setată la **1.000 pe extensie**.

Numărul maxim de filtre activate simultan este **50**.

**Regulile dinamice:** o limită strictă de **5.000** reguli este impusă, care include un maxim de 1.000 de reguli regex.

Dacă această limită este depășită, vor fi aplicate doar **5.000 de reguli convertite** în următoarea ordine: mai întâi Allowlist, apoi Reguli utilizator, filtre personalizate și, în final — filtre Quick Fixes.

> **Reguli convertite** sunt reguli care au fost transformate
> din \[format DNR] folosind [convertorul declarativ][github-declarative-converter].
> În timpul acestui proces de conversie, unele reguli pot suprascrie altele (`$badfilter`), iar altele pot fi combinate (`$removeparam`),
> rezultând o listă de reguli cu un ordin ușor diferit.
>
> Din această listă de reguli convertite, vom folosi doar 5.000 de reguli. The rest of them will be displayed in the editor, but not applied.

Iată cum o regulă cu un modificateur de bază este convertită într-o regulă declarativă:

```adblock
||example.org^$script,third-party,domain=example.com
```

este convertit în

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

Mai multe exemple pot fi găsite pe [GitHub][github-declarative-converter-examples].

### Modificatori de reguli de rețea

Modificatorii de reguli de rețea au limitări: unii dintre ei nu pot fi implementați în MV3, sau pot fi implementați doar cu restricții.

Mai multe detalii despre limitări pot fi găsite pe [GitHub][github-declarative-converter].
Pentru informații suplimentare despre modificatori, vă rugăm să consultați [Baza noastră de cunoștințe](/general/ad-filtering/create-own-filters).

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules
[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#table-of-contents
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#basic-examples
