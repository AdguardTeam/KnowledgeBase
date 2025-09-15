---
title: Safari Web extension
sidebar_position: 3
---

Extensiile Web adaugă funcționalitate personalizată la Safari. Puteți găsi [mai multe informații despre extensiile Web aici](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![Cum arată extensia Web în Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/menu_en.png)

Extensia AdGuard Web Safari este un instrument care profită de noile funcționalități ale iOS 15. Servește pentru a îmbunătăți capacitățile AdGuard pentru iOS. Cu aceasta, AdGuard poate aplica reguli avansate de filtrare și, în cele din urmă, bloca mai multe reclame.

## Ce face

Implicit, Safari oferă doar instrumente de bază pentru blocante de conținut. These tools don't offer the level of performance found in content blockers on other operating systems (Windows, Mac, Android). De exemplu, aplicațiile AdGuard pe alte platforme pot folosi arme anti-reclamă atât de puternice ca [reguli CSS](/general/ad-filtering/create-own-filters#cosmetic-css-rules), [selectoare CSS extinse](/general/ad-filtering/create-own-filters#extended-css-selectors) și [scripturi](/general/ad-filtering/create-own-filters#scriptlets). Din păcate, aceste utilitare sunt absolut de neînlocuit în cazul unor situații mai complexe, cum ar fi reclamele preroll pe YouTube.

AdGuard's Safari Web extension compliments AdGuard by giving it the ability to employ these types of filtering rules.

În plus, extensia Web Safari AdGuard poate fi utilizată pentru a gestiona rapid AdGuard pentru iOS direct din browser. Apăsați pe butonul *Extensii* — este cel cu un icon de puzzle; în funcție de tipul dispozitivului, poate fi localizat în stânga sau în dreapta barei de adrese. Găsiți **AdGuard** în listă și apăsați pe el.

![Meniul extensiei *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/open-safari-assistant.jpg)

> Pe iPad-uri, extensia Web Safari AdGuard poate fi accesată direct apăsând pe iconița AdGuard din bara de adrese a browserului.

Veți vedea următoarea listă de opțiuni:

- **Activarea/dezactivarea protecției pe site**. Dezactivarea comutatorului va dezactiva complet AdGuard pentru site-ul curent și va adăuga o regulă de excludere respectivă. Reactivarea comutatorului va relua protecția pentru site și va șterge regula. Orice astfel de modificare va necesita ceva timp pentru a intra în vigoare.

- **Blocking elements on the page manually**. Apăsați pe butonul *Blocați elemente pe această pagină* pentru a solicita o fereastră pop-up pentru blocarea elementelor. Selectați orice element de pe pagină pe care doriți să-l ascundeți, ajustați zona de selecție, apoi previzualizați modificările și confirmați eliminarea. O regulă de filtrare corespunzătoare va fi adăugată în AdGuard (pe care o puteți dezactiva sau șterge ulterior pentru a reveni la modificare).

- **Raportați o problemă**. Glisați în sus pentru a aduce butonul *Raportați o problemă*. Utilizați-l pentru a raporta o reclamă omisă sau orice altă problemă pe care ați întâmpinat-o pe pagina curentă.

## Cum să activați extensia AdGuard Web Safari

:::note

Extensia AdGuard Web Safari necesită acces la conținutul paginilor web pentru a funcționa, dar nu îl folosește în alt scop decât blocarea reclamelor.

:::

### În setările iOS

Extensia Web nu este un instrument autonom și necesită AdGuard pentru iOS. Dacă nu aveți AdGuard pentru iOS instalat pe dispozitivul dvs., vă rugăm să [îl instalați mai întâi](../installation) și să completați procesul de introducere pentru a-l pregăti pentru utilizare.

Once done, open the *Settings* app and scroll down to *Apps*.

![Select Apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/apps.jpg)

Then, open *Safari* → *Extensions*.

![Select Safari *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings1_en.png)

![Select Extensions *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/webext/settings2_en.png)

In the **ALLOW THESE EXTENSIONS** section find **AdGuard** among the available extensions.

![Select AdGuard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/select-ag.jpg)

Tap it, then toggle the *Allow Extension* switch on.

Lower on the same screen, make sure *All Websites* is set *Allow* or *Ask*. If you choose *Allow*, you won't have to give permission every time you visit a new website. If you are unsure, choose *Ask* to grant permissions on a per-site basis.

![AdGuard extension in Settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/ag-webext-in-settings.png)

### În Safari

To enable the AdGuard extension right from the Safari browser, tap the icon on the left side of the URL field:

![In Safari tap icon on the left of URL field *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-1.jpg)

Then, tap *Manage Extensions*.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-2.jpg)

In the opened window, turn on the AdGuard switches. The top one is the AdGuard Web extension; the other six are content blockers needed for filtering.

![Extensions *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/iOS/web-extension-on-3.jpg)

You should now be able to see AdGuard among the available extensions. To enable **Advanced protection**, open AdGuard extension, tap the yellow **i** icon, press *Enable*, and confirm the action.

:::note

If you use AdGuard for iOS without Premium subscription, you won't be able to enable **Advanced protection**.

:::

Alternatively, you can enable **Advanced protection** directly from the app, in the **Protection** tab (second from the left in the bottom icon row).

AdGuard's Safari Web extension only works on iOS versions 15 and later.
