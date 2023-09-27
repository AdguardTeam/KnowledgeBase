---
title: Přehled funkcí
sidebar_position: 1
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

::::::note Odmítnutí odpovědnosti

AdGuard pro Android nelze zaměňovat s Blokátorem obsahu AdGuard. Blokátor obsahu AdGuard je aplikace dostupná v Google Play, která má omezené funkce, aby splňovala stanovy obchodu. AdGuard pro Android je naopak výkonná aplikace pro blokování reklam, správu aplikací a další funkce, které jsou popsány v tomto článku. AdGuard pro Android můžete stáhnout [webových stránek AdGuardu](https://adguard.com/adguard-android/overview.html).

:::

## Ochrana

Tato obrazovka kombinuje všechny funkce AdGuard ochrany:

- Blokování reklam
- Ochrana před sledováním
- Blokování obtěžování
- DNS ochrana
- Firewall
- Bezpečné prohlížení
- Integrace s AdGuard VPN

Více informací o jednotlivých funkcích najdete níže.

### Blokování reklam

Funkce blokuje reklamy pomocí blokování reklam a jazykově specifických filtrů. Chcete-li se dozvědět více o mechanismu blokování reklam, můžete si přečíst [vyhrazený článek](/general/ad-filtering/how-ad-blocking-works).

Základní ochrana účinně blokuje reklamy na většině webových stránek. Chcete-li lépe přizpůsobit blokování reklam, můžete:

- Povolit jazykově specifické filtry — obsahují pravidla filtrování pro blokování reklam na webových stránkách v konkrétních jazycích

- Přidejte webové stránky na seznam povolených – tyto weby nebudou AdGuardem filtrovány

- Vytvářet uživatelská pravidla – AdGuard je použije na konkrétních webových stránkách. [Naučte se vytvářet vlastní uživatelská pravidla](/general/ad-filtering/create-own-filters)

![Ad blocking *mobile_border](https://cdn.adtidy.org/blog/new/o44x5ad_blocking.png)

### Ochrana před sledováním

*Ochrana před sledováním* (dříve *Režim utajení*) zabraňuje webovým stránkám shromažďovat informace o vás, jako jsou vaše IP adresy, informace o vašem prohlížeči a operačním systému, rozlišení obrazovky a stránce, na kterou jste přišli nebo ze které jste byli přesměrováni. Může také blokovat soubory cookies, které webové stránky používají k označení prohlížeče a uložení vašich osobních nastavení, uživatelských preferencí nebo k rozpoznání při další návštěvě.

![Tracking protection *mobile_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

K dispozici jsou tři předkonfigurované úrovně ochrany. Zde jsou uvedeny funkce, které jsou v nich povoleny:

 1. **Standardní**

    a. *Blokování slídičů*. Toto nastavení chrání před online čítači a nástroji webové analýzy pomocí AdGuard filtru ochrany sledování

    b. *Požádat webové stránky, aby vás nesledovaly*. Toto nastavení odesílá požadavky [Global Privacy Control](https://globalprivacycontrol.org/) a [Do-Not-Track](https://en.wikipedia.org/wiki/Do_Not_Track) na navštívené webové stránky a žádá webové aplikace, aby zakázaly sledování vaší aktivity

    c. *Odstranit X-Client-Data hlavičku*. Toto nastavení brání prohlížeči Google Chrome odesílat informace o verzi a úpravách do domén Google (včetně DoubleClick a Google Analytics)

 2. **Vysoká**

    a. *Blokování slídičů*

    b. *Odebrat sledovací parametry z URL*. Toto nastavení odebere parametry sledování, jako je `utm_*` a `fb_ref` z adres URL pomocí AdGuard filtru sledování URL

    c. *Skrýt vyhledávací dotazy*

    d. *Požádat webové stránky, aby vás nesledovaly*

    e. *Automatické odstranění cookies třetích stran*. Toto nastavení omezuje životnost TTL cookie třetích stran na 180 minut

    :::caution

    Toto nastavení odstraní všechny soubory cookies třetích stran, včetně informací o vašich přihlášeních prostřednictvím sociálních sítí nebo jiných služeb třetích stran. Možná se budete muset pravidelně znovu přihlašovat na některé webové stránky a čelit dalším problémům souvisejícím se soubory cookies. Chcete-li blokovat pouze sledovací soubory cookies, použijte úroveň ochrany *Standardní*.


:::

    f. *Odstranit X-Client-Data hlavičku*

 3. **Maximální**

    a. *Blokování slídičů*

    b. *Odebrat sledovací parametry z URL*

    c. *Skrýt vyhledávací dotazy*

    d. *Požádat webové stránky, aby vás nesledovaly*

    e. *Automatické odstranění cookies třetích stran*

    f. *Blokovat WebRTC*. Tento způsob nastavení blokuje WebRTC, technologii, která umožňuje přímé streamování dat mezi prohlížeči a aplikacemi a která může umožnit ostatním zjistit vaši skutečnou IP adresu, i když používáte proxy nebo VPN

    g. *Blokovat Push API*. Tato funkce brání webovým stránkám v odesílání oznámení, bez ohledu na stav aktivity vašeho prohlížeče

    h. *Blokovat Location API*. Toto nastavení zabrání prohlížečům v detekci vašich dat GPS

    i. *Skrýt třetím stranám Referrer ID*. Toto nastavení skrývá záhlaví HTTP, které obsahuje URL adresu úvodní stránky a změní ji na výchozí nebo specifikovanou. V příslušném poli je možné nastavit vlastní Referrer ID

    j. *Skrýt identifikaci Vašeho prohlížeče*. Toto nastavení odstraňuje identifikační informace ze záhlaví identifikátora prohlížeče, které obvykle obsahuje název a verzi prohlížeče, operačního systému a nastavení jazyka

    k. *Odstranit X-Client-Data hlavičku*

Ochranu před sledování můžete jemně doladit výběrem úrovně ochrany *Vlastní*. [Více informací o dalších nastaveních ochrany před sledováním](/general/stealth-mode)

### Blokování obtěžování

Tato funkce je založena na AdGuard filtrech obtěžování a umožňuje blokovat vyskakovací okna, okna online asistentů, oznámení o souborech cookies, výzvy ke stažení mobilních aplikací a podobné obtěžující prvky. [Více informací o filtrech obtěžování](/general/ad-filtering/adguard-filters/#adguard-filters)

![Annoyance blocking *mobile_border](https://cdn.adtidy.org/blog/new/lwujvannoyance.png)

### DNS ochrana

*DNS ochrana* umožňuje filtrovat DNS požadavky pomocí vybraného DNS serveru, DNS filtrů a uživatelských pravidel:

- Některé DNS servery mají seznamy blokování, které pomáhají blokovat DNS požadavky na potenciálně škodlivé domény

- Kromě DNS serverů může AdGuard filtrovat DNS požadavky sám pomocí speciálního DNS filtru. Obsahuje velký seznam reklamních a sledovacích domén — požadavky na ně jsou přesměrovány do "černé díry" serveru

- Domény můžete také blokovat a odblokovat vytvořením uživatelských pravidel. Možná si budete muset přečíst náš článek o [syntaxi pravidel DNS filtrování](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![DNS protection *mobile_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS server

V této části můžete vybrat DNS server pro řešení DNS požadavků, blokování reklam a slídičů a šifrování DNS přenosů. Klepnutím na server si přečtěte jeho celý popis a vyberte protokol. Pokud jste požadovaný server nenašli, můžete jej přidat ručně:

- Klikněte na *Přidat DNS server* a zadejte adresu serveru (nebo adresy)

- Případně můžete vybrat DNS server ze seznamu [známých poskytovatelů DNS](https://adguard-dns.io/kb/general/dns-providers/) a kliknout na *Přidat do AdGuardu* vedle něj

- Pokud používáte soukromý server AdGuard DNS, můžete jej přidat do AdGuardu z [ovládacího panelu](https://adguard-dns.io/dashboard/)

 Ve výchozím nastavení je vybrán *Automatický DNS*. Nastaví DNS server na základě AdGuardu a nastavení zařízení. Pokud máte povolenou integraci s AdGuard VPN nebo jiným proxy serverem SOCKS5, připojí se k *AdGuard DNS bez filtrování* nebo k jinému serveru, který zadáte. Ve všech ostatních případech se připojuje k DNS serveru vybranému v nastavení zařízení.

#### DNS filtry

Tato část umožňuje přidávat vlastní DNS filtry a pravidla DNS filtrování. Další filtry najdete na [filterlists.com](https://filterlists.com/).

### Firewall

Tato funkce pomáhá spravovat přístup k internetu pro konkrétní aplikace nainstalované v zařízení a pro zařízení obecně.

![Firewall *mobile_border](https://cdn.adtidy.org/blog/new/gdn94firewall.png)

#### Globální pravidla brány firewall

Tato část umožňuje řídit přístup k internetu pro celé zařízení.

![Global firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png)

Tato pravidla platí pro všechny aplikace v zařízení, pokud jste pro ně nenastavili vlastní pravidla.

#### Vlastní pravidla brány firewall

V této části můžete řídit přístup k internetu pro konkrétní aplikace — blokovat ty, které nepovažujete za důvěryhodné, nebo naopak odblokovat ty, které chcete používat navzdory globálním pravidlům brány firewall.

1. Otevřete *Vlastní pravidla brány firewall*. V části *Aplikace s vlastními pravidly* klepněte na *Přidat aplikaci*.

    ![Custom firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png)

1. Vyberte aplikaci, pro kterou chcete nastavit jednotlivá pravidla.

    ![Adding an app to Custom firewall rules *mobile_border](https://cdn.adtidy.org/blog/new/2db47fadding_app.png)

1. V části *Dostupná vlastní pravidla* vyberte ta, která chcete nakonfigurovat a klepněte na ikonu "+". Pravidla se nyní objeví části *Použitá vlastní pravidla*.

    ![Added rule *mobile_border](https://cdn.adtidy.org/blog/new/6fzjladded_rule.png)

1. Pokud potřebujete zablokovat určitý typ připojení, přepněte přepínač doleva. Pokud to chcete povolit, ponechte přepínač zapnutý. Vlastní pravidla jsou nadřazena globálním pravidlům: jakékoli změny provedené v části *Globální pravidla brány firewall* nebudou mít na tuto aplikaci vliv.

Chcete-li odstranit pravidlo nebo aplikaci v části *Vlastní pravidla*, přejeďte prstem doleva.

### Rychlé akce

*Rychlé akce* jsou založeny na požadavcích z *Nedávné aktivity* (které lze nalézt v části *Statistiky*). Tato část zobrazuje, které aplikace se nedávno připojily k internetu.

![Quick actions *mobile_border](https://cdn.adtidy.org/blog/new/yigrfquick_actions.png)

Pokud uvidíte aplikaci, která by vůbec neměla používat internet, nebo aplikaci, kterou jste v poslední době nepoužívali, můžete její přístup zablokovat.

### Bezpečné prohlížení

Bezpečné prohlížení AdGuard vás chrání před návštěvou těchto nebezpečných stránek. Také vás upozorní na potenciální škodlivý software.

![Browsing Security *mobile_border](https://cdn.adtidy.org/blog/new/1y6a8browsing_security.png)

Pokud se chystáte navštívit nebezpečnou webovou stránku, Bezpečné prohlížení zobrazí následující varování:

![Browsing Security warning *mobile_border](https://cdn.adtidy.org/blog/new/o8s3Screenshot_2023-06-29-15-49-01-514-edit_com.android.chrome.jpg)

> Upozorňujeme, že AdGuard pro Android není antivirový program. Nezabrání stahování virů ani neodstraní již stažené viry. Chcete-li své zařízení plně ochránit, doporučujeme používat AdGuard ve spojení s antivirovým programem.

Bezpečné prohlížení je bezpečné: AdGuard neví, jaké webové stránky navštěvujete. Ke kontrole zabezpečení webových stránek používá místo adres URL předpony hash.

### Integrace s AdGuard VPN

AdGuard pro Android vytváří lokální VPN pro filtrování provozu. Při spuštěné aplikaci AdGuard pro Android tedy nelze používat jiné aplikace VPN. Aplikace AdGuard i AdGuard VPN však mají režimy integrace, které umožňují jejich společné používání.

V tomto režimu funguje AdGuard VPN jako odchozí proxy, přes který AdGuard směruje svůj provoz. To umožňuje AdGuardu vytvořit rozhraní VPN a blokovat reklamy a slídiče lokálně, zatímco AdGuard VPN směruje veškerý provoz přes vzdálený server.

Pokud AdGuard VPN ukončíte, přestane ji AdGuard používat jako odchozí proxy server. Pokud AdGuard zakážete, bude AdGuard VPN směrovat provoz přes vlastní rozhraní VPN.

Pokud máte Blokátor reklam AdGuard a nainstalujete AdGuard VPN, blokátor reklam to detekuje a automaticky povolí *Integraci s AdGuard VPN*. Totéž se děje i obráceně. Všimněte si, že pokud jste povolili integraci, nebudete moci spravovat výjimky aplikací a připojovat se k DNS serverům z aplikace AdGuard VPN. Aplikace, které mají být směrovány přes tunel VPN, můžete určit prostřednictvím *Nastavení* → *Filtrování* → *Síť* → *Proxy* → *Aplikace provozované skrze proxy*. Chcete-li vybrat DNS server, otevřete AdGuard → *DNS ochrana* → *DNS server*.

## Správa aplikací

V této části můžete spravovat nastavení oprávnění a filtrování pro všechny aplikace nainstalované v zařízení.

![App management *mobile_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

Kliknutím na aplikaci můžete spravovat její nastavení:

- Filtrovat její data pomocí AdGuardu
- Blokovat reklamy a slídiče v této aplikaci (*Filtrovat obsah aplikace*)
- Filtrovat její HTTPS provoz (pro aplikace, které nejsou v prohlížeči, to vyžaduje [instalaci certifikátu AdGuard CA do systémového úložiště](/adguard-for-android/solving-problems/https-certificate-for-rooted/), který je k dispozici na zařízeních s přístupem root)
- Směrovat skrze zadaný proxy server nebo AdGuard VPN v režimu integrace

![App management: Chrome *mobile_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

Z kontextového menu můžete také přistupovat ke statistikám aplikace.

![App management: Chrome. Context menu *mobile_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### Kompatibilní a nekompatibilní aplikace

Ve výchozím nastavení jsou skrze AdGuard směrovány a filtrovány pouze kompatibilní aplikace. Tyto aplikace fungují správně i po zapnutí filtrování.

Nekompatibilní aplikace, jako je Správce stahování, rádio, systémové aplikace s UID 1000 a 1001 (například služby Google Play), mohou při směrování skrze AdGuard fungovat nesprávně. Proto se při pokusu o směrování nebo filtrování všech aplikací může zobrazit následující upozornění:

![Route all apps dialog *mobile_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

Pro zajištění správného fungování všech aplikací nainstalovaných v zařízení důrazně doporučujeme, abyste skrze AdGuard směrovali pouze kompatibilní aplikace. Úplný seznam aplikací, které se nedoporučují filtrovat, najdete v části *Nastavení* → *Obecné* → *Pokročilé* → *Nízkoúrovňová nastavení* → *Ochrana* → *Aplikace ve výjimkách*.

## Statistiky

Tato funkce vám poskytne kompletní přehled o provozu ve vašem zařízení: kolik požadavků je odesláno a kterým společnostem, kolik dat je odesláno a staženo, jaké požadavky jsou blokovány atd.

![Statistics *mobile_border](https://cdn.adtidy.org/blog/new/czy5rStatistics.jpeg?mw=1360)

Statistiky jsou rozděleny do různých sekcí.

### Požadavky

Tato sekce zobrazuje počet zablokovaných reklam, slídičů a celkový počet požadavků za vybrané časové období: 24 hodin, 7 dní, 30 dní nebo po celou dobu. Požadavky můžete filtrovat také podle typu dat: mobilní data, Wi-Fi nebo všechna data dohromady.

*Nedávná aktivita*, dříve známá jako *Záznam filtrování* zobrazuje posledních 10000 požadavků zpracovaných AdGuardem. Klepnutím na *Přizpůsobit* filtrujte požadavky podle stavu (*obvyklé*, *blokované*, *modifikované* nebo *na seznamu povolených*) nebo původní (*vlastní* nebo *třetích stran*).

Klepnutím na požadavek můžete zobrazit jeho podrobnosti a přidat pravidlo blokování nebo odblokování.

### Využití dat

Tato sekce zobrazuje množství staženého, nahraného a ušetřeného datového provozu za vybrané časové období a typ dat. Klepnutím na *uložené*, *nahrané* nebo *stažené* zobrazíte graf využití dat v průběhu času.

### Aplikace

Tato sekce zobrazuje statistiky všech aplikací nainstalovaných ve vašem zařízení. Aplikace můžete třídit podle počtu blokovaných reklam, slídičů nebo podle počtu odeslaných požadavků.

Klepnutím na *Zobrazit všechny aplikace* rozbalíte seznam svých aplikací seřazený podle počtu reklam, slídičů nebo požadavků.

![List of apps *mobile_border](https://cdn.adtidy.org/blog/new/toq0mkScreenshot_20230627-235219_AdGuard.jpg)

Pokud klepnete na aplikaci, zobrazí se její úplné statistiky: požadavky, které odesílá, domény a společnosti, na které obrací.

### Společnosti

Tato sekce zobrazuje společnosti, na které se vaše zařízení obrací. Co to znamená? AdGuard detekuje domény, do kterých vaše zařízení odesílá požadavky a určuje, kterým společnostem patří. Databázi společností najdete na [GitHubu](https://github.com/AdguardTeam/companiesdb).

### Statistiky DNS

Tato sekce zobrazuje údaje o požadavcích zpracovávaných *DNS ochranou*. Celkový počet odeslaných požadavků a počet požadavků zablokovaných AdGuardem si můžete prohlédnout v číslech a grafech. Najdete zde také statistiky o množství ušetřených, stažených a nahraných dat.

### Využití baterie

Tato sekce zobrazuje statistiky o prostředcích zařízení použitých AdGuardem za posledních 24 hodin. Údaje se mohou lišit od nastavení vašeho zařízení. K tomu dochází proto, že systém připisuje provoz filtrovaných aplikací AdGuardu. Zařízení tedy zobrazuje, že AdGuard spotřebovává více prostředků, než ve skutečnosti spotřebovává. [Přečtěte si více o problémech s baterií a spotřebou](/adguard-for-android/solving-problems/battery/)

## Nastavení

### Obecné

Tato sekce vám pomůže spravovat vzhled a chování aplikace: můžete nastavit barevný motiv a jazyk, spravovat oznámení a další. Pokud chcete týmu AdGuard pomoci detekovat pády aplikace a zkoumat použitelnost, můžete povolit *Automatické hlášení pádů* a *Odesílání technických a interakčních dat*.

![General *mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

V sekci *Aktualizace aplikace a filtrů* můžete nakonfigurovat automatické aktualizace filtrů a vybrat kanál aktualizace aplikace. Vyberte *Hlavní* pro větší stabilitu a *Beta* nebo *Nightly* pro včasný přístup k novým funkcím.

![Updates *mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

#### Pokročilá nastavení

*Automatizace* vám umožňuje spravovat AdGuard prostřednictvím aplikací Tasker.

*Watchdog* pomáhá chránit AdGuard před ukončením systémem ([další informace o režimu úspory baterie v Androidu](/adguard-for-android/solving-problems/background-work/)). Zadaná hodnota bude interval v sekundách mezi kontrolami watchdog.

*Úroveň záznamu* definuje, jaká data o provozu aplikace by měla být zaznamenána. Ve výchozím nastavení aplikace shromažďuje údaje o vlastních událostech. Úroveň *Ladění* zaznamenává více událostí – povolte ji, pokud o to tým AdGuardu požádá, abyste mu pomohli lépe porozumět problému. [Více informací o shromažďování a odesílání záznamů](/adguard-for-android/solving-problems/logcat/)

![Advanced *mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

Sekce *Nízkoúrovňová nastavení* je určena pro zkušené uživatele. [Více informací o nízkoúrovňových nastavení](/adguard-for-android/solving-problems/low-level-settings/)

![Low-level settings *mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

### Filtrování

Tato sekce umožňuje spravovat nastavení HTTPS filtrování, filtry a uživatelské skripty a nastavit proxy server.

![Filtering *mobile_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

#### Síť

##### HTTPS filtrování

K blokování reklam a slídičů na většině webových stránek a ve většině aplikací potřebuje AdGuard filtrovat jejich provoz HTTPS. [Více informací o HTTPS filtrování](/general/https-filtering/what-is-https-filtering)

###### Bezpečnostní certifikáty

Za účelem správy šifrovaného provozu nainstaluje AdGuard do vašeho zařízení certifikát CA. Je to bezpečné: provoz je filtrován lokálně a AdGuard ověřuje bezpečnost připojení.

Ve starších verzích Androidu se certifikát nainstaluje automaticky. V systému Android 11 a novějších verzích je třeba certifikát nainstalovat ručně. [Pokyny k instalaci](/adguard-for-android/solving-problems/manual-certificate/)

Certifikát CA v uživatelském úložišti stačí k filtrování provozu HTTPS v prohlížečích a některých aplikacích. Existují však aplikace, které důvěřují pouze certifikátům ze systémového úložiště. Chcete-li tam filtrovat provoz HTTPS, musíte do systémového úložiště nainstalovat CA certifikát AdGuardu. [Pokyny](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

###### Filtrované aplikace HTTPS

Tato sekce obsahuje seznam aplikací, pro které AdGuard filtruje provoz HTTPS. Upozorňujeme, že nastavení lze použít pro všechny aplikace pouze v případě, že máte certifikáty CA v uživatelském úložišti i v systémovém úložišti.

###### Weby s HTTPS filtrováním

Toto nastavení umožňuje spravovat weby, pro které má AdGuard filtrovat provoz HTTPS.

Filtrování HTTPS umožňuje AdGuardu filtrovat obsah požadavků a odezev, tato data však nikdy neshromažďujeme ani neukládáme. Pro zvýšení bezpečnosti však z HTTPS filtrování vyřazujeme weby, [které obsahují potenciálně citlivé informace](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

Výběrem jednoho z režimů můžete do výjimek přidat také weby, které považujete za nezbytné:

- Vyloučení konkrétních webových stránek z HTTPS filtrování
- Filtrování provozu HTTPS pouze na webech přidaných do výjimek

Ve výchozím nastavení také nefiltrujeme weby s certifikáty s rozšířeným ověřením (EV), jako jsou například finanční webové stránky. Pokud potřebujete, můžete také povolit možnost *Filtrovat weby s certifikáty EV*.

##### Proxy

AdGuard můžete nastavit tak, aby veškerý provoz vašeho zařízení směroval přes server proxy. [Jak nastavit odchozí proxy](/adguard-for-android/solving-problems/outbound-proxy)

V této sekci můžete také nastavit VPN třetí strany pro spolupráci s AdGuardem, pokud to váš poskytovatel VPN umožňuje.

V sekci *Aplikace pracující skrze proxy server* můžete vybrat aplikace, které budou směrovat svůj provoz přes zadaný proxy. Pokud máte povolenou *Integraci s AdGuard VPN*, plní toto nastavení roli vyloučení aplikací AdGuard VPN: umožňuje určit aplikace, které mají být směrovány skrze tunel AdGuard VPN.

##### Režim směrování

V této sekci můžete vybrat metodu filtrování provozu.

- *Lokální VPN* filtruje provoz skrze lokálně vytvořenou VPN. Jedná se o nejspolehlivější režim. Vzhledem k omezením systému Android je to také jediná celosystémová metoda filtrování provozu dostupná na zařízeních bez přístupu root.

:::note

Režim *Lokální VPN* neumožňuje používat AdGuard současně s jinými VPN. Chcete-li s AdGuardem používat jinou VPN, musíte ji překonfigurovat, aby fungovala v režimu proxy, a nastavit odchozí proxy v AdGuardu. U AdGuard VPN se to děje automaticky pomocí [*režimu integrace*](#integration-with-adguard-vpn).

:::

- *Automatický proxy* je alternativní metoda směrování provozu, která nevyžaduje použití VPN. Významnou výhodou je, že jej lze provozovat souběžně s VPN. Tento režim vyžaduje přístup root.

- *Manuální proxy* zahrnuje nastavení proxy na konkrétním portu, který lze poté nakonfigurovat v nastavení Wi-Fi. Tento režim vyžaduje přístup root pro Android 10 a vyšší.

#### Filtry

AdGuard blokuje reklamy, slídiče a obtěžující prvky pomocí pravidel ze svých filtrů. Většina funkcí ze sekce *Ochrana* je založena na [AdGuard filtrech](/general/ad-filtering/adguard-filters/#adguard-filters). Pokud povolíte *Základní ochranu*, automaticky se zapne filtr AdGuard Base a AdGuard Filtr mobilních reklam. A naopak: pokud oba filtry vypnete, bude vypnuta i *Základní ochrana*.

![Filters *mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Filtry povolené ve výchozím nastavení jsou dostatečné pro běžný provoz AdGuardu. Pokud si však chcete blokování reklam přizpůsobit, můžete použít jiné AdGuard filtry nebo filtry třetích stran. Za tímto účelem vyberte kategorii a povolte požadované filtry. Chcete-li přidat vlastní filtr, klepněte na *Vlastní filtry* → *Přidat vlastní filtr* a zadejte jeho URL nebo cestu k souboru.

:::note

Pokud aktivujete příliš mnoho filtrů, mohou některé webové stránky fungovat nesprávně.

:::

[Další informace o filtrech](https://adguard.com/en/blog/what-are-filters.html)

#### Uživatelské skripty

Uživatelské skripty jsou miniprogramy napsané v jazyce JavaScript, které rozšiřují funkčnost jedné nebo více webových stránek. K instalaci uživatelských skriptů potřebujete speciální správce uživatelských skriptů. AdGuard takovou funkci má a umožňuje přidávat uživatelské skripty pomocí URL nebo ze souboru.

![Userscripts *mobile_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

##### AdGuard Extra

AdGuard Extra je vlastní uživatelský skript, který zabraňuje webovým stránkám obcházet blokátory reklam a znovu vkládat blokované reklamy.

### Licence

V této sekci najdete informace o své licenci a můžete provádět následující:

- Zakoupit AdGuard licence a aktivovat [funkce plné verze](#free-vs-full-version)
- Přihlásit se ke svému AdGuard účtu nebo zadat licenční klíč pro aktivaci licence
- Zaregistrovat se a aktivovat si 7denní zkušební dobu, pokud jste ji ještě nevyužili
- Obnovit stav licence, pokud jste nedávno prodloužili její platnost
- Otevřít AdGuard účet a spravovat v něm své licence
- Resetovat licenci – například pokud jste dosáhli limitu zařízení pro tuto licenci a chcete použít jinou

![License screen *mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

### Podpora

Tuto sekci použijte, pokud máte nějaké dotazy nebo návrhy týkající se AdGuardu pro Android. Před kontaktováním podpory doporučujeme prostudovat *[FAQ](https://adguard.com/support/adguard_for_android.html)* nebo tuto databázi znalostí.

![Support *mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

Pokud si všimnete nezablokované reklamy, nahlaste ji prosím skrze menu *Nahlásit nesprávné blokování*.

Pro neobvyklé chování aplikace vyberte *Nahlásit chybu*. Pokud je to možné, popište podrobně svůj problém a přidejte záznamy aplikace. [Jak popsat problém](/guides/report-bugs/#how-to-describe-a-problem)

Pro vaše návrhy použijte *Požádat o funkci*.

:::note

GitHub je alternativní způsob, jak hlásit chyby a navrhovat nové funkce. [Pokyny a odkazy na repozitář](/guides/report-bugs/#adguard-for-android)

:::

### Bezplatná vs plná verze

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xNOeHpZgjFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

AdGuard pro Android má bezplatnou a placenou verzi. Placené funkce rozšiřují možnosti AdGuardu:

- *Blokování reklam v aplikacích* umožňuje blokovat reklamy v aplikacích, které nevyužívají prohlížeč. Aplikace pro filtrování můžete přidat ve [*Správě aplikací*](#app-management)

:::note

AdGuard používá k blokování reklam ve videích YouTube vlastní přehrávač médií bez reklam. Chcete-li otevřít přehrávač médií, otevřete aplikaci YouTube a sdílejte video pomocí AdGuardu. Tato funkce je zdarma.

:::

- *Ochrana před sledováním* zvyšuje vaše soukromí tím, že blokuje požadavky na sledování, online čítače, značky UTM, analytické systémy a další. [Zpět k ochraně sledování](#tracking-protection)

- *Bezpečné prohlížení* vás upozorní, pokud se chystáte navštívit potenciálně nebezpečnou webovou stránku. [Zpět k Bezpečnému prohlížení](#browsing-security)

- *Vlastní filtry a uživatelská pravidla* vám umožňují přidávat vlastní pravidla filtrování a filtry třetích stran pro vylepšení blokování reklam. [Zpět k filtrům](#filters)

- *Uživatelské skripty* vám umožňují používat AdGuard Extra k obcházení zákazů blokování reklam a instalaci dalších uživatelských skriptů pro rozšíření funkčnosti prohlížeče. [Zpět k uživatelským skriptům](#userscripts)

K těmto funkcím získáte přístup [zakoupením licence](https://adguard.com/license.html). [Jak aktivovat licenci](/general/license/activation/#activating-adguard-for-android)

### Zařízení s přístupem root vs bez přístupu root

Vzhledem k dalším bezpečnostním opatřením systému Android jsou některé funkce AdGuardu dostupné pouze na zařízeních s přístupem root. Zde je jejich seznam:

- **HTTPS filtrování ve většině aplikací** vyžaduje [instalaci certifikátu CA do systémového úložiště](#security-certificates), protože většina aplikací nedůvěřuje certifikátům v uživatelském úložišti. Instalace certifikátu do systémového úložiště je možná pouze na zařízeních s přístupem root
- Režim směrování [**Automatický proxy**](#routing-mode) vyžaduje přístup root kvůli omezením systému Android ohledně filtrování provozu v celém systému
- Režim směrování **Manuální proxy** vyžaduje přístup root v systému Android 10 a vyšším, protože již není možné určit název aplikace spojené s připojením, které AdGuard filtruje
