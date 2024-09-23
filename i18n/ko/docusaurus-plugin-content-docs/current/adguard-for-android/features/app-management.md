---
title: 앱 관리
sidebar_position: 2
---

:::info

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Android용 AdGuard에 관한 내용입니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)하세요.

:::

**앱 관리** 모듈은 _앱 관리_ 탭(화면 하단 왼쪽에서 세 번째 아이콘)을 탭하여 액세스할 수 있습니다. 이 섹션에서는 기기에 설치된 모든 앱에 대한 권한 및 필터링 설정을 관리할 수 있습니다.

![앱 관리 \*mobile\_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

앱을 탭하면 해당 설정을 관리할 수 있습니다.

- AdGuard를 통해 트래픽 라우팅
- 이 앱에서 광고 및 추적기 차단 (**앱 콘텐츠 필터링**)
- HTTPS 트래픽 필터링(비브라우저 앱의 경우, [시스템 스토어에 AdGuard의 CA 인증서를 설치](/adguard-for-android/solving-problems/https-certificate-for-rooted/)해야 함(루팅된 기기에서 사용 가능))
- 통합 모드에서 지정한 프록시 서버 또는 AdGuard VPN을 통해 라우팅

![Chrome에서 앱 관리 \*mobile\_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

컨텍스트 메뉴에서 앱 통계로 이동할 수 있습니다.

![Chrome의 앱 관리. 컨텍스트 메뉴 \*mobile\_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### '문제가 없는' 앱과 '문제가 있는' 앱

Most apps work correctly when filtered. 이러한 앱의 경우, 해당 앱의 트래픽은 AdGuard를 통해 라우팅되고 기본적으로 필터링됩니다.

다운로드 관리자, 라디오, UID 1000 및 1001이 있는 시스템 앱(예: Google Play 서비스)과 같은 일부 앱은 '문제가 있는' 앱으로 AdGuard를 통해 라우팅할 때 잘못 작동할 수 있습니다. 그렇기 때문에 모든 앱을 라우팅하거나 필터링하려고 할 때 다음과 같은 경고가 표시될 수 있습니다.

![모든 앱 라우팅 대화상자 \*mobile\_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

기기에 설치된 모든 앱이 제대로 작동하도록 하려면 문제가 없는 앱만 AdGuard를 통해 라우팅할 것을 강력히 권장합니다. 필터링에 권장되지 않는 앱의 전체 목록은 **설정** → **일반** → **고급** → **로우 레벨 설정** → **보호** → **제외된 앱**에서 확인할 수 있습니다.
