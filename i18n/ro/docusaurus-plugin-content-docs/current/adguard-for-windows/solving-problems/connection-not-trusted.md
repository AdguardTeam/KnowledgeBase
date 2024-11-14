---
title: Probleme legate de certificat
sidebar_position: 2
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Pentru a putea filtra traficul HTTPS și a bloca eficient reclamele și trackerele, AdGuard generează un certificat root special (și unic) și îl instalează în depozitarea sistemului. You can learn more about why a certificate is required by reading [this article](/general/https-filtering/what-is-https-filtering).

În mod normal, browserele au încredere în certificatul AdGuard odată ce acesta este adăugat în depozitarea certificatelor sistemului în timpul procesului de instalare. Dar, în unele cazuri, aceasta nu este suficientă și este posibil să te confrunți cu avertizări sau erori. Acest lucru se întâmplă cel mai adesea în browserele bazate pe Firefox, cum ar fi Mozilla Firefox, PaleMoon, Waterfox etc., sau în Yandex.Browser.

## *Potential Security Risk* error in Firefox-based browsers

![Eroare de risc de securitate](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

Versiunile vechi de Firefox, precum și browserele bazate pe acestea, nu au încredere în certificatele din depozitarea sistemului, ci doar în cele din depozitarea lor locală. Din versiunea 68, Firefox are încredere în certificatele sistemului, dar este posibil să te confrunți în continuare cu eroarea "Conexiunea nu este de încredere". Dacă se întâmplă ceva de genul acesta, încearcă mai întâi să faci clic pe butonul *Reinstalare certificat* — îl vei găsi în tab-ul *Rețea*.

![Reinstalare certificat](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

Dacă acest lucru nu ajută, urmează instrucțiunile pentru a adăuga manual certificatul AdGuard în depozitul Firefox.

> Această instrucțiune este pentru browserul Firefox. Denumele butoanelor și elementelor de meniu pot diferi în alte browsere bazate pe Firefox.

1. Porniți AdGuard.

1. Mergi la [http://local.adguard.org/cert](http://local.adguard.org/cert) și fă clic pe butonul *Descarcă*. Browserul ar trebui să înceapă descărcarea fișierului **cert.cer**.

    :::note

    De asemenea, poți deschide pagina de descărcare făcând clic pe linkul din aplicația AdGuard la *Setări → Rețea → Filtrare HTTPS*.


:::

    ![Setările certificatului](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. Deschide browserul tău și apoi deschide *Setări*.

1. Go to *Privacy & Security* tab.

1. Derulează în jos până la *Certificatul* și fă clic pe butonul *Vizualizare Certificate*.

    ![Fereastra de vizualizare a certificatelor](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. Selectează tab-ul *Autorități*.

1. Fă clic pe *Import...*.

    ![Setările certificatului — import](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. Răsfoiește fișierul descărcat **cert.cer** și fă clic pe *Deschide*.

1. Check the *Trust this CA to identify websites* box and then click *OK*.

    ![Setările certificatului — casetă de bifat](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

Ai instalat cu succes certificatul AdGuard. Repornește browserul și eroarea ar trebui să dispară.

## Avertizare de certificat Yandex.Browser

Dacă ești utilizator atât al AdGuard pentru Windows cât și al Yandex.Browser, este posibil să te fi confruntat cu această avertizare:

![Avertizare certificat Yandex](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### De ce se întâmplă asta

Atât AdGuard cât și Yandex iau foarte în serios securitatea utilizatorilor pe Internet. Politica actuală Yandex este de a-i avertiza pe utilizatori cu privire la orice certificat care nu este recunoscut de browser. Acesta nu este nefondat, deoarece uneori aplicațiile dăunătoare pot injecta propriile certificări și pot folosi acest lucru pentru a dăuna sistemului și a fura datele private.

Cu toate acestea, AdGuard adaugă și certificatul său în cele de încredere. Acest lucru duce la mesajul de avertizare cu care te-ai confruntat.

### Cum să rezolvi problema

Cel mai simplu mod este să faci clic pe butonul **Mergi la site**. Acest lucru va spune Yandex.Browser să memoreze certificatul AdGuard ca fiind de încredere, cel puțin pentru o vreme. În mod normal, nu va trebui să vezi din nou acest mesaj, dar nu este imposibil ca acesta să apară ocazional, din diverse motive. În astfel de cazuri, apasă din nou același buton *(asigură-te că este certificatul AdGuard!)*.

Dezactivarea filtrării HTTPS în AdGuard va împiedica de asemenea Yandex.Browser să mai afișeze acest mesaj, dar vine cu un preț mare: toate reclamele care sunt încărcate prin HTTPS (inclusiv **reclamele proprii Yandex**) vor apărea — pe site-uri precum YouTube, Facebook, Instagram și multe altele. We strongly advise against it if you want to keep the quality of ad blocking high.
