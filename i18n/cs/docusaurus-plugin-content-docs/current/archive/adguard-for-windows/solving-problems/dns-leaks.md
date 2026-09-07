---
title: Možné úniky DNS
sidebar_position: 10
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard pro Windows umožňuje uživatelům zadat adresu DNS serveru pro řešení dotazů namísto systémového DNS serveru, který je poskytován ISP, pokud není v nastavení systému potlačen. Použití jiného než výchozího DNS serveru může ochránit vaše přenosy DNS před zachycením ISP. Výběrem šifrovaného a/nebo filtrujícího DNS serveru navíc získáte další vrstvu ochrany před záškodníky a obtěžujícími reklamami.

Mnoho uživatelů AdGuardu pro Windows oceňuje funkci DNS ochrany. Někteří z nich se však setkávají s následujícím problémem: kontrola na webových stránkách, jako je https://ipleak.net/ ukazuje, že požadavky jsou zpracovávány výchozím DNS serverem namísto vybraným. V tomto článku se dozvíte, proč k tomu dochází a jak se tomu vyhnout.

## Bootstrap DNS adresa

Adresy DNS serverů lze zapsat jako IP adresy nebo jako názvy domén.
V případě IP adres nejsou žádné potíže: AdGuard předá požadavek DNS přímo serveru uvedenému v modulu DNS ochrany. Šifrované adresy serverů DNS, jako je DoT nebo DoH, se však nejčastěji zapisují jako názvy domén. V tomto případě odešle AdGuard dotaz DNS na bootstrap adresu, což je ve výchozím nastavení systémový DNS server, aby nejprve vyřešil šifrovanou adresu DNS serveru. Toto připojení vnímají kontrolní služby jako únik.

**To eliminate this leak:**

- go to the _Advanced settings_
- scroll down to the _List of custom bootstrap addresses_ section
- enter the custom bootstrap address in the IP address format (you may use [the list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/))
- click _Save_

## Záložní DNS server

Může se stát, že AdGuard nemůže dosáhnout zadaného serveru z důvodu slabého připojení k internetu, vypršení výchozího časového limitu nebo jiných problémů souvisejících se serverem. V tomto případě se připojí k záložnímu serveru, kterým je ve výchozím nastavení systémový DNS server. Toto připojení bude kontrolní služba rovněž považovat za únik.

**To eliminate this leak:**

- go to the _Advanced settings_
- scroll down to the _Fallback servers_ section
- check the _Use custom servers_ option
- then find the _List of custom fallback servers_ section and enter the custom fallback servers one per line

nebo

- go to the _Advanced settings_
- scroll down to the _Fallback servers_ section
- check the _Don’t use fallback servers_ option

nebo

- go to the _Advanced settings_
- scroll down to the _DNS server timeout period_ section
- zadejte libovolně velké číslo
