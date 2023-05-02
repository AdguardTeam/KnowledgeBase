---
title: Problémy kompatibility s různými verzemi macOS
sidebar_position: 4
---

## Současné problémy

Společnost Apple každý rok vydává novou verzi systému macOS, která přináší inovativní řešení a přidává nové užitečné funkce. Některé z nich, například Network Extensions API (Big Sur) nebo iCloud Private Relay (Monterey), však způsobují problémy mnoha aplikacím, přičemž AdGuard není výjimkou. V tomto článku probereme známé problémy specifické pro jednotlivé verze systému macOS a možné způsoby jejich řešení.

### Monterey 12: současné problémy

Tyto problémy společnost Apple zatím neodstranila nebo je odstranila jen částečně.

#### Kompatibilita s iCloud Private Relay

V současné době nemohou AdGuard a iCloud Private Relay fungovat současně. AdGuard nemá možnost blokovat reklamy, protože iCloud Private Relay šifruje provoz předtím, než AdGuard může filtrovat síťová připojení. Když je iCloud Private Relay aktivní, není možné žádné filtrování (včetně lokálního). AdGuard tedy nemůže v Safari filtrovat přenosy ani provádět DNS filtrování. Proto AdGuard ve výchozím nastavení používá "výchozí směrování", které vypíná iCloud Private Relay.

Hlubší pochopení tohoto problému naleznete v [ tomto článku](../icloud-private-relay).

**Doporučené řešení**

Doporučujeme používat AdGuard společně s tradičnější službou VPN, např. [AdGuard VPN](https://adguard-vpn.com/).

**Alternativní řešení**

Můžete zabránit tomu, aby AdGuard používal "výchozí směrování" tím, že jej deaktivujete. Lze to provést přes Pokročilá nastavení → `network.extension.monterey.force.split.tunnel`. Všimněte si, že zapnutí tohoto nastavení způsobí výše popsané problémy.

![Pokročilá nastavení *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

#### Kompatibilita s Protect Mail Activity

Aplikace Apple Mail nyní používá proxy ke skrytí IP adresy uživatele při stahování obrázků z e-mailů. To však nebude fungovat, pokud je aktivní připojení VPN. Vzhledem k tomu, že AdGuard chová jako VPN, nebude automaticky přednačítat obrázky.

Hlubší pochopení tohoto problému naleznete v [ tomto článku](../protect-mail-activity).

**Doporučené řešení**

V tuto chvíli doporučujeme místo nových funkcí ochrany osobních údajů Apple používat tradičnější službu VPN, například AdGuard VPN.

### Monterey 12, Big Sur 11.6 a novější: současné problémy

Tyto problémy společnost Apple zatím neodstranila nebo je odstranila jen částečně.

#### Kompatibilita s Cisco AnyConnect

AdGuard nebude fungovat společně s Cisco AnyConnect v režimu *Rozšíření sítě*. Musíte přepnout AdGuard do režimu *Automatický proxy*. Chcete-li tak učinit, postupujte podle [těchto pokynů](#automatic-proxy).


#### Kompatibilita s Flutter

> Tento problém je vyřešen ve Flutter 2.2, který byl vydán v červnu 2021. Pro opravu aplikací vyvinutých ve Flutteru je však třeba počkat na aktualizace. Používáte-li Flutter spolu s AdGuardem v režimu "Rozšíření sítě" (nebo s jinou aplikací typu "Transparentní proxy") v Monterey nebo Big Sur, narazíte na problémy: projekty se nebudou otevírat a Flutter bude fakticky nefunkční. Tuto chybu jsme již nahlásili společnosti Apple. Mezitím můžete použít tato dočasná řešení:

1) Použijte AdGuard v režimu [Automatický proxy](#automatic-proxy).

2) Vypněte SIP a přepnněte AdGuard do režimu rozšíření jádra, jak je vysvětleno [zde](#kernel-extension).

#### Aplikace VPN se starším rozhraním API

Přestože je AdGuard v nastavení systému zobrazen jako VPN, neměl by při práci s jinými aplikacemi založenými na VPN způsobovat žádné konflikty. Pokud však používáte aplikaci založenou na VPN, která byla stažena mimo App Store, je možné, že používá staré rozhraní API VPN a je nutné ji z filtrování vyloučit:

1) Otevřete menu AdGuardu. 2) Vyberte *Předvolby...*. 3) Přepněte na kartu *Síť*. 4) Klikněte na tlačítko *Aplikace...*. 5) Vyhledejte aplikaci, kterou chcete vyloučit, a zrušte zaškrtnutí políčka vedle ní.

