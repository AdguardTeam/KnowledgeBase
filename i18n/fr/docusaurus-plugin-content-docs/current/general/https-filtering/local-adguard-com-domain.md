---
title: Local.adguard.org and injections.adguard.org domains
sidebar_position: 3
---

Users of AdGuard for Windows, Mac, and Android may notice that AdGuard adds a small script to every web page. It is loaded from either `local.adguard.org` or `injections.adguard.org` and helps AdGuard apply cosmetic filtering. When AdGuard is running, it processes requests for the script locally in both cases.

## The `local.adguard.org` domain

This isn’t a real domain, and there’s no server behind that name. AdGuard uses it to apply cosmetic filtering to web pages: everything happens locally on your device, without connecting to any server.

### Explication technique

AdGuard is a network-level content blocker, so it cannot simply add custom JavaScript and CSS to web pages the way browser extensions do. However, this is crucial for quality content blocking.

To do this, AdGuard injects a content script that looks like this:

`<script src="https://local.adguard.org/.../content-script.js">`

The content script hides or removes ad content from web pages. Connections to the IP address of `local.adguard.org` are intercepted by AdGuard at the network level and **processed locally**. This is why the domain has a “static” IP address that does not change.

**Why do we need to use a real IP address?**

- We cannot use `127.0.0.1` as the browsers won't accept it.
- Using some IP address from the private subnets is possible, but this solution has two downsides.
    - First, there is a slight chance of intersecting with an existing intranet service and breaking access to it.
    - Second, some DNS servers may consider this a DNS rebinding attack and refuse to respond to `local.adguard.org`.

### Vérification

If you disable AdGuard and try opening `local.adguard.org` in your browser, the connection cannot be established: AdGuard is no longer there to intercept it, and there is no server at that address.

## The `injections.adguard.org` domain

When your traffic goes through an explicit proxy (a proxy set in your system or browser, not in AdGuard), AdGuard uses `injections.adguard.org` instead of `local.adguard.org` to apply cosmetic rules. Most users never see this domain.

## How the `injections.adguard.org` and `local.adguard.org` domains differ

- **`local.adguard.org`:** AdGuard intercepts the connection completely and responds on your device. The request never leaves the device.
- **`injections.adguard.org`:** AdGuard uses this domain when it detects that traffic is going through an explicit proxy. Unlike with `local.adguard.org`, a connection to this domain must be possible through the proxy. AdGuard processes the request for the script locally, within that established connection.

So although `injections.adguard.org` is reachable over the network, AdGuard does not fetch the script from its server. If AdGuard is not running, the domain remains reachable, but its server does not process or log user requests.

### If a page hangs on “Waiting for local.adguard.org” or “Waiting for injections.adguard.org”

If AdGuard does not handle a connection to `injections.adguard.org`, it normally fails quickly . If the connection times out instead, your browser may show “Waiting for injections.adguard.org” and the page may take longer to load.

Most often, another app that filters traffic takes over the connection before AdGuard does: an antivirus with web protection, a VPN or proxy tool, or a second ad blocker. AdGuard then can’t inject its content script, so the page loads slowly and some cosmetic rules are not applied.

Try disabling such apps one by one to find the source of the problem. If the problem continues, please contact support at support@adguard.com. Include your AdGuard version, the browser where you see the delay, and the output of `nslookup injections.adguard.org`. This command shows whether the domain resolves, but not whether a connection to it times out.
