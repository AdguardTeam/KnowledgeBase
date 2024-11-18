---
title: Protecție Safari
sidebar_position: 1
---

:::info

Acest articol se referă la AdGuard pentru iOS, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

### Content blockers {#content-blockers}

Content blockers serve as 'containers' for filtering rules that do the actual job of blocking ads and tracking. AdGuard pentru iOS conține șase blocante de conținut: Modul general, Intimitate, Social, Securitate, Personalizat și Alte. Previously Apple only allowed each content blocker to contain a maximum of 50K filtering rules, but with iOS 15 release the upper limit has moved to 150K rules.

Toate blocantele de conținut, statusurile lor, filtrele tematice pe care le includ în prezent și numărul total de reguli de filtrare utilizate pot fi găsite pe ecranul respectiv în _Setări avansate_ (apăsați pe pictograma roată din colțul din dreapta jos → _General_ → _Setări avansate_ → _Blocante de conținut_).

![Blocante de conținut \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

:::tip

Păstrați toate blocantele de conținut activate pentru cea mai bună calitate a filtrării.

:::

### Filtre {#filters}

Funcționarea blocantelor de conținut se bazează pe filtre, uneori denumite liste de filtre. Fiecare filtru este o listă de reguli de filtrare. Dacă aveți un blocant de reclame activat atunci când răsfoiți, acesta verifică constant paginile vizitate și elementele de pe acestea în raport cu aceste reguli de filtrare și blochează orice element care se potrivește. Regulile sunt dezvoltate pentru a bloca reclamele, trackerele și altele.

Toate filtrele sunt grupate în categorii tematice. Pentru a vedea lista completă a acestor categorii (nu trebuie confundate cu blocantele de conținut), deschideți secțiunea _Protecție_ atingând pictograma scut, apoi mergeți la _Protecție Safari_ → _Filtre_.

![Grupuri de filtre \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

Există opt dintre ele, fiecare categorie unește mai multe filtre care servesc și împărtășesc un scop comun, adică blocarea reclamelor, widgeturi de socializare, notificări de cookie-uri, protejând utilizatorul de înșelătorii online. Pentru a decide care filtre se potrivesc nevoilor dumneavoastră, citiți descrierile lor și navigați după etichete (`reclame`, `intimitate`, `recomandate`, etc.).

:::note

Mai multe filtre activate nu garantează că vor fi mai puține reclame. Un număr mare de filtre diferite activate simultan reduce calitatea blocării reclamelor.

:::

Categoria filtre personalizate este goală în mod implicit pentru ca utilizatorii să-și adauge filtrele prin URL. Puteți găsi filtre pe Internet sau chiar să încercați să [creați unul singur](/general/ad-filtering/create-own-filters).

### Reguli utilizator {#user-rules}

Aici puteți adăuga reguli noi — fie introducându-le manual, fie folosind [instrumentul manual de blocare AdGuard în Safari](#assistant). Utilizați acest instrument pentru a personaliza filtrarea Safari fără a adăuga o întreagă listă de filtre.

Aflați [cum să creați propriile filtre de reclame](/general/ad-filtering/create-own-filters). Dar vă rugăm să rețineți că multe dintre ele nu vor funcționa în Safari pe iOS.

![Ecran reguli utilizator \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Lista de permisiuni {#allowlist}

A treia secțiune a ecranului _Protecție Safari_. Dacă doriți să dezactivați blocarea reclamelor pe un anumit site web, lista de permisiuni vă va ajuta. Aceasta vă permite să adăugați domenii și subdomenii la excluderi. AdGuard pentru iOS are o funcție de Import/Export, astfel încât lista de permisiuni de pe un dispozitiv să poată fi transferată cu ușurință pe altul.
