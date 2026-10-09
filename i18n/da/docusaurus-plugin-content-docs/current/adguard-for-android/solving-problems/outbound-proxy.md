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

1. Tryk på **Gem og vælg**.

1. Slå hovedproxy-kontakten samt AdGuard-beskyttelsen til for at rute enhedens trafik igennem proxyen.

### Sådan bruges AdGuard med TorGuard

*Her antages det, at en Clash-klient allerede er installeret på den relevante enhed.*

1. Åbn AdGuard og gå til **Indstillinger** → **Filtrering** → **Netværk** → **Proxy** → **Proxyserver**.

1. Tryk på knappen **Tilføj proxyserver** og angiv flg. data:

    | Felt      | Værdi                                          |
    | --------- | ---------------------------------------------- |
    | Proxytype | *SOCKS5*                                       |
    | Proxyvært | *proxy.torguard.org* eller *proxy.torguard.io* |
    | Proxyport | *1080* eller *1085* eller *1090*               |

1. I felterne **Username** og **Password** angives proxy-brugernavnet og -adgangskoden, som blev valgt ved TorGuard-tilmeldingen.

1. Tryk på **Gem og vælg**.

1. Slå hovedproxy-kontakten samt AdGuard-beskyttelsen til for at rute enhedens trafik igennem proxyen.

### Sådan bruges AdGuard med NordVPN

1. Log ind på NordVPN-kontoen.

1. Gå til **Tjenester** → **NordVPN** → **Manuel opsætning** og opsæt tjenestelegitimationsoplysningerne manuelt.

1. En bekræftelseskode sendes til den e-mailadresse, der bruges til NordVPN. Brug den på NordVPN-kontoen, når den udbedes, og tryk derefter på *Anvend* og *OK* for at gemme ændringerne.

![Manuel opsætning](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/outbound-proxy/nordvpn-manual-setup.png)

1. Åbn AdGuard-appen, gå til **Indstillinger** → **Filtrering** → **Netværk** → **Proxy** → **Proxyserver** → **Tilføj proxyserver**.

1. Angiv flg. data:

    | Felt      | Værdi                                                                                                                             |
    | --------- | --------------------------------------------------------------------------------------------------------------------------------- |
    | Proxytype | *SOCKS5*                                                                                                                          |
    | Proxyvært | Enhver server fra [denne liste](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent) |
    | Proxyport | *1080*                                                                                                                            |

1. Angiv NordVPN-legitimationsoplysninger i felterne **Brugernavn** og **Adgangskode**.

1. Tryk på **Gem og vælg**.

1. Slå hovedproxy-kontakten samt AdGuard-beskyttelsen til for at rute enhedens trafik igennem proxyen.

### Sådan bruges AdGuard med Shadowsocks

*Det antages, at der allerede er opsat en Shadowsocks-server og en klient på enheden.*

:::note

For at undgå uendelige løkker og udfald bør Shadowsocks-appen fjernes fra filtreringen inden opsætning af processen (**App-håndtering** → **Shadowsocks** → **Rut trafik igennem AdGuard**).

:::

1. Åbn AdGuard og gå til **Indstillinger** → **Filtrering** → **Netværk** → **Proxy** → **Proxyserver**.

1. Tryk på **Tilføj proxyserver** og udfyld felterne:

    | Felt      | Værdi       |
    | --------- | ----------- |
    | Proxytype | *SOCKS5*    |
    | Proxyvært | *127.0.0.1* |
    | Proxyport | *1080*      |

1. Tryk på **Gem og vælg**.

1. Slå hovedproxy-kontakten samt AdGuard-beskyttelsen til for at rute enhedens trafik igennem proxyen.

### Sådan bruges AdGuard med Clash

*Her antages det, at en Clash-klient allerede er installeret på den relevante enhed.*

1. Åbn Clash og gå til **Indstillinger** → **Netværk** → **Rut systemtrafik** og slå kontakten på Til. Dette skifter Clash til proxytilstand.

1. Åbn Adguard og gå til **App-håndtering**. Vælg **Clash til Android** og deaktivér **Rut trafik igennem AdGuard**. Dette eliminerer trafikløkker.

1. Gå dernæst til **Indstillinger** → **Filtrering** → **Netværk** → **Proxy** → **Proxyserver**.

1. Tryk på **Tilføj proxyserver** og udfyld felterne:

    | Felt      | Værdi       |
    | --------- | ----------- |
    | Proxytype | *SOCKS5*    |
    | Proxyvært | *127.0.0.1* |
    | Proxyport | *7891*      |

### Sådan bruges AdGuard med WG Tunnel

*Proxy-tilstanden blev tilføjet i version 4.0. Her antages det, at WG Tunnel allerede er installeret på enheden og at WireGuard-opsætningen er tilføjet.*

1. Åbn WG Tunnel og gå til **Indstillinger** (tandhjulet nederst) → **App-tilstand** → **Proxy (eksperimentel)**. Dette sætter WG Tunnel i proxytilstand.

1. Åbn Adguard og gå til **App-håndtering**. Vælg **WG Tunnel** og deaktivér **Rut trafik igennem AdGuard**. Dette eliminerer trafikløkker.

1. Gå dernæst til **Indstillinger** → **Filtrering** → **Netværk** → **Proxy** → **Proxyserver**.

1. Tryk på **Tilføj proxyserver** og udfyld felterne:

    | Felt      | Værdi       |
    | --------- | ----------- |
    | Proxytype | *SOCKS5*    |
    | Proxyvært | *127.0.0.1* |
    | Proxyport | *25344*     |

1. Tryk på **Gem og vælg**.

1. Slå proxy-hovedkontakten til og AdGuard-beskyttelsen til for at rute enhedens trafik igennem proxyen.

## Begrænsninger

Mindst én faktor kan dog forhindre bestemt trafik i at blive rutet igennem den udgående proxy, selv efter opsætning af AdGuard-proxyindstillingerne. Det ville være, hvis selve appen ikke var opsat til at sende sin trafik igennem AdGuard. For at opsætte dette, gå til **App-håndtering**, vælg appen og slå **Rut trafik igennem AdGuard** til.
