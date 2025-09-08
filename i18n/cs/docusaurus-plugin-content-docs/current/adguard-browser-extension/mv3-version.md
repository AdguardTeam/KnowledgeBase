---
title: Rozšíření prohlížeče AdGuard pro Chrome MV3
sidebar_position: 5
---

Vzhledem k tomu, že rozšíření MV2 jsou ve webovém obchodě Chrome postupně ukončována, mohou uživatelé prohlížeče Chrome přejít na rozšíření MV3, která jsou kompatibilní s novým Chrome API Manifest V3. Naše úvahy na toto téma jsou podrobně rozebrány na [našem blogu](https://adguard.com/en/blog/tag/manifest-v3.html).

Naše rozšíření MV3 účinně blokuje reklamy a slídiče a zároveň bezproblémově spravuje sociální widgety, bannery a videoreklamy. Většina uživatelů nezaznamená žádné provozní rozdíly, ale je třeba si uvědomit některá omezení a změny.

## Kde najdete naše rozšíření

**Verze MV3** nahradila naše staré rozšíření v [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg).

**Beta verze MV3** bude stále k dispozici v [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

Staré beta rozšíření bude přejmenováno na [**Blokátor reklam AdGuard MV2**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl) a bude podporováno, dokud jej společnost Google postupně nezruší.

## Hlavní změny funkcí a nastavení

- **Není k dispozici automatická a ruční aktualizace filtrů.** Na kartě _Filtry_ již nejsou k dispozici možnosti _Automatická aktualizace filtrů_ a _Kontrola aktualizace filtrů_. Vzhledem k tomu, že některá pravidla jsou nyní aplikována ve formě DNR, nemůžeme aktualizovat filtry na vyžádání, ale pouze prostřednictvím celého procesu aktualizace rozšíření spolu s přezkumem v obchodech.

- **Záznam filtrování**

  ![Filtering log \*border](https://cdn.adtidy.org/content/blog/mv3/new/log.png)

  Vzhledem k omezením DNR nemůžeme přesně ukázat, které pravidlo fungovalo, ale uvedeme "předpokládané pravidlo, které bylo spuštěno" na základě našeho enginu. Chcete-li získat přesné informace, musíte si "rozbalenou" formu rozšíření nainstalovat do prohlížeče sami. Podrobný návod, jak to provést, najdete v [samostatném článku](/adguard-browser-extension/solving-problems/debug-rules/).

- _Ochrana před sledováním_ (dříve známá jako _Režim utajení_)

  ![Tracking protection \*border](https://cdn.adtidy.org/content/blog/mv3/new/tracking_screen.png)

  Neexistuje sekce _Cookies_ spolu s _Samozničení vlastních cookies_ a _Samozničení cookies třetích stran_, protože nelze nastavit TTL cookies pomocí deklarativních pravidel.

- _Ochrana proti phishingu a malwaru_ již není v obecném nastavení k dispozici. Chcete-li se chránit před škodlivými webovými stránkami a podvody, zapněte příslušné filtry _Zabezpečení_ na kartě _Filtry_.

  ![Security \*border](https://cdn.adtidy.org/content/blog/mv3/new/security.png)

## Omezení

### Maximální počet pravidel a filtrů

Manifest V3 zavádí omezení statických a regexových pravidel na jedno rozšíření. Uživatelé mohou dostávat oznámení o překročení těchto limitů.

![Rule limits \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Too many extensions \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

Manifest V3 v zásadě dělí pravidla na statická (vestavěná) a dynamická s přísnými omezeními.

**Statická pravidla:** minimálně **30000** pravidel na jedno rozšíření s kumulativním limitem **330000** pro všechna rozšíření nainstalovaná jedním uživatelem.

Pro regexová pravidla je nastaven limit **1000 na jedno rozšíření**.

Maximální počet současně aktivovaných filtrů je **50**.

**Dynamická pravidla:** je stanoven přísný limit **5000** pravidel, který zahrnuje maximálně 1000 regexových pravidel.

Pokud je tento limit překročen, bude použito pouze **5000 převedených pravidel** v následujícím pořadí: nejprve seznam povolených, poté uživatelská pravidla, vlastní filtry a nakonec — filtr rychlých oprav.

> **Převedená pravidla** jsou pravidla, která byla převedena do formátu \[DNR] pomocí [deklarativního převodníku][github-declarative-converter].
> Během tohoto převodu mohou některá pravidla přepsat jiná (`$badfilter`), některá mohou být sloučena (`$removeparam`), takže vznikne seznam pravidel s mírně odlišným pořadím.
>
> Z tohoto seznamu převedených pravidel použijeme pouze 5000 pravidel. Ostatní se v editoru zobrazí, ale nepoužijí se.

Zde je uveden způsob převodu pravidla se základním modifikátorem na deklarativní pravidlo:

```adblock
||example.org^$script,third-party,domain=example.com
```

je převedeno na

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

Další příklady najdete na [GitHubu][github-declarative-converter-examples].

### Modifikátory síťových pravidel

Modifikátory síťových pravidel mají svá omezení: některé z nich nelze v MV3 implementovat nebo je lze implementovat pouze s omezeními.

Další podrobnosti o omezeních najdete na [GitHubu][github-declarative-converter].
Další informace o modifikátorech naleznete v naší [Databázi znalostí](/general/ad-filtering/create-own-filters).

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules
[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#table-of-contents
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#basic-examples
