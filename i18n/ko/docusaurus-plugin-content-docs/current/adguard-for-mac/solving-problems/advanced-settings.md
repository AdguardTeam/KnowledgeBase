---
title: 고급 설정
sidebar_position: 9
---

:::정보

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Mac용 AdGuard에 관한 내용입니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

## 고급 설정으로 이동하는 방법

:::caution

*고급 설정*을 변경하면 AdGuard의 성능에 문제가 발생하고 인터넷 연결이 끊기며 보안 및 개인정보가 손상될 수 있습니다. 이러한 설정은 사용자가 무엇을 하고 있는지 확실하거나 지원팀에서 요청하는 경우에만 변경하세요.

:::

*고급 설정*을 찾으려면 AdGuard를 열고 톱니바퀴 아이콘을 클릭한 다음 *고급* → *고급 설정*을 선택합니다.

## 고급 설정

### 네트워크 설정

#### `network.extension.exclude.domains`

나열된 도메인은 *네트워크 확장* 모드에서 필터링에서 제외됩니다. 값을 구분하려면 쉼표나 줄 바꿈을 사용하세요.

#### `network.extension.exclude.ports`

나열된 포트는 *네트워크 확장* 모드에서 필터링에서 제외됩니다. 값을 구분하려면 쉼표나 줄 바꿈을 사용하세요.

#### `network.extension.route.exclude`

나열된 경로는 *네트워크 확장* 모드에서 필터링에서 제외됩니다. IP 주소 또는 대상 CIDR을 사용하여 경로를 설정합니다. 쉼표 또는 줄 바꿈으로 값을 구분합니다.

#### `network.extension.http.downgrade.bundleids`

여기에서 *네트워크 확장 필터링 모드*의 HTTP/2 프로토콜을 HTTP/1.1로 다운그레이드할 애플리케이션 목록을 지정할 수 있습니다. 번들 ID는 쉼표 또는 줄 바꿈으로 구분해야 합니다.

#### `network.extension.monterey.force.split.tunnel`

여기에서 macOS Monterey의 *네트워크 확장 모드*에서 활성화된 기본 경로를 AdGuard가 사용하지 못하도록 할 수 있습니다. AdGuard는 '기본 경로'를 사용하여 iCloud 비공개 릴레이 및 메일 활동 보호와 함께 작동할 수 없으므로 이를 비활성화합니다.

이 문제에 대한 자세한 내용은 [이 문서](../icloud-private-relay)에서 확인할 수 있습니다.

#### `network.extension.dns.redirect.exclude.bundleids`

여기에서 시스템 DNS 리졸버를 거치지 않고 직접 DNS 쿼리를 수행하는 애플리케이션 목록(예: 일부 VPN 클라이언트 또는 DNS 필터링 애플리케이션)을 지정할 수 있습니다. *네트워크 확장 모드*에서는 DNS 필터링이 비활성화됩니다. 번들 ID는 쉼표 또는 줄 바꿈으로 구분해야 합니다.

#### `network.dns.filter.secure.request`

보안 DNS 요청을 로컬 DNS 프록시로 리디렉션합니다(사용 가능한 프록시가 있는 경우).

#### `network.https.ocsp.check`

`true로` 설정하면 HTTPS 인증서 해지 확인을 사용하도록 설정합니다.

#### `network.tcp.keepalive.enabled`

유휴 연결을 통해 주기적으로 TCP 패킷을 전송하여 연결이 활성 상태로 유지되도록 하고 NAT 시간 제한을 갱신합니다.

#### `network.tcp.keepalive.interval.seconds`

킵얼라이브 프로브를 보내기 전까지의 유휴 시간(초)입니다. 0이 지정되면 시스템은 기본값을 사용합니다.

#### `network.tcp.keepalive.timeout.seconds`

응답이 없는 피어에게 다른 킵얼라이브 프로브를 보내기까지의 시간(초)입니다. 0을 지정하면 시스템에서 선택한 값이 사용됩니다.

#### `network.https.ech.enabled`

로컬 DNS 프록시를 사용하여 ECH 구성 목록에서 구성을 찾습니다. 찾으면 ClientHello를 암호화합니다.

#### `network.https.enforce.certificate.transparency`

Chrome 인증서 투명성 정책에 따라 도메인의 모든 인증서를 확인합니다.

#### `network.https.filter.http3.enabled`

`true`로 설정하면 AdGuard가 QUIC 기반의 최신 버전의 HTTP 프로토콜인 HTTP/3을 통해 전송되는 트래픽을 필터링할 수 있습니다.

#### `network.filtering.localnetwork`

`true`로 설정하면 로컬 네트워크 필터링이 활성화됩니다.

#### `network.filtering.localhost`

`true`로 설정하면 LoopBack 필터링이 활성화됩니다.

### DNS 설정

#### `dns.proxy.bootstrap.ips`

여기에서 암호화된 DNS 서버의 주소를 확인하는 데 사용할 DNS 서버의 IP 주소를 입력할 수 있습니다.

