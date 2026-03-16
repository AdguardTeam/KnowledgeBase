---
title: Impostazioni avanzate
sidebar_position: 4
---

:::info

Questo articolo descrive AdGuard per Windows v8.0, un blocca-inserzioni completo che protegge il tuo dispositivo a livello di sistema. Questo è una versione beta ancora in fase di sviluppo. Per provarlo, scarica la [versione beta di AdGuard per Windows](https://agrd.io/windows_beta).

:::

La sezione _Impostazioni avanzate_ contiene opzioni che vanno oltre ciò di cui la maggior parte degli utenti ha generalmente bisogno. AdGuard per Windows funziona perfettamente sin dall'inizio, ma queste impostazioni possono essere utili in casi particolari o per la risoluzione dei problemi.

:::caution

Modificare le impostazioni avanzate senza capirle può causare inghippi di prestazioni, interrompere la connessione alla rete globale o influire su sicurezza e riservatezza. Modificali solo se sai quello che stai facendo o se sei stato istruito dal nostro gruppo di assistenza.

:::

## Escludi app dal filtraggio inserendo il percorso completo

Se vuoi che AdGuard eviti il filtraggio di una specifica app, inserisci qui il percorso completo del file. Puoi aggiungere più app separando i loro percorsi con punti e virgola.

## Abilita le notifiche a comparsa di AdGuard

Abilita questa funzionalità per visualizzare le notifiche popup di AdGuard. Non appaiono troppo spesso e contengono soltanto informazioni importanti. Puoi anche riaprire l'ultima notifica dal menu' della barra delle applicazioni.

## Intercetta automaticamente gli URL di iscrizione agli filtri

Quando è abilitato, AdGuard rileverà automaticamente i collegamenti di sottoscrizione filtro (come `abp:subscribe`) e aprirà una finestra per aiutarti ad aggiungerli ai tuoi filtri.

## Utilizza modalità reindirizzamento driver

Se quest'opzione è abilitata, AdGuard reindirizza tutto il tuo traffico a un server proxy locale per il filtraggio.

Se è spento, AdGuard filtra il traffico direttamente — senza reindirizzarlo. In questa modalità, Windows vede AdGuard come l'unica app che si connette alla rete globale, poiché tutte le altre app passano attraverso di essa. Ciò può migliorare leggermente le prestazioni, ma potrebbe ridurre l'efficacia del firewall di sistema.

## Apri AdGuard all'avvio del sistema

Abilita questa opzione per lanciare automaticamente la finestra di AdGuard all'avvio del PC.

## Abilita il filtraggio all'avvio del sistema

A partire dalla versione 7.12, AdGuard non inizia a filtrare automaticamente il traffico dopo l'avvio del PC, a meno che non sia abilitata l'opzione _Avvia AdGuard all'avvio del sistema_. Invece, funziona in modalità passiva "inerte".

Attivando questa opzione consenti ad AdGuard di filtrare il traffico immediatamente, anche se l’app non è stata ancora aperta.

## Filtra host locale

Abilita questa opzione per consentire ad AdGuard di filtrare il traffico di continuità (localhost), che alcune app usano per comunicare all'interno del sistema. Se VPN di AdGuard è installato, questa impostazione è sempre attiva perché la VPN ne ha bisogno per funzionare come previsto.

## Cattura HAR

Questo è solo per il debug. Quando abilitato, AdGuard creerà un file HAR (formato HTTP Archive 1.2) con informazioni dettagliate su tutte le richieste filtrate. Puoi aprirlo in app come Fiddler.

Tieni presente: può rallentare la tua navigazione.

## Mostra QUIC nella nota di filtraggio

Quando abilitato, AdGuard includerà il traffico del protocollo QUIC nel registro di filtraggio — ma solo per le richieste bloccate.

## Blocca Java

Alcuni siti web usano ancora plug-in Java, che si basano su una tecnologia obsoleta e insicura. Puoi disabilitare tali plugin per motivi di sicurezza.

L'opzione _Blocca Java_ non influisce su JavaScript — rimarrà abilitato.

## Modalità di blocco per le regole DNS

Scegli come AdGuard risponde quando un dominio è bloccato da una regola DNS basata sulla [sintassi in stile hosts](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- Restituisce un errore `REFUSED`
- Restituisce un errore `NXDOMAIN`
- Restituisce un indirizzo IP personalizzato

### Indirizzo IPv4 personalizzato

Se _l'indirizzo IP personalizzato_ è selezionato in _Modalità di blocco per le regole DNS_, questo indirizzo IP verrà restituito in risposta alle richieste A bloccate. Se non ne viene specificato nessuno, AdGuard risponderà con l'errore REFUSED predefinito.

### Indirizzo IPv6 personalizzato

Se _l'indirizzo IP personalizzato_ è selezionato in _Modalità di blocco per le regole DNS_, questo indirizzo IP verrà restituito in risposta alle richieste AAAA bloccate. Se non ne viene specificato nessuno, AdGuard risponderà con l'errore REFUSED predefinito.

## Server di fallback

Imposta qui i server DNS di backup. AdGuard li utilizzerà se il server DNS principale non risponde entro il timeout impostato. Puoi:

- Utilizzare i server DNS predefiniti di sistema
- Aggiungere server di fallback personalizzati
- Oppure scegliere di non utilizzare affatto i server di fallback

## Tempo limite del server DNS

Specifica per quanto tempo (in millisecondi) AdGuard deve attendere una risposta DNS prima di passare a un server di fallback. Se lasciato vuoto o non valido, il valore predefinito è 5000 ms (5 secondi).

## Indirizzi bootstrap personali

Un bootstrap è un server DNS intermedio utilizzato per ottenere l'indirizzo IP del server DNS sicuro scelto in precedenza in Protezione DNS. Una simile "via di mezzo" è necessaria utilizzando i protocolli che denotano l'indirizzo del server con delle lettere (come ad esempio DNS su TLS). In questo caso, il bootstrap agisce da traduttore, trasformando le lettere in numeri comprensibili dal tuo sistema.

Ma se necessario, qui puoi specificare diversi indirizzi IP — verranno provati nell'ordine dall'alto verso il basso. Se non funziona o non viene inserito nulla, AdGuard tornerà alle impostazioni predefinite del sistema.

## Esclusioni DNS

I domini elencati qui bypassano i server DNS di AdGuard. Le loro richieste passano attraverso il resolver predefinito del sistema e AdGuard non applica alcuna regola di blocco su di esse.
