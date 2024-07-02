---
title: Come abilitare il filtraggio di sistema su AdGuard per iOS
sidebar_position: 2
---

:::info

Questo articolo tratta AdGuard per iOS, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona in prima persona, [scarica l'app AdGuard](https://agrd.io/download-kb-adblock)

:::

## Sul filtraggio di sistema

Il filtraggio di sistema significa bloccare annunci e tracciatori oltre al browser Safari, cioè, su altre app e browser. Questo articolo ti spiegherà come abilitarlo sul tuo dispositivo iOS.

Su iOS, il solo modo per bloccare annunci e tracciatori a livello del sistema, è utilizzare il [Filtraggio DNS](https://adguard-dns.io/kb/general/dns-filtering/).

Prima, devi abilitare la protezione DNS. Per farlo:

1. Apri *AdGuard per iOS*.
2. Tocca sull'icona *Protezione* (la seconda nella barra inferiore dei menu).
3. Attiva la *Protezione DNS*.

![Schermata di protezione DNS *mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_dns_protection.PNG)

Ora, se il tuo scopo è bloccare annunci e tracker a livello di sistema, hai tre opzioni:

 1. Utilizzare il filtro di AdGuard DNS (*Protezione* (l'icona dello scudo nel menu inferiore) → *Protezione DNS* → *Filtraggio DNS* → *Filtri DNS* → *Filtro di AdGuard DNS*).
 2. Utilizzare il server di AdGuard DNS (*Protezione* (l'icona dello scudo nel menu inferiore) → *Protezione DNS* → *Server DNS* → *AdGuard DNS*) o un altro server di blocco DNS di tua scelta.
 3. Aggiungere un filtro DNS / file degli host personalizzato, di tua scelta.

La prima e la terza opzione presentano svariati vantaggi:

- Puoi utilizzare qualsiasi server DNS a tua discrezione, e non sei legato a un server di blocco specifico, perché è il filtro a effettuare il blocco.
- Puoi aggiungere numerosi filtri DNS e/o file degli host (sebbene utilizzarne troppi potrebbe rallentare AdGuard).

![Come funziona il filtraggio DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

## Come aggiungere un filtro DNS / file degli host personalizzato

Puoi aggiungere qualsiasi filtro DNS o file degli host che preferisci.

Per l'esempio, aggiungiamo [OISD Blocklist Big](https://oisd.nl/).

1. Copia questo link: `https://big.oisd.nl` (è un collegamento al filtro OISD Blocklist Big)
2. Apri *Protezione* (l'icona dello scudo nel menu inferiore) → *Protezione DNS* → *Filtraggio DNS* → *Filtri DNS*.
3. Tocca *Aggiungi un filtro*.
4. Incolla il collegamento nel campo dell'URL del filtro.
5. Tocca su *Successivo* → *Aggiungi*.

![Schermata di aggiunta di un filtro DNS *mobile_border](https://cdn.adtidy.org/blog/new/ot4okIMGD236EB8905471.jpeg)

Aggiungii quanti altri filtri DNS desideri allo stesso modo, incollando un URL differente al passaggio 4. Puoi trovare vari filtri e link a essi, [qui](https://filterlists.com).
