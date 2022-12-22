---
title: Advanced (low-level) Settings guide
sidebar_position: 7
---

Previously known as low-level settings, Advanced Settings mostly contain settings that go beyond the average user's competence and don't have application in the everyday use. AdGuard for Windows is designed to work without ever having to change any of them, but they will provide additional options in some corner-case situations or when solving an uncommon problem.

> Mindlessly changing *Advanced Settings* can potentially cause problems with the performance of AdGuard, may break the Internet connection or compromise your security and privacy. You should only make changes to these settings if you are sure of what you are doing or if our support team has asked you to do so.

## How to reach Advanced Settings

To go to *Advanced settings*, in the main windows click *Settings —> General Settings* and scroll down to *Advanced Settings*. Alternatively, select *Advanced → Advanced settings...* in the tray menu.

## Advanced Settings

Once you open Advanced Settings, you will be presented with the following options:

### Block TCP Fast Open

If enabled, AdGuard will block TCP Fast Open in the Edge browser. To apply settings, you need to restart the browser.

### Exclude app from filtering by entering the full path

If you want AdGuard not to filter any specific application, specify the full path to them and the apps will be excluded from filtering. Separate different paths by semicolons.

### Enable AdGuard pop-up notifications

Enable this feature to see AdGuard pop-up notifications. They do not appear too often and contain only important information. You can also use the tray menu to recall the last pop-up notification.

### Automatically intercept filter subscription URLs

Enable this feature if you want AdGuard to automatically intercept filter subscription URLs (i.e. `abp:subscribe` and alike) and to open a custom filter installation dialog.

### Use redirect driver mode

If this option is enabled, AdGuard intercepts all the traffic and redirects it to the local proxy server for further filtering.

Otherwise, AdGuard will filter all the traffic on the fly, without redirection. In this case, the system will consider AdGuard to be the sole application that connects to the Internet (other applications are routed through it). The downside is that it will make the system Firewall less effective. The upside is that this approach works a little bit faster.

### Open main window at system start-up

Enable this option to make the main AdGuard window open after the system is loaded. Note that it doesn't affect whether the actual filtering service is launched or not, this setting is located in *Settings → General Settings*

### Filter localhost

If you want AdGuard to filter loopback connections, check the box. This option will always be on if you have AdGuard VPN installed, because otherwise it won't be able to work.

### Enable HAR writing

This option should be enabled **only for debugging purposes**. If you tick the checkmark, AdGuard will create a file that contains information about all filtered HTTP requests in HAR 1.2 format. This file can be analyzed with the Fiddler app. Note that it may slow down your web browsing significantly.

### Show QUIC

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only.

### Block Java

Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use *Block Java* option, Javascript will still be enabled.

### Action applied to blocked DNS requests

Here you can select the way AdGuard will respond to DNS queries that should be blocked:

* Reply with “Refused” error
* Reply with “NxDomain” error
* Reply with a custom IP address

### Custom IPv4 address

If “Custom IP address” is selected as an action applied to blocked DNS requests, here you should specify the IPv4 address that will be returned in response to blocked “A” requests. If none are specified, AdGuard will reply with the default “Refused” error.

### Custom IPv6 address

If “Custom IP address” is selected as an action applied to blocked DNS requests, here you should specify the IPv6 address that will be returned in response to blocked “AAAA” requests. If none are specified, AdGuard will reply with the default “Refused” error.

### Fallback servers

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

* Don’t use fallback servers;
* Use system default servers;
* Use custom servers.

### DNS server timeout period

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### List of custom fallback servers

If you want AdGuard to use custom fallback servers, list them in this section, one per line.

### List of custom bootstrap addresses

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in *DNS protection*. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used.

### DNS exclusions

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests.

### Block ECH

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### Enable filtering of secure DNS requests

When enabled, AdGuard redirects secure DNS requests to the local DNS proxy, in addition to plain DNS requests.