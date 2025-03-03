---
title: Cum să creați un fișier minidump pentru a repara eroarea BSoD
sidebar_position: 8
---

Majoritatea utilizatorilor de Windows sunt familiarizați cu [eroarea Ecranului Albastru al Morții (BSoD)](https://en.wikipedia.org/wiki/Blue_screen_of_death) din păcate. BSoD apare atunci când sistemul Windows întâlnește probleme care pot afecta operarea sigură a sistemului, cum ar fi probleme cu codul driverelor de terță parte, hardware sau codul Microsoft. Pentru a rezolva eroarea ecranului albastru, utilizatorii pot folosi un fișier minidump.

## Ce este un fișier Minidump?

Un fișier minidump este un fișier care conține informații despre natura prăbușirii sistemului. Este creat imediat înainte de apariția ecranului albastru și are cantitatea minimă de informații utile care pot fi folosite pentru a rezolva problema. Fișierul minidump are de obicei o extensie *.dmp*.

:::note
Pe Windows 10, ecranul albastru arată un cod de oprire și un cod QR. Utilizatorul poate folosi aceste informații și căuta pe Web problema specifică.

:::

Opțiunea de a crea fișierul minidump este dezactivată implicit, așa că înainte de a intra în mai multe detalii despre cum să folosiți fișierul, să aruncăm o privire mai atentă asupra modului de a-l activa.

## Configurați Windows pentru a crea fișierul Minidump

Chiar dacă nu experimentați nicio eroare de prăbușire BSoD, puteți să activați această opțiune — aceasta este o recomandare generală, nu neapărat legată de produsele AdGuard. Vă rugăm să urmați instrucțiunile de mai jos pentru a crea automat fișierul minidump.

 1. Tastați *sysdm.cpl* în bara de căutare Windows și dați clic pe **Deschis**. Fereastra **Meniului Proprietăți sistem** va apărea pe ecran.

    :::tip

    Alternativ, faceți clic pe **Setări** → **Sistem** → **Despre** → **Setări avansate ale sistemului**.


:::

    ![Proprietăți sistem *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)

 1. Accesați tab-ul **Avansat**.
 1. În secțiunea **Demaraj și recuperare**, dați clic pe **Setări**.

    ![Demaraj și recuperare *mobile_border](https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png)

 1. Activați următoarele trei opțiuni:

    - Scrieți un eveniment în jurnalul sistemului
    - Repornire automată
    - Scrierea informațiilor de depanare → Mic dump de memorie (256 kb)

    ![Trei opțiuni *mobile_border](https://cdn.adtidy.org/blog/new/nmr4eThree_options.png)

 1. Dați clic pe **OK** pentru a aplica setările.
 1. Restart the computer.

Ați activat cu succes fișierul minidump. Acum va fi creat automat când sistemul se prăbușește.

:::note

Implicit, fișierul minidump este stocat în folderul **%SystemRoot%\Minidump**. You can change the directory location to whatever you like, but please remember that a lot of programs are set to look for this location by default, so we recommend that you do not change the location.

:::
