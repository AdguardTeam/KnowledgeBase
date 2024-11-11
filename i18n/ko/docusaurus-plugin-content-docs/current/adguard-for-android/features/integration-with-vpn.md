---
title: AdGuard VPN과 통합
sidebar_position: 6
---

:::info

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Android용 AdGuard에 관한 내용입니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)하세요.

:::

Android용 AdGuard는 로컬 VPN을 생성하여 트래픽을 필터링합니다. 따라서 Android용 AdGuard가 실행되는 동안에는 다른 VPN 앱을 사용할 수 없습니다. 하지만 AdGuard와 [AdGuard VPN](https://adguard-vpn.com/) 앱 모두 통합 모드가 있어 동시에 사용할 수 있습니다.

이 모드에서 AdGuard VPN은 AdGuard 광고 차단기가 트래픽을 라우팅하는 아웃바운드 프록시 서버 역할을 합니다. 이를 통해 AdGuard는 VPN 인터페이스를 생성하고 로컬에서 광고와 추적기를 차단하는 동시에 모든 트래픽을 원격 서버를 통해 라우팅할 수 있습니다.

AdGuard VPN을 비활성화하면 AdGuard는 아웃바운드 프록시로 사용을 중지합니다. AdGuard를 비활성화하면 AdGard VPN은 자체 VPN 인터페이스를 통해 트래픽을 라우팅합니다.

AdGuard 광고 차단기를 사용 중이고 AdGuard VPN을 설치한 경우, 광고 차단기 앱이 이를 감지하여 **AdGuard VPN과의 통합**을 자동으로 활성화합니다. 그 반대도 마찬가지입니다. 통합을 활성화한 경우, AdGuard VPN 앱에서 앱 예외를 관리하고 DNS 서버에 연결할 수 없다는 점에 유의하세요. **설정** → **필터링** → **네트워크** → **프록시** → **프록시를 통해 작동하는 앱**을 통해 VPN 터널을 통해 라우팅할 앱을 지정할 수 있습니다. DNS 서버를 선택하려면 AdGuard → **보호** → **DNS 보호** → **DNS 서버**를 엽니다.
