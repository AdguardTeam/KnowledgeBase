---
title: Low-level settings guide
sidebar_position: 6
---

:::info

Questo articolo riguarda AdGuard per Android, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, [scarica l'app di AdGuard](https://agrd.io/download-kb-adblock)

:::

## How to reach Low-level settings

:::attenzione

Changing *Low-level settings* can cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. Questa sezione dovrebbe essere aperta soltanto se sai cosa stai facendo, o se ti è stato richiesto di farlo dal nostro team di supporto.

:::

To go to *Low-level settings*, open the AdGuard app and tap the gear icon in the lower right corner of the screen. Then choose *General → Advanced → Low-level settings*.

## Impostazioni di basso livello

For AdGuard v4.0 for Android we've completely redesigned the low-level settings: divided them into thematic blocks, made them clearer, added validation of entered values and other safety valves, got rid of some settings, and added others.

### Protezione DNS

#### Fallback upstreams

Here you can specify the fallback DNS resolver(s) to be used if the configured server is unavailable. There are three options: *Automatic DNS*, *None*, and *Custom DNS*. If no fallback server is specified, the *Automatic DNS* — the system DNS or AdGuard DNS — will be used. *None* means no fallback at all. Selecting *Custom DNS* allows you to list IPv4 and IPv6 server addresses to use as upstreams.

#### Fallback domains

Here you can list domains that will be forwarded directly to fallback upstreams if they exist.

#### Detect search domains

If this setting is enabled, AdGuard will detect search domains and automatically forward them to fallback upstreams.

#### Bootstrap upstreams

Bootstrap DNS for DoH, DoT, and DoQ servers. The *Automatic DNS* — the system DNS or AdGuard DNS — is used by default. By selecting *Custom DNS*, you can list IPv4 and IPv6 server addresses to use as bootstrap upstreams.

#### Blocking mode for adblock-style rules

Here you can specify the response type for domains blocked by DNS rules based on adblock rule syntax (for instance, `||example.org^`).

- Respond with REFUSED
- Respond with NXDOMAIN
- Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here)

#### Blocking mode for hosts rules

Here you can specify the response type for domains blocked by DNS rules based on hosts rule syntax (for instance, `<ip> <domain> 0.0.0.0 example.com`).

- Respond with REFUSED
- Respond with NXDOMAIN
- Respond with Custom IP address (IPv4 and IPv6 addresses can be specified here)

#### DNS request timeout

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

#### Risposta TTL bloccata

