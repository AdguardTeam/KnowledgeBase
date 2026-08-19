---
title: Cum să colectați jurnalele AdGuard
sidebar_position: 3
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Datele și/sau fișierele furnizate în jurnale sunt procesate în conformitate cu [Politica de confidențialitate a AdGuard](https://adguard.com/en/privacy.html).

:::

Pentru a analiza și diagnostica diferite probleme care ar putea apărea, serviciul de suport AdGuard ar putea avea nevoie de fișierele jurnal AdGuard. Aceste fișiere conțin înregistrări despre erori și alte evenimente care apar cu programul. Mai jos sunt instrucțiunile succinte care descriu modul de obținere a fișierelor jurnal și de trimitere a acestora către serviciul de suport, dacă este necesar.

:::note

AdGuard se angajează să protejeze intimitatea dumneavoastră. Respectăm strict [Politica confidențialității](https://adguard.com/privacy/windows.html) și nu colectăm informații private despre utilizatori. Înainte de a trimite jurnalele echipei de asistență, vă rugăm să revizuiți fișierul, deoarece acesta poate conține informații suplimentare pe care nu doriți să le împărtășiți. Dacă conține astfel de informații personale, vă recomandăm să le ștergeți mai întâi.

:::

### Jurnale de depanare {#debug-logs}

1. Deschideți setările AdGuard. Go to the *General Settings* section, scroll down to the bottom of the screen, and switch the *Logging Level* to *Debug*.

    ![Nivelul de jurnal de depanare *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. Reproduceți problema.

    Vă sfătuim să notați ora exactă când ați reprodus problema: va ajuta echipa noastră de suport să găsească înregistrările jurnal relevante și să rezolve problema mai repede.

1. Exportați jurnalele colectate folosind butonul *Exportați jurnalele*.

    ![Exportați jurnalele *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Salvați arhiva într-un folder.

1. **Important**: după ce ați exportat jurnalele, setați din nou nivelul de jurnal la *Implicit*. *Nivelul de depanare* va încetini aplicația.

1. Trimiteți arhiva serviciului de suport AdGuard la **support@adguard.com**, descrieți problema și nu uitați să menționați ora când ați reprodus problema.

### Jurnale de urmărire {#trace-logs}

Uneori, membrii echipei de suport pot să vă întrebe să trimiteți *jurnale de urmărire*. Apoi va trebui să faceți următoarele:

1. Opriți AdGuard făcând clic dreapta pe iconița AdGuard din meniul de sistem și alegând *Ieșiți din AdGuard*:

    ![Ieșiți din AdGuard *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    Vă rugăm nu lăsați serviciul să ruleze:

    ![Opriți Serviciul AdGuard *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. Deschideți consola (tastați `cmd` în panoul de start).

1. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard for Windows v7.16 or later.

If you have an older version of AdGuard for Windows, run the application with the command C:\"Program Files (x86)"\Adguard\Adguard.exe /trace if you are using 64-bit Windows, and C:\"Program Files"\Adguard\Adguard.exe /trace if you are using 32-bit.

1. Reproduceți problema.

    Vă sfătuim să notați ora exactă când ați reprodus problema: va ajuta echipa noastră de suport să găsească înregistrările jurnal relevante și să rezolve problema mai repede.

1. Exportați jurnalele colectate folosind butonul *Exportați jurnalele*.

    ![Exportați jurnalele *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    Nu vă faceți griji dacă fișierul jurnal este mare. Trebuie să știm cât mai multe detalii pentru a rezolva problema dumneavoastră.
