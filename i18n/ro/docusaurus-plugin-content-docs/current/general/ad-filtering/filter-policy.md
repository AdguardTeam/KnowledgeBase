---
title: Politica de filtrare AdGuard
sidebar_position: 6
---

La AdGuard, am urmat mult timp anumite principii în realizarea filtrelor noastre, care, împreună cu descrierile filtrelor, sunt detaliate mai jos ca parte a politicii noastre de filtrare.

## Criterii comune

Aceste criterii se aplică în mod egal regulilor tuturor filtrelor.

- Regulile pentru un site specific vor fi adăugate doar dacă există trafic suficient. Traficul este determinat de statistici publice (dacă sunt disponibile) sau de indicatori indirecți, cum ar fi numărul de abonați pe rețelele sociale. Traficul unui site este considerat suficient dacă atinge 100.000 de vizite pe lună. Vom lua în considerare adăugarea unei reguli pentru un site care nu este atât de popular, dar decizia finală revine dezvoltatorilor de filtre. Site-urile cu trafic scăzut ar trebui să fie verificate totuși pentru analize de terță parte și rețele publicitare
- Decizia cu privire la fermele de conținut (site-uri care produc cantități mari de conținut destinat în principal obținerii unei vizibilități ridicate în rezultatele căutărilor și generării de venituri din publicitate) este luată de dezvoltatorii de filtre în funcție de calitatea conținutului

Cerințele de calitate pentru regulile de filtrare:

- Regulile nu ar trebui să afecteze negativ site-urile în termeni de performanță
- Regulile de deblocare trebuie să fie cât mai specifice posibil pentru a evita deblocarea oricărui lucru inutil
- Regulile JavaScript ar trebui folosite cât mai puțin posibil și doar dacă blocarea reclamelor este imposibilă fără ele

## Ad blocking filters

### Terminologie

**Blocant de reclame** este un instrument software sau hardware destinat filtrării, ascunderii sau blocării reclamelor și altor elemente de pe paginile web. Blocantele de reclame sunt create pentru a îmbunătăți experiența utilizatorului, a reduce timpii de încărcare a paginilor, a diminua consumul de trafic pe internet, a bloca reclamele, a spori intimitatea în timp ce navighează pe site-uri web și folosește aplicații, și a bloca elemente enervante.

Un **filtru** (sau o **listă de filtre**) este un set de reguli de filtrare conceput pentru a filtra conținutul și a bloca diferite tipuri de reclame și alte tipuri de conținut folosind blocante de reclame. Aceste filtre funcționează, de obicei, la nivelul browserului web, programelor sau serverului DNS.

**Anti-adblock** este o tehnologie utilizată de site-uri sau aplicații pentru a detecta blocarea reclamelor și a reacționa în diferite moduri: urmărire, reinjectare de reclame, încurajarea dezactivării blocantului de reclame (așa-numitele „perete anti-adblock”). Anti-adblockurile pot fi de diferite tipuri:

- Anti-adblock care blochează conținutul site-ului fără a oferi o alternativă: pentru a continua utilizarea site-ului, utilizatorul trebuie să dezactiveze blocantul de reclame pe site
- „Perete anti-adblock” cu opțiuni alternative oferite, cum ar fi achiziționarea unui abonament pentru a continua utilizarea blocantului de reclame
- Mesaje informative care nu obligă la acțiune: utilizatorii sunt rugați să dezactiveze blocantul de reclame, dar aceste mesaje pot fi închise, permițând utilizatorilor să continue utilizarea site-ului fără restricții
- Implementarea publicității alternative ca răspuns la utilizarea blocantului de reclame: site-urile introduc publicitate alternativă atunci când blocantele de reclame sunt detectate
- Paywall: o metodă de monetizare a conținutului în care conținutul este parțial sau complet ascuns de utilizatori, cu un mesaj care îi îndeamnă să achiziționeze un abonament pentru acces

### Filtre

Filtrele de blocare a reclamelor AdGuard includ:

- Filtru de bază AdGuard
- AdGuard Mobile Ads filter
- Filtre regionale împărțite pe principiu de limbă — chineză, olandeză, franceză, germană, japoneză, rusă, spaniolă/portugheză, turcă și ucraineană
- AdGuard Quick Fixes filter

### Scopul acestor filtre

- **Filtrul de bază** este conceput pentru a bloca reclamele pe site-uri în limba engleză și pe cele pentru care nu există un filtru separat. It also contains general filtering rules that apply to all sites regardless of language
- **Mobile Ads filter** blocks advertisements on mobile versions of websites and within mobile apps. There is no segmentation based on language
- **Regional filters** follow the same policy as the **Base filter**, but limited to websites in certain languages
- **Quick Fixes filter** used to quickly resolve critical content filtering issues on popular websites without updating the MV3 extension.

