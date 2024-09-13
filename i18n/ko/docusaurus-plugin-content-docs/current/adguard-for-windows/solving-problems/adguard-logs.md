---
title: How to collect AdGuard logs
sidebar_position: 3
---

:::정보

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드하세요](https://agrd.io/download-kb-adblock).

:::

:::note

로그에 제공된 데이터 및/또는 파일은 [AdGuard 개인정보취급방침에](https://adguard.com/en/privacy.html) 따라 처리됩니다.

:::

잠재적으로 발생할 수 있는 다양한 문제를 분석하고 진단하기 위해 AdGuard 지원 서비스에는 AdGuard 로그 파일이 필요할 수 있습니다. These files contain records about errors and other events that occur with the software. AdGuard 로그를 수집하여 지원 팀에 보내는 방법을 살펴보겠습니다.

:::note

AdGuard는 사용자의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 당사는 [개인정보취급방침을](https://adguard.com/privacy/windows.html) 엄격하게 준수하며 사용자에 대한 어떠한 개인 정보도 수집하지 않습니다. 지원팀에 로그를 보내기 전에 파일에 전달하고 싶지 않은 추가 정보가 포함되어 있는지 확인하세요. 이러한 정보가 포함되어 있는 경우, 먼저 삭제하는 것이 좋습니다.

:::

### 디버그 로그 {#debug-logs}

1. AdGuard 설정을 엽니다. Go to the *General Settings* section, scroll down to the bottom of the screen, and switch the *Logging Level* to *Debug*.

    ![디버그 로깅 레벨 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

1. 문제를 재현합니다.

    지원 팀이 빨리 문제를 해결할 수 있도록 문제 재현 시간을 지정해 주십시오.

1. Export the collected logs using the *Export Logs* button.

    ![로그 내보내기 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    어느 폴더에서나 압축된 로그파일을 저장합니다.

1. **Important**: after exporting the logs, set the logging level back to *Default*. *디버그* 로깅 레벨이 켜져 있으면 프로그램이 느려집니다.

1. 문제를 재현한 시간을 알려 주고 자세히 설명하여 AdGuard 지원 팀에 **support@adguard.com**으로 압축된 로그파일을 보내 주세요.

### 추적 로그 {#trace-logs}

가끔 지원 팀은 *추적 로그*를 보내달라고 요청할 수 있습니다. 추적 로그를 수집하는 방법은 다음과 같습니다.

1. 트레이 메뉴에서 AdGuard 아이콘을 마우스 오른쪽 버튼으로 클릭하고 *AdGuard 종료를* 선택하여 AdGuard를 종료합니다.

    ![AdGuard 종료 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

    서비스를 실행 상태로 두지 마십시오.

    ![AdGuard 서비스 중지 *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

1. 콘솔을 엽니다(시작 패널에 `cmd` 입력).

1. Windows용 AdGuard v7.16 이상을 설치한 경우 Windows 버전에 관계없이 `C:\"Program Files"\Adguard\Adguard.exe /trace` 명령으로 애플리케이션을 실행합니다.

Windows용 AdGuard의 이전 버전을 사용하는 경우 64비트 Windows를 사용하는 경우 C:\"Program Files (x86)"\Adguard\Adguard.exe /trace 명령으로 애플리케이션을 실행하고, 32비트를 사용하는 경우 C:\"Program Files"\Adguard\Adguard.exe /trace 명령으로 애플리케이션을 실행합니다.

1. 문제를 재현합니다.

    지원 팀이 빨리 문제를 해결할 수 있도록 문제 재현 시간을 지정해 주십시오.

1. Export the collected logs using the *Export Logs* button.

    ![로그 내보내기 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

    로그파일은 커도 문제가 없습니다. 문제를 해결하기 위해 정보가 많을수록 좋습니다.
