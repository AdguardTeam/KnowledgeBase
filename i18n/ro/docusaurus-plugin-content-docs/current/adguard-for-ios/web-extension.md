---
title: Safari Web extension
sidebar_position: 3
---

Extensiile Web adaugă funcționalitate personalizată la Safari. Puteți găsi [mai multe informații despre extensiile Web aici](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![Cum arată extensia Web în Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

Extensia AdGuard Web Safari este un instrument care profită de noile funcționalități ale iOS 15. Servește pentru a îmbunătăți capacitățile AdGuard pentru iOS. Cu aceasta, AdGuard poate aplica reguli avansate de filtrare și, în cele din urmă, bloca mai multe reclame.

## Ce face

Implicit, Safari oferă doar instrumente de bază pentru blocante de conținut. These tools don't offer the level of performance found in content blockers on other operating systems (Windows, Mac, Android). De exemplu, aplicațiile AdGuard pe alte platforme pot folosi arme anti-reclamă atât de puternice ca [reguli CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [selectoare CSS extinse](/general/ad-filtering/create-own-filters#extended-css-selectors) și [scripturi](/general/ad-filtering/create-own-filters#scriptlets). Din păcate, aceste utilitare sunt absolut de neînlocuit în cazul unor situații mai complexe, cum ar fi reclamele preroll pe YouTube.

AdGuard's Safari Web extension compliments AdGuard by giving it the ability to employ these types of filtering rules.

În plus, extensia Web Safari AdGuard poate fi utilizată pentru a gestiona rapid AdGuard pentru iOS direct din browser. Apăsați pe butonul *Extensii* — este cel cu un icon de puzzle; în funcție de tipul dispozitivului, poate fi localizat în stânga sau în dreapta barei de adrese. Găsiți **AdGuard** în listă și apăsați pe el.

![Meniul extensiei *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/ext_adguard_en.png?1)

> Pe iPad-uri, extensia Web Safari AdGuard poate fi accesată direct apăsând pe iconița AdGuard din bara de adrese a browserului.

Veți vedea următoarea listă de opțiuni:

- **Activarea/dezactivarea protecției pe site**. Dezactivarea comutatorului va dezactiva complet AdGuard pentru site-ul curent și va adăuga o regulă de excludere respectivă. Reactivarea comutatorului va relua protecția pentru site și va șterge regula. Orice astfel de modificare va necesita ceva timp pentru a intra în vigoare.

- **Blocking elements on the page manually**. Apăsați pe butonul *Blocați elemente pe această pagină* pentru a solicita o fereastră pop-up pentru blocarea elementelor. Selectați orice element de pe pagină pe care doriți să-l ascundeți, ajustați zona de selecție, apoi previzualizați modificările și confirmați eliminarea. O regulă de filtrare corespunzătoare va fi adăugată în AdGuard (pe care o puteți dezactiva sau șterge ulterior pentru a reveni la modificare).

- **Raportați o problemă**. Glisați în sus pentru a aduce butonul *Raportați o problemă*. Utilizați-l pentru a raporta o reclamă omisă sau orice altă problemă pe care ați întâmpinat-o pe pagina curentă.

## Cum să activați extensia AdGuard Web Safari

:::note

Extensia AdGuard Web Safari necesită acces la conținutul paginilor web pentru a funcționa, dar nu îl folosește în alt scop decât blocarea reclamelor.

:::

### În setările iOS

Extensia Web nu este un instrument autonom și necesită AdGuard pentru iOS. Dacă nu aveți AdGuard pentru iOS instalat pe dispozitivul dvs., vă rugăm să [îl instalați mai întâi](../installation) și să completați procesul de introducere pentru a-l pregăti pentru utilizare.

Odată ce ați terminat, deschideți *Setări → Safari → Extensii*.

![Selectați "Safari" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Selectați "Extensii" *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

Găsiți secțiunea **PERMITEȚI ACESTE EXTENSII** și apoi găsiți **AdGuard** printre extensiile disponibile.

![Selectați "AdGuard" în secțiunea PERMITEȚI ACESTE EXTENSII *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings3_en.png)

Apăsați pe ea, apoi activați comutatorul. Pe aceeași pagină, setați permisiunea *Toate site-urile* pentru AdGuard fie pe *Permite*, fie pe *Întreabă*. Dacă alegeți *Permite*, nu va trebui să oferiți permisiunea de fiecare dată când vizitați un site nou. Dacă nu sunteți sigur, alegeți *Întreabă* pentru a oferi permisiuni pe bază de site.

![Setările extensiei *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings4_en.png)

### În Safari

De asemenea, puteți activa extensia AdGuard din browserul Safari. Pentru a face acest lucru, apăsați *Extensii* (dacă nu o vedeți lângă bara de adrese, apăsați pe iconița `aA`).

![În Safari, apăsați pe iconița aA *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari1_en.png)

Apoi găsiți opțiunea *Gestionați extensiile* în listă și apăsați pe ea. În fereastra deschisă, activați comutatorul de lângă **AdGuard**.

![Extensii *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari2_en.png)

![Extensii *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/safari3_en.png)

Dacă folosiți această metodă, s-ar putea să trebuiască să mergeți la setările Safari pentru a oferi extensiei AdGuard permisiunile necesare.

Acum ar trebui să puteți vedea AdGuard printre extensiile disponibile. Apăsați pe aceasta și apoi pe iconița galbenă **i**. Activați **Protecția avansată** apăsând butonul *Activați* și confirmând acțiunea.

:::note

Dacă folosiți AdGuard pentru iOS fără un abonament Premium, nu veți putea activa **Protecția avansată**.

:::

Alternativ, puteți activa **Protecția avansată** direct din aplicație, în fila **Protecție** (a doua de la stânga în rândul de iconițe de jos).

Extensia AdGuard Web Safari funcționează doar pe versiunile iOS 15 și ulterioare.
