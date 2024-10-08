---
title: 로우 레벨 설정
sidebar_position: 5
---

:::정보

이 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 iOS용 AdGuard에 대해 다룹니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

## 로우 레벨 설정을 찾는 방법

:::caution

*로우 레벨 설정*을 변경하면 AdGuard의 성능에 문제가 발생하거나 인터넷 연결이 끊어지거나 보안이 손상될 수 있습니다. 이 섹션은 무엇을 하고 있는지 알고 있거나 지원팀에서 요청을 받은 경우에만 열면 됩니다.

:::

*로우 레벨 설정*으로 이동하려면 화면 오른쪽 하단의 톱니바퀴 아이콘을 탭하여 *설정을* 엽니다. *일반* 섹션을 선택한 다음 *고급 모드* 스위치를 켜면 아래에 *고급 설정* 섹션이 나타납니다. *고급 설정*을 탭하여 *로우 레벨 설정* 섹션으로 이동합니다.

## 로우 레벨 설정

### 터널링 모드

두 가지 주요 터널링 모드는 *분할 터널링*과 *풀 터널링*입니다. *분할 터널링* 모드는 AdGuard와 소위 '개인 VPN' 앱의 호환성을 제공합니다. *풀 터널링* 모드에서는 다른 어떤 VPN도 AdGuard와 동시에 작동할 수 없습니다.

*분할 터널링 모드*에는 특정 기능이 있습니다. DNS 프록시 성능이 좋지 않은 경우(예: AdGuard DNS 서버의 응답이 제때에 반환되지 않는 경우) iOS는 대신 iOS 설정에 지정된 DNS 서버를 통해 트래픽을 재라우팅합니다. 현재 광고는 차단되지 않으며 DNS 트래픽은 암호화되지 않습니다.

*풀 터널링* 모드에서는 AdGuard 설정에 지정된 DNS 서버만 사용됩니다. 응답하지 않으면 인터넷이 작동하지 않는 것입니다. *풀 터널링* 모드를 활성화하면 일부 프로그램(예: FaceTime)의 성능에 부정적인 영향을 미치고 앱 업데이트 문제가 발생할 수 있습니다.

기본적으로 AdGuard는 가장 안정적인 *분할 터널링* 모드를 사용합니다.

*풀 터널링*(VPN 아이콘 없음)이라는 추가 모드도 있습니다. 이 모드는 *풀 터널링*과 완전히 동일한 모드이지만, 시스템 표시줄에 VPN 아이콘이 나타나지 않도록 구성됩니다.

### 차단 모드

이 모듈에서는 차단해야 하는 DNS 쿼리에 대해 AdGuard가 응답하는 방식을 선택할 수 있습니다.

- 기본 — adblock 규칙에 의해 차단된 경우 null IP 주소로 응답하고, /etc/hosts 규칙에 의해 차단된 경우 규칙에 지정된 IP 주소로 응답합니다.
- REFUSED — REFUSED 코드로 응답합니다.
- NXDOMAIN — NXDOMAIN 코드로 응답합니다.
- 지정되지 않은 IP — IP 주소가 0인 응답합니다.
- 사용자 정의 IP — 수동으로 설정한 IP 주소로 응답합니다.

### IPv6 차단

토글을 오른쪽으로 이동하면 IPv6 쿼리(AAAA 요청) 차단을 활성화할 수 있습니다. AAAA 유형의 DNS 요청은 확인되지 않으므로 IPv4 쿼리만 처리할 수 있습니다.

### 차단된 TTL 응답

여기에서 기기가 DNS 요청에 대한 응답을 캐시할 기간을 설정할 수 있습니다. 지정된 유효 시간(초) 동안 DNS 서버에 다시 요청하지 않고 캐시에서 요청을 읽을 수 있습니다.

### 부트스트랩 서버

DNS-over-HTTPS, DNS-over-TLS 및 DNS-over-QUIC의 경우 기본 DNS 서버의 IP 주소를 가져오기 위해 부트스트랩 서버가 필요합니다. 지정하지 않으면 iOS 설정의 DNS 서버가 부트스트랩 서버로 사용됩니다.

### 폴백 서버

여기서는 기본 서버가 응답하지 않을 경우 요청이 다시 라우팅될 대체 서버를 지정할 수 있습니다. 지정하지 않으면 시스템 DNS 서버가 폴백 서버로 사용됩니다. `없음`을 지정할 수도 있으며, 이 경우 폴백 서버가 설정되지 않고 기본 DNS 서버만 사용됩니다.

### 백그라운드 앱 새로고침 시간

여기에서 앱이 백그라운드에서 필터 업데이트를 확인할 빈도를 선택할 수 있습니다. 업데이트 확인은 지정된 기간보다 더 자주 수행되지는 않지만 정확한 간격이 지켜지지 않을 수도 있습니다.
