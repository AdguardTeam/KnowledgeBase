---
title: 피싱 및 멀웨어 보호
sidebar_position: 3
---

피싱과 멀웨어는 여전히 흔한 문제입니다. 디지털 보안을 강화하기 위해 AdGuard 제품에 특수 필터를 통합하여 악성 및 피싱 웹사이트로부터 사용자를 보호합니다. 현재까지 1,500만 개 이상의 사이트를 분류하고 피싱 및 멀웨어로 알려진 150만 개 웹사이트의 데이터베이스를 구축했습니다. AdGuard는 이 데이터베이스를 사용하여 사용자가 방문하는 웹사이트를 확인하여 온라인 위협으로부터 사용자를 보호합니다.

:::note

당사는 사용자가 방문하는 웹사이트에 대한 정보를 엄격하게 수집하거나 사용하지 않습니다.

:::

## How does AdGuard check websites?

사용자가 웹사이트를 방문할 때마다 로컬 클라이언트는 해시 및 해시 접두사 형태로 AdGuard 백엔드 서버와 정보를 교환합니다. 이 교환을 기반으로 로컬 클라이언트는 잠재적으로 위험한 웹사이트 데이터베이스에 해당 웹사이트가 등재되어 있는지 여부를 결정합니다. 하지만 앱과 확장 프로그램은 조금 다르게 검사됩니다.

### 앱

AdGuard는 페이지와 페이지에 로드된 모든 개체를 검사하여 최상의 보호 기능을 제공합니다. AdGuard는 전체 URL이 아닌 해시 접두사를 사용하여 URL과 도메인 이름을 확인하므로, 당사 서버는 사용자가 방문한 웹사이트에 대한 정보를 보유하지 않으며 사용자의 개인 정보는 완전히 안전합니다. AdGuard 서버는 해시 접두사와 일치하는 모든 가능한 주소 목록으로 앱의 쿼리에 응답합니다. 해시 일치를 기반으로 잠재적 위협이 감지되면 해당 웹사이트에 대한 액세스가 즉시 차단됩니다.

![DNS 경고](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_diana.png)

### 확장 프로그램

브라우저 확장 프로그램은 전체 URL이 아닌 도메인 이름만 확인할 수 있습니다. 또한 하위 쿼리를 확인할 수 없습니다. 즉, 페이지에 잠재적으로 악성일 수 있는 요소가 있는 경우 페이지 자체가 안전한 도메인의 것이라도 해당 요소가 로드됩니다. 확장 프로그램으로는 보호할 수 없습니다. 또한 수행되는 검사는 비동기식으로, 즉 페이지가 로드되는 동시에 수행되므로 멀웨어도 로드될 수 있다는 점에 유의해야 합니다.

## AdGuard 제품에서 피싱 및 멀웨어 보호 설정하기

- **Windows의 경우**: *설정* 메뉴에서 *브라우징 보안* 모듈을 활성화합니다.

![Windows에서 브라우징 보안](https://cdn.adtidy.org/content/kb/ad_blocker/general/windows.png)

- **Mac의 경우**: *설정에서* *보안* 모듈을 활성화합니다.

![Mac의 보안](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_mac.png)

- **Android의 경우**: *보호* 탭에서 *브라우징 보안을* 켭니다.

![Android의 브라우징 보안 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_android.png)

- **iOS의 경우**: 별도의 모듈은 없지만 *Safari 보호* → *필터* → *안전* 을 클릭하고 사용 가능한 필터를 활성화합니다. 또한 *DNS 보호*를 활성화하고 AdGuard DNS 서버 중 하나를 선택합니다.

![iOS의 보안 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_ios.jpg)

- **브라우저 확장 프로그램의 경우**: *설정* 탭에서 *피싱 및 멀웨어 보호를* 사용 설정합니다. 보호 기능을 강화하려면 *필터* → *보안*으로 이동하여 사용 가능한 필터를 활성화하세요.

![피싱 및 멀웨어 보호](https://cdn.adtidy.org/content/kb/ad_blocker/general/extension_protection.png)

- **비공개 AdGuard DNS의 경우:** *보안* 아래의 *서버 설정*에서 멀웨어 보호를 사용 설정합니다.

![DNS의 보안](https://cdn.adtidy.org/content/kb/ad_blocker/general/bs_dns.png)

## 차단 대상

사용자 인증 정보를 도용하려는 피싱 및 사기성 웹사이트로부터 보호하는 필터와 데이터 손실, 정보 유출 또는 기기 손상으로 이어질 수 있는 멀웨어를 배포하는 것으로 알려진 웹사이트에 대한 액세스를 차단하는 두 가지 기본 필터를 유지 관리합니다. 이 필터는 다양한 사기 및 사기 수법이 포함된 웹사이트로부터 사용자를 보호합니다. 자세한 내용은 이 [위키백과 문서](https://en.wikipedia.org/wiki/Phishing)를 참조하세요.

## 필터 유지 관리

AdGuard는 피싱 및 멀웨어 웹사이트에 대한 광범위한 데이터베이스를 유지 관리하며 새로운 위협이 발견되면 정기적으로 자동으로 업데이트됩니다. AdGuard는 신뢰할 수 있는 고품질의 다양한 출처(공개 및 타사)로부터 정보를 수집하여 위험 사이트에 대한 공통 데이터베이스로 통합합니다.

의심스러운 사이트에 대한 불만을 자동으로 분석하고 데이터베이스를 최신 상태로 유지하며 오탐을 정리하고 향후 이를 방지하기 위한 메커니즘을 구현하는 데 많은 시간을 할애합니다.

### Want to help?

피싱 또는 멀웨어 웹사이트를 발견하면 <support@adguard.com>으로 신고해 주세요.

### False-positive responses

때때로 일부 비악성 웹사이트가 AdGuard의 필터에 추가되는 경우가 있습니다. 오탐 비율을 줄이기 위해 최선을 다하고 있지만 여전히 오탐이 발생하고 있습니다. AdGuard에서 이러한 동작이 발생하면 지원팀( <support@adguard.com>)으로 오탐을 신고해 주세요.

## 웹사이트가 의심스러운 경우

특정 웹사이트가 위험하다고 생각되면 먼저 [보안 확인 도구](https://reports.adguard.com/welcome.html)를 사용해 보세요.

![보안 확인](https://cdn.adtidy.org/content/kb/ad_blocker/general/site_warning.png)
