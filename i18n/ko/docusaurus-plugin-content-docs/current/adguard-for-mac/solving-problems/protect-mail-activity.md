---
title: 메일 활동 및 AdGuard 보호
sidebar_position: 8
---

:::정보

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Mac용 AdGuard에 관한 내용입니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

## 요약

이제 Apple의 메일 앱은 이메일에서 이미지를 다운로드할 때 프록시를 사용하여 사용자의 IP 주소를 숨깁니다.

![메일 개인 정보 보호](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_protectMailActivity.jpg)

하지만 활성 VPN 연결이 있는 경우에는 작동하지 않습니다. AdGuard를 VPN으로 취급하기 때문에 이미지를 자동으로 미리 로드하지 않습니다.

Apple은 이 문제에 대해 [여기](https://support.apple.com/HT212797)에서 설명합니다.

## 문제에 대한 자세한 설명

이제 Mac용 AdGuard는 네트워크 확장 API를 기반으로 하는 macOS 내장 소켓 필터링을 사용합니다. 이 새롭고 다소 버그가 많은 메커니즘은 기존의 커널 확장 프로그램을 대체했습니다. 지난 1.5년 동안 저희는 새로운 필터링 방식과 관련하여 20개(!) 이상의 버그를 Apple에 보고했습니다.

네트워크 확장 API에는 경로와 유사한 항목 목록이 있는 VPN과 유사한 구성이 있습니다. Big Sur에서는 초기 Big Sur 릴리스에서 문제를 일으킬 수 있는 '기본 경로' 규칙을 만들지 않기 위해 AdGuard는 '분할 터널링' 규칙을 사용했습니다. 이러한 문제는 몬터레이에서 해결되었으므로 '기본 경로' 규칙을 사용하는 데 아무런 지장이 없습니다.

Monterey에서 iCloud 비공개 릴레이가 도입되었습니다. Mail.app의 개인정보 보호 기능도 비공개 릴레이 서버를 사용합니다.

따라서 AdGuard는 iCloud 비공개 릴레이 및 메일 앱 개인정보 보호 기능과 함께 사용할 수 없습니다:

1. iCloud 비공개 릴레이는 AdGuard가 작동하는 소켓 레벨에 도달하기 전에 라이브러리 레벨의 연결에 적용됩니다.
2. iCloud 비공개 릴레이는 아직 HTTP/3 필터링을 사용할 수 없기 때문에 AdGuard가 필터링할 수 없는 QUIC을 사용합니다.
3. 따라서 AdGuard는 iCloud 비공개 릴레이 트래픽을 포함한 QUIC을 차단합니다. 그렇지 않으면 광고 차단이 불가능합니다.
4. iCloud 비공개 릴레이를 사용하고 AdGuard를 '분할 터널링' 모드로 전환하면 Safari에서 웹사이트를 열 수 없습니다.
5. Monterey에서 이 문제를 해결하기 위해 '기본 경로' 규칙을 적용합니다. 비공개 릴레이가 해당 규칙을 발견하면 자동으로 비활성화됩니다. 따라서 AdGuard는 Monterey에서 원활하게 작동하지만 iCloud 비공개 릴레이는 비활성화됩니다.

`network.extension.monterey.force.split.tunnel`은 'Big Sur' 동작을 복원하지만 이 옵션은 (3) 및 (4)로 인해 웹사이트에 대한 액세스가 중단될 수 있습니다. 저희는 이 문제에 대한 해결책을 계속 찾고 있습니다. 옵션 중 하나는 HTTP/3 필터링을 구현하는 것입니다.

## 권장 솔루션

현재로서는 최신 Apple 개인정보 보호 기능 대신 [AdGuard VPN](https://adguard-vpn.com/)과 같은 일반적인 VPN 서비스를 사용하는 것을 권장합니다.
