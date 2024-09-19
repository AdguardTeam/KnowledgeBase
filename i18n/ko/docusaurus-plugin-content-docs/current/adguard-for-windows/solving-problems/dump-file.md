---
title: 덤프 파일을 만드는 방법
sidebar_position: 8
---

:::정보

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드하세요](https://agrd.io/download-kb-adblock).

:::

:::note

덤프 파일에 제공된 데이터 및/또는 파일은 [AdGuard 개인정보 보호정책에](https://adguard.com/en/privacy.html) 따라 처리됩니다.

:::

사용자가 AdGuard를 사용하는 동안 발생할 수 있는 잠재적인 문제의 원인을 진단하려면 지원팀에서 프로세스 덤프 파일이 필요할 수 있습니다. 덤프 파일은 개발자가 특정 기간 동안 애플리케이션에서 실행된 프로세스를 확인할 수 있도록 도와줍니다. 아래에서 PC에서 덤프 파일을 수집하는 방법에 대한 지침을 확인할 수 있습니다.

1. **Ctrl + Shift + Esc를** 누르고 **작업 관리자를** 클릭합니다.

1. 상단 메뉴 표시줄에서 **세부 정보를** 선택합니다.

    ![작업 관리자 세부 정보](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/details_en.png)

1. 덤프 파일을 만들려는 프로세스를 마우스 오른쪽 버튼으로 클릭합니다(예: 지원팀에서 `Adguard.exe에` 대한 덤프를 만들라고 요청할 수 있음).

1. 드롭다운 메뉴에서 **덤프 파일 생성을** 클릭합니다.

1. 파일이 성공적으로 생성되었습니다!

    ![덤프 파일 만들기](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/create_dump_file_en.png)

덤프 파일을 생성한 후 파일 위치로 이동합니다. 덤프 파일이 생성된 직후 덤프 파일이 들어 있는 폴더를 열라는 메시지가 표시됩니다. 그렇지 않으면 다음 폴더에서 찾을 수 있습니다. **%tmp%** 폴더에서 찾을 수 있습니다. 생성된 덤프 파일(`.DMP`)의 이름은 이전 단계에서 선택한 프로세스의 이름과 동일합니다. 파일이 상당히 크므로 지원팀에 보내기 전에 압축하여 아카이브 파일로 만들어 주세요.

:::note

AdGuard for Windows has two running processes, `Adguard.exe` and `AdguardSvc.exe`. Therefore, it's necessary to create a separate dump file for each process.

:::

![AdGuard 프로세스](https://cdn.adtidy.org/public/Adguard/kb/Windows_dump/processes_en.png)

지원팀에 덤프 파일을 보내실 때 AdGuard 애플리케이션 로그도 첨부해 주시면 문제를 더 잘 해결할 수 있습니다. [Here](../adguard-logs) you can check the instructions on how to get the log file.
