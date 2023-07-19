---
title: Přesunutí certifikátu CA do systémového úložiště na zařízeních s root přístupem
sidebar_position: 14
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://adguard.com/download.html?auto=true)

:::

AdGuard pro Android nabízí funkci nazvanou [HTTPS filtrování](../../overview#https-filtering), která umožňuje [filtrovat šifrovaný provoz HTTPS](/general/https-filtering/what-is-https-filtering) v zařízení se systémem Android. Tato funkce vyžaduje přidání certifikátu CA AdGuardu do seznamu důvěryhodných certifikátů.

V zařízeních bez přístupu root lze certifikáty CA nainstalovat do **Uživatelského úložiště**. Pouze omezená podmnožina aplikací (většinou prohlížeče) důvěřuje certifikátům CA nainstalovaným do uživatelského úložiště, což znamená, že filtrování HTTPS bude fungovat pouze pro tyto aplikace.

Na zařízeních s root přístupem však můžete nainstalovat certifikát do **Systémového úložiště** a povolit HTTPS filtrování provozu jiných aplikací.


Zde je návod, jak to udělat:

## Jak nainstalovat certifikát AdGuardu do systémového úložiště (na zařízení s root přístupem)

1. Povolte filtrování HTTPS v AdGuardu pro Android a uložte certifikát AdGuardu do uživatelského úložiště (v případě potřeby použijte [tento pokyn](../../overview#https-filtering))

> Od verze 4.1 AdGuard pro Android si uživatelé mohou do uživatelského úložiště nainstalovat dva certifikáty, které jim pomohou filtrovat webové stránky v prohlížeči Chrome.

2. Jděte do **aplikace AdGuard** → **Menu** (≡) → **Nastavení** → **Síť** → **HTTPS filtrování** → **Bezpečnostní certifikát** → klepněte na "**Kopírovat do systémového úložiště**"

To stačí pro starší verze Magisk.

Pokud však máte novější verzi, zobrazí se tato zpráva:

> Nelze zkopírovat certifikát do systémového úložiště. Zkuste použít modul "AdGuard Certificate".

V takovém případě přejděte k následujícím krokům:

3. Přejděte do **Magisk** → **Nastavení**

![Otevřít nastavení Magisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-1.png)

4. Zapněte **Zygisk**

![Zapnout Zygisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-2.png)

![Návrat na hlavní obrazovku Magisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-3.png)

5. Stáhněte soubor `.zip` (modulu "AdGuard Certificate") z nejnovější vydání na [na GitHubu](https://github.com/AdguardTeam/adguardcert/releases/latest/)

6. Přejděte do **Magisk** → **Moduly** → **Instalovat z úložiště** a vyberte stažený soubor `.zip`

![Otevřít moduly Magisk *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

![Instalovat z úložiště *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

![Vybrat modul AdGuard Certificate *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

7. Restartujte

![Restartovat zařízení *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

Pokud vyjde nová verze modulu "AdGuard Certificate", zopakujte kroky 3-7 a modul aktualizujte.

Modul vykonává svou práci během zavádění systému. Pokud se váš certifikát AdGuardu změní, budete muset zařízení restartovat, aby se nový certifikát zkopíroval do systémového úložiště.

### Prohlížeč Bromite

:::note

In order for the **Bromite** browser to work properly, in addition to the steps mentioned above, you need to set "Allow user certificates" in `chrome://flags` to "Enabled" state.

:::

### Chrome a prohlížeče založené na Chromium

Zkrátka a dobře, pokud použijete modul "AdGuard Certificate", nebudete mít s filtrováním HTTPS v prohlížečích Chrome a Chromium na zařízeních s přístupem root žádné problémy.

Zde je trochu podrobnější vysvětlení: Chrome (a následně mnoho dalších prohlížečů založených na Chromium) začal nedávno vyžadovat protokoly CT pro certifikáty CA nalezené v **Systémovém úložišti**. Modul "AdGuard Certificate" zkopíruje certifikát CA AdGuardu z **Uživatelského úložiště** do **Systémového úložiště**. Obsahuje také modul Zygisk, který vrátí všechny úpravy provedené přes Magisk pro [některé prohlížeče](https://github.com/AdguardTeam/adguardcert/blob/master/zygisk_module/jni/browsers.inc). Prohlížeče tak najdou certifikát AdGuardu pouze v Uživatelském úložišti a nebudou si stěžovat na chybějící protokol CT, zatímco ostatní aplikace budou nadále používat stejný certifikát ze Systémového úložiště.
