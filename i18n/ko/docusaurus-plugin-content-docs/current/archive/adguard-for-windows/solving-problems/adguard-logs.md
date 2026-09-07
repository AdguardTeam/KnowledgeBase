---
title: AdGuard 로그 수집하는 방법
sidebar_position: 3
---

:::info

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

:::note

Data and/or files provided in logs are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

잠재적으로 발생할 수 있는 다양한 문제를 분석하고 진단하기 위해 AdGuard 지원 서비스에는 AdGuard 로그 파일이 필요할 수 있습니다. 이 파일에는 소프트웨어에서 발생한 모든 오류에 대한 기록이 있습니다. AdGuard 로그를 수집하여 지원 팀에 보내는 방법을 살펴보겠습니다.

:::note

AdGuard는 사용자의 개인정보를 보호하기 위해 최선을 다하고 있습니다. We strictly follow our [Privacy Policy](https://adguard.com/privacy/windows.html) and do not collect any private information about users. 지원팀에 로그를 보내기 전에 파일에 전달하고 싶지 않은 추가 정보가 포함되어 있는지 확인하세요. 이러한 정보가 포함되어 있는 경우, 먼저 삭제하는 것이 좋습니다.

:::

### Debug logs {#debug-logs}

1. AdGuard 설정을 엽니다. Go to the _General Settings_ section, scroll down to the bottom of the screen, and switch the _Logging Level_ to _Debug_.

   ![Debug logging level \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-1.png)

2. Reproduce the issue.

   지원 팀이 빨리 문제를 해결할 수 있도록 문제 재현 시간을 지정해 주십시오.

3. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   어느 폴더에서나 압축된 로그파일을 저장합니다.

4. **Important**: after exporting the logs, set the logging level back to _Default_. _Debug_ logging level will slow down the application.

5. Send the archive to the AdGuard support service at **support@adguard.com**, describe the problem and don't forget to mention the time when you reproduced the issue.

### Trace logs {#trace-logs}

Sometimes support team members may ask you to send _trace_ logs. 추적 로그를 수집하는 방법은 다음과 같습니다.

1. Stop AdGuard by right-clicking the AdGuard icon in the tray menu and choosing _Exit AdGuard_:

   ![Exit AdGuard \*mobile](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-3.png)

   서비스를 실행 상태로 두지 마십시오.

   ![Stop AdGuard Service \*mobile_border](https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_logs_4.png)

2. Open the console (type `cmd` in the start panel).

3. Run the application with the command `C:\"Program Files"\Adguard\Adguard.exe /trace` regardless of Windows bitness if you have installed AdGuard for Windows v7.16 or later.

Windows용 AdGuard의 이전 버전을 사용하는 경우 64비트 Windows를 사용하는 경우 C:\"Program Files (x86)"\Adguard\Adguard.exe /trace 명령으로 애플리케이션을 실행하고, 32비트를 사용하는 경우 C:\"Program Files"\Adguard\Adguard.exe /trace 명령으로 애플리케이션을 실행합니다.

1. Reproduce the issue.

   지원 팀이 빨리 문제를 해결할 수 있도록 문제 재현 시간을 지정해 주십시오.

2. Export the collected logs using the _Export Logs_ button.

   ![Export logs \*border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/adg-logs-2.png)

   로그파일은 커도 문제가 없습니다. 문제를 해결하기 위해 정보가 많을수록 좋습니다.
