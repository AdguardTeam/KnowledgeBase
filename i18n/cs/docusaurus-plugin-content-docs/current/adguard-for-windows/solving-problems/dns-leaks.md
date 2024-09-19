---
title: Možné úniky DNS
sidebar_position: 9
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard pro Windows umožňuje uživatelům zadat adresu DNS serveru pro řešení dotazů namísto systémového DNS serveru, který je poskytován ISP, pokud není v nastavení systému potlačen. Použití jiného než výchozího DNS serveru může ochránit vaše přenosy DNS před zachycením ISP. Výběrem šifrovaného a/nebo filtrujícího DNS serveru navíc získáte další vrstvu ochrany před záškodníky a obtěžujícími reklamami.

Mnoho uživatelů AdGuardu pro Windows oceňuje funkci DNS ochrany. But some of them encounter the following issue: a check on a website like https://ipleak.net/ shows that requests are handled by the default DNS server instead of the selected one. V tomto článku se dozvíte, proč k tomu dochází a jak se tomu vyhnout.

## Bootstrap DNS adresa

Adresy DNS serverů lze zapsat jako IP adresy nebo jako názvy domén. V případě IP adres nejsou žádné potíže: AdGuard předá požadavek DNS přímo serveru uvedenému v modulu DNS ochrany. Šifrované adresy serverů DNS, jako je DoT nebo DoH, se však nejčastěji zapisují jako názvy domén. V tomto případě odešle AdGuard dotaz DNS na bootstrap adresu, což je ve výchozím nastavení systémový DNS server, aby nejprve vyřešil šifrovanou adresu DNS serveru. Toto připojení vnímají kontrolní služby jako únik.

**Postup k odstranění tohoto úniku:**

- přejděte do *Pokročilých nastavení*
- přejděte dolů do sekce *Seznam vlastních bootstrap adres*
- enter the custom bootstrap address in the IP address format (you may use [the list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/))
- klikněte na *Uložit*

## Záložní DNS server

Může se stát, že AdGuard nemůže dosáhnout zadaného serveru z důvodu slabého připojení k internetu, vypršení výchozího časového limitu nebo jiných problémů souvisejících se serverem. V tomto případě se připojí k záložnímu serveru, kterým je ve výchozím nastavení systémový DNS server. Toto připojení bude kontrolní služba rovněž považovat za únik.

**Postup k odstranění tohoto úniku:**

- přejděte do *Pokročilých nastavení*
- přejděte dolů do sekce *Záložní servery*
- zaškrtněte možnost *Použít vlastní servery*
- then find the *List of custom fallback servers* section and enter the custom fallback servers one per line

nebo

- přejděte do *Pokročilých nastavení*
- přejděte dolů do sekce *Záložní servery*
- zaškrtněte možnost *Nepoužívat záložní servery*

nebo

- přejděte do *Pokročilých nastavení*
- přejděte dolů do sekce *Časový limit DNS serveru*
- zadejte libovolně velké číslo
