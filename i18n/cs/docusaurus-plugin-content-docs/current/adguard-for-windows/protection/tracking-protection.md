---
title: Ochrana před sledováním
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro Windows v8.0, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Jedná se o beta verzi, která je stále ve vývoji. Chcete-li vyzkoušet, stáhněte si [beta verzi AdGuard pro Windows](https://agrd.io/windows_beta).

:::

Mnoho webových stránek shromažďuje údaje o svých návštěvnících, včetně IP adres, informací o prohlížeči a operačním systému, rozlišení obrazovky a dokonce i stránky, ze které jste přišli. Soubory cookies mohou být použity k identifikaci vašeho prohlížeče, zapamatování vašich preferencí nebo k rozpoznání vás při vašem návratu. Ochrana před sledováním zabraňuje takovým systémům ve sběru vašich osobních údajů. Další informace naleznete v našem [článku o Ochraně před sledováním v AdGuardu](https://adguard.com/kb/general/stealth-mode/)

![Tracking protection](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

Pokud nechcete trávit čas ručním nastavováním filtrů, můžete si jednoduše vybrat jednu z přednastavených úrovní ochrany:

- _Standardní_: výchozí nastavení, které poskytuje spolehlivou ochranu při běžném prohlížení.
- _Vysoká_: odebere sledovací parametry z URL stránek a blokuje cookies třetích stran. Možná se budete muset znovu přihlašovat na některé webové stránky nebo čelit dalším problémům souvisejícím se soubory cookies.
- _Extrémní_: omezuje životnost cookies třetích stran a blokuje určité API prohlížeče. Některé webové stránky nemusí fungovat správně.

Pro maximální flexibilitu vyberte možnost _Vlastní_ a vše nastavte ručně. Nastavení jsou rozdělena do pěti kategorií:

- [Obecná nastavení](#general-settings)

- [Metody sledování](#tracking-methods)

- [API prohlížeče](#browser-api)

- [Sledování Windows](#windows-tracking)

- [Různé](#miscellaneous)

## Obecná nastavení

![General settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general.png)

### Blokovat slídiče

Blokuje slídiče a nástroje pro webovou analýzu pomocí _AdGuard filtru ochrany sledování_.

### Odebrat sledovací parametry z URL

Odstraňuje sledovací parametry, jako jsou `utm_*` a `fb_ref`, z URL adres stránek pomocí _filtru AdGuard URL Tracking_.

### Skrýt vyhledávací dotazy

Skryje vyhledávací fráze ze stránek navštívených skrze vyhledávače. Když jste přesměrováni na webovou stránku z vyhledávače Google, Yahoo nebo jiného vyhledávače, tato možnost skryje vyhledávací dotaz, který jste použili k nalezení dané webové stránky.

### Požádat webové stránky, aby vás nesledovaly

Odešle webovým stránkám, které jste navštívili signály [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) a [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track).

## Metody sledování

![Tracking methods](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_tracking_methods.png)

### Smazat cookies třetích stran

Webové stránky používají soubory cookies k ukládání vašich preferencí — například zvolený jazyk, vaši polohu nebo položky ve vašem nákupním košíku. Po návratu prohlížeč tyto soubory cookies odešle zpět, aby vás web mohl rozpoznat.

Cookies třetích stran fungují stejně, ale vytvářejí je domény jiné než ta, kterou navštěvujete. Například cnn.com může obsahovat widget Facebook _Like_, který nastaví cookies, které později přečte Facebook. Inzerenti často používají tyto soubory cookies ke sledování, které další stránky navštěvujete.

Pomocí této možnosti můžete nastavit časový limit (v minutách), po jehož uplynutí budou všechny soubory cookies třetích stran smazány. Pokud nastavíte časovač na 0, takové cookies budou zcela zablokovány.

![Time-to-live](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

:::caution

Mějte na paměti, že toto nastavení odstraní všechny cookies třetích stran, včetně těch používaných pro přihlášení prostřednictvím sociálních sítí nebo jiných externích služeb. To znamená, že se možná budete muset čas od času znovu přihlásit nebo řešit jiné problémy související s cookies. Pokud chcete blokovat pouze sledovací soubory cookies, použijte [_filtr AdGuard Tracking Protection_](/general/ad-filtering/filter-policy/#tracking-protection-filter).

:::

### Smazat vlastní cookies (není doporučeno)

Tato možnost odstraní soubory cookies nastavené webovou stránkou, kterou právě navštěvujete, po uplynutí zvolené doby (v minutách). Když časovač vyprší, všechny takové sookies jsou odstraněny. Pro úplné zablokování nastavte časovač na 0.

:::caution

Tuto možnost nedoporučujeme povolovat, protože může vážně narušit práci některých webů.

:::

### Blokovat záhlaví ETag a If-None-Match

Odstraňuje hlavičky ETag a If-None-Match z požadavků a odezev, aby webové stránky nemohly tyto hlavičky používat ke sledování.

Když prohlížeč vyvolá stránku, server jí přiřadí ETag — jedinečný identifikátor používaný k ukládání obsahu stránky do mezipaměti. Při následujících návštěvách prohlížeč odešle stejný ETag zpět na server. To umožňuje serveru rozpoznat návštěvníka. Dokud jsou soubory uložené v mezipaměti zachovány, je ETag přenášen s každým požadavkem. Pokud stránka obsahuje také vložené prvky z jiných serverů, jako jsou obrázky nebo iframes, mohou tyto servery pomocí ETags sledovat vaši aktivitu bez vašeho vědomí.

### Blokovat autorizační hlavičku třetí strany

Zakáže autorizační data uložená v mezipaměti, která lze použít pro účely sledování. Může narušovat funkčnost některých rozšíření prohlížeče a webových stránek.

Hodnota autorizační hlavičky je uložena v mezipaměti prohlížeče a automaticky odeslána s každým požadavkem na stejnou doménu. Jelikož doprovází každou žádost, lze jej použít k identifikaci a sledování podobně jako soubory cookies.

## API prohlížeče

![Browser API](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_browser_api.png)

### Blokovat WebRTC

Blokuje WebRTC, známou zranitelnost, která může prozradit vaši skutečnou IP adresu, i když používáte proxy server nebo VPN.

WebRTC (Web Real-Time Communication) je technologie, která umožňuje přímé streamování dat mezi prohlížeči a aplikacemi. Umožňuje jiným uživatelům zjistit vaši skutečnou IP adresu, i když používáte proxy nebo VPN. Povolení této možnosti může narušit práci některých aplikací prohlížeče, například messengerů, chatů, kin nebo her.

### Blokovat Push API

Push API umožňuje serverům odesílat zprávy do webových aplikací bez ohledu na stav aktivity prohlížeče. Oznámení z různých webových stránek se tak mohou zobrazovat, i když je prohlížeč skrytý v liště nebo není spuštěný. Povolení této volby zcela blokuje Push API.

### Blokovat lokalizační API

Pokud je tato možnost zapnutá, prohlížeč už nebude posílat GPS data na weby. Tím se zabrání tomu, aby zjistili vaši polohu, změnili výsledky vyhledávání nebo přizpůsobili obsah na základě toho, kde se nacházíte.

### Blokovat Flash

Plugin Flash Player je zastaralý a velmi náchylný k virům a zneužití. Může také zpomalit načítání webových stránek. Povolení této možnosti zabrání prohlížečům detekovat komponenty Flash (například pluginy nebo objekty ActiveXObject), což účinně deaktivuje podporu Flash.

## Sledování systému Windows

![Windows tracking](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_windows_tracking.png)

### Zakázat telemetrii systému Windows

Zakáže odesílání technických údajů o používání systému a aplikací.

### Vypnout reklamní ID

Zakáže reklamní ID pro blokování sledování používání aplikace.

### Zakázat automatické hlášení Microsoft Defender

Blokuje automatické hlášení a odběr vzorků podezřelého malwaru.

### Zakázat službu směrování zpráv WAP Push

Zakáže sběr dat o problémech s komponentami systému Windows

## Různé

![Miscellaneous](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_misc.png)

### Skrýt třetím stranám referenční ID

Referenční ID je hlavička HTTP používaná v požadavcích prohlížeče na server. Obsahuje adresu URL zdroje požadavku. Při přechodu z jedné stránky na druhou uloží referenční ID adresu URL původní stránky. Na serveru, který je hostitelem cílové webové stránky, je často instalován software, který analyzuje referenční ID a získává z něj různé informace.

Povolení možnosti _Skrýt třetím stranám referenční ID_ zabrání webovým stránkám třetích stran v zobrazení těchto informací změnou nebo odstraněním záhlaví.

Můžete také zadat vlastní hodnotu do pole _Vlastní Referer_. Chcete-li použít výchozí referenční ID, ponechte pole prázdné.

Všimněte si, že aby bylo možné filtrovat provoz, aplikace AdGuard 'zachycují' požadavky prohlížeče na server. Požadavky na reklamní, sledovací a phishingové servery mohou být před odesláním na server změněny nebo zcela zablokovány.

Totéž platí pro možnost _Skrýt referenční ID před třetími stranami_: Aby filtroval provoz, AdGuard zachycuje HTTP(S) požadavky a může je změnit nebo blokovat, než se dostanou na server. Změna nastane až poté, co požadavek opustí váš prohlížeč. Z tohoto důvodu, pokud zkontrolujete hlavičky v prohlížeči (například pomocí nástrojů Chrome Developer Tools), uvidíte stále původní odkaz Referer. K potvrzení, že došlo k úpravě, můžete použít externí nástroje, jako je například Fiddler.

### Skrýt User-Agent

Když navštívíte webovou stránku, váš prohlížeč odešle jako součást HTTP požadavku hlavičku nazvanou User-Agent. Vypadá to jako textový řádek, který začíná “User-Agent:”. Tento řádek obvykle obsahuje podrobnosti, jako je název a verze prohlížeče, operační systém a nastavení jazyka.

Povolením této možnosti AdGuard odstraní identifikační informace z User-Agent, aby je inzerenti a slídiče nemohli použít k vytvoření vašeho profilu. Pokud chcete, můžete zadat vlastní hodnotu do pole _Vlastní User-Agent_. Chcete-li zachovat výchozí hodnotu, jednoduše ponechte pole prázdné.

### Maskovat adresu IP

AdGuard nemůže zcela skrýt vaši skutečnou IP adresu, ale může ji nahradit jinou, aby webové stránky interpretovaly vaše připojení jako připojení přes proxy server. V některých případech to pomáhá skrýt vaši skutečnou IP adresu.

Do příslušného pole můžete zadat libovolnou IP adresu, kterou chcete použít. Chcete-li použít výchozí IP adresu, ponechte pole prázdné.

### Odstranit X-Client-Data hlavičku

Zabraňuje prohlížeči Google Chrome odesílat informace o své verzi a úpravách v požadavcích na domény Google, včetně služeb jako DoubleClick a Google Analytics.

### Ochrana proti DPI

Deep Packet Inspection je systém hloubkové analýzy a filtrování provozu podle obsahu paketů a shromažďování statistických údajů. Pomocí této technologie mají poskytovatelé internetových služeb možnost kontrolovat procházející provoz a omezovat přístup k obsahu pro své klienty.

Deep Packet Inspection (DPI) je technologie používaná některými poskytovateli internetových služeb k analýze a filtrování provozu na základě obsahu paketů. Umožňuje jim monitorovat připojení, omezovat přístup k určitým zdrojům a shromažďovat statistické údaje o uživatelích.

Když je tato možnost zapnutá, AdGuard upraví odchozí data paketů tak, aby už nesplňovala kritéria blokování DPI. To vám pomůže obejít omezení a získat přístup k obsahu, který potřebujete. Ne všechny systémy DPI však lze zatím obejít — stále probíhají vylepšení.

Funkce _Ochrana před DPI_ je již implementována v AdGuardu pro Windows, AdGuardu pro Mac a AdGuardu pro Android.

:::caution

Pokud je tato funkce v AdGuardu pro Windows povolena, může docházet k interferenci s antivirem ESET. V takovém případě nebude ESET schopen filtrovat provoz, takže některé škodlivé nebo blokované webové stránky zůstanou přístupné.

:::
