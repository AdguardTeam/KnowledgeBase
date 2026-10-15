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

1. Appuyez sur **Enregistrer et sélectionner**.

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

1. Appuyez sur **Enregistrer et sélectionner**.

1. Activez le commutateur Proxy principal et la protection AdGuard pour acheminer le trafic de votre appareil via le proxy.

### How to use AdGuard with Shadowsocks

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::note

You should remove Shadowsocks app from filtering before setting up the process (**App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. Ouvrez AdGuard et accédez à **Paramètres** → **Filtrage** → **Réseau** → **Proxy** → **Serveur proxy**.

1. Appuyez sur **Ajouter un serveur proxy** et remplissez les champs :

    | Champ         | Valeur      |
    | ------------- | ----------- |
    | Type de proxy | *SOCKS5*    |
    | Host du proxy | *127.0.0.1* |
    | Port du proxy | *1080*      |

1. Appuyez sur **Enregistrer et sélectionner**.

1. Activez le commutateur Proxy principal et la protection AdGuard pour acheminer le trafic de votre appareil via le proxy.

### Comment utiliser AdGuard avec Clash

*Ici, nous présumons que vous êtes déjà un client Clash et que vous l'avez installé sur votre appareil.*

1. Ouvrez Clash et accédez à **Paramètres** → **Réseau** → **Acheminer le trafic système**, puis activez l’interrupteur. Ceci configurera Clash en mode proxy.

1. Ouvrez AdGuard et accédez à **Gestion des applications**. Choisissez **Clash pour Android** et désactivez **Acheminer le trafic via AdGuard**. Cela éliminera les boucles de trafic.

1. Accédez ensuite à **Paramètres** → **Filtrage** → **Réseau** → **Proxy** → **Serveur proxy**.

1. Appuyez sur **Ajouter un serveur proxy** et remplissez les champs :

    | Champ         | Valeur      |
    | ------------- | ----------- |
    | Type de proxy | *SOCKS5*    |
    | Host du proxy | *127.0.0.1* |
    | Port du proxy | *7891*      |

### Comment utiliser AdGuard avec WG Tunnel

*Le mode proxy a été ajouté dans la version 4.0. Nous supposons que vous avez déjà un tunnel WG installé sur votre appareil et avez ajouté la configuration WireGuard.*

1. Ouvrez le tunnel WG et accédez à **Paramètres** (la roue dentée en bas) → **Mode de l’application** → **Proxy (expérimental)**. Ceci configurera WG tunnel en mode proxy.

1. Ouvrez AdGuard et accédez à **Gestion des applications**. Choisissez **WG Tunnel** et désactivez **Acheminer le trafic via AdGuard**. Cela éliminera les boucles de trafic.

1. Accédez ensuite à **Paramètres** → **Filtrage** → **Réseau** → **Proxy** → **Serveur proxy**.

1. Appuyez sur **Ajouter un serveur proxy** et remplissez les champs :

    | Champ         | Valeur      |
    | ------------- | ----------- |
    | Type de proxy | *SOCKS5*    |
    | Host du proxy | *127.0.0.1* |
    | Port du proxy | *25344*     |

1. Appuyez sur **Enregistrer et sélectionner**.

1. Activez le commutateur proxy principal et la protection AdGuard pour acheminer le trafic de votre appareil via le proxy.

## Limitations

Cependant, au moins un facteur peut empêcher certains flux de trafic d'être acheminés via le proxy sortant, même après avoir configuré les paramètres du proxy AdGuard. Ce serait le cas si l'application elle-même n'était pas configurée pour acheminer son trafic via AdGuard. Pour ce faire, rendez-vous dans la section **Gestion des applications**, sélectionnez l'application souhaitée, puis activez l'option **Acheminer le trafic via AdGuard**.
