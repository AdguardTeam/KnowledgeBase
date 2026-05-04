---
title: 고급(로우 레벨) 설정 가이드
sidebar_position: 7
---

:::정보

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드하세요](https://agrd.io/download-kb-adblock).

:::

이전에는 로우 레벨 설정으로 알려진 고급 설정에는 대부분 평균적인 사용자 역량을 넘어서는 옵션이 포함되어 있으며 일상적인 사용에는 적용되지 않습니다. Windows용 AdGuard는 이러한 기능을 변경할 필요 없이 작동하도록 설계되었지만, 일부 특수한 경우나 흔하지 않은 문제를 해결할 때 추가 기능을 제공할 수 있습니다.

:::caution

*고급 설정*을 무심코 변경하면 AdGuard의 성능에 문제가 발생하거나 인터넷 연결이 끊어지거나 보안 및 개인정보가 손상될 수 있습니다. 이러한 설정은 본인이 무엇을 하고 있는지 알고 있거나 지원팀에서 요청하는 경우에만 변경하세요.

:::

## 고급 설정으로 이동하는 방법

*고급 설정*으로 이동하려면 기본 창에서 *설정 → 일반 설정* 을 클릭하고 아래로 스크롤하여 *고급 설정*으로 이동합니다. 또는 트레이 메뉴에서 *고급 → 고급 설정...* 을 선택합니다.

## 고급 설정

고급 설정을 열면 다음과 같은 옵션이 표시됩니다:

### TCP Fast Open 차단

이 기능을 활성화하면 AdGuard가 Edge 브라우저에서 TCP 빠른 열기를 차단합니다. 설정을 적용하려면 브라우저를 다시 시작해야 합니다.

### Encrypted Client Hello 사용

모든 암호화된 인터넷 연결에는 암호화되지 않은 부분이 있습니다. 이것은 연결하려는 서버의 이름이 포함된 첫 번째 패킷입니다. Encrypted Client Hello 기술은 이 문제를 해결하고 암호화되지 않은 마지막 비트의 정보를 암호화합니다. 이 기능을 사용하려면 *Encrypted Client Hello 사용* 옵션을 활성화하세요. 로컬 DNS 프록시를 사용하여 도메인에 대한 ECH 구성을 찾습니다. ECH 구성이 발견되면 Client Hello 패킷이 암호화됩니다.

### 웹사이트의 인증서 투명성 확인

Chrome 인증서 투명성 정책에 따라 도메인의 모든 인증서를 확인합니다. 인증서가 Chrome 인증서 투명성 정책을 준수하지 않는 경우 AdGuard는 웹사이트를 필터링하지 않습니다. 반면에 Chrome은 이 사이트를 차단합니다.

### SSL/TLS 인증서 해지 확인 활성화

이 옵션을 활성화하면 비동기 OCSP 검사를 실행하여 웹사이트의 SSL/TLS 인증서가 해지되었는지 확인합니다.

최소 시간 제한 내에 OCSP 확인이 완료되면 AdGuard는 즉시 결과를 적용합니다. 인증서가 해지된 경우 연결을 차단하고 인증서가 유효한 경우 연결을 설정합니다.

확인에 시간이 너무 오래 걸리면 AdGuard가 연결을 설정하고 백그라운드에서 계속 확인합니다. 인증서가 해지되면 도메인에 대한 현재 및 향후 연결이 차단됩니다.

### 설정에서 AdGuard VPN 표시

이 옵션을 활성화하면 설정에 AdGuard VPN 탭이 표시되어 앱과 제품 웹사이트를 쉽게 열 수 있습니다.

### 전체 경로를 입력하여 필터링에서 앱 제외하기

특정 앱을 필터링하지 않도록 하기 위해서는 해당 앱의 전체 경로를 지정하면 해당 앱이 필터링에서 제외됩니다. 세미콜론으로 서로 다른 경로를 구분합니다.

### AdGuard 팝업 알림 활성화

이 기능을 활성화하면 AdGuard 팝업 알림을 볼 수 있습니다. 너무 자주 표시되지 않으며 중요한 정보만 포함되어 있습니다. 트레이 메뉴를 사용하여 마지막 팝업 알림을 불러올 수도 있습니다.

### 필터 구독 URL 자동 차단

AdGuard가 필터 구독 URL(예: `abp:subscribe` 등)을 자동으로 가로채고 사용자 정의 필터 설치 대화 상자를 열도록 하려면 이 기능을 활성화합니다.

### HTTP/3 필터링

이 옵션을 활성화하면 AdGuard는 다른 요청 유형과 함께 HTTP/3을 통해 전송된 요청을 필터링합니다.

**Limitations**:

- Chrome-based browsers do not accept user certificates, so HTTP/3 filtering is not supported in them.
- Firefox-based browsers behave similarly by default, but you can set the `network.http.http3.disable_when_third_party_roots_found` option in `about:config` to `false` to allow user certificates for HTTP/3.
- Safari supports HTTP/3 filtering without additional configuration.

### 리디렉션 드라이버 모드 사용

이 옵션을 활성화하면 AdGuard가 모든 트래픽을 가로채서 추가 필터링을 위해 로컬 프록시 서버로 리디렉션합니다.

이 기능이 활성화되지 않은 경우, AdGuard는 리디렉션 없이 모든 트래픽을 즉시 필터링합니다. 시스템은 인터넷에 연결되는 유일한 애플리케이션으로 AdGuard를 간주합니다(다른 애플리케이션은 AdGuard를 통해 라우팅됨). 단점은 시스템 방화벽의 효율성이 떨어질 수 있다는 것입니다. 장점은 이 접근 방식이 조금 더 빠르게 작동한다는 것입니다.

### 시스템 시작 시 메인 창 열기

이 옵션을 활성화하면 시스템이 로드된 후 기본 AdGuard 창이 열립니다. 이 설정은 *설정 → 일반 설정*에 있으며 실제 필터링 서비스가 실행되는지 여부에는 영향을 미치지 않습니다.

### 시스템 시작 시 필터링 활성화

7.12 버전부터 시스템 시작 시 AdGard 실행 옵션이 비활성화되어 있는 경우, 기본적으로 AdGard 서비스는 OS 시작 후 트래픽을 필터링하지 않습니다. 즉, AdGuard의 서비스는 '유휴' 모드에서 시작됩니다. 이 옵션을 활성화하면 앱이 실행되지 않은 상태에서도 AdGuard가 트래픽을 필터링하도록 설정할 수 있습니다.

:::note

v7.12 이전에는 *시스템 시작 시 AdGard 실행이* 비활성화되어 있어도 기본적으로 필터링 모드에서 AdGard 서비스가 시작되었습니다. 애플리케이션의 이전 동작에 만족했다면 이 옵션을 활성화하세요.

:::

### 로컬 호스트 필터링

AdGuard가 루프백 연결을 필터링하도록 하려면 확인란을 선택합니다. 이 옵션은 AdGuard VPN이 설치되어 있는 경우 항상 켜져 있으며, 그렇지 않으면 작동하지 않습니다.

### 필터링에서 지정된 IP 범위 제외

AdGuard가 특정 서브넷을 필터링하지 않도록 설정하려면 이 기능을 활성화하고 아래 **필터링에서 제외되는 IP 범위** 섹션에서 CIDR 표기법(예: 98.51.100.14/24)으로 IP 범위를 지정하세요.

### HAR 기록 사용

이 옵션은 **디버깅 목적**으로만 활성화해야 합니다. 체크박스를 선택하면 AdGuard가 필터링된 모든 HTTP 요청에 대한 정보가 포함된 HAR 1.2 형식의 파일을 생성합니다. 이 파일은 Fiddler 앱으로 분석할 수 있습니다. 웹 브라우징 속도가 상당히 느려질 수 있습니다.

### 일반 HTTP 요청에 추가 공백 추가

HTTP 메서드와 URL 사이에 공백을 추가하고 심층 패킷 검사를 피하기 위해 '호스트:' 필드 뒤에 공백을 제거합니다. 예를 들어,

```text
GET /foo/bar/ HTTP/1.1
Host: example.org
```

will be converted to

```text
GET  /foo/bar/ HTTP/1.1
Host:example.org
```

This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### 초기 TLS 패킷의 조각화 크기 조정

Specifies the size of the TCP packet fragmentation, avoiding deep packet inspection. This option only affects secured (HTTPS) traffic.

If this option is enabled, AdGuard splits the initial TLS packet (the Client Hello packet) into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole initial TLS packet.

Valid values: 1–1500. 잘못된 크기를 지정하면 시스템에서 선택한 값이 사용됩니다. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### 일반 HTTP 조각 크기

HTTP 요청 조각화의 크기를 조정합니다. This option only affects plain HTTP traffic. If this option is enabled, AdGuard splits the initial packet into two parts: the first one has the specified length and the second one has the rest, up to the length of the whole original packet.

유효한 값은 1~1500입니다. 잘못된 크기를 지정하면 시스템에서 선택한 값이 사용됩니다. This option is only applied when the *Protect from DPI* Stealth mode option is enabled.

### QUIC 보기

Allows displaying the QUIC protocol records in the filtering log. For blocked requests only.

### TCP 연결 유지 사용

유효한 값은 1~1500입니다. 잘못된 크기를 지정하면 시스템에서 선택한 값이 사용됩니다.

### TCP 연결 유지 간격

Here you can specify an idle time period, in seconds, before sending a keepalive probe. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### TCP 연결 유지 시간 초과

Here you can specify time in seconds before sending another keepalive probe to an unresponsive peer. If 0 is specified, the value selected by the system will be used.

:::note

This setting only works when the *Enable TCP keepalive* option is enabled.

:::

### Java 차단

Some websites and web services still support Java Plug-Ins. The API that serves as the basis for Java plug-ins has serious security vulnerabilities. You can disable such plug-ins for security purposes. Nevertheless, even if you decide to use *Block Java* option, JavaScript will still be enabled.

### DNS 서버 시간 초과 기간

Here you can specify the time in milliseconds that AdGuard will wait for the response from the selected DNS server before resorting to fallback. If you don’t fill in this field or enter an invalid value, the value of 5000 will be used.

### DNS-over-HTTPS에 HTTP/3 사용

Enables HTTP/3 for DNS-over-HTTPS upstreams to accelerate connection if the selected upstream supports this protocol. This means that enabling this option does not guarantee that all DNS requests will be sent via HTTP/3.

### 폴백 DNS 업스트림 사용

Normal queries will be redirected to the fallback upstream if all DNS requests to the selected upstreams fail.

### DNS 업스트림 쿼리를 병렬로 수행

All upstreams will be queried in parallel and the first response is returned. Since DNS queries are made in parallel, enabling this feature increases the Internet speed.

### 실패한 DNS 쿼리에 항상 응답

If address resolving failed on each of the forwarded upstreams, as well as on the fallback domains, then the response to the DNS request will be `SERVFAIL`.

### 보안 DNS 요청 필터링 사용

AdGuard will redirect secure DNS requests to the local DNS proxy, in addition to plain DNS requests.

### 호스트 규칙에 대한 차단 모드

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [hosts rule syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#etc-hosts-syntax).

- 'Refused' 오류로 회신
- 'NxDomain' 오류로 회신
- 사용자 정의 IP 주소로 회신

### adblock-style 규칙을 위한 차단 모드

Here you can select the way AdGuard will respond to domains blocked by DNS rules based on [adblock-style syntax](https://adguard-dns.io/kb/general/dns-filtering-syntax/#adblock-style-syntax).

- 'Refused' 오류로 회신
- 'NxDomain' 오류로 회신
- 사용자 정의 IP 주소로 회신

### 사용자 정의 IPv4

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked A requests. If none are specified, AdGuard will reply with the default Refused error.

### 사용자 지정 IPv6

If Custom IP address is selected in Blocking mode for hosts rules or Blocking mode for adblock-style rules, this IP address will be returned in response to blocked AAAA requests. If none are specified, AdGuard will reply with the default "Refused" error.

### 폴백 서버

Here you can specify an alternate DNS server to which a DNS request will be rerouted if the main server fails to respond within the timeout period specified in the next section. There are three options to choose from:

- 폴백 서버를 사용하지 않음
- 시스템 기본 서버 사용
- 사용자 정의 서버 사용

### ECH 차단

If enabled, AdGuard strips Encrypted Client Hello parameters from responses.

### 사용자 정의 폴백 서버 목록

If you want AdGuard to use custom fallback servers, list them in this section, one per line.

### 사용자 정의 부트스트랩 주소 목록

A bootstrap is an intermediate DNS server used to get the IP address of the secure DNS server you chose earlier in *DNS protection*. Such a "middle ground" is needed when using protocols that denote the server address by letters (such as DNS-over-TLS, for example). In this case, the bootstrap acts as a translator, transforming the letters into numbers your system can understand.

By default, the system DNS resolver is used, and the initial bootstrap request is made through port 53. If this does not suit you, list here the IP addresses of the DNS servers that will be used to determine the address of the encrypted DNS server in the top-to-bottom order. The specified IP addresses will be applied in the order listed. If you specify invalid addresses, or no addresses at all, the system IPs will be used.

### DNS 예외

All DNS requests to domains listed here will be redirected to the system default DNS server instead of the DNS server specified in the app’s settings. Also, DNS blocking rules will not be applied to such requests.

### 지정된 Wi-Fi 네트워크 이름(SSID)을 DNS 필터링하지 않기

DNS protection will not include Wi-Fi networks listed in this section. Specify Wi-Fi networks names (SSIDs) one per line. This can be useful if a particular Wi-Fi network is already protected by AdGuard Home or another DNS protection system. In this case, it is superfluous to filter DNS requests again.
