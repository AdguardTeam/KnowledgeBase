---
title: GitHub repozitáře AdGuard
sidebar_position: 9
---

V AdGuardu je naším cílem učinit internet bezpečnějším, pohodlnějším a transparentnějším. Tento závazek se odráží nejen ve vlastnostech našich produktů a přísných zásadách ochrany osobních údajů, ale také v tom, že o naší práci informujeme co nejotevřeněji. To zahrnuje i aktivní komunikaci s naší komunitou.

Proto [všechny naše produkty mají veřejné repozitáře](https://github.com/orgs/AdguardTeam/repositories?type=all&q=visibility%3Apublic+archived%3Afalse) — online prostory, kde si kdokoli může prohlédnout, na čem právě pracujeme, nahlásit chyby přímo vývojářům AdGuardu a dokonce přispět k našim open-source projektům. Repozitáře zahrnují naše aplikace pro blokování reklam, filtry, rozšíření prohlížečů, řešení DNS, nástroje VPN, vývojářské nástroje a další. Existuje řada platforem, které tuto funkci nabízejí, ale zdaleka nejoblíbenější je GitHub, kde jsou uloženy všechny projekty AdGuard.

Tento článek uvádí nejdůležitější repozitáře podle kategorií, shrnuje účel každého z nich a stručně popisuje, co v nich mohou uživatelé dělat.

:::tip

Tip: Vytvoření ticketu na GitHubu je nejúčinnější způsob, jak upozornit vývojáře AdGuardu na nějaký problém. Nezapomeňte se nejprve ujistit, zda již podobný dotaz neexistuje, a problém popište srozumitelně, ale stručně. Pokud existuje, můžete mu dát kladný hlas.

:::

## Co je GitHub a jeho repozitáře

Zjednodušeně řečeno si GitHub můžete představit jako něco na způsob Google Docs pro kód, kde může na stejném projektu pracovat více lidí, sledovat změny a zjistit, kdo které úpravy provedl. Poskytuje centrální cloudové úložiště pro váš kód, takže k němu máte přístup odkudkoli. Obsahuje také nástroje pro týmovou spolupráci, které slouží k revizi změn, řešení problémů a hladkému sloučení práce všech členů týmu.

GitHub je hojně využíván pro open-source projekty a umožňuje komukoli prohlížet zdrojový kód, navrhovat vylepšení a přispívat.

Repozitář (často zkráceně nazývaný “repo”) je nejzákladnějším prvkem platformy GitHub. Je to místo, kde můžete ukládat svůj kód, soubory a historii revizí jednotlivých souborů. Repozitáře mohou mít více spolupracovníků a mohou být veřejné nebo soukromé.

## Co můžete dělat v repozitářích AdGuardu

Odkazy na hlavní repozitáře najdete níže v tomto článku, případně si můžete prohlédnout [hlavní stránku AdGuardTeam na GitHubu](https://github.com/orgs/AdguardTeam/repositories?type=all), kde najdete jejich úplný seznam. Ve většině repozitářů můžete:

- **Zobrazit soubor README** na hlavní stránce: poskytuje vám úvod k produktu a jeho repozitáři
  ![README file \*border](https://cdn.adtidy.org/content/blog/github-repos/see-readme.png)

- **Zkontrolovat existující hlášení chyb nebo požadavky na funkce**, okomentujte je a přidat svůj hlas
  ![Check issues \*border](https://cdn.adtidy.org/content/blog/github-repos/check-issues.png)

- **Vytvořte ticket**, abyste nahlásili chybu nebo požádali o novou funkci
  ![Create issues \*border](https://cdn.adtidy.org/content/blog/github-repos/create-issue.png)

- **Zkontrolovat vydání**, kde najdete různé verze a jejich seznamy změn (a v případě potřeby si nainstalovat starší verzi)
  ![Check releases \*border](https://cdn.adtidy.org/content/blog/github-repos/check-releases.png)

- **Nainstalovat jakoukoli starší nebo beta verzi, pokud je to potřeba**
  ![Download builds \*border](https://cdn.adtidy.org/content/blog/github-repos/download-releases.png)

:::note

Pokud jste na GitHubu noví, budete si muset založit účet na GitHubu, abyste mohli zakládat nové úkoly a komentovat ty stávající.

:::

V open-source repozitářích mohou pokročilí uživatelé také:

- **Procházet kód**, abyste porozuměli logice produktu, jaké technologie se používají a jak jsou implementovány
- **Přispívat (fork)** prostřednictvím pull requestů

Ať už jste běžný uživatel, technický odborník nebo vývojář, AdGuard vítá jakoukoli účast komunity ve svých repozitářích na GitHubu.

## Právní dokumenty

### [LegalDocs](https://github.com/AdguardTeam/LegalDocs)

V rámci našeho závazku k transparentnosti zveřejňujeme všechny právní dokumenty — jako jsou licenční smlouvy s koncovým uživatelem, zásady ochrany osobních údajů a obchodní podmínky — na platformě GitHub. Naše repozitář _LegalDocs_ umožňuje komukoli nahlédnout do kompletní historie změn těchto dokumentů.

## Produkty blokátoru reklam AdGuard

V těchto repozitářích uživatelé mohou:

- Zobrazit a hlásit chyby nebo požadavky na funkce prostřednictvím GitHub Issues
- Zkontrolovat seznamy změn, sledovat historii vydání, monitorovat aktualizace
- Stáhnout nejnovější, předchozí a beta sestavení (kromě iOS)

### [AdguardForAndroid](https://github.com/AdguardTeam/AdguardForAndroid)

Repozitář AdGuard pro Android — aplikace, která poskytuje blokování reklam v celém systému.

### [AdguardForiOS](https://github.com/AdguardTeam/AdguardForiOS)

Repozitář AdGuard pro iOS — blokátor obsahu pro Safari s DNS a vlastními filtry. Uživatelé si také mohou prohlédnout open-source kód.

### [AdguardForWindows](https://github.com/AdguardTeam/AdguardForWindows)

Repozitář AdGuard pro Windows. Nejde o open source; GitHub je používán jako otevřený systém pro sledování chyb.

### [AdguardForMac](https://github.com/AdguardTeam/AdguardForMac)

Repozitář AdGuard pro Mac — samostatný blokátor obsahu pro macOS. Pouze pro sledování chyb.

### [AdguardBrowserExtension](https://github.com/AdguardTeam/AdguardBrowserExtension)

Repozitář rozšíření prohlížeče AdGuard — rozšíření, které poskytuje blokování reklam se zvýšenou ochranou soukromí pro prohlížeče Chrome, Firefox, Opera a Edge.

### [AdguardForSafari](https://github.com/AdguardTeam/AdGuardForSafari)

Repozitář AdGuard pro Safari — rozšíření pro blokování reklam v Safari pro Mac. Uživatelé si také mohou prohlédnout open-source kód.

### [AdGuardCLI](https://github.com/AdguardTeam/AdGuardCLI)

Repozitář AdGuard pro Linux — rozhraní příkazového řádku pro správu blokování reklam.

## Produkty AdGuard VPN

V těchto repozitářích uživatelé mohou:

- Zobrazit a hlásit chyby nebo požadavky na funkce prostřednictvím GitHub Issues
- Zkontrolovat seznamy změn, sledovat historii vydání, monitorovat aktualizace
- Stáhnout nejnovější, předchozí a beta sestavení (kromě iOS)

### [AdGuardVPNForiOS](https://github.com/AdguardTeam/AdGuardVPNForiOS)

Repozitář AdGuard VPN pro iOS. Slouží jako otevřený systém pro sledování chyb.

### [AdGuardVPNForAndroid](https://github.com/AdguardTeam/AdGuardVPNForAndroid)

Repozitář AdGuard VPN pro Android. Slouží jako otevřený systém pro sledování chyb.

### [AdGuardVPNForWindows](https://github.com/AdguardTeam/AdGuardVPNForWindows)

Repozitář AdGuard VPN pro Windows. Slouží jako otevřený systém pro sledování chyb.

### [AdGuardVPNForMac](https://github.com/AdguardTeam/AdGuardVPNForMac)

Repozitář AdGuard VPN pro Mac — aplikace navržená pro macOS.

### [AdGuardVPNExtension](https://github.com/AdguardTeam/AdGuardVPNExtension)

Repozitář rozšíření prohlížeče AdGuard VPN.

### [AdGuardVPNCLI](https://github.com/AdguardTeam/AdGuardVPNCLI)

Repozitář AdGuard VPN pro Linux — rozhraní příkazového řádku pro správu VPN připojení. Repo slouží jako nástroj pro sledování chyb.

## Produkty založené na DNS

### [AdGuardDNS](https://github.com/AdguardTeam/AdGuardDNS)

Open-source repozitář, který slouží také ke sledování chyb a problémů souvisejících s AdGuard DNS. Uživatelé mohou:

- Zobrazit a nahlásit problémy s DNS
- Navrhnout vylepšení

### [AdGuardHome](https://github.com/AdguardTeam/AdGuardHome)

Repozitář AdGuard Home — bezplatný software pro blokování reklam a slídičů v celé síti prostřednictvím DNS. Uživatelé mohou:

- Zkontrolovat a odeslat hlášení o chybách nebo požadavcích na nové funkce
- Zkontrolovat nebo přispět ke kódu
- Stáhnout a nainstalovat sestavení

## Dokumentace a databáze znalostí

Cílem databáze znalostí je pomoci uživatelům lépe porozumět programu AdGuard a efektivněji jej využívat. Podrobně popisuje každý produkt AdGuard: od přehledů funkcí a návodů k řešení problémů až po příručky k pokročilým nastavením a dokumentaci k API. V repozitářích uživatelé mohou:

- Navrhnout opravy nebo úpravy článků databáze znalostí
- Navrhnout nové články
- Otestovat nebo spustit lokální verzi

### [KnowledgeBase](https://github.com/AdguardTeam/KnowledgeBase)

Centrální dokumentace k blokátoru reklam AdGuard a souvisejícím technologiím.

### [KnowledgeBaseDNS](https://github.com/AdguardTeam/KnowledgeBaseDNS)

Podrobný přehled funkcí, návody k řešení problémů a dokumentace k AdGuard DNS (veřejnému i soukromému), AdGuard Home a všem souvisejícím tématům.

### [KnowledgeBaseVPN](https://github.com/AdguardTeam/KnowledgeBaseVPN)

Podrobný přehled funkcí a návody k řešení problémů pro AdGuard VPN.

### [KnowledgeBaseMail](https://github.com/AdguardTeam/KnowledgeBaseMail)

Podrobný přehled funkcí a návody k řešení problémů pro AdGuard Mail.

## Základní knihovny

### [CoreLibs](https://github.com/AdguardTeam/CoreLibs)

Multiplatformní jádro modulu filtrování AdGuard. Používá se v produktech pro Android, Windows a Mac. Uživatelé mohou:

- Prozkoumat logiku filtrování a zpracování DNS
- Nahlásit chyby a navrhnout funkce skrze Issues

### [DNSLibs](https://github.com/AdguardTeam/DNSLibs)

Knihovna DNS používaná v balíčcích CoreLibs a AdGuard Home. Uživatelé mohou:

- Posoudit a přispět k nízkoúrovňové implementaci DNS
- Navrhnout optimalizace

### [VPNLibs](https://github.com/AdguardTeam/VPNLibs)

Sdílená kódová základna používaná v produktech AdGuard VPN napříč platformami pro implementaci protokolu AdGuard VPN. Uživatelé mohou:

- Přispět k chování zásobníku VPN
- Nahlásit nebo zobrazit problémy s výkonem a chyby

## Základní technologie blokování reklam a filtrování

### [AdguardFilters](https://github.com/AdguardTeam/AdguardFilters)

Obsahuje základní seznamy filtrů AdGuard. Uživatelé mohou:

- Zobrazit a stáhnout seznamy filtrů
- Vytvořit problémy pro hlášení falešně pozitivních výsledků nebo navržení nových pravidel
- Sledovat aktualizace logiky filtru

### [AdGuardSDNSFilter](https://github.com/AdguardTeam/AdGuardSDNSFilter)

Repozitář filtru AdGuard DNS — hlavní seznam blokování na úrovni DNS používaný v AdGuard DNS a funkcích DNS filtrování. Uživatelé mohou:

- Zkontrolovat aktuální sadu pravidel
- Navrhnout změny nebo doplnění

### [AGLint](https://github.com/AdguardTeam/AGLint)

Nástroj pro kontrolu syntaxe seznamů filtrů Adblock. Uživatelé mohou:

- Nainstalovat AGLint pro kontrolu projektů na problémy s pravidly
- Přispívat k pravidlům lint

### [Scriptlets](https://github.com/AdguardTeam/Scriptlets)

Pomocné funkce JavaScript používané v pravidlech filtrování. Uživatelé mohou:

- Prozkoumat dostupné skriptlety
- Odeslat pull request pro nové skriptlety

### [tsurlfilter](https://github.com/AdguardTeam/tsurlfilter)

Knihovna pro blokování obsahu v TypeScript pro rozšíření prohlížečů. Uživatelé mohou:

- Prozkoumat, jak je implementována logika filtrování
- Přispět opravami a funkcemi

## Je toho více

Výše jsme uvedli 27 hlavních veřejných repozitářů AdGuard z celkových 96. Pokud se do toho chcete ponořit do hloubky, můžete [zbytek najít na AdGuardTeam na GitHubu](https://github.com/orgs/AdguardTeam/repositories?type=all&q=visibility%3Apublic+archived%3Afalse).

Budeme čekat na vaši zpětnou vazbu! Dbejte na svou bezpečnost na internetu i v reálném životě.
