---
title: Problèmes de compatibilités connus avec les applications Android
sidebar_position: 14
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Applications VPN

Si vous utilisez AdGuard en mode de filtrage *VPN local*, vous ne pouvez pas exécuter d'autres applications VPN en même temps. Pour résoudre ce problème, nous vous proposons :

- Utilisez [AdGuard VPN](https://adguard-vpn.com/welcome.html), son *mode intégré* permet à deux applications de fonctionner simultanément
- Configurez votre application VPN pour qu'elle agisse comme un [proxy sortant](../solving-problems/outbound-proxy.md) et mettez en place un proxy sortant local en utilisant les paramètres de l'application tierce
- Passez en mode *proxy automatique*. Lorsque vous faites cela, AdGuard cessera d'utiliser le VPN local et reconfigurera iptables à la place
- Passez en mode *proxy manuel*. Pour ce faire, accédez à *Paramètres* → *Filtrage* → *Réseau* → *Mode de routage*

:::note Compatibilité

Le mode *proxy automatique* n'est accessible que sur les appareils rootés. Pour le *proxy manuel*, l'accès root est nécessaire sur les appareils exécutant Android 10 ou une version ultérieure.

:::

## DNS privé

La fonctionnalité DNS privé a été introduite dans Android Pie. Avant la version Q, le DNS privé ne perturbait pas la logique du filtrage DNS AdGuard et le transfert DNS via AdGuard fonctionnait normalement. Mais à partir de la version Q, la présence du DNS privés oblige les applications à rediriger le trafic via le résolveur du système plutôt que via AdGuard. Consultez le [blog des développeurs](https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html) Android pour plus d'informations.

- To solve the problem with Private DNS, use the `$network` rule

Certains fabricants d'appareils gardent les paramètres DNS privés masqués et définissent le mode 'Automatique' comme mode par défaut. Thus, disabling Private DNS is impossible but we can make the system think that the upstream is not valid by blocking it with a `$network` rule. For instance, if the system uses Google DNS by default, we can add rules `|8.8.4.4^$network` and `|8.8.8.8^$network` to block Google DNS.

## Unsupported browsers

### UC Browsers: UC Browser, UC Browser for x86, UC Mini, UC Browser HD

To be able to filter HTTPS traffic, AdGuard requires the user to add a certificate to the device's trusted user certificates. Unfortunately, UC browsers don't trust user certificates, so AdGuard cannot perform HTTPS filtering there.

- To solve this problem, move the [certificate to the system certificate store](../solving-problems/https-certificate-for-rooted.md)

:::note Compatibilité

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
