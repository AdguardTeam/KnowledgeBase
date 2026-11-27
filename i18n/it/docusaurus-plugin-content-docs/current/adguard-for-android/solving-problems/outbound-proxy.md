---
title: Come configurare il proxy in uscita
sidebar_position: 7
---

:::info

Questo articolo riguarda AdGuard per Android, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

Segue un elenco delle app più famose che possono essere configurate affinché operino da proxy in AdGuard.

:::note

Se la tua app non è elencata di seguito, ti preghiamo di controllarne le configurazioni del proxy nelle impostazioni, o di contattarne il team di supporto.

:::

AdGuard ti consente di instradare il traffico del tuo dispositivo attraverso un server proxy. Per accedere alle impostazioni proxy, apri **Impostazioni** e poi procedi a **Filtraggio** → **Rete** → **Proxy**.

## Esempi di configurazione del proxy

In questo articolo forniamo esempi di come configurare alcuni dei proxy più popolari per lavorare con AdGuard.

### Come utilizzare AdGuard con Tor

1. Apri AdGuard e vai su **Impostazioni** → **Filtraggio** → **Rete** → **Proxy**. Scarica “Orbot: Proxy with Tor” direttamente da [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) oppure toccando **Integra con Tor** e poi **Installa**.

1. Apri Orbot e premi il pulsante **Avvia** sulla schermata principale dell'applicazione.

1. Torna alla schermata **Proxy** di AdGuard.

1. Tocca il pulsante **Integra con Tor**.

1. Tutti i campi necessari saranno precompilati:

    | Campo         | Valore              |
    | ------------- | ------------------- |
    | Tipo di proxy | *SOCKS4* o *SOCKS5* |
    | Host proxy    | *127.0.0.1*         |
    | Porta proxy   | *9050*              |

    Altrimenti, puoi toccarre **Proxy** → **Aggiungi proxy**, inserire questi valori manualmente, e impostare Orbot come proxy predefinito.

1. Abilita l'interruttore principale del Proxy e la protezione di AdGuard per instradare il traffico del tuo dispositivo attraverso il proxy.

    Ora, AdGuard inoltrerà tutto il traffico attraverso Orbot. Se disabiliti Orbot, la connessione alla rete globale non sarà disponibile, finché non disabiliterai le impostazioni del proxy in uscita in AdGuard.

### Come usare AdGuard con PIA (Accesso Privato a Internet)

*Qui supponiamo che tu abbia già un client VPN PIA e lo abbia installato sul tuo dispositivo.*

1. Apri AdGuard e vai su **Impostazioni** → **Filtraggio** → **Rete** → **Proxy** → **Server proxy**.

1. Tocca il pulsante **Aggiungi server proxy** e inserisci i seguenti dati:

    | Campo         | Valore                               |
    | ------------- | ------------------------------------ |
    | Tipo di proxy | *SOCKS5*                             |
    | Host proxy    | *proxy-nl.privateinternetaccess.com* |
    | Porta proxy   | *1080*                               |