Obiectivul filtrelor de blocare a reclamelor este de a bloca toate tipurile de publicitate pe site-uri, aplicații și anumite dispozitive care pot încărca reclame de pe Internet:

- Bannere — reclame afișate ca imagini în diferite părți ale paginilor web
- Teaser-e — reclame textuale sau grafice, adesea animate, concepute pentru a intrigui vizitatorii (titluri senzationaliste, imagini atrăgătoare) și a-i determina să dea click pe banner (clickbait)
- Reclame textuale — publicitate sub formă de text, inclusiv linkuri
- Modal adverts — advertising that suddenly appears over the current content in the form of modal windows
- Popunders — publicitate care se deschide într-o fereastră separată sub cea curentă, atunci când se face click oriunde pe pagină
- Publicitate redirect — mecanisme care redirecționează automat utilizatorii către un alt site după click
- Reclame mascate ca conținut al site-ului, care deschid pagini cu produse promovate sau conținut nelegat la clic
- Reclame video — videoclipuri publicitare încorporate în conținutul video sau în elemente de reclame separate pe site-uri web și aplicații
- Reclame interactive — reclame cu care utilizatorii pot interacționa (de exemplu, jocuri și sondaje, la finalizarea cărora se deschide elementul publicitar)
- Interstitial ads — full-screen ads on mobile devices that cover the interface of the app or web browser
- Ads leftovers that occupy large spaces or stand out against the background and attract visitors' attention (except barely discernible or unnoticeable ones)
- Publicitate anti-adblock — publicitate alternativă afișată pe site atunci când cea principală este blocată
- Bait elements that are used by multiple known adblock detection scripts to detect an ad blocker presence for different goals including changing the way ads are shown, fingerprinting, etc.
- Site’s own advertising, if it has been blocked by general filtering rules (see *Limitations and exceptions*)
- Anti-adblock scripts that prevent site usage (see *Limitations and exceptions*)
- Publicitate injectată de malware, dacă sunt furnizate informații detaliate despre metoda de încărcare sau pașii pentru reproducere
- Minerit nedorit — Script-uri care minează criptomonedă fără consimțământul utilizatorului

### Limitări și excepții

- Publicitatea proprie a site-ului nu ar trebui să fie blocată intenționat. Cu toate acestea, nu ar trebui să fie deblocată dacă blocarea este cauzată de regulile de filtrare generale
- Măsurile de acces la conținut, cum ar fi paywalls, nu sunt blocate
- Anti-adblock walls will be blocked in the following cases:
    - Ele insistă agresiv pe dezactivarea sau eliminarea blocantului de reclame sau împiedică efectiv utilizarea site-ului
    - Conțin descrieri incorecte și înșelătoare ale posibilelor consecințe ale utilizării blocantelor de reclame
    - Expun vizitatorii la riscul de malware — când reclamele deblocate provind din surse dubioase
- Nu blocăm mesajele de detectare a blocantelor de reclame care respectă cel puțin unul dintre următoarele criterii:
    - Ele permit utilizarea site-ului și nu suprapun o cantitate semnificativă de conținut
    - Ele oferă o alternativă la dezactivarea blocantului de reclame, cu condiția ca această alternativă să nu pună în pericol intimitatea sau securitatea utilizatorilor
    - Ele permit utilizatorului să continue pe conținutul site-ului sau oferă un schimb de valoare fezabil, care nu pune în pericol intimitatea sau securitatea utilizatorului
    - Unele reguli de moștenire pot continua să blocheze mesaje care respectă unul sau mai multe dintre aceste criterii. Dacă sunt identificate, astfel de reguli vor fi gestionate conform acestei politici
- Piscinele de minerit nu sunt blocate dacă sunt publice și nu sunt utilizate exclusiv în scopuri dăunătoare

## Tracking protection filters

### Terminologie

**Tracking** — the process of monitoring and collecting data about users and their interactions with websites and applications for marketing purposes, as well as to obtain telemetry about the functioning of websites or applications for the purpose of analyzing their operation. Acest proces include urmărirea paginilor vizitate, timpul petrecut, interacțiunea cu elementele site-ului (de exemplu, cliuri, trimiterea formularelor) și alte statistici. Permite proprietarilor de site-uri și aplicații să înțeleagă mai bine comportamentul utilizatorilor, să optimizeze funcționalitatea și să adapteze strategiile de marketing. Urmărirea este folosită și pentru a monitoriza performanța, modele de utilizare și a identifica probleme, oferind dezvoltatorilor datele necesare pentru a îmbunătăți stabilitatea și calitatea site-ului sau aplicației. Even if the data obtained cannot reveal a person’s identity, such actions are still considered tracking.

