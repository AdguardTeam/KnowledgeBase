---
title: Guide sur les paramètres de bas niveau
sidebar_position: 5
---

:::info

Cet article concerne AdGuard pour Android, un bloqueur de publicité multifonctionnel qui protège votre appareil au niveau système. Pour voir comment ça fonctionne, [téléchargez l'application AdGuard](https://agrd.io/download-kb-adblock)

:::

## Comment accéder aux paramètres de bas niveau

:::caution

La modification des paramètres de bas niveau peut entraîner des problèmes de performance d'AdGuard, interrompre votre connexion Internet ou compromettre votre sécurité et votre confidentialité. N'utilisez les fonctions de bas niveau que si vous êtes un utilisateur expérimenté et si vous savez ce que vous faites, soit si notre équipe d'assistance vous a demandé de le faire.

:::

Pour accéder aux _Paramètres de bas niveau_, ouvrez l'application AdGuard et appuyez sur l'icône d'engrenage dans le coin inférieur droit de l'écran. Then select _General → Advanced → Low-level settings_.

## Paramètres de bas niveau

Pour AdGuard v4.x pour Android, nous avons complètement repensé les paramètres de bas niveau. Nous avons retravaillé la liste des paramètres et les avons organisés en groupes thématiques avec des descriptions améliorées. Nous avons également ajouté une validation de l'input et d'autres dispositifs de sécurité.

### Protection DNS

#### Repli en amont

Ici, vous pouvez spécifier le ou les résolveurs DNS de traitement de secours à utiliser lorsque le serveur configuré n'est pas disponible. Options disponibles :

- _DNS automatique_: Sélectionnez cette option si vous souhaitez utiliser le DNS système ou le DNS AdGuard.
- _None_: Select this option if you do not want to have any fallback.
- _Custom DNS_: Select this option and enter plain DNS server IPv4 or IPv6 addresses, one per line. Ces adresses seront utilisées en amont.

#### Domaines de secours

Ici, vous pouvez lister les domaines qui seront redirigés vers les serveurs de secours en amont, s'ils sont disponibles. Vous pouvez saisir plusieurs domaines, un par ligne. Vous pouvez utiliser des caractères génériques limités.

#### Détecter les domaines de recherche

Si ce paramètre est activé, AdGuard détectera les domaines de recherche DNS et les redirigera automatiquement vers les traitements de secours en amont, si disponibles.

#### Bootstrap en amont

Bootstrap DNS pour les DNS chiffrés en amont, tels que les serveurs DoH, DoT et DoQ. Options disponibles :

- _DNS automatique_: Sélectionnez cette option si vous souhaitez utiliser le DNS système ou le DNS AdGuard. Cette option est sélectionnée par défaut.
- _Custom DNS_: Select this option and enter plain DNS server IPv4 or IPv6 addresses, one per line. Ces adresses seront utilisées comme adresses d'amorçage en amont.

#### Mode de blocage pour les règles de type adblock

Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for example, `||example.org^`). Options disponibles :

- _REFUSED_: Respond with REFUSED
- _NXDOMAIN_: Respond with NXDOMAIN
- _Custom IP address_: Select this option to respond with a custom IP address. Vous devrez entrer une adresse IPv4 pour les requêtes A bloquées et une adresse IPv6 pour les requêtes AAAA bloquées.

#### Mode de blocage pour les règles d’hôtes

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax
(for example, `<ip> <domain> 0.0.0.0 example.com`).

- _REFUSED_: Respond with REFUSED
- _NXDOMAIN_: Respond with NXDOMAIN
- _Custom IP address_: Select this option to respond with a custom IP address. Vous devrez entrer une adresse IPv4 pour les requêtes A bloquées et une adresse IPv6 pour les requêtes AAAA bloquées.

#### Délai d'attente pour les requêtes DNS