![Filtrované aplikace](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## Již vyřešené problémy

Tyto problémy již společnost Apple odstranila, ale ve starších verzích systému macOS Big Sur se s nimi můžete setkat.

### Kompatibilita s Little Snitch 5

V tuto chvíli není režim Rozšíření sítě v AdGuardu kompatibilní s [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html). Pokud jsou spuštěny obě aplikace, můžete se setkat s problémy s chováním různých aplikací, i když nejsou AdGuardem filtrovány. Tento problém je přímo způsoben chybou v Big Sur a společnost Apple jsme o něm již informovali. To nás vede k domněnce, že tento problém bude vyřešen v některé z příštích aktualizací.

Je třeba říci, že tento problém nelze vyřešit vypnutím monitorování připojení v aplikaci Little Snitch, protože tato akce neodstraní rozšíření aplikace Little Snitch ze systému. Doporučujeme přepnout na režim filtrování [**Automatiký proxy**](#automatic-proxy) při spuštění AdGuardu spolu s Little Snitch na Big Sur, alespoň dokud Apple chybu neopraví.

### Kompatibilita s lokálními proxy

> Poznámka: AdGuard nyní dokáže (většinou) bez problémů filtrovat místní proxy. Pokud se setkáte s problémy ve verzích operačního systému 11.1+ nebo pokud používáte Big Sur 11.0, odeberte místní proxy z nastavení systému a nakonfigurujte v AdGuardu odchozí proxy podle níže uvedených pokynů.

Chcete-li nakonfigurovat odchozí proxy v AdGuardi pro Mac v Big Sur, musíte jít do nabídky *AdGuard → Pokročilé → Pokročilá nastavení...*. Kliknutím na oblast *Hodnota* v nastavení `upstream.proxy` nakonfigurujte proxy.

![Nastavení proxy v AdGuardu pro Mac na Big Sur](https://cdn.adtidy.org/content/kb/ad_blocker/mac/proxy_en.jpg)

Zadejte řetězec, který vypadá jako `scheme://user:password@host:port`, kde

* `scheme` je buď `http`, `https`, `socks4` nebo `socks5`, v závislosti na typu vašeho proxy,

> Pokud používáte typ proxy `socks5`, nastavte hodnotu `upstream.proxy.socks5udp` na `true`, aby AdGuard směroval provoz UDP na proxy.

* `user` a `password` jsou odpovídající uživatelské jméno a heslo vašeho proxy (je-li potřeba). Ignorujte jedno z nich nebo obě, pokud nejsou použitelné,
* `hosts` je IP adresa vašeho proxy,
* `port` je požadované číslo portu, které má proxy používat.

> Příklad: `socks5://localhost:6322` nakonfiguruje lokální proxy SOCKS5, který naslouchá portu 6322 a nevyžaduje uživatelské jméno ani heslo.

Klikněte na *Použít*, aby AdGuard směroval veškerý provoz, který přes něj prošel na nakonfigurovaný proxy.

Pokud narazíte na nějaké problémy, kontaktujte naši technickou podporu na adrese support@adguard.com.

#### Příklad 1: Konfigurace odchozího proxy Shadowsocks

Zde je příklad, jak nakonfigurovat odchozí proxy pro [Shadowsocks](https://shadowsocks.org).

Především potřebujete funkční server na straně proxy. S největší pravděpodobností byste k jeho nastavení použili soubor JSON, jako je tento (zde byly náhodně vybrány hodnoty `server` a `password`):

```
{
   "server":"111.222.333.444",
   "server_port":8388,
   "local_port":1080,
   "password":"barfoo!",
   "timeout":600,
   "method":"chacha20-ietf-poly1305"
}
```

> Více informací o tom, jak začít, najdete na webu [Shadowsocks](https://shadowsocks.org/guide/what-is-shadowsocks.html).

Pak byste museli do Macu nainstalovat klienta Shadowsocks. Ujistěte se, že jste v jeho nastavení zvolili "Manuální režim" nebo "Automatický režim"! Konfigurace nebude fungovat, pokud vyberete "Globální režim" (nebo "Automatický režim" ve verzích Big Sur před verzí 11.1).

![Vyberte Manuální režim nebo Automatický režim v nastavení *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

Nyní přejděte do nabídky *AdGuard → Pokročilé → Pokročilá nastavení...* a nastavte oblast *Hodnota* v nastavení `upstream.proxy` na `socks5://localhost:1080`. Všimněte si, že zde musíte použít hodnotu "local_port" ze souboru JSON.

Protože Shadowsocks používá SOCKS5, musíte také nastavit hodnotu nastavení `upstream.proxy.socks5udp` v pokročilých nastaveních AdGuardu na `true`, aby AdGuard směroval provoz UDP na proxy.

#### Příklad 2: Konfigurace odchozího proxy Surge

V Big Sur v11.1+ nejsou známy žádné konflikty mezi AdGuardem a proxy Surge. Používáte-li starší verzi Big Sur (před verzí 11.1), zkontrolujte, zda je v pravém dolním rohu vypnutá možnost **Systémový proxy**. V opačném případě nebude Surge s AdGuardem fungovat. Na druhou stranu, **Vylepšený režim** lze povolit, aniž by to způsobilo konflikt v jakékoli verzi Big Sur.

![Konfigurace odchozího proxy Surge *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/surge.jpg)

Nyní přejděte do nabídky *AdGuard → Pokročilé → Pokročilá nastavení...* a nastavte oblast *Hodnota* v nastavení `upstream.proxy` na `socks5://localhost:6153` nebo `http://localhost:6152`, podle toho, jaký typ proxy chcete použít. Všimněte si, že je třeba použít hodnotu **portu**, která je uvedena v oblasti **Události** na kartě **Aktivita** v klientovi Surge.

Pokud vyberete SOCKS5, musíte také nastavit hodnotu nastavení `upstream.proxy.socks5udp` v pokročilých nastaveních AdGuardu na `true`, aby AdGuard směroval provoz UDP na proxy.

## Alternativy k použití Rozšíření sítě

Není možné předvídat všechny možné problémy, které se mohou v Big Sur nebo Monterey vyskytnout, existuje nespočet různých konfigurací hardwaru/softwaru a nastavení. Pokud se setkáte s problémy s kompatibilitou, kontaktujte náš tým podpory, ale nejprve vyzkoušejte jedno z těchto řešení.

### Použijte režim filtrování "Automatický proxy" {#automatic-proxy}

Pokud se v Big Sur nebo Monterey setkáte s problémy, které nelze vyřešit žádnou z výše uvedených metod, můžete zkusit přepnout AdGuard do režimu *Automatický proxy*.

1) Otevřete menu AdGuardu. 2) Vyberte *Předvolby...*. 3) Přepněte na kartu *Síť*. 4) Klikněte na tlačítko *Vybrat režim...*. 5) Vyberte *Automatický proxy*.

![Přepněte AdGuard do automatického proxy režimu](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

Nyní AdGuard automaticky přidal soubor **.pac** do síťových nastavení vašeho Macu, takže systém bude považovat AdGuard za proxy a bude se snažit posílat veškerý provoz přes AdGuard.

> Počítejte s tím, že některé aplikace mohou toto nastavení systému ignorovat a jejich provoz nebude filtrován.

### Zapnutí režimu Rozšíření jádra v Big Sur a Monterey {#kernel-extension}

Ve výchozím nastavení používá AdGuard v Big Sur a Monterey rámec Rozšíření sítě, protože starý rámec Rozšíření jádra je zde zakázán. To může způsobit určité problémy s kompatibilitou, ale abyste mohli Rozšíření jádra povolit zpět, musíte nejprve vypnout ochranu integrity systému (SIP). Chcete-li zakázat SIP, postupujte podle tohoto návodu:

1) Klikněte na symbol *Apple* v menu. 2) Klikněte na *Restartovat…* 3) Podržte *Command-R* pro restartování do režimu obnovy. 4) Klikněte na *Nástroje*. 5) Vyberte *Terminal*. 6) Napište `csrutil disable`. 7) Stiskněte *Return* nebo *Enter* na klávesnici. 8) Klikněte na symbol *Apple* v menu. 9) Klikněte na *Restartovat*

Nyní, když je SIP zakázáno, povolíte rozšíření jádra tímto způsobem:

![Povolení rozšíření jádra](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1) Otevřete menu AdGuardu. 2) Vyberte *Předvolby...*. 3) Přepněte na kartu *Síť*. 4) Klikněte na tlačítko *Vybrat režim...*. 5) Vyberte *Rozšíření jádra*. 6) Potvrďte, že chcete přepnout na režim Rozšíření jádra.

> Tuto metodu však doporučujeme použít pouze v případě, že vše ostatní selže, protože to může vést k neočekávaným problémům.
