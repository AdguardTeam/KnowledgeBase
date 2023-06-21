---
title: Problémy s instalací certifikátu na zařízeních se systémem Android 11+
sidebar_position: 12
---

:::note

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

Aby bylo možné filtrovat provoz HTTPS (což je velmi důležité, protože většina reklam používá HTTPS), musí AdGuard nainstalovat certifikát do uživatelského úložiště vašeho zařízení. Ve starších verzích operačního systému Android se to provádělo automaticky, ale v Androidu 11 a novějších verzích jej uživatelé musí [nainstalovat ručně](../../overview#https-filtering).

![Certifikát *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/Android/3-5/cert-en.gif)

Pokud se během ruční instalace certifikátu vyskytnou problémy (například jste certifikát nainstalovali, ale aplikace jej stále ignoruje), níže naleznete možná řešení.

## Instalace certifikátu do *Zabezpečené složky*

Pokud používáte [ *Zabezpečenou složku* ve vašem zařízení Android](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) (to platí hlavně pro zařízení Samsung), můžete při instalaci certifikátu HTTPS narazit na určité potíže. Jde o to, že *Zabezpečená složka* má vlastní úložiště, kde jsou uloženy certifikáty. Pokud vše provedete podle pokynů [popsaných zde](../../overview#https-filtering), certifikát se nainstaluje do hlavního úložiště a nehraje pro váš blokátor reklam v zabezpečené složce *žádnou roli*. Chcete-li tedy tento problém vyřešit a nainstalovat certifikát pro AdGuard pro Android do úložiště *Zabezpečené složky*, postupujte podle tohoto návodu:


1. Po instalaci aplikace a připojení k síti VPN klepněte na *Zapnout* vedle zprávy *Filtrování HTTPS je vypnuto*.
2. Klepněte na *Další* → *Další* → *Uložit nyní* → *Povolit*.
3. Certifikát uložte (v této fázi jej můžete přejmenovat, abyste jej snáze našli).
4. Po zobrazení obrazovky *Jak nainstalovat certifikát?* NEKLEPEJTE na položku *Otevřít nastavení*.
5. Minimalizujte aplikaci a přejděte do zabezpečené složky.
6. Klepněte na menu se třemi tečkami a přejděte na další nastavení zabezpečení.
7. Klepněte na *Nainstalovat z úložiště* → *CA Certifikát* → *Přesto nainstalovat* → zadejte gesto/heslo/otisk prstu → vyhledejte uložený certifikát a vyberte jej.
8. Vraťte se do aplikace AdGuard a zavřete obrazovku "Jak nainstalovat certifikát?" klepnutím na tlačítko s křížkem.
9. Hotovo! Certifikát byl nainstalován.
