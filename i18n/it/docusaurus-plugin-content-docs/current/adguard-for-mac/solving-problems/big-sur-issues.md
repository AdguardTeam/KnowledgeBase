---
title: Problemi di compatibilità con diverse versioni di macOS
sidebar_position: 4
---

:::info

Questo articolo riguarda AdGuard per Mac, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app AdGuard](https://agrd.io/download-kb-adblock)

:::

## Problemi esistenti al momento

Ogni anno, Apple, rilascia una nuova versione di macOS, introducendo soluzioni innovative e aggiungendo utili funzionalità. Ma alcune di esse, come l'API delle Estensioni di Rete (Big Sur) o l'Inoltro Privato di iCloud (Monterey), causano dei problemi a molte applicazioni, AdGuard inclusa. In questo articolo, esaminiamo i problemi noti specifici per ogni versione di macOS e i possibili metodi per risolverli.

### Monterey 12: problemi esistenti al momento

Questi problemi non sono ancora stati risolti da Apple, o sono stati risolti parzialmente.

#### Compatibilità con relay privato iCloud

Correntemente, AdGuard e l'Inoltro Privato di iCloud non possono funzionare contemporaneamente. AdGuard non può bloccare gli annunci, poiché relay privato iCloud crittografa il traffico prima che AdGuard possa filtrare le connessioni di rete. Quando il relay privato iCloud è attivo, qualsiasi filtraggio (incluso quello locale), diventa impossibile. Dunque, AdGuard non può filtrare il traffico o eseguire il filtraggio DNS su Safari. Ecco perché, di default, AdGuard utilizza il "percorso predefinito", che disabilita il relay privato iCloud.

Per una comprensione approfondita di questo problema, leggi [questo articolo](../icloud-private-relay).

**Soluzione consigliata**

Consigliamo di utilizzare AdGuard con un servizio VPN più tradizionale, come [AdGuard VPN](https://adguard-vpn.com/).

**Soluzione alternativa**

Puoi impedire ad AdGuard di utilizzare il "percorso predefinito", disabilitando il "percorso predefinito". Ciò si può fare tramite Impostazioni Avanzate → `network.extension.monterey.force.split.tunnel`. Nota che, abilitare questa impostazione, causerà i problemi sopra descritti.

![Impostazioni Avanzate *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

#### Compatibilità con Protect Mail Activity

L'app Mail di Apple utilizza ora un proxy per nascondere l'indirizzo IP di un utente, scaricando le immagini dalle email. Tuttavia, non funzionerà se è attiva una connessione VPN. Poiché tratta AdGuard come una VPN, non precaricherà automaticamente le immagini.

Per una comprensione approfondita di questo problema, leggi [questo articolo](../protect-mail-activity).

**Soluzione consigliata**

A questo punto, consigliamo di utilizzare un servizio VPN più tradizionale, come [AdGuard VPN](https://adguard-vpn.com/), invece delle più recenti funzionalità per la privacy di Apple.

### Monterey 12, Big Sur 11.6 e successive: problemi esistenti al momento

Questi problemi non sono ancora stati risolti da Apple, o sono stati risolti parzialmente.

#### Compatibilità con Cisco AnyConnect

AdGuard non funzionerà con Cisco AnyConnect mentre è in modalità *Network Extension*. Devi cambiare AdGuard alla modalità *Proxy Automatico*. Per farlo, segui [queste istruzioni](#automatic-proxy).

#### Compatibilità con Flutter

Questo problema è stato risolto in Flutter 2.2, rilasciato a giugno 2021. Ma per risolverlo per le applicazioni sviluppate in Flutter, devi attendere gli aggiornamenti.

Se utilizzi Flutter insieme ad AdGuard in modalità "Network Extension" (o qualsiasi altra app di tipo "Transparent Proxy") in Monterey o Big Sur, incontrerai problemi: i progetti non si apriranno e Flutter verrà effettivamente interrotto. Abbiamo già segnalato questo bug ad Apple. Nel frattempo, puoi utilizzare queste soluzioni temporanee:

1. Utilizza AdGuard in modalità [Proxy Automatico](#automatic-proxy).

1. Disabilita SIP e cambia AdGuard in modalità Estensione Kernel, come spiegato [qui](#kernel-extension).

#### App VPN con API ereditaria

Sebbene AdGuard sia visualizzato come una VPN nelle impostazioni di sistema, non dovrebbe causare alcun conflitto, lavorando insieme ad altre app basate sulla VPN. However, if a VPN-based app downloaded outside the App Store is used, there is a risk that it uses the old VPN API and needs to be excluded from filtering:

1. Apri il menu di AdGuard.
1. Seleziona *Preferenze...*.
1. Passa alla scheda *Rete*.
1. Clicca sul pulsante *Applicazioni...*.
1. Trova l'app che desideri escludere e rimuovi la spunta dalla casella affianco a essa.

![Applicazioni filtrate](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## Problemi già risolti

Questi problemi sono stati oramai risolti da Apple, ma possono esser riscontrati nelle versioni precedenti di macOS Big Sur.

### Compatibilità con Little Snitch 5

Al momento, la modalità Estensione di Rete di AdGuard non è compatibile con [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html). When both are running, there's a risk to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. Questo problema è causato direttamente da un bug di Big Sur, e abbiamo già informato Apple a riguardo. Questo ci lascia credere che questo problema sarà risolto in uno dei prossimi aggiornamenti.

However, disabling connection monitoring in Little Snitch doesn't solve the issue, as this doesn't unload the Little Snitch extension from the system memory. Consigliamo di passare alla modalità di filtraggio [**Proxy Automatico**](#automatic-proxy), eseguendo AdGuard insieme a Little Snitch su Big Sur, almeno fino alla risoluzione del bug da parte di Apple.

### Compatibilità con i proxy locali

:::note

Ora, AdGuard può filtrare i proxy locali (per lo più) senza alcun problema. Se riscontri qualsiasi problema nelle versioni dell'OS 11.1 e superiori, o se utilizzi Big Sur 11.0, rimuovi il proxy locale dalle Impostazioni di sistema e configura un proxy a monte su AdGuard, seguendo le seguenti istruzioni.

:::

Per configurare un proxy upstream in AdGuard per Mac in Big Sur:

1. Apri le impostazioni di AdGuard *Preferenze → Rete → Proxy in uscita*.
2. Scegli HTTP, HTTPS, SOCKS4 o SOCKS5, a seconda del tuo tipo di proxy.
3. Compila i campi:
    - `host` è l'indirizzo IP del server del tuo proxy,
    - `port` è il numero di porta desiderato, che il server del proxy deve utilizzare,
    - `user` e `password` sono le credenziali corrispondenti del tuo proxy (se necessarie). Ignora l'uno o l'altra, quando non applicabile.

Se riscontri qualsiasi problema, ti preghiamo di contattare il nostro supporto tecnico a support@adguard.com.

#### Esempio 1: Configurare un proxy upstream di Shadowsocks

Ecco un esempio di come configurare un proxy a monte per [Shadowsocks](https://shadowsocks.org).

Prima di tutto, necessiti di un lato server funzionante per il tuo proxy. Molto probabilmente, per configurarlo, dovresti utilizzare un file JSON come questo (i valori `server` e `password`, qui, sono stati scelti casualmente):

```json
{
   "server":"111.222.333.444",
   "server_port":8388,
   "local_port":1080,
   "password":"barfoo!",
   "timeout":600,
   "method":"chacha20-ietf-poly1305"
}
```

:::tip

More information on how to get started can be found on the [Shadowsocks website](https://shadowsocks.org/guide/what-is-shadowsocks.html).

:::

Poi, dovresti installare il client di Shadowsocks sul tuo Mac. Assicurati di selezionae la 'Modalità Manuale' o la 'Modalità Automatica' nelle sue impostazioni. La configurazione non funzionerà se selezioni la 'Modalità Globale' (o la 'Modalità Automatica' nelle versioni precedenti alla 11.1 di Big Sur).

![Seleziona la Modalità Manuale o la Modalità Automatica nelle impostazioni *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

Ora, vai al *Menu di AdGuard → Avanzate → Impostazioni Avanzate...* e imposta l'area del *Valore* dell'impostazione `upstream.proxy` a `socks5://localhost:1080`. Nota che, qui, devi utilizzare il valore "local_port" dal file JSON.

Poiché Shadowsocks utilizza SOCKS5, devi anche impostare il valore dell'impostazione `upstream.proxy.socks5udp` nelle Impostazioni Avanzate di AdGuard a `true` per far indirizzare il traffico UDP al server del proxy, da AdGuard.

#### Esempio 2: Configurare un proxy upstream di Surge

Nelle versioni 11.1 e superiori di Big Sur, non esistono conflitti noti tra AdGuard e il proxy di Surge. Se stai utilizzando una versione precedente alla 11.1 di Big Sur, verifica che il **Proxy di sistema** in basso a destra sia disabilitato. Altrimenti, Surge non funzionerà con AdGuard. D'altra parte, la **Modalità Avanzata** può essere abilitata senza causare un conflitto, in alcuna versione di Big Sur.

![Configurare un proxy upstream di Surge *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png)

Ora vai a *Preferenze → Rete → Proxy in uscita* e compila i campi. Per il tipo di proxy SOCKS5:

- `host`: localhost
- `port`: 6153 Per il tipo di proxy HTTP:
- `host`: localhost
- `port`: 6152

## Alternative all'utilizzo dell'Estensione di Rete

Non è possibile prevedere ogni potenziale problema che potrebbe sorgere su Big Sur o Monterey; esistono innumerevoli configurazioni hardware/software e delle impostazioni. Se riscontri qualsiasi problema di compatibilità, ti preghiamo di contattare il nostro team di supporto; tuttavia, prima di farlo, sentiti libero di provare una di queste soluzioni.

### Utilizzare la modalità di filtraggio "Proxy automatico" {#automatic-proxy}

Se riscontri dei problemi su Big Sur o Monterey, non risolvibili con alcuno dei suddetti metodi, puoi provare a cambiare AdGuard in modalità *Proxy automatico*.

1. Apri il menu di AdGuard.
1. Seleziona *Preferenze...*.
1. Passa alla scheda *Rete*.
1. Clicca sul pulsante *Seleziona modalità...*.
1. Seleziona *Proxy Automatico*.

![Cambia AdGuard in modalità Proxy automatico](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

Ora, AdGuard ha aggiunto automaticamente un file **.pac** alle impostazioni di rete del tuo Mac, così che il sistema considererà AdGuard come un proxy e proverà a inviare tutto il traffico attraverso AdGuard.

:::note

Alcune app potrebbero ignorare quest'impostazione di sistema e, il loro traffico, non sarà filtrato.

:::

### Abilitare l'Estensione Kernel su Big Sur e Monterey {#kernel-extension}

Di default, AdGuard utilizza il quadro dell'Estensione di Rete su Big Sur e Monterey, poiché, lì, è disabilitato il vecchio quadro dell'Estensione del Kernel. Questo può causare dei problemi di compatibilità, ma per riabilitare l'Estensione del Kernel, devi prima disabilitare la Protezione dell'Integrità di Sistema (SIP). Per disabilitare SIP, segui queste istruzioni:

1. Clicca sul *logo di Apple* nella barra dei Menu.
1. Clicca *Riavvia…*
1. Tieni premuti *Command+R* per riavviare in Modalità Ripristino.
1. Clicca su *Utilità*.
1. Seleziona *Terminale*.
1. Digita `csrutil disable`.
1. Premi *Invio* sulla tua tastiera.
1. Clicca sul *logo di Apple* nella barra dei Menu.
1. Clicca *Riavvia…*

Ora che SIP è disabilitato, ecco come abilitare l'Estensione Kernel:

![Abilita l'Estensione del Kernel](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1. Apri il menu di AdGuard.
1. Seleziona *Preferenze...*.
1. Passa alla scheda *Rete*.
1. Clicca sul pulsante *Seleziona modalità...*.
1. Seleziona l'*Estensione del Kernel*.
1. Conferma che desideri passare all'Estensione del Kernel.

:::caution

Tuttavia, consigliamo di utilizzare questo metodo soltanto se tutto il resto non funziona, poiché potrebbe causare problemi imprevisti.

:::
