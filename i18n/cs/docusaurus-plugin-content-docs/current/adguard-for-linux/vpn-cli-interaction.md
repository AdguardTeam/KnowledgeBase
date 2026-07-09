---
title: Interakce s AdGuard VPN CLI
sidebar_position: 5
---

## Interakce s AdGuard VPN CLI

Použití AdGuard CLI v **automatickém režimu proxy** společně s AdGuard VPN CLI v **tunelovém režimu** není možné z důvodu smyčky směrování: Provoz AdGuard VPN CLI nelze v současné době vyloučit z transparentního proxy AdGuard CLI a provoz AdGuard CLI musí procházet tunelem AdGuard VPN CLI.

Toto jsou dvě možná řešení:

- Přepnout AdGuard CLI na **manuální proxy režim**.
  - V tomto případě lze AdGuard VPN CLI používat v **tunelovém režimu**, ale aplikace, pro které je požadováno blokování reklam, musí být ručně nakonfigurovány tak, aby používaly proxy AdGuard CLI.
- Přepnout AdGuard VPN CLI do režimu **SOCKS5** a nakonfigurovat AdGuard CLI s odchozím proxy směřujícím na rozhraní SOCKS5 AdGuard VPN CLI. V tomto případě je důležité mít na paměti, že:
  - Aby mohl provoz aplikace procházet tunelem VPN, musí být buď transparentně veden skrze proxy rozhraní AdGuard CLI (což je výchozí případ všech aplikací), nebo musí být ručně nakonfigurován tak, aby používal rozhraní SOCKS5 AdGuard VPN CLI.
  - Abyste se vyhnuli směrovací smyčce, musí být pro AdGuard VPN CLI povolena možnost `skip_outbound_proxy` v sekci konfigurace aplikací AdGuard CLI. Ve výchozím nastavení je `skip_outbound_proxy` povoleno pro všechny aplikace s názvem `vpn`, včetně AdGuard VPN CLI.
