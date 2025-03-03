---
title: Nastavení
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

_Nastavení_ je část, která vyžaduje největší pozornost. Zde můžete program nakonfigurovat tak, aby plně vyhovoval vašim požadavkům: blokujte pouze to, co vám vadí, používejte DNS server důvěryhodného poskytovatele, odstraňujte soubory cookies třetích stran atd.

![Settings \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

### Obecná nastavení

Zde můžete nastavit jazyk a motiv (tmavý nebo světlý), povolit spouštění AdGuardu při startu systému a tiché automatické aktualizace, vybrat aktualizační kanál a interval kontroly aktualizací filtrů. Pokud AdGuard pro Windows nefunguje správně a tým podpory vás požádal, abyste [shromáždili _Protokoly ladění_](/adguard-for-windows/solving-problems/adguard-logs.md), přejděte do Nastavení.

![Advanced Settings \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

Úplně dole na obrazovce najdete _Pokročilá nastavení_. Bezmyšlenkovitá změna některých z nich může potenciálně způsobit problémy s výkonem AdGuardu, přerušit internetové připojení nebo ohrozit vaši bezpečnost a soukromí. Tuto část byste měli otevřít pouze v případě, že jste si jisti tím, co děláte, nebo pokud se vás na to zeptal náš tým podpory. Pokud chcete vědět, co lze nastavit v _Pokročilém nastavení_, přečtěte si [specializovaný článek](/adguard-for-windows/solving-problems/low-level-settings.md).

### Blokátor reklam

Jedná se o hlavní modul AdGuardu pro Windows, který odstraňuje reklamy z navštívených webových stránek a aplikací nainstalovaných v zařízení. K filtrování reklam a obsahu ohrožujícího soukromí, jako jsou bannery, vyskakovací okna nebo slídiče, používá AdGuard různé filtry: skupiny pravidel s podobným účelem zapsané pomocí [speciální syntaxe](/general/ad-filtering/create-own-filters). Chcete-li pochopit, co jsou to filtry a jak fungují, přečtěte si [tento článek](/general/ad-filtering/how-ad-blocking-works).

![Ad Blocker \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings_ad_blocker.png)

V modulu Blokátor reklam můžete:

- povolit automatickou aktivaci jazykově specifických filtrů,
- deaktivovat blokování [reklam ve vyhledávání a vlastní propagaci](/general/ad-filtering/search-ads),
- zakázat reklamy v nabídce Start ve Windows 11,
- aktivovat předinstalované filtry, jako je _AdGuard Base filtr_,
- instalovat filtry ze seznamu nebo přidat vlastní filtr kliknutím na tlačítko _Přidat filtr_,
- provádět změny ve stávajících skupinách pravidel pomocí tlačítka _Editor filtrů_,
- zobrazit všechny požadavky odeslané prohlížeči a aplikacemi nainstalovanými v počítači kliknutím na tlačítko _Záznam filtrování_. Zde můžete také zablokovat nebo odblokovat jakýkoli požadavek vytvořením vlastního pravidla,
- vytvořit filtr z vlastních pravidel napsaných ručně, importovaných nebo vytvořených pomocí rozšíření AdGuard Assistant.

Než začnete ručně psát vlastní pravidla, přečtěte si našeho podrobného [průvodce syntaxí](/general/ad-filtering/create-own-filters).

### Režim utajení

Mnoho webových stránek shromažďuje informace o svých návštěvnících, například jejich IP adresy, informace o nainstalovaném prohlížeči a operačním systému, rozlišení obrazovky, a dokonce i o tom, na jakou stránku uživatel přišel nebo z jaké stránky byl přesměrován. Některé webové stránky používají soubory cookies k označení prohlížeče a uložení vašich osobních nastavení, uživatelských preferencí nebo k vašemu "rozpoznání" při příští návštěvě. Režim utajení chrání vaše osobní údaje před takovými systémy sběru dat a statistik.

![Stealth Mode \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Práci v Režimu utajení můžete flexibilně nastavit: můžete například zakázat, aby webová stránka obdržela požadavek na vyhledávání, který jste použili k jejímu nalezení na internetu, automaticky vymazat soubory cookies třetích stran i vlastní soubory cookies webové stránky a zakázat sdílení polohy ve vašem prohlížeči, které lze použít ke sledování vaší polohy.

Chcete-li se dozvědět vše o Režimu utajení a jeho mnoha možnostech, přečtěte si [tento článek](/general/stealth-mode).

### Bezpečné prohlížení

Bezpečné prohlížení poskytuje silnou ochranu před škodlivými stránkami a krádeží identtity. Ne, AdGuard pro Windows není antivir. Nezastaví stahování viru, pokud již bylo zahájeno, ani neodstraní již existující viry. Upozorní vás však, pokud se chystáte přejít na webovou stránku, jejíž doména byla přidána do naší databáze "nedůvěryhodných stránek", nebo stáhnout soubor z takové webové stránky. Více informací o fungování tohoto modulu najdete ve [vyhrazeném článku](/general/browsing-security).

V tomto modulu můžete

- povolit oznámení pro blokování požadavků na nebezpečné stránky,
- aktivovat zvukové oznámení,
- souhlasit s odesláním anonymních informací na server AdGuardu souvisejících se zabezpečením, které nám pomohou udržovat databázi nebezpečných webů aktuální.

![Browsing security \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

Pokud se chcete dozvědět více o Bezpečném prohlížení, přečtěte si [tento článek](/general/browsing-security).

### DNS ochrana

Existují tři důležité důvody, proč byste měli prozkoumat nastavení DNS ochrany. Zaprvé, abyste se vyhnuli sledování ISP. Pokaždé, když otevřete webovou stránku, například `google.com`, váš prohlížeč odešle požadavek na DNS server, aby na oplátku získal IP adresu webové stránky. DNS server obvykle patří vašemu poskytovateli internetových služeb, který tak může sledovat vaši online aktivitu. Za druhé, šifrování DNS provozu. A třetí je [blokovat obsah na úrovni DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

In the DNS protection module of AdGuard for Windows, you can choose DNS servers from known DNS providers, including AdGuard DNS, which blocks ads and trackers, AdGuard DNS Family Protection, which also blocks adult content, or AdGuard DNS Non-filtering, which provides a secure and reliable connection but doesn’t filter anything. You can even add custom DNS servers and rules using [DNS rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/). If necessary, you can add [DNS filters of your choice](https://filterlists.com).

Starting with v7.20, you can also add filters by simply selecting them from a list of pre-built, trusted filters. They are grouped into four categories for your convenience:

- **General**: block ads and trackers
- **Regional**: block ads and trackers on language-specific websites
- **Security**: block phishing and unreliable websites
- **Other**: cover special use cases that don’t fit into the above categories

![DNS filters \*border](https://cdn.adtidy.org/content/release_notes/ad_blocker/windows/v7.20/dns_filters/en.png)

### Parental Control

There are several websites to which access should be restricted from a PC used by children. This task is accomplished by Parental Control.

![Parental Control \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

The module checks the contents of web pages opened in the browser and filters those with content undesirable for children: images and texts for adults, crude language, violence, drug propaganda, etc. Parental Control settings are password-protected so that the child is not able to go round the restrictions. This module not only blocks directions to undesirable sites but can also delete the links that are inappropriate for children from the search results.

In the _Parental Control_ module you can enable the _Safe search_ and manage the _blocklist_ and the _allowlist_ to customize how this option works. You can also check the _Block executable files download_ box to prevent your child from downloading and installing software on the computer. There are two more options in the _Parental Control_ module: you can select a specific Windows user to be protected by _Parental Control_ and set a password to protect AdGuard settings from change.

![Parental Control \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Asistent prohlížeče

![Browser Assistant \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

From this tab you can easily proceed to install AdGuard Browser Assistant, which primary function is to manage filtering directly from the browser. We explained more about how to work with it and what to do if there is no Browser Assistant for your browser in the [separate article](/adguard-for-windows/browser-assistant.md).
