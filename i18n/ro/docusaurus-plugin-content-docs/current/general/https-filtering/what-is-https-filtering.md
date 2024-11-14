---
title: Ce este filtrarea HTTPS
sidebar_position: 1
---

### Ce este HTTPS?

HTTPS (Protocolul de transfer HyperText sigur) este o extensie a protocolului HTTP care suportă criptarea pentru a crește securitatea. Acest protocol este utilizat pentru a transmite în siguranță informații valoroase, cum ar fi datele personale, detaliile cardului de credit, etc.

Utilizarea HTTPS este foarte avantajoasă deoarece traficul criptat este protejat împotriva interceptării de către o parte terță, iar acest lucru este binevenit. Acceptarea HTTPS a crescut în ultimii ani, în principal deoarece este [încurajată de Google](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) și de apariția autorității de certificare gratuite [Let’s Encrypt](https://en.wikipedia.org/wiki/Let's_Encrypt).

Diagrama de mai jos descrie diferența dintre protocolul HTTP obișnuit și protocolul HTTPS sigur.

![Ce este HTTPS?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https.png)

### Ce este un certificat de securitate?

Pe scurt, HTTPS înseamnă criptarea datelor. Dar mai există o problemă: cum poți fi sigur că ai stabilit o conexiune criptată cu site-ul web corect? Aici intră în joc certificatele de securitate. Un certificat servește ca dovadă că site-ul web este într-adevăr cine sau ce pretinde că este. Dacă un site web nu are un astfel de certificat sau dacă certificatul conține informații incorecte, browserul nu îți va permite să stabilești o conexiune sigură. Este important ca certificatul utilizat de un site web să fie emis de o autoritate de certificare (CA) de încredere de către browserul tău. O astfel de CA garantează că certificatul SSL este, într-adevăr, emis către proprietarul site-ului.

### De ce are nevoie AdGuard să poată filtra HTTPS?

Majoritatea site-urilor web folosesc acum HTTPS, iar același lucru se aplică și publicității. Iată câteva site-uri populare unde nu poți elimina reclamele fără filtrarea HTTPS: youtube.com, facebook.com, și x.com.

### Cum funcționează filtrarea HTTPS?

Dacă ar fi ușor, HTTPS nu ar fi atât de sigur. Când un browser încearcă să se conecteze la un server, AdGuard stabilește două conexiuni sigure: una cu browserul (sau altă aplicație) și cealaltă cu serverul. Browserul trebuie să aibă încredere în AdGuard și în conexiunile pe care le creează. În acest scop, AdGuard generează un certificat rădăcină special (și unic) și îl instalează în sistem și, atunci când este necesar, în unele browsere (de exemplu, Firefox). AdGuard poate acum să vadă pachetele de date din interiorul conexiunii sigure și, astfel, să își facă treaba — să blocheze reclamele și trackerele.

Pentru o mai bună înțelegere, am reprezentat acest proces:

![Cum funcționează filtrarea HTTPS](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

### Traficul meu rămâne criptat și sigur?

Desigur! Conexiunea ta cu un server la distanță rămâne criptată și sigură. AdGuard, la fel ca browserul tău, verifică certificatul serverului înainte de a decide dacă să-l filtreze sau nu.

Cu toate acestea, filtrarea HTTPS are dezavantajele sale. Cel mai important este că ascunde de browser certificatul real al site-ului. În schimb, browserul vede certificatul emis de AdGuard.

Din acest motiv, am luat măsuri suplimentare pentru a îmbunătăți securitatea conexiunii.

### Site-uri financiare și site-uri cu date personale sensibile

În mod implicit, AdGuard nu filtrează nicio informație de pe site-urile băncilor, sistemelor de plată sau site-urilor cu date personale valoroase. Menținem o listă de [mii de excluderi](https://github.com/AdguardTeam/HttpsExclusions).

Dacă credeți că un anumit site ar trebui adăugat la această listă, vă rugăm [să ne anunțați](https://github.com/AdguardTeam/HttpsExclusions/issues/new).

### Certificate de validare extinsă (EV)

AdGuard îți permite să dezactivezi filtrarea pentru toate site-urile care folosesc certificate de validare extinsă.

Un certificat EV oferă un nivel mai înalt de securitate și oferă mai multe garanții decât un certificat obișnuit, dovedind că site-ul nu este fraudulent sau fals.

### Probleme legate de filtrarea HTTPS

Un [studiu din 2017](https://cdn.adtidy.org/public/Adguard/Blog/https/interception-ndss17.pdf) arată că 5 până la 10% din conexiunile HTTPS sunt stabilite de aplicații care filtrează HTTPS. De obicei, aceasta se face prin diferite tipuri de programe antivirus. Veștile proaste sunt că 24 din 26 de antivirusi testați au redus, în diverse moduri, nivelul de securitate al conexiunii, în timp ce două treimi au creat conexiuni vulnerabile la atacuri.

Cercetătorii au ajuns la o concluzie simplă: comunitatea de securitate a Internetului ar trebui să acorde o atenție deosebită aplicațiilor care filtrează conexiunile sigure. Și dezvoltatorii unor astfel de programe trebuie să acorde o atenție serioasă calității implementărilor de filtrare.

Dorim să menționăm că AdGuard nu a fost testat în studiul de mai sus. Am efectuat estimări conform setului lor de teste și, la momentul testării, am fi putut obține scorul maxim — A\*. Cu toate acestea, acest scor nu este perfect. În timpul studiului, cercetătorii au identificat unele probleme care au fost omise în evaluarea finală.

Aici, la AdGuard, suntem complet de acord cu acele concluzii. În plus, ne-ar plăcea să fim cât mai deschiși cu utilizatorii și să discutăm despre problemele pe care le întâmpinăm în prezent și pașii pe care îi facem pentru a îmbunătăți calitatea și securitatea mecanismului de filtrare. Lista acestor probleme este sortată după prioritate.

Majoritatea problemelor descoperite în studiul de mai sus sunt legate de mecanismele de validare a certificatului. This is what we want to focus on first. Lucrăm la o bibliotecă separată pentru validarea certificatelor. În plus, vrem să o facem open source. Un [articol separat](../known-issues) listează toate dezavantajele cunoscute ale filtrării HTTPS în AdGuard și planurile noastre de a le remedia.

#### Problemele filtrării HTTPS pe Android 7+

[Începând cu Android 7](https://adguard.com/en/blog/android-nougat-release-and-what-does-it-mean-for-adguard-users.html), dezvoltatorii trebuie să indice explicit că aplicațiile lor au încredere în certificatele instalate de utilizator. Nu toată lumea vrea să facă asta sau se deranjează cu asta. Ce înseamnă asta pentru AdGuard? AdGuard instalează un certificat de utilizator pentru a putea filtra traficul HTTPS. Dacă o aplicație nu are încredere în acest certificat, traficul său HTTPS nu va fi filtrat. Ce să fac?

Primul lucru de menționat este că multe aplicații (chiar și cele moderne) încă au încredere în certificatul de utilizator. Nimic nu s-a schimbat în această privință. Almost all browsers also trust such certificates. Ar putea exista unele browsere exotice care nu o fac, dar acestea sunt o rară excepție de la practica obișnuită.

În cele din urmă, dacă dispozitivul tău este rootat, poți muta certificatul AdGuard în stocarea sistemului. În acest fel, nu trebuie să te îngrijorezi de permisiunile pe care o aplicație anume le poate avea sau nu — traficul HTTPS va fi filtrat pentru aplicațiile moderne la fel de bine ca pentru cele mai vechi. Te rugăm să ai în vedere că în acest caz se aplică unele restricții suplimentare de securitate (de exemplu, HPKP sau `Expect-CT`) pentru AdGuard.

### Cum să verifici manual calitatea HTTPS?

Există mai multe site-uri dedicate unde poți verifica calitatea conexiunii tale HTTPS. Aceste site-uri verifică dacă browserul tău (sau, în cazul nostru, browserul tău plus AdGuard) este vulnerabil la vulnerabilități comune. Dacă planifici să folosești orice program care filtrează HTTPS, nu neapărat AdGuard (de exemplu, un antivirus), îți recomandăm să verifici calitatea conexiunii pe aceste site-uri.

- [https://www.ssllabs.com/ssltest/viewMyClient.html](https://www.ssllabs.com/ssltest/viewMyClient.html)
- [https://www.howsmyssl.com/](https://www.howsmyssl.com/)
- [https://badssl.com/](https://badssl.com/)
