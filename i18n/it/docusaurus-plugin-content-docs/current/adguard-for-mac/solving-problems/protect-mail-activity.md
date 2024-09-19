---
title: Protect Mail Activity e AdGuard
sidebar_position: 8
---

:::info

Questo articolo riguarda AdGuard per Mac, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app AdGuard](https://agrd.io/download-kb-adblock)

:::

## In breve

L'app Mail di Apple utilizza ora un proxy per nascondere l'indirizzo IP di un utente, scaricando le immagini dalle email.

![Protezione della privacy di Mail](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

Tuttavia, non funzionerà se è attiva una connessione VPN. Poiché tratta AdGuard come una VPN, non precaricherà automaticamente le immagini.

Apple spiega [qui](https://support.apple.com/HT212797) il problema.

## In dettaglio

AdGuard per Mac utilizza ora il filtraggio socket integrato di macOS, basato sull'API delle estensioni di rete. Questo nuovo meccanismo, nonché piuttosto difettoso, ha sostituito le care vecchie estensioni del Kernel. Nell'ultimo anno e mezzo, abbiamo segnalato oltre 20 bug ad Apple, relativi al loro nuovo metodo di filtraggio.

L'API delle estensioni di rete prevede una configurazione simile a una VPN con un elenco di voci simili a percorsi. Su Big Sur, AdGuard utilizzava le regole di "tunnel diviso" per evitare la creazione della regola "percorso predefinito", in quanto casusa di problemi sulle prime release di Big Sur. Questi problemi sono stati risolti su Monterey, quindi nulla ci impedisce di utilizzare la regola "percorso predefinito".

Su Monterey, è stato introdotto il relay privato iCloud. Anche le funzionalità sulla privacy dell'app Mail utilizzano i server di Private Relay.

Di conseguenza, AdGuard non può funzionare con il relay privato iCloud e con le funzionalità per la privacy dell'app Mail:

1. Il relay privato iCloud si applica alle connessioni a livello della libreria, prima che raggiungano il livello di socket, dove opera AdGuard.
2. Il relay privato iCloud utilizza QUIC, che AdGuard non può filtrare, poiché il filtraggio HTTP/3 non è ancora disponibile.
3. Consequently, AdGuard blocks QUIC, including iCloud Private Relay traffic —otherwise, ad blocking is impossible.
4. Quando utilizzi il relay privato iCloud e, in AdGuard, passi alla modalità "tunnel diviso", non puoi aprire i siti web su Safari.
5. Per risolvere questo problema per Monterey, applichiamo la regola "percorso predefinito". Quando Private Relay vede questa regola, si disabilita automaticamente. Quindi, AdGuard opera senza problemi su Monterey, ma il relay privato iCloud viene disabilitato.

`network.extension.monterey.force.split.tunnel` ripristina il comportamento di "Big Sur" ma, tale opzione, potrebbe corrompere l'accesso ai siti web a causa di (3) e (4). Continuiamo a cercare una soluzione a questo problema. Una delle opzioni, è l'implementazione del filtraggio HTTP/3.

## Soluzione consigliata

A questo punto, consigliamo di utilizzare un servizio VPN più tradizionale, come [AdGuard VPN](https://adguard-vpn.com/), invece delle più recenti funzionalità per la privacy di Apple.
