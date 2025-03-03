---
title: Errore d'installazione comuni
sidebar_position: 6
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

Questo articolo contiene alcuni degli errori più comuni che puoi riscontrare durante l'installazione di AdGuard per Windows e i possibili modi per risolverli.

### Errore 5: Accesso Negato {#error-5}

Questo messaggio d'errore appare quando le autorizzazioni necessarie non sono state garantite. Potrebbero esistere diversi motivi per cui il programma d'installazione di AdGuard non ha le autorizzazioni richieste per terminare correttamente il processo d'installazione. Puoi provare i seguenti passaggi:

- Disabilita temporaneamente il antivirus. Alcuni di essi potrebbero interferire con l'installazione, a seconda della gravità delle loro impostazioni.

- Scegli una cartella d'installazione differente. È possibile che la cartella d'installazione corrente preveda delle limitazioni d'accesso. Assicurati, inoltre, di non selezionare un'unità esterna, un'unità virtuale, etc.

- Riavvia il tuo computer. Talvolta i problemi di autorizzazione sono temporanei e risolvibili riavviando il PC.

### Errore 112: Il disco è pieno, Errore 1632: Cartella temporanea piena o inaccessibile {#error-112}

Esistono due errori differenti con soluzioni molto simili. Come suggerito dai loro titoli, il programma d'installazione di AdGuard non ha trovato abbastanza spazio per completare l'installazione. Esistono diverse cose che puoi tentare per risolvere questo problema:

- Disinstalla alcuni programmi o elimina i file non necessari, dall'unità in cui stavi tentando d'installare AdGuard.

- Scarica, installa ed esegui [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), un software gratuito di Malwarebytes. Tra le altre cose, pulirà il sistema da tutti i tipi di file "residui" che rimangono dopo aver disinstallato programmi in modo errato e simili. Aiuterà a svuotare dello spazio su disco.

- Riavvia il tuo computer. Talvolta, i file temporanei, possono occupare una notevole quantità di spazio su disco e, riavviare il tuo PC, è il metodo più affidabile per liberarsene.

### Errore 1601: Il programma d'installazione di Windows non è accessibile {#error-1601}

Si potrebbe dire che questa è una sottocategoria particolare dell'errore 1603. Le possibili soluzioni sono simili:

- Start and re-register Microsoft Installer service. It requires some work.

    - Press *Win + R* and enter **services.msc**.
    - Find in the list and double click *Windows Installer*.
    - Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    - Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    - Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Riavvia il PC e ricomincia l'installazione. Talvolta, ciò è sufficiente per risolvere il problema.

### Errore 1602: Annullata dall'utente {#error-1602}

Se ottieni questo codice d'errore, è possibile che tu abbia interrotto il processo d'installaziona manualmente, in un modo o nell'altro. Ciò che puoi fare è:

- Non chiudere la finestra d'installazione. Al completamento dell'installazione, si chiuderà da sola.

- Se appare una finestra durante l'installazione, clicca su "Sì" per condere le autorizzazioni necessarie al programma d'installazione. Facendo clic su "No" l'installazione verrà annullata.

- Non avviare altri processi durante il processo d'installazione.

### Errore 1603: Errore critico durante l'installazione {#error-1603}

L'errore sembra più spaventoso di quanto non sia in realtà. Infatti, questo è un errore piuttosto generico che può avere molte cause differenti, alcune delle quali sono facilmente risolvibili. Prova le seguenti soluzioni:

- Premi il tasto *Win*, cerca *Prompt dei Comandi* ed eseguilo. Qui, digita `sfc /scannow` e premi *Invio*.

- Scegli una cartella d'installazione differente. È possibile che la cartella d'installazione corrente preveda delle limitazioni d'accesso. Assicurati, inoltre, di non selezionare un'unità esterna, un'unità virtuale, etc.

- Disinstalla AdGuard utilizzando il nostro [strumento di disinstallazione](../../installation#advanced) speciale, poi ripeti l'installazione.

- Start and re-register Microsoft Installer service. It requires some work.

    - Press *Win + R* and enter ***services.msc***.
    - Find in the list and double click *Windows Installer*.
    - Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    - Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    - Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    - Open *File Explorer*, right-click the drive containing the installation location and select *Properties*.
    - Go to *Security* tab and click *Edit*.
    - Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*.
    - Click *OK* to go back to *Properties* dialog. Then click *Advanced*.
    - Click *Change Permissions*.
    - On *Permissions* tab, double-click *Administrators*.
    - Select *This folder, subfolders and files* for *Applies to* field and check all the available *Basic permissions*. After that, hit *OK*.
    - Do the same operation above (from item 7) for *SYSTEM*.
    - Click *OK* all the way out. Try installing AdGuard again.

### Errore 1618: Un'altra installazione è già in corso {#error-1618}

Questo errore si verifica quando ci sono diverse istanze del programma d'installazione di AdGuard, avviate al contempo. Cosa fare se riscontri questo errore:

- Riavvia il tuo PC e riavvia il programma d'installazione. Riavviando il computer, tutti i processi in corso saranno interrotti, incluse tutte le copie del programma d'installazione.

- Non cliccare più volte sul programma d'installazione, anche se non si avvia subito. Talvolta, potrebbe volerci qualche secondo per visualizzare l'UI del programma d'installazione.

### Errore 1638: Un'altra versione del prodotto è già installata {#error-1638}

È molto probabile che tu abbia già installato AdGuard in precedenza.

- Verifica se AdGuard è già installato sul tuo computer. Puoi farlo premendo il tasto *Win* e digitando ***AdGuard***.

- Forse ci sono alcuni file rimasti da una precedente installazione di AdGuard. Disinstalla AdGuard utilizzando il nostro [strumento di disinstallazione](../../installation#advanced) speciale, poi ripeti l'installazione.

### Altri errori {#other}

Se hai riscontrato un errore che non è elencato sopra, è possibile che possiamo risolverlo da soli. Ma per poterlo fare, necessitiamo dei tuoi file di registro. Sei pregato di eseguire i seguenti passaggi:

- Trova e archivia i **registri d'installazione di AdGuard** come descritto in [questo articolo](../installation-logs).

- Trova e salva sul disco i registri del **Event Viewer**. [Questo articolo](../system-logs) spiega come farlo.

- Sei pregato di inviare tutti i file dai due passaggi precedenti, al team di supporto a **support@adguard.com** e di descrivere il problema nel corpo del messaggio. I nostri agenti dell'assistenza tecnica ti risponderanno il prima possibile.
