---
title: Cum să configurați proxy-ul de ieșire
sidebar_position: 8
---

:::info

Acest articol se referă la AdGuard pentru Android, un blocant de reclame multifuncțional care vă protejează dispozitivul la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

Below is a list of the most well-known applications that can be configured to work as proxies in AdGuard.

:::note

Dacă aplicația dvs. nu este listată mai jos, verificați configurațiile proxy în setări sau contactați echipa de asistență.

:::

AdGuard permite direcționarea traficului dispozitivului prin intermediul unui server proxy. Pentru a accesa setările proxy, deschideți **Setări** și apoi mergeți la **Filtrare** → **Rețea** → **Proxy**.

## Exemple de configurare a proxy-ului

În acest articol oferim exemple despre cum să configurăm unele dintre cele mai populare proxy-uri pentru a funcționa cu AdGuard.

### Cum să utilizați AdGuard cu Tor

1. Deschideți AdGuard și mergeți la **Setări** → **Filtrare** → **Rețea** → **Proxy**. Download “Orbot: Proxy with Tor” directly from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) or by tapping **Integrate with Tor** and then **Install**.

1. Deschideți Orbot și apăsați butonul **Start** de pe ecranul principal al aplicației.

1. Întoarceți-vă la ecranul **Proxy** al AdGuard.

1. Apăsați butonul **Integrați cu Tor**.

1. Toate câmpurile obligatorii vor fi completate automat:

    | Câmp        | Valoare               |
    | ----------- | --------------------- |
    | Tip proxy   | *SOCKS4* sau *SOCKS5* |
    | Gazdă proxy | *127.0.0.1*           |
    | Port proxy  | *9050*                |

    Or you can tap **Proxy server** → **Add proxy server**, enter these values manually, and set Orbot as the default proxy.

1. Activați comutatorul principal pentru Proxy și protecția AdGuard pentru a direcționa traficul dispozitivului prin proxy.

    Now AdGuard will route all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable the outbound proxy settings in AdGuard.

### Cum să utilizați AdGuard cu PIA (Private Internet Access)

*Aici presupunem că sunteți deja client PIA VPN și l-ați instalat pe dispozitivul dvs.*

1. Deschideți AdGuard și mergeți la **Setări** → **Filtrare** → **Rețea** → **Proxy** → **Server proxy**.

1. Apăsați butonul **Adăugați server proxy** și introduceți următoarele date:

    | Câmp        | Valoare                              |
    | ----------- | ------------------------------------ |
    | Tip proxy   | *SOCKS5*                             |
    | Gazdă proxy | *proxy-nl.privateinternetaccess.com* |
    | Port proxy  | *1080*                               |

1. De asemenea, trebuie să completați câmpurile **Nume de utilizator/Parolă**. Pentru a face acest lucru, conectați-vă la [Panoul de control al clientului](https://www.privateinternetaccess.com/pages/client-sign-in) pe site-ul PIA. Tap the **Generate Password** button under the **Generate PPTP/L2TP/SOCKS Password** section. A username starting with “x” and a random password will be shown. Folositi-le pentru a completa câmpurile **Nume de utilizator proxy** și **Parolă proxy** în AdGuard.

1. Apăsați **Salvați și selectați**.

1. Activați comutatorul principal pentru Proxy și protecția AdGuard pentru a direcționa traficul dispozitivului prin proxy.

### Cum să utilizați AdGuard cu TorGuard

*Aici presupunem că sunteți deja client TorGuard și l-ați instalat pe dispozitivul dvs.*

1. Deschideți AdGuard și mergeți la **Setări** → **Filtrare** → **Rețea** → **Proxy** → **Server proxy**.

1. Apăsați butonul **Adăugați server proxy** și introduceți următoarele date:

    | Câmp        | Valoare                                      |
    | ----------- | -------------------------------------------- |
    | Tip proxy   | *SOCKS5*                                     |
    | Gazdă proxy | *proxy.torguard.org* sau *proxy.torguard.io* |
    | Port proxy  | *1080* sau *1085* sau *1090*                 |

1. Pentru câmpurile **Nume de utilizator** și **Parolă**, introduceți numele de utilizator proxy și parola proxy pe care le-ați ales la înscrierea la TorGuard.

1. Apăsați **Salvați și selectați**.

1. Activați comutatorul principal pentru Proxy și protecția AdGuard pentru a direcționa traficul dispozitivului prin proxy.

### Cum să utilizați AdGuard cu NordVPN

1. Log in to your NordVPN account.

1. Go to **Services** → **NordVPN** → **Manual setup** and set up your service credentials manually.

1. You will receive a verification code on the email address you use for NordVPN. Use it on your NordVPN account as requested, then tap *Apply* and *OK* to save the changes.

![Manual setup](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/outbound-proxy/nordvpn-manual-setup.png)

1. Open the AdGuard app, go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server** → **Add proxy server**.

1. Enter the following data:

    | Câmp        | Valoare                                                                                                                       |
    | ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
    | Tip proxy   | *SOCKS5*                                                                                                                      |
    | Gazdă proxy | Any server from [this list](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent) |
    | Port proxy  | *1080*                                                                                                                        |

1. Enter your NordVPN credentials in the **Username** and **Password** fields.

1. Apăsați **Salvați și selectați**.

1. Activați comutatorul principal pentru Proxy și protecția AdGuard pentru a direcționa traficul dispozitivului prin proxy.

### Cum să utilizați AdGuard cu Shadowsocks

*Aici presupunem că ați configurat deja un server Shadowsocks și un client pe dispozitivul dvs.*

:::note

Trebuie să ștergeți aplicația Shadowsocks din filtrare înainte de a configura procesul (**Gestionarea aplicațiilor** → **Shadowsocks** → **Direcționați traficul prin AdGuard**) pentru a evita buclele infinite și căderile.

:::

1. Deschideți AdGuard și mergeți la **Setări** → **Filtrare** → **Rețea** → **Proxy** → **Server proxy**.

1. Apăsați **Adăugați server proxy** și completați câmpurile:

    | Câmp        | Valoare     |
    | ----------- | ----------- |
    | Tip proxy   | *SOCKS5*    |
    | Gazdă proxy | *127.0.0.1* |
    | Port proxy  | *1080*      |

1. Apăsați **Salvați și selectați**.

1. Activați comutatorul principal pentru Proxy și protecția AdGuard pentru a direcționa traficul dispozitivului prin proxy.

### Cum să utilizați AdGuard cu Clash

*Aici presupunem că sunteți deja client Clash și l-ați instalat pe dispozitivul dvs.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch on. Aceasta va seta Clash în modul proxy.

1. Deschideți AdGuard și mergeți la **Gestionarea aplicațiilor**. Alegeți **Clash pentru Android** și dezactivați **Direcționați traficul prin AdGuard**. Aceasta va elimina buclele de trafic.

1. Apoi mergeți la **Setări** → **Filtrare** → **Rețea** → **Proxy** → **Server proxy**.

1. Apăsați **Adăugați server proxy** și completați câmpurile:

    | Câmp        | Valoare     |
    | ----------- | ----------- |
    | Tip proxy   | *SOCKS5*    |
    | Gazdă proxy | *127.0.0.1* |
    | Port proxy  | *7891*      |

## Limitări

However, at least one factor may prevent certain traffic from being routed through the outbound proxy, even after configuring the AdGuard proxy settings. That would be if the app itself isn't configured to send its traffic through AdGuard. To do it, you need to proceed to **App management**, choose the app, and turn on **Route traffic through AdGuard**.
