---
title: Interazione CLI di AdGuard VPN
sidebar_position: 5
---

## Interazione CLI di AdGuard VPN

Usare AdGuard CLI in **modalità proxy automatico** insieme a AdGuard VPN CLI in **modalità tunnel** è impossibile a causa di un ciclo di instradamento: il traffico di AdGuard VPN CLI attualmente non può essere escluso dall'essere trasparentemente proxyato da AdGuard CLI, e il traffico di AdGuard CLI deve passare attraverso il tunnel di AdGuard VPN CLI.

Queste sono le due possibili soluzioni:

- Cambia AdGuard CLI in **modalità proxy manuale**.
    - In questo caso, AdGuard VPN CLI può essere usato in **modalità tunnel**, ma le app per le quali è desiderato il bloccaggio delle inserzioni devono essere configurate manualmente per usare il proxy di AdGuard CLI.
- Passa all'interfaccia **SOCKS5** di AdGuard VPN CLI e configura AdGuard CLI con un proxy di partenza che punta all'interfaccia SOCKS5 di AdGuard VPN CLI. In questo caso, è importante tenere a mente che:
    - Affinché il traffico di un'app passi attraverso il Tunnel VPN, deve avere il proprio traffico proxy trasparente tramite AdGuard CLI (il che è il caso per tutte le app per impostazione predefinita), oppure deve essere configurato manualmente per usare l'interfaccia SOCKS5 di AdGuard VPN CLI.
    - Per evitare un ciclo di instradamento, l'opzione `skip_outbound_proxy` deve essere abilitata per AdGuard VPN CLI nella sezione di configurazione delle app di AdGuard CLI. Per impostazione predefinita, `skip_outbound_proxy` è abilitato per tutte le app con `vpn` nel loro nome, compresa AdGuard VPN CLI.
