---
title: Instalarea certificatului într-un folder sigur
sidebar_position: 12
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

If you install AdGuard [in the *Secure folder*](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) on your Android device (this mainly applies to Samsung devices), you may have difficulty installing the HTTPS certificate. The *Secure folder* has its own storage space for certificates. However, if you follow the [regular certificate installation instructions](/adguard-for-android/features/settings#https-filtering), the certificate will be installed in the main memory and will not affect your ad blocker in the *Secure folder*. To install the certificate for AdGuard for Android in the *Secure folder’s* storage, follow these instructions instead:

1. After installing the app and connecting the local VPN, tap *HTTPS filtering is off* on the main screen.
1. Tap **Continue** → **Next** → **Save certificate**.
1. Salvați certificatul (în acest stadiu, îl puteți redenumi pentru a-l face mai ușor de găsit mai târziu, ceea ce va trebui să faceți).
1. După ce apare popup-ul *Instrucțiuni de instalare*, **NU** apăsați **Deschideți setările**.
1. Reduceti aplicația și mergeți la *folderul Sigur*.
1. Tap the three-dot menu and go to **Settings** → **Other security settings**.
1. Tap **Install from device storage** → **CA certificate** → **Install anyway**.
1. Confirmați instalarea cu cheia grafică/parola/amprenta digitală.
1. Găsiți și selectați certificatul salvat anterior, apoi apăsați **Finalizat**.
1. Return to the AdGuard app and navigate back to the main screen.
1. Terminat! Certificatul a fost instalat.
