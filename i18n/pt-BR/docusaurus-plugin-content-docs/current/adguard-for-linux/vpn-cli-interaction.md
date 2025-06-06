---
title: Interação com o AdGuard VPN CLI
sidebar_position: 5
---

## Interação com o AdGuard VPN CLI

Usar o AdGuard CLI em **modo de proxy automático** junto com o AdGuard VPN CLI em **modo de túnel** é impossível devido a um loop de roteamento: o tráfego do AdGuard VPN CLI atualmente não pode ser excluído de ser proxy transparente pelo AdGuard CLI, e o tráfego do AdGuard CLI deve passar pelo túnel do AdGuard VPN CLI.

Estas são as duas soluções possíveis:

- Deixo o AdGuard CLI no **modo proxy manual**.
    - Neste caso, o AdGuard VPN CLI pode ser usado no **modo túnel**, mas os aplicativos para os quais se deseja bloquear anúncios devem ser configurados manualmente para usar o proxy do AdGuard CLI.
- Mude o AdGuard VPN CLI para **modo SOCKS5** e configure o AdGuard CLI com um proxy de saída apontando para a interface SOCKS5 do AdGuard VPN CLI. Neste caso, é importante ter em mente que:
    - Para que o tráfego de um aplicativo passe pelo Túnel VPN, ele deve ter seu tráfego proporcionalmente encaminhado pelo AdGuard CLI (que é o caso de todos os aplicativos por padrão), ou configurado manualmente para usar a interface SOCKS5 do AdGuard VPN CLI.
    - Para evitar um loop de roteamento, a opção `skip_outbound_proxy` deve ser ativada para o AdGuard VPN CLI na seção de configuração dos aplicativos do AdGuard CLI. Por padrão, `skip_outbound_proxy` está ativado para todos os aplicativos com `vpn` no nome, incluindo AdGuard VPN CLI.
