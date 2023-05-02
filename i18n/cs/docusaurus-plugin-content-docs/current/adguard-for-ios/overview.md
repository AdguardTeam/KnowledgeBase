---
title: Přehled funkcí
sidebar_position: 1
---

Pokud v App Store vyhledáte AdGuard, najdete dvě aplikace — [AdGuard](https://itunes.apple.com/app/id1047223162) a [AdGuard Pro](https://itunes.apple.com/app/id1126386264). Tyto aplikace jsou určeny k blokování reklam a slídičů v Safari, jiných prohlížečích a aplikacích a ke správě ochrany DNS. Nenechte se zmást jejich názvy, obě aplikace blokují reklamy v chytrých telefonech a tabletech společnosti Apple. Dříve se lišily funkcemi kvůli měnícím se pokynům pro hodnocení v App Store, ale nyní jsou tyto dvě aplikace [téměř stejné](https://adguard.com/en/blog/updating-adguard-pro-for-ios.html). Pokud jste si tedy zakoupili AdGuard Pro, není nutné stahovat AdGuard a kupovat licenci a naopak.

## Funkce {#features}

AdGuard a AdGuard Pro pro iOS nabízejí mnoho funkcí pro blokování reklam, slídičů a vytváření uživatelských pravidel v Safari i na úrovni sítě.

### Blokátory obsahu {#content-blockers}

Blokátory obsahu slouží jako "kontejnery" pro pravidla filtrování, která skutečně blokují reklamy a sledování. AdGuard pro iOS obsahuje šest blokátorů obsahu: Obecný, Soukromí, Sociální, Bezpečnostní, Vlastní a Ostatní. Dříve společnost Apple umožňovala, aby každý blokátor obsahu obsahoval maximálně 50 tisíc pravidel filtrování, ale po vydání systému iOS 15 se horní hranice posunula na 150 tisíc pravidel.

Všechny blokátory obsahu a jejich stavy, které tematické filtry aktuálně obsahují a celkový počet použitých pravidel filtrování najdete na příslušné obrazovce v *Pokročilých nastavení* (klepněte na ikonu ozubeného kola vpravo dole → *Obecné* → *Pokročilá nastavení* → *Blokátory obsahu*).

![Blokátory obsahu *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg)

> Tip: Pro nejlepší kvalitu filtrování ponechte všechny blokátory obsahu zapnuté.

### Filtry {#filters}

Činnost blokátorů obsahu je založena na filtrech, někdy také označovaných jako seznamy filtrů. Každý filtr je seznam pravidel filtrování. Pokud máte při procházení webu zapnutý blokátor reklam, neustále kontroluje navštívené stránky a prvky na nich podle těchto pravidel filtrování a blokuje vše, co jim odpovídá. Jsou vytvořena pravidla pro blokování reklam, slídičů a dalších.

Všechny filtry jsou seskupeny do tematických kategorií. Chcete-li zobrazit úplný seznam těchto kategorií (neplést si s blokátory obsahu), otevřete sekci *Ochrana* klepnutím na ikonu štítu a poté přejděte na *Ochrana Safari* → *Filtry*.

![Skupiny filtrů *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg)

Je jich osm a každá kategorie sdružuje několik filtrů, které mají společný účel, tj. blokování reklam, blokování widgetů sociálních sítí, upozornění na soubory cookies, ochranu uživatele před podvody online. Chcete-li se rozhodnout, které filtry vyhovují vašim potřebám, přečtěte si jejich popis a projděte štítky (`reklamy`, `soukromí`, `doporučeno` atd.).

> Více povolených filtrů nezaručuje, že bude méně reklam. Velký počet současně aktivovaných různých filtrů snižuje kvalitu blokování reklam.

> Kategorie Vlastní filtry je ve výchozím nastavení prázdná, aby do ní uživatelé mohli přidávat své filtry podle adresy URL. Filtry můžete nalézt na internetu nebo si je dokonce [vytvořit sami](/general/ad-filtering/create-own-filters).

### Uživatelská pravidla {#user-rules}

Zde můžete přidávat nová pravidla — buď je zadáte ručně, nebo použijete [nástroj pro ruční blokování AdGuard v Safari](#assistant). Pomocí tohoto nástroje můžete přizpůsobit filtrování Safari, aniž byste museli přidávat celý seznam filtrů.

> Naučte se, jak vytvořit [vlastní filtry reklam](/general/ad-filtering/create-own-filters). Upozorňujeme však, že mnohé z nich nebudou v Safari v iOS fungovat.

![Obrazovka uživatelských pravidel *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg)

### Seznam povolených {#allowlist}

Třetí část obrazovky *Ochrana Safari*. Pokud chcete vypnout blokování reklam na určité webové stránce, pomůže vám seznam povolených. Umožňuje přidávat domény a subdomény do výjimek. AdGuard pro iOS má funkci Import/Export, takže seznam povolených z jednoho zařízení lze snadno přenést do jiného.

### DNS ochrana {#dns-protection}

[Modul DNS ochrana](https://adguard-dns.io/kb/general/dns-filtering/) zlepšuje vaše soukromí šifrováním provozu DNS. Na rozdíl od blokování obsahu v Safari funguje DNS ochrana v celém systému, tj. i mimo Safari, v aplikacích a dalších prohlížečích. Před použitím tohoto modulu jej musíte povolit. Můžete to udělat na domovské obrazovce klepnutím na ikonu štítu v horní části obrazovky nebo přechodem na kartu *Ochrana* → *DNS ochrana*.

> Aby bylo možné spravovat nastavení DNS, vyžadují aplikace AdGuardu vytvoření lokální VPN. Provoz nebude směrován přes žádné vzdálené servery. Přesto vás systém požádá o potvrzení oprávnění k přístupu.

### DNS implementace {#dns-implementation}

![Obrazovka implementace DNS *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

Tato část má dvě možnosti: AdGuard a Nativní implementace. V podstatě se jedná o dva způsoby nastavení DNS.

V nativní implementaci se o DNS stará systém, nikoli aplikace. To znamená, že AdGuard nemusí vytvářet lokální VPN. Bohužel vám to nepomůže obejít systémová omezení a používat AdGuard spolu s jinými aplikacemi založenými na VPN — pokud je povolena jakákoli VPN, nativní DNS je ignorován. V důsledku toho nebudete moci filtrovat provoz lokálně ani používat náš zcela nový protokol [DNS-over-QUIC (DoQ)](https://adguard.com/en/blog/dns-over-quic.html).

### DNS servery {#dns-servers}

První část, která se zobrazí na obrazovce Ochrana DNS, je DNS server. Zobrazuje aktuálně vybraný DNS server a typ šifrování. Chcete-li některý z nich změnit, klepněte na tlačítko a přejděte na obrazovku DNS serveru.

![Servery DNS *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

Servery se liší rychlostí, použitým protokolem, důvěryhodností, zásadami protokolování atd. Ve výchozím nastavení nabídne AdGuard několik DNS serverů z těch nejoblíbenějších (včetně AdGuard DNS). Klepnutím na libovolný server změníte typ šifrování (pokud takovou možnost vlastník serveru poskytuje) nebo zobrazíte domovskou stránku serveru. Přidali jsme štítky jako `Bez zaznamenávání`, `Blokování reklam`, `Zabezpečení`, abychom vám usnadnili výběr.

V dolní části obrazovky je navíc možnost přidat vlastní DNS server. Podporuje běžné servery, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS a DNS-over-QUIC.

### Nastavení sítě {#network-settings}

![Obrazovka nastavení sítě *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Uživatelé mohou na obrazovce Nastavení sítě také řešit zabezpečení DNS. *Filtrovat mobilní data* a *Filtrovat Wi-Fi* zapnout nebo vypnout ochranu DNS pro příslušné typy sítí. Dále ve *výjimkách Wi-Fi* můžete vyloučit konkrétní sítě Wi-Fi z ochrany DNS (můžete například chtít vyloučit svou domácí síť, pokud používáte [AdGuard Home](https://adguard.com/en/adguard-home/overview.html)).

### DNS filtrování {#dns-filtering}

Abyste získali přístup k tomuto nastavení, je třeba na obrazovce *Obecná nastavení* zapnout *Pokročilý režim*. Poté se na obrazovce DNS ochrany zobrazí nová část. Klepnutím na ni můžete přizpůsobit provoz DNS použitím vlastních pravidel.

![Obrazovka DNS filtrování *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### DNS filtry {#dns-filters}

Podobně jako filtry v Safari jsou DNS filtry sadami pravidel zapsaných podle speciální [syntaxe](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard bude monitorovat provoz DNS a blokovat požadavky, které odpovídají jednomu nebo více pravidlům. Můžete použít filtry, jako je [filtr AdGuard DNS](https://github.com/AdguardTeam/AdguardSDNSFilter), nebo přidat soubory hosts jako filtry. Lze přidávat více filtrů současně. Chcete-li vědět, jak na to, seznamte se s touto [vyčerpávající příručkou](../solving-problems/system-wide-filtering).

#### Seznam povolených a seznam zakázaných {#allowlist-blocklist}

Kromě DNS filtrů můžete filtrování DNS cíleně ovlivnit přidáním jednotlivých domén do seznamu zakázaných nebo do seznamu povolených. Seznam zakázaných dokonce podporuje stejnou syntaxi DNS a oba tyto seznamy lze importovat a exportovat, stejně jako seznam povolených v aplikaci Safari pro blokování obsahu.

### Pokročilá ochrana {#advanced-protection}

V systému iOS 15 přidala společnost Apple podporu pro webová rozšíření Safari a my jsme zase přidali nový modul *Pokročilá ochrana* do AdGuardu pro iOS. Umožňuje AdGuardu aplikovat pokročilá pravidla filtrování, jako jsou pravidla CSS, selektory CSS a skriptlety, a poradit si tak i se složitými reklamami, jako jsou reklamy YouTube.

![Obrazovka pokročilé ochrany *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/protection_screen_15_en.jpeg)

Chcete-li zapnout *Pokročilou ochranu*, otevřete kartu *Ochrana* klepnutím na druhou ikonu vlevo dole na obrazovce, vyberte modul *Pokročilá ochrana*, aktivujte funkci přepnutím posuvníku a postupujte podle níže uvedených pokynů.

> *Pokročilá ochrana* funguje pouze v systému iOS 15 a novějším. Pokud používáte starší verze systému iOS, uvidíte v aplikaci modul *blokování reklam YouTube* namísto modulu *Pokročilá ochrana*.

![Obrazovka ochrany v systému iOS 14 a starších *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/protection_screen_14_en.jpeg)

### Kompatibilita s AdGuard VPN {#compatibility}

Ve většině případů blokátor reklam a aplikace VPN nemohou spolupracovat, protože existují určitá systémová omezení. Přesto se nám podařilo najít řešení, jak spřátelit [AdGuard VPN](https://adguard-vpn.com/) a blokátor reklam AdGuard. Pro vaše pohodlí jsme do sekce *Ochrana* přidali položku *AdGuard VPN*, takže můžete snadno přepínat mezi dvěma aplikacemi.

### Asistent {#assistant}

![Safari Assistant *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/assistant_en.jpeg)

Asistent je nástroj, který vám pomůže spravovat filtrování v Safari přímo z prohlížeče bez nutnosti přepínat zpět do aplikace.

Chcete-li jej zobrazit, postupujte takto: otevřete Safari a klepněte na symbol šipky v rámečku. Poté přejděte dolů na AdGuard/AdGuard Pro (v závislosti na aplikaci, kterou používáte) a klepnutím na něj zobrazte okno s několika možnostmi:

1. **Povolit na této stránce.** Chcete-li přidat aktuální doménu do seznamu povolených, vypněte přepínač.
2. **Blokovat prvek na této stránce.** Klepnutím na to přejdete do režimu "Blokovat prvek": vyberte libovolný prvek na stránce, upravte velikost klepnutím na "+" nebo "-", v případě potřeby zobrazte náhled a potvrďte klepnutím na ikonu zaškrtnutí. Vybraný prvek bude na stránce skryt a do uživatelských pravidel bude přidáno odpovídající pravidlo. Chcete-li změnu vrátit, odstraňte to nebo vypněte.
3. **Nahlásit problém na této stránce.** Otevře webový nástroj pro hlášení chyb, který vám pomůže odeslat hlášení našemu týmu podpory pomocí několika klepnutí. Použijte to, pokud jste si všimli nezablokované reklamy nebo nesprávného blokování na stránce.

> Na zařízeních se systémem iOS 15 jsou funkce asistenta dostupné prostřednictvím [Rozšíření AdGuard Safari Web](../web-extension), které vylepšuje možnosti AdGuardu pro iOS a umožňuje využívat výhod iOS 15. Pomocí tohoto webového rozšíření může AdGuard používat pokročilá pravidla filtrování, a tím blokovat více reklam.

### Aktivita {#activity}

Toto je "informační centrum" sady DNS ochrany AdGuardu. Můžete na něj rychle přepnout klepnutím na třetí ikonu v řadě ve spodní části obrazovky. Pozn. tato obrazovka se zobrazí pouze v případě, že je zapnuta DNS ochrana.

![Obrazovka aktivity *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/activity_en.jpeg)

Zde AdGuard zobrazuje statistiky o požadavcích DNS zařízení, například celkový počet, počet šifrovaných požadavků a průměrnou dobu zpracování. AdGuard může zobrazit statistiky za den, týden, měsíc nebo celkově.

Níže je uvedena stránka *Nedávná aktivita*. AdGuard ukládá posledních 1500 DNS požadavků, které byly odeslány z vašeho zařízení a zobrazuje jejich atributy, například typ protokolu a cílovou doménu.

> AdGuard tyto informace nikam neodesílá. Tyto informace jsou 100% ukládány ve vašem zařízení.

Klepnutím na libovolný požadavek zobrazíte další podrobnosti. K dispozici budou také tlačítka pro přidání požadavku do seznamu blokovaných/povolených jedním klepnutím.

![Podrobnosti požadavků *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/request_info_en.jpeg)

Nad stránkou aktivit jsou *Nejaktivnější společnosti*. Zde jsou uvedeny souhrnné údaje z posledních 1500 požadavků.

### Statistiky {#statistics}

Kromě obrazovky *Aktivita* najdete globální statistiky na domovské obrazovce a na widgetech.

## Nízkoúrovňová nastavení {#low-level-settings}

![Nízkoúrovňová nastavení *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

Chcete-li otevřít *Nízkoúrovňová nastavení*, přejděte do *Nastavení* → *Obecné* → (Aktivujte *Pokročilý režim*, pokud je vypnutý) → *Pokročilá nastavení* → *Nízkoúrovňová nastavení*.

Nastavení v této části je většinou lepší ponechat beze změny: používejte je pouze v případě, že jste si jisti tím, co děláte, nebo pokud vás o to požádal tým podpory. Některá nastavení však lze změnit bez jakéhokoli rizika.

### Blokování IPv6 {#blockipv6}

Na každý dotaz DNS odeslaný za účelem získání adresy IPv6 vrátí naše aplikace prázdnou odpověď (jako by tato adresa IPv6 neexistovala). Nyní existuje možnost nevracet adresy IPv6. Na tomto místě se popis této funkce stává příliš technickým: konfigurace nebo zakázání protokolu IPv6 je výhradní doménou pokročilých uživatelů. Pokud patříte mezi ně, bude dobré vědět, že tuto funkci nyní máme, pokud ne – není třeba se do ní nořit.

### Bootstrap a záložní servery {#bootstrap-fallback}

Záložní server je záložní DNS server. Pokud jste vybrali DNS server a něco se s ním stalo, je třeba nastavit záložní server DNS, dokud hlavní server neodpoví.

S Bootstrap serverem je to trochu složitější. Aby mohl AdGuard pro iOS používat vlastní zabezpečený DNS server, musí naše aplikace nejprve získat jeho IP adresu. K tomuto účelu se ve výchozím nastavení používá systém DNS, ale někdy to z různých důvodů není možné. V takových případech lze k získání IP adresy vybraného zabezpečeného serveru DNS použít Bootstrap. Zde jsou dva příklady, které ilustrují, kdy může pomoci vlastní server Bootstrap:
1. Pokud výchozí systémový DNS server nevrací IP adresu zabezpečeného serveru DNS a není možné použít zabezpečený server.
2. Pokud se současně používá naše aplikace a síť VPN třetí strany a není možné použít systémový DNS jako Bootstrap.

## Další funkce {#other-features}

Blokování obsahu Safari a DNS ochrana jsou nesporně dva hlavní moduly AdGuardu/AdGuardu Pro, ale existují i další drobné funkce, které nespadají přímo do jednoho z nich, ale přesto mohou být užitečné a stojí za to o nich vědět.

- **Tmavý motiv**

![Světlý motiv *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/main_screen_en.jpeg)

![Tmavý motiv *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/main_screen_dark_en.jpeg)

Toto nastavení, které se nachází přímo v horní části obrazovky **Nastavení** → **Obecné**, umožňuje přepínat mezi tmavým a světlým motivem.

- **Widgety**

![Widgety *mobile](https://cdn.adtidy.org/public/Adguard/Release_notes/iOS/v4.0/widget_en.jpg)

AdGuard podporuje widgety, které umožňují rychlý přístup k přepínačům blokování obsahu Safari a DNS ochrany a také zobrazují globální statistiky požadavků.

- **Automatická aktualizace pouze přes Wi-Fi**

Pokud je toto nastavení zapnuto, AdGuard použije pro aktualizace filtrů na pozadí pouze Wi-Fi.

- **Invertování seznamu povolených**

Alternativní režim pro filtrování Safari, který odblokuje reklamy všude kromě zadaných webových stránek ze seznamu. Ve výchozím nastavení je funkce vypnuta.

- **Pokročilý režim**

Kromě odemknutí **DNS filtrování**, poskytuje přístup k **Pokročilým nastavením**. Nedoporučujeme s nimi manipulovat, pokud nevíte, co děláte, nebo pokud jste se nejprve neporadili s technickou podporou.

- **Vynulování statistik**

Tato akce vymaže všechny statistické údaje, například počet požadavků atd.

- **Resetování nastavení**

Tato možnost resetuje všechna vaše nastavení.

- **Podpora**

Pomocí této možnosti můžete kontaktovat podporu, nahlásit nezablokovanou reklamu (pro vlastní pohodlí však doporučujeme použít Asistenta nebo webové rozšíření AdGuardu pro Safari), exportovat záznamy nebo zadat požadavek na funkci.

- **Informace**

Obsahuje aktuální verzi aplikace a řadu zřídka potřebných možností a odkazů.
