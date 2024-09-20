---
title: Estensioni
sidebar_position: 3
---

:::info

Questo articolo riguarda AdGuard per Windows, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

AdGuard può ampliare significativamente la funzionalità del sito web, operando da [gestore degli script dell'utente](/general/userscripts). Gli Utenti di AdGuard possono aggiungere i propri script, nonché gestire quelli esistenti.

![Estensioni \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/userscripts.png)

**Rileva automaticamente gli userscript**

Con quest'opzione abilitata, AdGuard definirà automaticamente le richieste del browser agli userscript, suggerendone l'installazione. Altrimenti, le estensioni sono scaricabili e installabili manualmente.

Le seguenti estensioni sono installate con AdGuard:

![Userscript preinstallati \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/preinstalled-userscripts.png)

**AdGuard Assistant**

AdGuard Assistant è l'Assistente legacy che puoi utilizzare se il [nuovo Assistant](/adguard-for-windows/browser-assistant.md) non è disponibile per il tuo browser. Il nome di quest'estensione è abbastanza deliberato: effettivamente, assiste l'utente nella modifica delle impostazioni di base di AdGuard, direttamente sul browser, senza dover aprire l'app stessa. AdGuard Assistant funziona con tutti i browser compatibili con Microsoft Windows. Inoltre, l'icona di AdGuard Assistant non sarà mostrata sui siti web elencati come eccezioni dall'utente e su certe pagine web in cui esiste il rischio dell'errata visualizzazione dei contenuti.

**AdGuard Extra**

Questa è un'estensione personalizzata progettata per contrastare la tecnica di reinserimento degli annunci bloccati: la cosiddetta elusione dei blocchi di annunci o reiniezione degli annunci. Entrambi sono metodi anti blocco degli annunci avanzati, che continuano a crescere in popolarità tra gli inserzionisti.

AdGuard Extra is essentially a miniprogram that changes the way pages work in such a way that it becomes much more difficult for sites to use the above-mentioned methods to bypass blockers.

**AdGuard Popup Blocker**

Quest'estensione impedisce l'apertura delle finestre popup quando visualizzi le pagine web. Alcuni pop-up sono considerati utili: possono contenere impostazioni per l'amministrazione del sito o informazioni di riferimento aggiuntive mostrate facendo clic su un collegamento. Per questo, puoi disattivare il Blocco, se necessario. Quest'estensione non funziona neanche sui siti web aggiunti all'elenco di eccezioni di AdGuard. È disattivata di default, ma puoi attivarla nelle impostazioni dell'applicazione. You will find more detailed information about this extension in our Knowledge Base.

**Web of Trust**

Web of Trust ti consente di visualizzare la reputazione di ogni sito web, secondo le opinioni dei suoi utenti. Il sito è valutato secondo numerosi criteri specifici: fiducia, sicurezza, etc. Quest'estensione è disattivata di default, ma puoi attivarla nelle impostazioni dell'applicazione. Sei pregato di notare che AdGuard non è lo sviluppatore di quest'estensione.

### Rete

Il penultimo modulo è dedicato al filtraggio di rete e, qui, troverai le opzioni aggiuntive correlate alla rete. Two of them are enabled by default: _Enable traffic filtering_ and _Filter HTTPS_. Queste sono importanti precauzioni aggiuntive, per meglio filtrare il tuo spazio web. Gran parte dei siti, a oggi, utilizzano HTTPS, il che si applica anche agli annunci. From many sites, like youtube.com, facebook.com and x.com, it is impossible to remove ads without HTTPS filtering. So keep the _Filter HTTPS_ feature enabled unless you have a strong reason not to.

![Impostazioni di Rete \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

In questo modulo puoi spuntare la casella "Utilizza AdGuard come proxy HTTP", per utilizzare AdGuard come un proxy HTTP regolare, che filtrerà tutto il traffico che lo attraverserà. Inoltre, puoi abilitare la funzionalità _Filtra siti web con i certificati EV_. I certificati SSL a Validazione Estesa (EV) offrono una maggiore garanzia di sicurezza; i proprietari di tali siti web devono superare un duro processo di verifica dell'identità standardizzato e a livello globale, definito dalle linee guida EV. Per questo, alcuni utenti si fidano dei siti web con tali certificati e preferiscono non filtrarli.

Infine, esiste una sezione con le impostazioni proxy. Lì, puoi specificare quale server proxy dovrebbe essere utilizzato da AdGuard per aggiornare i filtri, ottenere le nuove versioni e così via.

### AdGuard VPN

L'ultima sezione è dedicata ad AdGuard VPN: uno strumento ideale che fornisce sicurezza e anonimato ogni volta che navighi su Internet. Puoi scaricarla cliccando il pulsante _Scarica_ o visita il sito web di AdGuard VPN, cliccando sul pulsante _Pagina Iniziale_.

Come funziona AdGuard VPN? Senza entrare nei dettagli tecnici, possiamo dire che la VPN crea un tunnel crittografato e sicuro tra il computer dell'utente o il dispositivo mobile e un server VPN remoto. Così, è preservata la confidenzialità dei dati, nonché l'anonimato dell'utente, poiché un osservatore di terze parti vede l'indirizzo IP del server VPN e non l'effettivo IP dell'utente.

**Cosa fa AdGuard VPN:**

- nasconde la tua posizione reale e ti aiuta a rimanere anonimo
- modifica il tuo indirizzo IP per proteggere i tuoi dati dal tracciamento
- crittografa il tuo traffico per renderlo illeggibile alle terze parti
- ti consente di configurare dove utilizzare la VPN e dove no (funzionalità di esclusione)

Per ottenere ulteriori informazioni su AdGuard VPN, approfondisci nella [Base di Conoscenze di AdGuard VPN](https://adguard-vpn.com/kb/).
