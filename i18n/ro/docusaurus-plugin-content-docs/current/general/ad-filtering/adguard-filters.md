---
title: Filtre AdGuard
sidebar_position: 2
---

:::info

Acest articol se referă la filtrele pe care le dezvoltăm și care sunt preinstalate în AdGuard. Pentru a le verifica, puteți [descărca aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Acest articol se referă la filtrele pe care le creăm pentru a fi utilizate în AdGuard și în alte programe de blocare a reclamelor (de exemplu, uBlock Origin). Filters are sets of rules in text format used by AdGuard apps and programs to filter out advertising and privacy-threatening content such as banners, popups, or trackers. Filtrele conțin liste de reguli în funcție de scopul lor. Filtrele lingvistice includ regulile pentru segmentele lingvistice corespunzătoare ale Internetului (de exemplu, filtru german). Filtrele bazate pe sarcini grupează regulile care îndeplinesc o sarcină specifică, cum ar fi filtru pentru rețele sociale sau filtru pentru protecția împotriva urmăririi. Activarea sau dezactivarea unui filtru face mai ușor să lucrezi cu întreaga listă de reguli deodată.

## Filtre AdGuard

- **Filtrul de bază** elimină reclamele de pe site-urile cu conținut în limba engleză. Bazat inițial pe [EasyList](https://easylist.to/) și modificat de noi. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_Base/filter.txt)
- **Filtru de protecție împotriva urmăririi** — listă cuprinzătoare a diferitelor conturi online și instrumente de analiză web. Utilizați-l pentru a ascunde acțiunile dvs. online și a evita urmărirea. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
- **Filtrul de urmărire URL AdGuard** îmbunătățește intimitatea prin eliminarea parametrilor de urmărire din URL-uri. Când un utilizator decide să blocheze parametrii de urmărire în Mod invizibil, acest filtru va fi activat automat. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt)
- **Filtrul Social Media** elimină numeroase butoane "Like" și "Tweet" și alte integrări de social media pe site-urile populare. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
- **Filtrul pentru deranjamente** blochează elementele enervante de pe paginile web. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt). Include următoarele filtre AdGuard (toate pot fi activate separat de filtrul de deranjamente):

    - **Notificările privind cookie-urile** blochează notificările privind cookie-urile de pe paginile web. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_18_Annoyances_Cookies/filter.txt)
    - **Popups** blocks all kinds of popups that are not necessary for websites' operation. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_19_Annoyances_Popups/filter.txt)
    - **Bannere pentru aplicații mobile** blochează bannerele care promovează aplicațiile mobile ale site-urilor. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_20_Annoyances_MobileApp/filter.txt)
    - **Widget-uri** blochează widget-urile terță parte: asistenți online, chat-uri de suport în direct etc. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_22_Annoyances_Widgets/filter.txt)
    - **Alte deranjamente** blochează elementele care nu se încadrează în categoriile populare de deranjamente. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_21_Annoyances_Other/filter.txt)

