---
title: Tracking protection
sidebar_position: 2
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

The Tracking protection module can be accessed by tapping the _Protection_ tab (second-left icon at the bottom of the screen) and then selecting _Tracking protection_.

_Tracking protection_ (formerly known as _Stealth Mode_) prevents websites from collecting information about you, such as your IP addresses, information about your browser and operating system, screen resolution, and the page you came or were redirected from. It can also block cookies that websites use to mark your browser, save your personal settings and user preferences, or recognize you on your next visit.

![Tracking protection \*mobile\_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

_Tracking protection_ has three pre-configured levels of privacy protection (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

Here are the active features of the pre-configured levels:

1. **Standard**

   a. _Block trackers_. This feature uses _AdGuard Tracking Protection filter_ to protect you from online counters and web analytics tools

   b. _Ask websites not to track you_. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

   c. _Rimuovi intestazione X-Client-Data_. This feature prevents Google Chrome from sending information about its version and modifications to Google domains (including DoubleClick and Google Analytics)

2. **High**

   a. _Block trackers_. This feature uses _AdGuard Tracking Protection filter_ to protect you from online counters and web analytics tools

   b. _Remove tracking parameters from URLs_. This feature uses _AdGuard URL Tracking filter_ to remove tracking parameters, such as `utm_*` and `fb_ref`, from page URLs

   c. _Hide your search queries_. This feature hides queries for websites visited from a search engine

   d. _Ask websites not to track you_. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

   e. _Self-destruction of third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes

   :::attenzione

   This feature deletes all third-party cookies after their forced expiration. This includes your logins through social networks or other third-party services. You may need to re-log in to some websites periodically or experience other cookie-related issues. To block only tracking cookies, use the _Standard_ protection level.

   :::

   f. _Rimuovi intestazione X-Client-Data_. This feature prevents Google Chrome from sending its version and modifications information to Google domains (including DoubleClick and Google Analytics)

3. **Extreme** (formerly known as _Ultimate_)

   a. _Block trackers_. This feature uses _AdGuard Tracking Protection filter_ to protect you from online counters and web analytics tools

   b. _Remove tracking parameters from URLs_. This feature uses _AdGuard URL Tracking filter_ to remove tracking parameters, such as `utm_*` and `fb_ref`, from page URLs

   c. _Hide your search queries_. This feature hides queries for websites visited from a search engine

   d. _Ask websites not to track you_. This feature sends the [Global Privacy Control](https://globalprivacycontrol.org/) and [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) signals to the websites you visit, asking web apps to disable tracking of your activity

   e. _Self-destruction of third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes

   :::attenzione

   This feature deletes all third-party cookies after their forced expiration. This includes your logins through social networks or other third-party services. You may need to re-log in to some websites periodically or experience other cookie-related issues. To block only tracking cookies, use the _Standard_ protection level.

   :::

   f. _Block WebRTC_. This feature blocks WebRTC, a known vulnerability that can leak your real IP address even if you use a proxy or VPN

   g. _Blocca API Push_. Questa funzionalità impedisce ai tuoi browser di ricevere messaggi push dai server

   h. _Blocca API di localizzazione_. Questa funzionalità impedisce ai browser di accedere ai tuoi dati GPS e di determinare la tua posizione

   i. _Nascondi il referente a terze parti_. Questa funzionalità impedisce alle terze parti di conoscere i siti web che visiti. Nasconde l'intestazione HTTP contenente l'URL della pagina iniziale, sostituendolo con uno predefinito o personalizzato, che puoi impostare

   j. _Nascondi il tuo User-Agent_. Questa funzionalità rimuove le informazioni identificative dall'intestazione User-Agent, che include tipicamente il nome e la versione del browser, il sistema operativo, e le impostazioni della lingua

   k. _Rimuovi intestazione X-Client-Data_. Questa funzionalità impedisce a Google Chrome d'inviare le proprie informazioni sulla versione e sulle modifiche ai domini di Google (inclusi DoubleClick e Google Analytics)

Puoi modificare le impostazioni individuali in _Protezione dal tracciamento_ e creare una configurazione personale. Ogni impostazione ha una descrizione che ti aiuterà a capire il suo ruolo. [Leggi di più su cosa fanno le varie impostazioni di _Protezione dal tracciamento_](/general/stealth-mode) e usale con cautela, poiché alcune potrebbero interferire con la funzionalità dei siti web e delle estensioni del browser.
