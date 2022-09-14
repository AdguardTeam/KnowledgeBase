---
title: Known issues
sidebar_position: 2
---

> Last update: January 18, 2021
> Understanding this article may require some basic knowledge about encryption, the TLS protocol, and HTTPS.
First, look at this simple diagram that shows the general structure of the HTTPS protocol:

![What is HTTPS filtering](https://cdn.adguard.com/public/Adguard/Blog/https/what_is_https_filtering.png)

AdGuard copies properties of the TLS-connection that your browser uses:

* AdGuard uses the same TLS version.
* AdGuard uses the same encrypting methods (ciphers) as your browser.

Effectively, it means that if you use a modern, safe browser, it will take all known TLS problems into account and won’t attempt to use unsafe ciphers.

**What does AdGuard do when there are any doubts about the certificate’s validity?** In such cases, AdGuard entirely ceases filtering of all connections to this domain and leaves the browser in charge of all decisions.

### Known issues