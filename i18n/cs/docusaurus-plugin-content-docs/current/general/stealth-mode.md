---
title: Ochrana před sledováním (dříve režim utajení)
sidebar_position: 4
---

Mnoho webových stránek shromažďuje informace o svých návštěvnících, například jejich IP adresu, nainstalovaný prohlížeč a operační systém, rozlišení obrazovky a dokonce i stránku, ze které byl návštěvník přesměrován. Některé webové stránky používají soubory cookies k označení prohlížeče a uložení vašich nastavení, uživatelských preferencí nebo k vašemu "rozpoznání" při příští návštěvě. **Ochrana před sledováním** chrání vaše osobní údaje před takovými systémy shromažďujícími data a statistiky.

Nastavení ochrany před sledováním můžete upravit podle potřeby. Můžete například zabránit tomu, aby webové stránky přijímaly dotazy vyhledávačů, které vás na ně přivedly. Soubory cookies třetích a vlastní můžete automaticky odstranit. Můžete také vypnout sdílení zeměpisné polohy prohlížeče, které lze použít ke sledování vaší polohy. Svou skutečnou IP adresu můžete skrýt nebo ji nahradit libovolnou.

Níže uvádíme a popisujeme hlavní funkce, které můžete ovládat v nastavení **Ochrany před sledováním**. Funkce jsou rozděleny do následujících oddílů: **Obecné**, **Metody sledování**, **Rozhraní API prohlížeče**, **Sledování systému Windows** a **Různé.**.

:::note

Některé možnosti nemusí být v závislosti na konkrétním produktu dostupné kvůli omezením operačního systému nebo jiným omezením.

:::

## Obecné {#general}

### Blokovat slídiče {#blocktrackers}

Tato funkce blokuje slídiče a webové analýzy pomocí filtru AdGuard ochrana před sledováním.

### Odebrat sledovací parametry z URL {#removetracking}

Pokud tuto funkci povolíte, AdGuard pomocí svého filtru sledování URL odstraní z adres URL stránek sledovací parametry jako `utm_*` a `fb_ref`.

### Skrýt vyhledávací dotazy {#searchqueries}

Tato funkce skrývá váš vyhledávací dotazy z webových stránek, které navštívíte prostřednictvím výsledků vyhledávání. Když například otevřete webovou stránku prostřednictvím vyhledávače, jako je Google nebo Yahoo, tato funkce skryje vyhledávací dotaz, který jste použili k nalezení dané webové stránky.

### Požádat webové stránky, aby mě nesledovaly {#donottrack}

Odesílá webovým stránkám, které jste navštívili signály [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) a [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track).

### Další filtry soukromí {#otherprivacyfilters}

Tato funkce zobrazuje ostatní filtry soukromí povolené v části **Filtry**.

:::note

K dispozici v aplikacích AdGuard pro Android a AdGuard pro Windows.

:::

## Metody sledování {#tracking-methods}

### Smazat cookies třetích stran {#3p-cookie}

Tato funkce zabraňuje inzerentům sledovat vaše chování na více stránkách tím, že omezuje životnost souborů cookies třetích stran.

Webové stránky používají soubory cookies k ukládání vašich informací a preferencí, jako je zvolený jazyk, vaše poloha nebo seznam položek v nákupním košíku. Pro úplné zablokování nastavte časovač na 0.

Soubory cookies třetích stran implementuje jiná webová stránka než ta, kterou právě prohlížíte. Například web cnn.com může mít na své domovské stránce widget “Like” od Facebooku. Tento widget instaluje soubor cookies, které může Facebook později přečíst. Někteří inzerenti používají tyto soubory cookies ke sledování toho, jaké další webové stránky s jejich reklamami navštěvujete.

Nastavte dobu (v minutách), po které budou všechny soubory cookies třetích stran odstraněny. Chcete-li tyto soubory cookies zablokovat, nastavte jejich životnost na 0.

:::caution

