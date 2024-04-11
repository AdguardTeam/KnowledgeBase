---
title: Safari protection
sidebar_position: 1
---

:::info

Tento článek popisuje AdGuard pro iOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

### Content blockers {#content-blockers}

Blokátory obsahu slouží jako "kontejnery" pro pravidla filtrování, která skutečně blokují reklamy a sledování. AdGuard pro iOS obsahuje šest blokátorů obsahu: Obecný, Soukromí, Sociální, Bezpečnostní, Vlastní a Ostatní. Dříve společnost Apple umožňovala, aby každý blokátor obsahu obsahoval maximálně 50 tisíc pravidel filtrování, ale po vydání systému iOS 15 se horní hranice posunula na 150 tisíc pravidel.

All content blockers, their statuses, which thematic filters they currently include, and a total number of used filtering rules can be found on the respective screen in _Advanced settings_ (tap the gear icon at the bottom right → _General_ → _Advanced settings_ → _Content blockers_).

![Content blockers \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Pro nejlepší kvalitu filtrování ponechte všechny blokátory obsahu zapnuté.

:::

### Filters {#filters}

Činnost blokátorů obsahu je založena na filtrech, někdy také označovaných jako seznamy filtrů. Každý filtr je seznam pravidel filtrování. Pokud máte při procházení webu zapnutý blokátor reklam, neustále kontroluje navštívené stránky a prvky na nich podle těchto pravidel filtrování a blokuje vše, co jim odpovídá. Jsou vytvořena pravidla pro blokování reklam, slídičů a dalších.

Všechny filtry jsou seskupeny do tematických kategorií. To see the full list of these categories (not to be confused with content blockers), open the _Protection_ section by tapping the shield icon, then go to _Safari protection_ → _Filters_.

![Filter groups \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

Je jich osm a každá kategorie sdružuje několik filtrů, které mají společný účel, tj. blokování reklam, blokování widgetů sociálních sítí, upozornění na soubory cookies, ochranu uživatele před podvody online. To decide which filters suit your needs, read their descriptions and navigate by the labels (`ads`, `privacy`, `recommended`, etc.).

:::note

Více povolených filtrů nezaručuje, že bude méně reklam. Velký počet současně aktivovaných různých filtrů snižuje kvalitu blokování reklam.

:::

Kategorie Vlastní filtry je ve výchozím nastavení prázdná, aby do ní uživatelé mohli přidávat své filtry podle adresy URL. You can find filters on the Internet or even try to [create one by yourself](/general/ad-filtering/create-own-filters).

### User rules {#user-rules}

Here you can add new rules — either by entering them manually, or by using [the AdGuard manual blocking tool in Safari](#assistant). Pomocí tohoto nástroje můžete přizpůsobit filtrování Safari, aniž byste museli přidávat celý seznam filtrů.

Learn [how to create your own ad filters](/general/ad-filtering/create-own-filters). Upozorňujeme však, že mnohé z nich nebudou v Safari v iOS fungovat.

![User rules screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Allowlist {#allowlist}

The third section of the _Safari protection_ screen. Pokud chcete vypnout blokování reklam na určité webové stránce, pomůže vám seznam povolených. Umožňuje přidávat domény a subdomény do výjimek. AdGuard pro iOS má funkci Import/Export, takže seznam povolených z jednoho zařízení lze snadno přenést do jiného.
