---
title: Režim utajení
sidebar_position: 4
---

Mnoho webových stránek shromažďuje informace o svých návštěvnících, například jejich IP adresu, nainstalovaný prohlížeč a operační systém, rozlišení obrazovky a dokonce i stránku, ze které byl návštěvník přesměrován. Některé webové stránky používají soubory cookies k označení prohlížeče a uložení vašich osobních nastavení, uživatelských preferencí nebo k vašemu "rozpoznání" při příští návštěvě. Režim utajení chrání vaše osobní údaje před takovými systémy sběru dat a statistik.

Práci Režimu utajení můžete flexibilně upravit: můžete například zakázat webové stránce přijímat požadavky na vyhledávání, které jste použili k jejímu nalezení na internetu, automaticky odstranit soubory cookies třetích stran i vlastní soubory cookies webové stránky, vypnout sdílení zeměpisné polohy prohlížeče, které lze použít ke sledování vaší polohy a skrýt svou skutečnou IP adresu nebo ji dokonce nahradit libovolnou adresou.

Níže uvádíme a popisujeme hlavní funkce a možnosti, které můžete ovládat v nastavení **Režimu utajení**. Jsou rozděleny do čtyř skupin: **Obecné**, **Metody sledování**, **Rozhraní API prohlížeče** a **Různé**.

:::note

Některé možnosti nemusí být v závislosti na konkrétním produktu dostupné kvůli omezením operačního systému nebo jiným omezením.

:::

## Obecné {#general}

### Skrýt vyhledávací dotazy {#searchqueries}

Když jste přesměrováni na webovou stránku z vyhledávače Google, Yahoo nebo jiného vyhledávače, tato možnost skryje vyhledávací dotaz, který jste použili k nalezení dané webové stránky.

### Požádat webové stránky, aby vás nesledovaly {#donottrack}

Odesílá webovým stránkám, které jste navštívili signály [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) a [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track).

### Odebrat sledovací parametry z URL

Pokud tuto možnost povolíte, AdGuard odstraní z adres URL parametry sledování, jako je `utm_*` a `fb_ref`.

### Metody sledování {#tracking-methods}

### Automatické odstranění cookies třetích stran {#3p-cookie}

Webové stránky používají soubory cookies k ukládání vašich informací a preferencí, jako je zvolený jazyk, vaše poloha nebo seznam položek v nákupním košíku. Když se vrátíte na webovou stránku, váš prohlížeč odešle zpět soubory cookies patřící dané webové stránce, což mu umožní "zapamatovat si" vaše údaje.

Soubory cookies třetích stran jsou ty, které jsou implementovány jinou webovou stránkou než tou, kterou právě prohlížíte. Například web cnn.com může mít na své domovské stránce widget "To se mi líbí" od Facebooku. Tento widget implementuje soubory cookies, které mmohou být později přečteny společností Facebook. Někteří inzerenti používají tyto soubory cookies ke sledování toho, jaké další stránky navštěvujete a kde jsou umístěny jejich reklamy.

Nastavte dobu (v minutách), po jejímž uplynutí budou všechny soubory cookies třetích stran zničeny. Pro úplné zablokování nastavte časovač na 0.

:::caution

