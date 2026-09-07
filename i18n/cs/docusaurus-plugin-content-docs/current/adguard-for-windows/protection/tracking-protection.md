---
title: Ochrana před sledováním
sidebar_position: 2
---

Mnoho webových stránek shromažďuje údaje o svých návštěvnících, včetně IP adres, informací o prohlížeči a operačním systému, rozlišení obrazovky a dokonce i stránky, ze které jste přišli. Soubory cookies mohou být použity k identifikaci vašeho prohlížeče, zapamatování vašich preferencí nebo k rozpoznání vás při vašem návratu. Ochrana před sledováním zabraňuje takovým systémům ve sběru vašich osobních údajů. Další informace naleznete v našem [článku o Ochraně před sledováním v AdGuardu](https://adguard.com/kb/general/stealth-mode/)

![Tracking protection \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/tracking_protection.png)

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

![General settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_general_settings.png)

### Blokovat slídiče

Blokuje slídiče a nástroje pro webovou analýzu pomocí _AdGuard filtru ochrany sledování_.

### Odebrat sledovací parametry z URL

Odstraňuje sledovací parametry, jako jsou `utm_*` a `fb_ref`, z URL adres stránek pomocí _filtru AdGuard URL Tracking_.

### Skrýt vyhledávací dotazy

Skryje vyhledávací fráze ze stránek navštívených skrze vyhledávače. Když jste přesměrováni na webovou stránku z vyhledávače Google, Yahoo nebo jiného vyhledávače, tato možnost skryje vyhledávací dotaz, který jste použili k nalezení dané webové stránky.

### Požádat webové stránky, aby mě nesledovaly

Odešle webovým stránkám, které jste navštívili signály [Global Privacy Control](https://globalprivacycontrol.org/#gpc-spec) a [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track).

### Další filtry soukromí

Applies a set of additional privacy protection filters. The number next to _Enabled in Filters_ shows how many filters are currently active.

## Metody sledování

![Tracking methods \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_tracking_methods.png)

### Smazat cookies třetích stran

Webové stránky používají soubory cookies k ukládání vašich preferencí — například zvolený jazyk, vaši polohu nebo položky ve vašem nákupním košíku. Po návratu prohlížeč tyto soubory cookies odešle zpět, aby vás web mohl rozpoznat.

Cookies třetích stran fungují stejně, ale vytvářejí je domény jiné než ta, kterou navštěvujete. Například cnn.com může obsahovat widget Facebook _Like_, který nastaví cookies, které později přečte Facebook. Inzerenti často používají tyto soubory cookies ke sledování, které další stránky navštěvujete.

Pomocí této možnosti můžete nastavit časový limit (v minutách), po jehož uplynutí budou všechny soubory cookies třetích stran smazány. Pokud nastavíte časovač na 0, takové cookies budou zcela zablokovány.

![Time-to-live \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/delete_third_party.png)

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

![Browser API \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_browser_api.png)

### Prevent IP address leaks through WebRTC

Makes WebRTC use a stricter IP address policy to prevent your real IP address from being exposed, even if you use a proxy or VPN.

WebRTC (Web Real-Time Communication) je technologie, která umožňuje přímé streamování dat mezi prohlížeči a aplikacemi. By default, it can reveal your true IP address even when a proxy or VPN is active. This option enforces a stricter IP address policy instead of blocking WebRTC entirely, so browser applications such as messengers, chats, and games are less likely to be affected.

### Blokovat Push API

Push API umožňuje serverům odesílat zprávy do webových aplikací bez ohledu na stav aktivity prohlížeče. Oznámení z různých webových stránek se tak mohou zobrazovat, i když je prohlížeč skrytý v liště nebo není spuštěný. Povolení této volby zcela blokuje Push API.

### Blokovat lokalizační API

Pokud je tato možnost zapnutá, prohlížeč už nebude posílat GPS data na weby. Tím se zabrání tomu, aby zjistili vaši polohu, změnili výsledky vyhledávání nebo přizpůsobili obsah na základě toho, kde se nacházíte.

## Sledování systému Windows

![Windows tracking \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_windows_tracking.png)

### Zakázat telemetrii systému Windows

Zakáže odesílání technických údajů o používání systému a aplikací.

### Zakázat Windows Recall

Disables the Windows Recall feature, which periodically takes snapshots of your screen and stores them locally. This prevents sensitive information visible on your screen from being captured and saved.

### Vypnout reklamní ID

Zakáže reklamní ID pro blokování sledování používání aplikace.

### Zakázat automatické hlášení Microsoft Defender

Blokuje automatické hlášení a odběr vzorků podezřelého malwaru.

### Zakázat službu směrování zpráv WAP Push

Disables data collection about Windows component problems.

## Různé

![Miscellaneous \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/custom_settings_miscellaneous.png)

### Skrýt třetím stranám referenční ID

Referenční ID je hlavička HTTP používaná v požadavcích prohlížeče na server. Obsahuje adresu URL zdroje požadavku. Při přechodu z jedné stránky na druhou uloží referenční ID adresu URL původní stránky. Na serveru, který je hostitelem cílové webové stránky, je často instalován software, který analyzuje referenční ID a získává z něj různé informace.

Enabling the _Hide Referer from third parties_ option prevents third-party websites from seeing this information by altering or removing the header.

Můžete také zadat vlastní hodnotu do pole _Vlastní Referer_. Chcete-li použít výchozí referenční ID, ponechte pole prázdné.

Všimněte si, že aby bylo možné filtrovat provoz, aplikace AdGuard 'zachycují' požadavky prohlížeče na server. Požadavky na reklamní, sledovací a phishingové servery mohou být před odesláním na server změněny nebo zcela zablokovány.

Totéž platí pro možnost _Skrýt referenční ID před třetími stranami_: Aby filtroval provoz, AdGuard zachycuje HTTP(S) požadavky a může je změnit nebo blokovat, než se dostanou na server. Změna nastane až poté, co požadavek opustí váš prohlížeč. Z tohoto důvodu, pokud zkontrolujete hlavičky v prohlížeči (například pomocí nástrojů Chrome Developer Tools), uvidíte stále původní odkaz Referer. K potvrzení, že došlo k úpravě, můžete použít externí nástroje, jako je například Fiddler.

### Skrýt User-Agent

Když navštívíte webovou stránku, váš prohlížeč odešle jako součást HTTP požadavku hlavičku nazvanou User-Agent. Vypadá to jako textový řádek, který začíná “User-Agent:”. Tento řádek obvykle obsahuje podrobnosti, jako je název a verze prohlížeče, operační systém a nastavení jazyka.

Povolením této možnosti AdGuard odstraní identifikační informace z User-Agent, aby je inzerenti a slídiče nemohli použít k vytvoření vašeho profilu. Pokud chcete, můžete zadat vlastní hodnotu do pole _Vlastní User-Agent_. Chcete-li zachovat výchozí hodnotu, jednoduše ponechte pole prázdné.

### Maskovat IP adresu

AdGuard nemůže zcela skrýt vaši skutečnou IP adresu, ale může ji nahradit jinou, aby webové stránky interpretovaly vaše připojení jako připojení přes proxy server. V některých případech to pomáhá skrýt vaši skutečnou IP adresu.

Do příslušného pole můžete zadat libovolnou IP adresu, kterou chcete použít. Chcete-li použít výchozí IP adresu, ponechte pole prázdné.

### Odstranit X-Client-Data hlavičku

Zabraňuje prohlížeči Google Chrome odesílat informace o své verzi a úpravách v požadavcích na domény Google, včetně služeb jako DoubleClick a Google Analytics.

### Ochrana proti DPI

![Protect against DPI \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/protection/protect_against_dpi.png)

Deep Packet Inspection (DPI) is a technology that allows ISPs to analyze and filter traffic based on packet content. With this option enabled, AdGuard modifies outgoing packet data to make it harder for DPI systems to identify and analyze your traffic, helping protect your connection privacy.

When you click on _Protect against DPI_, a separate screen opens with three groups of settings:

**ClientHello split** — modifies the TLS ClientHello message to make it harder for DPI systems to detect and block encrypted connections. The following strategies are available:

- _Split TCP packet at fixed position_ — splits the ClientHello TCP packet at a specified byte position.
- _Split TLS record at fixed position_ — splits the TLS record containing the ClientHello at a specified byte position.
- _Split TLS before SNI_ — splits the ClientHello before the Server Name Indication field.
- _Split TLS after SNI_ — splits the ClientHello after the Server Name Indication field.
- _Split TLS in the middle of SNI_ — splits the ClientHello in the middle of the Server Name Indication field.
- _Split TLS randomly within SNI_ — splits the ClientHello at a random position within the Server Name Indication field.

When using a fixed-position strategy, set the _Split byte position_ (1–1500) to specify where the split occurs.

**HTTP request split** — splits HTTP requests into multiple TCP packets to bypass DPI systems that rely on inspecting complete HTTP requests.

**HTTP space juggling** — manipulates whitespace in HTTP requests to confuse DPI systems that parse HTTP headers, making it harder for them to identify and block specific traffic.

:::caution

This feature can break access to some unencrypted websites. If this feature is enabled in AdGuard for Windows, it may also interfere with the ESET antivirus — ESET will not be able to filter traffic, leaving some malicious or blocked websites accessible.

:::
