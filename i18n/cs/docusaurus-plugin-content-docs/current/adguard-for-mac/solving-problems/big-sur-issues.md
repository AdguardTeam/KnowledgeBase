---
title: Problémy kompatibility s různými verzemi macOS
sidebar_position: 4
---

:::info

Tento článek popisuje AdGuard pro macOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

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

![Advanced Settings *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

#### Kompatibilita s Protect Mail Activity

Aplikace Apple Mail nyní používá proxy ke skrytí IP adresy uživatele při stahování obrázků z e-mailů. To však nebude fungovat, pokud je aktivní připojení VPN. Vzhledem k tomu, že AdGuard chová jako VPN, nebude automaticky přednačítat obrázky.

Hlubší pochopení tohoto problému naleznete v [ tomto článku](../protect-mail-activity).

**Doporučené řešení**

V tuto chvíli doporučujeme místo novějších funkcí ochrany osobních údajů Apple používat tradičnější službu VPN, například [AdGuard VPN](https://adguard-vpn.com/).

### Monterey 12, Big Sur 11.6 a novější: současné problémy

Tyto problémy společnost Apple zatím neodstranila nebo je odstranila jen částečně.

#### Kompatibilita s Cisco AnyConnect

AdGuard nebude fungovat společně s Cisco AnyConnect v režimu *Rozšíření sítě*. Musíte přepnout AdGuard do režimu *Automatický proxy*. Chcete-li tak učinit, postupujte podle [těchto pokynů](#automatic-proxy).

#### Kompatibilita s Flutter

Tento problém je vyřešen ve Flutter 2.2, který byl vydán v červnu 2021. Pro opravu aplikací vyvinutých ve Flutteru je však třeba počkat na aktualizace.

Používáte-li Flutter spolu s AdGuardem v režimu "Rozšíření sítě" (nebo s jinou aplikací typu "Transparentní proxy") v Monterey nebo Big Sur, narazíte na problémy: projekty se nebudou otevírat a Flutter bude fakticky nefunkční. Tuto chybu jsme již nahlásili společnosti Apple. Mezitím můžete použít tato dočasná řešení:

1. Použijte AdGuard v režimu [Automatický proxy](#automatic-proxy).

1. Vypněte SIP a přepněte AdGuard do režimu rozšíření jádra, jak je vysvětleno [zde](#kernel-extension).

#### Aplikace VPN se starším rozhraním API

Přestože je AdGuard v nastavení systému zobrazen jako VPN, neměl by při práci s jinými aplikacemi založenými na VPN způsobovat žádné konflikty. However, if a VPN-based app downloaded outside the App Store is used, there is a risk that it uses the old VPN API and needs to be excluded from filtering:

1. Otevřete menu AdGuardu.
1. Vyberte *Předvolby...*.
1. Přepněte na kartu *Síť*.
1. Klikněte na tlačítko *Aplikace...*.
1. Vyhledejte aplikaci, kterou chcete vyloučit, a zrušte zaškrtnutí políčka vedle ní.

![Filtered applications](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## Již vyřešené problémy

Tyto problémy již společnost Apple odstranila, ale ve starších verzích systému macOS Big Sur se s nimi můžete setkat.

### Kompatibilita s Little Snitch 5

V tuto chvíli není režim Rozšíření sítě v AdGuardu kompatibilní s [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html). When both are running, there's a risk to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. Tento problém je přímo způsoben chybou v Big Sur a společnost Apple jsme o něm již informovali. To nás vede k domněnce, že tento problém bude vyřešen v některé z příštích aktualizací.

However, disabling connection monitoring in Little Snitch doesn't solve the issue, as this doesn't unload the Little Snitch extension from the system memory. Doporučujeme přepnout na režim filtrování [**Automatický proxy**](#automatic-proxy) při spuštění AdGuardu spolu s Little Snitch na Big Sur, alespoň dokud Apple chybu neopraví.

### Kompatibilita s lokálními proxy

:::note

AdGuard nyní dokáže (většinou) bez problémů filtrovat místní proxy. Pokud se setkáte s problémy ve verzích operačního systému 11.1+ nebo pokud používáte Big Sur 11.0, odeberte místní proxy z nastavení systému a nakonfigurujte v AdGuardu odchozí proxy podle níže uvedených pokynů.

:::

Konfigurace odchozího proxy v AdGuardu pro macOS v Big Sur:

1. Otevřete nastavení AdGuardu *Předvolby → Síť → Odchozí proxy server*.
2. Podle typu proxy vyberte HTTP, HTTPS, SOCKS4 nebo SOCKS5.
3. Vyplňte pole:
    - `hosts` je IP adresa vašeho proxy,
    - `port` je požadované číslo portu, které má proxy používat,
    - `user` a `password` jsou odpovídající uživatelské jméno a heslo vašeho proxy (je-li potřeba). Ignorujte jedno z nich nebo obě, pokud nejsou použitelné.

Pokud narazíte na nějaké problémy, kontaktujte naši technickou podporu na adrese support@adguard.com.

#### Příklad 1: Konfigurace odchozího proxy Shadowsocks

Zde je příklad, jak nakonfigurovat odchozí proxy pro [Shadowsocks](https://shadowsocks.org).

Především potřebujete funkční server na straně proxy. S největší pravděpodobností byste k jeho nastavení použili soubor JSON, jako je tento (zde byly náhodně vybrány hodnoty `server` a `password`):

```json
{
   "server":"111.222.333.444",
   "server_port":8388,
   "local_port":1080,
   "password":"barfoo!",
   "timeout":600,
   "method":"chacha20-ietf-poly1305"
}
```

:::tip

More information on how to get started can be found on the [Shadowsocks website](https://shadowsocks.org/guide/what-is-shadowsocks.html).

:::

Pak byste museli do Macu nainstalovat klienta Shadowsocks. Ujistěte se, že jste v jeho nastavení zvolili "Manuální režim" nebo "Automatický režim"! Konfigurace nebude fungovat, pokud vyberete "Globální režim" (nebo "Automatický režim" ve verzích Big Sur před verzí 11.1).

![Select Manual Mode or Auto Mode in settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

Nyní přejděte do nabídky *AdGuard → Pokročilé → Pokročilá nastavení...* a nastavte oblast *Hodnota* v nastavení `upstream.proxy` na `socks5://localhost:1080`. Všimněte si, že zde musíte použít hodnotu "local_port" ze souboru JSON.

Protože Shadowsocks používá SOCKS5, musíte také nastavit hodnotu nastavení `upstream.proxy.socks5udp` v pokročilých nastaveních AdGuardu na `true`, aby AdGuard směroval provoz UDP na proxy.

#### Příklad 2: Konfigurace odchozího proxy Surge

V Big Sur v11.1+ nejsou známy žádné konflikty mezi AdGuardem a proxy Surge. Používáte-li starší verzi Big Sur (před verzí 11.1), zkontrolujte, zda je v pravém dolním rohu vypnutá možnost **Systémový proxy**. V opačném případě nebude Surge s AdGuardem fungovat. Na druhou stranu, **Vylepšený režim** lze povolit, aniž by to způsobilo konflikt v jakékoli verzi Big Sur.

![Configuring an upstream Surge proxy *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png)

Nyní přejděte na *Předvolby → Síť → Odchozí proxy* a vyplňte pole. Pro typ proxy SOCKS5:

- `host`: localhost
- `port`: 6153 pro typ proxy HTTP:
- `host`: localhost
- `port`: 6152

## Alternativy k použití Rozšíření sítě

Není možné předvídat všechny možné problémy, které se mohou v Big Sur nebo Monterey vyskytnout, existuje nespočet různých konfigurací hardwaru/softwaru a nastavení. Pokud se setkáte s problémy s kompatibilitou, kontaktujte náš tým podpory, ale nejprve vyzkoušejte jedno z těchto řešení.

### Použijte režim filtrování "Automatický proxy" {#automatic-proxy}

Pokud se v Big Sur nebo Monterey setkáte s problémy, které nelze vyřešit žádnou z výše uvedených metod, můžete zkusit přepnout AdGuard do režimu *Automatický proxy*.

1. Otevřete menu AdGuardu.
1. Vyberte *Předvolby...*.
1. Přepněte na kartu *Síť*.
1. Klikněte na tlačítko *Vybrat režim...*.
1. Vyberte *Automatický proxy*.

![Switch AdGuard to Automatic proxy mode](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

Nyní AdGuard automaticky přidal soubor **.pac** do síťových nastavení vašeho Macu, takže systém bude považovat AdGuard za proxy a bude se snažit posílat veškerý provoz přes AdGuard.

:::note

Některé aplikace mohou toto nastavení systému ignorovat a jejich provoz nebude filtrován.

:::

### Zapnutí režimu Rozšíření jádra v Big Sur a Monterey {#kernel-extension}

Ve výchozím nastavení používá AdGuard v Big Sur a Monterey rámec Rozšíření sítě, protože starý rámec Rozšíření jádra je zde zakázán. To může způsobit určité problémy s kompatibilitou, ale abyste mohli Rozšíření jádra povolit zpět, musíte nejprve vypnout ochranu integrity systému (SIP). Chcete-li zakázat SIP, postupujte podle tohoto návodu:

1. Klikněte na symbol *Apple* v menu.
1. Klikněte na *Restartovat*
1. Podržte *Command-R* pro restartování do režimu obnovy.
1. Klikněte na *Nástroje*.
1. Vyberte *Terminal*.
1. Napište `csrutil disable`.
1. Stiskněte *Return* nebo *Enter* na klávesnici.
1. Klikněte na symbol *Apple* v menu.
1. Klikněte na *Restartovat*

Nyní, když je SIP zakázáno, povolíte rozšíření jádra tímto způsobem:

![Enable Kernel Extension](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1. Otevřete menu AdGuardu.
1. Vyberte *Předvolby...*.
1. Přepněte na kartu *Síť*.
1. Klikněte na tlačítko *Vybrat režim...*.
1. Vyberte *Rozšíření jádra*.
1. Potvrďte, že chcete přepnout na režim Rozšíření jádra.

:::caution

Tuto metodu však doporučujeme použít pouze v případě, že vše ostatní selže, protože to může vést k neočekávaným problémům.

:::
