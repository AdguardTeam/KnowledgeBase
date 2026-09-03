---
title: Probleme legate de certificat
sidebar_position: 2
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Pentru a putea filtra traficul HTTPS și a bloca eficient reclamele și trackerele, AdGuard generează un certificat root special (și unic) și îl instalează în depozitarea sistemului. You can learn more about why a certificate is required by reading [this article](/general/https-filtering/what-is-https-filtering).

În mod normal, browserele au încredere în certificatul AdGuard odată ce acesta este adăugat în depozitarea certificatelor sistemului în timpul procesului de instalare. Dar, în unele cazuri, aceasta nu este suficientă și este posibil să te confrunți cu avertizări sau erori. Acest lucru se întâmplă cel mai adesea în browserele bazate pe Firefox, cum ar fi Mozilla Firefox, PaleMoon, Waterfox etc., sau în Yandex.Browser.

Here are some common issues:

- [_Potential Security Risk_ error in Firefox-based browsers](#potential-security-risk-error-in-firefox-based-browsers)
- [Yandex.Browser certificate warning](#yandexbrowser-certificate-warning)
- [Non-official add-ons don’t update in Firefox-based browsers](#non-official-add-ons-dont-update-in-firefox-based-browsers)

## _Potential Security Risk_ error in Firefox-based browsers

![Security risk error](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Versiunile vechi de Firefox, precum și browserele bazate pe acestea, nu au încredere în certificatele din depozitarea sistemului, ci doar în cele din depozitarea lor locală. Din versiunea 68, Firefox are încredere în certificatele sistemului, dar este posibil să te confrunți în continuare cu eroarea "Conexiunea nu este de încredere". If something like this happens, first try to click the _Reinstall Certificate_ button — you will find it in the _Network_ tab.

![Reinstall Certificate](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Dacă acest lucru nu ajută, urmează instrucțiunile pentru a adăuga manual certificatul AdGuard în depozitul Firefox.

> Această instrucțiune este pentru browserul Firefox. Denumele butoanelor și elementelor de meniu pot diferi în alte browsere bazate pe Firefox.

1. Porniți AdGuard.

2. Go to [https://local.adguard.org/cert](https://local.adguard.org/cert) and click the _Download_ button. The browser should start downloading **cert.cer** file.

   :::note

   You can also open the download page by clicking the link via the AdGuard app at _Settings → Network → HTTPS filtering_.

   :::

   ![Certificate settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

3. Open your browser and then open _Settings_.

4. Go to _Privacy & Security_ tab.

5. Scroll down to _Certificates_ and click the _View Certificates_ button.

   ![View certificates window](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

6. Select _Authorities_ tab.

7. Click _Import..._.

   ![Certificate settings — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

8. Browse the downloaded **cert.cer** file and click _Open_.

9. Check the _Trust this CA to identify websites_ box and then click _OK_.

   ![Certificate settings — checkbox](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

Ai instalat cu succes certificatul AdGuard. Repornește browserul și eroarea ar trebui să dispară.

## Avertizare de certificat Yandex.Browser

Dacă ești utilizator atât al AdGuard pentru Windows cât și al Yandex.Browser, este posibil să te fi confruntat cu această avertizare:

![Yandex certificate warning](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### De ce se întâmplă asta

Atât AdGuard cât și Yandex iau foarte în serios securitatea utilizatorilor pe Internet. Politica actuală Yandex este de a-i avertiza pe utilizatori cu privire la orice certificat care nu este recunoscut de browser. Acesta nu este nefondat, deoarece uneori aplicațiile dăunătoare pot injecta propriile certificări și pot folosi acest lucru pentru a dăuna sistemului și a fura datele private.

Cu toate acestea, AdGuard adaugă și certificatul său în cele de încredere. Acest lucru duce la mesajul de avertizare cu care te-ai confruntat.

### Cum să rezolvi problema

The easiest way is to click the **Go to site** button. Acest lucru va spune Yandex.Browser să memoreze certificatul AdGuard ca fiind de încredere, cel puțin pentru o vreme. În mod normal, nu va trebui să vezi din nou acest mesaj, dar nu este imposibil ca acesta să apară ocazional, din diverse motive. In such cases, simply press the same button again _(make sure it is AdGuard's certificate!)_.

Disabling the HTTPS filtering in AdGuard will also prevent Yandex.Browser from showing this message again, but it comes with a big price: all ads that are loaded by HTTPS (including **Yandex's own ads**) will show up — on such websites as YouTube, Facebook, Instagram, and many more. We strongly advise against it if you want to keep the quality of ad blocking high.

## Non-official add-ons don’t update in Firefox-based browsers

If you use Firefox-based browsers and have add-ons that aren’t from Mozilla’s official catalog — and HTTPS filtering is enabled in AdGuard — those add-ons won’t be able to update. Here’s why.

To update add-ons, Firefox checks whether the connection to the update server is secured with a certificate issued by a trusted certificate authority (CA). Firefox-based browsers only trust certificates from CAs included in Mozilla’s built-in list — it’s a security measure to block potentially unsafe updates.

AdGuard’s certificate, although secure, isn’t on that list. That is why Mozilla domains are excluded from HTTPS filtering in AdGuard.

However, non-official add-ons use third-party servers for updates, and those are not excluded from HTTPS filtering by default. So when Firefox checks the connection, it sees AdGuard’s certificate instead of the original one — and blocks the update.

If you need to check for updates for such add-ons, consider temporarily disabling AdGuard.
