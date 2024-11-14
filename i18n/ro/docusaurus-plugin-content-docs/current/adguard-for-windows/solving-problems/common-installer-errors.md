---
title: Erori comune ale instalatorului
sidebar_position: 6
---

:::info

Acest articol se referă la AdGuard pentru Windows, un blocant de reclame multifuncțional care protejează dispozitivul dumneavoastră la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Acest articol conține unele dintre cele mai frecvente erori pe care le puteți întâlni în timpul instalării AdGuard pentru Windows și modalitățile posibile de a le rezolva.

### Eroare 5: Acces refuzat {#error-5}

Acest mesaj de eroare apare când permisiunile necesare nu au fost acordate. There may be several different reasons why AdGuard installer doesn't have the permissions it requires to properly finish the installation process. Puteți încerca următorii pași:

- Dezactivați temporar antivirusul. Unele dintre ele pot interfera cu instalarea, în funcție de severitatea setărilor lor.

- Alegeți un folder de instalare diferit. Este posibil ca folderul de instalare actual să aibă unele restricții de acces. De asemenea, asigurați-vă că nu selectați un disc extern, un disc virtual etc.

- Reporniți computerul. Uneori, problemele de permisiuni sunt temporare și pot fi rezolvate prin repornirea PC-ului.

### Eroare 112: Disc plin, Eroare 1632: Folder temporar plin sau inaccesibil {#error-112}

Acestea sunt două erori diferite cu soluții foarte asemănătoare. Așa cum sugerează titlurile lor, instalatorul AdGuard nu a găsit suficient spațiu pe disc pentru a finaliza instalarea. Există mai multe lucruri pe care le puteți încerca pentru a remedia problema:

- Dezinstalați unele programe sau ștergeți fișierele inutile de pe disc la care încercați să instalați AdGuard.

- Descărcați, instalați și rulați [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), un program gratuit de la Malwarebytes. It will, among other things, clean your system from all kinds of extra "leftover" files that remain after incorrectly uninstalled programs and such. Acesta va ajuta la curățarea unei părți din spațiul pe disc.

- Reporniți computerul. Uneori, fișierele temporare pot ocupa o cantitate considerabilă de spațiu pe disc, iar repornirea PC-ului este cea mai fiabilă modalitate de a scăpa de ele.

### Eroare 1601: Instalatorul Windows nu este accesibil {#error-1601}

Puteți spune că aceasta este o subcategorie particulară a Erorii 1603. Soluțiile posibile sunt similare:

- Porniți și înregistrați din nou serviciul Installator Microsoft. Acest lucru necesită ceva muncă.

    1) Apăsați *Win + R* și introduceți **services.msc**. 2) Găsiți în listă și faceți dublu clic pe *Windows Installer*. 3) Apăsați butonul *Start* sub *Stare serviciu* și apăsați *OK*. Dacă starea serviciului este **în funcțiune**, ar trebui să faceți clic pe *Oprire* mai întâi și apoi să apăsați *Start*. 4) Apăsați *Win + R*, tastați și introduceți ***msiexec /unregister*** și apăsați *Enter*. 5) Apăsați *Win + R* din nou, tastați și introduceți ***msiexec /regserver*** și apăsați *Enter*

- Reporniți PC-ul și începeți din nou instalarea. Uneori, asta este suficient pentru a rezolva problema.

### Eroare 1602: Anulată de utilizator {#error-1602}

Dacă ați primit acest cod de eroare, este foarte probabil să fi întrerupt procesul de instalare manual într-un fel sau altul. Ce puteți face este:

- Nu închideți fereastra instalatorului. Atunci când instalarea este finalizată, se va închide automat.

- Dacă apare o fereastră de dialog în timpul instalării, apăsați "Da" pentru a permite instalatorului permisiunile necesare. Apăsați "Nu" pentru a anula instalarea.

- Nu începeți alte procese în timp ce procesul de instalare este în curs.

### Eroare 1603: Eroare fatală în timpul instalării {#error-1603}

Eroarea sună mai înfricoșător decât este de fapt. În realitate, aceasta este o eroare destul de generică care poate avea multe cauze diferite, iar unele dintre ele sunt ușor de remediat. Încercați următoarele soluții:

