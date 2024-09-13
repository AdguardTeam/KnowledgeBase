---
title: DNS 유출 가능성
sidebar_position: 9
---

:::정보

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드하세요](https://agrd.io/download-kb-adblock)

:::

Windows용 AdGuard를 사용하면 사용자는 시스템 설정에서 설정하지 않은 경우 ISP에서 제공하는 시스템 DNS 서버 대신 쿼리를 해결하기 위한 DNS 서버 주소를 지정할 수 있습니다. 기본값이 아닌 DNS 서버를 사용하면 ISP의 감시로부터 DNS 트래픽을 보호할 수 있습니다. 또한 암호화 및 필터링 DNS 서버, 혹은 둘 다를 선택하면 악의적인 행위자 및 성가신 광고로부터 또 다른 보호 단계를 얻을 수 있습니다.

많은 Windows용 AdGuard 사용자는 DNS 보호 기능을 높이 평가합니다. But some of them encounter the following issue: a check on a website like https://ipleak.net/ shows that requests are handled by the default DNS server instead of the selected one. 이번 문서에서는 이런 일이 발생하는 이유와 이를 방지하는 방법에 대해 설명하겠습니다.

## 부트스트랩 DNS 주소

DNS 서버 주소는 IP 또는 도메인 이름으로 작성할 수 있습니다. IP 주소의 경우 어렵지않게, AdGuard는 DNS 요청을 DNS 보호 모듈에 지정된 서버로 직접 전달합니다. 그러나 DoT 또는 DoH와 같은 암호화된 DNS 서버 주소는 대부분 도메인 이름으로 작성됩니다. 이 경우 암호화된 DNS 서버 주소를 먼저 확인하기 위해 AdGuard는 기본적으로 시스템 DNS 서버인 부트스트랩 주소로 DNS 쿼리를 보냅니다. 이러한 연결이 바로 수표 서비스에서 유출로 인식하는 것입니다.

**이 누수를 제거합니다:**

- *고급 설정*으로 이동합니다.
- 아래로 스크롤하여 *사용자 지정 부트스트랩 주소 목록* 섹션으로 이동합니다.
- enter the custom bootstrap address in the IP address format (you may use [the list of known DNS providers](https://adguard-dns.io/kb/general/dns-providers/))
- *저장을* 클릭합니다.

## 대체 DNS 서버

인터넷 연결 상태가 좋지 않거나 기본적으로 설정된 시간 제한이 만료되었거나 일부 서버 관련 문제로 인해 AdGuard가 지정된 서버에 연결할 수 없는 경우가 발생할 수 있습니다. 이 경우 기본적으로 시스템 DNS 서버인 대체 서버에 연결됩니다. 이 연결도 점검 서비스에서 유출로 간주합니다.

**이 누수를 제거합니다:**

- *고급 설정*으로 이동합니다.
- *대체 서버* 항목까지 아래로 스크롤합니다.
- *사용자 지정 서버 사용* 옵션을 선택합니다.
- then find the *List of custom fallback servers* section and enter the custom fallback servers one per line

또는

- *고급 설정*으로 이동합니다.
- *대체 서버* 항목까지 아래로 스크롤합니다.
- *대체 서버 사용 안 함* 옵션을 체크하세요.

또는

- *고급 설정*으로 이동합니다.
- *DNS 서버 시간 초과 기간* 항목까지 아래로 스크롤합니다.
- 임의의 큰 숫자를 입력합니다.
