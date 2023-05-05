---
title: Přehled funkcí
sidebar_position: 1
---

AdGuard pro Windows je snadno použitelný nástroj, který blokuje otravné bannery, vyskakovací okna, videoreklamy a slídiče. To ale není vše: pomáhá šetřit data, rychleji načítat webové stránky a chránit počítač před nežádoucím a potenciálně škodlivými weby. AdGuard vás také chrání před krádeží identity a chrání vaše děti před nevhodným obsahem.

## Domovská obrazovka

![Main screen *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/home-screen.png)

Po spuštění AdGuardu pro Windows se zobrazí domovská obrazovka aplikace. Nejvýraznějším detailem je tlačítko *zapnutí/vypnutí ochrany*. Na této obrazovce můžete také sledovat statistiky blokovaných reklam, slídičů a hrozeb, zjistit aktuální verzi aplikace nebo ji aktualizovat. Dále jsou v pravém horním rohu čtyři karty: *Nastavení*, *Podpora*, *Licence* a *O programu*. O každé z nich stojí za to mluvit zvlášť.

## Nastavení

![Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/settings.png)

*Nastavení* je část, která vyžaduje největší pozornost. Zde můžete program nakonfigurovat tak, aby plně vyhovoval vašim požadavkům: blokujte pouze to, co vám vadí, používejte DNS server důvěryhodného poskytovatele, odstraňujte soubory cookies třetích stran atd.

### Obecná nastavení

Zde můžete nastavit jazyk a motiv (tmavý nebo světlý), povolit spouštění AdGuardu při startu systému a tiché automatické aktualizace, vybrat aktualizační kanál a interval kontroly aktualizací filtrů. Nastavení je také místo, kam jít, pokud AdGuard pro Windows nefunguje správně a tým podpory vás požádal o [shromáždění *záznamů ladění*](../solving-problems/adguard-logs).

![Advanced Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/advanced-settings.png)

Úplně dole na obrazovce najdete *Pokročilá nastavení*. Bezmyšlenkovitá změna některých z nich může potenciálně způsobit problémy s výkonem AdGuardu, přerušit internetové připojení nebo ohrozit vaši bezpečnost a soukromí. Tuto část byste měli otevřít pouze v případě, že jste si jisti tím, co děláte, nebo pokud se vás na to zeptal náš tým podpory. Pokud chcete porozumět tomu, co lze nastavit v *Pokročilých nastavení*, přečtěte si [vyhrazený článek](../solving-problems/low-level-settings).

### Blokátor reklam

Jedná se o hlavní modul AdGuardu pro Windows, který odstraňuje reklamy z navštívených webových stránek a aplikací nainstalovaných v zařízení. K filtrování reklam a obsahu ohrožujícího soukromí, jako jsou bannery, vyskakovací okna nebo slídiče, používá AdGuard různé filtry: skupiny pravidel s podobným účelem zapsané pomocí [speciální syntaxe](/general/ad-filtering/create-own-filters). Chcete-li pochopit, co jsou to filtry a jak fungují, přečtěte si [tento článek](/general/ad-filtering/how-ad-blocking-works).

![Ad Blocker *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/ad-blocker.png)

V modulu Blokátor reklam můžete:
* povolit automatickou aktivaci jazykově specifických filtrů,
* zakázat [reklamy ve vyhledávání a blokování vlastní propagace](/general/ad-filtering/search-ads),
* aktivovat předinstalované filtry, jako je *AdGuard Base filtr*,
* instalovat filtry ze seznamu nebo přidat vlastní filtr kliknutím na tlačítko *Přidat filtr*,
* provádět změny ve stávajících skupinách pravidel pomocí tlačítka *Editor filtrů*,
* zobrazit všechny požadavky odeslané prohlížeči a aplikacemi nainstalovanými v počítači kliknutím na tlačítko *Záznam filtrování*. Zde můžete také zablokovat nebo odblokovat jakýkoli požadavek vytvořením vlastního pravidla,
* vytvořit filtr z vlastních pravidel napsaných ručně, importovaných nebo vytvořených pomocí rozšíření AdGuard Assistant.

Než začnete ručně psát svá vlastní pravidla, přečtěte si našeho podrobného [průvodce syntaxí](/general/ad-filtering/create-own-filters).

### Režim utajení

