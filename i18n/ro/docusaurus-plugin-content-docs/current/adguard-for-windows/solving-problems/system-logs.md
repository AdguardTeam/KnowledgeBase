---
title: Cum să colectați jurnalele sistemului Windows
sidebar_position: 5
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

:::note

Datele și/sau fișierele furnizate în jurnalele de sistem sunt procesate în conformitate cu [Politica de confidențialitate AdGuard](https://adguard.com/en/privacy.html).

:::

Pentru a analiza și a diagnostica diferite probleme care pot apărea, serviciul de suport AdGuard poate necesita fișierele jurnal ale sistemului Windows. Jurnalele de evenimente Windows conțin înregistrări despre toate erorile care apar cu software-ul instalat, inclusiv AdGuard. Mai jos se află instrucțiunile sumare care descriu modalitatea de a obține fișierele jurnal și de a le trimite serviciului nostru de suport, dacă este necesar.

1. Apăsați *Win + R*

1. În fereastra care apare, tastați `eventvwr` și faceți clic pe *OK*:

    ![Fereastra de rulare *mobil](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. Fereastra Event Viewer apare așa cum este prezentată în imagine.

    ![Vizualizator de evenimente *margine](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    Pentru a salva fișierele de care avem nevoie, faceți următoarele:

    - Deschideți *Aplicație*: *Event Viewer (Local)* → *Windows Logs* → *Aplicație*.

    - Faceți clic dreapta pe *Aplicație* și în meniul derulant selectați *Salvați toate evenimentele ca...*

    - Selectați un nume și unde să salvați, faceți clic pe *Salvați*. Select *Display information for the following languages*. Trebuie să bifați caseta de lângă *Engleză*. Faceți clic pe *OK*.

    - Deschideți *Sistem*: *Event Viewer (Local)* → *Windows Logs* → *Sistem*.

    - Faceți clic dreapta pe *Sistem* și în meniul derulant selectați *Salvați toate evenimentele ca...*

    - Alegeți un folder de destinație, introduceți numele, faceți clic pe *Salvați*. Select *Display information for the following languages*. Trebuie să bifați caseta de lângă *Engleză*. Faceți clic pe *OK*.

Vă rugăm să trimiteți cele două fișiere pe care le-ați salvat recent la **support@adguard.com**.

:::note

AdGuard se angajează să protejeze intimitatea dumneavoastră. Respectăm strict [Politica confidențialității](https://adguard.com/privacy/windows.html) și nu colectăm informații private despre utilizatori. Înainte de a trimite jurnalele echipei de asistență, vă rugăm să revizuiți fișierul, deoarece acesta poate conține informații suplimentare pe care nu doriți să le împărtășiți. Dacă conține astfel de informații personale, vă recomandăm să le ștergeți mai întâi.

:::
