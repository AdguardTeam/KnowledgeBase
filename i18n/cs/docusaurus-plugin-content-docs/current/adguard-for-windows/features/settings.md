---
title: Nastavení
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock).

:::

_Nastavení_ je část, která vyžaduje největší pozornost. Zde můžete program nakonfigurovat tak, aby plně vyhovoval vašim požadavkům: blokujte pouze to, co vám vadí, používejte DNS server důvěryhodného poskytovatele, odstraňujte soubory cookies třetích stran atd.

### General settings

Here you can set the language and theme (Dark or Light), enable AdGuard launching at system start-up and silent automatic updates, choose the update channel and filter update check interval. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

At the very bottom of the screen you will find _Advanced Settings_. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

### Blokování reklam

Jedná se o hlavní modul AdGuardu pro Windows, který odstraňuje reklamy z navštívených webových stránek a aplikací nainstalovaných v zařízení. K filtrování reklam a obsahu ohrožujícího soukromí, jako jsou bannery, vyskakovací okna nebo slídiče, používá AdGuard různé filtry — skupiny pravidel s podobným účelem zapsané pomocí [speciální syntaxe](/general/ad-filtering/create-own-filters). Chcete-li pochopit, co jsou to filtry a jak fungují, přečtěte si [tento článek](/general/ad-filtering/how-ad-blocking-works).

![Ad blocking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

V modulu Blokování reklam můžete:

- povolit automatickou aktivaci jazykově specifických filtrů,
- deaktivovat blokování [reklam ve vyhledávání a vlastní propagaci](/general/ad-filtering/search-ads),
- zakázat reklamy v nabídce Start ve Windows 11,
- aktivovat předinstalované filtry, jako je _AdGuard Base filtr_,
- instalovat filtry ze seznamu nebo přidat vlastní filtr kliknutím na tlačítko _Přidat filtr_,
- provádět změny ve stávajících skupinách pravidel pomocí tlačítka _Editor filtrů_,
- zobrazit všechny požadavky odeslané prohlížeči a aplikacemi nainstalovanými v počítači kliknutím na tlačítko _Záznam filtrování_. Zde můžete také zablokovat nebo odblokovat jakýkoli požadavek vytvořením vlastního pravidla,
- vytvořit filtr z vlastních pravidel napsaných ručně, importovaných nebo vytvořených pomocí rozšíření AdGuard Assistant.

Než začnete ručně psát vlastní pravidla, přečtěte si našeho podrobného [průvodce syntaxí](/general/ad-filtering/create-own-filters).

### Ochrana před sledováním

Mnoho webových stránek shromažďuje informace o svých návštěvnících, například jejich IP adresy, informace o nainstalovaném prohlížeči a operačním systému, rozlišení obrazovky, a dokonce i o tom, na jakou stránku uživatel přišel nebo z jaké stránky byl přesměrován. Některé webové stránky používají soubory cookies k označení prohlížeče a uložení vašich osobních nastavení, uživatelských preferencí nebo k vašemu “rozpoznání“ při příští návštěvě. _Ochrana před sledováním_ chrání vaše osobní údaje před takovými systémy shromažďujícími data a statistiky.

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection.png)

You can flexibly adjust the work of _Tracking protection_: for instance, you can prohibit the website to receive the search request you used to find it on the Internet, automatically delete both third-party and website’s own cookies, and disable location sharing in your browser that can be used to track your whereabouts.

To learn everything about _Tracking protection_ and its many options, [read this article](/general/stealth-mode).

### Bezpečné prohlížení

Bezpečné prohlížení poskytuje silnou ochranu před škodlivými stránkami a krádeží identtity. Ne, AdGuard pro Windows není antivir. Nezastaví stahování viru, pokud již bylo zahájeno, ani neodstraní již existující viry. Upozorní vás však, pokud se chystáte přejít na webovou stránku, jejíž doména byla přidána do naší databáze “nedůvěryhodných stránek“, nebo stáhnout soubor z takové webové stránky. Více informací o fungování tohoto modulu najdete ve [vyhrazeném článku](/general/browsing-security).

V tomto modulu můžete

- povolit oznámení pro blokování požadavků na nebezpečné stránky,
- aktivovat zvukové oznámení,
- souhlasit s odesláním anonymních informací na server AdGuardu souvisejících se zabezpečením, které nám pomohou udržovat databázi nebezpečných webů aktuální.

![Browsing security \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browsing_security.png)

Pokud se chcete dozvědět více o Bezpečném prohlížení, přečtěte si [tento článek](/general/browsing-security).

### DNS ochrana

Existují tři důležité důvody, proč byste měli prozkoumat nastavení DNS ochrany. Zaprvé, abyste se vyhnuli sledování ISP. Pokaždé, když otevřete webovou stránku, například `google.com`, váš prohlížeč odešle požadavek na DNS server, aby na oplátku získal IP adresu webové stránky. DNS server obvykle patří vašemu poskytovateli internetových služeb, který tak může sledovat vaši online aktivitu. Za druhé, šifrování DNS provozu. A třetí je [blokovat obsah na úrovni DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/dns_protection.png)

V modulu DNS ochrany AdGuardu pro Windows můžete vybrat DNS servery od známých poskytovatelů DNS, včetně [AdGuard DNS](https://adguard-dns.io/kb/), který blokuje reklamy a slídiče, AdGuard DNS Ochrana rodiny, který navíc blokuje obsah pro dospělé, nebo AdGuard DNS - bez filtrování, který poskytuje bezpečné a spolehlivé připojení, ale nic nefiltruje. Můžete dokonce přidat vlastní DNS servery a pravidla pomocí [syntaxe pravidel DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/). Pokud je to nutné, můžete přidat [DNS filtry dle vlastního výběru](https://filterlists.com).

Od verze 7.20 můžete také přidávat filtry jednoduchým výběrem ze seznamu předpřipravených důvěryhodných filtrů. Pro vaše pohodlí jsou rozděleny do čtyř kategorií:

- **General**: blokování reklam a slídičů
- **Regional**: blokování reklam a slídičů na webových stránkách v konkrétním jazyce
- **Security**: blokování phishingových a nespolehlivých webových stránek
- **Other**: pokrývají zvláštní případy použití, které nespadají do výše uvedených kategorií

![DNS filters \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental control

Existuje několik webových stránek, ke kterým by měl být omezen přístup z PC používaného dětmi. This task is accomplished by _Parental control_.

![Parental control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

Modul kontroluje obsah webových stránek otevřených v prohlížeči a filtruje ty, jejichž obsah je pro děti nežádoucí: obrázky a texty pro dospělé, hrubý jazyk, násilí, propagace drog atd. Parental control settings are password-protected so that the child is not able to go round the restrictions. Tento modul nejenže blokuje vstup na nežádoucí stránky, ale také dokáže z výsledků vyhledávání odstranit odkazy, které jsou nevhodné pro děti.

In the _Parental control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. Můžete také zaškrtnout políčko _Blokovat stahování spustitelných souborů_ a zabránit tak vašemu dítěti ve stahování a instalaci softwaru do PC. There are two more options in the _Parental control_ module: you can select a specific Windows user to be protected by _Parental control_ and set a password to protect AdGuard settings from change.

### Asistent prohlížeče

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

Z této záložky můžete snadno přejít k instalaci Asistenta prohlížeče AdGuard, jehož primární funkcí je správa filtrování přímo z prohlížeče. Více informací o tom, jak s ním pracovat a co dělat, pokud pro váš prohlížeč není k dispozici Browser Assistant, jsme uvedli v [samostatném článku](/adguard-for-windows/browser-assistant.md).
