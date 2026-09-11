---
title: Probleme de lansare pe macOS
sidebar_position: 6
---

:::info

Acest articol se referă la AdGuard pentru macOS, un blocant de reclame multifuncțional care protejează dispozitivul tău la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Occasionally macOS may cause the corruption of AdGuard's Network Extension module, making it unable to use the app. În acest caz, ar trebui să urmați una dintre aceste instrucțiuni, în funcție de versiunea sistemului de operare.

## Probleme de lansare pe macOS 11 și versiuni superioare

Dacă aveți probleme la lansarea AdGuard pentru Mac pe sistemele de operare Big Sur și Monterey, vă rugăm să folosiți această instrucțiune:

1. Reporniți macOS și introduceți [modul de recuperare](https://support.apple.com/en-us/HT201255).
1. Disable SIP (Launch **Terminal** from the **Utilities** menu and type `csrutil disable`).
1. Reporniți macOS.
1. Închideți aplicația AdGuard, deschideți **Terminal** și tastați `systemextensionsctl reset`.
1. Reporniți macOS și introduceți modul de recuperare.
1. Enable SIP (Launch **Terminal** from the **Utilities** menu and type `csrutil enable`).
1. Lansați aplicația AdGuard și activați protecția.

## Probleme de lansare pe macOS 10

Dacă aveți probleme la lansarea AdGuard pentru Mac pe sistemele de operare Sierra, Mojave și Catalina, vă rugăm să folosiți această instrucțiune:

1. Deschideți **Terminal** și introduceți comanda `ls -@lOae /private/var/db/KernelExtensionManagement`.
1. Verificați că marca `restricted` nu este prezentă (așa cum este în captura de ecran). ![Exemplu de comandă *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)
1. Reporniți macOS în modul de recuperare.
1. Deschideți **Utilitare** → **Terminal**.
1. Enter `csrutil disable`.
1. Introduceți parola de administrator.
1. Reporniți macOS.
1. Deschideți **Terminal** și introduceți următoarea comandă: `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
1. Reporniți macOS în modul de recuperare.
1. Open **Utilities** → **Terminal** → Enter `csrutil enable` → Enter administrator password → Reboot your Mac.
1. Activați protecția AdGuard.
