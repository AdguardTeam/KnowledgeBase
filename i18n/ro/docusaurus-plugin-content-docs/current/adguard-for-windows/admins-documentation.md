---
title: Documentație pentru administratori
sidebar_position: 5
---

Această pagină descrie caracteristicile și detaliile gestionării centrale a politicilor și preferințelor AdGuard.

## 1. Descărcați MSI-ul {#msi-download}

Descărcați [AdGuard MSI x86](https://cdn.adtidy.org/distr/windows/AdGuard_x86.msi)

Descărcați [AdGuard MSI x64](https://cdn.adtidy.org/distr/windows/AdGuard_x64.msi)

## 2. Configurați setările pentru rețeaua dumneavoastră {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

Singura politică acceptată este `LicenseKey`. Dacă această politică este setată, AdGuard o va prefera în locul a ceea ce utilizatorul poate introduce în interfață. Această cheie de licență va fi folosită pentru verificarea statutului licenței.

## 3. Asigurați-vă că serverele AdGuard sunt disponibile {#servers-available}

AdGuard se conectează la două gazde: `api.adguard.org` și `filters.adtidy.org`. Asigurați-vă că ambele servere sunt disponibile.

## 4. Trimiteți MSI-ul în rețeaua dumneavoastră {#msi-push}

Dacă de obicei utilizați SMS sau alte instrumente, folosiți-le pentru a trimite MSI-ul AdGuard exact așa cum ați face normal cu orice alt pachet de instalare.

În caz contrar, puteți rula MSI-ul pe mașina țintă direct (și silențios) cu această comandă: `Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command: `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

Trebuie să rulați aceste comenzi cu privilegii de administrator.

:::

Dacă doriți să instalați AdGuard pe un computer Windows 7, asigurați-vă că are .NET 4 Client Profile instalat: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::note

Dacă ați instalat AdGuard pentru Windows dintr-un fișier MSI, AdGuard nu va fi actualizat automat. Pentru a permite actualizările manuale:

- În versiunile lansate după v7.16, ștergeți parametrul `ForbidCheckUpdates` sau setați valoarea acestuia la `NO` (insensibil la majuscule) în registru sub `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- În v7.16 și versiunile anterioare, setați parametrul `AllowCheckUpdates` la `YES` (insensibil la majuscule) pentru cheia `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` pe OS x86 sau pentru cheia `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` pe OS x64. Orice altă valoare sau fără valoare pentru acest parametru va dezactiva actualizările automate.

Vă rugăm să rețineți că o astfel de instalare a aplicației și actualizările manuale nu sunt recomandate și pot provoca probleme tehnice.

:::

## 5. Testați instalarea {#installation-test}

Pe o mașină țintă, lansați AdGuard. Deschideți ecranul de licență pentru a verifica că utilizează licența specificată. Este posibil să fie necesar să faceți clic pe "Reîmprospătați statutul" pentru a face AdGuard să verifice cheia de licență.
