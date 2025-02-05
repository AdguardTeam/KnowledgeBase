---
title: Instalarea certificatului într-un folder sigur
sidebar_position: 13
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

If you install AdGuard to [the *Secure folder* on your Android](https://www.samsung.com/uk/support/mobile-devices/what-is-the-secure-folder-and-how-do-i-use-it/) (this applies mainly to Samsung devices), you may face some difficulties when installing the HTTPS certificate. The thing is, the *Secure folder* has its own space where the certificates are stored. However, if you do everything according to the regular certificate installation instructions ([described here](/adguard-for-android/features/settings#https-filtering)), the certificate will be installed into the main memory and will play no role for your ad blocker in the *Secure folder*. To solve this problem and install the certificate for your AdGuard for Android into the *Secure folder's* storage, please follow these instructions instead:

1. După instalarea aplicației și conectarea VPN-ului local, apăsați **PERMITE** lângă mesajul *Filtrarea HTTPS este oprită*.
1. Apăsați **Următorul** → **Următorul** → **Salvați-l acum** → **Salvați certificatul**.
1. Salvați certificatul (în acest stadiu, îl puteți redenumi pentru a-l face mai ușor de găsit mai târziu, ceea ce va trebui să faceți).
1. După ce apare popup-ul *Instrucțiuni de instalare*, **NU** apăsați **Deschideți setările**.
1. Reduceti aplicația și mergeți la *folderul Sigur*.
1. Apăsați meniul cu trei puncte și mergeți la **Setări** → **Alte setări de securitate**.
1. Apăsați **Certificate de securitate** → **Instalare din depozitarea dispozitivului** → **Certificate CA** → **Instalare în continuare**
1. Confirmați instalarea cu cheia grafică/parola/amprenta digitală.
1. Găsiți și selectați certificatul salvat anterior, apoi apăsați **Finalizat**.
1. Întoarceți-vă la aplicația AdGuard și navigați înapoi la ecranul principal. You may have to swipe and restart the app to get rid of the *HTTPS filtering is off* message.
1. Terminat! Certificatul a fost instalat.
