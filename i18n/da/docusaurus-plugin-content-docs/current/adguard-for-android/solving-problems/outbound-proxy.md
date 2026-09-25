---
title: Sådan opsættes en udgående proxy
sidebar_position: 7
---

:::info

Denne artikel omhandler AdGuard til Android, en multifunktionel adblocker, der beskytter enheden på systemniveau. For at se, hvordan den fungerer, [download AdGuard-appen](https://agrd.io/download-kb-adblock)

:::

Nedenfor findes en liste over de mest velkendte apps, som kan opsættes som fungerende proxyer i AdGuard.

:::note

Mangler den anvendte app på listen nedenfor, tjek da dens proxyopsætning i indstillingerne, eller kontakt dens supportteam.

:::

AdGuard muliggør rutning af enhedens trafik igennem en proxyserver. For at tilgå proxyindstillinger, åbn **Indstillinger** og fortsæt dernæst til **Filtrering** → **Netværk** → **Proxy**.

## Eksempler på proxyopsætninger

I denne artikel gives eksempler på, hvordan nogle af de mest populære proxyer opsættes til at fungere med AdGuard.

### Sådan bruges AdGuard med Tor

1. Åbn AdGuard, og gå til **Indstillinger** → **Filtrering** → **Netværk** → **Proxy**. Download "Orbot: Proxy with Tor" direkte fra [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) eller ved at trykke på **Integrér med Tor** og dernæst **Installér**.

1. Åbn Orbot, og tryk på knappen **Start** på appens hovedskærm.

1. Returnér til skærmen **Proxy** i AdGuard.

1. Tryk på knappen **Integrér med Tor**.

1. Alle obligatoriske felter vil være præudfyldt:

    | Felt      | Værdi                   |
    | --------- | ----------------------- |
    | Proxytype | *SOCKS4* eller *SOCKS5* |
    | Proxyvært | *127.0.0.1*             |
    | Proxyport | *9050*                  |

    Alternativt, tryk på **Proxyserver** → **Tilføj proxyserver**, angiv disse værdier manuelt og sæt Orbot til standardproxy.

1. Slå hovedproxy-kontakten samt AdGuard-beskyttelsen til for at rute enhedens trafik igennem proxyen.

    AdGuard ruter herefter al trafik igennem Orbot. Deaktiveres Orbot, bliver internetforbindelsen utilgængelig, indtil de udgående proxyindstillinger i AdGuard deaktiveres.

### Sådan bruges AdGuard med PIA (Private Internet Access)

*Det antages her, at brugeren allerede er en PIA VPN-klient, samt har den installeret på enheden.*

1. Åbn AdGuard og gå til **Indstillinger** → **Filtrering** → **Netværk** → **Proxy** → **Proxyserver**.

1. Tryk på knappen **Tilføj proxyserver** og angiv flg. data:

    | Felt      | Værdi                                |
    | --------- | ------------------------------------ |
    | Proxytype | *SOCKS5*                             |
    | Proxyvært | *proxy-nl.privateinternetaccess.com* |
    | Proxyport | *1080*                               |

1. Felterne **Brugernavn/Adgangskode** er obligatoriske. For at gøre dette, log ind på [Client Control Panel](https://www.privateinternetaccess.com/pages/client-sign-in) på PIA-webstedet. Tryk på knappen **Generér adgangskode** under afsnittet **Generere PPTP/L2TP/SOCKS Adgangskode**. Et brugernavn startende med "x" og en tilfældig adgangskode vil blive vist. Brug dem ved udfyldelsen af felterne **Proxy-brugernavn** og **Proxy-adgangskode** i AdGuard.

1. Tap **Save and select**.

1. Slå hovedproxy-kontakten samt AdGuard-beskyttelsen til for at rute enhedens trafik igennem proxyen.

### How to use AdGuard with TorGuard

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap the **Add proxy server** button and enter the following data:

    | Felt      | Værdi                                       |
    | --------- | ------------------------------------------- |
    | Proxytype | *SOCKS5*                                    |
    | Proxyvært | *proxy.torguard.org* or *proxy.torguard.io* |
    | Proxyport | *1080* or *1085* or *1090*                  |

1. For **Username** and **Password** fields, enter your proxy username and proxy password you have chosen at TorGuard signup.

1. Tap **Save and select**.

1. Slå hovedproxy-kontakten samt AdGuard-beskyttelsen til for at rute enhedens trafik igennem proxyen.

### How to use AdGuard with NordVPN

1. Log in to your NordVPN account.

1. Go to **Services** → **NordVPN** → **Manual setup** and set up your service credentials manually.

1. You will receive a verification code on the email address you use for NordVPN. Use it on your NordVPN account as requested, then tap *Apply* and *OK* to save the changes.

![Manual setup](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/outbound-proxy/nordvpn-manual-setup.png)

1. Open the AdGuard app, go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server** → **Add proxy server**.

1. Enter the following data:

    | Felt      | Værdi                                                                                                                         |
    | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
    | Proxytype | *SOCKS5*                                                                                                                      |
    | Proxyvært | Any server from [this list](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent) |
    | Proxyport | *1080*                                                                                                                        |

1. Enter your NordVPN credentials in the **Username** and **Password** fields.

1. Tap **Save and select**.

1. Slå hovedproxy-kontakten samt AdGuard-beskyttelsen til for at rute enhedens trafik igennem proxyen.

### How to use AdGuard with Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::note

You should remove Shadowsocks app from filtering before setting up the process (**App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap the **Add proxy server** and fill in the fields:

    | Felt      | Værdi       |
    | --------- | ----------- |
    | Proxytype | *SOCKS5*    |
    | Proxyvært | *127.0.0.1* |
    | Proxyport | *1080*      |

1. Tap **Save and select**.

1. Slå hovedproxy-kontakten samt AdGuard-beskyttelsen til for at rute enhedens trafik igennem proxyen.

### How to use AdGuard with Clash

*Here we presume that you are already a Clash client and have it installed on your device.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch on. This will set Clash to proxy mode.

1. Open AdGuard and go to **App management**. Choose **Clash For Android** and disable **Route traffic through AdGuard**. This will eliminate traffic looping.

1. Then go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap **Add proxy server** and fill in the fields:

    | Felt      | Værdi       |
    | --------- | ----------- |
    | Proxytype | *SOCKS5*    |
    | Proxyvært | *127.0.0.1* |
    | Proxyport | *7891*      |

### How to use AdGuard with WG Tunnel

*The proxy mode was added in version 4.0. We presume that you already have WG Tunnel installed on your device and have added the WireGuard configuration.*

1. Open WG Tunnel and go to **Settings** (the cog wheel at the bottom) → **App Mode** → **Proxy (experimental)**. This will set WG Tunnel to proxy mode.

1. Open AdGuard and go to **App management**. Choose **WG Tunnel** and disable **Route traffic through AdGuard**. This will eliminate traffic looping.

1. Then go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap **Add proxy server** and fill in the fields:

    | Felt      | Værdi       |
    | --------- | ----------- |
    | Proxytype | *SOCKS5*    |
    | Proxyvært | *127.0.0.1* |
    | Proxyport | *25344*     |

1. Tap **Save and select**.

1. Enable the main proxy switch and AdGuard protection to route your device’s traffic through the proxy.

## Begrænsninger

However, at least one factor may prevent certain traffic from being routed through the outbound proxy, even after configuring the AdGuard proxy settings. That would be if the app itself isn't configured to send its traffic through AdGuard. To do it, you need to proceed to **App management**, choose the app, and turn on **Route traffic through AdGuard**.
