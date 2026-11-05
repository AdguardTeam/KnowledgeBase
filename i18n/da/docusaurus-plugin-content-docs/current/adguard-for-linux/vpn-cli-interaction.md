---
title: AdGuard VPN CLI-interaktion
sidebar_position: 5
---

## AdGuard VPN CLI-interaktion

Det er ikke muligt at bruge AdGuard CLI i **automatisk proxytilstand** sammen med AdGuard VPN CLI i **tunneltilstand** grundet en routing-løkke: AdGuard VPN CLI-trafikken kan p.t. ikke undtages fra at blive transparent proxyet af AdGuard CLI, og AdGuard CLI-trafikken skal gå igennem AdGuard VPN CLI-tunnelen.

Disse er de to mulige løsninger:

- Skift AdGuard CLI til **manuel proxytilstand**.
  - AdGuard VPN CLI kan så anvendes i **tunneltilstand**, men apps, hvor der ønskes adblocking, skal manuelt opsættes til brug af AdGuard CLI-proxyen.
- Skift AdGuard VPN CLI til **SOCKS5-tilstand** og opsæt AdGuard CLI med en udgående proxy pegende på SOCKS5-grænsefladen i AdGuard VPN CLI. I dette tilfælde er det vigtigt at huske på, at:
  - For at en apps trafik kan gå igennem VPN-tunnelen, skal den enten have sin trafik transparent proxyet af AdGuard CLI (hvilket sker for alle apps som standard) eller manuelt opsættes til brug af AdGuard VPN CLIs SOCKS5-grænseflade.
  - For at undgå en rutningsløkke skal indstillingen `skip_outbound_proxy` være aktiveret for AdGuard VPN CLI i AdGuard CLIs app-opsætningsafsnit. `skip_outbound_proxy` er som standard aktiveret for alle apps med `vpn` i deres navn, herunder AdGuard VPN CLI.
