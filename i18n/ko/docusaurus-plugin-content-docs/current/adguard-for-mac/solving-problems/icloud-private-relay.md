---
title: iCloud Private Relay 및 AdGuard
sidebar_position: 7
---

:::정보

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Mac용 AdGuard에 관한 내용입니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

## 문제 설명

기본적으로 AdGuard는 iCloud 비공개 릴레이를 비활성화하는 '기본 경로'를 사용합니다.

현재 AdGuard와 iCloud 비공개 릴레이는 동시에 작동할 수 없습니다. AdGuard가 네트워크 연결을 필터링하기 전에 iCloud 비공개 릴레이가 트래픽을 암호화하기 때문에 광고를 차단할 수 없습니다. iCloud 비공개 릴레이가 활성화되면 모든 필터링(로컬 필터링 포함)이 불가능해집니다. 따라서 AdGard는 Safari에서 트래픽을 필터링하거나 DNS 필터링을 수행할 수 없습니다. 하지만 AdGuard는 여전히 다른 브라우저의 트래픽을 필터링합니다. iCloud 비공개 릴레이를 계속 사용하려면 [Safari용 AdGuard](https://adguard.com/adguard-safari/overview.html)를 설치하는 것이 좋습니다.

Mac에서 VPN 앱을 사용할 때도 마찬가지입니다. iCloud 비공개 릴레이 또는 VPN 서비스 중 하나를 선택해야 합니다.

## 문제에 대한 자세한 설명

이제 Mac용 AdGuard는 네트워크 확장 API를 기반으로 하는 macOS 내장 소켓 필터링을 사용합니다. 이 새롭고 다소 버그가 많은 메커니즘은 기존의 커널 확장 프로그램을 대체했습니다. 지난 1.5년 동안 저희는 새로운 필터링 방식과 관련하여 20개(!) 이상의 버그를 Apple에 보고했습니다.

네트워크 확장 API에는 경로와 유사한 항목 목록이 있는 VPN과 유사한 구성이 있습니다. Big Sur에서는 초기 Big Sur 릴리스에서 문제를 일으키는 '기본 경로' 규칙을 만들지 않기 위해 AdGuard는 '분할 터널링' 규칙을 개발했습니다.

Monterey에서 iCloud 비공개 릴레이가 도입되었습니다. 메일 앱의 개인정보 보호 기능도 iCloud 비공개 릴레이 서버를 사용합니다.

따라서 AdGuard는 iCloud 비공개 릴레이 및 메일 앱 개인정보 보호 기능과 함께 사용할 수 없습니다.

1. iCloud 비공개 릴레이는 AdGuard가 작동하는 소켓 레벨에 도달하기 전에 라이브러리 레벨의 연결에 적용됩니다.
2. iCloud 비공개 릴레이는 아직 HTTP/3 필터링을 사용할 수 없기 때문에 AdGuard가 필터링된 앱에서 필터링할 수 없는 QUIC을 사용합니다.
3. 따라서 AdGuard는 iCloud 비공개 릴레이 트래픽을 포함한 QUIC을 차단합니다. 그렇지 않으면 광고 차단이 불가능합니다.
4. iCloud 비공개 릴레이를 사용하고 AdGuard를 '분할 터널링' 모드로 전환하면 Safari에서 웹사이트를 열 수 없습니다.
5. Monterey에서 이 문제를 해결하기 위해 '기본 경로' 규칙을 적용합니다. 비공개 릴레이가 해당 규칙을 발견하면 자동으로 비활성화됩니다. 따라서 AdGuard는 Monterey에서 원활하게 작동하지만 iCloud 비공개 릴레이는 비활성화됩니다.

`network.extension.monterey.force.split.tunnel`은 'Big Sur' 동작을 복원하지만 이 옵션은 (3) 및 (4)로 인해 웹사이트에 대한 액세스가 중단될 수 있습니다. 저희는 이 문제에 대한 해결책을 계속 찾고 있습니다. 옵션 중 하나는 HTTP/3 필터링을 구현하는 것입니다.

## 권장 솔루션

[AdGuard VPN](https://adguard-vpn.com/)과 같은 기존 VPN 서비스와 함께 사용하는 것을 권장합니다.

## 대안 솔루션

'기본 경로'를 비활성화하여 AdGuard가 '기본 경로'를 사용하지 못하도록 할 수 있습니다. 고급 설정 → `network.extension.monterey.force.split.tunnel`을 통해 이 작업을 수행할 수 있습니다.

![고급 설정에서 기본 경로 비활성화 *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

이 경우 위에서 설명한 문제가 발생할 수 있다는 점에 유의하세요.