**Tracker** — program folosit pe un site web sau într-o aplicație și destinat să colecteze informații despre funcționarea lor și acțiunile vizitatorilor. Urmărește interacțiunea utilizatorului cu site-ul sau aplicația, înregistrând date despre vizualizările paginilor, timpul petrecut, cliuri, trimiterea formularelor și alte evenimente. Its purpose is to provide website and application owners with a tool for analyzing user behavior, improving the user experience, and optimizing content and advertising.

**Parametru de urmărire URL** — o parte a adresei care este adăugată la linkuri de sistemele de analiză sau care este prezentă în unele linkuri de pe paginile web. Când se face o solicitare, acest parametru de urmărire URL poate fi procesat de backend-ul unui sistem de analiză sau site web, care va extrage informații din acesta. De exemplu, parametrii de urmărire URL pot transmite informații despre cliuri sau campanii publicitare. URL tracking parameters can also be used by fraud protection or bot detection systems.

**Cookies** — fișiere pe care site-urile le trimit și stochează pe dispozitive. These files contain various information — both necessary for the functioning of the site on the device and used for analytics purposes — unique identifiers used to track visitor activity on the website, advertising parameters, and more.

### Filtre

Filtrele de protecție împotriva urmăririi AdGuard includ:

- Filtrul AdGuard de protecție de urmărire
- Filtrul de urmărire URL AdGuard

### Scopul acestor filtre

**Filtrul de protecție de urmărire** este conceput pentru a bloca trackerele care colectează datele personale ale utilizatorilor și pentru a îmbunătăți intimitatea utilizatorilor.

What it blocks:

- Scripturile sistemelor de analiză
- Scripturile de urmărire proprii ale site-urilor și aplicațiilor
- Masked CNAME trackers
- Cookie-uri de urmărire
- Pixeli de urmărire
- API-uri de urmărire ale browserelor
- Detection of the ad blocker for tracking purposes
- Privacy Sandbox functionality in Google Chrome and its forks used for tracking (Google Topics API, the Protected Audience API)

The **URL Tracking filter** is designed to remove tracking parameters from web addresses

### Limitări și excepții

Filtrele de protecție împotriva urmăririi nu ar trebui să blocheze un tracker dacă blocarea ar perturba funcționarea corectă a site-ului:

- Anti-boti și protecție împotriva fraudei dacă interferează cu utilizarea site-ului. For example, with PerimeterX or hCaptcha blocking causes problems when the site attempts to verify its visitor with a captcha
- Sistemele de urmărire a erorilor, cum ar fi Sentry sau Bugsnag, nu sunt blocate

## Filtrele de enervare

Filtrele de enervare sunt concepute pentru a îmbunătăți utilizabilitatea site-urilor prin blocarea elementelor din pagini care nu sunt reclame, dar care distrag și interferează cu interacțiunea pe site sau consumul de conținut — cum ar fi diverse feronerie modale și formulare interactive, notificări și solicitări privind consimțământul pentru cookie-uri, bannerele aplicațiilor mobile și diverse widgeturi.

### Terminologie

**Notificare pentru cookie-uri** — un formular care descrie tipurile și utilizarea cookie-urilor pe un site web. O notificare pentru cookie-uri apare atunci când un utilizator vizitează site-ul, informând utilizatorul că site-ul utilizează cookie-uri sau alte tehnologii de urmărire pentru a colecta și utiliza informații personale și explicând de ce și cu cine sunt împărtășite informațiile colectate.

**CMP (Platforma de Gestionare a Consimțământului)** — program care ajută site-urile să respecte regulile privind utilizarea cookie-urilor. CMPs limit cookies usage until user consent is obtained, providing users with the option to accept certain cookies and manage privacy settings.

**Widget** — a user interface element that extends the functionality of a website. Web widgets are integrated into web pages and can include interactive elements such as buttons, forms, or banners. They can provide users with access to specific services or content without requiring navigation to other pages.

**Popup** — a window that appears above the current web page. It is intended to display additional information, advertisements, notifications, or data entry forms. Popups usually block the view of the main content of the page and require user action to close, which can be irritating.

### Filtre

For better customization, annoyance filters are divided by their purpose:

- AdGuard Cookie Notices filter
- AdGuard Popups filter
- AdGuard Mobile App Banners filter
- AdGuard Widgets filter
- AdGuard Other Annoyances filter
- AdGuard Annoyances filter — a combined filter that includes all 5 specialized annoyance filters

### Scopul acestor filtre

#### AdGuard Cookie Notices filter

This filter is designed to block both cookie notices and requests from cookie management platforms (CMPs). Various methods may be applied to cookie notices and CMPs. In most cases, simply hiding or blocking the corresponding scripts is sufficient. However, when the site’s functionality and display of third-party content require cookie consent, the following methods are applied:

