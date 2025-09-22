---
title: Setări
sidebar_position: 2
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

_Setările_ este secțiunea care necesită cea mai mare atenție. Aici poți configura aplicația astfel încât să corespundă pe deplin cerințelor tale: blochează doar ceea ce te deranjează, utilizează serverul DNS al furnizorului de încredere, șterge cookie-urile ale terților și așa mai departe.

### General settings

Here you can set the language and theme (Dark or Light), enable AdGuard launching at system start-up and silent automatic updates, choose the update channel and filter update check interval. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

At the very bottom of the screen you will find _Advanced Settings_. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

### Ad blocking

Acesta este modul principal al AdGuard pentru Windows care elimină reclamele de pe site-urile pe care le vizitezi și din aplicațiile instalate pe dispozitivul tău. To filter out advertising and privacy-threatening content such as banners, popups, or trackers AdGuard uses different filters — groups of rules with a similar purpose written with a [special syntax](/general/ad-filtering/create-own-filters). Pentru a înțelege ce sunt filtrele și cum funcționează, citește [acest articol](/general/ad-filtering/how-ad-blocking-works).

![Ad blocking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

In the Ad blocking module you can:

- activați automat filtrele specifice limbii,
- dezactivare [blocarea reclamelor de căutare și auto-promovare](/general/ad-filtering/search-ads),
- disable ads in the Start menu on Windows 11,
- activează filtrele preinstalate, cum ar fi _Filtrul de bază AdGuard_,
- install filters from the list or add a custom filter by clicking the _Add a filter_ button,
- fă modificări în grupurile de reguli existente folosind butonul _Editor de filtre_,
- see all the requests sent by browsers and apps installed on your computer by clicking the _Filtering log_ button. De acolo poți, de asemenea, să blochezi sau să deblochezi orice solicitare creând o regulă personalizată,
- să compui un filtru din propriile tale reguli scrise manual, importate sau create cu extensia Asistentul AdGuard.

Înainte de a începe să scrii manual propriile reguli, citește [ghidul nostru detaliat de sintaxă](/general/ad-filtering/create-own-filters).

### Tracking protection

Multe site-uri web colectează informații despre vizitatorii lor, cum ar fi adresele IP, informațiile despre browser și sistemul de operare instalat, rezoluția ecranului și chiar de pe ce pagină a venit utilizatorul sau a fost redirecționat. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or “recognize” you upon your next visit. _Tracking protection_ safeguards your personal information from such data and statistics gathering systems.

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection.png)

You can flexibly adjust the work of _Tracking protection_: for instance, you can prohibit the website to receive the search request you used to find it on the Internet, automatically delete both third-party and website’s own cookies, and disable location sharing in your browser that can be used to track your whereabouts.

To learn everything about _Tracking protection_ and its many options, [read this article](/general/stealth-mode).

### Securitate la navigare

Securitatea la navigare oferă o protecție puternică împotriva site-urilor web dăunătoare și de phishing. Nu, AdGuard pentru Windows nu este un antivirus. It will neither stop the download of a virus when it’s already started, nor delete the already existing ones. But it will warn you if you’re about to proceed to a website whose domain has been added to our “untrusted sites” database, or to download a file from such website. Poți găsi mai multe informații despre modul în care funcționează acest modul în [articolul dedicat](/general/browsing-security).

In this module, you can:

- permite notificări pentru a bloca solicitările către site-uri dăunătoare și de phishing,
- activează notificările sonore,
- ești de acord să trimiți informații anonime legate de securitate serverului AdGuard pentru a ne ajuta să menținem baza de date a site-urilor dăunătoare și de phishing actualizată.

![Browsing security \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browsing_security.png)

În cazul în care dorești să afli mai multe despre Securitatea la navigare, citește [acest articol](/general/browsing-security).

### Protecție DNS

Există trei motive importante pentru care ai putea dori să explorezi setările de protecție DNS. În primul rând, pentru a evita să fii urmărit de ISP-ul tău. De fiecare dată când deschizi un site web, de exemplu `google.com`, browserul tău trimite o solicitare către un server DNS pentru a obține înapoi adresa IP a site-ului. De obicei, serverul DNS aparține ISP-ului tău, ceea ce le permite să îți urmărească activitatea online. În al doilea rând, pentru a cripta traficul DNS. Și al treilea motiv este [blocarea conținutului la nivel DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

In the DNS protection module of AdGuard for Windows, you can choose DNS servers from known DNS providers, including AdGuard DNS, which blocks ads and trackers, AdGuard DNS Family Protection, which also blocks adult content, or AdGuard DNS Non-filtering, which provides a secure and reliable connection but doesn’t filter anything. You can even add custom DNS servers and rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). If necessary, you can add [DNS filters of your choice](https://filterlists.com).

Starting with v7.20, you can also add filters by simply selecting them from a list of pre-built, trusted filters. They are grouped into four categories for your convenience:

- **General**: block ads and trackers
- **Regional**: block ads and trackers on language-specific websites
- **Security**: block phishing and unreliable websites
- **Other**: cover special use cases that don’t fit into the above categories

![DNS filters \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental control

There are several websites to which access should be restricted from a PC used by children. This task is accomplished by _Parental control_.

![Parental control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

The module checks the contents of web pages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental control settings are password-protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results.

In the _Parental control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental control_ module: you can select a specific Windows user to be protected by _Parental control_ and set a password to protect AdGuard settings from change.

### Asistent Browser

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
