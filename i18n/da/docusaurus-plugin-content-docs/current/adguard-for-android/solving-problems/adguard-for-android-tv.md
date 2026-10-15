---
title: Sådan installeres AdGuard til Android TV
sidebar_position: 15
---

:::info

Denne artikel omhandler AdGuard til Android TV, en adblocker, der beskytter TV'et på systemniveau. For at se, hvordan den fungerer, [download AdGuard TV-appen](https://agrd.io/tvapk)

:::

I de fleste tilfælde kan standardwebbrowsere ikke installere en fil på TV'et, men en webbrowser med denne funktionalitet kan downloades fra Google Play. I vores guide gennemgås et eksempel på installation med TV Bro-webbrowseren, men der er mulighed for at vælge andre, såfremt det ønskes. Som et alternativ kan appen [Downloader](https://play.google.com/store/apps/details?id=com.esaba.downloader) bruges.

## Installation af AdGuard til Android TV via webbrowser

1. Installér [TV Bro-webbrowseren](https://play.google.com/store/apps/details?id=com.phlox.tvwebbrowser) på Android TV'et.

2. Download og installér AdGuard til Android TV:

- Åbn den installerede TV Bro-webbrowser på Android TV'et.
- Skriv på webbrowserens adressebjælke `https://agrd.io/tvapk` og tryk på _Retur_ eller følg linket.
- Webbrowseren begynder automatisk at downloade AdGuard til Android TV-installationsfilen.
- Når download er færdig, vælg _Downloads_ i webbrowserens kontrolbjælke og dernæst den downloadede fil.
- Tillad installation af filer fra webbrowseren i advarselsmeddelelsen.
- Returnér til webbrowseren, åbn _Downloads_ og klik på den downloadede fil.
- Klik i det viste systemvindue på _Installér_ og dernæst på _Udført_ eller _Åbn_.

Færdig, AdGuard til Android TV er installeret.

1. Start AdGuard til Android TV:

- Når installationen er fuldført, find AdGuard-appen på listen over installerede apps på Android TV'et.
- Klik på AdGuard-ikonet for at starte appen.
- Følg vejledningen på skærmen for at færdiggøre opsætningen.

## Installation af AdGuard til Android TV via ADB

1. Sørg for, at Android Debug Bridge (ADB) er installeret på computeren. Ellers følg vejledningen på XDA Developers: [ADB Installation Guide](https://www.xda-developers.com/install-adb-windows-macos-linux).

2. Download [AdGuard til Android TV](https://agrd.io/tvapk).

3. Gå i TV-indstillingerne til _System_ → _Om_ og tryk på build-nummeret syv gange for at oplåse Udviklerindstillinger. Aktivér _USB-fejlretning_.

4. Notér Android TV'ets IP-adresse:

   - Gå til Indstillinger på Android TV'et.
   - Vælg _System_ → _Om_.
   - Find _Netværk_ og vælg den relevante forbindelsestype, dvs. _Wi-Fi_ eller _Ethernet_.
   - Gå til netværksafsnittet og find _IP-adresse_. Notér denne IP-adresse.

5. Oprettelse af forbindelse til Android TV via ADB:

   - Åbn terminalen eller kommandoprompten på computeren.
   - Indtast kommandoen 'adb connect' og indsæt TV'ets IP-adresse.
   - Forbindelsen etableres.

6. Installation af AdGuard til Android TV via ADB:

   - Indtast i terminalen kommandoen `adb install Downloads/adguard_tv.apk`. Erstat om nødvendigt `Downloads/adguard_tv.apk` med den relevante sti.
   - Afvent en besked i terminalen, der indikerer gennemført installation af appen.

## Installation af AdGuard til Android TV via atvTools

**Vigtigt:** Smartphonen og TV'et med Android TV (TV-boks) skal være på det samme lokalnetværk.

1. Installér [atvTools](https://play.google.com/store/apps/details?id=dev.vodik7.atvtools)-appen på Android-smartphonen

2. Forbind **atvTools** til **Android TV**

   1. Aktivér udviklertilstand på Android TV-enheden

      `Indstillinger` → `Enhedsindstillinger` → `Om enhed` → Tryk på `Android TV-build` indtil en meddelelse bekræfter, at udviklerstatus er aktiveret

   2. Aktivér USB-fejlretning på Android TV-enheden

      Gå til `Indstillinger` → `Enhedsindstillinger` → `Til udviklere` → `Fejlretning`, tillad og aktivér `USB-fejlretning`

3. Start **atvTools** på smartphonen

4. Find og klik på den ønskede **Android TV**-enhed på listen

5. Tillad forbindelsen på TV'et

6. Download [AdGuard til Android TV](https://agrd.io/tvapk)-installeren på smartphonen som en **APK**-fil

7. Klik i **atvTools** på **Installér** på hovedskærmen og afvent (under et minut), at **AdGuard til Android TV**-ikonet vises på listen over apps

![Hovedskærm \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/android-tv/main-screen.png)
