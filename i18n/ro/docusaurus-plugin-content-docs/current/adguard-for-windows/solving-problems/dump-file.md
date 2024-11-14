---
title: Cum să creați un fișier de dump
sidebar_position: 8
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Datele și/sau fișierele furnizate în fișierele de dump sunt procesate în conformitate cu [Politica de confidențialitate AdGuard](https://adguard.com/en/privacy.html).

:::

Pentru a diagnostica motivele pentru problemele potențiale pe care utilizatorii le-ar putea întâlni în timp ce folosesc AdGuard, echipa de asistență ar putea avea nevoie de fișierul de dump al procesului. Fișierul de dump ajută dezvoltatorii să vadă procesele care au fost executate în aplicație pe o anumită perioadă de timp. Mai jos puteți verifica instrucțiunile de colectare a fișierului de dump pe PC-ul dvs.

1. Press **Ctrl + Shift + Esc** and click **Task Manager**

1. În bara de meniu de sus, selectați **Detalii**

    ![Detalii despre Task Manager](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

1. Faceți clic dreapta pe procesul pentru care doriți să creați fișierul de dump (de exemplu, echipa de asistență vă poate cere să creați un dump pentru `Adguard.exe`)

1. În meniul derulant, faceți clic pe **Creează fișier de dump**

1. Fișierul a fost creat cu succes!

    ![Creează fișier de dump](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

După ce ați creat fișierul de dump, vă rugăm să navigați la locația fișierului. Ar trebui să fiți solicitat să deschideți folderul care conține fișierul de dump imediat după crearea sa. Altfel, veți putea să-l găsiți în folderul **%tmp%**. Fișierul de dump creat (`.DMP`) are același nume ca numele procesului pe care l-ați ales în pașii anteriori. Fișierul este destul de mare, așa că vă rugăm să-l comprimați într-o arhivă înainte de a-l trimite la suport.

:::note

AdGuard pentru Windows are două procese în execuție, `Adguard.exe` și `AdguardSvc.exe`. Prin urmare, este necesar să creați un fișier de dump separat pentru fiecare proces.

:::

![Procese AdGuard](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

Când trimiteți fișierele de dump echipei de asistență, vă rugăm să atașați și jurnalele aplicației AdGuard pentru a avea o șansă mai bună de a rezolva problema. [Aici](../adguard-logs) puteți verifica instrucțiunile despre cum să obțineți fișierul jurnal.
