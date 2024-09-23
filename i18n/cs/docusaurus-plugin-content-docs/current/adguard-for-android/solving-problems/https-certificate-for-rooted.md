---
title: Přesunutí certifikátu CA do systémového úložiště na zařízeních s root přístupem
sidebar_position: 14
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard pro Android dokáže [filtrovat šifrovaný provoz HTTPS](/general/https-filtering/what-is-https-filtering), čímž blokuje většinu reklam a slídičů na webových stránkách. Na zařízeních s přístupem root vám AdGuard také umožňuje filtrovat provoz HTTPS v aplikacích. HTTPS filtrování vyžaduje přidání certifikátu CA AdGuardu do seznamu důvěryhodných certifikátů.

V zařízeních bez přístupu root lze certifikáty CA nainstalovat do **uživatelského úložiště**. Pouze omezená podmnožina aplikací (většinou prohlížeče) důvěřuje certifikátům CA nainstalovaným do uživatelského úložiště, což znamená, že filtrování HTTPS bude fungovat pouze pro tyto aplikace.

Na zařízeních s přístupem root můžete nainstalovat certifikát do **systémového úložiště**. To umožní AdGuardu filtrovat HTTPS provoz i v ostatních aplikacích.

Zde je návod, jak to udělat:

## Jak nainstalovat certifikát AdGuardu do systémového úložiště

1. Otevřete *AdGuard → Nastavení → Filtrování → Síť → HTTPS filtrování → Bezpečnostní certifikáty*.

1. Pokud ještě nemáte žádný certifikát, **nainstalujte AdGuard Personal CA do uživatelského úložiště**. To umožní AdGuardu filtrovat HTTPS provoz v prohlížečích.

1. **Nainstalujte AdGuard Intermediate CA do uživatelského úložiště**. Budete ho potřebovat ke spuštění modulu adguardcert Magisk, který umožňuje přesouvat certifikáty do systémového úložiště.

    ![Install the certificate *mobile_border](https://cdn.adtidy.org/blog/new/asx1xksecurity_certificates.png)

1. Nainstalujte [nejnovější verzi modulu **adguardcert** Magisk](https://github.com/AdguardTeam/adguardcert/releases/latest/).

1. Otevřete *Magisk → Moduly → Instalovat z úložiště* a vyberte stažený soubor **adguardcert**. The AdGuard Personal CA certificate will be copied to the system store.

    ![Open Magisk modules *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

    ![Install from storage *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

    ![Select adguardcert *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

1. Klepněte na **Restartovat**.

    ![Reboot the device *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

Po přesunu vám **AdGuard Personal CA** v systémovém úložišti umožní filtrovat provoz HTTPS v aplikacích, zatímco **AdGuard Intermediate CA** v uživatelském úložišti vám umožní filtrovat HTTPS provoz v prohlížečích založených na Chromiu (viz níže proč).

## Známé problémy s prohlížeči Chrome a Chromium

Chrome a další prohlížeče založené na platformě Chromium vyžadují protokoly transparentnosti certifikátů (CT) pro certifikáty umístěné v systémovém úložišti. Protokoly CT neobsahují informace o certifikátech vydaných aplikacemi filtrujícími protokol HTTPS. Proto AdGuard vyžaduje další certifikát v uživatelském úložišti, aby mohl v těchto prohlížečích filtrovat provoz HTTPS.

### Prohlížeč Bromite

Kromě výše uvedeného problému, Bromite ve výchozím nastavení nedůvěřuje certifikátům v uživatelském úložišti. Chcete-li filtrovat provoz HTTPS, otevřete Bromite, přejděte na `chrome://flags` a nastavte *Povolit uživatelské certifikáty* na *Povoleno*. **To platí pro zařízení s přístupem root i bez něj**.
