---
title: DNS 보호
sidebar_position: 4
---

:::info

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Android용 AdGuard에 관한 내용입니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)하세요.

:::

DNS 보호 모듈은 **보호** 탭(화면 하단의 왼쪽 두 번째 아이콘)을 탭한 다음 **DNS 보호**를 선택하면 액세스할 수 있습니다.

:::tip

DNS 보호는 일반 광고 및 추적기 차단과는 다른 방식으로 작동합니다. You can [learn more about it and how it works from a dedicated article](https://adguard-dns.io/kb/general/dns-filtering/#how-does-dns-filtering-work)

:::

**DNS 보호**를 사용하면 선택한 DNS 서버, DNS 필터 및 사용자 규칙을 이용하여 DNS 요청을 필터링할 수 있습니다.

- 일부 DNS 서버에는 잠재적으로 유해한 도메인에 대한 DNS 요청을 차단하는 목록이 있습니다.

- DNS 서버 외에도 AdGuard는 특수 DNS 필터를 사용하여 자체적으로 DNS 요청을 필터링할 수 있습니다. 여기에는 광고 및 추적 도메인의 방대한 목록이 포함되어 있으며, 해당 도메인으로의 요청은 블랙홀 서버로 리라우팅됩니다.

- 사용자 규칙을 만들어 도메인을 차단하고 차단을 해제할 수도 있습니다. [DNS 필터링 규칙 구문에 대한 도움말 문서](https://adguard-dns.io/kb/general/dns-filtering-syntax/)를 참조해야 할 수도 있습니다.

![DNS 보호 \*mobile\_border](https://cdn.adtidy.org/blog/new/u8qtxdns_protection.png)

#### DNS 서버

이 섹션에서는 DNS 요청을 처리할 DNS 서버를 선택할 수 있습니다. 또한 광고 및 추적기를 차단하고 DNS 트래픽을 암호화할 수 있습니다. 서버를 탭하여 전체 설명을 읽고 프로토콜을 선택합니다. 원하는 서버를 찾지 못한 경우, 수동으로 추가할 수 있습니다.

- **DNS 서버 추가**를 탭하고 서버 주소를 입력합니다.

- 또는 [알려진 DNS 제공업체 목록](https://adguard-dns.io/kb/general/dns-providers/)에서 DNS 서버를 선택하고 옆에 있는 **AdGuard에 추가**를 탭할 수 있습니다.

- 사설 AdGuard DNS 서버를 사용하는 경우, [대시보드](https://adguard-dns.io/dashboard/)에서 해당 서버를 AdGuard에 추가할 수 있습니다.

기본적으로 **자동 DNS**가 선택되어 있습니다. AdGuard 및 기기 설정에 따라 DNS 서버를 설정합니다. [AdGuard VPN과의 통합](/adguard-for-android/features/integration-with-vpn)이 활성화되어 있거나 다른 SOCKS5 프록시가 활성화되어 있는 경우 **AdGuard DNS 필터링 미사용** 또는 사용자가 지정한 다른 서버에 연결됩니다. 다른 모든 경우에는 기기 설정에서 선택한 DNS 서버에 연결됩니다.

#### DNS 필터

이 섹션에서는 사용자 정의 DNS 필터 및 DNS 필터링 규칙을 추가할 수 있습니다. [filterlists.com](https://filterlists.com/)에서 더 많은 필터를 찾을 수 있습니다.