- Press the *Win* key, search for *Command Prompt* and run it. Acolo, tastați `sfc /scannow` și apăsați *Enter*.

- Alegeți un folder de instalare diferit. Este posibil ca folderul de instalare actual să aibă unele restricții de acces. De asemenea, asigurați-vă că nu selectați un disc extern, un disc virtual etc.

- Uninstall AdGuard using our special [uninstall tool](../../installation#advanced) and then repeat the installation.

- Porniți și înregistrați din nou serviciul Installator Microsoft. Acest lucru necesită ceva muncă.

    1) Apăsați *Win + R* și introduceți ***services.msc***. 2) Găsiți în listă și faceți dublu clic pe *Windows Installer*. 3) Apăsați butonul *Start* sub *Stare serviciu* și apăsați *OK*. Dacă starea serviciului este **în funcțiune**, ar trebui să faceți clic pe *Oprire* mai întâi și apoi să apăsați *Start*. 4) Apăsați *Win + R*, tastați și introduceți ***msiexec /unregister*** și apăsați *Enter*. 5) Apăsați *Win + R* din nou, tastați și introduceți ***msiexec /regserver*** și apăsați *Enter*

- Obțineți permisiuni complete pe disc pentru instalare. Este posibil ca eroarea 1603 să apară pentru că nu aveți permisiuni complete asupra locației fișierului. De asemenea, nu este la fel de ușor ca unele dintre celelalte soluții:

    1) Deschideți *File Explorer*, faceți clic dreapta pe discul care conține locația de instalare și selectați *Proprietăți*. 2) Mergeți la tab-ul *Securitate* și faceți clic pe *Editare*. 3) Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Faceți aceeași verificare pentru *Administratori*. 4) Faceți clic pe *OK* pentru a reveni la dialogul *Proprietăți*. Apoi faceți clic pe *Avansat*. 5) Click *Change Permissions*. 6) Pe tab-ul *Permisiuni*, faceți dublu clic pe *Administratori*. 7) Select *This folder, subfolders and files* for *Applies to* field and check all the available *Basic permissions*. După aceea, apăsați *OK*. 8) Faceți aceeași operație de mai sus (de la punctul 7) pentru *SYSTEM*. 9) Faceți clic pe *OK* până la final. Încercați să instalați din nou AdGuard.

### Eroare 1618: O altă instalare este deja în desfășurare {#error-1618}

Această eroare apare atunci când există mai multe instanțe ale instalatorului AdGuard lansate în același timp. Ce să faceți dacă primiți această eroare:

- Reporniți PC-ul și începeți din nou instalatorul. Când reporniți computerul, toate procesele în curs se vor opri, inclusiv toate copiile instalatorului.

- Don't make multiple clicks on the installer even if it doesn't start right away. Uneori poate dura câteva secunde pentru a afișa interfața instalatorului.

### Eroare 1638: O altă versiune a acestui produs este deja instalată {#error-1638}

Este foarte probabil să fi instalat deja AdGuard înainte.

- Verificați dacă AdGuard este deja instalat pe computerul dumneavoastră. Puteți face acest lucru apăsând tasta *Win* și tastând ***AdGuard***.

- Maybe there're some leftover files from a previous AdGuard installation. Uninstall AdGuard using our special [uninstall tool](../../installation#advanced) and then repeat the installation.

### Alte erori {#other}

Dacă ați întâmpinat o eroare care nu este listată mai sus, este posibil să o putem rezolva singuri. Dar, pentru a face acest lucru, avem nevoie de fișierele jurnal de la dumneavoastră. Vă rugăm să efectuați următorii pași:

- Find and archive the **AdGuard installation logs** as it is described in [this article](../installation-logs).

- Find and save to disk the **Event Viewer** logs. [Acest articol](../system-logs) explică cum să faceți asta.

- Vă rugăm să trimiteți toate aceste fișiere din două pași anteriori echipei de asistență la **support@adguard.com** și să descrieți problema în corpul mesajului. Agenții noștri de asistență pentru clienți vă vor răspunde cât mai curând posibil.