Ici, vous pouvez spécifier le délai dépassé, en millisecondes, qu'AdGuard attendra pour chaque requête DNS avant de la rediriger vers un résolveur DNS de traitement de secours. Si vous ne remplissez pas ce champ ou si vous saisissez une valeur invalide, la valeur de 5000 ms sera utilisée.
Si vous avez plusieurs amonts, le DNS de secours ne sera utilisé qu'après l'expiration des délais d'expiration de chaque flux en amont.

#### Réponse TTL bloquée

Ici, vous pouvez définir la durée de vie (TTL) de l'enregistrement pour les domaines bloqués. La valeur par défaut est de 3600 secondes.

#### Taille du cache DNS

Ici, vous pouvez spécifier le nombre maximum de réponses mises en cache. La valeur par défaut est de 1000.

#### Blocage ECH

Si ce paramètre est activé, AdGuard bloquera TLS Encrypted Hello (ECH) dans les réponses DNS.

#### Essayer HTTP/3 pour les amonts DNS-over-HTTPS

If this setting is enabled, AdGuard will use HTTP/3 to speed up DNS query resolution for DNS-over-HTTPS upstreams. Otherwise, AdGuard will revert to its default behavior and use HTTP/2 to send all DNS requests for DNS-over-HTTPS.

#### SERVFAIL failure response

If this setting is enabled, AdGuard will send a SERVFAIL response to the client if all upstreams, including the fallback ones, fail to reply. If this setting is disabled, no response will be sent to the client in such a case.

#### Use fallback for all domains

If this setting is enabled, AdGuard will use fallback upstreams for all domains, including non-fallback ones. Otherwise, fallback upstreams will only be used for fallback domains and search domains if the corresponding option is enabled.

#### Validate DNS upstreams

If this setting is enabled, AdGuard will test DNS upstreams before adding or updating custom DNS servers.

#### Filter secure DNS

If this setting is enabled, AdGuard will filter encrypted DNS requests in addition to plain DNS requests. Encrypted DNS traffic mostly comes from Chrome and other browsers that have a secure DNS setting.

This setting has two modes:

- **Filter on the fly**. In this mode, AdGuard will filter DNS-over-HTTPS traffic without redirecting it to the local DNS proxy. It will use the DNS server specified in the browser settings.

- **Redirect to DNS proxy**. In this mode, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy for filtering. It will use the DNS server selected in the DNS settings of the AdGuard app.

### Filtering

#### Capture HAR

If this setting is enabled, AdGuard will log all filtered HTTP requests in HAR 1.2 format to the “har” subdirectory in the app cache directory. These files can be analyzed with the Fiddler tool.

This setting may slow down your device. Use it for debugging purposes only.

### Filtrage HTTPS

#### Encrypted Client Hello

If this setting is enabled, AdGuard will encrypt ClientHellos, if necessary. This feature requires HTTPS filtering to be enabled. This feature uses a local DNS proxy to look for the ECH configuration for the domain. If it is found, the ClientHello packet will be encrypted. Make sure to use an encrypted DNS server with this feature.

**About ClientHellos and ECH**: Every encrypted Internet connection has an unencrypted part. This is the very first packet that contains the name of the server you are connecting to. Encrypted Client Hello technology is designed to solve this problem by encrypting this packet.

#### OCSP checking

If this setting is enabled, AdGuard will automatically check the revocation status of SSL certificates before connecting to a website. This feature requires HTTPS filtering to be enabled.

If the check is completed within the required timeout, AdGuard will  allow the connection if the certificate is valid or immediately block the connection if the certificate is revoked.

If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. Si le certificat est révoqué, les connexions actuelles et futures au domaine seront bloquées.

#### Filtrer HTTP/3

If this setting is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types. This feature requires HTTPS filtering to be enabled.

**About HTTP/3**: This is the latest version of the HTTP protocol, based on QUIC.

### Outbound proxy

#### Show the Filter DNS requests setting

When this setting is enabled, the _Filter DNS requests_ switch is displayed in the _Add proxy server_ dialog. To access the dialog, open **Settings**, then go to **Filtering** → **Network** → **Proxy** → **Proxy server**, and click _+ Add proxy server_. Turning on that switch enables filtering of DNS requests passing through the specified outbound proxy.