Mnoho webových stránek shromažďuje informace o svých návštěvnících, například jejich IP adresy, informace o nainstalovaném prohlížeči a operačním systému, rozlišení obrazovky, a dokonce i o tom, na jakou stránku uživatel přišel nebo z jaké stránky byl přesměrován. Některé webové stránky používají soubory cookies k označení prohlížeče a uložení vašich osobních nastavení, uživatelských preferencí nebo k vašemu "rozpoznání" při příští návštěvě. Režim utajení chrání vaše osobní údaje před takovými systémy sběru dat a statistik.

![Stealth Mode *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/stealth-mode.png)

Práci v Režimu utajení můžete flexibilně nastavit: můžete například zakázat, aby webová stránka obdržela požadavek na vyhledávání, který jste použili k jejímu nalezení na internetu, automaticky vymazat soubory cookies třetích stran i vlastní soubory cookies webové stránky a zakázat sdílení polohy ve vašem prohlížeči, které lze použít ke sledování vaší polohy.

Chcete-li se dozvědět vše o Režimu utajení a jeho mnoha možnostech, [přečtěte si tento článek](/general/stealth-mode).

### Bezpečné prohlížení

Bezpečné prohlížení poskytuje silnou ochranu před škodlivými stránkami a krádeží identtity. Ne, AdGuard pro Windows není antivir. Nezastaví stahování viru, pokud již bylo zahájeno, ani neodstraní již existující viry. Upozorní vás však, pokud se chystáte přejít na webovou stránku, jejíž doména byla přidána do naší databáze "nedůvěryhodných stránek", nebo stáhnout soubor z takové webové stránky. Více informací o fungování tohoto modulu najdete ve [vyhrazeném článku](/general/browsing-security).

V tomto modulu můžete
* povolit oznámení pro blokování požadavků na nebezpečné stránky,
* aktivovat zvukové oznámení,
* souhlasit s odesláním anonymních informací na server AdGuardu souvisejících se zabezpečením, které nám pomohou udržovat databázi nebezpečných webů aktuální.

![Browsing Security *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/browsing-security.png)

Pokud se chcete dozvědět více o Bezpečném prohlížení, přečtěte si [tento článek](/general/browsing-security).

### DNS ochrana

