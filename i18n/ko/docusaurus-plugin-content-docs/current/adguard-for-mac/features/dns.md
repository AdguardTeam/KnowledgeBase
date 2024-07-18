---
title: DNS
sidebar_position: 4
---

:::info

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Mac용 AdGuard에 관한 내용입니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)하세요.

:::

## DNS 보호

**DNS 섹션**에는 여러 설정이 있는 **DNS 보호**라는 하나의 기능이 포함되어 있습니다.

- 제공자
- 필터
- 차단 목록
- 허용 목록

![DNS](https://cdn.adtidy.org/content/kb/ad_blocker/mac/dns.png)

**DNS 보호**를 활성화하면 DNS 트래픽이 AdGuard에 의해 관리됩니다.

### 제공자

**제공업체**에서 DNS 트래픽을 암호화하고 광고 및 추적기를 차단할 DNS 서버를 선택할 수 있습니다. AdGuard DNS를 사용하는 것이 좋습니다. 고급 구성을 위해 왼쪽 하단에 있는 `+` 아이콘을 클릭하여 [사설 AdGuard DNS 서버](https://adguard-dns.io/welcome.html)를 설정하거나 사용자 정의 서버를 추가할 수 있습니다.

### 필터

DNS 필터는 DNS 수준에서 광고 차단 규칙을 적용합니다. 이러한 필터링은 일반 광고 차단보다 정확도가 떨어지지만 전체 도메인을 차단하는 데 특히 유용합니다. DNS 필터를 추가하려면 `+`를 클릭합니다. [filterlists.com](https://filterlists.com/)에서 더 많은 DNS 필터를 찾을 수 있습니다.

### 차단 목록

이 목록의 도메인은 차단됩니다. 도메인을 추가하려면 `+`를 클릭합니다. [특수 구문](https://adguard-dns.io/kb/general/dns-filtering-syntax/)을 사용하여 도메인 이름 또는 DNS 필터링 규칙을 추가할 수 있습니다.

차단 목록을 내보내거나 가져오려면 콘텍스트 메뉴를 엽니다.

### 허용 목록

이 목록의 도메인은 필터링되지 않습니다. 도메인을 추가하려면 `+`를 클릭합니다. 허용 목록을 내보내거나 가져오려면 콘텍스트 메뉴를 엽니다.
