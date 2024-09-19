---
title: How to collect Windows system logs
sidebar_position: 5
---

:::정보

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드하세요](https://agrd.io/download-kb-adblock).

:::

:::note

시스템 로그에 제공된 데이터 및/또는 파일은 [AdGuard 개인정보취급방침에](https://adguard.com/en/privacy.html) 따라 처리됩니다.

:::

잠재적으로 발생할 수 있는 다양한 문제를 분석하고 진단하기 위해 AdGuard 지원 서비스에는 Windows 시스템 로그 파일이 필요할 수 있습니다. Windows event logs contain records about all errors that occur with the installed software, including AdGuard. Windows 로그를 수집하여 지원 팀에 보내는 방법을 살펴보겠습니다.

1. *Win+R*을 함께 누릅니다.

1. 열린 창에 `eventvwr`을 입력하고 *확인*을 클릭합니다.

    ![실행창 *mobile](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png)

1. 그다음에는 이벤트 뷰어 창이 나타납니다.

    ![이벤트 뷰어 *border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png)

    필요한 파일을 저장하려면 다음 지침을 따르세요.

    - *애플리케이션* 열기: *이벤트 뷰어(로컬)* → * Windows 로그* → *애플리케이션*.

    - *애플리케이션*을 우클릭하고 드롭다운 메뉴에서 *다른 이름으로 모든 이벤트 저장…*을 선택합니다.

    - 이름과 저장할 위치를 선택하고 *저장*을 클릭합니다. 그다음에는 *언어 설정에 대한 정보 표시*를 선택합니다. *영어* 옆에 있는 확인란을 선택해야 합니다. *확인*을 클릭합니다.

    - *시스템* 열기: *이벤트 뷰어(로컬)* → * Windows 로그* → *시스템*.

    - *시스템*을 우클릭하고 드롭다운 메뉴에서 *다른 이름으로 모든 이벤트 저장…*을 선택합니다.

    - 저장할 위치를 선택하고 이름을 입력한 후 *저장*을 클릭합니다. 그다음에는 *언어 설정에 대한 정보 표시*를 선택합니다. *한국어* 옆의 확인란을 선택하고 *확인*을 클릭합니다.

**support@adguard.com**으로 두 개의 파일을 보내 주십시오.

:::note

AdGuard는 사용자의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 당사는 [개인정보취급방침을](https://adguard.com/privacy/windows.html) 엄격하게 준수하며 사용자에 대한 어떠한 개인 정보도 수집하지 않습니다. 지원팀에 로그를 보내기 전에 파일에 전달하고 싶지 않은 추가 정보가 포함되어 있는지 확인하세요. 이러한 정보가 포함되어 있는 경우, 먼저 삭제하는 것이 좋습니다.

:::
