---
title: 보호 기능을 활성화할 수 없는 문제
sidebar_position: 2
---

:::정보

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Mac용 AdGuard에 관한 내용입니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

어떤 이유로 AdGuard 보호를 활성화할 수 없는 경우 다음 단계를 수행하세요.

1. 메뉴 표시줄에서 AdGuard 아이콘을 클릭하고 *고급* → *설정 재설정...* → *AdGuard 종료...*로 이동합니다.

2. Spotlight 검색에서 터미널을 입력하고 `sudo rm -R /Library/Application\ Support/com.adguard.adguard`를 입력한 후 실행합니다.

3. 컴퓨터를 다시 시작합니다.

4. 터미널을 다시 열고 `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.adguard/`를 입력한 후 실행합니다. 다음과 같은 메시지가 표시됩니다: `해당 파일 또는 디렉터리가 없습니다`.

5. AdGuard를 시작하고 메시지가 표시되면 로그인 정보를 입력합니다.
