---
title: Rozšíření
sidebar_position: 3
---

:::info

Tento článek popisuje AdGuard pro Windows, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

AdGuard dokáže výrazně rozšířit funkčnost webových stránek a funguje jako [správce uživatelských skriptů](/general/userscripts). Uživatelé AdGuardu mohou přidávat své vlastní skripty a také spravovat stávající.

![Extensions \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/userscripts.png)

**Automatické rozpoznání uživatelských skriptů**

Pokud je tato možnost povolena, AdGuard automaticky definuje dotazy prohlížeče na uživatelské skripty a navrhne jejich instalaci. Jinak lze rozšíření stáhnout a nainstalovat ručně.

S AdGuardem jsou nainstalována následující rozšíření:

![Preinstalled userscripts \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/preinstalled-userscripts.png)

**AdGuard asistent**

AdGuard Assistant je starší asistent, kterého můžete použít, pokud pro váš prohlížeč není k dispozici [nový asistent](/adguard-for-windows/browser-assistant.md). Název tohoto rozšíření je zcela záměrný: ve skutečnosti pomáhá uživateli měnit základní nastavení AdGuardu přímo v prohlížeči, aniž by bylo nutné otevírat samotnou aplikaci. AdGuard asistent funguje se všemi prohlížeči kompatibilními s Microsoft Windows. Kromě toho se ikona AdGuard asistenta nezobrazí na webových stránkách, které uživatel uvedl jako výjimky a na některých webových stránkách, kde hrozí riziko zobrazení nesprávného obsahu.

**AdGuard Extra**

Jedná se o vlastní rozšíření určené k boji proti technice opětovného vkládání blokovaných reklam — tzv. obcházení blokátorů reklam/opětovnému vkládání reklam. V obou případech se jedná o pokročilé metody proti blokování reklam, jejichž obliba mezi inzerenty stále roste.

AdGuard Extra is essentially a miniprogram that changes the way pages work in such a way that it becomes much more difficult for sites to use the above-mentioned methods to bypass blockers.

**AdGuard blokátor vyskakovacích oken**

Toto rozšíření zabraňuje otevírání vyskakovacích oken při prohlížení webových stránek. Některá vyskakovací okna jsou považována za užitečná — mohou obsahovat nastavení pro správu webu nebo další referenční informace zobrazené po kliknutí na odkaz. Proto můžete blokátor v případě potřeby vypnout. Toto rozšíření nefunguje ani na webových stránkách přidaných do seznamu výjimek AdGuardu. Ve výchozím nastavení je vypnuto, ale můžete jej zapnout v nastavení aplikace. You will find more detailed information about this extension in our Knowledge Base.

**Web of Trust**

Web of Trust vám umožňuje zjistit pověst každého webu na základě názorů jeho uživatelů. Stránky jsou hodnoceny podle řady specifických kritérií: důvěryhodnost, bezpečnost atd. Toto rozšíření je ve výchozím nastavení vypnuto, ale můžete jej zapnout v nastavení aplikace. Upozorňujeme, že AdGuard není vývojářem tohoto rozšíření.

### Síť

Předposlední modul je věnován filtrování sítě a najdete v něm další možnosti související se sítí. Two of them are enabled by default: _Enable traffic filtering_ and _Filter HTTPS_. Jedná se o důležitá dodatečná opatření pro lepší filtrování webového prostoru. Většina webů nyní používá protokol HTTPS a totéž platí i pro reklamu. From many sites, like youtube.com, facebook.com and x.com, it is impossible to remove ads without HTTPS filtering. So keep the _Filter HTTPS_ feature enabled unless you have a strong reason not to.

![Network Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

V tomto modulu můžete zaškrtnout políčko "Použít AdGuard jako HTTP proxy", chcete-li použít AdGuard jako běžný HTTP proxy, který bude filtrovat veškerý procházející provoz. Můžete také povolit funkci _Filtrovat webové stránky s certifikáty EV_. Certifikáty SSL s rozšířeným ověřením (Extended Validation, EV) poskytují silnější bezpečnostní záruku; majitelé těchto webových stránek musí projít důkladným a celosvětově standardizovaným procesem ověřování identity definovaným v pokynech pro EV. To je důvod, proč někteří uživatelé webovým stránkám s takovými certifikáty důvěřují a raději je nefiltrují.

Nakonec je zde část s nastavením proxy. Zde můžete určit, který proxy má AdGuard používat k aktualizaci filtrů, získávání nových verzí atd.

### AdGuard VPN

Poslední část je věnována AdGuard VPN — ideálnímu nástroji, který poskytuje bezpečnost a anonymitu při každém procházení internetu. Můžete si ji stáhnout kliknutím na tlačítko _Stáhnout_ nebo přejít na webové stránky AdGuard VPN kliknutím na tlačítko _Domovská stránka_.

Jak funguje AdGuard VPN? Aniž bychom zacházeli do technických podrobností, můžeme říci, že VPN vytváří bezpečný šifrovaný tunel mezi počítačem nebo mobilním zařízením uživatele a vzdáleným serverem VPN. Tímto způsobem je zachována důvěrnost dat i anonymita uživatele, protože pozorovatel třetí strany vidí IP adresu serveru VPN, a nikoli skutečnou IP adresu uživatele.

**Co může AdGuard VPN dělat:**

- skrývá vaše skutečné místo pobytu a pomáhá vám zůstat v anonymitě
- změní vaši IP adresu a ochrání vaše data před sledováním
- šifruje váš provoz, aby byl nečitelný pro třetí strany
- umožňuje nastavit, kde se má VPN používat a kde ne (funkce výjimek)

Chcete-li získat více informací o AdGuard VPN, ponořte se do [Databáze znalostí AdGuard VPN](https://adguard-vpn.com/kb/).
