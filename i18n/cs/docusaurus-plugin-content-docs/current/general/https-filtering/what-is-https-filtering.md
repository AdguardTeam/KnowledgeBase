---
title: What is HTTPS filtering
sidebar_position: 1
---

### Co je HTTPS?

HTTPS (HyperText Transfer Protocol Secure) je rozšíření protokolu HTTP, které podporuje šifrování pro zvýšení bezpečnosti. Tento protokol se používá k bezpečnému přenosu cenných informací, jako jsou osobní údaje, údaje o kreditních kartách atd.

Používání protokolu HTTPS je velmi výhodné, protože šifrovaný provoz je chráněn proti odposlechu třetí stranou, což můžeme jen uvítat. HTTPS acceptance has been growing in recent years, mainly because it is [encouraged by Google](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) and also due to the emergence of the free certificate authority [Let’s Encrypt](https://en.wikipedia.org/wiki/Let's_Encrypt).

Níže uvedený diagram popisuje rozdíl mezi prostým protokolem HTTP a zabezpečeným protokolem HTTPS.

![Co je HTTPS?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https.png)

### Co je to bezpečnostní certifikát?

Sručně řečeno, HTTPS znamená šifrování dat. Ale stále je tu problém: jak si můžete být jisti, že jste navázali šifrované připojení se správnou webovou stránkou? Zde přicházejí ke slovu bezpečnostní certifikáty. A certificate serves as proof that the website is really who or what it claims to be. Pokud webová stránka takový certifikát nemá nebo pokud certifikát obsahuje nesprávné informace, prohlížeč vám neumožní navázat zabezpečené připojení. Je důležité, aby certifikát, který webová stránka používá, byl vydán certifikační autoritou (CA), které prohlížeč důvěřuje. Taková certifikační autorita (CA) zaručuje, že certifikát SSL je skutečně vydán vlastníkovi webových stránek.

### Proč musí být AdGuard schopen filtrovat HTTPS?

Většina webů nyní používá protokol HTTPS a totéž platí i pro reklamu. Here are a few popular websites where you can’t remove ads without HTTPS filtering: youtube.com, facebook.com, and x.com.

### Jak funguje HTTPS filtrování?

Kdyby to bylo snadné, protokol HTTPS by nebyl tak bezpečný. Když se prohlížeč pokusí připojit k serveru, AdGuard vytvoří dvě zabezpečená připojení: jedno s prohlížečem (nebo jinou aplikací) a druhé se serverem. Prohlížeč musí důvěřovat AdGuardu a připojením, která vytváří. Za tímto účelem AdGuard generuje speciální (a jedinečný) kořenový certifikát a instaluje jej do systému a v případě potřeby i do některých prohlížečů (např. Firefox). AdGuard can now see the data packets inside the secure connection and thus do its job — block ads and trackers.

For better understanding, we have depicted this process:

![How does HTTPS filtering work](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

### Zůstane můj provoz zašifrovaný a zabezpečený?

Samozřejmě! Vaše připojení se vzdáleným serverem zůstává šifrované a zabezpečené. AdGuard, stejně jako váš prohlížeč, kontroluje certifikát serveru, než se rozhodne, zda jej bude filtrovat.

Filtrování HTTPS má však i své nevýhody. Nejdůležitější je, že před prohlížečem skrývá skutečný certifikát webové stránky. Místo toho prohlížeč vidí certifikát vydaný AdGuardem.

Z tohoto důvodu jsme přijali další opatření ke zvýšení bezpečnosti připojení.

### Finanční webové stránky a webové stránky s citlivými osobními údaji

AdGuard ve výchozím nastavení nefiltruje žádné informace na webových stránkách bank, platebních systémů ani na webových stránkách s cennými osobními údaji. Vedeme seznam [tisíců výjimek](https://github.com/AdguardTeam/HttpsExclusions).

Pokud si myslíte, že by se do tohoto seznamu měly přidat nějaké webové stránky, [dejte nám prosím vědět](https://github.com/AdguardTeam/HttpsExclusions/issues/new).

### Certifikáty EV (Extended Validation)

AdGuard umožňuje zakázat filtrování všech webových stránek, které používají rozšířené ověřovací certifikáty.

Certifikát EV nabízí vyšší úroveň zabezpečení a poskytuje více záruk než běžný certifikát, protože dokazuje, že webová stránka není podvodná nebo falešná.

### Problémy související s filtrováním HTTPS

[Studie z roku 2017](https://cdn.adtidy.org/public/Adguard/Blog/https/interception-ndss17.pdf) ukazuje, že 5 až 10 % připojení HTTPS je vytvořeno aplikacemi filtrujícími HTTPS. Obvykle to dělají různé druhy antivirového softwaru. Špatnou zprávou je, že 24 z 26 testovaných antivirů různým způsobem snížilo úroveň zabezpečení připojení a dvě třetiny z nich vytvořily připojení náchylné ke zneužití.

Výzkumníci dospěli k jednoduchému závěru: komunita zabývající se internetovou bezpečností by měla věnovat velkou pozornost aplikacím, které filtrují zabezpečená připojení. Vývojáři takového softwaru musí věnovat velkou pozornost kvalitě implementace filtrování.

Rádi bychom poznamenali, že AdGuard nebyl ve výše uvedené studii testován. Provedli jsme odhady podle jejich sady testů a v době testování jsme mohli získat maximální skóre — A\*. Toto skóre však není perfektní. V průběhu studie výzkumníci zjistili některé problémy, které byly v závěrečném hodnocení vynechány.

V AdGuardu s těmito závěry plně souhlasíme. Kromě toho bychom chtěli být vůči uživatelům co nejotevřenější a hovořit o problémech, se kterými se v současné době potýkáme a o krocích, které podnikáme ke zlepšení kvality a bezpečnosti mechanismu filtrování. Seznam těchto problémů je seřazen podle priority.

Většina problémů zjištěných ve výše uvedené studii souvisí s mechanismy ověřování platnosti certifikátů. Na to se chceme zaměřit nejdříve. Pracujeme na samostatné knihovně pro ověřování certifikátů. Kromě toho chceme, aby byla open source. [Tento článek](../known-issues) uvádí všechny známé nevýhody filtrování HTTPS v AdGuardu a naše plány na jejich odstranění.

#### Problémy s filtrováním HTTPS v Androidu 7+

[Počínaje systémem Android 7](https://adguard.com/en/blog/android-nougat-release-and-what-does-it-mean-for-adguard-users.html) musí vývojáři výslovně uvést, že jejich aplikace důvěřují certifikátům nainstalovaným uživatelem. Ne každý to chce nebo se tím obtěžuje. Co to pro AdGuard znamená? AdGuard instaluje uživatelský certifikát, aby mohl filtrovat přenosy HTTPS. Pokud aplikace tomuto certifikátu nedůvěřuje, její přenosy HTTPS nebudou filtrovány. Co dělat?

V první řadě stojí za zmínku, že mnoho aplikací (i těch moderních) stále důvěřuje uživatelským certifikátům. V tomto ohledu se nic nezměnilo. Téměř všechny prohlížeče těmto certifikátům také důvěřují. Možná existují neobvyklé prohlížeče, které to nedělají, ale ty jsou vzácnou výjimkou z běžné praxe.

Pokud má vaše zařízení přístup root, můžete certifikát AdGuardu přesunout do systémového úložiště. Tímto způsobem se nemusíte starat o oprávnění, která daná aplikace může nebo nemusí mít — provoz HTTPS bude filtrován pro moderní aplikace stejně dobře jako pro starší. Mějte na paměti, že v tomto případě se na AdGuard vztahují některá další bezpečnostní omezení (např. HPKP nebo `Expect-CT`).

### Jak ručně zkontrolovat kvalitu HTTPS?

Existuje několik specializovaných webových stránek, kde si můžete ověřit kvalitu připojení HTTPS. Tyto webové stránky kontrolují, zda je váš prohlížeč (nebo v našem případě prohlížeč plus AdGuard) náchylný k běžným zranitelnostem. Pokud plánujete používat jakýkoli program, který filtruje HTTPS, nikoli nutně AdGuard (např. antivir), doporučujeme zkontrolovat kvalitu připojení na těchto webových stránkách.

- [https://www.ssllabs.com/ssltest/viewMyClient.html](https://www.ssllabs.com/ssltest/viewMyClient.html)
- [https://www.howsmyssl.com/](https://www.howsmyssl.com/)
- [https://badssl.com/](https://badssl.com/)
