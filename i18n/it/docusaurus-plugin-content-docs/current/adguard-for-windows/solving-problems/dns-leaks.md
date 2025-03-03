---
title: Possibili falle DNS
sidebar_position: 9
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard per Windows consente agli utenti di specificare un indirizzo del server DNS per risolvere le richieste, differente da quello di sistema, fornito dal tuo ISP, se non sovrascritto nelle impostazioni di sistema. Usare un server DNS non predefinito può salvaguardare il tuo traffico DNS dall'intercettazione dell'ISP. Inoltre, scegliendo un server DNS crittografato e/o di filtraggio, ottieni un altro livello di protezione da malintenzionati e annunci fastidiosi.

Molti utenti di AdGuard per Windows apprezzano la funzionalità di protezione DNS. Ma alcuni di loro riscontrano il seguente problema: un controllo su un sito web come https://ipleak.net/ mostra che le richieste sono gestite dal server DNS predefinito, invece di quello selezionato. In questo articolo ti spiegheremo perché ciò si verifica e come evitarlo.

## Indirizzo DNS bootstrap

Gli indirizzi dei server DNS potrebbero esser scritti come IP o come nomi di dominio. Nel caso degli indirizzi IP, non sono presenti difficoltà: AdGuard inoltra la richiesta DNS direttamente al server specificato nel modulo Protezione DNS. Tuttavia, gli indirizzi di server DNS crittografati, come DoT o DoH, sono più spesso scritti come nomi di dominio. In questo caso, per risolvere innanzitutto l'indirizzo del server DNS crittografato, AdGuard invia una query DNS all'indirizzo bootstrap, che per impostazione predefinita è un server DNS di sistema. Questa connessione è ciò che i servizi di controllo percepiscono come una perdita.

**Per eliminarla:**

- vai alle *Impostazioni avanzate*
- scorri in basso alla sezione *Elenco di indirizzi personalizzati di bootstrap*
- inserisci l'indirizzo personale di bootstrap nel formato dell'indirizzo IP (puoi usare [l'elenco di fornitori DNS noti](https://adguard-dns.io/kb/general/dns-providers/))
- clicca *Salva*

## Server DNS di fallback

Potrebbe verificarsi che AdGuard non riesca a raggiungere il server specificato a causa di una connessione a Internet debole, la scadenza di un timeout impostata di default o alcuni problemi correlati al server. In tal caso, si connetterà al server di fallback, che di default è un server DNS di sistema. Anche questa connessione sarà considerata come una falla dal servizio di controllo.

**Per eliminare questa perdita:**

- vai alle *Impostazioni avanzate*
- scorri in basso alla sezione *Server di fallback*
- spunta l'opzione *Utilizza server personalizzati*
- quindi, trova la sezione *Lista di server di fallback personalizzati* e inserisci i server di fallback personalizzati, uno per riga

o

- vai alle *Impostazioni avanzate*
- scorri in basso alla sezione *Server di fallback*
- spunta l'opzione *Non utilizzare server di fallback*

o

- vai alle *Impostazioni avanzate*
- scorri in basso alla sezione *Periodo di timeout server DNS*
- inserisci un numero arbitrario grande
