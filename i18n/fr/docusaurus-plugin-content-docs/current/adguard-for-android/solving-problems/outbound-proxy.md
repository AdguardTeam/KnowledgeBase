---
title: Comment configurer le proxy sortant
sidebar_position: 7
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

Vous trouverez ci-dessous une liste des applications les plus connues qui peuvent être configurées pour fonctionner comme proxys dans AdGuard.

:::note

Si votre app n'est pas répertoriée ci-dessous, veuillez vérifier ses configurations de proxy dans les paramètres ou contacter son équipe d'assistance.

:::

AdGuard permet d'acheminer le trafic de votre appareil via un proxy. Pour accéder aux paramètres du proxy, ouvrez **Paramètres** et procédez ensuite à **Filtrage** → **Réseau** → **Proxy**.

## Exemples de configuration du proxy

Dans cet article, nous donnons des exemples de la façon de configurer certains des proxies les plus populaires pour fonctionner avec AdGuard.

### Comment utiliser AdGuard avec Tor

1. Ouvrez AdGuard et accédez à **Paramètres** → **Filtrage** → **Réseau** → **Proxy**. Téléchargez "Orbot: Proxy with Tor" directement depuis [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) ou en appuyant sur **Intégrer avec Tor** puis sur **Installer**.

1. Ouvrez Orbot et appuyez sur le bouton **Démarrer** sur l'écran principal de l'application.

1. Revenez à l’écran **Proxy** d’AdGuard.

1. Appuyez sur le bouton **Intégrer avec Tor**.

1. Tous les champs requis seront préremplis :

    | Champ         | Valeur               |
    | ------------- | -------------------- |
    | Type de proxy | *SOCKS5* ou *SOCKS5* |
    | Host du proxy | *127.0.0.1*          |
    | Port du proxy | *9050*               |

    Soit vous pouvez appuyer sur **Serveur proxy** → **Ajouter un serveur proxy**, saisir ces valeurs manuellement et définir Orbot comme proxy par défaut.

1. Activez le commutateur Proxy principal et la protection AdGuard pour acheminer le trafic de votre appareil via le proxy.

    Maintenant, AdGuard fera passer tout le trafic par Orbot. Si vous désactivez Orbot, la connexion Internet ne sera pas disponible jusqu'à ce que vous désactiviez les paramètres de proxy sortants dans AdGuard.

### Comment utiliser AdGuard avec PIA (Private Internet Access)

*Ici, nous présumons que vous êtes déjà un client VPN PIA et que vous l'avez installé sur votre appareil.*

1. Ouvrez AdGuard et accédez à **Paramètres** → **Filtrage** → **Réseau** → **Proxy** → **Serveur proxy**.

1. Appuyez sur le bouton **Ajouter un serveur proxy** et saisissez les données suivantes :

    | Champ         | Valeur                               |
    | ------------- | ------------------------------------ |
    | Type de proxy | *SOCKS5*                             |
    | Host du proxy | *proxy-nl.privateinternetaccess.com* |
    | Port du proxy | *1080*                               |

1. Vous devez également remplir les champs **Nom d'utilisateur/Mot de passe**. Pour ce faire, connectez-vous au [Panneau de configuration client](https://www.privateinternetaccess.com/pages/client-sign-in) sur le site Web de PIA. Appuyez sur le bouton **Générer un mot de passe** sous la section **Générer un mot de passe PPTP/L2TP/SOCKS**. Un nom d'utilisateur commençant par "x" et un mot de passe aléatoire seront affichés. Utilisez-les pour remplir les champs **Nom d'utilisateur proxy** et **Mot de passe proxy** dans AdGuard.

1. Tapez **Enregistrer et sélectionner**.

1. Activez le commutateur Proxy principal et la protection AdGuard pour acheminer le trafic de votre appareil via le proxy.

### How to use AdGuard with TorGuard

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. Ouvrez AdGuard et accédez à **Paramètres** → **Filtrage** → **Réseau** → **Proxy** → **Serveur proxy**.

1. Appuyez sur le bouton **Ajouter un serveur proxy** et saisissez les données suivantes :

    | Champ         | Valeur                                      |
    | ------------- | ------------------------------------------- |
    | Type de proxy | *SOCKS5*                                    |
    | Host du proxy | *proxy.torguard.org* or *proxy.torguard.io* |
    | Port du proxy | *1080* or *1085* or *1090*                  |

1. For **Username** and **Password** fields, enter your proxy username and proxy password you have chosen at TorGuard signup.

1. Tap **Save and select**.

1. Activez le commutateur Proxy principal et la protection AdGuard pour acheminer le trafic de votre appareil via le proxy.

### How to use AdGuard with NordVPN

1. Log in to your NordVPN account.

1. Go to **Services** → **NordVPN** → **Manual setup** and set up your service credentials manually.

1. You will receive a verification code on the email address you use for NordVPN. Use it on your NordVPN account as requested, then tap *Apply* and *OK* to save the changes.

![Manual setup](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/outbound-proxy/nordvpn-manual-setup.png)

1. Open the AdGuard app, go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server** → **Add proxy server**.

1. Enter the following data:

    | Champ         | Valeur                                                                                                                        |
    | ------------- | ----------------------------------------------------------------------------------------------------------------------------- |
    | Type de proxy | *SOCKS5*                                                                                                                      |
    | Host du proxy | Any server from [this list](https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent) |
    | Port du proxy | *1080*                                                                                                                        |

1. Enter your NordVPN credentials in the **Username** and **Password** fields.

1. Tap **Save and select**.

1. Activez le commutateur Proxy principal et la protection AdGuard pour acheminer le trafic de votre appareil via le proxy.

### How to use AdGuard with Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::note

You should remove Shadowsocks app from filtering before setting up the process (**App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. Ouvrez AdGuard et accédez à **Paramètres** → **Filtrage** → **Réseau** → **Proxy** → **Serveur proxy**.

1. Tap the **Add proxy server** and fill in the fields:

    | Champ         | Valeur      |
    | ------------- | ----------- |
    | Type de proxy | *SOCKS5*    |
    | Host du proxy | *127.0.0.1* |
    | Port du proxy | *1080*      |

1. Tap **Save and select**.

1. Activez le commutateur Proxy principal et la protection AdGuard pour acheminer le trafic de votre appareil via le proxy.

### How to use AdGuard with Clash

*Here we presume that you are already a Clash client and have it installed on your device.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch on. This will set Clash to proxy mode.

1. Ouvrez AdGuard et accédez à **Gestion des applications**. Choose **Clash For Android** and disable **Route traffic through AdGuard**. This will eliminate traffic looping.

1. Then go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

1. Tap **Add proxy server** and fill in the fields:

    | Champ         | Valeur      |
    | ------------- | ----------- |
    | Type de proxy | *SOCKS5*    |
    | Host du proxy | *127.0.0.1* |
    | Port du proxy | *7891*      |

## Limitations

However, at least one factor may prevent certain traffic from being routed through the outbound proxy, even after configuring the AdGuard proxy settings. That would be if the app itself isn't configured to send its traffic through AdGuard. To do it, you need to proceed to **App management**, choose the app, and turn on **Route traffic through AdGuard**.
