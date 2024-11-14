---
title: Cum funcționează blocarea reclamelor
sidebar_position: 1
---

AdGuard are multe produse de blocare a reclamelor pentru diferite platforme, fiecare cu propriile caracteristici unice. Dar ceea ce îi unește pe toți este că blochează reclamele și trackerele. Acest articol descrie cum funcționează blocarea reclamelor din interior.

:::note

Nu acoperim filtrarea DNS aici. Este o modalitate diferită de a bloca reclamele, cu propriile avantaje și dezavantaje. Urmărește acest link pentru [a afla mai multe despre filtrarea DNS](https://adguard-dns.io/kb/general/dns-filtering#how-does-dns-filtering-work).

:::  

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/Xq_CUdh0T_w" title="Player video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Principiul general

Listele de filtre, numite și filtre, stau la baza oricărui blocant de reclame. Filtrele sunt literalmente liste de reguli scrise într-o sintaxă specială. Blocantele de reclame pot înțelege această sintaxă complexă. Ele interpretează regulile de filtrare și efectuează acțiuni asupra traficului web pe baza a ceea ce le spun regulile să facă: blochează elemente specifice, alterează paginile web în anumite moduri etc.

![Cum funcționează blocarea reclamelor](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/adblockingworks.png)

## Listele de filtre

Pentru a înțelege mai bine blocarea reclamelor, este important să știi principiile de bază ale modului în care funcționează filtrele.

Regulile de filtrare care formează filtrele nu sunt create automat. Ele sunt dezvoltate de către întreținătorii filtrelor, inclusiv profesioniști și voluntari, care folosesc consolele de dezvoltator ale browserului și alte instrumente (cum ar fi jurnalul de filtrare al AdGuard) pentru a determina care reguli vor bloca o reclamă sau un tracker particular. Această descriere a procesului este foarte simplistă — unele reclame sunt deosebit de greu de blocat și necesită reguli multiple, multiple iterații și utilizarea unei sintaxe complexe.

Și chiar și atunci când o regulă este în cele din urmă adăugată la un filtru, nu înseamnă că rămâne acolo pentru totdeauna. Reclamele se schimbă, modalitățile de a servi aceleași reclame pe aceleași site-uri se schimbă, iar regulile filtrului trebuie să se schimbe, de asemenea. Uneori regulile devin învechite, apare o nouă reclamă sau este necesară o nouă regulă de filtrare pentru a bloca aceeași reclamă. Filtrele sunt adesea întreținute de o singură persoană, dar chiar și pentru o echipă de întreținători, este imposibil să monitorizezi constant întregul web. De aceea, multe blocante de reclame au instrumente pentru a ajuta utilizatorii să raporteze cu ușurință orice probleme legate de filtre pe care le întâmpină.

![Schema de actualizare a filtrelor](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/filtersupdates.png)

Utilizatorii AdGuard [au acces la un instrument special de raportare web](https://reports.adguard.com/new_issue.html). Datorită plângerilor utilizatorilor, dezvoltatorii filtrelor se pot concentra pe corectarea listelor lor de filtre și nu pe căutarea pe Internet a reclamelor vechi și noi neblocate.

Filtrele pot face mai mult decât să blocheze reclame. Există filtre care blochează trackerele, widgeturile de rețele sociale și neplăcerile precum anunțurile privind cookie-urile. Utilizatorii diferiți pot alege combinații diferite de filtre pentru a se potrivi preferințelor lor personale. Există site-uri precum [filterlists.com](https://filterlists.com/) care sunt dedicate listelor de filtre și au baze de date enorme.

Dezvoltăm și întreținem [propria noastră serie de liste de filtre](../adguard-filters) care pot fi folosite cu AdGuard sau alte blocante de reclame.

## Tipuri de reguli de filtrare

Există multe tipuri de reguli de filtrare care servesc scopuri diferite. În funcție de blocantul de reclame pe care îl folosești și, în special, de sistemul tău de operare, unele tipuri de reguli pot să nu fie acceptate.

### Reguli de filtrare de bază

Pentru a fi afișată pe o pagină web sau într-o aplicație, reclama trebuie să fie încărcată mai întâi de pe un server. Pentru a face acest lucru, browserul sau aplicația trebuie să trimită o solicitare web. Cea mai de bază modalitate de a preveni apariția unei reclame pe ecranul tău este să blochezi această solicitare astfel încât să nu ajungă niciodată la server, și astfel să nu existe un răspuns.

Practic, toate produsele AdGuard Ad Blocker pot bloca cererile web conform regulilor de filtrare active. Această metodă este foarte eficientă în oprirea reclamei, dar are unele dezavantaje. The most obvious one is: whatever place an ad was taking up will be left empty or occupied by an ad leftover.

### Reguli de filtrare cosmetică

Fiecare pagină web are un Model de Obiect Document (DOM), un document HTML care conține structura și elementele acestei pagini. Deoarece reclamele sunt de asemenea elemente de pagină, ele sunt înregistrate în DOM. Blocantele de reclame pot elimina părți ale DOM-ului, în timp ce regulile de filtrare le ajută să înțeleagă care părți sunt reclame și ar trebui eliminate și care părți ar trebui lăsate intacte.

Această metodă îți permite să eviți spațiile goale menționate mai sus și resturile de reclame, precum și să efectuezi alte sarcini mai complicate.

### HTML filtering rules

În cele mai multe cazuri, este suficient să folosești regulile de bază și cosmetice menționate anterior pentru a filtra reclamele. Dar când este necesar să schimbi codul HTML al paginii în sine înainte de a fi încărcat, ai nevoie de reguli de filtrare pentru conținutul HTML. Aceste reguli îți permit să specifici elementele HTML care trebuie să fie tăiate înainte ca browserul să încarce pagina.

Aceste reguli sunt destul de complicate și necesită ca blocantul de reclame să fie acordat anumite drepturi de acces, astfel că nu toate platformele le acceptă. În prezent, aceste reguli funcționează doar în extensia AdGuard pentru Firefox și în aplicațiile AdGuard pentru Windows, macOS și Android.

:::info

Există alte tipuri de reguli de filtrare, dar acestea necesită mai multe cunoștințe tehnice avansate pentru a înțelege cum funcționează. Dacă ești interesat, [consultă ghidul nostru cuprinzător despre regulile de filtrare în articolul linkat](../create-own-filters).

:::
