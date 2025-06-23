---
title: Nastavení
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock).

:::

_Nastavení_ je část, která vyžaduje největší pozornost. Zde můžete program nakonfigurovat tak, aby plně vyhovoval vašim požadavkům: blokujte pouze to, co vám vadí, používejte DNS server důvěryhodného poskytovatele, odstraňujte soubory cookies třetích stran atd.

![Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/general_settings.png)

### Obecná nastavení

Zde můžete nastavit jazyk a motiv (tmavý nebo světlý), povolit spouštění AdGuardu při startu systému a tiché automatické aktualizace, vybrat aktualizační kanál a interval kontroly aktualizací filtrů. Pokud AdGuard pro Windows nefunguje správně a tým podpory vás požádal, abyste [shromáždili _Protokoly ladění_](/adguard-for-windows/solving-problems/adguard-logs.md), přejděte do Nastavení.

![Advanced Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/advanced_settings.png)

Úplně dole na obrazovce najdete _Pokročilá nastavení_. Changing some of them mindlessly may potentially cause problems with AdGuard’s performance, break the Internet connection or compromise your security and privacy. That’s why we suggest you open this section only if you are sure of what you are doing or our support team has asked you about it. If you want to know what can be set up in _Advanced Settings_, read the [dedicated article](/adguard-for-windows/solving-problems/low-level-settings.md).

### Ad blocking

Jedná se o hlavní modul AdGuardu pro Windows, který odstraňuje reklamy z navštívených webových stránek a aplikací nainstalovaných v zařízení. K filtrování reklam a obsahu ohrožujícího soukromí, jako jsou bannery, vyskakovací okna nebo slídiče, používá AdGuard různé filtry — skupiny pravidel s podobným účelem zapsané pomocí [speciální syntaxe](/general/ad-filtering/create-own-filters). Chcete-li pochopit, co jsou to filtry a jak fungují, přečtěte si [tento článek](/general/ad-filtering/how-ad-blocking-works).

![Ad blocking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/ad_blocking.png)

In the Ad blocking module you can:

- povolit automatickou aktivaci jazykově specifických filtrů,
- deaktivovat blokování [reklam ve vyhledávání a vlastní propagaci](/general/ad-filtering/search-ads),
- zakázat reklamy v nabídce Start ve Windows 11,
- aktivovat předinstalované filtry, jako je _AdGuard Base filtr_,
- instalovat filtry ze seznamu nebo přidat vlastní filtr kliknutím na tlačítko _Přidat filtr_,
- provádět změny ve stávajících skupinách pravidel pomocí tlačítka _Editor filtrů_,
- zobrazit všechny požadavky odeslané prohlížeči a aplikacemi nainstalovanými v počítači kliknutím na tlačítko _Záznam filtrování_. Zde můžete také zablokovat nebo odblokovat jakýkoli požadavek vytvořením vlastního pravidla,
- vytvořit filtr z vlastních pravidel napsaných ručně, importovaných nebo vytvořených pomocí rozšíření AdGuard Assistant.

Než začnete ručně psát vlastní pravidla, přečtěte si našeho podrobného [průvodce syntaxí](/general/ad-filtering/create-own-filters).

### Tracking protection

Mnoho webových stránek shromažďuje informace o svých návštěvnících, například jejich IP adresy, informace o nainstalovaném prohlížeči a operačním systému, rozlišení obrazovky, a dokonce i o tom, na jakou stránku uživatel přišel nebo z jaké stránky byl přesměrován. Some web pages use cookies to mark the browser and save your personal settings, user preferences, or “recognize” you upon your next visit. _Tracking protection_ safeguards your personal information from such data and statistics gathering systems.

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/tracking_protection.png)

Práci v Režimu utajení můžete flexibilně nastavit: můžete například zakázat, aby webová stránka obdržela požadavek na vyhledávání, který jste použili k jejímu nalezení na internetu, automaticky vymazat soubory cookies třetích stran i vlastní soubory cookies webové stránky a zakázat sdílení polohy ve vašem prohlížeči, které lze použít ke sledování vaší polohy.

Chcete-li se dozvědět vše o Režimu utajení a jeho mnoha možnostech, přečtěte si [tento článek](/general/stealth-mode).

### Bezpečné prohlížení

Bezpečné prohlížení poskytuje silnou ochranu před škodlivými stránkami a krádeží identtity. Ne, AdGuard pro Windows není antivir. It will neither stop the download of a virus when it’s already started, nor delete the already existing ones. But it will warn you if you’re about to proceed to a website whose domain has been added to our “untrusted sites” database, or to download a file from such website. Více informací o fungování tohoto modulu najdete ve [vyhrazeném článku](/general/browsing-security).

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

### Rodičovská ochrana

Existuje několik webových stránek, ke kterým by měl být omezen přístup z PC používaného dětmi. This task is accomplished by _Parental Control_.

![Parental Control \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/parental_control.png)

Modul kontroluje obsah webových stránek otevřených v prohlížeči a filtruje ty, jejichž obsah je pro děti nežádoucí: obrázky a texty pro dospělé, hrubý jazyk, násilí, propagace drog atd. Nastavení Rodičovské ochrany jsou zabezpečena heslem, takže dítě nemůže obejít omezení. Tento modul nejenže blokuje vstup na nežádoucí stránky, ale také dokáže z výsledků vyhledávání odstranit odkazy, které jsou nevhodné pro děti.

V modulu _Rodičovská ochrana_ můžete povolit _Bezpečné vyhledávání_, spravovat _seznam zakázaných_, _seznam povolených_ a přizpůsobit si funkce těchto možností. Můžete také zaškrtnout políčko _Blokovat stahování spustitelných souborů_ a zabránit tak vašemu dítěti ve stahování a instalaci softwaru do PC. V modulu _Rodičovská ochrana_ jsou další dvě možnosti: můžete vybrat konkrétního uživatele Windows, který má být chráněn _Rodičovskou ochranou_ a nastavit heslo pro zabezpečení nastavení AdGuardu před změnami.

### Asistent prohlížeče

![Browser Assistant \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/settings/browser_assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