- **Filtrul care deblochează reclamele de căutare și auto-promovarea** deblochează reclamele care pot fi utile utilizatorilor. Aflați mai multe despre acest filtru pe [această pagină](../search-ads). [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
- **Filtrul rus** elimină reclamele de pe site-uri în limba rusă. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
- **Filtrul german** elimină reclamele de pe site-uri în limba germană. Bazat inițial pe filtrul [EasyList Germania](https://easylist.to/) și ulterior modificat de noi conform plângerilor utilizatorilor. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
- **Filtrul francez** elimină reclamele de pe site-uri în limba franceză. Bazat inițial pe filtrul [Liste FR](https://forums.lanik.us/viewforum.php?f=91) și ulterior modificat de noi conform plângerilor utilizatorilor. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
- **Filtrul japonez** elimină reclamele de pe site-uri în limba japoneză. Bazat inițial pe filtrul [Filtrul japonez Fanboy](https://www.fanboy.co.nz/fanboy-japanese.txt) și ulterior modificat de noi conform plângerilor utilizatorilor. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
- **Filtrul olandez** elimină reclamele de pe site-uri în limba olandeză. Originally based on the [EasyList Dutch](https://easylist.to/) filter and subsequently modified by us according to the complaints from users. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
- **Filtrul spaniol/portughez** elimină reclamele de pe site-uri în limba spaniolă și portugheză. Bazat inițial pe filtrul [Filtrul spaniol/portughez Fanboy](https://www.fanboy.co.nz/fanboy-espanol.txt) și ulterior modificat de noi conform plângerilor utilizatorilor. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
- **Filtrul turc** elimină reclamele de pe site-uri în limba turcă. Creat de noi conform plângerilor utilizatorilor. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
- **Filtrul chinezesc** elimină reclamele de pe site-uri în limba chineză. Bazat inițial pe filtrul [EasyList China](https://github.com/easylist/easylistchina) și ulterior modificat de noi conform plângerilor utilizatorilor. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
- **Filtrul ucrainean** elimină reclamele de pe site-uri în limba ucraineană. Aflați mai multe despre acest filtru pe [această pagină](https://adguard.com/en/blog/ukrainian-filter.html). [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_23_Ukrainian/filter.txt)
- **Filtrul experimental** servește pentru a testa unele reguli noi de filtrare care pot provoca conflicte și probleme de funcționare a site-urilor. În cazul în care aceste reguli funcționează fără probleme, ele sunt adăugate la filtrele principale. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
- **Filtrul pentru reclame mobile** blochează reclamele pe dispozitive mobile. Conține toate rețelele mobile de reclame cunoscute. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
- **Filtru DNS** — compus din mai multe alte filtre (filtrul de bază AdGuard, filtru Social Media, filtru de Protecție împotriva urmăririi, filtru de reclame mobile, EasyList și EasyPrivacy) și simplificat special pentru a fi mai bine compatibil cu blocarea de reclame la nivel DNS. Acest filtru este utilizat de serverele [AdGuard DNS](https://adguard-dns.io/kb) pentru a bloca reclamele și urmărirea. [Vizualizați regulile](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)

## Politica filtrelor AdGuard

Politica noastră de filtre definește ce ar trebui și ce nu ar trebui să blocheze filtrele AdGuard, precum și regulile pentru adăugarea și eliminarea regulilor din filtre. Citiți textul complet al [politicii de filtre AdGuard](../filter-policy) pentru informații detaliate.

## Contributing to AdGuard filters

Suntem binecuvântați cu o comunitate unică care nu doar că iubește AdGuard, ci și contribuie. Multe persoane fac voluntariat în diverse moduri pentru a îmbunătăți experiența utilizatorilor AdGuard pentru toată lumea. Sunteți binevenit să vă alăturați echipei și să faceți o diferență. We will do our part and happily reward the most active community. Deci, ce poți face?

### Raportează probleme

Ne bazăm pe comunitate pentru a ne anunța despre problemele cu filtrele noastre. Ne ajută să ne folosim timpul mai eficient și să menținem filtrele actualizate constant. Pentru a trimite un raport, vă rugăm să folosiți acest [instrument de raportare web](https://agrd.io/report).

### Sugerați reguli de filtrare

Veți găsi multe probleme deschise în [repozitoriul de filtre GitHub](https://github.com/AdguardTeam/AdguardFilters/issues). Fiecare se referă la o problemă cu un site web, cum ar fi o reclamă ratată sau un fals pozitiv. Alegeți o problemă și sugerează propriile reguli în comentarii. Inginerii de filtre AdGuard vor revizui sugestiile dvs. și, dacă sunt aprobate, vor adăuga regulile dvs. la filtrele AdGuard.

Iată [documentația oficială](../create-own-filters) despre sintaxa regulilor de filtrare AdGuard. Vă rugăm să o citiți cu atenție: vă va ajuta să creați propriile reguli de filtrare.

### Alte modalități de a contribui

Aceasta este [o pagină dedicată](https://adguard.com/contribute.html) pentru persoanele care doresc să contribuie la AdGuard în alte moduri.