Toto nastavení odstraní všechny soubory cookies třetích stran, včetně informací o vašich přihlášeních prostřednictvím sociálních sítí nebo jiných služeb třetích stran. Možná se budete muset pravidelně znovu přihlašovat na některé webové stránky a čelit dalším problémům souvisejícím se soubory cookies. Chcete-li blokovat pouze sledovací soubory cookies, použijte filtr [*AdGuard ochrana sledování*](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Automatické odstranění cookies aktuální stránky {#1p-cookie}

Nastavte dobu (v minutách), po jejímž uplynutí budou všechny soubory vlastních cookies zničeny. Pro úplné zablokování nastavte časovač na 0.

:::caution

Tuto možnost nedoporučujeme povolovat, protože může vážně narušit práci některých webů.

:::

### Zakázat mezipaměť požadavků třetích stran {#3p-cache}

Když prohlížeč osloví stránku, server jí přiřadí značku ETag. Značka ETag používá prohlížeč k ukládání obsahu stránky do mezipaměti. Při dalších požadavcích prohlížeč odešle ETag příslušnému serveru, čímž mu umožní zjistit identitu návštěvníka. Dokud jsou soubory webu uloženy v mezipaměti, je značka ETag odesílána pokaždé, když se váš prohlížeč obrátí na tento web. Pokud je na webu vložen obsah z jiného serveru (například obrázek nebo iframe), může tento server sledovat vaše aktivity bez vašeho vědomí.

### Blokovat autorizační hlavičku třetí strany {#3p-auth}

Hodnota "Autorizační" hlavičky je uložena v mezipaměti prohlížeče a poté je odesílána spolu s každým požadavkem na danou doménu. To znamená, že ji lze použít pro účely sledování stejně jako soubory cookies.

## API prohlížeče {#browser-api}

### Blokovat WebRTC {#webrtc}

WebRTC (Web Real-Time Communication) je technologie, která umožňuje přímé streamování dat mezi prohlížeči a aplikacemi. Umožňuje jiným uživatelům zjistit vaši skutečnou IP adresu, i když používáte proxy nebo VPN. Povolení této možnosti může narušit práci některých aplikací prohlížeče, například messengerů, chatů, kin nebo her.

### Blokovat Push API {#push}

Push API umožňuje serverům odesílat zprávy do webových aplikací bez ohledu na stav aktivity prohlížeče. Oznámení z různých webových stránek se tak mohou zobrazovat, i když je prohlížeč skrytý v liště nebo není spuštěný. Povolením této možnosti zcela zablokujete Push API prohlížeče.

### Blokovat lokalizační API {#location}

Povolením této možnosti zabráníte prohlížeči odesílat data GPS, která by mohla být použita k určení vaší polohy, úpravě výsledků vyhledávání nebo jinému ovlivnění vaší práce s webem.

### Blokovat Flash {#flash}

The Flash Player plugin has become increasingly vulnerable to such online threats as viruses and hackers; it may also significantly increase website load times. Zapnutím tohoto nastavení zablokuje AdGuard schopnost prohlížečů detekovat komponenty (například zásuvné moduly a objekty ActiveXObject), které umožňují zobrazování obsahu ve formátu Flash. To ve skutečnosti znamená, že prohlížeče nejsou schopny podporovat Flash.

### Blokovat Java {#java}

Některé webové stránky a webové služby stále používají starou technologii podpory pluginů Java. Java plugin API, které je základem Java pluginů, má závažné bezpečnostní chyby. Z bezpečnostních důvodů můžete tyto pluginy zakázat. Nicméně, i když se rozhodnete použít možnost Blokovat Java, JavaScript bude stále povolen.

## Různé {#miscellaneous}

### Skrýt třetím stranám referenční ID {#referer}

Referenční ID je hlavička HTTP používaná v požadavcích prohlížeče na server. Obsahuje adresu URL zdroje požadavku. Při přechodu z jedné stránky na druhou uloží referenční ID adresu URL původní stránky. Na serveru, který je hostitelem cílové webové stránky, je často instalován software, který analyzuje referenční ID a získává z něj různé informace. Povolením možnosti *Skrýt třetím stranám referenční ID* skryjete aktuální web před weby třetích stran změnou záhlaví HTTP.

Můžete také nastavit libovolnou hodnotu pro referenční ID zadáním do pole *Vlastní referenční ID*. Chcete-li použít výchozí referenční ID, ponechte pole prázdné.

Všimněte si, že aby bylo možné filtrovat provoz, aplikace AdGuard "zachycují" požadavky prohlížeče na server. Požadavky na reklamní, sledovací a phishingové servery mohou být před odesláním na server změněny nebo zcela zablokovány. Totéž platí pro možnost *Skrýt třetím stranám referenční ID*: AdGuard zachycuje požadavky HTTP(S) zejména za účelem odstranění nebo změny hlavičky referenčního ID, pokud je tato možnost povolena. K tomu však dochází až poté, co tyto požadavky "opustí" prohlížeč. To znamená, že pokud sledujete referenční ID v prohlížeči (například pomocí vývojářských nástrojů Chrome), uvidíte původní referenční ID, protože požadavek ještě nedorazil do AdGuardu. Můžete použít software jako [Fiddler](https://www.telerik.com/fiddler), abyste se ujistili, že referenční ID bude změněno správně.

On the other hand, due to the nature of all browser extensions, AdGuard Browser Extension works 'inside' the browser. Hned na místě změní referenční ID, takže nástroje pro vývojáře budou zobrazovat požadované referenční ID pro vaše požadavky.

### Skrýt User-Agent {#useragent}

Když navštívíte webovou stránku, váš prohlížeč odešle své informace na server. Vypadá jako textový řádek, který je součástí požadavku HTTP začínajícího slovy "User-Agent:". Obvykle obsahuje název a verzi prohlížeče, operační systém a nastavení jazyka. Omezili jsme User-Agent od identifikačních údajů, aby jej inzerenti nemohli získat.

Můžete také nastavit libovolnou hodnotu User-Agent zadáním do pole Vlastní User-Agent. Chcete-li použít User-Agent, ponechte pole prázdné.

### Skrýt IP adresu {#ip}

Režim utajení nemůže skrýt vaši IP adresu. Můžeme ji však skrýt, takže navštívené webové stránky si budou myslet, že jste proxy server. Někdy to pomůže a webové stránky vaši skutečnou IP adresu ignorují.

Můžete nastavit libovolnou IP adresu, kterou chcete, aby ostatní vnímali jako vaši, a to tak, že ji jednoduše zadáte do příslušného pole. Chcete-li použít výchozí IP adresu, ponechte pole prázdné.

### Odstranit záhlaví X-Client-Data z požadavků HTTP {#xclientdata}

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

### Ochrana před DPI {#dpi}

Deep Packet Inspection je systém hloubkové analýzy a filtrování provozu podle obsahu paketů a shromažďování statistických údajů. Pomocí této technologie mají poskytovatelé internetových služeb možnost kontrolovat procházející provoz a omezovat přístup k obsahu pro své klienty.

AdGuard může upravit odchozí data paketů tak, aby klient nespadal pod kritéria blokování DPI. To znamená, že zapnutím této možnosti mohou uživatelé získat přístup k požadovanému obsahu. V současné době nelze obejít všechny systémy DPI, ale neustále pracujeme na jejich vylepšení.

Funkce "Ochrana před DPI" je již implementována v aplikacích AdGuard pro Windows, AdGuard pro Mac a AdGuard pro Android.

:::caution

If this feature is enabled in AdGuard for Windows, it may interfere with ESET antivirus. Anti-DPI will prevent ESET from filtering traffic, leaving blacklisted and malicious websites unblocked.

:::
