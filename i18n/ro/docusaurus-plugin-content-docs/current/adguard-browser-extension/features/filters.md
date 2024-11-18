---
title: Filtre
sidebar_position: 2
---

:::info

Acest articol se referă la extensia de browser AdGuard, care protejează doar browserul dvs. Pentru a proteja întregul dispozitiv, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Blocarea reclamelor este funcționalitatea cheie a oricărui blocant de reclame, iar Extensie de browser AdGuard nu face excepție. Blocarea reclamelor se bazează pe filtre — seturi de reguli scrise într-un limbaj special. Aceste reguli spun care elemente ar trebui blocate și care nu. AdGuard interpretează regulile și modifică solicitările web pe baza acestora. Ca urmare, nu veți mai vedea reclame pe paginile dvs. web.

![Filtre \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

Toate filtrele sunt grupate în funcție de rolul lor. De exemplu, există categorii pentru filtrele de blocare a anunțurilor, filtrele de protecție a intimității, filtrele legate de rețelele de socializare, etc. Puteți activa fie filtre individuale, fie întregul grup deodată.

![Filtre de blocare a reclamelor \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## Filtre personalizate

În timp ce caracteristicile altor grupuri de filtre sunt mai mult sau mai puțin previzibile, există un grup numit _Personalizat_ care ar putea ridica întrebări suplimentare.

![Filtre personalizate \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

În această filă, puteți adăuga filtre care nu sunt prezente în extensie în mod implicit. Există o mulțime de [filtre disponibile publicului pe Internet](https://filterlists.com). În plus, puteți crea și adăuga propriile filtre. De fapt, puteți construi orice set de filtre și să personalizați blocarea reclamelor așa cum doriți.

Pentru a adăuga un filtru, pur și simplu faceți clic pe _Adăugați filtru personalizat_, introduceți URL-ul sau calea fișierului filtrului pe care doriți să-l adăugați și faceți clic pe _Următorul_.

![Adăugați un filtru personalizat \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## Reguli utilizator {#user-rules}

_User rules_ is another tool that helps you customize the blocking of ads.

![Reguli utilizator \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

Există mai multe modalități de a adăuga reguli noi. Cea mai simplă metodă este să introduceți o regulă, dar necesită unele cunoștințe despre [sintaxa regulilor](/general/ad-filtering/create-own-filters).

Puteți importa și o listă de filtre gata de utilizare dintr-un fișier text. **Make sure that different rules are separated by line breaks.** Note that importing a ready-to-use filter list is better done in the Custom filters tab.

În plus, puteți exporta propriile reguli de filtrare. Această opțiune este bună pentru transferul listei tale de reguli între browsere sau dispozitive.

Atunci când adăugați un site web la lista de permisiuni (mai multe detalii despre acest lucru mai jos) sau utilizați instrumentul Asistent pentru ascunderea unui element de pe pagină, o regulă corespunzătoare este salvată, de asemenea în _Reguli utilizator_.

## Allowlist

Lista de permisiuni este utilizată pentru a exclude anumite site-uri web de la filtrare. Regulile de blocare nu sunt aplicate site-urilor web din listă.

![Lista de permisiuni \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

De asemenea, lista de permisiuni poate fi inversată: puteți debloca reclamele de peste tot, cu excepția site-urilor web adăugate în această listă. Pentru a face acest lucru, activați opțiunea _Inversare listă de permisiuni_.

![Inversare listă de permisiuni \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

De asemenea, puteți importa și exporta listele de permisiuni existente. Acest lucru este util, de exemplu, dacă doriți să aplicați aceleași reguli de autorizare în fiecare dintre browserele dvs.
