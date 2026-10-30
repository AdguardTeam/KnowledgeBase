---
title: Windows용 AdGuard의 알려진 문제
sidebar_position: 10
---

:::정보

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드하세요](https://agrd.io/download-kb-adblock).

:::

## Windows용 AdGuard 및 Windows용 AdGuard VPN 호환성 문제

Windows용 AdGuard와 Windows용 AdGuard VPN을 설치하면 사용자의 노력 없이도 함께 작동하기 시작합니다. 그러나 기본 설정 중 일부를 변경하면 앱이 동시에 실행될 때 앱이 제대로 작동하지 않을 수 있습니다.

Windows용 AdGuard에는 두 가지 특정 설정이 있습니다: *리디렉션 드라이버 모드 사용* 및 *로컬 호스트 필터링*. 기본적으로 첫 번째는 비활성화되어 있고 두 번째는 활성화되어 있습니다. 기기에서 AdGuard 광고 차단기와 AdGuard VPN이 모두 활성화된 경우 이러한 설정을 변경하면 AdGuard의 필터링이 불가피하게 중단됩니다.

이러한 설정을 변경하는 것은 AdGuard 광고 차단기와 안티바이러스, VPN, 네트워크 필터와 같은 네트워크 수준 앱의 동시 작동과 관련된 문제를 해결하기 위해서만 필요합니다. 위 설정의 기본 상태를 변경해야 하지만 여전히 AdGuard Ad Blocker와 AdGuard VPN이 동시에 올바르게 작동하길 원하는 상황이 발생하면 [GitHub에서 이슈를 생성하세요](https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose) 그러면 저희가 직접 도와드리겠습니다.

현재 위에 나열된 앱 동시 작업의 한계를 극복하기 위해 노력하고 있습니다.
