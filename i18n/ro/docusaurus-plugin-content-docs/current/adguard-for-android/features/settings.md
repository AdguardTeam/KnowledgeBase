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

Secțiunea _Setări de nivel scăzut_ este pentru utilizatorii avansați. [Read more about low-level settings](/adguard-for-android/features/low-level-settings/)

![Low-level settings \*mobile_border](https://cdn.adtidy.org/blog/new/n9ztplow_level.png)

## Filtrarea

Această secțiune îți permite să gestionezi setările de filtrare HTTPS, filtrele și script-urile de utilizator, și să configurezi un server proxy.

![Filtering \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/filtering.jpg)

### Filtre

AdGuard blochează reclame, trackere și neplăceri prin aplicarea regulilor din filtrele sale. Cele mai multe caracteristici din secțiunea _Protecție_ sunt alimentate de [filtrele AdGuard](/general/ad-filtering/adguard-filters/#adguard-filters). Dacă activezi _Protecția de bază_, aceasta va activa automat filtrul de bază AdGuard și filtrul de reclame mobile AdGuard. Și invers: dacă dezactivezi ambele filtre, _Protecția de bază_ va fi de asemenea dezactivată.

![Filters \*mobile_border](https://cdn.adtidy.org/blog/new/7osjdfilters.png)

Filtrele activate implicit sunt suficiente pentru funcționarea normală a AdGuard. Cu toate acestea, dacă dorești să personalizezi blocarea reclamelor, poți folosi alte filtre AdGuard sau filtre terță parte. Pentru a face acest lucru, selectează o categorie și activează filtrele pe care le dorești. Pentru a adăuga un filtru personalizat, atingeti _Filtre personalizate_ → _Adăugați filtru personalizat_ și introduceți URL-ul sau calea către fișier.

:::note

Dacă activezi prea multe filtre, unele site-uri pot funcționa incorect.

:::

[Citește mai multe despre filtre](https://adguard.com/en/blog/what-are-filters.html)

### Extensii

Extensions allow you to add userscripts and userstyles.

![Extensions \*mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/features/extensions.jpg)

Userscripts are miniprograms written in JavaScript that extend the functionality of one or more websites. To install a userscripts, you need a special userscript manager. AdGuard has such a functionality and allows you to add userscripts by URL or from file.

Userstyles are like userscripts that allow you to change how web pages look in the browser without modifying their content. They work by adding CSS styles to the website’s existing styles. For example, if you want a dark theme on a website that doesn’t offer one, you can use a userstyle to do it.

To add a userstyle, go to _Settings_ → _Filtering_ → _Extensions_→ _Add extension_ → _Import from file or URL_. You can find ready-made user styles [online](https://userstyles.world/).

To create your own style, tap _Add extension_ → _Create userstyle_.

#### AdGuard Extra

AdGuard Extra is a custom userscript that blocks complex ads and mechanisms that reinject ads to websites.

#### Disable AMP

Disable AMP is a userscript that disables [Accelerated mobile pages](https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages) on the Google search results page.

### Rețea

#### HTTPS filtering

To block ads and trackers on most websites and in most apps, AdGuard needs to filter their HTTPS traffic. [Read more about HTTPS filtering](/general/https-filtering/what-is-https-filtering)

##### Security certificates

To manage encrypted traffic, AdGuard installs its CA certificate on your device. It's safe: the traffic is filtered locally and AdGuard verifies the security of the connection.

On older versions of Android, the certificate is installed automatically. On Android 11 and later, you need to install it manually. [Installation instructions](/adguard-for-android/solving-problems/manual-certificate/)

The CA certificate in the user store is enough to filter HTTPS traffic in browsers and some apps. However, there are apps that only trust certificates from the system store. To filter HTTPS traffic there, you need to install AdGuard's CA certificate into the system store. [Instructions](/adguard-for-android/solving-problems/https-certificate-for-rooted/)

##### HTTPS-filtered apps

This section contains the list of apps for which AdGuard filters HTTPS traffic. Please note that the setting can be applied for all apps only if you have CA certificates both in the user store and in the system store.

##### HTTPS-filtered websites

This setting allows you to manage websites for which AdGuard should filter HTTPS traffic.

HTTPS filtering allows AdGuard to filter the content of requests and responses, but we never collect or store this data. However, to increase security, we [exclude websites that contain potentially sensitive information from HTTPS filtering](/general/https-filtering/what-is-https-filtering/#financial-websites-and-websites-with-sensitive-personal-data).

You can also add websites that you consider necessary to exclusions by selecting one of the modes:

- Exclude specific websites from HTTPS filtering
- Filter HTTPS traffic only on the websites added to exclusions

By default, we also do not filter websites with Extended Validation (EV) certificates, such as financial websites. Dacă este necesar, puteți activa opțiunea _Filtrați site-urile web cu certificate EV_.

#### Proxy

You can set up AdGuard to route all your device's traffic through your proxy server. [How to set up an outbound proxy](/adguard-for-android/solving-problems/outbound-proxy)

In this section, you can also set up a third-party VPN to work with AdGuard, if your VPN provider allows it.

Under _Apps operating through proxy_, you can select apps that will route their traffic through your specified proxy. If you have _Integration with AdGuard VPN_ enabled, this setting plays the role of AdGuard VPN's app exclusions: it allows you to specify apps to be routed through the AdGuard VPN tunnel.

#### Routing mode

This section allows you to select the traffic filtering method.

- _Local VPN_ filters traffic through a locally created VPN. This is the most reliable mode. Due to Android restrictions, it is also the only system-wide traffic filtering method available on non-rooted devices.

:::note

The _Local VPN_ mode doesn't allow AdGuard to be used simultaneously with other VPNs. To use another VPN with AdGuard, you need to reconfigure it to work in proxy mode and set up an outbound proxy in AdGuard. For AdGuard VPN, this is done automatically with the help of the [_Integrated mode_](/adguard-for-android/features/integration-with-vpn).

:::

- _Automatic proxy_ is an alternative traffic routing method that does not require the use of a VPN. One significant advantage is that it can be run in parallel with a VPN. This mode requires root access.

:::note

Please note that DNS filtering will still be active in _Automatic proxy_ routing mode, and your device may not be able to filter DNS requests from specific apps. In _VPN_ routing mode, apps are excluded from the local VPN by system means. Therefore, the system resolver sees which apps are included in the VPN and which are not. It either allows them into the local VPN or lets them bypass it. However, DNS requests come from the system resolver, not the application. In _Automatic proxy_ mode, it is only possible to exclude traffic from applications, not their DNS queries, because AdGuard sees them as system queries.

:::

- _Manual proxy_ involves setting up a proxy server on a specific port, which can then be configured in Wi-Fi settings. This mode requires root access for Android 10 and above.

## License

In this section, you can find information about your license and manage it:

- Buy an AdGuard license to activate [the full version's features](/adguard-for-android/features/free-vs-full)
- Log in to your AdGuard account or enter the license key to activate your license
- Sign up to activate your 7-day trial period if you haven't used it yet
- Refresh the license status from the three-dots menu (⋮)
- Open the AdGuard account to manage your license there
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
