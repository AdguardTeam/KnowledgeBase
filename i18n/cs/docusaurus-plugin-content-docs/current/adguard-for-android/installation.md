---
title: Instalace
sidebar_position: 2
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Chcete-li zjistit, jak funguje, [stáhněte si aplikaci AdGuard](https://agrd.io/download-kb-adblock)

:::

## Požadavky na systém

**Verze OS:** Android 7.0 nebo vyšší

**RAM:** alespoň 2 GB

**Volné místo na disku:** 500 MB

## Instalace

Většina aplikací pro Android je distribuována prostřednictvím služby Google Play. AdGuard zde však není prezentován, protože společnost Google zakazuje distribuci blokátorů reklam na úrovni sítě prostřednictvím služby Google Play, tj. aplikace, které blokují reklamy v jiných aplikacích. Další informace o restriktivní politice Google najdete v [našem blogu](https://adguard.com/blog/adguard-google-play-removal.html).

Proto můžete AdGuard pro Android nainstalovat pouze ručně. Chcete-li aplikaci používat v mobilním zařízení, musíte provést následující kroky.

1. **Stáhněte si aplikaci do zařízení**. Zde je několik způsobů, jak to můžete udělat:

    - přejděte na [náš web](https://adguard.com/adguard-android/overview.html) a klepněte na tlačítko *Stáhnout*
    - spusťte prohlížeč a zadejte následující URL: [https://adguard.com/apk](https://adguard.com/apk)
    - nebo naskenujte tento QR kód:

    ![QR code *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst-qr-en-1.png)

1. **Povolte instalaci aplikací z neznámých zdrojů**. Po dokončení stahování souboru klepněte na *Otevřít* v oznámení.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_1.png)

    Zobrazí se vyskakovací okno. Klepněte na *Nastavení*, přejděte na *Instalace neznámých aplikací* a udělte oprávnění pro prohlížeč, který jste použili ke stažení souboru.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_3.png)

1. **Nainstalujte aplikaci**. Jakmile prohlížeč získá potřebná oprávnění, systém se vás zeptá, zda chcete aplikaci AdGuard nainstalovat. Klepněte na *Instalovat*.

    ![Installing apps from unknown sources *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

    Poté budete požádáni o přečtení *licenční smlouvy AdGuard* a *Zásad ochrany osobních údajů*. Můžete se také podílet na vývoji produktů. Za tímto účelem můžete zaškrtnout políčka *Odesílat automatická hlášení o pádech* a *Odesílat technická a interakční data*. Klepněte na *Pokračovat*.

    ![Privacy policy *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_3.png)

1. **Vytvořte lokální VPN**. Aby bylo možné filtrovat veškerý provoz přímo v zařízení a nesměrovat jej přes vzdálený server, musí AdGuard navázat spojení VPN.

    ![Create a local VPN *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_2.png)

1. **Povolte HTTPS filtrování**. Není to povinná volba, ale doporučujeme ji zapnout, abyste dosáhli nejlepší kvality blokování reklam.

    Pokud vaše zařízení používá systém Android 7-9, budete po nastavení lokální VPN vyzváni k instalaci kořenového certifikátu a konfiguraci HTTPS filtrování.

    ![Enable HTTPS filtering on Android 7-9 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_1.jpg)

    Po klepnutí na *Instalovat nyní* se zobrazí výzva k ověření instalace certifikátu pomocí hesla nebo otisku prstu.

    ![Enable HTTPS filtering on Android 7-9. Step 2 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/cert_2.jpg)

    Pokud máte na svém zařízení Android 10+, po vytvoření lokální VPN se vám zobrazí hlavní obrazovka aplikace s panelem nabídek ve spodní části s návrhem na povolení HTTPS filtrování: klepněte na *Povolit* a postupujte podle pokynů na další obrazovce nebo si přečtěte [článek o instalaci certifikátu](solving-problems/manual-certificate.md), kde najdete další informace.

    ![Enable HTTPS filtering *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/fl_5.png)

## Odinstalování/přeinstalování AdGuardu

Pokud potřebujete odinstalovat AdGuard na svém mobilním zařízení, otevřete *Nastavení* a vyberte *Aplikace* (Android 7) nebo *Aplikace a oznámení* (Android 8+). Vyhledejte AdGuard v seznamu nainstalovaných aplikací a stiskněte *Odinstalovat*.

![Reinstall AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/installation/inst_4.png)

Chcete-li AdGuard znovu nainstalovat, stačí znovu stáhnout soubor APK a postupovat podle pokynů uvedených v části Instalace. Odinstalace není předem nutná.
