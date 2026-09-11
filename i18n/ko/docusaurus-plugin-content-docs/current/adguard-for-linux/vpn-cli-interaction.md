---
title: AdGuard VPN CLI 상호 작용
sidebar_position: 5
---

## AdGuard VPN CLI 상호 작용

라우팅 루프로 인해 **자동 프록시 모드**에서 AdGuard CLI를 **터널링 모드**의 AdGuard VPN CLI와 함께 사용하는 것은 불가능합니다. 현재 AdGuard VPN CLI의 트래픽은 투명하게 프록시되는 것을 배제할 수 없으며, AdGuard CLI의 트래픽은 반드시 AdGuard VPN CLI의 터널을 통과해야 합니다.

두 가지 가능한 해결책이 있습니다.

- AdGuard CLI를 **수동 프록시 모드**로 전환합니다.
  - 이 경우 AdGuard VPN CLI는 **터널링 모드**에서 사용할 수 있지만, 광고 차단이 필요한 앱은 AdGuard CLI의 프록시를 사용하도록 수동으로 설정해야 합니다.
- AdGuard VPN CLI를 **SOCKS5 모드**로 전환하고, AdGuard VPN CLI의 SOCKS5 인터페이스를 가리키는 아웃바운드 프록시로 AdGuard CLI를 설정합니다. 이 경우 명심해야 할 점이 있습니다.
  - 앱의 트래픽이 VPN 터널을 통과하려면 기본적으로 모든 앱에 적용되는 AdGuard CLI를 통해 트래픽을 투명하게 프록시하거나 AdGuard VPN CLI의 SOCKS5 인터페이스를 사용하도록 수동으로 설정해야 합니다.
  - 라우팅 루프를 방지하려면 AdGuard CLI의 앱 설정 섹션에서 `skip_outbound_proxy` 옵션을 AdGuard VPN CLI에 활성화해야 합니다. 기본적으로 `skip_outbound_proxy`는 AdGuard VPN CLI를 포함하여 이름에 `vpn`이 포함된 모든 앱에 대해 활성화되어 있습니다.
