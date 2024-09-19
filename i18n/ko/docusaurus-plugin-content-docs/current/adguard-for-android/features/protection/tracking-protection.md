---
title: 추적 보호
sidebar_position: 2
---

:::info

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Android용 AdGuard에 관한 내용입니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)하세요.

:::

추적 보호 모듈은 **보호** 탭(화면 하단의 왼쪽 두 번째 아이콘)을 누른 다음 **추적 보호**를 선택하면 이용할 수 있습니다.

**추적 보호**(이전의 **스텔스 모드**)는 웹사이트가 IP 주소, 브라우저 및 운영 체제 정보, 화면 해상도, 방문했거나 리디렉션된 페이지 등 사용자에 대한 정보를 수집하지 못하도록 차단합니다. 또한 웹사이트가 브라우저를 표시하거나 개인 설정 및 사용자 환경설정을 저장하거나 다음 방문 시 사용자를 인식하는 데 사용하는 쿠키를 차단할 수도 있습니다.

![추적 보호 \*mobile\_border](https://cdn.adtidy.org/blog/new/y5fuztracking_protection.png)

**추적 보호**에는 사전 구성된 세 가지 개인정보 보호 수준(**표준 수준**, **높은 수준**, **궁극의 수준**)과 한 가지 사용자 정의 수준(**사용자 정의**)이 있습니다.

사전 구성된 수준의 활성 기능은 다음과 같습니다.

1. **표준 수준**

   a. **추적기 차단**. 이 기능은 온라인 카운터 및 웹 분석 도구로부터 사용자를 보호하기 위해 **AdGuard 추적 보호 필터**를 사용합니다.

   b. _웹사이트에 추적하지 않도록 요청하기_. 이 기능은 사용자가 방문하는 웹사이트에 [Global Privacy Control](https://globalprivacycontrol.org/) 및 [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) 신호를 전송하여 웹 앱이 사용자의 활동 추적을 비활성화하도록 요청합니다.

   c. **X-Client-Data 헤더 제거** 이 기능은 Google Chrome이 버전 및 수정 사항에 대한 정보를 Google 도메인(DoubleClick 및 GoogleAnalytics 포함)으로 전송하는 것을 방지합니다.

2. **높은 수준**

   a. **추적기 차단**. 이 기능은 온라인 카운터 및 웹 분석 도구로부터 사용자를 보호하기 위해 **AdGuard 추적 보호 필터**를 사용합니다.

   b. **URL에서 추적 매개변수 제거**. 이 기능은 **AdGuard URL 추적 필터**를 사용하여 페이지 URL에서 `utm_*` 및 `fb_ref`와 같은 추적 매개 변수를 제거합니다.

   c. **검색어 숨기기**. 이 기능은 검색 엔진에서 방문한 웹사이트에 대한 검색어를 숨깁니다.

   d. _웹사이트에 추적하지 않도록 요청하기_. 이 기능은 사용자가 방문하는 웹사이트에 [Global Privacy Control](https://globalprivacycontrol.org/) 및 [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) 신호를 전송하여 웹 앱이 사용자의 활동 추적을 비활성화하도록 요청합니다.

   e. **서드파티 쿠키 자동 파괴**. 이 기능은 서드파티 쿠키의 유지시간을 180분으로 제한합니다

   :::caution

   이 기능은 강제 만료 후 모든 타사 쿠키를 삭제합니다. 여기에는 소셜 네트워크 또는 기타 타사 서비스를 통한 로그인도 포함됩니다. 일부 웹사이트에 주기적으로 재로그인해야 하거나 기타 쿠키 관련 문제가 발생할 수 있습니다. 추적 쿠키만 차단하려면 **표준** 보호 수준을 사용하세요.

   :::

   f. **X-Client-Data 헤더 제거** 이 기능은 Google Chrome이 버전 및 수정 사항에 대한 정보를 Google 도메인(DoubleClick 및 GoogleAnalytics 포함)으로 전송하는 것을 방지합니다.

3. **궁극의 수준**(이전에는 최고 수준으로 알려졌음)

   a. **추적기 차단**. 이 기능은 온라인 카운터 및 웹 분석 도구로부터 사용자를 보호하기 위해 **AdGuard 추적 보호 필터**를 사용합니다.

   b. **URL에서 추적 매개변수 제거**. 이 기능은 **AdGuard URL 추적 필터**를 사용하여 페이지 URL에서 `utm_*` 및 `fb_ref`와 같은 추적 매개 변수를 제거합니다.

   c. **검색어 숨기기**. 이 기능은 검색 엔진에서 방문한 웹사이트에 대한 검색어를 숨깁니다.

   d. _웹사이트에 추적하지 않도록 요청하기_. 이 기능은 사용자가 방문하는 웹사이트에 [Global Privacy Control](https://globalprivacycontrol.org/) 및 [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) 신호를 전송하여 웹 앱이 사용자의 활동 추적을 비활성화하도록 요청합니다.

   e. **서드파티 쿠키 자동 파괴**. 이 기능은 서드파티 쿠키의 유지시간을 180분으로 제한합니다.

   :::caution

   이 기능은 강제 만료 후 모든 타사 쿠키를 삭제합니다. 여기에는 소셜 네트워크 또는 기타 타사 서비스를 통한 로그인도 포함됩니다. 일부 웹사이트에 주기적으로 재로그인해야 하거나 기타 쿠키 관련 문제가 발생할 수 있습니다. 추적 쿠키만 차단하려면 **표준** 보호 수준을 사용하세요.

   :::

   f. **WebRTC 차단**. 이 기능은 프록시나 VPN을 사용하더라도 실제 IP 주소가 유출될 수 있는 WebRTC를 차단합니다.

   g. **Push API 차단**. 이 기능은 브라우저가 서버로부터 푸시 메시지를 수신하지 못하도록 차단합니다.

   h. **Location API 차단**. 이 기능은 브라우저가 사용자의 GPS 데이터에 액세스하여 위치를 파악하는 것을 방지합니다.

   i. **제3자로부터 리퍼러 숨기기**. 이 기능은 사용자가 방문한 웹사이트를 제3자가 알 수 없도록 차단합니다. 초기 페이지의 URL이 포함된 HTTP 헤더를 숨기고 설정할 수 있는 기본 또는 사용자 지정 헤더로 바꿉니다.

   j. **사용자-에이전트 숨기기**. 이 기능은 일반적으로 브라우저의 이름과 버전, 운영 체제 및 언어 설정을 포함하는 사용자-에이전트 헤더에서 식별 정보를 제거합니다.

   k. **X-Client-Data 헤더 제거** 이 기능은 Google Chrome이 버전 및 수정 사항에 대한 정보를 Google 도메인(DoubleClick 및 GoogleAnalytics 포함)으로 전송하는 것을 방지합니다.

**추적 보호**에서 개별 설정을 조정하고 사용자 지정 구성을 만들 수 있습니다. 모든 설정에는 해당 역할을 이해하는 데 도움이 되는 설명이 있습니다. [Read more about what the various _Tracking protection_ settings do](/general/stealth-mode) and utilize them cautiously, as some may interfere with the functionality of websites and browser extensions.
