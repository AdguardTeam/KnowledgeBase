---
title: Problemi di limite delle regole
sidebar_position: 1
---

:::info

Questo articolo riguarda AdGuard per Safari, che protegge solo il tuo browser Safari. Per proteggere l'intero dispositivo, [scarica l'app AdGuard](https://agrd.io/download-kb-adblock)

:::

## Limite delle regole di blocco dei contenuti di Safari

AdGuard per Safari utilizza l'API di blocco dei contenuti per applicare regole di filtro alle pagine nel browser Safari. Attualmente è consentito un massimo di 150.000 regole per ciascuna estensione di blocco dei contenuti.

AdGuard per Safari ha 6 blocchi di contenuti:

- AdGuard Generale
- AdGuard Privacy
- AdGuard Social
- AdGuard Sicurezza
- AdGuard Altri
- AdGuard Personalizzati

Ciò equivale a un totale di 900.000 regole di filtraggio.

Tuttavia, **un'estensione può contenere fino a 150.000 regole**. Se superi questo limite, alcune regole non verranno applicate. Ciò potrebbe portare a un blocco errato.

## Come verificare se stai superando il limite della regola

1. Apri l'app AdGuard per Safari.
2. Scorri verso il basso e fai clic su _Blocchi contenuti_.
3. Sotto ogni blocco dei contenuti puoi vedere i filtri abilitati e il numero di regole attive.
 ![Blocchi dei contenuti](https://cdn.adtidy.org/content/Kb/ad_blocker/safari/adg-safari-cb.png)

Se in un blocco dei contenuti sono abilitate più di 150.000 regole, potrebbe essere necessario disabilitarne alcuni filtri o regole utente. Vai su _Filtri_, seleziona la categoria problematica e disabilita i filtri o le regole utente che non ti servono.