- Scriptlets are used to bypass the consent request (practically not applicable on sites with restrictions on loading third-party content until a decision is made)
- Setting a cookie or key in the site’s local storage in such a way that the script considers the user to have made a choice
- Simulating user action using a rule that clicks a specified button and interrupts its execution 10 seconds after loading. Two options are possible:
    - Reject (except for functional cookies — depending on the CMP system) — the preferred option, as there is less risk of loading additional analytics tools
    - Accept — this option is used as the last resort if other methods fail. In this case, the site is additionally checked for the use of analytics tools, which are then blocked by the **AdGuard Tracking Protection filter**

**Limitări și excepții**

In some cases, the decision to add rules is made independently by filter developers; mostly, when the choice made when simulating actions would affect the site’s functionality (for example, history may not work, or user settings may not be saved on such a site).

#### AdGuard Popups filter

This is a filter that blocks various popups on web pages that are not necessary for normal site usage, including but not limited to:

- Requests for permission to receive push notifications
- Popups and forms for subscribing to news, promotions, and various events, including third-party channels for receiving them (such as Google News, Telegram)
- Popups that encourage users to disable ad blocker and violate user’s privacy (at the discretion of the filter developers)
- Other types of popups that may annoy users (at the discretion of filter developers)

**Limitări și excepții**

- Push notifications are only blocked on sites where they are not used for practical purposes. For example, in email web clients or tools used for work purposes, such notifications will not be blocked
- Some popups that do not fall into the categories described above but still interfere with the user’s experience may be also blocked. For example, registration prompts on a site or popups that introduce the site’s features. The decision is made by filter developers
- Content access measures that ask the user to pay to access the content must not be circumvented

#### AdGuard Mobile App Banners filter

This is a filter that blocks banners and popups that encourage visitors to install mobile apps.

**Limitări și excepții**

Banners located in the headers or in the menus of websites are not blocked if they are not animated and do not occupy a significant portion of usable space. If a banner is located in the footer, the decision is made by filter developers case-by-case. Usually, banners in the footer do not stand out against other elements and are not distracting.

#### AdGuard Widgets filter

This is a filter that blocks various widgets that are not essential for the functioning of websites or for interaction with them:

- Widgets for content recommendations — related articles, similar websites, various personalized recommendations
- Chat widgets that are not integrated with the content and are not the main content of the page
- Marketing widgets:
    - Chats for communication with assistants or bots
    - Widgets with product recommendations that are shown to the user
    - Call-back forms
- Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations

**Limitări și excepții**

This filter doesn’t block:

- Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content
- Widgets for self-promotion and site-specific promotional activities
- Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers

#### AdGuard Other Annoyances filter

This filter is designed to block annoying elements that are not included in other filters, as well as to apply various tweaks. It’s purpose is to:

- Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element
- Block annoying elements that are not included in other categories
- Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked
- Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered
- Apply various rules that may be useful for filter developers. For example, blocking web debugger detection

**Limitări și excepții**

This filter may contain rules that are not suitable for all users. Sometimes it is recommended to disable this filter. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis.

## Social media filters

### Filtre

AdGuard Social Media filters include:

- AdGuard Social Media filter

### Scopul acestor filtre

This filter will block social media widgets on third-party websites, such as “Like” and “Share” buttons, group widgets, recommendations, and similar widgets.

### Limitări și excepții

Widgets that are part of the website’s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website’s social media pages are also not blocked.

## Other filters

This group contains filters that are not essential for blocking advertisements.

### Terminologie

**Contextual advertising** is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages.

**Search advertising** is a subclass of contextual advertising where ads are displayed based on the visitor's search query.

**Self-promotion of websites** refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties.

For more details on these types of advertising, refer to the [article on search ads](https://adguard.com/kb/general/ad-filtering/search-ads/).

### Filtre

- Filtru care deblochează reclamele de căutare și auto-promovare
- AdGuard DNS filter
- AdGuard Experimental filter

### Scopul acestor filtre

#### Filtru care deblochează reclamele de căutare și auto-promovare

This filter unblocks:

- Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)
- Self-promotion of websites

**Limitări și excepții**

- Search advertising is unblocked only if it corresponds to the user’s search query, as it is contextual. Otherwise, the advertising remains blocked
- Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers
- Any other advertising will not be unblocked

#### AdGuard DNS filter

This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters.

**Limitări și excepții**

Same as for ad-blocking filters.

#### AdGuard Experimental filter

This filter is intended for testing and debugging rules that potentially may break websites’ functionality. Rules are added by filter developers when there’s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal.

**Limitări și excepții**

- Rules should not intentionally break websites’ functionality
- Rules should not unblock advertisements or otherwise violate the Policy
