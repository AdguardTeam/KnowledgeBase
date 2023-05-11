---
title: Přehled funkcí
sidebar_position: 1
---

AdGuard pro Safari byl navržen tak, aby splňoval omezení společnosti Apple pro rozšíření prohlížeče pro blokování reklam a je nejpoužívanějším blokátorem reklam pro Safari. Přestože se nedá srovnávat s našimi aplikacemi pro blokování reklam na počítači, je zdarma a dokáže vás ochránit před reklamami, slídiči, phishingem a škodlivými webovými stránkami.

## Obecné {#general}

![General tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/General.png)

První karta je obrazovka Obecné, kde můžete nastavit základní věci, jako jsou oznámení, intervaly aktualizací a spouštění AdGuardu při spuštění systému. Můžete také zvolit zobrazení ikony AdGuardu v panelu nabídek. Můžete také zapnout [blokátory obsahu](#contentblockers) pro blokování reklam, slídičů, obtěžování atd.

## Filtry {#filters}

![Filters tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Filters.png)

Filtr je seznam pravidel zapsaný ve speciální syntaxi. Podle těchto pravidel mohou blokátory obsahu filtrovat provoz webu: blokovat reklamy nebo požadavky na škodlivé webové stránky.

Filtry jsou sdruženy do osmi tematických kategorií: *Blokování reklam, Ochrana soukromí, Widgety sociálních sítí, Obtěžování, Zabezpečení, Jazykově specifické filtry, Vlastní a Ostatní filtry.*.
> Více informací o [filtrech AdGuardu](/general/ad-filtering/adguard-filters) nebo [filtrování reklam obecně](/general/ad-filtering/how-ad-blocking-works).

Na kartě Filtry můžete povolit celou kategorii nebo jednotlivé filtry. Změny na kartě Filtry se projeví v části Blokátory obsahu (na kartě Obecné).

## Blokátory obsahu {#contentblockers}

![Content blockers tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png)

Blokátor obsahu je tematická skupina filtrů. Filtry související s ochranou soukromí jsou zahrnuty do blokování obsahu pod odpovídajícím názvem — *AdGuard Privacy*.

Blokátory obsahu byly navrženy ze dvou důvodů: pro strukturování filtrů a pro splnění omezení společnosti Apple.

[V roce 2019](https://adguard.com/en/blog/adguard-safari-1-5.html), společnost Apple zavedla omezení pro blokátory reklam v Safari, které umožňují používat současně pouze 50 000 pravidel filtrování. Protože tento počet nestačí k tomu, aby blokátor reklamy poskytoval dobrou kvalitu filtrování (samotný AdGuard Base Filter má 30 000 pravidel filtrování), rozdělili jsme AdGuard pro Safari do šesti blokátorů obsahu, z nichž každý obsahuje až 50 000 pravidel.

[V roce 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html), společnost Apple zvýšila limit pravidel filtrování pro každý blokátor obsahu na 150 000 pravidel použitých současně. Pokud jde o AdGuard pro Safari, lze povolit až 900 000 pravidel pro všech šest blokátorů obsahu.

Zatímco limit byl zvýšen, struktura blokátorů obsahu zůstala stejná.

Na kartě Blokátory obsahu můžete vidět, které blokátory obsahu jsou povoleny, kolik pravidel každý z nich používá a které filtry fungují.

> Povolené filtry můžete spravovat na kartě Filtry. V části Blokátory obsahu se zobrazuje pouze seznam již povolených filtrů.

### AdGuard – General {#adguard_general}

*AdGuard – General* je blokátor obsahu, který kombinuje nejdůležitější filtry pro blokování reklam. Doporučujeme ponechat základní filtr AdGuardu vždy zapnutý.

### AdGuard – Privacy {#adguard_privacy}

Tento blokátor obsahu je hlavním nástrojem proti čítačům a dalším nástrojům webové analytiky. Ve výchozím nastavení je povolen filtr *AdGuard ochrana sledování*.

### AdGuard – Social {#adguard_social}

*AdGuard – Social* obsahuje filtry proti tlačítkům, widgetům, skriptům a ikonám sociálních médií. V této části najdete také další filtry proti obtěžování: filtry proti vyskakovacím oknům, bannerům mobilních aplikací, upozorněním na soubory cookies a další. Chcete-li to povolit, najděte na kartě Filtry stránku *Widgety sociálních sítí*.

### AdGuard – Security {#adguard_security}

Tento blokátor obsahu spojuje několik filtrů souvisejících se zabezpečením. *Blokování domén s malwarem* blokuje domény, které jsou známé šířením malwaru a spywaru. *Spam404* vás chrání před podvodníky a internetu. *NoCoin Filter List* blokuje těžbu kryptoměn v prohlížeči, například Coinhive.

### AdGuard – Other {#adguard_other}

*AdGuard – Other* obsahuje filtry s různými funkcemi. Má například filtr, který odblokovává reklamy ve vyhledávání a sebepropagaci. V některých případech pomáhá najít přesně to, co hledáte, protože tyto druhy reklam jsou relevantnější a méně vtíravé než jiné.

> Odmítnutí odpovědnosti: nemáme žádné "přijatelné reklamy" placené inzerenty. Místo toho uživatelům poskytujeme možnost vidět [reklamy ve vyhledávání a sebepropagaci](/general/ad-filtering/search-ads).

### AdGuard – Custom {#adguard_custom}

![Custom tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/AGCustom.png)

Pokud potřebujete další filtry, můžete je přidat do sekce *AdGuard – Custom*. Pro přidání vlastního filtru zadejte do příslušného pole adresu URL nebo cestu k místnímu souboru. Nové filtry najdete na [filterlists.com](https://filterlists.com/).

## Uživatelská pravidla {#userrules}

K přizpůsobení blokování reklam lze použít uživatelská pravidla. Lze je přidat ručně, importovat nebo vytvořit automaticky při zablokování prvku na stránce. Chcete-li přidat vlastní pravidla, použijte [speciální syntaxi](/general/ad-filtering/create-own-filters).

## Informace {#about}

![About tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/About.png)

Na kartě O produktu se zobrazují informace o aktuální verzi produktu a odkazy na právní dokumenty. Je zde také odkaz na náš repozitář na GitHubu. Můžete zde sledovat vývoj produktu, vytvářet požadavky na funkce a hlásit chyby.

> Připomínka: AdGuard pro Safari lze zdarma stáhnout [z App Store](https://apps.apple.com/app/adguard-for-safari/id1440147259). Podrobný návod k nastavení je k dispozici ve [znalostní databázi](../installation).
