---
title: Possibili falle DNS
sidebar_position: 10
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard per Windows consente agli utenti di specificare un indirizzo del server DNS per risolvere le richieste, differente da quello di sistema, fornito dal tuo ISP, se non sovrascritto nelle impostazioni di sistema. Usare un server DNS non predefinito può salvaguardare il tuo traffico DNS dall'intercettazione dell'ISP. Inoltre, scegliendo un server DNS crittografato e/o di filtraggio, ottieni un altro livello di protezione da malintenzionati e annunci fastidiosi.

Molti utenti di AdGuard per Windows apprezzano la funzionalità di protezione DNS. Ma alcuni di loro riscontrano il seguente problema: un controllo su un sito web come https://ipleak.net/ mostra che le richieste sono gestite dal server DNS predefinito, invece di quello selezionato. In questo articolo ti spiegheremo perché ciò si verifica e come evitarlo.

## Indirizzo DNS bootstrap

Gli indirizzi dei server DNS potrebbero esser scritti come IP o come nomi di dominio.
Nel caso degli indirizzi IP, non sono presenti difficoltà: AdGuard inoltra la richiesta DNS direttamente al server specificato nel modulo Protezione DNS. Tuttavia, gli indirizzi di server DNS crittografati, come DoT o DoH, sono più spesso scritti come nomi di dominio. In questo caso, per risolvere innanzitutto l'indirizzo del server DNS crittografato, AdGuard invia una query DNS all'indirizzo bootstrap, che per impostazione predefinita è un server DNS di sistema. Questa connessione è ciò che i servizi di controllo percepiscono come una perdita.

**To eliminate this leak:**

- go to the _Advanced settings_
- scroll down to the _List of custom bootstrap addresses_ section
- enter the custom bootstrap address in the IP address format (you may use [the list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/))
- click _Save_

## Server DNS di fallback

Potrebbe verificarsi che AdGuard non riesca a raggiungere il server specificato a causa di una connessione a Internet debole, la scadenza di un timeout impostata di default o alcuni problemi correlati al server. In tal caso, si connetterà al server di fallback, che di default è un server DNS di sistema. Anche questa connessione sarà considerata come una falla dal servizio di controllo.

**To eliminate this leak:**

- go to the _Advanced settings_
- scroll down to the _Fallback servers_ section
- check the _Use custom servers_ option
- then find the _List of custom fallback servers_ section and enter the custom fallback servers one per line

o

- go to the _Advanced settings_
- scroll down to the _Fallback servers_ section
- check the _Don’t use fallback servers_ option

o

- go to the _Advanced settings_
- scroll down to the _DNS server timeout period_ section
- inserisci un numero arbitrario grande
