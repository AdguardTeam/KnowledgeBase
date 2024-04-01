---
title: Jak automatizovat AdGuard pro Android
sidebar_position: 3
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

Mnoho lidí si vybírá systém Android, protože si rádi přizpůsobují nastavení a chtějí mít své zařízení zcela pod kontrolou. A je zcela normální, že někteří uživatelé AdGuardu nejsou spokojeni s jeho výchozím chováním. Řekněme, že chcete, aby se ochrana při spuštění určité aplikace zastavila a po jejím zavření se znovu spustila. Toto je úkol pro aplikaci Tasker.

## Rozhraní AdGuardu

Existuje mnoho aplikací Tasker, např. [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&noprocess), [AutomateIt](https://play.google.com/store/apps/details?id=AutomateIt.mainPackage&noprocess) atd. AdGuard poskytuje rozhraní, které těmto aplikacím umožňuje nastavit různá automatizační pravidla.

![Automation *mobile_border](https://cdn.adtidy.org/blog/new/mmwmfautomation.jpg)

Thanks to this interface, any app can send a special message (called “intent”) that contains the name of the action and some additional data, if needed. AdGuard se na tento záměr podívá a provede požadované akce.

### Obavy o bezpečnost

Není nebezpečné nechat náhodné aplikace spravovat to, co dělá AdGuard? Je to tak, a proto je spolu se záměrem odesláno i heslo. Toto heslo vygeneruje AdGuard automaticky, ale můžete ho samozřejmě kdykoli změnit.

### Dostupné akce

Zde jsou uvedeny akce, kterým bude AdGuard rozumět, pokud budou zahrnuty do záměru:

`start` spouští ochranu, nejsou potřeba žádné další údaje;

`stop` zastavuje ochranu, nejsou potřeba žádné další údaje;

`pause` pozastavuje ochranu. Rozdíl mezi touto funkcí a funkcí `stop` spočívá v tom, že se po klepnutí na ni zobrazí oznámení, které ochranu znovu spustí. Nejsou vyžadována žádné další údaje;

`update` kontroluje dostupné aktualizace filtrů a aplikací, nejsou potřeba žádné další údaje;

-----

`dns_filtering` zapíná a vypíná DNS filtrování. Vyžaduje příznak navíc:

`enable:true` nebo `enable:false` povolí nebo zakáže DNS filtrování.

-----

`dns_server` přepíná mezi DNS servery, je třeba uvést další údaje:

 `server:adguard dns` přepne na server AdGuard DNS;

:::note

Úplný seznam názvů podporovaných poskytovatelů naleznete v našem seznamu [známých poskytovatelů DNS](https://adguard-dns.io/kb/general/dns-providers/).

:::

 `server:custom` přepne na dříve přidaný server s názvem `custom`;

 `server:tls://dns.adguard.com` vytvoří nový server a přepne na něj, pokud dříve přidané servery a poskytovatelé neobsahují server se stejnou adresou. V opačném případě přepne na příslušný server. Adresy serverů můžete přidat jako IP (obvyklý DNS), `sdns://…` (DNSCrypt nebo DNS-over-HTTPS), `https://…` (DNS-over-HTTPS) nebo  `tls://...` (DNS-over-TLS);

 `server:1.1.1.1, tls://1.1.1.1` vytvoří server s adresami oddělenými čárkou a přepne se na něj. Při přidávání serveru prostřednictvím `server:1.1.1.1, tls://1.1.1.1`, je dříve přidaný server odebrán.

 `server:system` obnoví nastavení DNS na výchozí systémové DNS servery.

 -----

`proxy_state` zapíná/vypíná odchozí proxy.  Vyžaduje příznak navíc:

`enable:true` nebo `enable:false` aktivuje nebo deaktivuje odchozí proxy.

-----

`proxy_default` nastaví proxy ze seznamu dříve přidaných jako výchozí nebo vytvoří nový, pokud server nebyl přidán dříve.

Musíte zadat další údaje:

`server:[name]` kde `[name]` je název odchozího proxy ze seznamu.

Nebo můžete parametry serveru nakonfigurovat ručně:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

`proxy_remove` odstraní proxy server ze seznamu dříve přidaných serverů.

`server:[name]` kde `[name]` je název odchozího proxy ze seznamu.

Nebo můžete parametry odebrání nakonfigurovat ručně:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

- **Povinné parametry**:

`[type]` — typ proxy:

- HTTP
- SOCKS4
- SOCKS5
- HTTPS_CONNECT

`[host]` — doména nebo IP adresa odchozího proxy;

`[port]` — odchozí port proxy (celé číslo od 1 do 65535);

- **Volitelné parametry**:

 `[přihlášení a heslo]` — pouze v případě, že to vyžaduje proxy. Tyto údaje jsou při nastavování **SOCKS4** ignorovány;

 `[udp]` použít pouze na typ serveru **SOCKS5** a zahrnout možnost **UDP skrze SOCKS5**. Je nutné nastavit hodnotu **true nebo false**;

 `[trust]` použít pouze na typ serveru ** HTTPS_CONNECT** a zahrnout možnost **Důvěřovat všem certifikátům**. Je nutné nastavit hodnotu **true nebo false**.

:::note Příklad

`nastavení podle názvu`: server:MůjServer

`ruční nastavení`: server:host=1.2.3.4&port=80&type=SOCKS5&username=foo&password=bar&udp=true

:::

**Nezapomeňte uvést heslo jako dodatek a zmínit název balíčku a třídy. Musíte tak učinit pro každý záměr.**

Dodatek: `password:*******`

Název balíčku: `com.adguard.android`

Třída: `com.adguard.android.receiver.AutomationReceiver`

:::note

Před verzí 4.0 se třída jmenovala `com.adguard.android.receivers.AutomationReceiver`, ale pak jsme její název změnili na `com.adguard.android.receiver.AutomationReceiver`. Pokud jste tuto funkci používali, věnujte jí pozornost a používejte nový název.

:::

### Provedení bez oznámení

Chcete-li provést úkol bez zobrazení informační zprávy, přidejte další DOPLŇEK `quiet: true`

### Příklad

![Automation *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/tasker/automation2.png)
