---
title: Impostazioni di basso livello
sidebar_position: 6
---

:::info

Questo articolo riguarda AdGuard per iOS, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

![Impostazioni di basso livello \*mobile_border](https://cdn.adtidy.org/public/Adguard/Blog/ios_lowlevel.PNG)

Per aprire le _Impostazioni di basso livello_, vai in _Impostazioni_ → _Generale_ → (Attiva _Modalità avanzata_ se è disattivata) → _Impostazioni avanzate_ → _Impostazioni di basso livello_.

Per lo più, sarebbe meglio non toccare le impostazioni in questa sezione: utilizzale esclusivamente se sei sicuro di ciò che stai facendo o se il team di supporto te lo ha richiesto. Tuttavia, alcune impostazioni possono essere modificate senza alcun rischio.

### Blocca IPv6 {#blockipv6}

Per ogni richiesta DNS inviata per ottenere un indirizzo IPv6, la nostra app restituisce una risposta vuota (come se l'indirizzo IPv6 non esistesse). Ora, è presente un'opzione per non restituire gli indirizzi IPv6. A questo punto, la descrizione di questa funzionalità diventa troppo tecnica: configurare o disabilitare IPv6 è di dominio esclusivo per gli utenti avanzati. Presumibilmente, se sei uno di loro, sarà bello sapere che ora abbiamo questa funzione, altrimenti non è necessario approfondire.

### Server Bootstrap e Fallback {#bootstrap-fallback}

Il Fallback è un server DNS di backup. Se scegli un server DNS e gli succede qualcosa, un fallback è necessario per impostare il server DNS di backup, finché quello principale non risponde.

Con il Bootstrap, è un po' più complicato. Affinché AdGuard per iOS utilizzi un server DNS sicuro e personalizzato, la nostra app necessita di ottenerne l'indirizzo IP. Per questo, il DNS di sistema è utilizzato di default ma, talvolta, ciò è impossibile per vari motivi. In questi casi, il Bootstrap potrebbe essere utilizzato per ottenere l'indirizzo IP del server DNS sicuro selezionato. Ecco due esempi per illustrare quando potrebbe essere utile un server di Bootstrap personalizzato:

1. Quando un server DNS predefinito di sistema non restituisce l'indirizzo IP di un server DNS sicuro e non è possibile utilizzarne uno sicuro.
2. Quando la nostra app e una VPN di terze parti sono utilizzate simultaneamente ed è impossibile utilizzare il DNS di Sistema come Bootstrap.
