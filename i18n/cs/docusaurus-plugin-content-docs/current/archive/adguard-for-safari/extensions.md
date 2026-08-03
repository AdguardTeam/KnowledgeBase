---
title: Rozšíření Safari
sidebar_position: 3
---

:::info

Tento článek je o AdGuardu pro Safari, který chrání pouze váš prohlížeč Safari. Chcete-li chránit celé zařízení, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Co jsou rozšíření Safari

Rozšíření Safari jsou malé programy, které přidávají funkce do webového prohlížeče Safari. Umožňují uživatelům přizpůsobit a vylepšit prohlížení stránek přidáním funkcí, které nejsou nativně zabudovány v prohlížeči. AdGuard pro Safari používá rozšíření především k použití pravidel filtrování na webových stránkách otevřených v Safari.

## Jak to funguje

K blokování reklam, slídičů a obtěžujících prvků na webových stránkách používá AdGuard pravidla filtrování. Pravidla z filtrů AdGuardu a vašich vlastních filtrů jsou převedena na pravidla srozumitelná pro Safari a jsou integrována do 6 rozšíření Safari:

- AdGuard – General
- AdGuard – Privacy
- AdGuard – Social
- AdGuard – Security
- AdGuard – Custom
- AdGuard – Other

Každé rozšíření pro blokování obsahu může obsahovat až 150 000 aktivních pravidel filtrování. Počet pravidel ve většině skupin filtrů nepřesahuje 150 000. Pokud však aktivujete příliš mnoho jazykově specifických nebo vlastních filtrů, můžete tento limit překročit. V takových případech budou náhodná pravidla, která překročí limit, automaticky zakázána, což může vést k nesprávnému blokování. **Důrazně doporučujeme aktivovat pouze ty filtry, které potřebujete**.

K dispozici je také další rozšíření, které je zodpovědné za další funkce: _AdGuard pro Safari_, které přidává ikonu AdGuard vedle vyhledávací lišty a umožňuje používání pokročilejších pravidel k blokování záludnějších reklam.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-icon1.png)

Více informací o jednotlivých rozšířeních najdete níže.

## Rozšíření blokování obsahu

_AdGuard General_ applies rules from filters that you can find in _Filters_ → _Ad blocking_ and _Filters_ → _Language-specific_. Toto rozšíření se zaměřuje na komplexní blokování reklam a obsahuje filtry pro reklamy v konkrétních jazycích.

_AdGuard Privacy_ použije pravidla z filtrů umístěných v sekci _Filtry_ → _Soukromí_. Blokuje sledovací mechanismy a zajišťuje, že vaše aktivita při prohlížení zůstane v soukromí.

_AdGuard Social_ použije pravidla z filtrů, které lze nalézt v sekci _Filtry_ → _Sociální widgety_ a _Filtry_ → _Obtěžování_. Blokuje vyskakovací okna, tlačítka sociálních médií, okna online asistentů a další prvky na webech, které by vám mohly vadit.

_AdGuard Security_ použije pravidla z filtrů v sekci _Filtry_ → _Zabezpečení_. Toto rozšíření identifikuje a blokuje potenciálně škodlivé prvky a chrání uživatele před škodlivým obsahem.

_AdGuard Other_ applies rules from filters that that don't fall under the above-mentioned categories and that are located in _Filters_ → _Other_: _Filter unblocking search ads and self-promotion_, _AdGuard DNS filter_, and _AdGuard Experimental filter_.

_AdGuard Custom_ použije pravidla z filtrů, které si sami přidáte do sekce _Vlastní filtry_.

Uživatelská pravidla a pravidla seznamu povolených jsou součástí každého rozšíření.

## AdGuard pro Safari

_AdGuard pro Safari_ aktivuje ikonu AdGuardu vedle vyhledávací lišty. Je to užitečné, pokud chcete rychle nastavit ochranu na konkrétním webu nebo ručně blokovat reklamy. Obsahuje také pokročilá pravidla, která nejsou převedena do formátu podporovaného prohlížečem Safari. Mezi ně patří [pravidla CSS](//general/ad-filtering/create-own-filters#cosmetic-css-rules), [rozšířené selektory CSS](/general/ad-filtering/create-own-filters#extended-css-selectors) a [skripty](//general/ad-filtering/create-own-filters#scriptlets), které umožňují AdGuardu blokovat složité reklamy, například na YouTube.

## Jak spravovat rozšíření Safari

1. Otevřete Safari a kliknutím na _Safari_ v levém horním rohu obrazovky rozbalte nabídku.

   ![Safari settings \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

2. Klikněte na _Nastavení..._

3. Vyberte _Rozšíření_.

   ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Proč vyžaduje AdGuard pro Safari oprávnění

When enabling the _AdGuard for Safari_ extension, you might notice that it requires **access to web page content** and **access to browsing history**. Zde je důvod, proč potřebuje tato oprávnění:

- Pro správnou funkci ručního blokování reklam a pokročilých pravidel blokování je nutný přístup k obsahu webové stránky
- Přístup k historii prohlížení je nutný pro kontrolu stavu ochrany na webových stránkách a určení, která pokročilá pravidla by měla být použita

Tyto údaje nepoužíváme pro žádné jiné účely a ani je s nikým nesdílíme. Další informace najdete v našich [Zásadách ochrany osobních údajů](https://adguard.com/privacy.html).
