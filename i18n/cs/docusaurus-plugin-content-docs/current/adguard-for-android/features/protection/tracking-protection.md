---
title: Tracking rotection
sidebar_position: 2
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

The Tracking protection module can be accessed by tapping the _Protection_ tab (second-left icon at the bottom of the screen) and then selecting _Tracking protection_.

_Tracking protection_ (formerly known as _Stealth Mode_) prevents websites from collecting information about you, such as your IP addresses, information about your browser and operating system, screen resolution, and the page you came or were redirected from. Může také blokovat cookies, které webové stránky používají k označení prohlížeče a uložení vašich osobních nastavení, uživatelských preferencí nebo k rozpoznání při další návštěvě.

![Tracking protection \*mobile\_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

_Tracking protection_ has three pre-configured levels of privacy protection (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

Zde jsou uvedeny aktivní funkce předkonfigurovaných úrovní:

1. **Standard**

   a. _Block trackers_. This feature uses _AdGuard Tracking Protection filter_ to protect you from online counters and web analytics tools

   b. _Ask websites not to track you_. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

   c. _Remove X-Client-Data header_. Tato funkce zabraňuje tomu, aby prohlížeč Google Chrome odesílal informace o své verzi a úpravách do domén společnosti Google (včetně služeb DoubleClick a Google Analytics)

2. **High**

   a. _Block trackers_. This feature uses _AdGuard Tracking Protection filter_ to protect you from online counters and web analytics tools

   b. _Remove tracking parameters from URLs_. This feature uses _AdGuard URL Tracking filter_ to remove tracking parameters, such as `utm_*` and `fb_ref`, from page URLs

   c. _Hide your search queries_. Tato funkce skrývá dotazy na webové stránky navštívené z vyhledávače

   d. _Ask websites not to track you_. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

   e. _Self-destruction of third-party cookies_. Tato funkce omezuje životnost TTL cookies třetích stran na 180 minut

   :::caution

   Tato funkce vymaže všechny soubory cookies třetích stran po jejich nuceném vypršení platnosti. To se týká i vašich přihlášení prostřednictvím sociálních sítí nebo jiných služeb třetích stran. Možná se budete muset na některé webové stránky pravidelně znovu přihlašovat nebo se vyskytnou jiné problémy související se soubory cookies. To block only tracking cookies, use the _Standard_ protection level.

   :::

   f. _Remove X-Client-Data header_. Tato funkce zabraňuje tomu, aby prohlížeč Google Chrome odesílal informace o své verzi a úpravách do domén společnosti Google (včetně služeb DoubleClick a Google Analytics)

3. **Extreme** (formerly known as _Ultimate_)

   a. _Block trackers_. This feature uses _AdGuard Tracking Protection filter_ to protect you from online counters and web analytics tools

   b. _Remove tracking parameters from URLs_. This feature uses _AdGuard URL Tracking filter_ to remove tracking parameters, such as `utm_*` and `fb_ref`, from page URLs

   c. _Hide your search queries_. Tato funkce skrývá dotazy na webové stránky navštívené z vyhledávače

   d. _Ask websites not to track you_. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

   e. _Self-destruction of third-party cookies_. Tato funkce omezuje životnost TTL cookies třetích stran na 180 minut

   :::caution

   Tato funkce vymaže všechny soubory cookies třetích stran po jejich nuceném vypršení platnosti. To se týká i vašich přihlášení prostřednictvím sociálních sítí nebo jiných služeb třetích stran. Možná se budete muset na některé webové stránky pravidelně znovu přihlašovat nebo se vyskytnou jiné problémy související se soubory cookies. To block only tracking cookies, use the _Standard_ protection level.

   :::

   f. _Block WebRTC_. Tato funkce blokuje WebRTC, známou zranitelnost, která může prozradit vaši skutečnou IP adresu, i když používáte proxy server nebo VPN

   g. _Block Push API_. Tato funkce zabraňuje prohlížečům přijímat push zprávy ze serverů

   h. _Block Location API_. Tato funkce zabrání prohlížečům v přístupu k vašim GPS datům a určení vaší polohy

   i. _Hide Referer from third parties_. Tato funkce zabraňuje třetím stranám rozpoznat, které weby jste navštívili. Skrývá záhlaví HTTP, které obsahuje URL adresu úvodní stránky a změní ji na výchozí nebo vlastní, kterou můžete nastavit

   j. _Hide your User-Agent_. Tato funkce odstraňuje identifikační informace ze záhlaví identifikátora prohlížeče, které obvykle obsahuje název a verzi prohlížeče, operačního systému a nastavení jazyka

   k. _Remove X-Client-Data header_. Tato funkce zabraňuje tomu, aby prohlížeč Google Chrome odesílal informace o své verzi a úpravách do domén společnosti Google (včetně služeb DoubleClick a Google Analytics)

You can tweak individual settings in _Tracking protection_ and come up with a custom configuration. Every setting has a description that will help you understand its role. [Learn more about what various _Tracking protection_ settings do](/general/stealth-mode) and approach them with caution, as some may interfere with the functionality of websites and browser extensions.
