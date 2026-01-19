---
title: Protecție de urmărire
sidebar_position: 2
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

To access the Tracking protection module, tap the _Protection_ tab (the second icon from the bottom of the screen) and then select _Tracking protection_.

_Tracking protection_ (formerly _Stealth Mode_) prevents websites from collecting information about you, such as your IP address, information about your browser and operating system, screen resolution, and the page you came or were redirected from. De asemenea, poate bloca cookie-urile pe care site-urile le folosesc pentru a marca browserul dumneavoastră, a salva setările personale și preferințele utilizatorului sau a vă recunoaște la următoarea vizită.

![Tracking protection \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/tracking_protection.png)

_Tracking protection_ has three pre-configured privacy protection levels (_Standard_, _High_, and _Extreme_) and one user-defined level (_Custom_).

Iată caracteristicile active ale nivelurilor preconfigurate:

1. **Standard**

   a. _Blocați trackerele_. Această caracteristică folosește _Filtrul AdGuard de protecție de urmărire_ pentru a vă proteja de contoarele online și instrumentele de analiză web

   b. _Ask websites not to track me_. Această caracteristică trimite semnalele [Global Privacy Control](https://globalprivacycontrol.org/) și [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) către site-urile web pe care le vizitați, cerând aplicațiilor web să dezactiveze urmărirea activității dumneavoastră

   c. _Eliminați antetul X-Client-Data_. Această caracteristică împiedică Google Chrome să trimită informații despre versiunea sa și modificările către domeniile Google (inclusiv DoubleClick și Google Analytics)

2. **Ridicat**

   a. _Blocați trackerele_. Această caracteristică folosește _Filtrul AdGuard de protecție de urmărire_ pentru a vă proteja de contoarele online și instrumentele de analiză web

   b. _Eliminați parametrii de urmărire din adresele URL_. Această caracteristică folosește _Filtrul de urmărire URL AdGuard_ pentru a elimina parametrii de urmărire, precum `utm_*` și `fb_ref`, din adresele URL ale paginilor

   c. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   d. _Ask websites not to track me_. Această caracteristică trimite semnalele [Global Privacy Control](https://globalprivacycontrol.org/) și [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) către site-urile web pe care le vizitați, cerând aplicațiilor web să dezactiveze urmărirea activității dumneavoastră

   e. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::atenție

   Această caracteristică șterge toate cookie-urile terțe după expirarea forțată a acestora. Aceasta include autentificările dumneavoastră prin rețele sociale sau alte servicii de parte terță. Este posibil să fiți nevoit să reautentificați periodic pe unele site-uri web sau să întâmpinați alte probleme legate de cookie-uri. Pentru a bloca doar cookie-urile de urmărire, utilizați nivelul de protecție _Standard_.

   :::

   f. _Eliminați antetul X-Client-Data_. Această caracteristică împiedică Google Chrome să trimită informații despre versiunea sa și modificările către domeniile Google (inclusiv DoubleClick și Google Analytics)

3. **Extreme** (cunoscut anterior ca _Ultima_)

   a. _Blocați trackerele_. Această caracteristică folosește _Filtrul AdGuard de protecție de urmărire_ pentru a vă proteja de contoarele online și instrumentele de analiză web

   b. _Eliminați parametrii de urmărire din adresele URL_. Această caracteristică folosește _Filtrul de urmărire URL AdGuard_ pentru a elimina parametrii de urmărire, precum `utm_*` și `fb_ref`, din adresele URL ale paginilor

   c. _Hide search queries_. This feature hides your searches from websites visited through search engine results

   d. _Ask websites not to track me_. Această caracteristică trimite semnalele [Global Privacy Control](https://globalprivacycontrol.org/) și [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) către site-urile web pe care le vizitați, cerând aplicațiilor web să dezactiveze urmărirea activității dumneavoastră

   e. _Delete third-party cookies_. This feature limits the lifetime of third-party cookies to 180 minutes and prevents advertisers from tracking your behavior across multiple pages

   :::atenție

   Această caracteristică șterge toate cookie-urile terțe după expirarea forțată a acestora. Aceasta include autentificările dumneavoastră prin rețele sociale sau alte servicii de parte terță. Este posibil să fiți nevoit să reautentificați periodic pe unele site-uri web sau să întâmpinați alte probleme legate de cookie-uri. Pentru a bloca doar cookie-urile de urmărire, utilizați nivelul de protecție _Standard_.

   :::

   f. _Blocați WebRTC_. This feature blocks WebRTC that can leak your real IP address even if you use a proxy or VPN. Some messengers, streaming platforms, or games may stop working properly

   g. _Blocare API-ul Push_. This feature blocks push notifications from websites

   h. _Blocați API-ul de Locație_. Această caracteristică împiedică browserul să acceseze datele dumneavoastră GPS și să determine locația dumneavoastră

   i. _Ascundeți referer-ul de terțe-părți_. Această caracteristică împiedică terții să știe ce site-uri web vizitați. Ascunde antetul HTTP care conține URL-ul paginii inițiale și îl înlocuiește cu unul implicit sau personalizat pe care îl puteți seta

   j. _Hide User-Agent_. Această caracteristică elimină informațiile de identificare din antetul Agentului Utilizator, care include în mod obișnuit numele și versiunea browserului, sistemul de operare și setările de limbă

   k. _Eliminați antetul X-Client-Data_. Această caracteristică împiedică Google Chrome să trimită informații despre versiunea sa și modificările către domeniile Google (inclusiv DoubleClick și Google Analytics)

You can tweak individual settings in _Tracking protection_ to create a custom configuration. Each setting has a description to help you understand its purpose. [Read more about various _Tracking protection_ settings](/general/stealth-mode) and use them cautiously, as some may interfere with the functionality of websites and browser extensions.
