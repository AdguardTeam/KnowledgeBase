---
title: Nastavení sítě
sidebar_position: 3
---

:::info

Tento článek popisuje AdGuard pro Windows v8.0, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Jedná se o beta verzi, která je stále ve vývoji. Chcete-li vyzkoušet, stáhněte si [beta verzi AdGuard pro Windows](https://agrd.io/windows_beta).

:::

V této části můžete spravovat způsob, jakým AdGuard filtruje váš internetový provoz, a najdete zde další nástroje pro ovládání funkcí souvisejících se sítí.

![Network settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/network_settings.png)

## Použít AdGuard jako HTTP proxy

Tuto možnost povolte, aby AdGuard fungoval jako HTTP proxy. All traffic passing through it will be filtered — not only on your computer but also on other devices in your home network.

To filter traffic on other devices, install AdGuard’s root certificate on them and set up the proxy manually.

Ostatní nastavení jsou ve výchozím nastavení povolena.

## HTTPS filtrování

Většina webových stránek dnes používá šifrování HTTPS. Without HTTPS filtering, AdGuard cannot block ads on websites like YouTube, Facebook, or X (Twitter).

We recommend keeping the _Filter HTTPS_ option turned on unless you have a specific reason to turn it off.

S touto volbou můžete:

- Přeinstalovat nebo stáhnnout AdGuard certifikát

- Přidat webové stránky do seznamu, který nebude filtrován

- Vyberat, zda chcete filtrovat webové stránky s certifikáty EV (Extended Validation)

## Proxy pro aktualizace aplikace a filtrování

Here you can choose which proxy AdGuard should use to download filter updates or new app versions — the system proxy, a custom proxy, or no proxy at all.

![Proxy settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/proxy_apps.png)

## Použít ovladač SockFilter

Enable this option to use the SockFilter driver, which helps block ads and trackers in apps on Windows 8 and later.

If this option is disabled, AdGuard will switch to the older WFP driver instead.
