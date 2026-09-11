---
title: Problemi di limite delle regole
sidebar_position: 1
---

:::info

Questo articolo riguarda AdGuard Mini per Mac, che protegge solo il tuo browser Safari. Per proteggere completamente il tuo Mac, [scarica l'app AdGuard](https://agrd.io/download-kb-adblock)

:::

## Limite delle regole di blocco dei contenuti di Safari

AdGuard mini per Mac utilizza l'API di blocco dei contenuti per applicare regole di filtraggio alle pagine nel browser Safari. Attualmente è consentito un massimo di 150.000 regole per ciascuna estensione di blocco dei contenuti.

AdGuard Mini per Mac ha 6 blocchi di contenuti:

- AdGuard Generale
- AdGuard Privacy
- AdGuard Social
- AdGuard Sicurezza
- AdGuard Altri
- AdGuard Personalizzati

Ciò equivale a un totale di 900.000 regole di filtraggio.

Tuttavia, **un'estensione può contenere solo fino a 150.000 regole**. Se superi questo limite, alcune regole non verranno applicate. Ciò potrebbe portare a un blocco errato.

## Come verificare se stai superando il limite della regola

1. Apri l'app AdGuard Mini.
2. Vai su _Impostazioni_ → _Estensioni Safari_.
3. Sotto ogni estensione, puoi vedere i filtri abilitati e il numero di regole attive.
   ![Scheda estensioni](https://cdn.adtidy.org/content/kb/ad_blocker/mini_mac/extensions.png)

Se in un blocco dei contenuti sono abilitate più di 150.000 regole, potrebbe essere necessario disabilitarne alcuni filtri o regole utente. Vai su _Filtri_, seleziona la categoria problematica e disabilita i filtri o le regole utente che non ti servono.
