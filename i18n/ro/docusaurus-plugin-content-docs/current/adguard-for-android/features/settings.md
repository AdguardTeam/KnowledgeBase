---
title: Setări
sidebar_position: 4
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Tab-ul _Setări_ poate fi accesat atingând pictograma din dreapta jos a ecranului. Această secțiune conține diverse setări, informații despre aplicația ta, licență și abonament, și diverse resurse de suport.

## General

Această secțiune te ajută să gestionezi aspectul și comportamentul aplicației: poți seta tema de culoare și limba, gestiona notificările și multe altele. Dacă dorești să ajuți echipa AdGuard să detecteze căderile aplicației și să cerceteze utilizabilitatea, poți activa _Raportarea automată a căderilor_ și _Trimiterea datelor tehnice și de interacțiune_.

![General \*mobile_border](https://cdn.adtidy.org/blog/new/my5quggeneral.png)

Sub _Actualizările aplicației și filtrului_, poți configura actualizările automate ale filtrului și selecta un canal de actualizare a aplicației. Choose _Release_ for more stability and _Beta_ or _Nightly_ for early access to new features.

![Updates \*mobile_border](https://cdn.adtidy.org/blog/new/hqm8kupdates.png)

### Setări avansate

_Automatizare_ îți permite să gestionezi AdGuard prin aplicații de tip tasker.

_Watchdog_ ajută la protejarea AdGuard de a fi dezactivat de sistem ([citește mai multe despre modul de economisire a bateriei Android](/adguard-for-android/solving-problems/background-work/)). Valoarea pe care o introduci va fi intervalul în secunde între verificările watchdog.

_Nivelul de jurnalizare_ definește ce date despre funcționarea aplicației ar trebui să fie înregistrate. Implicit, aplicația colectează date despre evenimentele sale. Nivelul _Debug_ înregistrează mai multe evenimente - activează-l dacă echipa AdGuard te solicită pentru a-i ajuta să obțină o mai bună înțelegere a problemei. [Read more about collecting and sending logs](/adguard-for-android/solving-problems/log/)

![Advanced \*mobile_border](https://cdn.adtidy.org/blog/new/vshfnadvanced.png)

Secțiunea _Setări de nivel scăzut_ este pentru utilizatorii avansați. [Citește mai multe despre setările de nivel scăzut](/adguard-for-android/solving-problems/low-level-settings/)

![Low-level settings \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filtrarea

Această secțiune îți permite să gestionezi setările de filtrare HTTPS, filtrele și script-urile de utilizator, și să configurezi un server proxy.

![Filtering \*mobile_border](https://cdn.adtidy.org/blog/new/7v5c6filtering.png)

### Filtre

AdGuard blochează reclame, trackere și neplăceri prin aplicarea regulilor din filtrele sale. Cele mai multe caracteristici din secțiunea _Protecție_ sunt alimentate de [filtrele AdGuard](/general/ad-filtering/adguard-filters/#adguard-filters). Dacă activezi _Protecția de bază_, aceasta va activa automat filtrul de bază AdGuard și filtrul de reclame mobile AdGuard. Și invers: dacă dezactivezi ambele filtre, _Protecția de bază_ va fi de asemenea dezactivată.

![Filters \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Filtrele activate implicit sunt suficiente pentru funcționarea normală a AdGuard. Cu toate acestea, dacă dorești să personalizezi blocarea reclamelor, poți folosi alte filtre AdGuard sau filtre terță parte. Pentru a face acest lucru, selectează o categorie și activează filtrele pe care le dorești. Pentru a adăuga un filtru personalizat, atingeti _Filtre personalizate_ → _Adăugați filtru personalizat_ și introduceți URL-ul sau calea către fișier.

:::note

Dacă activezi prea multe filtre, unele site-uri pot funcționa incorect.

:::

[Citește mai multe despre filtre](https://adguard.com/en/blog/what-are-filters.html)

### Userscripts

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. Pentru a instala scripturi de utilizator, ai nevoie de un manager special de scripturi de utilizator. AdGuard are o astfel de funcționalitate și îți permite să adaugi scripturi de utilizator prin URL sau din fișier.

![Userscripts \*mobile_border](https://cdn.adtidy.org/blog/new/isv6userscripts.png)

#### AdGuard Extra

AdGuard Extra este un script de utilizator personalizat care blochează reclame complexe și mecanisme care reinjectează reclame pe site-uri web.

#### Dezactivare AMP

Dezactivarea AMP este un script de utilizator care dezactivează [Pagini accelerate pentru mobile](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) pe pagina de rezultate Google.

### Rețea

#### HTTPS filtering

Pentru a bloca reclame și trackere pe cele mai multe site-uri și în cele mai multe aplicații, AdGuard trebuie să filtreze traficul lor HTTPS. [Citește mai multe despre filtrarea HTTPS](/general/https-filtering/what-is-https-filtering)

##### Certificate de securitate

Pentru a gestiona traficul criptat, AdGuard instalează certificatul său CA pe dispozitivul tău. Este sigur: traficul este filtrat local și AdGuard verifică securitatea conexiunii.

Pe versiunile mai vechi de Android, certificatul este instalat automat. Pe Android 11 și versiuni ulterioare, trebuie să-l instalezi manual. [Instrucțiuni de instalare](/adguard-for-android/solving-problems/manual-certificate/)

Certificatul CA din stocarea utilizatorului este suficient pentru a filtra traficul HTTPS în browsere și în unele aplicații. Cu toate acestea, există aplicații care au încredere doar în certificatele din stocarea de sistem. Pentru a filtra traficul HTTPS acolo, trebuie să instalezi certificatul CA al AdGuard în stocarea de sistem. [Instrucțiuni](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### Aplicații filtrate HTTPS

Această secțiune conține lista aplicațiilor pentru care AdGuard filtrează traficul HTTPS. Te rugăm să reții că setarea poate fi aplicată pentru toate aplicațiile doar dacă ai certificate CA atât în stocarea utilizatorului, cât și în stocarea de sistem.

##### Site-uri web filtrate HTTPS

Această setare îți permite să gestionezi site-urile pentru care AdGuard ar trebui să filtreze traficul HTTPS.

Filtrarea HTTPS permite AdGuard să filtreze conținutul cererilor și răspunsurilor, dar noi nu colectăm sau stocăm niciodată aceste date. Cu toate acestea, pentru a spori securitatea, [excludem site-urile care conțin informații sensibile din filtrarea HTTPS](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

Poți adăuga de asemenea site-uri pe care le consideri necesare excluderilor prin selectarea uneia dintre moduri:

- Excluderea anumitor site-uri din filtrarea HTTPS
- Filtrarea traficului HTTPS doar pe site-urile adăugate la excluderi

Implicit, nu filtrăm de asemenea site-uri cu certificate de validare extinsă (EV), cum ar fi site-urile financiare. Dacă este necesar, puteți activa opțiunea _Filtrați site-urile web cu certificate EV_.

#### Proxy

Poți configura AdGuard să direcționeze tot traficul dispozitivului tău printr-un server proxy. [Cum să configurezi un proxy extern](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Sub _Aplicații care funcționează prin proxy_, poți selecta aplicații care își vor direcționa traficul prin proxy-ul tău specificat. Dacă ai activat _Integrarea cu AdGuard VPN_, această setare joacă rolul de excluderi ale aplicațiilor pentru AdGuard VPN: îți permite să specifici aplicații care să fie dirijate prin tunelul VPN AdGuard.

#### Mod de rutare

Această secțiune îți permite să selectezi metoda de filtrare a traficului.

- _VPN local_ filtrează traficul printr-un VPN creat local. Acesta este cel mai fiabil mod. Din cauza restricțiilor Android, este de asemenea singura metodă de filtrare a traficului la nivel de sistem disponibilă pe dispozitivele ne-rădăcinate.

:::note

Modul _VPN local_ nu permite utilizarea AdGuard simultan cu alte VPN-uri. Pentru a folosi un alt VPN cu AdGuard, trebuie să-l reconfigurezi pentru a funcționa în modul proxy și să configurezi un proxy extern în AdGuard. Pentru AdGuard VPN, acest lucru se face automat cu ajutorul [_Modului integrat_](/adguard-for-android/features/integration-with-vpn).

:::

- _Proxy automat_ este o metodă alternativă de rutare a traficului care nu necesită utilizarea unui VPN. Un avantaj semnificativ este că poate fi rulat în paralel cu un VPN. Acest mod necesită acces root.

- _Proxy manual_ implică configurarea unui server proxy pe un port specific, care poate fi apoi configurat în setările Wi-Fi. Acest mod necesită acces root pentru Android 10 și versiuni superioare.

## License

În această secțiune, poți găsi informații despre licența ta și să o gestionezi:

- Cumpără o licență AdGuard pentru a activa [caracteristicile versiunii complete](/adguard-for-android/features/free-vs-full)
- Conectează-te la contul tău AdGuard sau introdu cheia de licență pentru a activa licența ta
- Înscrie-te pentru a activa perioada ta de probă de 7 zile dacă nu ai folosit-o încă
- Refresh the license status from the three-dots menu (⋮)
- Deschide contul AdGuard pentru a-ți gestiona licența acolo
- Reset your license — for example, if you've reached device limit for this license and want to apply another one

![License screen \*mobile_border](https://cdn.adtidy.org/blog/new/3wyh5hlicense.png)

## Support

Use this section if you have any questions or suggestions regarding AdGuard for Android. We recommend consulting _[FAQ](https://adguard.com/support/adguard_for_android.html)_ or this knowledge base before contacting support.

![Support \*mobile_border](https://cdn.adtidy.org/blog/new/cz55usupport.png)

If you notice a missed ad, please report it via _Report incorrect blocking_.

For unexpected app behavior, select _Report a bug_. If possible, describe your problem in detail and add app logs. [How to describe an issue](/guides/report-bugs/#how-to-describe-a-problem)

For your suggestions, use _Request a feature_.

:::note

GitHub is an alternative way to report bugs and suggest new features. [Instructions and repository links](/guides/report-bugs/#adguard-for-android)

:::
