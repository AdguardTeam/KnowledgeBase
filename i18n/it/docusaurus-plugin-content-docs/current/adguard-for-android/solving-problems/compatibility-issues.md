---
title: Problemi di compatibilità noti con le app di Android
sidebar_position: 14
---

:::info

Questo articolo riguarda AdGuard per Android, un blocca-inserzioni multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

## App VPN

Se stai usando AdGuard in modalità di filtraggio *VPN Locale*, non puoi eseguire altre app VPN in contemporanea. Per risolvere questo problema, ti suggeriamo di:

- Utilizzare [AdGuard VPN](https://adguard-vpn.com/welcome.html): la sua *modalità integrata* consente a due app di operare simultaneamente
- Configurare la tua app VPN affinché agisca da [proxy in uscita](../solving-problems/outbound-proxy.md) e configurare un proxy in uscita locale utilizzando i parametri dall'app di terze parti
- Passare alla modalità *Proxy automatico*. Una volta fatto, AdGuard non utilizzerà più la VPN locale, riconfigurando invece le iptable
- Passare alla modalità *Proxy manuale*. Per farlo, vai in *Impostazioni* → *Filtraggio* → *Rete* → *Modalità d'instradamento*

:::note Compatibilità

La modalità *Proxy automatico* è accessibile soltanto sui dispositivi con root. Per il *Proxy manuale*, il root è necessario sui dispositivi con Android 10 o versioni successive.

:::

## DNS Privato

La funzionalità del DNS privato è stata introdotta in Android Pie. Prima della versione Q, il DNS Privato non interrompeva la logica di filtraggio DNS di AdGuard e l'inoltro DNS tramite AdGuard funzionava normalmente. Ma a partire dalla versione Q, la presenza di DNS Privato forza le app a reindirizzare il traffico tramite il risolutore di sistema, anziché AdGuard. Visualizza il [blog per sviluppatori](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) di Android per ulteriori dettagli.

- To solve the problem with Private DNS, use the `$network` rule

Some device manufacturers keep Private DNS settings hidden and set 'Automatic' mode as a default one. Thus, disabling Private DNS is impossible but we can make the system think that the upstream is not valid by blocking it with a `$network` rule. For instance, if the system uses Google DNS by default, we can add rules `|8.8.4.4^$network` and `|8.8.8.8^$network` to block Google DNS.

## Unsupported browsers

### UC Browsers: UC Browser, UC Browser for x86, UC Mini, UC Browser HD

To be able to filter HTTPS traffic, AdGuard requires the user to add a certificate to the device's trusted user certificates. Unfortunately, UC browsers don't trust user certificates, so AdGuard cannot perform HTTPS filtering there.

- To solve this problem, move the [certificate to the system certificate store](../solving-problems/https-certificate-for-rooted.md)

:::note Compatibilità

Requires root access.

:::

### Dolphin Browser: Dolphin Browser, Dolphin Browser Express

AdGuard cannot filter its traffic when operating in the *Manual proxy* mode because this browser ignores system proxy settings.

- Use the *Local VPN* filtering mode to solve this problem

### Opera mini: Opera mini, Opera mini with Yandex

Opera mini drives traffic through a compression proxy by default and AdGuard is not able to decompress and filter it at the same time.

- There is no solution at this moment

### Puffin Browser: Puffin Browser, Puffin Browser Pro

Puffin Browser drives traffic through a compression proxy by default and AdGuard is not able to decompress and filter it at the same time.

- There is no solution at this moment
