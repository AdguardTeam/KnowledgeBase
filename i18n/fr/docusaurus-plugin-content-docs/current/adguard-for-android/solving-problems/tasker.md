---
title: Comment automatiser AdGuard pour Android
sidebar_position: 3
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

De nombreuses personnes choisissent Android parce qu'ils aiment personnaliser les paramètres et veulent contrôler leur appareil entièrement. Et il est tout à fait normal que certains utilisateurs d'AdGuard ne soient pas satisfaits de son comportement par défaut. Supposons que vous souhaitiez que la protection s'arrête lorsqu'une application en particulier est lancée, et qu'elle redémarre à la fermeture de celle-ci. C'est une tâche pour l'application Tasker.

## Interface AdGuard

Il existe de nombreuses applications d'automatisation, par exemple [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&noprocess), [AutomateIt](https://play.google.com/store/apps/details?id=AutomateIt.mainPackage&noprocess), etc. AdGuard fournit une interface qui permet à ces applications de configurer différentes règles d'automatisation.

![Automatisation *mobile_border](https://cdn.adtidy.org/blog/new/mmwmfautomation.jpg)

Grâce à cette interface, n'importe quelle application peut envoyer un message spécial (appelé "intention") contenant le nom de l'action et, si nécessaire, des données supplémentaires. AdGuard analysera cette intention et effectuera les actions nécessaires.

### Problèmes de sécurité

N'est-ce pas dangereux de laisser une application aléatoire gérer ce que fait AdGuard ? Oui, et c'est pourquoi un mot de passe est envoyé avec l'intention. Ce mot de passe sera généré automatiquement par AdGuard, mais vous pouvez, bien sûr, le changer à tout moment.

### Actions disponibles

Voici les actions qui, lorsqu'elles sont incluses dans l'intention, seront comprises par AdGuard :

`start` démarre la protection, aucune information supplémentaire n'est nécessaire ;

`stop` arrête la protection, aucune information supplémentaire n'est nécessaire ;

`pause` met la protection en pause. La différence entre cette option et `stop` est qu'une notification apparaîtra et redémarrer la protection lorsque vous appuierez dessus. Aucune information supplémentaire n'est nécessaire ;

`update` vérifie les mises à jour disponibles des filtres et des applications, aucune information supplémentaire n’est nécessaire ;

-----

`dns_filtering` active et désactive le filtrage DNS. Nécessite un indicateur supplémentaire :

`enable:true` ou `enable:false` active ou désactive le filtrage DNS; respectivement.

`fake_dns` permet de résoudre les requêtes DNS sur le serveur proxy spécifié. Nécessite un indicateur supplémentaire :

`enable:true` or `enable:false` enables or disables the *Use FakeDNS* setting, respectively.

::note

Lorsque le paramètre *Utiliser FakeDNS* est activé, la *Protection DNS* sera automatiquement désactivée. DNS requests won't be filtered locally.

:::

-----

`dns_server` switches between DNS servers, you need to include additional data:

 `server:adguard dns` switches to AdGuard DNS server;

::note

The full list of supported provider names can be found in our [known DNS providers list](https://adguard-dns.io/kb/general/dns-providers/).

:::

 `server:custom` switches to the previously added server named `custom`;

 `server:tls://dns.adguard.com` creates a new server and switches to it if the previously added servers and providers don't contain a server with the same address. Otherwise, it switches to the respective server. You can add server addresses as IP ( regular DNS), `sdns://…` (DNSCrypt or DNS-over-HTTPS), `https://…` (DNS-over-HTTPS) or `tls://...` (DNS-over-TLS);

 `server:1.1.1.1, tls://1.1.1.1` creates a server with comma separated addresses and switches to it. When adding a server via `server:1.1.1.1, tls://1.1.1.1`, the previously added server is removed.

 `server:system` resets DNS settings to default system DNS servers.

 -----

`proxy_state` enables/disables the outbound proxy. Nécessite un indicateur supplémentaire :

`enable:true` or `enable:false` activates or deactivates the outbound proxy, accordingly.

-----

`proxy_default` sets the proxy from the list of previously added ones as default or creates a new one if server has not been added before.

You need to specify additional data:

`server:[name]` where `[name]` is the name of the outbound proxy from the list.

Or you can configure server parameters manually:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

`proxy_remove` removes the proxy server from the list of previously added ones.

`server:[name]` where `[name]` is the name of the outbound proxy from the list.

Or you can configure remove parameters manually:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

- **Compulsory parameters**:

`[type]` — type de serveur proxy :

- HTTP
- SOCKS4
- SOCKS5
- HTTPS_CONNECT

`[host]` —domaine ou adresse IP du proxy sortant ;

`[port]` — port du proxy sortant (nombre entier de 1 à 65 535) ;

- **Paramètres facultatifs** :

 `[login and password]` — uniquement si le proxy l'exige. Ces données sont ignorées lors de la configuration de **SOCKS4** ;

 `[udp]` s'applique uniquement sur le type de serveur **SOCKS5** et inclut une option **UPD via SOCKS5**. Il est nécessaire de configurer la valeur **true ou false** ;

 `[trust]` s'applique uniquement pour le type de serveur **HTTPS_CONNECT** et inclut une option **Faire confiance à tous les certificats**. Il est nécessaire de configurer la valeur **true ou false**.

:::note Exemple

`paramètres par nom` : server:MyServer

`paramètres manuels` : server:host=1.2.3.4&port=80&type=SOCKS5&username=foo&password=bar&udp=true

:::

**N'oubliez pas d'inclure le mot de passe, nom de paquet et la classe. Vous devez le faire pour chaque intention.**

Extra : `password:*******`

Nom de paquet : `com.adguard.android`

Classe : `com.adguard.android.receiver.AutomationReceiver`

::note

Avant la version 4.0, la classe s'appelait `com.adguard.android.receivers.AutomationReceiver`, mais nous avons ensuite changé son nom pour `com.adguard.android.receiver.AutomationReceiver`. Si cette fonction est utilisée, n'oubliez pas d'adopter le nouveau nom.

:::

### Exécution sans notification

Pour effectuer une tâche sans afficher de toast, ajoutez un EXTRA supplémentaire `quiet: true`

### Exemple

![Automatisation *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/tasker/automation2.png)
