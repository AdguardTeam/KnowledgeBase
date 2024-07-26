---
title: Ochrana Safari
sidebar_position: 1
---

:::info

Tento článek popisuje AdGuard pro iOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

### Blokátory obsahu {#content-blockers}

Blokátory obsahu slouží jako "kontejnery" pro pravidla filtrování, která skutečně blokují reklamy a sledování. AdGuard pro iOS obsahuje šest blokátorů obsahu: Obecný, Soukromí, Sociální, Bezpečnostní, Vlastní a Ostatní. Dříve společnost Apple umožňovala, aby každý blokátor obsahu obsahoval maximálně 50 tisíc pravidel filtrování, ale po vydání systému iOS 15 se horní hranice posunula na 150 tisíc pravidel.

Všechny blokátory obsahu a jejich stavy, které tematické filtry aktuálně obsahují a celkový počet použitých pravidel filtrování najdete na příslušné obrazovce v _Pokročilých nastavení_ (klepněte na ikonu ozubeného kola vpravo dole → _Obecné_ → _Pokročilá nastavení_ → _Blokátory obsahu_).

![Content blockers \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Pro nejlepší kvalitu filtrování ponechte všechny blokátory obsahu zapnuté.

:::

### Filtry {#filters}

Činnost blokátorů obsahu je založena na filtrech, někdy také označovaných jako seznamy filtrů. Každý filtr je seznam pravidel filtrování. Pokud máte při procházení webu zapnutý blokátor reklam, neustále kontroluje navštívené stránky a prvky na nich podle těchto pravidel filtrování a blokuje vše, co jim odpovídá. Jsou vytvořena pravidla pro blokování reklam, slídičů a dalších.

Všechny filtry jsou seskupeny do tematických kategorií. Chcete-li zobrazit úplný seznam těchto kategorií (neplést si s blokátory obsahu), otevřete sekci _Ochrana_ klepnutím na ikonu štítu a poté přejděte na _Ochrana Safari_ → _Filtry_.

![Filter groups \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

Je jich osm a každá kategorie sdružuje několik filtrů, které mají společný účel, tj. blokování reklam, blokování widgetů sociálních sítí, upozornění na soubory cookies, ochranu uživatele před podvody online. Chcete-li se rozhodnout, které filtry vyhovují vašim potřebám, přečtěte si jejich popis a projděte štítky (`reklamy`, `soukromí`, `doporučeno` atd.).

:::note

Více povolených filtrů nezaručuje, že bude méně reklam. Velký počet současně aktivovaných různých filtrů snižuje kvalitu blokování reklam.

:::

Kategorie Vlastní filtry je ve výchozím nastavení prázdná, aby do ní uživatelé mohli přidávat své filtry podle adresy URL. Filtry můžete najít na internetu nebo si je dokonce zkusit [vytvořit sami](/general/ad-filtering/create-own-filters).

### Uživatelská pravidla {#user-rules}

Zde můžete přidávat nová pravidla — buď je zadáte ručně, nebo použijete [nástroj pro ruční blokování AdGuard v Safari](#assistant). Pomocí tohoto nástroje můžete přizpůsobit filtrování Safari, aniž byste museli přidávat celý seznam filtrů.

Naučte se vytvářet vlastní filtry reklam](/general/ad-filtering/create-own-filters). Upozorňujeme však, že mnohé z nich nebudou v Safari v iOS fungovat.

![User rules screen \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Seznam povolených {#allowlist}

Třetí část obrazovky _Ochrana Safari_. Pokud chcete vypnout blokování reklam na určité webové stránce, pomůže vám seznam povolených. Umožňuje přidávat domény a subdomény do výjimek. AdGuard pro iOS má funkci Import/Export, takže seznam povolených z jednoho zařízení lze snadno přenést do jiného.
