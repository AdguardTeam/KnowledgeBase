---
title: Protecție de urmărire
sidebar_position: 2
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

The Tracking protection module can be accessed by tapping the _Protection_ tab (second-left icon at the bottom of the screen) and then selecting _Tracking protection_.

_Protecția împotriva urmării_ (cunoscută anterior ca _Mod invizibil_) împiedică site-urile web să colecteze informații despre dumneavoastră, precum adresele IP, informații despre browserul și sistemul de operare, rezoluția ecranului și pagina de pe care ați venit sau a fost redirecționat. De asemenea, poate bloca cookie-urile pe care site-urile le folosesc pentru a marca browserul dumneavoastră, a salva setările personale și preferințele utilizatorului sau a vă recunoaște la următoarea vizită.

![Protecția împotriva urmării \*mobil_bordură](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

_Protecția împotriva urmării_ are trei niveluri preconfigurate de protecție a intimității (_Standard_, _Ridicat_ și _Extreme_) și un nivel definit de utilizator (_Personalizat_).

Iată caracteristicile active ale nivelurilor preconfigurate:

1. **Standard**

    a. _Blocați trackerele_. Această caracteristică folosește _Filtrul AdGuard de protecție de urmărire_ pentru a vă proteja de contoarele online și instrumentele de analiză web

    b. _Cereți site-urilor web să nu vă urmărească_. Această caracteristică trimite semnalele [Global Privacy Control](https://globalprivacycontrol.org/) și [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) către site-urile web pe care le vizitați, cerând aplicațiilor web să dezactiveze urmărirea activității dumneavoastră

    c. _Eliminați antetul X-Client-Data_. Această caracteristică împiedică Google Chrome să trimită informații despre versiunea sa și modificările către domeniile Google (inclusiv DoubleClick și Google Analytics)

2. **Ridicat**

    a. _Blocați trackerele_. Această caracteristică folosește _Filtrul AdGuard de protecție de urmărire_ pentru a vă proteja de contoarele online și instrumentele de analiză web

    b. _Eliminați parametrii de urmărire din adresele URL_. Această caracteristică folosește _Filtrul de urmărire URL AdGuard_ pentru a elimina parametrii de urmărire, precum `utm_*` și `fb_ref`, din adresele URL ale paginilor

    c. _Hide your search queries_. Această caracteristică ascunde interogările pentru site-urile vizitate dintr-un motor de căutare

    d. _Cereți site-urilor web să nu vă urmărească_. Această caracteristică trimite semnalele [Global Privacy Control](https://globalprivacycontrol.org/) și [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) către site-urile web pe care le vizitați, cerând aplicațiilor web să dezactiveze urmărirea activității dumneavoastră

    e. _Autodistrugerea cookie-urilor terțe_. Această caracteristică limitează durata de viață a cookie-urilor terțe la 180 de minute

    :::atenție

    Această caracteristică șterge toate cookie-urile terțe după expirarea forțată a acestora. Aceasta include autentificările dumneavoastră prin rețele sociale sau alte servicii de parte terță. Este posibil să fiți nevoit să reautentificați periodic pe unele site-uri web sau să întâmpinați alte probleme legate de cookie-uri. Pentru a bloca doar cookie-urile de urmărire, utilizați nivelul de protecție _Standard_.

    :::

    f. _Eliminați antetul X-Client-Data_. Această caracteristică împiedică Google Chrome să trimită informații despre versiunea sa și modificările către domeniile Google (inclusiv DoubleClick și Google Analytics)

3. **Extreme** (cunoscut anterior ca _Ultima_)

    a. _Blocați trackerele_. Această caracteristică folosește _Filtrul AdGuard de protecție de urmărire_ pentru a vă proteja de contoarele online și instrumentele de analiză web

    b. _Eliminați parametrii de urmărire din adresele URL_. Această caracteristică folosește _Filtrul de urmărire URL AdGuard_ pentru a elimina parametrii de urmărire, precum `utm_*` și `fb_ref`, din adresele URL ale paginilor

    c. _Hide your search queries_. Această caracteristică ascunde interogările pentru site-urile vizitate dintr-un motor de căutare

    d. _Cereți site-urilor web să nu vă urmărească_. Această caracteristică trimite semnalele [Global Privacy Control](https://globalprivacycontrol.org/) și [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) către site-urile web pe care le vizitați, cerând aplicațiilor web să dezactiveze urmărirea activității dumneavoastră

    e. _Autodistrugerea cookie-urilor terțe_. Această caracteristică limitează durata de viață a cookie-urilor terțe la 180 de minute

    :::atenție

    Această caracteristică șterge toate cookie-urile terțe după expirarea forțată a acestora. Aceasta include autentificările dumneavoastră prin rețele sociale sau alte servicii de parte terță. Este posibil să fiți nevoit să reautentificați periodic pe unele site-uri web sau să întâmpinați alte probleme legate de cookie-uri. Pentru a bloca doar cookie-urile de urmărire, utilizați nivelul de protecție _Standard_.

    :::

    f. _Blocați WebRTC_. Această caracteristică blochează WebRTC, o vulnerabilitate cunoscută care vă poate scurge adresa IP reală chiar dacă utilizați un proxy sau VPN

    g. _Blocare API-ul Push_. Această caracteristică împiedică browserul dumneavoastră să primească mesaje push de la servere

    h. _Blocați API-ul de Locație_. Această caracteristică împiedică browserul să acceseze datele dumneavoastră GPS și să determine locația dumneavoastră

    i. _Ascundeți referer-ul de terțe-părți_. Această caracteristică împiedică terții să știe ce site-uri web vizitați. Ascunde antetul HTTP care conține URL-ul paginii inițiale și îl înlocuiește cu unul implicit sau personalizat pe care îl puteți seta

    j. _Ascundeți-vă Agentul Utilizator_. Această caracteristică elimină informațiile de identificare din antetul Agentului Utilizator, care include în mod obișnuit numele și versiunea browserului, sistemul de operare și setările de limbă

    k. _Eliminați antetul X-Client-Data_. Această caracteristică împiedică Google Chrome să trimită informații despre versiunea sa și modificările către domeniile Google (inclusiv DoubleClick și Google Analytics)

Puteți ajusta setările individuale în _Protecția împotriva urmării_ și creați o configurație personalizată. Fiecare setare are o descriere care vă va ajuta să înțelegeți rolul acesteia. [Citiți mai multe despre ce fac diversele setări de _Protecție împotriva urmării_](/general/stealth-mode) și utilizați-le cu prudență, deoarece unele pot interfera cu funcționalitatea site-urilor web și extensiilor de browser.
