---
title: Setări
sidebar_position: 2
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

_Setările_ este secțiunea care necesită cea mai mare atenție. Aici poți configura aplicația astfel încât să corespundă pe deplin cerințelor tale: blochează doar ceea ce te deranjează, utilizează serverul DNS al furnizorului de încredere, șterge cookie-urile ale terților și așa mai departe.

![Setări \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### Setări Generale

Aici poți seta limba și tema (Întuneric sau Lumină), activați lansarea AdGuard la pornirea sistemului și actualizările automate silențioase, alege canalul de actualizare și intervalul de verificare a actualizărilor. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Setări Avansate \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

În partea de jos a ecranului vei găsi _Setările Avansate_. Changing some of them mindlessly may potentially cause problems with AdGuard's performance, break the Internet connection or compromise your security and privacy. De aceea, îți sugerăm să deschizi această secțiune doar dacă ești sigur de ceea ce faci sau echipa noastră de asistență te-a întrebat despre asta. Dacă vrei să știi ce poate fi configurat în _Setările Avansate_, citește [articolul dedicat](/adguard-for-windows/solving-problems/low-level-settings.md).

### Blocant de reclame

Acesta este modul principal al AdGuard pentru Windows care elimină reclamele de pe site-urile pe care le vizitezi și din aplicațiile instalate pe dispozitivul tău. Pentru a filtra conținutul publicitar și amenințător pentru intimitate, cum ar fi bannerele, pop-up-urile sau trackerele, AdGuard folosește diferite filtre: grupuri de reguli cu un scop similar scrise cu o [sintaxă specială](/general/ad-filtering/create-own-filters). Pentru a înțelege ce sunt filtrele și cum funcționează, citește [acest articol](/general/ad-filtering/how-ad-blocking-works).

![Blocant de reclame \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

În modul Blocant de reclame poți:

- activați automat filtrele specifice limbii,
- dezactivare [blocarea reclamelor de căutare și auto-promovare](/general/ad-filtering/search-ads),
- disable ads in the Start menu on Windows 11,
- activează filtrele preinstalate, cum ar fi _Filtrul de bază AdGuard_,
- install filters from the list or add a custom filter by clicking the _Add a filter_ button,
- fă modificări în grupurile de reguli existente folosind butonul _Editor de filtre_,
- see all the requests sent by browsers and apps installed on your computer by clicking the _Filtering log_ button. De acolo poți, de asemenea, să blochezi sau să deblochezi orice solicitare creând o regulă personalizată,
- să compui un filtru din propriile tale reguli scrise manual, importate sau create cu extensia Asistentul AdGuard.

Înainte de a începe să scrii manual propriile reguli, citește [ghidul nostru detaliat de sintaxă](/general/ad-filtering/create-own-filters).

### Modul Incognito

Multe site-uri web colectează informații despre vizitatorii lor, cum ar fi adresele IP, informațiile despre browser și sistemul de operare instalat, rezoluția ecranului și chiar de pe ce pagină a venit utilizatorul sau a fost redirecționat. Unele pagini web folosesc cookie-uri pentru a marca browserul și a salva setările personale, preferințele utilizatorului sau pentru a "recunoaște" vizitatorul la următoarea vizită. Modul invizibil protejează informațiile tale personale de astfel de sisteme de colectare a datelor și statisticilor.

![Mod invizibil \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Poți ajusta flexibil funcționarea Modul invizibil: de exemplu, poți interzice site-ului să primească cererea de căutare folosită pentru a-l găsi pe Internet, să ștergi automat cookie-urile atât ale terților, cât și ale site-ului web și să dezactivezi partajarea locației în browserul tău care poate fi folosită pentru a-ți urmări locația.

Pentru a învăța totul despre Modul invizibil și opțiunile sale, [citește acest articol](/general/stealth-mode).

### Securitate la navigare

Securitatea la navigare oferă o protecție puternică împotriva site-urilor web dăunătoare și de phishing. Nu, AdGuard pentru Windows nu este un antivirus. Nu va opri descărcarea unui virus atunci când aceasta a început deja, nici nu va șterge virusurile deja existente. Dar te va avertiza dacă ești pe cale să accesezi un site web al cărui domeniu a fost adăugat în baza noastră de date de "site-uri neîncrezătoare", sau să descarci un fișier de pe un astfel de site. Poți găsi mai multe informații despre modul în care funcționează acest modul în [articolul dedicat](/general/browsing-security).

În acest modul poți

- permite notificări pentru a bloca solicitările către site-uri dăunătoare și de phishing,
- activează notificările sonore,
- ești de acord să trimiți informații anonime legate de securitate serverului AdGuard pentru a ne ajuta să menținem baza de date a site-urilor dăunătoare și de phishing actualizată.

![Securitate la navigare \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

În cazul în care dorești să afli mai multe despre Securitatea la navigare, citește [acest articol](/general/browsing-security).

### Protecție DNS

Există trei motive importante pentru care ai putea dori să explorezi setările de protecție DNS. În primul rând, pentru a evita să fii urmărit de ISP-ul tău. De fiecare dată când deschizi un site web, de exemplu `google.com`, browserul tău trimite o solicitare către un server DNS pentru a obține înapoi adresa IP a site-ului. De obicei, serverul DNS aparține ISP-ului tău, ceea ce le permite să îți urmărească activitatea online. În al doilea rând, pentru a cripta traficul DNS. Și al treilea motiv este [blocarea conținutului la nivel DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![Protecție DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

În modul de protecție DNS al AdGuard pentru Windows poți selecta serverele DNS de la furnizori DNS cunoscuți, inclusiv [AdGuard DNS](https://adguard-dns.io/kb/) care blochează reclame și trackere, AdGuard DNS Protecția Familiei care blochează de asemenea conținut pentru adulți, sau AdGuard DNS Non-filtrare care oferă o conexiune sigură și fiabilă, dar nu filtrează nimic. Poți adăuga chiar și servere DNS personalizate. De asemenea, există o opțiune de a adăuga reguli personalizate folosind [sintaxa regulilor DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/). Și, dacă este necesar, poți adăuga [filtre DNS la alegerea ta](https://filterlists.com).

### Control parental

Există mai multe site-uri web la care accesul ar trebui restricționat de la un PC folosit de copii. Această sarcină este realizată prin Control parental.

![Control parental \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

Modulul verifică conținutul paginilor web deschise în browser și filtrează acele pagini cu conținut nedorit pentru copii: imagini și texte pentru adulți, limbaj vulgar, violență, propagandă a drogurilor etc. Setările Controlului parental sunt protejate prin parolă astfel încât copilul să nu poată să ocolească restricțiile. Acest modul nu blochează doar direcționările către site-uri nedorite, ci poate de asemenea să ștergă linkurile nepotrivite pentru copii din rezultatele căutării.

În modulul _Control parental_ poți activa _Căutarea sigură_ și gestiona lista de blocări și lista permisiunilor pentru a personaliza modul în care funcționează această opțiune. Poți verifica de asemenea caseta _Blochează descărcările de fișiere executabile_ pentru a preveni descărcarea și instalarea de programe pe computer de către copilul tău. Există două opțiuni suplimentare în modulul _Control parental_: poți alege un utilizator Windows specific care să fie protejat de _Control parental_ și să setezi o parolă pentru a proteja setările AdGuard de modificări.

![Control parental \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Asistent Browser

![Asistent Browser \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

Din această filă poți trece cu ușurință la instalarea Asistentului Browser AdGuard, a cărui funcție principală este de a gestiona filtrarea direct din browser. Am explicat mai multe despre cum să lucrezi cu acesta și ce ai de făcut dacă nu există Asistent Browser pentru browserul tău în [articolul separat](/adguard-for-windows/browser-assistant.md).
