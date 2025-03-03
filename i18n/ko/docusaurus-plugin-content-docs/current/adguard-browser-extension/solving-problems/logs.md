---
title: 백그라운드 페이지에서 로그를 내보내는 방법
sidebar_position: 1
---

## 확장 프로그램의 백그라운드 페이지에서 로그를 내보내기

### Chrome

1. AdGuard 브라우저 확장 프로그램을 열고, 가능하다면 오류를 일으킨 작업을 반복합니다. 이 오류가 발생한 정확한 시간을 기록해 주세요.

2. `chrome://extensions`로 이동합니다.

3. _개발자 모드_를 활성화합니다.

    ![개발자 모드 \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png)

4. `background.html`을 클릭합니다.

    ![Background \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png)

5. _콘솔_ 탭을 엽니다.

    ![콘솔 탭 \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6. 상황에 맞는 메뉴를 열어 _다른 이름으로 저장_을 선택합니다.

    ![다른 이름으로 저장 \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

### Firefox

1. AdGuard 브라우저 확장 프로그램을 열고, 가능하다면 오류를 일으킨 작업을 반복합니다. 이 오류가 발생한 정확한 시간을 기록해 주세요.

2. `about:addons`로 이동합니다.

3. _부가 기능 디버그_를 누릅니다.

    ![부가 기능 디버그 \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4. _검사_를 누릅니다.

    ![검사 \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5. _콘솔_ 탭으로 이동합니다.

    ![콘솔 \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6. _모든 메세지를 파일에 저장_을 클릭합니다.

    ![저장 \*border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

## 로그 전송하기

:::note

AdGuard는 사용자의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 당사는 [개인정보취급방침](https://adguard.com/privacy/browser-extension.html)을 준수하며 사용자에 대한 어떠한 개인정보도 수집하지 않습니다. 지원팀에 로그를 보내기 전에 파일에 전달하고 싶지 않은 추가 정보가 포함되어 있는지 확인하세요. 이러한 정보가 포함되어 있는 경우, 먼저 삭제하는 것이 좋습니다.

:::

로그를 저장했다면, 다음 단계에 따라 개발팀에 제출해 주세요.

1. [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose)에 버그를 제보하세요.
2. 로그와 재생 시간이 포함된 ZIP 파일을 `devteam@adguard.com`로 보내고 GitHub 이슈에 링크를 추가합니다. 파일을 첨부하는 대신 Google 드라이브에 ZIP 파일을 업로드하고 링크를 추가할 수도 있습니다.
