---
title: Nastavení
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

_Nastavení_ je část, která vyžaduje největší pozornost. Zde můžete program nakonfigurovat tak, aby plně vyhovoval vašim požadavkům: blokujte pouze to, co vám vadí, používejte DNS server důvěryhodného poskytovatele, odstraňujte soubory cookies třetích stran atd.

![Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### Obecná nastavení

Zde můžete nastavit jazyk a motiv (tmavý nebo světlý), povolit spouštění AdGuardu při startu systému a tiché automatické aktualizace, vybrat aktualizační kanál a interval kontroly aktualizací filtrů. Also Settings is the place to go if AdGuard for Windows is not working properly and the support team asked you to [collect _Debug logs_](/adguard-for-windows/solving-problems/adguard-logs.md).

![Advanced Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

Úplně dole na obrazovce najdete _Pokročilá nastavení_. Bezmyšlenkovitá změna některých z nich může potenciálně způsobit problémy s výkonem AdGuardu, přerušit internetové připojení nebo ohrozit vaši bezpečnost a soukromí. Tuto část byste měli otevřít pouze v případě, že jste si jisti tím, co děláte, nebo pokud se vás na to zeptal náš tým podpory. Pokud chcete vědět, co lze nastavit v _Pokročilém nastavení_, přečtěte si [specializovaný článek](/adguard-for-windows/solving-problems/low-level-settings.md).

### Blokátor reklam

Jedná se o hlavní modul AdGuardu pro Windows, který odstraňuje reklamy z navštívených webových stránek a aplikací nainstalovaných v zařízení. K filtrování reklam a obsahu ohrožujícího soukromí, jako jsou bannery, vyskakovací okna nebo slídiče, používá AdGuard různé filtry: skupiny pravidel s podobným účelem zapsané pomocí [speciální syntaxe](/general/ad-filtering/create-own-filters). Chcete-li pochopit, co jsou to filtry a jak fungují, přečtěte si [tento článek](/general/ad-filtering/how-ad-blocking-works).

![Ad Blocker \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

V modulu Blokátor reklam můžete:

- povolit automatickou aktivaci jazykově specifických filtrů,
- deaktivovat blokování [reklam ve vyhledávání a vlastní propagaci](/general/ad-filtering/search-ads),
- disable ads in the Start menu on Windows 11,
- aktivovat předinstalované filtry, jako je _AdGuard Base filtr_,
- instalovat filtry ze seznamu nebo přidat vlastní filtr kliknutím na tlačítko _Přidat filtr_,
- provádět změny ve stávajících skupinách pravidel pomocí tlačítka _Editor filtrů_,
- zobrazit všechny požadavky odeslané prohlížeči a aplikacemi nainstalovanými v počítači kliknutím na tlačítko _Záznam filtrování_. Zde můžete také zablokovat nebo odblokovat jakýkoli požadavek vytvořením vlastního pravidla,
- vytvořit filtr z vlastních pravidel napsaných ručně, importovaných nebo vytvořených pomocí rozšíření AdGuard Assistant.

Než začnete ručně psát vlastní pravidla, přečtěte si našeho podrobného [průvodce syntaxí](/general/ad-filtering/create-own-filters).

### Režim utajení

Mnoho webových stránek shromažďuje informace o svých návštěvnících, například jejich IP adresy, informace o nainstalovaném prohlížeči a operačním systému, rozlišení obrazovky, a dokonce i o tom, na jakou stránku uživatel přišel nebo z jaké stránky byl přesměrován. Některé webové stránky používají soubory cookies k označení prohlížeče a uložení vašich osobních nastavení, uživatelských preferencí nebo k vašemu "rozpoznání" při příští návštěvě. Režim utajení chrání vaše osobní údaje před takovými systémy sběru dat a statistik.

![Stealth Mode \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Práci v Režimu utajení můžete flexibilně nastavit: můžete například zakázat, aby webová stránka obdržela požadavek na vyhledávání, který jste použili k jejímu nalezení na internetu, automaticky vymazat soubory cookies třetích stran i vlastní soubory cookies webové stránky a zakázat sdílení polohy ve vašem prohlížeči, které lze použít ke sledování vaší polohy.

Chcete-li se dozvědět vše o Režimu utajení a jeho mnoha možnostech, přečtěte si [tento článek](/general/stealth-mode).

### Bezpečné prohlížení

Bezpečné prohlížení poskytuje silnou ochranu před škodlivými stránkami a krádeží identtity. Ne, AdGuard pro Windows není antivir. Nezastaví stahování viru, pokud již bylo zahájeno, ani neodstraní již existující viry. Upozorní vás však, pokud se chystáte přejít na webovou stránku, jejíž doména byla přidána do naší databáze "nedůvěryhodných stránek", nebo stáhnout soubor z takové webové stránky. Více informací o fungování tohoto modulu najdete ve [vyhrazeném článku](/general/browsing-security).

V tomto modulu můžete

- povolit oznámení pro blokování požadavků na nebezpečné stránky,
- aktivovat zvukové oznámení,
- souhlasit s odesláním anonymních informací na server AdGuardu souvisejících se zabezpečením, které nám pomohou udržovat databázi nebezpečných webů aktuální.

![Browsing security \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

Pokud se chcete dozvědět více o Bezpečném prohlížení, přečtěte si [tento článek](/general/browsing-security).

### DNS ochrana

Existují tři důležité důvody, proč byste měli prozkoumat nastavení DNS ochrany. Zaprvé, abyste se vyhnuli sledování ISP. Pokaždé, když otevřete webovou stránku, například `google.com`, váš prohlížeč odešle požadavek na DNS server, aby na oplátku získal IP adresu webové stránky. DNS server obvykle patří vašemu poskytovateli internetových služeb, který tak může sledovat vaši online aktivitu. Za druhé, šifrování DNS provozu. A třetí je [blokovat obsah na úrovni DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

V modulu DNS ochrany AdGuardu pro Windows můžete vybrat DNS servery od známých poskytovatelů DNS, včetně [AdGuard DNS](https://adguard-dns.io/kb/), který blokuje reklamy a slídiče, AdGuard DNS Ochrana rodiny, který navíc blokuje obsah pro dospělé, nebo AdGuard DNS - bez filtrování, který poskytuje bezpečné a spolehlivé připojení, ale nic nefiltruje. Můžete dokonce přidat vlastní DNS servery. K dispozici je také možnost přidat vlastní pravidla pomocí [syntaxe DNS pravidel](https://adguard-dns.io/kb/general/dns-filtering-syntax/). A pokud je to nutné, můžete přidat [DNS filtry dle vlastního výběru](https://filterlists.com).

### Rodičovská ochrana

Existuje několik webových stránek, ke kterým by měl být omezen přístup z PC používaného dětmi. Tento úkol zajišťuje Rodičovská ochrana.

![Parental Control \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

Modul kontroluje obsah webových stránek otevřených v prohlížeči a filtruje ty, jejichž obsah je pro děti nežádoucí: obrázky a texty pro dospělé, hrubý jazyk, násilí, propagace drog atd. Nastavení Rodičovské ochrany jsou zabezpečena heslem, takže dítě nemůže obejít omezení. Tento modul nejenže blokuje vstup na nežádoucí stránky, ale také dokáže z výsledků vyhledávání odstranit odkazy, které jsou nevhodné pro děti.

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. Můžete také zaškrtnout políčko _Blokovat stahování spustitelných souborů_ a zabránit tak vašemu dítěti ve stahování a instalaci softwaru do PC. V modulu _Rodičovská ochrana_ jsou další dvě možnosti: můžete vybrat konkrétního uživatele Windows, který má být chráněn _Rodičovskou ochranou_ a nastavit heslo pro zabezpečení nastavení AdGuardu před změnami.

![Parental Control \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Asistent prohlížeče

![Browser Assistant \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

Z této záložky můžete snadno přejít k instalaci Asistenta prohlížeče AdGuard, jehož primární funkcí je správa filtrování přímo z prohlížeče. Více informací o tom, jak s ním pracovat a co dělat, pokud pro váš prohlížeč není k dispozici asistent prohlížeče, jsme uvedli v [samostatném článku](/adguard-for-windows/browser-assistant.md).
