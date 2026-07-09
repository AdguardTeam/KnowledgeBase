---
title: Probleme de compatibilitate cu diferite versiuni macOS
sidebar_position: 4
---

:::info

Acest articol se referă la AdGuard pentru macOS, un blocant de reclame multifuncțional care protejează dispozitivul tău la nivel de sistem. Pentru a vedea cum funcționează, [descărcați aplicația AdGuard](https://agrd.io/download-kb-adblock)

:::

## Probleme existente în prezent

În fiecare an, Apple lansează o nouă versiune a macOS, introducând soluții inovatoare și adăugând caracteristici utile. Dar unele dintre ele, cum ar fi API-urile de extensie de rețea (Big Sur) sau Transmisia privată iCloud (Monterey), cauzează probleme pentru multe aplicații, AdGuard nefiind o excepție. În acest articol, trecem în revistă problemele cunoscute specifice fiecărei versiuni macOS și posibilele moduri de a le rezolva.

### Monterey 12: probleme existente în prezent

Aceste probleme nu au fost rezolvate de Apple încă sau au fost rezolvate doar parțial.

#### Compatibility with iCloud Private Relay

În prezent, AdGuard și Transmisia privată iCloud nu pot funcționa simultan. AdGuard nu are capacitatea de a bloca reclame deoarece Transmisia privată iCloud criptează traficul înainte ca AdGuard să poată filtra conexiunile de rețea. Când Transmisia privată iCloud este activă, orice filtrare (inclusiv filtrarea locală) devine imposibilă. Astfel, AdGuard nu poate filtra traficul sau efectua filtrarea DNS în Safari. That's why by default, AdGuard uses the "default route" which disables iCloud Private Relay.

Pentru o înțelegere mai profundă a acestei probleme, citiți [acest articol](../icloud-private-relay).

**Soluția recomandată**

Recomandăm utilizarea AdGuard împreună cu un serviciu VPN mai tradițional, cum ar fi [AdGuard VPN](https://adguard-vpn.com/).

**Soluție alternativă**

Puteți împiedica AdGuard să folosească "ruta implicită" dezactivând-o. Poate fi făcut prin Setări avansate → `network.extension.monterey.force.split.tunnel`. Rețineți că activarea acestui setare va cauza problemele descrise mai sus.

![Setări avansate *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

#### Compatibilitate cu Activitatea de Protecție a Mailului

Aplicația Mail de la Apple folosește acum un proxy pentru a ascunde adresa IP a unui utilizator atunci când descarcă imagini din e-mailuri. Cu toate acestea, nu va funcționa dacă există o conexiune VPN activă. Deoarece tratează AdGuard ca pe un VPN, nu va preîncărca imaginile automat.

Pentru o înțelegere mai profundă a acestei probleme, citiți [acest articol](../protect-mail-activity).

**Soluția recomandată**

În acest moment, recomandăm utilizarea unui serviciu VPN mai tradițional, cum ar fi [AdGuard VPN](https://adguard-vpn.com/), în locul caracteristicilor mai noi de intimitate Apple.

### Monterey 12, Big Sur 11.6 and later: currently existing problems

Aceste probleme nu au fost rezolvate de Apple încă sau au fost rezolvate doar parțial.

#### Compatibilitate cu Cisco AnyConnect

AdGuard nu va funcționa împreună cu Cisco AnyConnect în modul *Extensie de rețea*. Trebuie să comutați AdGuard în modul *Proxy automat*. Pentru a face acest lucru, urmați [această instrucțiune](#automatic-proxy).

#### Compatibilitate cu Flutter

This problem is solved in Flutter 2.2, released in June 2021. Dar pentru a o rezolva pentru aplicațiile dezvoltate în Flutter, trebuie să așteptați actualizările.

Dacă utilizați Flutter împreună cu AdGuard în modul "Extensie de rețea" (sau orice altă aplicație de tip "Proxy transparent") în Monterey sau Big Sur, veți întâlni probleme: proiectele nu se vor deschide și Flutter va fi efectiv rupt. Am raportat deja această eroare la Apple. Între timp, puteți utiliza aceste soluții temporare:

1. Utilizați AdGuard în [modul Proxy automat](#automatic-proxy).

1. Dezactivați SIP și schimbați AdGuard în modul Extensie Kernel așa cum este explicat [aici](#kernel-extension).

#### Aplicații VPN cu API vechi

Deși AdGuard este afisat ca un VPN în setările de sistem, nu ar trebui să cauzeze conflicte atunci când funcționează împreună cu alte aplicații bazate pe VPN. However, if a VPN-based app downloaded outside the App Store is used, there is a risk that it uses the old VPN API and needs to be excluded from filtering:

1. Deschideți meniul AdGuard.
1. Selectați *Preferințe...*.
1. Comutați la tab-ul *Rețea*.
1. Faceți clic pe butonul *Aplicații...*.
1. Găsiți aplicația pe care doriți să o excludeți și debifați caseta de bifat din partea sa.

![Aplicații filtrate](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## Probleme deja rezolvate

Aceste probleme au fost deja rezolvate de Apple, dar pot apărea în versiunile mai vechi ale macOS Big Sur.

### Compatibilitate cu Little Snitch 5

În acest moment, modul Extensie de rețea în AdGuard nu este compatibil cu [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html). When both are running, there's a risk to encounter issues with various apps' behavior, even if they aren't filtered by AdGuard. Această problemă este provocată direct de o eroare în Big Sur și deja am informat Apple despre aceasta. Aceasta ne lasă să credem că această problemă va fi rezolvată într-una dintre actualizările viitoare.

However, disabling connection monitoring in Little Snitch doesn't solve the issue, as this doesn't unload the Little Snitch extension from the system memory. Recomandăm să comutați la [**modul Proxy automat**](#automatic-proxy) atunci când rulați AdGuard alături de Little Snitch pe Big Sur, cel puțin până când Apple rezolvă eroarea.

### Compatibilitate cu proxy-uri locale

:::note

Acum AdGuard poate filtra proxy-uri locale (în cea mai mare parte) fără probleme. If you encounter any issues in OS versions 11.1+, or if you're using Big Sur 11.0, remove the local proxy from System settings and configure an upstream proxy in AdGuard by following the instruction below.

:::

To configure an upstream proxy in AdGuard for Mac in Big Sur:

1. Open AdGuard's settings *Preferences → Network → Outbound proxy*.
2. Choose HTTP, HTTPS, SOCKS4 or SOCKS5, depending on your proxy type.
3. Fill in the fields:
    - `host` is the IP address of your proxy server,
    - `port` is the desired port number to be used by the proxy server,
    - `user` and `password` are corresponding username and password of your proxy (if needed). Ignore either or both when not applicable.

Dacă aveți probleme, contactați-ne la suport@adguard.com.

#### Exemplu 1: Configurarea unui proxy Shadowsocks în amonte

Iată un exemplu despre cum să configurați un proxy în amonte pentru [Shadowsocks](https://shadowsocks.org).

În primul rând, aveți nevoie de un server de funcționare pentru proxy-ul dvs. Cel mai probabil, pentru a-l configura, veți folosi un fișier JSON precum acesta (`server` și `password` au fost alese aleatoriu aici):

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

Apoi, va trebui să instalați clientul Shadowsocks pe Mac-ul dvs. Asigurați-vă că selectați 'Mod Manual' sau 'Mod Automat' în setările sale! The configuration won't work if you select 'Global Mode' (or 'Auto Mode' in Big Sur versions prior to 11.1).

![Selectați Mod Manual sau Mod Automat în setări *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

Acum mergeți la *meniul AdGuard → Avansat → Setări Avansate...* și setați zona *Valoare* a setării `upstream.proxy` la `socks5://localhost:1080`. Observați că trebuie să folosiți valoarea "local_port" din fișierul JSON aici.

Deoarece Shadowsocks folosește SOCKS5, trebuie de asemenea să setați valoarea setării `upstream.proxy.socks5udp` în Setările Avansate AdGuard la `true` pentru a face AdGuard să ruteze traficul UDP către serverul proxy.

#### Exemplu 2: Configurarea unui proxy Surge în amonte

În Big Sur v11.1+, nu există conflicte cunoscute între AdGuard și proxy-ul Surge. If you are using an older version of Big Sur (prior to 11.1), check that **System Proxy** in the bottom right corner is disabled. În caz contrar, Surge nu va funcționa cu AdGuard. Pe de altă parte, **Modul Îmbunătățit** poate fi activat fără a provoca un conflict în orice versiune Big Sur.

![Configurarea unui proxy Surge în amonte *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png)

Now go to *Preferences → Network → Outbound proxy* and fill in the fields. For SOCKS5 proxy type:

- `host`: localhost
- `port`: 6153 For HTTP proxy type:
- `host`: localhost
- `port`: 6152

## Alternative la utilizarea unei extensii de rețea

Este imposibil să prevezi fiecare problemă posibilă care poate apărea în Big Sur sau Monterey, există nenumărate configurații hardware/software și setări. Dacă întâmpinați probleme de compatibilitate, vă rugăm să contactați echipa noastră de suport, dar nu ezitați să încercați mai întâi una dintre aceste soluții temporare.

### Utilizarea modului de filtrare "Proxy automat" {#automatic-proxy}

Dacă întâmpinați probleme în Big Sur sau Monterey care nu pot fi rezolvate prin niciuna dintre metodele de mai sus, puteți încerca să comutați AdGuard în modul *Proxy automat*.

1. Deschideți meniul AdGuard.
1. Selectați *Preferințe...*.
1. Comutați la tab-ul *Rețea*.
1. Faceți clic pe butonul *Selectați modul...*.
1. Selectați *Proxy automat*.

![Comutați AdGuard în modul Proxy automat](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

Acum AdGuard a adăugat automat un fișier **.pac** la setările de rețea ale Mac-ului dvs., astfel încât sistemul să considere AdGuard un proxy și să încerce să trimită tot traficul prin AdGuard.

:::note

Some apps may ignore this system setting and their traffic will not be filtered.

:::

### Activarea extensiei kernel în Big Sur și Monterey {#kernel-extension}

By default AdGuard uses Network Extension framework in Big Sur and Monterey as the old Kernel Extension framework is disabled there. This can cause some compatibility problems, but to enable Kernel Extension back, you need to disable System Integrity Protection (SIP) first. To disable SIP, follow this instruction:

1. Click the *Apple symbol* in the Menu bar.
1. Click *Restart…*
1. Hold down *Command-R* to reboot into Recovery Mode.
1. Click *Utilities*.
1. Select *Terminal*.
1. Type `csrutil disable`.
1. Press *Return* or *Enter* on your keyboard.
1. Click the *Apple symbol* in the Menu bar.
1. Click *Restart…*

Acum că SIP este dezactivat, iată cum activați extensia kernel:

![Activare extensie kernel](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1. Deschideți meniul AdGuard.
1. Selectați *Preferințe...*.
1. Comutați la tab-ul *Rețea*.
1. Faceți clic pe butonul *Selectați modul...*.
1. Select *Kernel Extension*.
1. Confirm that you want to switch to Kernel Extension.

:::atenție

Cu toate acestea, recomandăm utilizarea acestei metode doar dacă totul celălalt eșuează, deoarece acest lucru poate duce la probleme neașteptate.

:::
