---
title: 브라우저에 의해 보호받는 페이지
sidebar_position: 5
---

:::info

브라우저만 보호하는 AdGuard 브라우저 확장 프로그램에 관한 문서입니다. 기기 전체를 보호하려면, [AdGuard 앱을 다운로드](https://adguard.com/download.html?auto=true)하세요.

:::

AdGuard 브라우저 확장 프로그램과 같은 웹 확장 프로그램을 사용 시, 이들의 접근이나 권한을 방지하는 특정 제한 도메인이 존재합니다. 결과적으로 광고 차단 확장 프로그램은 이러한 페이지의 콘텐츠를 수정하거나 상호 작용하는 것이 불가능합니다. 즉, 이러한 웹페이지에서는 광고 및 기타 성가신 요소를 차단할 수 없습니다.

## Chromium 브라우저 제한 사항

Google Chrome과 같은 Chromium 기반 브라우저들은 확장 프로그램이 접근할 수 없는 제한된 도메인 목록을 유지합니다. 다음은 이러한 도메인의 예시입니다.

- clients.google.com
- clients[0-9]+.google.com
- sb-ssl.google.com
- `chrome://`, `chrome-extension://`, 또는 `https://chrome.google.com/webstore/`로 시작하는 URL
- PDF 파일
- Javascript가 비활성화된 페이지
- 보안 경고 페이지
- 404 오류, 네트워크 오류 등의 오류 페이지
- `view-source:` 또는 `data:`로 시작하는 URL

## Firefox 브라우저 제한 사항

마찬가지로 Firefox 브라우저에는 확장 프로그램이 작동하지 않는 제한된 도메인 목록이 존재합니다. 이러한 제한된 도메인은 다음과 같습니다.

- accounts-static.cdn.mozilla.net
- accounts.firefox.com
- addons.cdn.mozilla.net --
- addons.mozilla.org
- api.accounts.firefox.com
- content.cdn.mozilla.net
- discovery.addons.mozilla.org
- install.mozilla.org
- oauth.accounts.firefox.com
- profile.accounts.firefox.com
- support.mozilla.org
- sync.services.mozilla.com

## Firefox에서 제한 사항 수정하기

고급 설정을 변경하는 것은 Firefox의 안정성과 보안에 영향을 미칠 수 있습니다. 이 기능은 고급 사용자에게만 권장됩니다. 이러한 위험성을 알고 있음에도 보호된 페이지에서 허용되지 않는 추가 기능을 활성화하려면 아래 단계를 따르세요.

1. 메뉴 버튼 → **애드온과 테마** → **확장 프로그램**을 클릭합니다.
2. 활성화하고 싶은 제한된 확장 프로그램을 클릭합니다 (이 상황에서는 AdGurad).
3. **제한 사항이 있는 사이트에서 실행** 항목에서 **허용**을 선택합니다.

또는 다른 방법을 사용할 수도 있습니다.

1. 새 탭을 열고 주소 표시줄에 **about:config**를 입력합니다.
2. **돌아가기** 버튼을 누릅니다. 경고창이 나타날 수도 있습니다. 이 경우 **위험 수락 및 계속**을 클릭합니다.
3. `extensions.webextensions.restrictedDomains`을 찾습니다. 이 설정을 찾을 수 없는 경우 직접 만들 수 있습니다. **Boolean** 유형을 선택하고 **+**를 클릭하여 추가하면 됩니다.
4. 해당 설정 옆에 있는 토글 버튼을 클릭하고 해당 값을 `false`로 변경합니다.
5. Firefox를 재시작합니다.

이 주제에 대한 더 자세한 정보는, [Mozilla의 지원 웹사이트](https://mzl.la/3POXoWi)를 참조하세요.
