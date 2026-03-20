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

Tuto možnost povolte, aby AdGuard fungoval jako HTTP proxy. Veškerý provoz, který jím prochází, bude filtrován — a to nejen na vašem počítači, ale i na ostatních zařízeních ve vaší domácí síti.

Chcete-li filtrovat provoz na jiných zařízeních, nainstalujte na ně kořenový certifikát AdGuard a ručně nastavte proxy.

Ostatní nastavení jsou ve výchozím nastavení povolena.

## HTTPS filtrování

Většina webových stránek dnes používá šifrování HTTPS. Bez HTTPS filtrování nemůže AdGuard blokovat reklamy na webech jako YouTube, Facebook nebo X (Twitter).

Doporučujeme ponechat možnost _HTTPS filtrování_ zapnutou, pokud nemáte konkrétní důvod ji vypnout.

S touto volbou můžete:

- Přeinstalovat nebo stáhnnout AdGuard certifikát

- Přidat webové stránky do seznamu, který nebude filtrován

- Vyberat, zda chcete filtrovat webové stránky s certifikáty EV (Extended Validation)

## Proxy pro aktualizace aplikace a filtrování

Zde můžete vybrat, jaký proxy server má AdGuard používat ke stahování aktualizací filtrů nebo nových verzí aplikace — systémový proxy server, vlastní proxy server nebo žádný proxy server.

![Proxy settings](https://cdn.adtidy.org/content/kb/ad_blocker/windows/version_8/settings/proxy_apps.png)

## Použít ovladač SockFilter

Tuto možnost zapněte, chcete-li používat ovladač SockFilter, který pomáhá blokovat reklamy a slídiče v aplikacích ve Windows 8 a novějších verzích.

Pokud je tato možnost deaktivována, AdGuard místo toho přepne na starší ovladač WFP.
