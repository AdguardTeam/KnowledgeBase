---
title: API uživatelských skriptů
sidebar_position: 8
---

:::info

Tento článek je o Rozšíření prohlížeče AdGuard, které chrání pouze váš prohlížeč. Chcete-li chránit celé zařízení, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true).

:::

Při přidávání vlastního filtru nebo uživatelského pravidla se zobrazí oznámení s žádostí o povolení režimu pro vývojáře, abyste mohli tyto funkce v rozšíření používat.

![Notification \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/notification-allow-user-scripts.jpg)

Od verze 5.2 používá rozšíření prohlížeče AdGuard rozhraní API uživatelských skriptů. Chrome vyžaduje, aby toto nové rozhraní API dodržovalo osvědčené postupy pro bezpečnost uživatelů.

## Co je rozhraní API pro uživatelské skripty?

Rozhraní API uživatelských skriptů je nástroj, který umožňuje rozšířením spouštět na webových stránkách přizpůsobené skripty JavaScript. Ty se často používají k úpravě nebo vylepšení webových stránek způsoby, které nejsou původně poskytovány samotnými webovými stránkami.

S přechodem na Manifest V3 v prohlížeči Chrome je mnoho starších metod injektování skriptů omezeno nebo zpožděno. Pro rozhraní API uživatelských skriptů však existuje výjimka.

Více informací o dopadech politiky MV3 naleznete v našem [blogovém příspěvku](https://adguard.com/en/blog/review-issues-in-chrome-web-store.html).

## Jak povolit režim pro vývojáře

Chcete-li používat vlastní filtry a pravidla JavaScript na kartě _Uživatelská pravidla_, musíte nejprve nastavit prohlížeč. Rozšíření tak získá spolehlivý a bezpečný způsob vkládání skriptů do webových stránek v optimálním čase. V závislosti na verzi prohlížeče Chrome postupujte podle následujících pokynů.

### Pro verze prohlížeče Chrome před 138

Pro rozšíření je nutné povolit režim pro vývojáře. Chcete-li tak učinit, otevřete nabídku Chrome kliknutím na tři tečky v pravém horním rohu, přejděte na _Rozšíření_ ⭢ _Správa rozšíření_ a přepněte přepínač _Režim pro vývojáře_.

![Manage Extensions \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer-mode-enable1.jpg)

### Pro verze prohlížeče Chrome 138 a novější

Je třeba přepnot přepínač _Povolit uživatelské skripty_. To do so, open the Chrome menu by clicking the three dots in the upper-right corner, go to _Extensions_ ⭢ _Manage extensions_, go to AdGuard Browser Extension’s _Details_, and toggle the _Allow user scripts_ switch.

![Manage Extensions \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/allow-user-scripts1.jpg)
