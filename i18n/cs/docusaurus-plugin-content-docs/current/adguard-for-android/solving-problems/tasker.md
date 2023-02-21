---
title: Jak automatizovat AdGuard pro Android
sidebar_position: 3
---

Mnoho lidí si vybírá systém Android, protože si rádi přizpůsobují nastavení a chtějí mít své zařízení zcela pod kontrolou. A je zcela normální, že někteří uživatelé AdGuardu nejsou spokojeni s jeho výchozím chováním. Řekněme, že chcete, aby se ochrana při spuštění určité aplikace zastavila a po jejím zavření se znovu spustila. Toto je úkol pro aplikaci Tasker.

## Rozhraní AdGuardu

Existuje mnoho aplikací Tasker, např. [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&noprocess), [AutomateIt](https://play.google.com/store/apps/details?id=AutomateIt.mainPackage&noprocess) atd. AdGuard poskytuje rozhraní, které těmto aplikacím umožňuje nastavit různá automatizační pravidla.

![AdGuard Automation *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/tasker/adgautomation.png)

Díky tomuto rozhraní může každá aplikace odeslat speciální zprávu (tzv. "záměr"), která obsahuje název akce a případně další údaje. AdGuard se na tento záměr podívá a provede požadované akce.

### Obavy o bezpečnost

Nebylo by trochu nebezpečné, ptáte se — nechat náhodné aplikace spravovat to, co dělá AdGuard? To ano, a proto se spolu se záměrem odesílá i heslo. Toto heslo vygeneruje AdGuard automaticky, ale můžete ho samozřejmě kdykoli změnit.

### Dostupné akce

Jste připraveni zašpinit si ruce? Zde jsou uvedeny akce, kterým bude AdGuard rozumět, pokud budou zahrnuty do záměru:


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
> Poznámka: úplný seznam podporovaných názvů poskytovatelů naleznete v nastavení AdGuard DNS v části "Vlastní nastavení DNS"

 `server:custom` switches to the previously added server named `custom`;

 `server:tls://dns.adguard.com` creates a new server and switches to it if the previously added servers and providers don't contain a server with the same address. Otherwise, it switches to the respective server. You can add server addresses as IP ( regular DNS), `sdns://…` (DNSCrypt or DNS-over-HTTPS), `https://…` (DNS-over-HTTPS) or  `tls://...` (DNS-over-TLS);

 `server:1.1.1.1, tls://1.1.1.1` creates a server with comma separated addresses and switches to it. When adding a server via `server:1.1.1.1, tls://1.1.1.1`, the previously added server is removed.

 `server:system` resets DNS settings to default system DNS servers.

 -----



`proxy_state` enables/disables the outbound proxy.  Vyžaduje příznak navíc:

`enable:true` or `enable:false` activates or deactivates the outbound proxy, accordingly.

-----


`proxy_default` sets the proxy from the list of previously added ones as default or creates a new one if server has not been added before.

You need to specify additional data:

`server:[name]` where `[name]` is the name of the outbound proxy from the list.

Or you can configure server parameters manually:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

`proxy_remove` removes the proxy server from the list of previously added ones.

`server:[name]` where `[name]` is the name of the outbound proxy from the list.

Or you  can configure remove parameters manually:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

* **Compulsory parameters**:

`[type]` — proxy server type:
- HTTP;
- SOCKS4;
- SOCKS5;
- HTTPS_CONNECT.

`[host]` — outbound proxy domain or IP address;

`[port]` — outbound proxy port (integer number from 1 to 65535);

* **Optional parameters**:

 `[login and password]` — only if proxy requires it. This data is ignored when setting up **SOCKS4**;

 `[udp]` applied only on **SOCKS5** server type and include option **UDP through SOCKS5**. It is necessary to set **true or false** value;

 `[trust]` applies for **HTTPS_CONNECT** server type only and include option **Trust any certificates**. It is necessary to set **true or false** value.

 > **Example**:

`setting by name`: server:MyServer

 `manually settings`: server:host=1.2.3.4&port=80&type=SOCKS5&username=foo&password=bar&udp=true

-----

**Don't forget to include the password as an extra and mention package name and class! You need to do so for every intent!**

Extra: `password:*******`

Package name: `com.adguard.android`

Class: `com.adguard.android.receivers.AutomationReceiver`

### Execution without notification

To perform a task without showing a toast, add an additional EXTRA `quiet: true`

### Example

![Automation *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/tasker/automation2.png)