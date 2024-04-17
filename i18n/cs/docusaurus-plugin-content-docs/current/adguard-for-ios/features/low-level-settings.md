---
title: Nízkoúrovňová nastavení
sidebar_position: 6
---

:::info

Tento článek popisuje AdGuard pro iOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

![Low-level settings \*mobile\_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

Chcete-li otevřít _Nízkoúrovňová nastavení_, přejděte do _Nastavení_ → _Obecné_ → (Aktivujte _Pokročilý režim_, pokud je vypnutý) → _Pokročilá nastavení_ → _Nízkoúrovňová nastavení_.

Nastavení v této části je většinou lepší ponechat beze změny: používejte je pouze v případě, že jste si jisti tím, co děláte, nebo pokud vás o to požádal tým podpory. Některá nastavení však lze změnit bez jakéhokoli rizika.

### Blokování IPv6 {#blockipv6}

Na každý dotaz DNS odeslaný za účelem získání adresy IPv6 vrátí naše aplikace prázdnou odpověď (jako by tato adresa IPv6 neexistovala). Nyní existuje možnost nevracet adresy IPv6. Na tomto místě se popis této funkce stává příliš technickým: konfigurace nebo zakázání protokolu IPv6 je výhradní doménou pokročilých uživatelů. Pokud patříte mezi ně, bude dobré vědět, že tuto funkci nyní máme, pokud ne — není třeba se do ní nořit.

### Bootstrap a záložní servery {#bootstrap-fallback}

Záložní server je záložní DNS server. Pokud jste vybrali DNS server a něco se s ním stalo, je třeba nastavit záložní server DNS, dokud hlavní server neodpoví.

S Bootstrap serverem je to trochu složitější. Aby mohl AdGuard pro iOS používat vlastní zabezpečený DNS server, musí naše aplikace nejprve získat jeho IP adresu. K tomuto účelu se ve výchozím nastavení používá systém DNS, ale někdy to z různých důvodů není možné. V takových případech lze k získání IP adresy vybraného zabezpečeného serveru DNS použít Bootstrap. Zde jsou dva příklady, které ilustrují, kdy může pomoci vlastní server Bootstrap:

1. Pokud výchozí systémový DNS server nevrací IP adresu zabezpečeného serveru DNS a není možné použít zabezpečený server.
2. Pokud se současně používá naše aplikace a síť VPN třetí strany a není možné použít systémový DNS jako Bootstrap.
