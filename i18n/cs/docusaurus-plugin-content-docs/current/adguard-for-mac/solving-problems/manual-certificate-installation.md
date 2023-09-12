---
title: Ruční instalace certifikátu
sidebar_position: 1
---

:::info

Tento článek popisuje AdGuard pro macOS, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard for Mac potřebuje nainstalovat kořenový certifikát do úložiště certifikátů, aby mohl [filtrovat HTTPS provoz](/general/https-filtering/what-is-https-filtering). Tato akce se ve většině případů provede automaticky při prvním spuštění aplikace, ale uživatelé prohlížečů založených na technologii Gecko (Firefox, Waterfox atd.), kteří mají pro svůj prohlížeč nastaveno hlavní heslo, mohou být nuceni provést další kroky (protože tyto prohlížeče používají vlastní úložiště certifikátů namísto systémového). Na výzvu musí buďto zadat hlavní heslo (aby AdGuard získal přístup k úložišti certifikátů), nebo certifikát nainstalovat ručně.

Ruční instalace certifikátu do prohlížeče podobného Firefoxu:

  1. Otevřete "Předvolby"

  2. Jděte do "Ochrana soukromí & Zabezpečení" — "Certifikáty"

  3. Klikněte na "Zobrazit certifikáty"

  4. Přejděte na kartu "Oprávnění" a klikněte na tlačítko "Importovat..."

  5. Vyberte soubor `/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` nebo si jej stáhněte z http://local.adguard.org/cert pomocí prohlížeče založeného na Chromiu (např. Google Chrome nebo nový Edge) a se spuštěným HTTPS filtrováním v AdGuardu

Přesné úkony vyžadované v různých prohlížečích založených na technologii Gecko se mohou lišit, ale obecná posloupnost a cesta k souboru `AdGuard Personal CA.cer` budou podobné nebo stejné.

PS: Pro verze [aplikace Setapp](https://setapp.com/apps/adguard) je cesta k souboru následující: `/Library/Application Support/com.adguard.mac.adguard-setapp/AdguardCore/Adguard Personal CA.cer`
