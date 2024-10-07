---
title: Jak funguje blokování reklam
sidebar_position: 1
---

AdGuard has many ad-blocking products for different platforms, each with its own unique features. Všechny však spojuje to, že blokují reklamy a slídiče. Tento článek popisuje, jak blokování reklam funguje zevnitř.

:::note

Zde se nezabýváme DNS filtrováním. Jedná se o jiný způsob blokování reklam, který má své výhody i nevýhody. Kliknutím na tento odkaz získáte [další informace o DNS filtrování](https://adguard-dns.io/kb/general/dns-filtering#how-does-dns-filtering-work).

:::  

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/Xq_CUdh0T_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Obecný princip

Základem každého blokátoru reklam jsou seznamy filtrů, kterým se také říká filtry. Filtry jsou doslova seznamy pravidel zapsané ve speciální syntaxi. Blokátory reklam této složité syntaxi rozumí. Interpretují pravidla filtrování a provádějí akce s webovým provozem na základě toho, co jim pravidla nařizují: blokují určité prvky, mění webové stránky určitým způsobem atd.

![How ad blocking works](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/adblockingworks.png)

## Seznamy filtrů

Pro lepší pochopení blokování reklam je důležité znát základní principy fungování filtrů.

Pravidla filtrování, ze kterých se filtry skládají, se nevytvářejí automaticky. Vyvíjejí je správci filtrů, včetně profesionálů a dobrovolníků, kteří pomocí vývojářských konzolí prohlížeče a dalších nástrojů (např. protokolu filtrování AdGuard) určují, která pravidla budou blokovat konkrétní reklamu nebo slídič. Tento popis procesu je velmi zjednodušený — některé reklamy je obzvláště obtížné zablokovat a vyžadují více pravidel, více iterací a použití složité syntaxe.

A i když je pravidlo nakonec přidáno do filtru, neznamená to, že tam zůstane navždy. Mění se reklamy, mění se způsoby zobrazování stejných reklam na stejných webových stránkách a musí se měnit i pravidla filtrování. Někdy pravidla zastarají, objeví se nová reklama nebo je potřeba nové pravidlo filtrování pro blokování stejné reklamy. Filtry často spravuje jeden člověk, ale ani tým správců nemůže neustále sledovat celý web. Proto má mnoho blokátorů reklam nástroje, které uživatelům pomáhají snadno nahlásit problémy související s filtrem.

![Filter update scheme](https://cdn.adtidy.org/public/Adguard/Blog/manifestv3/filtersupdates.png)

Uživatelé AdGuardu [mají přístup ke speciálnímu webovému nástroji pro vytváření hlášení](https://reports.adguard.com/new_issue.html). Díky stížnostem uživatelů se mohou tvůrci filtrů soustředit na opravu svých seznamů filtrů a ne na hledání nových a starých neblokovaných reklam na internetu.

Filtry umí více než jen blokovat reklamy. Existují filtry, které blokují sledování, widgety sociálních médií a obtěžující prvky, jako jsou upozornění na soubory cookies. Různí uživatelé si mohou zvolit různé kombinace filtrů podle svých osobních preferencí. Existují webové stránky jako [filterlists.com](https://filterlists.com/), které se věnují seznamům filtrů a mají obrovské databáze.

Vyvíjíme a spravujeme [vlastní sadu seznamů filtrů](../adguard-filters), které lze použít s AdGuardem nebo jinými blokátory reklam.

## Typy pravidel filtrování

Existuje mnoho typů pravidel filtrování, která slouží k různým účelům. V závislosti na použitém blokátoru reklam a zejména na operačním systému nemusí být některé typy pravidel podporovány.

### Základní pravidla filtrování

Aby se reklama mohla zobrazit na webové stránce nebo v aplikaci, musí být nejprve načtena ze serveru. Za tímto účelem musí prohlížeč nebo aplikace odeslat webový požadavek. Nejzákladnějším způsobem, jak zabránit zobrazení reklamy na obrazovce, je zablokovat tento požadavek tak, aby se nikdy nedostal na server a tím pádem nedošlo k odpovědi.

Všechny produkty AdGuardu mohou v zásadě blokovat webové požadavky podle pravidel aktivního filtru. Tato metoda je velmi účinná při zastavení zobrazování reklamy, ale má některé nevýhody. Nejzřetelnější je, že místo, které reklama zabírala, zůstane prázdné nebo obsazené zbytkem reklamy.

### Kosmetická pravidla filtrování

Každá webová stránka má objektový model dokumentu (DOM), dokument HTML obsahující strukturu a prvky této stránky. Protože reklamy jsou také prvky stránky, zaznamenávají se v DOM. Blokátory reklam mohou odstraňovat části DOM, zatímco pravidla filtrování jim pomáhají pochopit, které části jsou reklamy a měly by být odstraněny a které části by měly zůstat nedotčené.

Tato metoda umožňuje vyhnout se výše zmíněným prázdným místům a zbytkům reklamy a provádět další složitější úkoly.

### HTML pravidla filtrování

Ve většině případů stačí k filtrování reklam použít výše uvedená základní a kosmetická pravidla. Pokud je však nutné změnit kód HTML samotné stránky před jejím načtením, potřebujete HTML pravidla pro filtrování obsahu. Tato pravidla umožňují určit prvky HTML, které mají být vyříznuty ještě před načtením stránky prohlížečem.

Tato pravidla jsou poměrně složitá a vyžadují, aby blokátor reklam získal určitá přístupová práva, takže ne všechny platformy je podporují. V současné době tato pravidla fungují pouze v doplňku AdGuard pro Firefox a v aplikacích AdGuard pro Windows, Mac a Android.

:::info

Existují i další typy pravidel filtrování, ale jejich fungování vyžaduje pokročilejší technické znalosti. Pokud máte zájem, podívejte se na [našeho komplexního průvodce pravidly filtrování v odkazovaném článku](../create-own-filters).

:::