Toto nastavení odstraní všechny soubory cookies třetích stran, včetně informací o vašich přihlášeních prostřednictvím sociálních sítí nebo jiných služeb třetích stran. Možná se budete muset pravidelně znovu přihlašovat na některé webové stránky a čelit dalším problémům souvisejícím se soubory cookies. Chcete-li blokovat pouze sledovací soubory cookies, použijte filtr [*AdGuard ochrana před sledováním*](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

:::note

K dispozici v AdGuard pro Android, AdGuard pro Windows, AdGuard pro Mac a Rozšíření prohlížeče AdGuard (prohlížeče založené na MV2).

:::

### Smazat vlastní cookies (není doporučeno) {#1p-cookie}

Tato funkce zabraňuje webovým stránkám zapamatovat si vaše údaje, například přihlašovací údaje a jazykové preference, tím, že omezuje životnost vlastních souborů cookies.

Nastavte dobu (v minutách), po které budou všechny soubory cookies odstraněny. Chcete-li tyto soubory cookies zablokovat, nastavte jejich životnost na 0.

:::caution

Tuto možnost nedoporučujeme povolovat, protože může vážně narušit práci některých webů. Pokud tyto soubory cookies zablokujete, některé webové stránky se mohou rozhodit nebo přestat fungovat.

:::

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

K dispozici v AdGuard pro Android, AdGuard pro Windows, AdGuard pro Mac a Rozšíření prohlížeče AdGuard (prohlížeče založené na MV2).

:::

### Blokovat záhlaví ETag a If-None-Match {#3p-cache}

Tato funkce odstraňuje hlavičky ETag a If-None-Match z požadavků a odpovědí, aby se zabránilo jejich sledování.

Když prohlížeč osloví stránku, server jí přiřadí značku ETag. Tato značka ETag používá prohlížeč k ukládání obsahu stránky do mezipaměti. Při dalších požadavcích prohlížeč odešle ETag příslušnému serveru, čímž mu umožní zjistit identitu návštěvníka. Dokud jsou soubory webu uloženy v mezipaměti, je značka ETag odesílána pokaždé, když se váš prohlížeč obrátí na tento web. Pokud je na webu vložen obsah z jiného serveru (například obrázek nebo iframe), může tento server sledovat vaše aktivity bez vašeho vědomí.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

K dispozici v AdGuard pro Android, AdGuard pro Windows a AdGuard pro Mac.

:::

### Blokovat autorizační hlavičku třetí strany {#3p-auth}

Tato funkce zakáže autorizační data uložená v mezipaměti, která lze použít pro účely sledování. Může narušovat funkčnost některých rozšíření prohlížeče a webových stránek.

Hodnota “Autorizační“ hlavičky je uložena v mezipaměti prohlížeče a poté je odesílána spolu s každým požadavkem na danou doménu. To znamená, že ji lze použít pro účely sledování stejně jako soubory cookies.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

K dispozici v AdGuard pro Android, AdGuard pro Windows a AdGuard pro Mac.

:::

## API prohlížeče {#browser-api}

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Pro rozšíření prohlížeče AdGuard je k dispozici pouze funkce **Blokovat WebRTC**. Najdete ji v sekci **Různé.**.

:::

### Blokovat WebRTC {#webrtc}

Tato funkce blokuje WebRTC, známou zranitelnost, která může prozradit vaši skutečnou IP adresu, i když používáte proxy server nebo VPN.

WebRTC (Web Real-Time Communication) je technologie, která umožňuje přímé streamování dat mezi prohlížeči a aplikacemi. Umožňuje však jiným uživatelům zjistit vaši skutečnou IP adresu, i když používáte proxy nebo VPN.

:::caution

Povolení této možnosti může narušit práci některých aplikací prohlížeče, například messengerů, streamovacích platforem, chatů nebo her.

:::

### Blokovat Push API {#push}

Tato funkce blokuje vyskakovací oznámení z webových stránek.

Push API umožňuje serverům odesílat zprávy do webových aplikací bez ohledu na stav aktivity prohlížeče. To znamená, že můžete zobrazovat oznámení z různých webových stránek, i když je prohlížeč minimalizovaný nebo zavřený. Povolením této možnosti zcela zablokujete Push API prohlížeče.

### Blokovat lokalizační API {#location}

Tato funkce zabraňuje webům zjišťovat vaši polohu.

Povolením této možnosti zabráníte prohlížeči odesílat data GPS, která by mohla být použita k určení vaší polohy, úpravě výsledků vyhledávání nebo jinému ovlivnění vaší práce s webem.

### Blokovat Flash {#flash}

Tato funkce zvyšuje ochranu a zrychluje načítání webových stránek zablokováním podpory Flash Player v prohlížečích.

Zásuvný modul Flash Player je stále zranitelnější vůči online hrozbám, jako jsou viry a hackeři, a může také výrazně prodloužit dobu načítání webových stránek. Zapnutím tohoto nastavení zablokuje AdGuard schopnost prohlížečů detekovat komponenty (například zásuvné moduly a objekty ActiveXObject), které umožňují zobrazování obsahu ve formátu Flash. To ve skutečnosti znamená, že prohlížeče nejsou schopny podporovat Flash.

### Blokovat Java {#java}

Tato funkce zakazuje zásuvné moduly Java na webových stránkách a ve webových službách, protože rozhraní API má závažné bezpečnostní problémy. Nezakazuje JavaScript.

Některé webové stránky a webové služby stále používají starou technologii podpory pluginů Java. Java plugin API, které je základem Java pluginů, má závažné bezpečnostní chyby. Z bezpečnostních důvodů můžete tyto pluginy zakázat. Nicméně, i když se rozhodnete použít možnost “Blokovat Java“, JavaScript bude stále povolen.

## Sledování systému Windows {#windowstracking}

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

Tyto funkce jsou dostupné pouze v AdGuard pro Windows.

:::

### Zakázat telemetrii systému Windows {#windowstelemetry}

Tato funkce zakáže odesílání technických údajů o používání systému a aplikací.

### Zakázat Windows Recall {#windowsrecall}

Tato funkce zabraňuje systému Windows pořizovat a analyzovat snímky obrazovky vaší činnosti na ploše.

### Vypnout reklamní ID {#advertisingid}

Tato funkce zakáže reklamní ID pro blokování sledování používání aplikace.

### Zakázat automatické hlášení Microsoft Defender {#windowsautoreport}

Tato funkce blokuje automatické hlášení a odběr vzorků podezřelého malwaru.

### Zakázat službu směrování zpráv WAP Push {#wappushrouting}

Tato funkce zakáže sběr dat o problémech s komponentami systému Windows.

## Různé {#miscellaneous}

### Skrýt třetím stranám referenční ID {#referer}

Tato funkce zabraňuje třetím stranám rozpoznat, které weby jste navštívili.

Referenční ID je hlavička HTTP používaná v požadavcích prohlížeče na server. Obsahuje adresu URL zdroje požadavku. Při přechodu z jedné stránky na druhou uloží referenční ID adresu URL původní stránky. Na serveru, který je hostitelem cílové webové stránky, je často instalován software, který analyzuje referenční ID a získává z něj různé informace. Povolením nastavení *Skrýt třetím stranám referenční ID* skryjete aktuální web před weby třetích stran změnou záhlaví HTTP.

Můžete také nastavit libovolnou hodnotu pro referenční ID zadáním do pole *Vlastní referenční ID*. Chcete-li použít výchozí referenční ID, ponechte pole prázdné.

Všimněte si, že aby bylo možné filtrovat provoz, aplikace AdGuard 'zachycují' požadavky prohlížeče na server. Požadavky na reklamní, sledovací a phishingové servery mohou být před odesláním na server změněny nebo zcela zablokovány. Totéž platí pro možnost *Skrýt třetím stranám referenční ID*: AdGuard zachycuje požadavky HTTP(S) zejména za účelem odstranění nebo změny hlavičky referenčního ID, pokud je tato možnost povolena. K tomu však dochází až poté, co tyto požadavky “opustí“ prohlížeč. To znamená, že pokud sledujete referenční ID v prohlížeči (například pomocí vývojářských nástrojů Chrome), uvidíte původní referenční ID, protože požadavek ještě nedorazil do AdGuardu. Můžete použít software jako [Fiddler](https://www.telerik.com/fiddler), abyste se ujistili, že referenční ID bude změněno správně.

Vzhledem k povaze všech rozšíření webového prohlížeče funguje rozšíření AdGuard Browser Extension 'uvnitř' webového prohlížeče. Hned na místě změní referenční ID, takže nástroje pro vývojáře budou zobrazovat požadované referenční ID pro vaše požadavky.

### Skrýt User-Agent {#useragent}

Tato funkce odstraňuje informace z hlavičky identifikátoru prohlížeče.

Když navštívíte webovou stránku, váš prohlížeč odešle své informace na server. Vypadá jako textový řádek, který je součástí požadavku HTTP začínajícího slovy “User-Agent:”. Obvykle obsahuje název a verzi prohlížeče, operační systém a nastavení jazyka. Omezili jsme User-Agent od identifikačních údajů, aby jej inzerenti nemohli získat.

Můžete také nastavit libovolnou hodnotu User-Agent zadáním do pole Vlastní User-Agent. Chcete-li použít User-Agent, ponechte pole prázdné.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

K dispozici v AdGuard pro Android, AdGuard pro Windows a AdGuard pro Mac.

:::

### Maskovat IP adresu {#ip}

Tato funkce oklame webové stránky, aby uvěřily, že používáte proxy s níže uvedenou IP adresou.

Ochrana před sledováním nemůže skrýt vaši IP adresu. Můžeme ji však skrýt, takže navštívené webové stránky si budou myslet, že jste proxy server. Někdy to pomůže a webové stránky vaši skutečnou IP adresu ignorují.

Můžete nastavit libovolnou IP adresu, kterou chcete, aby ostatní vnímali jako vaši, a to tak, že ji jednoduše zadáte do příslušného pole. Chcete-li použít výchozí IP adresu, ponechte pole prázdné.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

K dispozici v AdGuard pro Android, AdGuard pro Windows a AdGuard pro Mac.

:::

### Odstranit X-Client-Data hlavičku {#xclientdata}

Tato funkce zabraňuje tomu, aby prohlížeč Google Chrome odesílal informace o své verzi a úpravách do domén společnosti Google (včetně služeb DoubleClick a Google Analytics).

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

K dispozici v AdGuard pro Android, AdGuard pro Windows, AdGuard pro Mac a Rozšíření prohlížeče AdGuard (prohlížeče založené na Chromium).

:::

### Ochrana proti DPI {#dpi}

Tato funkce upravuje odchozí přenosy tak, aby systémy hloubkové kontroly paketů poskytovatele internetu nemohly odhalit navštívené webové stránky. Nelze zaručit úplnou ochranu proti všem systémům DPI.

Deep Packet Inspection je systém hloubkové analýzy a filtrování provozu podle obsahu paketů a shromažďování statistických údajů. Pomocí této technologie mají poskytovatelé internetových služeb možnost kontrolovat procházející provoz a omezovat přístup k obsahu pro své klienty.

AdGuard může upravit odchozí data paketů tak, aby klient nespadal pod kritéria blokování DPI. To znamená, že zapnutím této možnosti mohou uživatelé získat přístup k požadovanému obsahu. V současné době nelze obejít všechny systémy DPI, ale neustále pracujeme na jejich vylepšení.

Zakazuje prohlížeči Google Chrome odesílat informace o verzi a modifikaci s požadavky na domény Google (včetně DoubleClick a Google Analytics).

K dispozici v AdGuard pro Android, AdGuard pro Windows a AdGuard pro Mac.

:::

:::caution

Pokud je tato funkce v AdGuardu pro Windows povolena, může docházet k interferenci s antivirem ESET. Anti-DPI zabrání ESETu filtrovat provoz, takže černá listina a škodlivé webové stránky zůstanou odblokované.

:::
