---
title: Zásady AdGuard filtrů
sidebar_position: 6
---

Při diskusích o filtrech reklam AdGuardu se často objevuje jedno téma – zda by měl AdGuard blokovat tu či onu reklamu. Nastavením pravidel se držíme konkrétních kritérií, která jsou velmi podobná zásadám [EasyList](https://easylist.to/pages/policy.html), které považujeme za správné a vhodné. Provedli jsme v nich však několik změn.

![To filter or not to filter](https://cdn.adtidy.org/public/Adguard/Common/page_filtering.png)

## Terminologie

V celém textu používáme termíny **vlastní** a **třetí strana**.

"Vlastní" je webová stránka, kterou uživatel navštíví úmyslně a vědomě, plus soubor zdrojů na webu provozovaných stejnou organizací. V praxi považujeme zdroje za patřící stejné straně, pokud jsou součástí stejné registrovatelné domény: veřejná přípona plus jedna další značka. Příklad: `site.example`, `www.site.example`, a `s.u.b.site.example` patří stejné straně, protože `site.example` je jejich společnou registrovatelnou doménou.

"Třetí strana" je jakákoli strana, která nespadá do výše uvedené definice "Vlastní". Interakce s jinými stranami se považují za interakce s třetími stranami, i když je uživatel informován přechodně v kontextu (např. formou přesměrování). Pouhé najetí na daný obsah, jeho ztlumení, pozastavení nebo zavření neznamená záměr interakce.

## Společná kritéria

Platí stejně pro pravidla ve všech filtrech.

- Pravidla, která často způsobují problémy při práci s některými webovými stránkami, budou odstraněna.
- Pravidla pro konkrétní webové stránky budou přidána pouze v případě, že má webová stránka dostatečnou návštěvnost. Návštěvnost se určuje podle otevřených statistik (pokud jsou k dispozici), nebo jinými způsoby, např. podle počtu sledujících na sociálních sítích. Návštěvnost webových stránek je považována za dostatečnou, pokud mají 100 tisíc návštěv za měsíc. Přidání pravidla pro webové stránky, které nejsou tak populární, zvážíme, ale konečné rozhodnutí je na správci seznamu filtrů.

## Filtry reklam

Tato část popisuje základní filtr AdGuardu, filtr mobilních reklam a následující jazykově specifické filtry: Ruský, německý, nizozemský, španělský/portugalský, japonský, turecký, čínský a francouzský jazyk.

**Co mají tyto filtry blokovat?**

- Tyto filtry blokují reklamy, kdekoli je to možné.
- Reklamy by měly být blokovány bez ohledu na jejich důvody a cíle.
- Zablokujeme reklamy zobrazené škodlivými aplikacemi nebo rozšířeními, které vkládají reklamy. Vezměte prosím na vědomí, že to děláme pouze pod podmínkou, že zadáte, jak takovou aplikaci nebo rozšíření nainstalovat.

**Omezení a výjimky**

Pokud se na pravidlo vztahuje seznam omezení popsaný níže, nebude přidáno do hlavních filtrů.

- Vlastní reklamy webových stránek by neměly být odstraňovány záměrně. Na druhou stranu by neměly být odblokovány, pokud by to mohlo způsobit, že se znovu objeví reklamy třetích stran.
- Pravidla pro konkrétní webové stránky budou přidána pouze v případě, že má webová stránka dostatečnou návštěvnost. Návštěvnost se určuje podle otevřených statistik (pokud jsou k dispozici), nebo jinými způsoby, např. podle počtu sledujících na sociálních sítích. Návštěvnost webových stránek je považována za dostatečnou, pokud mají 100 tisíc návštěv za měsíc. Přidání pravidla pro webové stránky, které nejsou tak populární, zvážíme, ale konečné rozhodnutí je na správci seznamu filtrů.
- Skripty proti blokování budou blokovány pouze v případě, že omezují nebo ovlivňují funkčnost webových stránek.
- Skripty proti blokování nebudou blokovány v případech, kdy je to zakázáno zákonem.
- Pravidla, která často způsobují problémy při práci s některými webovými stránkami, budou odstraněna.

## Filtr ochrany sledování

**Co bude tímto filtrem blokováno?**

- Tento filtr zablokuje všechny slídiče, které shromažďují osobní údaje uživatele.

**Sledování** definujeme jako shromažďování údajů o identitě nebo aktivitě jednotlivce na jedné nebo více webových stránkách. I když jsou tyto údaje považovány za neidentifikovatelné, stále se jedná o sledování.

**Slídič** je online skript, jehož jediným účelem nebo jedním z účelů je sledování.

**Omezení a výjimky**

Pokud se na pravidlo vztahuje seznam omezení popsaný níže, nebude přidáno do tohoto filtru.

- Pravidla, která způsobují problémy s funkčností webových stránek, budou odstraněna.
- Pravidla pro konkrétní webové stránky budou přidána pouze v případě, že má webová stránka dostatečnou návštěvnost. Návštěvnost se určuje podle otevřených statistik (pokud jsou k dispozici), nebo jinými způsoby, např. podle počtu sledujících na sociálních sítích. Návštěvnost webových stránek je považována za dostatečnou, pokud mají 100 tisíc návštěv za měsíc. Přidání pravidla pro webové stránky, které nejsou tak populární, zvážíme, ale konečné rozhodnutí je na správci seznamu filtrů.

## AdGuard filtr sledování URL

**Co bude tímto filtrem blokováno?**

- Tento filtr odstraní z URL adres všechny sledovací parametry.

**Sledování** definujeme jako shromažďování údajů o identitě nebo aktivitě jednotlivce na jedné nebo více webových stránkách. I když jsou tyto údaje považovány za neidentifikovatelné, stále se jedná o sledování.

**Omezení a výjimky**

Pokud se na pravidlo vztahuje seznam omezení popsaný níže, nebude přidáno do tohoto filtru.

- Pravidla, která by snižovala úroveň zabezpečení uživatelů, budou odstraněna.
- Pravidla, která způsobují problémy s funkčností webových stránek, budou odstraněna.
- Pravidla pro konkrétní webové stránky budou přidána pouze v případě, že má webová stránka dostatečnou návštěvnost. Návštěvnost se určuje podle otevřených statistik (pokud jsou k dispozici), nebo jinými způsoby, např. podle počtu sledujících na sociálních sítích. Návštěvnost webových stránek je považována za dostatečnou, pokud mají 100 tisíc návštěv za měsíc. Přidání pravidla pro webové stránky, které nejsou tak populární, zvážíme, ale konečné rozhodnutí je na správci seznamu filtrů.

## Filtr sociálních médií

**Co bude tímto filtrem blokováno?**

- Tento filtr zablokuje widgety sociálních médií (na webových stránkách třetích stran), jako jsou tlačítka "Like" a "Share", widgety doporučení a další.

**Omezení a výjimky**

Pokud se na pravidlo vztahuje seznam omezení popsaný níže, nebude přidáno do tohoto filtru.

- Pravidla, která blokují widgety, které jsou součástí funkcí webových stránek, například "Komentáře", "Vložený příspěvek", "Průzkumy" nebo widgety, které vyžadují autorizaci prostřednictvím sociálních sítí.
- Pravidla, která blokují odkazy na komunity webových stránek v sociálních sítích.
- Pravidla, která způsobují problémy s funkčností webových stránek, budou odstraněna.
- Pravidla pro konkrétní webové stránky budou přidána pouze v případě, že má webová stránka dostatečnou návštěvnost. Návštěvnost se určuje podle otevřených statistik (pokud jsou k dispozici), nebo jinými způsoby, např. podle počtu sledujících na sociálních sítích. Návštěvnost webových stránek je považována za dostatečnou, pokud mají 100 tisíc návštěv za měsíc. Přidání pravidla pro webové stránky, které nejsou tak populární, zvážíme, ale konečné rozhodnutí je na správci seznamu filtrů.

## Filtr obtěžování

**Co bude tímto filtrem blokováno?**

- Tento filtr blokuje překážky na stránce. Tyto prvky nejsou reklamou, ale brání ve výhledu a ztěžují zobrazení skutečného obsahu webové stránky. Mezi tyto prvky patří oznámení o souborech cookies, widgety třetích stran, vyskakovací okna na stránce, formuláře pro přihlášení k odběru e-mailů, bannery se speciálními nabídkami a agresivně umístěné widgety sociálních médií.

**Omezení a výjimky**

Pokud se na pravidlo vztahuje seznam omezení popsaný níže, nebude přidáno do tohoto filtru.

- Pravidla, která blokují prvky, jež jsou nezbytné pro fungování webových stránek (např. autorizační formuláře), nebudou blokována, i když splňují jiné požadavky.
- Pravidla, která způsobují problémy s funkčností webových stránek, budou odstraněna.
- Pravidla pro konkrétní webové stránky budou přidána pouze v případě, že má webová stránka dostatečnou návštěvnost. Návštěvnost se určuje podle otevřených statistik (pokud jsou k dispozici), nebo jinými způsoby, např. podle počtu sledujících na sociálních sítích. Návštěvnost webových stránek je považována za dostatečnou, pokud mají 100 tisíc návštěv za měsíc. Přidání pravidla pro webové stránky, které nejsou tak populární, zvážíme, ale konečné rozhodnutí je na správci seznamu filtrů.

## Filtr pro odblokování užitečných reklam

Na rozdíl od jiných filtrů tento filtr **odblokuje** určitou reklamu. Více se o tom dočtete v článku o [reklamách ve vyhledávání a vlastní propagaci](../search-ads).

**Co bude tímto filtrem odblokováno?**

- Reklamy ve vyhledávání (reklamy, které se zobrazují mezi výsledky při použití vyhledávače).
- Vlastní propagace webové stránky (když reklama na webové stránce propaguje právě tuto webovou stránku nebo jiné webové stránky/sociální média apod., které s ní úzce souvisejí).

**Omezení a výjimky**

- Pravidla, která způsobují problémy s funkčností webových stránek, budou odstraněna.
- Pravidla pro konkrétní webové stránky budou přidána pouze v případě, že má webová stránka dostatečnou návštěvnost. Návštěvnost se určuje podle otevřených statistik (pokud jsou k dispozici), nebo jinými způsoby, např. podle počtu sledujících na sociálních sítích. Návštěvnost webových stránek je považována za dostatečnou, pokud mají 100 tisíc návštěv za měsíc. Přidání pravidla pro webové stránky, které nejsou tak populární, zvážíme, ale konečné rozhodnutí je na správci seznamu filtrů.

## Požadavky na kvalitu pravidel filtrování

- Pravidla by měla být co nejefektivnější z hlediska výkonu.
- Pravidla pro výjimky by měla být co nejkonkrétnější, aby se zabránilo zbytečnému odblokování.
- Pravidla pro vkládání CSS a JS by se měla používat co nejméně a pouze v případech, kdy bez nich nelze reklamy blokovat.