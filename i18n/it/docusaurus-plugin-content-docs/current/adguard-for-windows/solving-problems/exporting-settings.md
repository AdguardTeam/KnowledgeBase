---
title: Come tornare alla versione precedente dopo l'aggiornamento alla v8.0
sidebar_position: 11
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

Le modifiche in AdGuard per Windows v8.0 sono significative e speriamo che la nuova versione ti piaccia. Tuttavia, è probabile che qualcosa non andrà come previsto. La versione 8.0 è molto diversa: dopotutto è la prima nightly. Se trovi l'interfaccia v8.0 scomoda o hai riscontrato troppi problemi di funzionalità/stabilità, puoi ripristinare la versione precedente insieme alle sue impostazioni.

Per garantire che le impostazioni vengano mantenute durante l'intero processo, si consiglia di esportarle prima di effettuare l'aggiornamento alla versione 8.0, così, se necessario, sarà possibile reinstallare la versione 7 e importare nuovamente le impostazioni salvate.

In alternativa è disponibile anche il seguente metodo:

1. Dopo aver effettuato l'aggiornamento alla versione 8, aprire la cartella `C:\ProgramData\Adguard\Backups` e trovare un file ZIP con un nome simile a `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip`.
2. Copiare questo file zip in un punto diverso da `C:\ProgramData\Adguard`, ad esempio sul desktop (questo è importante perché verrà eliminato nel passaggio successivo).
3. Disinstallare la versione 8.0 con l'opzione **rimozione impostazioni** attivata.
4. Installare la build della versione 7 installata prima dell'aggiornamento.
5. Uscire dalla versione 7 dalla barra delle applicazioni per interrompere il filtraggio.
6. Estrarre il contenuto del file ZIP ottenuto nel primo passaggio e sostituire i seguenti file:
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` e `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. Avviare AdGuard.

Tutto pronto!
