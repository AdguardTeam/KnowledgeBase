---
title: Jak upřednostnit překlady souborů na Crowdinu
sidebar_position: 5
---

Na platformě Crowdin existuje sedm hlavních projektů AdGuard:

- [AdGuard Applications](https://crowdin.com/project/adguard-applications)
- [AdGuard Websites](https://crowdin.com/project/adguard-websites)
- [AdGuard Ad Blocker Knowledge Base](https://crowdin.com/project/adguard-knowledge-base)
- [AdGuard VPN Knowledge Base](https://crowdin.com/project/adguard-vpn-knowledge-base)
- [AdGuard DNS Knowledge Base](https://crowdin.com/project/adguard-knowledge-bases)
- AdGuard Mail Knowledge Base
- AdGuard Glossary

Prvních pět je aktivně překládáno. *AdGuard Mail Knowledge Base* zatím není k dispozici pro překlad. *AdGuard Glossary* slouží výhradně k ukládání a správě terminologie. Pokud chcete přidat nebo upravit výrazy, můžete tak učinit přímo v pracovním prostoru editoru.

![Adding terms *border](https://cdn.adtidy.org/content/kb/ad_blocker/miscellaneous/adguard_translations/adding_terms.png)

## Začínáme s projektem Applications

V rámci projektu *AdGuard Applications* neexistují žádné přísné pokyny, kde začít. Stačí si vybrat libovolný produkt.

Je tu jen pár věcí, které bychom rádi zmínili:

- Aplikace je v daném jazyce dostupná až poté, co jsou **všechny** její řetězce přeloženy na serveru Crowdin.
- Popisy obchodů s aplikacemi překládejte až po dokončení překladů samotné aplikace. Popis bez přeloženého produktu není užitečný.
- Některé soubory a složky mohou být zastaralé — např. `adguard-vpn-for-desktop` a `adguard-vpn-for-ios-ARCHIVED`. Ty by neměly být překládány.

## Začínáme s projektem Websites

V projektu *AdGuard Websites* je situace jiná. Jazyky lze na web přidat, i když není k dispozici úplná sada překladů. To však závisí i na tom, které soubory již byly přeloženy. Proto doporučujeme začít nejdůležitějšími soubory, které jsou uvedeny níže:

[AdGuard Ad Blocker website](https://crowdin.com/project/adguard-websites/en#/adguard.com)

- `critical.resx`
- `auth.resx`
- `welcome.resx`

[AdGuard VPN website](https://crowdin.com/project/adguard-websites/en#/adguard-vpn.com)

- `critical.resx`
- `auth.resx`

[AdGuard DNS website](https://crowdin.com/project/adguard-websites/en#/adguard-dns.com)

- `critical.resx`
- `auth.resx`

Přidávání nových i aktualizace stávajících řetězců v těchto souborech vyžaduje zvláštní pozornost překladatelů a korektorů projektu.

Kromě webových stránek je v projektu *AdGuard Websites* k dispozici také soubor pro překlad [transakčních e-mailů](https://crowdin.com/project/adguard-websites/en#/emails). Nově přidané řetězce v tomto souboru mají také vysokou prioritu překladu.
