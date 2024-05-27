---
title: Protezione DNS
sidebar_position: 2
---

:::info

Questo articolo riguarda AdGuard per iOS, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

[Modulo di protezione DNS](https://adguard-dns.io/kb/general/dns-filtering/) migliora la tua privacy crittografando il tuo traffico DNS. A differenza del blocco di contenuti di Safari, la protezione DNS opera a livello di sistema, ovvero, oltre Safari, nelle app e su altri browser. Devi abilitare questo modulo prima di poterlo utilizzare. È possibile attivarlo nella schermata iniziale toccando l'icona dello scudo nella parte superiore dello schermo, oppure accedendo alla scheda _Protezione_ → _Protezione DNS_.

:::note

Per poter gestire le impostazioni DNS, le app di AdGuard richiedono di creare una VPN locale. Non indirizzerà il tuo traffico attraverso alcun server remoto. Tuttavia, il sistema ti chiederà di confermare il permesso di accesso.

:::

### Implementazione DNS {#dns-implementation}

![Schermata di implementazione DNS \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/implementation_en.jpeg)

Questa sezione contiene due opzioni: AdGuard e Implementazione Nativa. Fondamentalmente, questi sono i due metodi di configurazione del DNS.

In Implementazione Nativa, il DNS è gestito dal sistema e non dall'app. Ciò significa che AdGuard non necessita di creare una VPN locale. Purtroppo, questo non ti aiuterà ad aggirare le limitazioni di sistema e a utilizzare AdGuard insieme ad altre applicazioni basate sulla VPN; se una VPN è abilitata, il DNS nativo sarà ignorato. Di conseguenza, non sarai in grado di filtrare il traffico localmente o di utilizzare il nostro nuovissimo [protocollo DNS-over-QUIC (DoQ)](https://adguard.com/en/blog/dns-over-quic.html).

### Server DNS {#dns-servers}

La sezione successiva che visualizzerai sulla schermata Protezione DNS è il server DNS. Mostra il server DNS correntemente selezionato e il tipo di crittografia. Per modificarli, tocca il pulsante per accedere alla schermata Server DNS.

![Server DNS \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_server_en.jpeg)

I server differiscono per velocità, protocollo utilizzato, affidabilità, politica di registrazione, etc. Di default, AdGuard suggerirà diversi server DNS tra quelli più popolari (incluso AdGuard DNS). Toccane uno qualsiasi per cambiare il tipo di crittografia (se tale opzione è fornita dal proprietario del server) o per visualizzare la pagina home del server. Abbiamo aggiunto etichette come "Politica di non registrazione", "Blocco annunci", "Sicurezza" per aiutarti a fare una scelta.

Inoltre, in fondo alla schermata, è presente un'opzione per aggiungere un server DNS personalizzato. Supporta i server regolari, DNSCrypt, DNS-over-HTTPS, DNS-over-TLS e DNS-over-QUIC.

#### Autenticazione di base HTTP per DNS-over-HTTPS

Questa funzionalità porta le funzionalità di autenticazione del protocollo HTTP al DNS, che non dispone di autenticazione integrata. L'autenticazione in DNS è utile se desideri limitare l'accesso al tuo server DNS personalizzato a utenti specifici.

Per abilitare questa funzione:

1. In AdGuard DNS, vai su _Impostazioni server_ → _Dispositivi_ → _Impostazioni_ e cambia il server DNS con quello con autenticazione. Facendo clic su _Nega altri protocolli_ verranno rimosse altre opzioni di utilizzo del protocollo, lasciando abilitata solo l'autenticazione DNS-over-HTTPS e impedendone l'utilizzo da parte di terze parti. Copia l'indirizzo generato.

![DNS-over-HTTPS con autenticazione](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

1. In AdGuard per iOS, vai alla _scheda Protezione_ → _Protezione DNS_ → _Server DNS_ e incolla l'indirizzo generato nel campo _Aggiungi un server DNS personalizzato_. Salva e seleziona la nuova configurazione.

Per verificare se tutto è impostato correttamente, visita la nostra [pagina di diagnostica](https://adguard.com/en/test.html).

### Impostazioni di rete {#network-settings}

![Schermata delle impostazioni di rete \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/network_settings_en.jpeg)

Gli utenti, inoltre, possono gestire la sicurezza del proprio DNS sulla schermata delle Impostazioni di Rete. _Filtra i dati mobili_ e _Filtra il Wi-Fi_ abilitano o disabilitano la protezione DNS per i rispettivi tipi di rete. Più in basso, in _Eccezioni Wi-Fi_, puoi escludere particolari reti Wi-Fi dalla protezione DNS (ad esempio, potresti voler escludere la tua rete domestica se utilizzi [AdGuard Home](https://adguard.com/ adguard-home/overview.html)).

### Filtraggio DNS {#dns-filtering}

Il filtraggio DNS ti consente di personalizzare il tuo traffico DNS, abilitando il filtro AdGuard DNS, aggiungendo filtri DNS personalizzati e utilizzando la lista di blocco/allowlist DNS.

Come accedervi:

_Protezione_ (l'icona dello scudo nella barra inferiore dei menu) → _Protezione DNS_ → _Filtraggio DNS_

![Schermata di filtraggio DNS \*mobile\_border](https://cdn.adtidy.org/public/Adguard/kb/iOS/features/dns_filtering_en.jpeg)

#### Filtri DNS {#dns-filters}

Simili ai filtri che funzionano in Safari, i filtri DNS sono insiemi di regole scritte secondo una [sintassi speciale](https://adguard-dns.io/kb/general/dns-filtering-syntax/). AdGuard monitorerà il tuo traffico DNS e bloccherà le richieste corrispondenti a una o più regole. Puoi utilizzare filtri come il [Filtro DNS AdGuard](https://github.com/AdguardTeam/AdguardSDNSFilter) o aggiungere file host come filtri. Possono essere aggiunti più filtri simultaneamente. Per sapere come farlo, familiarizzati con [questo manuale esaustivo](adguard-for-ios/solving-problems/system-wide-filtering).

#### Lista consentita e Lista bloccata {#allowlist-blocklist}

Oltre ai filtri DNS, puoi avere un impatto mirato sul filtraggio DNS aggiungendo domini singoli alla Lista di blocco o all'Allowlist. La lista di blocco supporta persino la stessa sintassi DNS ed, entrambe, possono essere importate ed esportate, proprio come l'Allowlist nel blocco dei contenuti di Safari.
