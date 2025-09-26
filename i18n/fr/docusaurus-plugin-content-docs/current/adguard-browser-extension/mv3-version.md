---
title: Extension AdGuard pour Chrome MV3
sidebar_position: 5
---

À mesure que les extensions MV2 sont supprimées du Chrome Web Store, les utilisateurs de Chrome devront peut-être passer à des extensions MV3 compatibles avec la nouvelle API Manifest V3 de Chrome. Nos réflexions sur ce sujet sont largement discutées sur [notre blog](https://adguard.com/fr/blog/tag/manifest-v3.html).

Notre extension MV3 bloque efficacement les publicités et les traqueurs tout en gérant de manière transparente les widgets sociaux, les bannières et les publicités vidéo. La plupart des utilisateurs ne remarqueront aucune différence opérationnelle, mais il existe certaines limitations et modifications dont il faut être conscient.

## Où trouver nos extensions

La **version MV3** a remplacé notre ancienne extension dans le [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg).

La **version bêta de MV3** sera toujours disponible dans le [Chrome Web Store](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf).

L'ancienne extension bêta sera renommée [**AdGuard Ad Blocker MV2**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl) et sera prise en charge jusqu'à ce que Google la supprime.

## Principales modifications des fonctionnalités et des paramètres

- **Pas de mises à jour automatiques et manuelles des filtres.** Les options _Mise à jour automatique des filtres_ et _Vérifier la mise à jour des filtres_ ne sont plus disponibles dans l'onglet _Filtres_. Étant donné que certaines règles sont désormais appliquées sous forme de DNR, nous ne pouvons pas mettre à jour les filtres sur demande, uniquement via le processus complet de mise à jour de l'extension ainsi que l'examen dans les magasins.

- **Journal de filtrage**

  ![Journal de filtrage \*border](https://cdn.adtidy.org/content/blog/mv3/new/log.png)

  À cause des restrictions imposées par le DNR, nous ne pouvons pas indiquer exactement quelle règle a fonctionné, mais nous fournirons une "règle présumée qui a été déclenchée" sur la base de notre moteur. Pour obtenir des informations précises, vous devrez installer vous-même la version "décompressée" de l'extension dans votre navigateur. Vous trouverez des instructions détaillées sur la manière de procéder dans un [article séparé] (/adguard-browser-extension/solving-problems/debug-rules/).

- _Protection contre le suivi_ (anciennement connu sous le nom de _Mode furtif_)

  ![Protection contre le suivi \*border](https://cdn.adtidy.org/content/blog/mv3/new/tracking_screen.png)

  Il n'y a pas de section _Cookies_, ainsi que d'_Autodestruction des cookies propriétaires_ et d'_Autodestruction des cookies tiers_ puisque nous ne pouvons pas définir le TTL des cookies à l'aide de règles déclaratives.

- _La protection contre l’hameçonnage et les logiciels malveillants_ n’est plus disponible dans les paramètres généraux. Pour vous protéger des sites web malveillants et des escroqueries, activez les filtres de _Sécurité_ appropriés dans l'onglet _Filtres_.

  ![Sécurité \*border](https://cdn.adtidy.org/content/blog/mv3/new/security.png)

## Limitations

### Nombre maximal de règles et de filtres

Manifest V3 impose des limites aux règles statiques et regex par extension. Les utilisateurs peuvent recevoir des notifications lorsque ces limites sont dépassées.

![Limites des règles \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![Trop d'extensions \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

Fondamentalement, Manifest V3 divise les règles en règles statiques (intégrées) et dynamiques, avec des limites strictes en place.

Les **Règles statiques :** minimum **30 000** règles par extension, avec une limite cumulée de **330 000** pour toutes les extensions installées par un seul utilisateur.

Pour les règles regex, la limite est fixée à **1 000 par extension**.

Le nombre maximum de filtres activés simultanément est de **50**.

Les **Règles dynamiques :** un plafond strict de **5 000** règles est imposé, ce qui inclut un maximum de 1 000 règles d'expression régulière.

If this limit is exceeded, only **5,000 converted rules** will be applied in the following order: first Allowlist, then User rules and finally Custom filters.

> **Les règles converties** sont des règles qui ont été transformées
> au \[format DNR] à l'aide du [convertisseur déclaratif][github-declarative-converter].
> Au cours de ce processus de conversion, certaines règles peuvent écraser d'autres (`$badfilter`), certaines peuvent être combinées (`$removeparam`),
> résultant en une liste de règles avec un ordre légèrement différent.
>
> À partir de cette liste de règles converties, nous n'utiliserons que 5 000 règles. Le reste d’entre eux sera affiché dans l’éditeur, mais pas appliqué.

Voici comment une règle avec un modificateur de base est convertie en règle déclarative :

```adblock
||example.org^$script,third-party,domain=example.com
```

est convertie en

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

D'autres exemples peuvent être trouvés sur [GitHub][github-declarative-converter-examples].

### Modificateurs de règles de réseau

Les modificateurs de règles de réseau ont des limites : certains d'entre eux ne peuvent pas être implémentés dans MV3, ou ne peuvent être implémentés qu'avec des restrictions.

Vous trouverez plus de détails sur les limitations sur [GitHub][github-declarative-converter].
Pour plus d'informations sur les modificateurs, veuillez vous référer à notre [Base de connaissances](/general/ad-filtering/create-own-filters).

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules
[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#table-of-contents
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/master/packages/tsurlfilter/src/rules/declarative-converter#basic-examples
