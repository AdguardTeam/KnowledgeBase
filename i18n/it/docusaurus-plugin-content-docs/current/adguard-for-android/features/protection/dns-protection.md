---
title: Protezione DNS
sidebar_position: 4
---

:::info

Questo articolo riguarda AdGuard per Android, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

Il modulo di protezione DNS può essere aperto toccando la scheda _Protezione_ (seconda icona a sinistra nella parte inferiore dello schermo) e poi selezionando _Protezione DNS_.

:::tip

La protezione DNS funziona in modo diverso rispetto al blocco normale delle inserzioni e dei tracciatori. Puoi [scoprire di più su di esso e su come funziona in un articolo dedicato](https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work)

:::

\*La Protezione DNS ti consente di filtrare le richieste DNS con l'aiuto di un dato server DNS, filtri DNS e regole dell'utente:

- Alcuni server DNS prevedono delle liste di blocco, che aiutano a bloccare le richieste DNS ai domini potenzialmente dannosi

- Oltre ai server DNS, AdGuard può filtrare le richieste DNS per conto proprio, utilizzando un filtro DNS speciale. Contiene un grande elenco di domini pubblicitari e di tracciamento: le richieste a essi sono reindirizzate a un server blackhole

- Inoltre, puoi bloccare e sbloccare i domini, creando delle regole dell'utente. Potresti dover consultare il nostro articolo sulla [sintassi delle regole di filtraggio DNS](https://adguard-dns.io/kb/general/dns-filtering-syntax/)

![Protezione DNS \*mobile_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### Server DNS

In questa sezione, puoi selezionare un server DNS per risolvere le richieste DNS, bloccare annunci e tracciatori e crittografare il traffico DNS. Tocca un server per leggerne la descrizione completa e selezionare un protocollo. Se non hai trovato il server desiderato, puoi aggiungerlo manualmente:

- Tocca _Aggiungi server DNS_ e inserisci l'indirizzo (o gli indirizzi) del server

- In alternativa, puoi selezionare un server DNS dall'[elenco di fornitori DNS noti](https://adguard-dns.io/kb/general/dns-providers/) e toccare _Aggiungi ad AdGuard_ accanto ad esso

- Se stai usando un server privato di AdGuard DNS, puoi aggiungerlo ad AdGuard dal [cruscotto](https://adguard-dns.io/dashboard/)

Per impostazione predefinita, è selezionato _DNS automatico_. Imposta un server DNS secondo le tue impostazioni di AdGuard e del dispositivo. Se hai abilitato [l'integrazione con AdGuard VPN](/adguard-for-android/features/integration-with-vpn) o con un altro proxy SOCKS5, si connette al AdGuard DNS non filtrante o a qualsiasi altro server tu specifichi. In tutti gli altri casi, si connette al server DNS selezionato nelle impostazioni del tuo dispositivo.

#### Filtri DNS

Questa sezione ti consente di aggiungere filtri DNS personalizzati e regole di filtraggio DNS. Puoi trovare altri filtri su [filterlists.com](https://filterlists.com/).