Existují tři důležité důvody, proč byste měli prozkoumat nastavení DNS ochrany. Zaprvé, abyste se vyhnuli sledování ISP. Pokaždé, když otevřete webovou stránku, například `google.com`, váš prohlížeč odešle požadavek na DNS server, aby na oplátku získal IP adresu webové stránky. DNS server obvykle patří vašemu poskytovateli internetových služeb, který tak může sledovat vaši online aktivitu. Za druhé, šifrování DNS provozu. A zatřetí [blokování obsahu na úrovni DNS](https://adguard-dns.io/kb/general/dns-filtering/).

![DNS Protection *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/dns-settings.png)

V modulu DNS ochrany AdGuardu pro Windows můžete vybrat DNS servery od známých poskytovatelů DNS, včetně [AdGuard DNS](https://adguard-dns.io/kb/), který blokuje reklamy a slídiče, AdGuard DNS Ochrana rodiny, který navíc blokuje obsah pro dospělé, nebo AdGuard DNS - bez filtrování, který poskytuje bezpečné a spolehlivé připojení, ale nic nefiltruje. Můžete dokonce přidat vlastní DNS servery. Existuje také možnost přidat vlastní pravidla pomocí [syntaxe pravidel DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/). Nakonec můžete přidat [DNS filtry podle vlastního výběru](https://filterlists.com).

### Rodičovská ochrana

Existuje řada webových stránek, k nimž by měl být omezen přístup, pokud počítač používají děti. Tento úkol zajišťuje Rodičovská ochrana.

![Parental Control *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

Modul kontroluje obsah webových stránek otevřených v prohlížeči a filtruje ty, jejichž obsah je pro děti nežádoucí: obrázky a texty pro dospělé, hrubý jazyk, násilí, propagace drog atd. Nastavení Rodičovské ochrany jsou zabezpečena heslem, takže dítě nemůže obejít omezení. Tento modul nejenže blokuje vstup na nežádoucí stránky, ale také dokáže z výsledků vyhledávání odstranit odkazy, které jsou nevhodné pro děti.

V modulu Rodičovská ochrana můžete povolit *Bezpečné vyhledávání*, spravovat *seznam zakázaných*, *seznam povolených* a přizpůsobit si funkce těchto možností. Můžete také zaškrtnout políčko *Blokovat stahování spustitelných souborů* a zabránit tak vašemu dítěti ve stahování a instalaci softwaru do PC. V modulu *Rodičovská ochrana* jsou další dvě možnosti: můžete vybrat konkrétního uživatele Windows, který má být chráněn *Rodičovskou ochranou* a nastavit heslo pro zabezpečení nastavení AdGuardu před změnami.

![Parental Control *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/parental-control.png)

### Asistent prohlížeče

![Browser Assistant *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/browser-assistant/browser-assistant.png)

Z této záložky můžete snadno přejít k instalaci Asistenta prohlížeče AdGuard, jehož primární funkcí je správa filtrování přímo z prohlížeče. Více informací o tom, jak s ním pracovat a co dělat, pokud pro váš prohlížeč není k dispozici Asistent prohlížeče, jsme si vysvětlili v [samostatném článku](../browser-assistant).

## Rozšíření

AdGuard dokáže výrazně rozšířit funkčnost webových stránek a funguje jako [správce uživatelských skriptů](/general/userscripts). Uživatelé AdGuardu mohou přidávat své vlastní skripty a také spravovat stávající.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/userscripts.png)

**Automatické rozpoznání uživatelských skriptů**

Pokud je tato možnost povolena, AdGuard automaticky definuje dotazy prohlížeče na uživatelské skripty a navrhne jejich instalaci. Jinak lze rozšíření stáhnout a nainstalovat ručně.

S AdGuardem jsou nainstalována následující rozšíření:

![Preinstalled userscripts *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/preinstalled-userscripts.png)

**AdGuard asistent**

AdGuard asistent je starší asistent, kterého můžete použít, pokud není pro váš prohlížeč k dispozici [nový asistent](../browser-assistant). Název tohoto rozšíření je zcela záměrný: ve skutečnosti pomáhá uživateli měnit základní nastavení AdGuardu přímo v prohlížeči, aniž by bylo nutné otevírat samotnou aplikaci. AdGuard asistent funguje se všemi prohlížeči kompatibilními s Microsoft Windows. Kromě toho se ikona AdGuard asistenta nezobrazí na webových stránkách, které uživatel uvedl jako výjimky a na některých webových stránkách, kde hrozí riziko zobrazení nesprávného obsahu.

**AdGuard Extra**

Jedná se o vlastní rozšíření určené k boji proti technice opětovného vkládání blokovaných reklam — tzv. obcházení blokátorů reklam/opětovnému vkládání reklam. V obou případech se jedná o pokročilé metody proti blokování reklam, jejichž obliba mezi inzerenty stále roste.

AdGuard Extra je v podstatě miniprogram, který mění způsob, jakým stránky fungují a to takovým způsobem, že je pro weby mnohem obtížnější používat výše uvedené funkce k obcházení blokátorů.

**AdGuard blokátor vyskakovacích oken**

Toto rozšíření zabraňuje otevírání vyskakovacích oken při prohlížení webových stránek. Některá vyskakovací okna jsou považována za užitečná – mohou obsahovat nastavení pro správu webu nebo další referenční informace zobrazené po kliknutí na odkaz. Proto můžete blokátor v případě potřeby vypnout. Toto rozšíření nefunguje ani na webových stránkách přidaných do seznamu výjimek AdGuardu. Ve výchozím nastavení je vypnuto, ale můžete jej zapnout v nastavení aplikace. Podrobnější informace o tomto rozšíření najdete v naší databázi znalostí.

**Web of Trust**

Web of Trust vám umožňuje zjistit pověst každého webu na základě názorů jeho uživatelů. Stránky jsou hodnoceny podle řady specifických kritérií: důvěryhodnost, bezpečnost atd. Toto rozšíření je ve výchozím nastavení vypnuto, ale můžete jej zapnout v nastavení aplikace. Upozorňujeme, že AdGuard není vývojářem tohoto rozšíření.

### Síť

Předposlední modul je věnován filtrování sítě a najdete v něm další možnosti související se sítí. Dvě z nich jsou standardně povoleny: *Povolit filtrování provozu* a *Filtrovat HTTPS protokol*. Jedná se o důležitá dodatečná opatření pro lepší filtrování webového prostoru. Většina webů nyní používá protokol HTTPS a totéž platí i pro reklamu. Z mnoha webů, jako je youtube.com, facebook.com a twitter.com, není možné odstranit reklamy bez HTTPS filtrování. Pokud tedy nemáte pádný důvod, ponechte funkci *Filtrovat HTTPS protokol* povolenou.

![Network Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

V tomto modulu můžete zaškrtnout políčko "Použít AdGuard jako HTTP proxy", chcete-li použít AdGuard jako běžný HTTP proxy, který bude filtrovat veškerý procházející provoz. Můžete také povolit funkci *Filtrovat webové stránky s certifikáty EV*. Certifikáty SSL s rozšířeným ověřením (Extended Validation, EV) poskytují silnější bezpečnostní záruku; majitelé těchto webových stránek musí projít důkladným a celosvětově standardizovaným procesem ověřování identity definovaným v pokynech pro EV. To je důvod, proč někteří uživatelé webovým stránkám s takovými certifikáty důvěřují a raději je nefiltrují.

Nakonec je zde část s nastavením proxy. Zde můžete určit, který proxy má AdGuard používat k aktualizaci filtrů, získávání nových verzí atd.

### AdGuard VPN

Poslední část je věnována AdGuard VPN — ideálnímu nástroji, který poskytuje bezpečnost a anonymitu při každém procházení internetu. Můžete si ji stáhnout kliknutím na tlačítko *Stáhnout* nebo přejít na webové stránky AdGuard VPN kliknutím na tlačítko *Domovská stránka*.

Jak funguje AdGuard VPN? Aniž bychom zacházeli do technických podrobností, můžeme říci, že VPN vytváří bezpečný šifrovaný tunel mezi počítačem nebo mobilním zařízením uživatele a vzdáleným serverem VPN. Tímto způsobem je zachována důvěrnost dat i anonymita uživatele, protože pozorovatel třetí strany vidí IP adresu serveru VPN, a nikoli skutečnou IP adresu uživatele.

**Co může AdGuard VPN dělat:**

* skrývá vaše skutečné místo pobytu a pomáhá vám zůstat v anonymitě
* změní vaši IP adresu a ochrání vaše data před sledováním
* zašifruje váš provoz, aby byl pro podvodníky nedostupný
* umožňuje nastavit, kde se má VPN používat a kde ne (funkce výjimek)

Chcete-li získat více informací o AdGuard VPN, ponořte se do [databáze znalostí AdGuard VPN](https://adguard-vpn.com/kb/).

## Ostatní

Existují i další užitečné možnosti AdGuardu, které by v tomto článku neměly zůstat nepovšimnuty, protože výrazně přispívají k uživatelskému komfortu.

### Podpora

![Support *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/support.png)

Kliknutím na kartu Podpora otevřete dialogové okno, ve kterém můžete nahlásit chybu, odeslat požadavek na funkci nebo se jednoduše podělit o svůj názor na produkt.

### Licence

![License *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/license.png)

Tato karta obsahuje informace o vaší licenci. Zde můžete:
* zjistit typ licence (nightly, beta nebo stabilní), počet zařízení dostupných pro současné připojení k AdGuardu, datum vypršení platnosti licence;
* kliknutím na tlačítko můžete přejít na stránku nákupu licence, aktivaci, reset nebo obnovení licence.

### Informace

![About *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/about.png)

Kromě informací o aktuální verzi programu jsou na této kartě k dispozici užitečné odkazy na Licenční smlouvu, Zásady ochrany osobních údajů, Poděkování, Diskuzi a Historii verzí.

### Zkontrolovat aktualizace

![Check for updates *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/check-updates.png)

Chcete-li zkontrolovat aktualizace filtrů a uživatelských skriptů, klikněte na ikonu rotujících šipek v pravém horním rohu domovské stránky programu.

### Nabídka přihrádky

Abyste ušetřili čas při navigaci v nabídkách AdGuardu, je mnoho často používaných možností a nastavení k dispozici v nabídce přihrádky. Chcete-li vyvolat tuto nabídku, klepněte pravým tlačítkem myši na ikonu AdGuardu na hlavním panelu. Nabídne vám následující možnosti:

* zapnout ochranu
* vypnout ochranu: zcela nebo na 30 sekund
* přejít do *Nastavení*
* otevřít menu *Nástroje* a *Pokročilé*
* zkontrolovat aktualizace filtrů
* zkontrolovat aktualizace aplikace
* vyvolatí poslední vyskakovací zprávy
* dosáhnout na *Podporu* a *Informace*
* zavřít AdGuard, ale pokračovat ve filtrování
* ukončit AdGuard
