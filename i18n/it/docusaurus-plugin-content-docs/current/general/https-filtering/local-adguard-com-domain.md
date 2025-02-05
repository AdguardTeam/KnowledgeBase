---
title: Dominio local.adguard.org
sidebar_position: 3
---

Gli utenti di AdGuard per Windows, Mac e Android potrebbero notare che AdGuard aggiunge un piccolo script a ogni pagina web, caricato dal dominio `local.adguard.org`.

Innanzitutto, non preoccuparti, non è un vero dominio e non esiste un server reale con quel nome. Questo dominio è utilizzato per applicare il filtraggio aggiuntivo alle pagine web, ma tutto viene eseguito localmente sul tuo dispositivo, senza connettersi ad alcun server.

### Spiegazione tecnica

Ma cosa sta succedendo e perché avviene? Sei pregato di leggere la seguente spiegazione tecnica.

1. AdGuard è un blocco dei contenuti a livello di rete, quindi, non può semplicemente aggiungere JavaScript e CSS personalizzati alle pagine web come fanno le estensioni del browser. Tuttavia, ciò è fondamentale per un blocco dei contenuti di qualità.
2. Per farlo, AdGuard inietta uno "script di contenuto" simile a questo: `<script src="https://local.adguard.org/.../content-script.js">`. Questo "script di contenuto", si occupa del filtraggio aggiuntivo: nasconde o rimuove i contenuti di annunci dalle pagine web.
3. Le connessioni all'indirizzo IP del dominio `local.adguard.org` sono intercettate da AdGuard a livello della rete ed **elaborate localmente**. Ecco perché quel dominio ha un indirizzo IP "statico" che non cambia per anni.

**Perché dobbiamo utilizzare un indirizzo IP reale per farlo?**

- Non possiamo utilizzare `127.0.0.1`, poiché i browser non lo accetteranno.
- È possibile utilizzare qualche indirizzo IP proveniente da reti secondarie private, ma questa soluzione avrebbe due aspetti negativi.
    - Primo, esiste la minima possibilità che si intersechi con un servizio intranet esistente e ne interrompa l'accesso.
    - Secondo, alcuni server DNS potrebbero considerarlo come un attacco di riassociazione (rebinding) DNS e rifiutarsi di rispondere a `local.adguard.org`.

### Verifica

Questo è facile da verificare. Se disabiliti AdGuard, vedrai che è semplicemente impossibile stabilire una connessione a `local.adguard.org`, poiché non esiste alcun server con quell'indirizzo. Basta provare ad aprirlo sul tuo browser quando AdGuard è disabilitato.
