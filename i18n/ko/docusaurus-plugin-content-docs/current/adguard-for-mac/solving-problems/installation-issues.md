---
title: 설치 문제 해결
sidebar_position: 5
---

:::정보

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Mac용 AdGuard에 관한 내용입니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

## macOS Catalina에서 '설치 실패' 오류

설치하는 동안 다음과 같은 오류가 발생할 수 있습니다.

![설치 오류 화면](https://cdn.adtidy.org/content/kb/ad_blocker/mac/macerrorscreenEN.jpg)

문제를 해결하려면 다음 지침을 따르세요.

1. Mac을 재시동합니다.
2. Mac이 재시동될 때 시작 신호음이 들리면 바로 *Command(⌘) + R* 키를 길게 누릅니다. Apple 로고가 나타날 때까지 키를 누르고 있으면 컴퓨터가 복구 모드로 전환됩니다.
3. 상단 표시줄에서 *유틸리티* → *터미널*을 선택하고 다음 명령을 실행합니다: `csrutil disable`.
4. Mac을 재시동하고 관리자 프로필에 로그인합니다.
5. Finder 창을 열고 상단 바에서 *이동* → *폴더로 이동*을 선택한 다음 `~/private/`를 입력합니다.
6. *tmp*라는 폴더를 만들고 비밀번호를 입력합니다.
7. AdGuard 설치를 시작합니다.

설치가 완료되면 위의 지침에 따라 복구 모드에서 Mac을 재시동하고 터미널에서 `csrutil enable` 명령을 실행하여 시스템 보호를 활성화합니다.