### Protection

#### Port ranges

This setting allows you to specify the port ranges that should be filtered. Enter port ranges, one range per line. Use `..` to specify the range. For example, `80..5221`.

#### Log removed HTML events

If this setting is enabled, AdGuard will write information about blocked HTML elements to _Recent activity_. To access the logs, go to go to **Statistics** → **Recent activity**.

#### Scriptlet debugging

If this setting is enabled, the app will display debugging information in the browser console. In this mode, debugging in scriptlets is activated, and the browser logs the events that occur when applying scriptlet rules are applied.

#### Excluded apps

This setting allows you to list the packages and UIDs to exclude from AdGuard protection. Enter package names or UIDs, one per line. You can use `//` for comments.

#### QUIC bypass packages

Here you can specify package names for which AdGuard should bypass QUIC traffic. Enter package names, one per line. You can use `//` for comments.

#### Reconfigure Automatic proxy when network changes

If this setting is enabled, the AdGuard protection will restart to reconfigure the automatic proxy parameters when your device connects to another network. This setting only applies when _Routing mode_ is set to _Automatic proxy_.

#### IPv6 filtering

If this setting is enabled, AdGuard will filter IPv6 networks if an IPv6 network interface is available.

#### IPv4 ranges excluded from filtering

Here you can list the IPv4 ranges to exclude from filtering. Enter one IP range per line. You can use `//` for comments.

#### IPv6 ranges excluded from filtering

Here you can list the IPv6 ranges to exclude from filtering. Enter one IP range per line. You can use `//` for comments.

#### TCP keepalive for outgoing sockets

If this setting is enabled, AdGuard will send a keepalive probe after the specified time interval to ensure that the TCP connection is still alive. After a system-defined number of unsuccessful attempts to get a response from the server, the system will automatically close the TCP connection.

This setting allows you to specify:

- **Idle time**, in seconds, before sending TCP keepalive probes to outgoing sockets. The default value is 0. If you are having problems with NAT, set this to 20.
- **Time between keepalive probes** for an unresponsive peer. The default value is 0 seconds.

### Local VPN settings

#### Recovery delay for revoked VPN

Here you can set the delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### Reschedule delay for revoked VPN recovery

Here you can set the delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### MTU

Here you can set the maximum transmission unit (MTU) of the VPN interface. This is the maximum size of the data packet used in your local VPN. The recommended range is 1500-1900 bytes.

#### Restore VPN automatically

If this setting is enabled, AdGuard’s local VPN will be automatically re-enabled after being turned off due to network absence, tethering, or low-power mode.

#### Packet capture (PCAP)

This setting enables logging of TUN interfaces. When enabled, AdGuard creates a file `timestamp.pcap`, such as  1682599851461.pcap, in the app cache directory. This file lists all network packets transmitted through the VPN and can be analyzed using the Wireshark tool.

#### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when the device is on Wi-Fi.

#### IPv4 address

Here you can specify the IP address that will be used to create a TUN interface. The default value is `172.18.11.218`.

#### Forcibly route LAN IPv4

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the _Route all LAN IPv4 connections_ option is enabled.

#### Route all LAN IPv4 connections

If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if _Forcibly route LAN IPv4_ is disabled.

#### IPv6 address

Here you can enter the IP address that will be used to create a TUN interface. The default value is `2001:db8:ad:0:ff::`.

### Divers

#### Show Developer tools on the main screen

If this setting is enabled, AdGuard will display the **Developer tools** icon in the upper right corner of the app’s home screen.

**Developer tools** is a specialized section available in AdGuard for Android v4.3 and later, designed for quick navigation and switching between features. It allows you to quickly enable or disable custom filters, access logs, enable various logs, and more.

#### Détection de Samsung Pay

Si ce paramètre est activé, la protection AdGuard sera mise en pause lorsque vous ouvrirez l'application Samsung Pay. Les utilisateurs coréens nécessitent cette fonctionnalité car ils rencontrent [des problèmes avec Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) lorsque AdGuard est activé.
