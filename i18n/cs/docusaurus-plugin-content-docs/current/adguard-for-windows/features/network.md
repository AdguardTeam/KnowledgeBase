---
title: Síť
sidebar_position: 4
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

Modul _Síť_ je věnován filtrování sítě a najdete v něm další možnosti související se sítí. Dvě z nich jsou standardně povoleny: _Povolit filtrování provozu_ a _Filtrovat HTTPS_. Jedná se o důležitá dodatečná opatření pro lepší filtrování webového prostoru. Většina webů nyní používá protokol HTTPS a totéž platí i pro reklamu. Z mnoha webů, jako je youtube.com, facebook.com a x.com, není možné odstranit reklamy bez HTTPS filtrování. Pokud tedy nemáte pádný důvod, ponechte funkci _Filtrovat HTTPS_ povolenou.

![Network Settings \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/network/network_settings.png)

V tomto modulu můžete vybrat _Použít AdGuard jako HTTP proxy_, chcete-li použít AdGuard jako běžný HTTP proxy, který bude filtrovat veškerý procházející provoz. Můžete také povolit funkci _Filtrovat webové stránky s certifikáty EV_. Certifikáty SSL s rozšířeným ověřením (Extended Validation, EV) poskytují silnější bezpečnostní záruku; majitelé těchto webových stránek musí projít důkladným a celosvětově standardizovaným procesem ověřování identity definovaným v pokynech pro EV. To je důvod, proč někteří uživatelé webovým stránkám s takovými certifikáty důvěřují a raději je nefiltrují.

Nakonec je zde část s nastavením proxy. Zde můžete určit, který proxy má AdGuard používat k aktualizaci filtrů, získávání nových verzí atd.

### SockFilter a další síťové ovladače

V sekci _Síť_ můžete také povolit filtrování provozu a zvolit, který ovladač chcete použít: SockFilter, WFP nebo TDI.

**WFP** (Windows Filtering Platform) je výkonný ovladač, u některých uživatelů však může představovat riziko pro stabilitu, například [občasné selhání systému (BSOD)](https://github.com/AdguardTeam/AdguardForWindows/issues/5792).

K dispozici je také ovladač **TDI**, ten je však zastaralý a v některých verzích prohlížeče Google Chrome může způsobovat [problémy s filtrováním](https://github.com/AdguardTeam/AdguardForWindows/issues/5771). [Existuje dočasné provizorní řešení](https://adguard.com/kb/adguard-for-windows/solving-problems/tdi-driver-and-Chrome-142/), ale nejde o spolehlivé dlouhodobé řešení.

**SockFilter** je _experimentální_, odlehčený síťový ovladač v režimu jádra, který pracuje na úrovni soketů (TCP/UDP). Místo toho, aby filtrování soketů kontrolovalo nebo upravovalo pakety při jejich průchodu celým síťovým zásobníkem systému Windows, zachycuje volání soketů (např. connect, send, receive, bind) na vyšší a stabilnější abstrakční úrovni. Díky tomu je ideální pro aplikace, které vyžadují monitorování nebo řízení síťové aktivity bez hloubkové analýzy paketů.

V současné době je SockFilter Right stále nestabilní a mohou se vyskytnout chyby. Po dokončení testování a implementace má SockFilter potenciál přinést oproti jiným ovladačům několik výhod:

- **Pracuje na vyšší úrovni, na úrovni soketů**: SockFilter pracuje se soketovými operacemi namísto surových paketů, díky čemuž je méně složitý a stabilnější než nízkoúrovňové filtrování paketů v rámci WFP.
- **Žádné rušení ostatních síťových ovladačů**: Jelikož je umístěn nad filtry VPN, brány firewall a antivirového softwaru WFP, nedochází k problémům s pořadím filtrů ani ke konfliktům kompatibility, které jsou v zásobníku WFP běžné.
- **Výrazně snížené riziko BSOD souvisejících s NETIO**: SockFilter neběží uvnitř paketu NETIO, čímž se vyhýbá typickým situacím vedoucím k selhání, které jsou způsobeny nesprávným zpracováním vyrovnávacích pamětí, výsledků klasifikace nebo paměti paketů při voláních WFP.

Co se týče nevýhod, ovladač SockFilter vidí pouze operace na úrovni soketů a nezachytává provoz generovaný jinými ovladači jádra nebo komponentami, které obcházejí standardní rozhraní Winsock API. Z pohledu síťových mechanismů na nízké úrovni lze toto považovat za omezení, protože ovladač nemá přístup k surovým paketům ani nemůže kontrolovat provoz mimo sokety. Pro aplikaci blokující reklamy je však toto chování nejen přijatelné, ale přímo optimální. Veškerý relevantní provoz z prohlížečů a aplikací v uživatelském režimu prochází standardními sokety, a právě to potřebujeme mít pod kontrolou. Zároveň ignorování provozu na nízké úrovni ovladačů odstraňuje zbytečnou složitost, předchází problémům s kompatibilitou a zajišťuje stabilitu systému.

### AdGuard VPN

Poslední část je věnována AdGuard VPN — ideálnímu nástroji, který poskytuje bezpečnost a anonymitu při každém procházení internetu. Můžete si ji stáhnout kliknutím na tlačítko _Stáhnout_ nebo přejít na webové stránky AdGuard VPN kliknutím na tlačítko _Domovská stránka_.

Jak funguje AdGuard VPN? Aniž bychom zacházeli do technických podrobností, můžeme říci, že VPN vytváří bezpečný šifrovaný tunel mezi počítačem nebo mobilním zařízením uživatele a vzdáleným serverem VPN. Tímto způsobem je zachována důvěrnost dat i anonymita uživatele, protože pozorovatel třetí strany vidí IP adresu serveru VPN, a nikoli skutečnou IP adresu uživatele.

**Co dělá AdGuard VPN:**

- skrývá vaše skutečné místo pobytu a pomáhá vám zůstat v anonymitě
- změní vaši IP adresu a ochrání vaše data před sledováním
- šifruje váš provoz, aby byl nečitelný pro třetí strany
- umožňuje nastavit, kde se má VPN používat a kde ne (funkce výjimek)

Chcete-li získat více informací o AdGuard VPN, ponořte se do [Databáze znalostí AdGuard VPN](https://adguard-vpn.com/kb/).
