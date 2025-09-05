---
title: Nastavení
sidebar_position: 4
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

Na kartu _Nastavení_ se dostanete klepnutím na ikonu úplně vpravo dole na obrazovce. Tato část obsahuje různá nastavení, informace o aplikaci, licenci a předplatném a různé zdroje podpory.

## Obecné

Tato sekce vám pomůže spravovat vzhled a chování aplikace: můžete nastavit barevný motiv a jazyk, spravovat oznámení a další. Pokud chcete týmu AdGuard pomoci odhalit pády aplikací a zkoumat jejich použitelnost, můžete povolit funkce _Automatické hlášení pádů_ a _Odesílání technických údajů a údajů o interakci_.

![General \*mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

V sekci _Aktualizace aplikace a filtrů_ můžete nakonfigurovat automatické aktualizace filtrů a vybrat kanál aktualizace aplikace. Vyberte _Hlavní_ pro větší stabilitu a _Beta_ nebo _Nightly_ pro včasný přístup k novým funkcím.

![Updates \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Pokročilá nastavení

_Automatizace_ vám umožňuje spravovat AdGuard prostřednictvím aplikací Tasker.

_Hlídací pes_ pomáhá chránit AdGuard před vypnutím systémem ([přečtěte si více o úsporném režimu baterie systému Android](/adguard-for-android/solving-problems/background-work/)). Zadaná hodnota bude interval v sekundách mezi kontrolami watchdog.

_Úroveň záznamu_ definuje, jaká data o provozu aplikace by měla být zaznamenána. Ve výchozím nastavení aplikace shromažďuje údaje o vlastních událostech. _Úroveň ladění_ zaznamenává více událostí – povolte ji, pokud o to tým AdGuardu požádá, abyste mu pomohli lépe porozumět problému. [Přečtěte si více o shromažďování a odesílání záznamů](/adguard-for-android/solving-problems/log/)

![Advanced \*mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

Sekce _Nízkoúrovňová nastavení_ je určena pro zkušené uživatele. [Přečtěte si více o Nízkoúrovňových nastavení](/adguard-for-android/features/low-level-settings/)

![Low-level settings \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filtrování

Tato sekce umožňuje spravovat nastavení HTTPS filtrování, filtry a uživatelské skripty a nastavit proxy server.

![Filtering \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filtering.jpg)

### Filtry

AdGuard blokuje reklamy, slídiče a obtěžující prvky pomocí pravidel ze svých filtrů. Většina funkcí ze sekce _Ochrana_ je podporována [AdGuard filtry](/general/ad-filtering/adguard-filters/#adguard-filters). Pokud povolíte _Základní ochranu_, automaticky se zapne filtr AdGuard Base a AdGuard Filtr mobilních reklam. A naopak: pokud oba filtry vypnete, bude vypnuta i _Základní ochrana_.

![Filters \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Filtry povolené ve výchozím nastavení jsou dostatečné pro běžný provoz AdGuardu. Pokud si však chcete blokování reklam přizpůsobit, můžete použít jiné AdGuard filtry nebo filtry třetích stran. Za tímto účelem vyberte kategorii a povolte požadované filtry. Chcete-li přidat vlastní filtr, klepněte na _Vlastní filtry_ → _Přidat vlastní filtr_ a zadejte jeho URL nebo cestu k souboru.

:::note

Pokud aktivujete příliš mnoho filtrů, mohou některé webové stránky fungovat nesprávně.

:::

[Více informací o filtrech](https://adguard.com/en/blog/what-are-filters.html)

### Rozšíření

Rozšíření umožňují přidávat uživatelské skripty a uživatelské styly.

![Extensions \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/extensions.jpg)

Uživatelské skripty jsou miniprogramy napsané v jazyce JavaScript, které rozšiřují funkčnost jedné nebo více webových stránek. K instalaci uživatelských skriptů potřebujete speciální správce uživatelských skriptů. AdGuard takovou funkci má a umožňuje přidávat uživatelské skripty pomocí URL nebo ze souboru.

Uživatelské styly jsou podobné uživatelským skriptům, které umožňují měnit vzhled webových stránek v prohlížeči, aniž by se měnil jejich obsah. Fungují tak, že přidávají styly CSS ke stávajícím stylům webových stránek. Pokud například chcete tmavý motiv na webu, který ho nenabízí, můžete k tomu použít uživatelský styl.

Chcete-li přidat uživatelský styl, přejděte do _Nastavení_ → _Filtrování_ → _Rozšíření_→ _Přidat rozšíření_ → _Importovat ze souboru nebo URL_. Hotové uživatelské styly najdete [online](https://userstyles.world/).

Chcete-li vytvořit vlastní styl, klepněte na _Přidat rozšíření_ → _Vytvořit uživatelský styl_.

#### AdGuard Extra

AdGuard Extra je vlastní uživatelský skript, který blokuje složité reklamy a mechanismy, které znovu vkládají reklamy na webové stránky.

#### Zakázat AMP

Zakázat AMP je uživatelský skript, který zakáže [Accelerated mobile pages](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) na stránce s výsledky vyhledávání Google.

### Síť

#### HTTPS filtrování

K blokování reklam a slídičů na většině webových stránek a ve většině aplikací potřebuje AdGuard filtrovat jejich provoz HTTPS. [Další informace o HTTPS filtrování](/general/https-filtering/what-is-https-filtering)

##### Bezpečnostní certifikáty

Za účelem správy šifrovaného provozu nainstaluje AdGuard do vašeho zařízení certifikát CA. Je to bezpečné: provoz je filtrován lokálně a AdGuard ověřuje bezpečnost připojení.

Ve starších verzích Androidu se certifikát nainstaluje automaticky. V systému Android 11 a novějších verzích je třeba certifikát nainstalovat ručně. [Pokyny k instalaci](/adguard-for-android/solving-problems/manual-certificate/)

Certifikát CA v uživatelském úložišti stačí k filtrování provozu HTTPS v prohlížečích a některých aplikacích. Existují však aplikace, které důvěřují pouze certifikátům ze systémového úložiště. Chcete-li tam filtrovat provoz HTTPS, musíte do systémového úložiště nainstalovat CA certifikát AdGuardu. [Pokyny](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### Filtrované aplikace HTTPS

Tato sekce obsahuje seznam aplikací, pro které AdGuard filtruje provoz HTTPS. Upozorňujeme, že nastavení lze použít pro všechny aplikace pouze v případě, že máte certifikáty CA v uživatelském úložišti i v systémovém úložišti.

##### Weby s HTTPS filtrováním

Toto nastavení umožňuje spravovat weby, pro které má AdGuard filtrovat provoz HTTPS.

Filtrování HTTPS umožňuje AdGuardu filtrovat obsah požadavků a odezev, tato data však nikdy neshromažďujeme ani neukládáme. Pro zvýšení bezpečnosti však z HTTPS filtrování [vylučujeme webové stránky, které obsahují potenciálně citlivé informace](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

Výběrem jednoho z režimů můžete do výjimek přidat také weby, které považujete za nezbytné:

- Vyloučení konkrétních webových stránek z HTTPS filtrování
- Filtrování provozu HTTPS pouze na webech přidaných do výjimek

Ve výchozím nastavení také nefiltrujeme weby s certifikáty s rozšířeným ověřením (EV), jako jsou například finanční webové stránky. Pokud potřebujete, můžete také povolit možnost _Filtrovat weby s certifikáty EV_.

#### Proxy

AdGuard můžete nastavit tak, aby veškerý provoz vašeho zařízení směroval přes server proxy. [Jak nastavit odchozí proxy](/adguard-for-android/solving-problems/outbound-proxy)

V této sekci můžete také nastavit VPN třetí strany pro spolupráci s AdGuardem, pokud to váš poskytovatel VPN umožňuje.

V sekci _Aplikace pracující skrze proxy server_ můžete vybrat aplikace, které budou směrovat svůj provoz přes zadaný proxy. Pokud máte povolenou _Integraci s AdGuard VPN_, plní toto nastavení roli vyloučení aplikací AdGuard VPN: umožňuje určit aplikace, které mají být směrovány skrze tunel AdGuard VPN.

#### Režim směrování

V této sekci můžete vybrat metodu filtrování provozu.

- _Lokální VPN_ filtruje provoz skrze lokálně vytvořenou VPN. Jedná se o nejspolehlivější režim. Vzhledem k omezením systému Android je to také jediná celosystémová metoda filtrování provozu dostupná na zařízeních bez přístupu root.

:::note

Režim _Lokální VPN_ neumožňuje používat AdGuard současně s jinými VPN. Chcete-li s AdGuardem používat jinou VPN, musíte ji překonfigurovat, aby fungovala v režimu proxy, a nastavit odchozí proxy v AdGuardu. U AdGuard VPN se to provádí automaticky pomocí [_Režimu integrace_](/adguard-for-android/features/integration-with-vpn).

:::

- _Automatický proxy_ je alternativní metoda směrování provozu, která nevyžaduje použití VPN. Významnou výhodou je, že jej lze provozovat souběžně s VPN. Tento režim vyžaduje přístup root.

:::note

Upozorňujeme, že filtrování DNS bude aktivní i v režimu _Automatického proxy serveru_ a zařízení nemusí být schopno filtrovat požadavky DNS z konkrétních aplikací. V režimu směrování _VPN_ jsou aplikace z lokální VPN vyloučeny systémovými prostředky. Řešitel systému proto vidí, které aplikace jsou součástí VPN a které ne. Buď je pustí do lokální VPN, nebo jim umožní ji obejít. Požadavky DNS však přicházejí ze systémového řešitele, nikoli z aplikace. V režimu _Automatický proxy server_ je možné vyloučit pouze provoz z aplikací, nikoli jejich dotazy DNS, protože AdGuard je považuje za systémové dotazy.

:::

- _Manuální proxy_ zahrnuje nastavení proxy na konkrétním portu, který lze poté nakonfigurovat v nastavení Wi-Fi. Tento režim vyžaduje přístup root pro Android 10 a vyšší.

## Licence

V této sekci najdete informace o své licenci a můžete provádět následující:

- Zakoupit licenci AdGuardu pro aktivaci [funkcí plné verze](/adguard-for-android/features/free-vs-full)
- Přihlásit se ke svému AdGuard účtu nebo zadat licenční klíč pro aktivaci licence
- Zaregistrovat se a aktivovat si 7denní zkušební dobu, pokud jste ji ještě nevyužili
- Obnovit stav licence z nabídky se třemi tečkami (⋮)
- Otevřít AdGuard účet a spravovat v něm své licence
- Resetovat licenci — například pokud jste dosáhli limitu zařízení pro tuto licenci a chcete použít jinou

![License screen \*mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## Podpora

Tuto sekci použijte, pokud máte nějaké dotazy nebo návrhy týkající se AdGuardu pro Android. Před kontaktováním podpory doporučujeme nahlédnout do _[FAQ](https://adguard.com/support/adguard_for_android.html)_ nebo do této databáze znalostí.

![Support \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

Pokud si všimnete nezablokované reklamy, nahlaste ji prosím skrze menu _Nahlásit nesprávné blokování_.

Pro neobvyklé chování aplikace vyberte _Nahlásit chybu_. Pokud je to možné, popište podrobně svůj problém a přidejte záznamy aplikace. [Jak popsat problém](/guides/report-bugs/#how-to-describe-a-problem)

Pro vaše návrhy použijte _Požádat o funkci_.

:::note

GitHub je alternativní způsob, jak hlásit chyby a navrhovat nové funkce. [Pokyny a odkazy na repozitář](/guides/report-bugs/#adguard-for-android)

:::