#### `dns.proxy.fallback.ips`

여기에서 암호화된 DNS 서버가 응답하지 않을 경우, 백업으로 사용할 DNS 서버의 IP 주소 목록을 지정할 수 있습니다.

#### `dns.proxy.fallback.on.upstreams.failure.enabled`

모든 일반 업스트림이 실패하면 일반 쿼리는 폴백 업스트림으로 리디렉션됩니다.

#### `dns.proxy.detect.search.domains`

이 옵션을 사용하면 로컬 네트워크 도메인을 자동으로 감지하여 기본 DNS 서버 대신 폴백 DNS 서버로 자동 리디렉션할 수 있습니다.

#### `dns.proxy.fallback.domains`

여기에서 기본 DNS 서버 대신 폴백 DNS 서버를 사용할 도메인을 나열할 수 있습니다.

#### `dns.proxy.adblockrules.blocking.mode`

여기에서 광고 차단기 스타일 규칙에 해당하는 차단된 요청에 대한 DNS 서버 응답 유형을 지정할 수 있습니다.

- 0 — REFUSED로 응답
- 1 — NXDOMAIN으로 응답
- 2 - 0.0.0.0 또는 `dns.proxy.blocking.response.IPv4.address` 및/또는 `dns.proxy.blocking.response.IPv6.address`에 지정된 주소로 응답합니다.

#### `dns.proxy.hostrules.blocking.mode`

여기에서 호스트 규칙에 해당하는 차단된 요청에 대한 DNS 서버 응답 유형을 지정할 수 있습니다.

- 0 — REFUSED로 응답
- 1 — NXDOMAIN으로 응답
- 2 - 0.0.0.0 또는 `dns.proxy.blocking.response.IPv4.address` 및/또는 `dns.proxy.blocking.response.IPv6.address`에 지정된 주소로 응답합니다.

#### `dns.proxy.blocking.response.IPv4.address`

여기에서 `dns.proxy.adblockrules.blocking.mode` 또는 `dns.proxy.hostrules.blocking.mode`가 응답 유형 'ADDRESS'로 설정된 경우 차단된 'A' 요청에 대한 응답으로 반환될 IPv4 주소를 지정할 수 있습니다.

#### `dns.proxy.blocking.response.IPv6.address`

여기에서 `dns.proxy.adblockrules.blocking.mode` 또는 `dns.proxy.hostrules.blocking.mode`가 응답 유형 'ADDRESS'로 설정된 경우 차단된 'AAAA' 요청에 대한 응답으로 반환될 IPv6 주소를 지정할 수 있습니다.

#### `dns.proxy.block.AAAA.requests`

여기에서 IPv6 DNS 쿼리 차단을 활성화할 수 있습니다.

#### `dns.proxy.blocked.response.TTL.in.seconds`

여기에서 차단된 요청에 대한 응답으로 반환할 TTL(유지시간) 값을 지정할 수 있습니다.

#### `dns.proxy.parallel.upstream.queries.enabled`

모든 업스트림이 동시에 쿼리됩니다. 첫 번째 응답이 반환됩니다.

#### `dns.proxy.servfail.on.upstreams.failure.enabled`

SERVFAIL 패킷으로 업스트림 실패에 응답합니다.

#### `dns.proxy.http3.enabled`

DNS-over-HTTPS 업스트림에 HTTP/3을 활성화하여 연결을 가속화합니다.

#### `dns.proxy.block.encrypted.client.hello.response`

응답에서 Encrypted Client Hello 매개 변수를 제거합니다.

### 스텔스 모드 설정

#### `stealth.antidpi.http.split.fragment.size`

HTTP 요청 조각화의 크기를 조정합니다. 유효한 값은 1~1500입니다. 잘못된 크기를 지정하면 시스템에서 기본값을 사용합니다.

#### `stealth.antidpi.clienthello.split.fragment.size`

이 옵션은 심층 패킷 검사를 피하는 데 도움이 되는 TCP 패킷 조각화 크기를 지정합니다. 유효한 값은 1~1500입니다. 잘못된 크기를 지정하면 시스템에서 기본값을 사용합니다.

#### `stealth.antidpi.http.space.juggling`

HTTP 메서드와 URL 사이에 공백을 추가하고 'Host:' 필드 뒤의 공백을 제거합니다.

#### `stealth.antidpi.split.delay.millisecond`

여기에서 조각화가 수행되는 경우, 첫 번째 조각을 전송한 후 지연 시간을 밀리초 단위로 지정할 수 있습니다.

### 구독 링크 차단 설정(사용자 스크립트 및 필터)

#### `subscription.link.interception.userscript`

AdGuard가 유저스크립트의 URL을 자동으로 가로채고 설치 창을 열도록 하려면 이 기능을 활성화하세요.

#### `subscription.link.interception.filter`

AdGuard가 자동으로 구독 URL(예: abp:subscribe 등)을 가로채도록 하려면 이 기능을 활성화하고 사용자 정의 필터 설정 창을 엽니다.
