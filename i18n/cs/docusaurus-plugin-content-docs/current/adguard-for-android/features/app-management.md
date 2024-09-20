---
title: Správa aplikací
sidebar_position: 2
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

Do modulu _Správa aplikací_ se dostanete klepnutím na kartu _Správa aplikací_ (třetí ikona zleva v dolní části obrazovky). V této části můžete spravovat nastavení oprávnění a filtrování pro všechny aplikace nainstalované v zařízení.

![App management \*mobile\_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

Klepnutím na aplikaci můžete spravovat její nastavení:

- Filtrovat její data pomocí AdGuardu
- Blokovat reklamy a slídiče v této aplikaci (_Filtrovat obsah aplikace_)
- Filtrovat provoz HTTPS (pro aplikace, které nejsou v prohlížeči, vyžaduje [instalaci certifikátu CA AdGuard do systémového úložiště](/adguard-for-android/solving-problems/https-certificate-for-rooted/), k dispozici na zařízeních s přístupem root)
- Směrovat skrze zadaný proxy server nebo AdGuard VPN v režimu integrace

![App management in Chrome \*mobile\_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

Z kontextového menu můžete také přistupovat ke statistikám aplikace.

![App management in Chrome. Context menu \*mobile\_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### “Kompatibilní” a ”nekompatibilní” aplikace

Most apps work correctly when filtered. U takových aplikací je jejich provoz směrován skrze AdGuard a ve výchozím nastavení filtrován.

Některé aplikace, například Správce stahování, rádio, systémové aplikace s UID 1000 a 1001 (např. služby Google Play), jsou “nekompatibilní“ a mohou při přesměrování skrze AdGuard fungovat nesprávně. Proto se při pokusu o směrování nebo filtrování všech aplikací může zobrazit následující upozornění:

![Route all apps dialog \*mobile\_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

Pro zajištění správného fungování všech aplikací nainstalovaných v zařízení důrazně doporučujeme, abyste skrze AdGuard směrovali pouze kompatibilní aplikace. Úplný seznam aplikací, které se nedoporučují filtrovat, najdete v části _Nastavení_ → _Obecné_ → _Pokročilé_ → _Nízkoúrovňová nastavení_ → _Ochrana_ → _Aplikace ve výjimkách_.
