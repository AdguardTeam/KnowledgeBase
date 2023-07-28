---
title: Securing AdGuard Home With Pomerium Proxy
sidebar_position: 7
---

This guide covers how to protect your AdGuard instance itself with Pomerium open-source proxy, which adds a headers functionality to transparently pass along basic authentication credentials to AdGuard.

:::note

AdGuard does not currently support any authentication or authorization capabilities beyond a single set of [HTTP Basic Access Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) credentials.

:::

## Pre-requisites

[Pomerium](https://www.pomerium.com/docs) is an open-source reverse proxy. This guide assumes you have already completed [installation of Pomerium](https://www.pomerium.com/docs/quickstart). We will use docker-compose for the purpose of this guide, though any other deployment method would work equally well.

## Configure

### Pomerium Config

```yaml
# config.yaml
- from: https://adguard.domain.example
  to: http://adguard
  policy:
    - allow:
        or:
          - email:
              is: user@example.com
  set_request_headers:
    # https://www.blitter.se/utils/basic-authentication-header-generator/
    Authorization: Basic dXNlcjpwYXNzd29yZA===
  allow_websockets: true
```

Here's the important bit. If you don't add the `set_request_headers` line above, you will be prompted for a basic login on each visit.

### Docker-compose

```yaml
# docker-compose.yaml
adguard:
  image: adguard/adguardhome:latest
  volumes:
    - adguard/workdir:/opt/adguardhome/work:rw
    - adguard/confdir:/opt/adguardhome/conf:rw
  ports:
    - 53:53/udp
  expose:
    - 67
    - 68
    - 80
    - 443
    - 853
    - 3000
  restart: always
```

### Router

Now set your router to use your new host as the primary DNS server.

### That's it!

Simply navigate to your new adguard instance (e.g. `https://adguard.domain.example`) and behold all of the malware you and your family are no longer subjected to.
