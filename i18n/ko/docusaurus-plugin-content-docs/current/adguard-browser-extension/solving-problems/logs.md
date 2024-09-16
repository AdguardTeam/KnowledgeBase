---
title: 백그라운드 페이지에서 로그를 내보내는 방법
sidebar_position: 1
---

## 확장 프로그램의 백그라운드 페이지에서 로그를 내보내기

### Chrome

1. AdGuard 브라우저 확장 프로그램을 열고, 가능하다면 오류를 일으킨 작업을 반복합니다. 이 오류가 발생한 정확한 시간을 기록해 주세요.

2. `chrome://extensions`로 이동합니다.

3. _개발자 모드_를 활성화합니다.

   ![Developer mode \*border](https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png)

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

AdGuard is committed to protecting your privacy. We strictly follow our [Privacy Policy](https://adguard.com/privacy/browser-extension.html) and do not collect any private information about users. Before sending your logs to the support team, please review the file as it may contain additional information that you don’t want to share. If it contains such personal information, we recommend that you delete it first.

:::

Now that you have collected the logs, please follow these steps to submit them to our development team:

1. Report the bug on [GitHub](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose).
2. Send your archive with logs and playback time to `devteam@adguard.com` and add a link to your GitHub issue. You can also upload the archive to Google Drive and add the link to it instead of attaching the file.