Qui puoi specificare il valore TTL (tempo d'attività) che sarà restituito in risposta a una richiesta bloccata.

#### DNS cache size

Here you can specify the maximum number of cached responses. Default value is 1000.

#### ECH blocking

If enabled, AdGuard strips Encrypted Client Hello parameters from DNS responses.

#### Ignore unavailable outbound proxy

If this setting is enabled, AdGuard will send DNS requests directly when the outbound proxy is unavailable.

#### Try HTTP/3 for DNS-over-HTTPS upstreams

If this setting is enabled, AdGuard will use HTTP/3 to speed up DNS query resolution for DoH upstreams. Otherwise, AdGuard will revert to its default behavior and use HTTP/2 to send all DNS requests for DNS-over-HTTPS.

#### SERVFAIL failure response

If this setting is enabled and all upstreams, including fallback ones, fail to respond, AdGuard will send a SERVFAIL response to the client.

#### Use fallback for non-fallback domains

If this setting is enabled, AdGuard will use fallback upstreams for all domains. Otherwise, fallback upstreams will only be used for fallback domains and search domains if the corresponding option is enabled.

#### Validate DNS upstreams

If this setting is enabled, AdGuard will test DNS upstreams before adding or updating custom DNS servers.

#### Filter secure DNS

If this setting is on, AdGuard will apply all enabled DNS filters and DNS user rules to encrypted DNS-over-HTTPS (DoH) traffic and not only to plain DNS. DoH traffic mostly comes from Chrome and other browsers that have a *Secure DNS* (or similar) setting. You can use *Filter secure DNS* in two different modes:

- **Filter on the fly**. In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic but doesn’t redirect it to the local DNS proxy. If a DNS server is specified in the browser’s settings, this server will handle the DoH traffic for this browser

- **Redirect to DNS proxy**. In this mode, AdGuard applies all enabled DNS filters and DNS user rules to DoH traffic by redirecting it to the local DNS proxy. The DNS server specified in the AdGuard’s DNS settings will handle all DoH traffic

### Filtering

#### Capture HAR

If this setting is enabled, AdGuard will capture HAR files. It will create a directory named “har” inside the app cache directory and add there information about all filtered HTTP requests in HAR 1.2 format that can be analyzed with the Fiddler program.

Use it only for debugging purposes!

### Filtraggio HTTPS

#### Encrypted Client Hello

Every encrypted Internet connection has an unencrypted part. This is the very first packet which contains the name of the server you are connecting to. Encrypted Client Hello technology is supposed to solve this issue and encrypt that last bit of unencrypted information. To benefit from it, enable the *Encrypted Client Hello* option. Utilizza un proxy DNS locale per cercare la configurazione ECH per il dominio. If it is found, Client Hello packet will be encrypted.

#### OCSP checking

If this setting is enabled, AdGuard will perform asynchronous OCSP checks to get the revocation status of a website's SSL certificate.

If an OCSP check is completed within the required timeout, AdGuard will immediately block the connection if the certificate is revoked or establish the connection if the certificate is valid.

If the verification takes too long, AdGuard will allow the connection while continuing to check the certificate status in the background. Se il certificato viene revocato, le connessioni attuali e future al dominio verranno bloccate.

#### Redirect DNS-over-HTTPS requests

If this setting is enabled, AdGuard will redirect DNS-over-HTTPS requests to the local DNS proxy in addition to plain DNS requests. We recommend disabling fallback upstreams and using only encrypted DNS servers to maintain privacy.

#### Filtra HTTP/3

If this setting is enabled, AdGuard will filter requests sent over HTTP/3 in addition to other request types.

### Proxy in uscita

#### Show the Filter DNS requests setting

If this is enabled, the *Filter DNS requests* switch will be displayed in the *Add proxy server* dialog. Use it to enable filtering of DNS requests passing through the specified proxy.

### Protection

#### Port ranges

Here you can specify port ranges that should be filtered.

#### Log removed HTML events

If this setting is enabled, AdGuard will record blocked HTML elements in *Recent activity*.

#### Scriptlet debugging

If this setting is enabled, debugging in scriptlets will be activated, and the browser log will record when scriptlet rules are applied.

#### Excluded apps

Here you can list package names and UIDs that you want to exclude from AdGuard protection.

#### QUIC bypass packages

Here you can specify package names for which AdGuard should bypass QUIC traffic.

#### Reconfigure Automatic proxy when network changes

If this setting is enabled, the AdGuard protection will restart to reconfigure the automatic proxy settings when your device connects to another network. This setting only applies if *Routing mode* is set to *Automatic proxy*.

#### IPv6 filtering

If this setting is enabled, AdGuard will filter IPv6 networks if an IPv6 network interface is available.

#### IPv4 ranges excluded from filtering

Filtering for the IPv4 ranges listed in this section is disabled.

#### IPv6 ranges excluded from filtering

Filtering for the IPv6 ranges listed in this section is disabled.

#### TCP keepalive for outgoing sockets

If this setting is enabled, AdGuard will send a keepalive probe after the specified time period to ensure that the TCP connection is alive. Here, you can specify the idle time before starting keepalive probes and the time between keepalive probes for an unresponsive peer.

After a system-defined number of unsuccessful attempts to get a response from the server, the system automatically closes the TCP connection.

### Local VPN settings

#### Recovery delay for revoked VPN

Here you can set the time of a delay in milliseconds before AdGuard tries to restore VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### Reschedule delay for revoked VPN recovery

Here you can set the time of a delay in milliseconds before AdGuard reschedules the restoration of VPN protection after it has been revoked by a third-party VPN app or by deleting the VPN profile. The default value is 5000 ms.

#### MTU

Here you can set the maximum transmission unit (MTU) of the VPN interface. The recommended range is 1500-1900 bytes.

#### Restore VPN automatically

If this setting is enabled, AdGuard’s local VPN will be automatically re-enabled after being turned off due to network absence, tethering, or low-power mode.

#### Packet capture (PCAP)

If this setting is enabled, AdGuard will create a file `timestamp.pcap` (for instance, 1682599851461.pcap) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the Wireshark program.

#### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi.

#### IPv4 address

Here you can enter the IP address that will be used to create a TUN interface. By default, it is `172.18.11.218`.

#### Forcibly route LAN IPv4

If this setting is enabled, AdGuard will filter all LAN connections, including local IPv4 network traffic, even if the *Route all LAN IPv4 connections* option is enabled.

#### Route all LAN IPv4 connections

If this setting is enabled, AdGuard will exclude LAN connections from filtering for simple networks. This may not work for complex networks. This setting only applies if *Forcibly route LAN IPv4* is disabled.

#### IPv6 address

Here you can enter the IP address that will be used to create a TUN interface. By default, it is `2001:db8:ad:0:ff::`.

### Varie

#### Detect Samsung Pay

If this setting is enabled, AdGuard protection will be paused while Samsung Pay is in use. Korean users require this feature as they experience [issues with Samsung Pay](/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea) when AdGuard is enabled.