1. You also need to fill out the **Username/Password** fields. To do so, log in to the [Client Control Panel](https://www.privateinternetaccess.com/pages/client-sign-in) on the PIA website. Tap the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. A username starting with “x” and a random password will be shown. Use them to fill out the **Proxy username** and **Proxy password** fields in AdGuard.

1. Tocca **Salva e seleziona**.

1. Abilita l'interruttore principale del Proxy e la protezione di AdGuard per instradare il traffico del tuo dispositivo attraverso il proxy.

### How to use AdGuard with TorGuard

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. Apri AdGuard e vai su **Impostazioni** → **Filtraggio** → **Rete** → **Proxy** → **Server proxy**.

1. Tocca il pulsante **Aggiungi server proxy** e inserisci i seguenti dati:

    | Campo         | Valore                                      |
    | ------------- | ------------------------------------------- |
    | Tipo di proxy | *SOCKS5*                                    |
    | Host proxy    | *proxy.torguard.org* or *proxy.torguard.io* |
    | Porta proxy   | *1080* or *1085* or *1090*                  |

1. For **Username** and **Password** fields, enter your proxy username and proxy password you have chosen at TorGuard signup.

1. Tocca **Salva e seleziona**.

1. Abilita l'interruttore principale del Proxy e la protezione di AdGuard per instradare il traffico del tuo dispositivo attraverso il proxy.

### How to use AdGuard with NordVPN

1. Log in to your NordVPN account.

1. Go to **Services** → **NordVPN** → **Manual setup** and set up your service credentials manually.

1. You will receive a verification code on the email address you use for NordVPN. Use it on your NordVPN account as requested, then tap *Apply* and *OK* to save the changes.

![Manual setup](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/outbound-proxy/nordvpn-manual-setup.png)

1. Open the AdGuard app, go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server** → **Add proxy server**.

1. Enter the following data:

    | Campo         | Valore                                                                                                                        |
    | ------------- | ----------------------------------------------------------------------------------------------------------------------------- |
    | Tipo di proxy | *SOCKS5*                                                                                                                      |
    | Host proxy    | Any server from [this list](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent) |
    | Porta proxy   | *1080*                                                                                                                        |

1. Enter your NordVPN credentials in the **Username** and **Password** fields.

1. Tocca **Salva e seleziona**.

1. Abilita l'interruttore principale del Proxy e la protezione di AdGuard per instradare il traffico del tuo dispositivo attraverso il proxy.

### How to use AdGuard with Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::note

You should remove Shadowsocks app from filtering before setting up the process (**App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. Apri AdGuard e vai su **Impostazioni** → **Filtraggio** → **Rete** → **Proxy** → **Server proxy**.

1. Tap the **Add proxy server** and fill in the fields:

    | Campo         | Valore      |
    | ------------- | ----------- |
    | Tipo di proxy | *SOCKS5*    |
    | Host proxy    | *127.0.0.1* |
    | Porta proxy   | *1080*      |

1. Tocca **Salva e seleziona**.

1. Abilita l'interruttore principale del Proxy e la protezione di AdGuard per instradare il traffico del tuo dispositivo attraverso il proxy.

### How to use AdGuard with Clash

*Here we presume that you are already a Clash client and have it installed on your device.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch on. This will set Clash to proxy mode.

1. Open AdGuard and go to **App management**. Choose **Clash For Android** and disable **Route traffic through AdGuard**. This will eliminate traffic looping.

1. Then go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tocca **Aggiungi server proxy** e compila i campi:

    | Campo         | Valore      |
    | ------------- | ----------- |
    | Tipo di proxy | *SOCKS5*    |
    | Host proxy    | *127.0.0.1* |
    | Porta proxy   | *7891*      |

### How to use AdGuard with WG Tunnel

*The proxy mode was added in version 4.0. We presume that you already have WG Tunnel installed on your device and have added the WireGuard configuration.*

1. Open WG Tunnel and go to **Settings** (the cog wheel at the bottom) → **App Mode** → **Proxy (experimental)**. This will set WG Tunnel to proxy mode.

1. Open AdGuard and go to **App management**. Choose **WG Tunnel** and disable **Route traffic through AdGuard**. This will eliminate traffic looping.

1. Then go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tocca **Aggiungi server proxy** e compila i campi:

    | Campo         | Valore      |
    | ------------- | ----------- |
    | Tipo di proxy | *SOCKS5*    |
    | Host proxy    | *127.0.0.1* |
    | Porta proxy   | *25344*     |

1. Tocca **Salva e seleziona**.

1. Attivare l'interruttore proxy principale e la protezione AdGuard per instradare il traffico del dispositivo attraverso il proxy.

## Limitazioni

Tuttavia, almeno un fattore può impedire che il traffico sia instradato attraverso il proxy in uscita, anche dopo aver configurato le impostazioni del proxy di AdGuard. Questo accadrebbe se l'app stessa non fosse configurata per inviare il suo traffico attraverso AdGuard. Per farlo, devi procedere a **Gestione app**, scegliere l'app e attivare **Instrada il traffico attraverso AdGuard**.
