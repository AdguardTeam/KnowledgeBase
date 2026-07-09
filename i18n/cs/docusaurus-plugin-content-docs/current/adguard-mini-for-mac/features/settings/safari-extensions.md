---
title: Rozšíření Safari
sidebar_position: 3
---

![Extensions tab](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Rozšíření Safari jsou mechanismy, které umožňují implementovat blokátory obsahu — tématické shluky filtrů. Například filtry související se soukromím jsou zahrnuty v blokátoru obsahu pod odpovídajícím názvem — _AdGuard Privacy_.

Blokátory obsahu byly navrženy ze dvou důvodů: pro strukturování filtrů a pro splnění omezení společnosti Apple.

[V roce 2019](https://adguard.com/en/blog/adguard-safari-1-5.html) společnost Apple omezila blokátory reklam pro Safari tak, že mohou současně používat pouze 50 000 pravidel filtrování. Protože tento počet nestačí k tomu, aby blokátor reklam poskytoval dobrou kvalitu filtrování (samotný _AdGuard Base Filter_ má 30000 pravidel filtrování), rozdělili jsme AdGuard pro Safari do šesti blokátorů obsahu, z nichž každý obsahuje až 50000 pravidel.

[V roce 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html) společnost Apple zvýšila limit pravidel filtrování pro každý blokátor obsahu na 150 000 současně aplikovaných pravidel. Pokud jde o AdGuard Mini pro Mac, lze povolit až 900 000 pravidel pro všech šest blokátorů obsahu.

Zatímco limit byl zvýšen, struktura blokátorů obsahu zůstala stejná.

V _Rozšířeních pro Safari_ můžete vidět, které blokátory obsahu jsou povoleny, kolik pravidel každý z nich používá a které filtrování funguje.

:::tip

Povolené filtry můžete spravovat v _Nastavení_ → _Filtry_. V _Rozšířeních pro Safari_ můžete vidět pouze seznam povolených filtrů a počet povolených pravidel.

:::

## Seznam rozšíření Safari AdGuard Mini

### AdGuard – General

_AdGuard – General_ je blokátor obsahu, který kombinuje nejdůležitější filtry pro blokování reklam. Doporučujeme ponechat _AdGuard Base Filter_ vždy zapnutý.

### AdGuard – Privacy

Tento blokátor obsahu je hlavním nástrojem proti čítačům a dalším nástrojům webové analytiky. Ve výchozím nastavení je povolen _filtr AdGuard ochrana sledování_.

### AdGuard – Social

_AdGuard – Social_ obsahuje filtry proti tlačítkům, widgetům, skriptům a ikonám sociálních médií. V této části najdete také další filtry obtěžování: filtry proti vyskakovacím oknům, bannerům, upozorněním na soubory cookies a další. Chcete-li je povolit, najděte _Widgety sociálních sítí_ v _Nastavení_ → _Filtry_.

### AdGuard – Security

Tento blokátor obsahu spojuje několik filtrů souvisejících se zabezpečením. _Blokování domén s malwarem_ blokuje domény, které jsou známé šířením malwaru a spywaru. _Spam404_ vás chrání před podvodníky a internetu. _NoCoin Filter List_ blokuje těžbu kryptoměn v prohlížeči, například Coinhive.

### AdGuard – Other

_AdGuard – Other_ obsahuje filtry s různými funkcemi. Má například filtr, který odblokovává reklamy ve vyhledávání a sebepropagaci. V některých případech pomáhá najít přesně to, co hledáte, protože tyto druhy reklam jsou relevantnější a méně vtíravé než jiné.

:::note Odmítnutí odpovědnosti

Nemáme žádné “přijatelné reklamy” placené inzerenty. Místo toho uživatelům poskytujeme možnost vidět [reklamy ve vyhledávání a vlastní propagaci webových stránek](/general/ad-filtering/search-ads).

:::

### AdGuard – Custom

![Create custom filter](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/create-custom.png)

Pokud potřebujete další filtry, můžete je přidat do sekce _AdGuard – Custom_.

Chcete-li přidat vlastní filtr, přejděte do _Nastavení_ → _Filtry_ → _Vlastní filtry_ a do příslušného pole zadejte URL nebo cestu k lokálnímu souboru. Nové filtry najdete na [filterlists.com](https://filterlists.com/).
