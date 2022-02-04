---
title: 'Compatibility issues with different macOS versions'
taxonomy:
   category:
       - docs
visible: true
---
 
* [Currently existing problems](#current)
   * [Monterey 12: currently existing problems](#Monterey)
       * [Compatibility with iCloud Private Relay](#private-relay)
       * [Compatibility with Protect Mail Activity](#mail-activity)
   * [Monterey 12, Big Sur 11.6 and later: currently existing problems](#later)
       * [Compatibility with Cisco AnyConnect](#cisco)
       * [Compatibility with Flutter](#flutter)
       * [VPN apps with legacy API](#legacy-api)
* [Already fixed problems](#fixed)
   * [Compatibility with Little Snitch 5](#little-snitch)
   * [Compatibility with local proxies](#local-proxies)
* [Alternatives to Network Extension](#alternatives)  
   * [Using "Automatic proxy" filtering mode](#automatic-proxy)
   * [Enabling Kernel Extension in Big Sur](#kernel-extension)
 
 
<a id="current"></a>
 
## Currently existing problems
 
Every year Apple releases a new version of macOS, introducing innovative solutions and adding new useful features. But some of them, such as Network Extensions API (Big Sur) or iCloud Private Relay (Monterey), cause some problems to many applications, AdGuard not being an exception. In this article we go over the known issues spesific to each macOS version and possible ways to solve them. 
 
<a id="Monterey"></a>
 
### Monterey 12: currently existing problems
 
These problems aren't fixed by Apple yet, or fixed only partially.
 
<a id="private-relay"></a>
 
#### Compatibility with iCloud Private Relay
 
Currently, AdGuard and iCloud Private Relay cannot work at the same time. AdGuard has no ability to block ads because iCloud Private Relay encrypts traffic before AdGuard can filter network connections. When iCloud Private Relay is active, any filtering (including local filtering) becomes impossible. Thus, AdGuard can't filter traffic or perform DNS filtering in Safari. That's why by default, AdGuard uses the "default route" which disables iCloud Private Relay. 
 
For a deeper understanding of this problem, read [this article](https://kb.adguard.com/en/macos/solving-problems/icloud-private-relay).
 
**Recommended solution**
 
We recommend using AdGuard together with a more traditional VPN service such as [AdGuard VPN](https://adguard-vpn.com/).
 
**Alternative solution**
 
You can prevent AdGuard from using the "default route" by disabling it. It can be done via Advanced Settings -> ```network.extension.monterey.force.split.tunnel```. Note that enabling this setting will cause the problems described above