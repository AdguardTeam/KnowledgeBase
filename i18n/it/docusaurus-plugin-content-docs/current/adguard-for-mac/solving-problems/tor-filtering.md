---
title: Impostazione del filtraggio nel Tor Browser
sidebar_position: 10
---

:::info

Questo articolo riguarda AdGuard per Mac, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

Per impostazione predefinita, Tor Browser viene aggiunto all'elenco delle applicazioni filtrate di AdGuard. Tuttavia, per filtrarlo, AdGuard deve modificare le impostazioni di sicurezza di Tor. Questo farà sì che Tor si fidi del certificato CA di AdGuard.

Se decidi di filtrare Tor e lo selezioni in *Preferenze* → *Rete* → *Applicazioni*, AdGuard ti mostrerà questa finestra di dialogo:

![Finestra di dialogo AdGuard](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

Aggiornando le impostazioni di Tor, AdGuard imposterà quanto segue:

`security.enterprise_roots.enabled`: true

Questa impostazione farà sì che Tor consideri attendibili i certificati root. [Per saperne di più](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

Il Public Key Pinning è una misura di sicurezza che consente ai siti web di garantire che la connessione tra un sito web e l'utente sia autentica. Ciò comporta che il sito web pubblichi un elenco di chiavi pubbliche, o pin, di cui si fida. Con il livello di esecuzione impostato su 1, il blocco non viene applicato per le CA personalizzate. [Per saperne di più](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

Per applicare le modifiche, dovrai riavviare il Tor Browser.

Se modifichi manualmente queste impostazioni, il filtro Tor verrà interrotto.
