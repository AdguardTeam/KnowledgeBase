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
- AdGuard – Other

Každé rozšíření pro blokování obsahu může obsahovat až 150 000 aktivních pravidel filtrování. Počet pravidel ve většině skupin filtrů nepřesahuje 150 000. Pokud však aktivujete příliš mnoho jazykově specifických nebo vlastních filtrů, můžete tento limit překročit. V takových případech budou náhodná pravidla, která překročí limit, automaticky zakázána, což může vést k nesprávnému blokování. **Důrazně doporučujeme aktivovat pouze ty filtry, které potřebujete**.

K dispozici je také další rozšíření, které je zodpovědné za další funkce: *AdGuard pro Safari*, které přidává ikonu AdGuard vedle vyhledávací lišty a umožňuje používání pokročilejších pravidel k blokování záludnějších reklam.

![Safari extensions](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-icon1.png)

Více informací o jednotlivých rozšířeních najdete níže.

## Rozšíření blokování obsahu

*AdGuard General* aplikuje pravidla z filtrů, které najdete v *Filtry* → *Blokování reklam* a *Filtry* → *Jazykově specifické*. Toto rozšíření se zaměřuje na komplexní blokování reklam a obsahuje filtry pro reklamy v konkrétních jazycích.

*AdGuard Privacy* aplikuje pravidla z filtrů umístěných v *Filtry* → *Soukromí*. Blokuje sledovací mechanismy a zajišťuje, že vaše aktivita při prohlížení zůstane v soukromí.

*AdGuard Social* aplikuje pravidla z filtrů, které lze nalézt v *Filtry* → *Sociální widgety* a *Filtry* → *Obtěžování*. Blokuje vyskakovací okna, tlačítka sociálních médií, okna online asistentů a další prvky na webech, které by vám mohly vadit.

*AdGuard Security* aplikuje pravidla z filtrů v *Filtry* → *Zabezpečení*. Toto rozšíření identifikuje a blokuje potenciálně škodlivé prvky a chrání uživatele před škodlivým obsahem.

*AdGuard Others* aplikuje pravidla z filtrů, které nespadají do výše uvedených kategorií a které se nacházejí v *Filtry* → *Ostatní*: *Filtr odblokování reklam ve vyhledávání a vlastní propagace*, *Filtr AdGuard DNS* a *Experimentální filtr AdGuardu*.

*AdGuard Custom* aplikuje pravidla z filtrů, které si sami přidáte do *Custom filters*.

Uživatelská pravidla a pravidla seznamu povolených jsou součástí každého rozšíření.

## AdGuard pro Safari

*AdGuard pro Safari aktivuje ikonu AdGuardu vedle vyhledávací lišty. Je to užitečné, pokud chcete rychle nastavit ochranu na konkrétním webu nebo ručně blokovat reklamy. Obsahuje také pokročilá pravidla, která nejsou převedena do formátu podporovaného prohlížečem Safari. To zahrnuje [pravidla CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [rozšířené selektory CSS](/general/ad-filtering/create-own-filters#extended-css-selectors) a [skriptlety](/general/ad-filtering/create-own-filters#scriptlets), které umožňují AdGuardu blokovat složité reklamy, například na YouTube.

## Jak spravovat rozšíření Safari

1. Otevřete Safari a kliknutím na *Safari* v levém horním rohu obrazovky rozbalte nabídku.

    ![Safari settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-settings1.png)

1. Klikněte na *Nastavení...*

1. Vyberte *Rozšíření*.

    ![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/safari/adguard-for-safari-extensions1.png)

## Proč vyžaduje AdGuard pro Safari oprávnění

Při povolování rozšíření *AdGuard pro Safari* si můžete všimnout, že vyžaduje **přístup k obsahu webových stránek** a k **historii prohlížení**. Zde je důvod, proč potřebuje tato oprávnění:

- Pro správnou funkci ručního blokování reklam a pokročilých pravidel blokování je nutný přístup k obsahu webové stránky
- Přístup k historii prohlížení je nutný pro kontrolu stavu ochrany na webových stránkách a určení, která pokročilá pravidla by měla být použita

Tyto údaje nepoužíváme pro žádné jiné účely a ani je s nikým nesdílíme. Pro více informací se můžete podívat na naše [Zásady ochrany osobních údajů](https://adguard.com/privacy.html).
