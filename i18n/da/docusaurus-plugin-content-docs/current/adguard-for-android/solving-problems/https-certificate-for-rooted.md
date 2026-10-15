---
title: Flytning af CA-certifikat til System-lageret på rootede enheder
sidebar_position: 13
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

AdGuard til Android kan [filtrere krypteret HTTPS-trafik](/general/https-filtering/what-is-https-filtering), og dermed blokere de fleste webstedsannoncer og -trackere. På rootede enheder muliggør AdGuard også filtrering af HTTPS-trafik i apps. HTTPS-filtrering kræver tilføjelse af AdGuards CA-certifikat til listen over betroede certifikater.

På ikke-rootede enheder kan CA-certifikater installeres i **Bruger-lageret**. Kun en begrænset andel af apps (fortrinsvis webbrowsere) stoler på CA-certifikater installeret i Bruger-lageret, hvorfor HTTPS-filtrering kun vil fungere for sådanne apps.

På rootede enheder kan certifikatet installeres i **-System-lageret**. Det vil tillade AdGuard at filtrere HTTPS-trafik i andre apps også.

Således gøres dette.

## Sådan installeres AdGuards certifikat i System-lageret

1. Åbn *AdGuard → Indstillinger → Filtrering → Netværk → HTTPS-filtrering → Sikkerhedscertifikater*.

1. Hvis intet certifikat er installeret endnu, **installér AdGuard Personal CA i Bruger-lageret**. Det vil tillade AdGuard at filtrere HTTPS-trafik i webbrowsere.

1. **Installér AdGuard Intermediate CA i Bruger-lageret**. Det skal bruges for at afvikle Magisk-modulet adguardcert, der muliggør flytning af certifikater til System-lageret.

    ![Installation af certifikatet *mobile_border](https://cdn.adtidy.org/blog/new/asx1xksecurity_certificates.png)

1. Installér [seneste udgivelse af Magisk-modulet **adguardcert**](https://github.com/AdguardTeam/adguardcert/releases/latest/).

1. Åbn *Magisk → Moduler → Installér fra lagerplads* og vælg den downloadede **adguardcert**-fil. AdGuard Personal CA-certifikatet kopieres til systemlageret.

    ![Åbning af Magisk-moduler *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png)

    ![Installation fra lager *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png)

    ![Valg af adguardcert *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png)

1. Tryk på **Genstart**.

    ![Genstart af enheden *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png)

Efter overførslen vil **AdGuard Personal CA** i System-lageret muliggøre filtrering af HTTPS-trafik i apps, mens **AdGuard Intermediate CA** i Bruger-lageret vil muliggøre filtrering af HTTPS-trafik i Chromium-baserede webbrowsere (se nedenfor hvorfor).

## Kendte problemer med Chrome- og Chromium-baserede webbrowsere

Chrome og andre Chromium-baserede webbrowsere kræver Certificate Transparency (CT) logfiler for certifikater placeret i System-lageret. CT-logfiler indeholder ikke oplysninger om certifikater udstedt af HTTPS-filtrerings-apps. Derfor kræver AdGuard et ekstra certifikat i Bruger-lageret for at filtrere HTTPS-trafik i disse webbrowsere.

### Bromite-webbrowser

Ud over ovenstående problem har Bromite som standard ikke tillid til certifikater i Bruger-lageret. For at filtrere HTTPS-trafik dér, åbn Bromite og gå til `chrome://flags`og sæt *Tillad brugercertifikater* til *Aktiveret*. **Dette gælder både for rootede og ikke-rootede enheder**.
