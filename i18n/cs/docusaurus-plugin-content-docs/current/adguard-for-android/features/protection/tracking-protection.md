---
title: Ochrana před sledováním
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

Modul Ochrana před sledováním lze otevřít klepnutím na kartu _Ochrana_ (druhá ikona vlevo dole na obrazovce) a výběrem možnosti _Ochrana před sledování_.

_Ochrana před sledováním_ (dříve známá jako _Režim utajení_) zabraňuje webovým stránkám shromažďovat informace o vás, jako jsou vaše IP adresy, informace o vašem prohlížeči a operačním systému, rozlišení obrazovky a stránce, na kterou jste přišli nebo ze které jste byli přesměrováni. Může také blokovat cookies, které webové stránky používají k označení prohlížeče a uložení vašich osobních nastavení, uživatelských preferencí nebo k rozpoznání při další návštěvě.

![Tracking protection \*mobile\_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

_Ochrana před sledováním_ má tři předkonfigurované úrovně ochrany soukromí (_Standardní_, _Vysoká_ a _Extrémní_) a jednu úroveň definovanou uživatelem (_Vlastní_).

Zde jsou uvedeny aktivní funkce předkonfigurovaných úrovní:

1. **Standardní**

   a. _Blokovat slídiče_. Tato funkce používá filtr _AdGuard ochrana před sledováním_, který vás chrání před online čítači a nástroji webové analýzy

   b. _Požádat webové stránky, aby vás nesledovaly_. Tato funkce odesílá na navštívené webové stránky signály [Global Privacy Control](https://globalprivacycontrol.org/) a [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) a žádá webové aplikace, aby zakázaly sledování vaší činnosti

   c. _Odstranit X-Client-Data hlavičku_. Tato funkce zabraňuje tomu, aby prohlížeč Google Chrome odesílal informace o své verzi a úpravách do domén společnosti Google (včetně služeb DoubleClick a Google Analytics)

2. **Vysoká**

   a. _Blokovat slídiče_. Tato funkce používá filtr _AdGuard ochrana před sledováním_, který vás chrání před online čítači a nástroji webové analýzy

   b. _Odebrat sledovací parametry z URL_. Tato funkce používá _AdGuard filtr sledování URL_ k odstranění parametrů sledování, jako je `utm_*` a `fb_ref` z adresy URL

   c. _Skrýt vyhledávací dotazy_. Tato funkce skrývá dotazy na webové stránky navštívené z vyhledávače

   d. _Požádat webové stránky, aby vás nesledovaly_. Tato funkce odesílá na navštívené webové stránky signály [Global Privacy Control](https://globalprivacycontrol.org/) a [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) a žádá webové aplikace, aby zakázaly sledování vaší činnosti

   e. _Automatické odstranění cookies třetích stran_. Tato funkce omezuje životnost TTL cookies třetích stran na 180 minut

   :::caution

   Tato funkce vymaže všechny soubory cookies třetích stran po jejich nuceném vypršení platnosti. To se týká i vašich přihlášení prostřednictvím sociálních sítí nebo jiných služeb třetích stran. Možná se budete muset na některé webové stránky pravidelně znovu přihlašovat nebo se vyskytnou jiné problémy související se soubory cookies. Chcete-li blokovat pouze sledovací soubory cookies, použijte úroveň ochrany _Standardní_.

   :::

   f. _Odstranit X-Client-Data hlavičku_. Tato funkce zabraňuje tomu, aby prohlížeč Google Chrome odesílal informace o své verzi a úpravách do domén společnosti Google (včetně služeb DoubleClick a Google Analytics)

3. \*_Extrémní_ (dříve známá jako _Ultimátní_)

   a. _Blokovat slídiče_. Tato funkce používá filtr _AdGuard ochrana před sledováním_, který vás chrání před online čítači a nástroji webové analýzy

   b. _Odebrat sledovací parametry z URL_. Tato funkce používá _AdGuard filtr sledování URL_ k odstranění parametrů sledování, jako je `utm_*` a `fb_ref` z adresy URL

   c. _Skrýt vyhledávací dotazy_. Tato funkce skrývá dotazy na webové stránky navštívené z vyhledávače

   d. _Požádat webové stránky, aby vás nesledovaly_. Tato funkce odesílá na navštívené webové stránky signály [Global Privacy Control](https://globalprivacycontrol.org/) a [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) a žádá webové aplikace, aby zakázaly sledování vaší činnosti

   e. _Automatické odstranění cookies třetích stran_. Tato funkce omezuje životnost TTL cookies třetích stran na 180 minut

   :::caution

   Tato funkce vymaže všechny soubory cookies třetích stran po jejich nuceném vypršení platnosti. To se týká i vašich přihlášení prostřednictvím sociálních sítí nebo jiných služeb třetích stran. Možná se budete muset na některé webové stránky pravidelně znovu přihlašovat nebo se vyskytnou jiné problémy související se soubory cookies. Chcete-li blokovat pouze sledovací soubory cookies, použijte úroveň ochrany _Standardní_.

   :::

   f. _Blokovat WebRTC_. Tato funkce blokuje WebRTC, známou zranitelnost, která může prozradit vaši skutečnou IP adresu, i když používáte proxy server nebo VPN

   g. _Blokovat Push API_. Tato funkce zabraňuje prohlížečům přijímat push zprávy ze serverů

   h. _Blokovat lokalizační API_. Tato funkce zabrání prohlížečům v přístupu k vašim GPS datům a určení vaší polohy

   i. _Skrýt třetím stranám referenční ID_. Tato funkce zabraňuje třetím stranám rozpoznat, které weby jste navštívili. Skrývá záhlaví HTTP, které obsahuje URL adresu úvodní stránky a změní ji na výchozí nebo vlastní, kterou můžete nastavit

   j. _Skrýt identifikaci vašeho prohlížeče_. Tato funkce odstraňuje identifikační informace ze záhlaví identifikátora prohlížeče, které obvykle obsahuje název a verzi prohlížeče, operačního systému a nastavení jazyka

   k. _Odstranit X-Client-Data hlavičku_. Tato funkce zabraňuje tomu, aby prohlížeč Google Chrome odesílal informace o své verzi a úpravách do domén společnosti Google (včetně služeb DoubleClick a Google Analytics)

Jednotlivá nastavení můžete upravit v části _Ochrana před sledováním_ a vytvořit si vlastní konfiguraci. Každé nastavení má popis, který vám pomůže pochopit jeho roli. [Read more about what the various _Tracking protection_ settings do](/general/stealth-mode) and utilize them cautiously, as some may interfere with the functionality of websites and browser extensions.
