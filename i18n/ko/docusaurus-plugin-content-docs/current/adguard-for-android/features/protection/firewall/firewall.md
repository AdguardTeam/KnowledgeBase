---
title: 방화벽
sidebar_position: 1
---

:::info

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Android용 AdGuard에 관한 내용입니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)하세요.

:::

방화벽 모듈은 **보호** 탭(화면 하단의 왼쪽 두 번째 아이콘)을 누른 다음 **방화벽**을 선택하면 이용할 수 있습니다.

이 기능은 기기에 설치된 특정 앱과 기기 일반에 대한 인터넷 액세스를 관리하는 데 도움이 됩니다.

![방화벽 \*mobile\_border](https://cdn.adtidy.org/blog/new/gdn94firewall.png)

### 글로벌 방화벽 규칙

이 섹션에서는 전체 기기에 대한 인터넷 액세스를 제어할 수 있습니다.

![글로벌 방화벽 규칙 \*mobile\_border](https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png)

이러한 규칙은 사용자 정의 규칙을 설정하지 않은 경우 기기의 모든 앱에 적용됩니다.

### 사용자 정의 방화벽 규칙

이 섹션에서는 특정 앱의 인터넷 액세스를 제어할 수 있습니다. 신뢰할 수 없는 앱에 대한 권한을 제한하거나 반대로 글로벌 방화벽 규칙을 우회하려는 앱의 차단을 해제할 수 있습니다.

1. **사용자 정의 방화벽 규칙**을 엽니다. **사용자 정의 규칙이 있는 앱** 아래에서 **앱 추가**를 탭합니다.

   ![사용자 정의 방화벽 규칙 \*mobile\_border](https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png)

2. 개별 규칙을 설정할 앱을 선택합니다.

   ![사용자 정의 방화벽 규칙에 앱 추가 \*mobile\_border](https://cdn.adtidy.org/blog/new/2db47fadding_app.png)

3. **사용 가능한 사용자 정의 규칙**에서 설정하려는 규칙을 선택하고 '+' 아이콘을 탭합니다. 이제 규칙이 **적용한 사용자 정의 규칙**에 표시됩니다.

   ![규칙 추가됨 \*mobile\_border](https://cdn.adtidy.org/blog/new/6fzjladded_rule.png)

4. 특정 유형의 연결을 차단해야 하는 경우 스위치를 왼쪽으로 옮깁니다. 허용하려면 스위치를 활성화한 상태로 두세요. **사용자 정의 규칙이 글로벌 규칙보다 우선합니다**. **글로벌 방화벽 규칙**에서 변경한 사항은 이 앱에 영향을 미치지 않습니다.

**사용자 정의 규칙**에서 규칙 또는 앱을 삭제하려면 왼쪽으로 스와이프합니다.

### Notifications

If enabled, this feature notifies you when an app is attempting to violate an applicable firewall rule, e.g. attempts to access mobile data from which it is blocked. You can turn notifications on and off for all apps or for each app separately.

Tap the notification to access the app’s Firewall settings, or temporary disable all Firewall rules for that app by tapping the corresponding button in the notification. You can also mute all Firewall notifications for the app by tapping the _Mute_ button in the notification for that app.

Note that if notifications for multiple apps would be displayed, they will be bundled into a single notification instead.
