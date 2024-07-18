---
title: Windows 로그 수집하는 방법
sidebar_position: 5
---

:::정보

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

To analyze and diagnose different problems that may potentially arise, the AdGuard support service might need Windows system log files. 이 파일에는 소프트웨어에서 발생한 모든 오류에 대한 기록이 있습니다. Windows 로그를 수집하여 지원 팀에 보내는 방법을 살펴보겠습니다.

1. Press *Win + R*

1. In the window that appears type in `eventvwr` and click *OK*:

    ![Run window *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. Event Viewer window appears as shown in the picture.

    ![Event viewer *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    To save files that we need, do the following:

    - Open *Application*: *Event Viewer (Local)* → *Windows Logs* → *Application*.

    - Right-click *Application* and in the drop-down menu select *Save All Events As...*

    - 이름과 저장할 위치를 선택하고 *저장*을 클릭합니다. 그다음에는 *언어 설정에 대한 정보 표시*를 선택합니다. You need to check the checkbox next to *English*. *확인*을 클릭합니다.

    - Open *System*: *Event Viewer (Local)* → *Windows Logs* → *System*.

    - Right-click *System* and in the drop-down menu select *Save All Events As...*

    - 저장할 위치를 선택하고 이름을 입력한 후 *저장*을 클릭합니다. 그다음에는 *언어 설정에 대한 정보 표시*를 선택합니다. *한국어* 옆의 확인란을 선택하고 *확인*을 클릭합니다.

Please send the two files that you've recently saved to **support@adguard.com**.
