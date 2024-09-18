---
title: 일반적인 설치 프로그램 오류
sidebar_position: 6
---

:::정보

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

이 문서에는 Windows용 AdGuard 설치 중 발생할 수 있는 가장 일반적인 오류와 이를 해결하는 방법이 포함되어 있습니다.

### 오류 5: 액세스 거부 {#error-5}

This error message appears when required permissions haven't been granted. AdGuard VPN 설치 프로그램에 설치 프로세스를 제대로 완료하는 데 필요한 권한이 없는 데는 여러 가지 이유가 있을 수 있습니다. 다음 단계를 시도해 보세요.

- Temporarily disable your antivirus. 일부 바이러스 백신은 설치를 방해할 수 있습니다.

- 다른 설치 폴더를 선택하세요. 현재 설치 폴더에 일부 액세스 제한이 있을 수 있습니다. 또한 외장 드라이브, 가상 드라이브 등을 선택하지 않았는지 확인하세요.

- 컴퓨터를 재부팅합니다. 때때로 권한 문제는 일시적이며 PC를 다시 시작하여 해결할 수 있습니다.

### 오류 112: 디스크가 꽉 찼습니다. 오류 1632: 임시 폴더가 꽉 찼거나 액세스할 수 없습니다. {#error-112}

이 두 가지 오류는 매우 유사한 해결책을 가진 서로 다른 두 가지 오류입니다. As their titles suggest, AdGuard installer didn't find enough disk space to complete the installation. 문제를 해결하기 위해 시도할 수 있는 몇 가지 방법이 있습니다:

- AdGuard를 설치하려고 했던 드라이브에서 일부 프로그램을 제거하거나 불필요한 파일을 삭제하세요.

- Malwarebytes의 무료 소프트웨어인 [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/)를 다운로드, 설치 및 실행하세요. It will, among other things, clean your system from all kinds of extra "leftover" files that remain after incorrectly uninstalled programs and such. 디스크 공간을 정리하는 데 도움이 됩니다.

- 컴퓨터를 재부팅합니다. 임시 파일은 디스크 공간을 상당히 많이 차지할 수 있으므로 PC를 재시작하는 것이 가장 안정적인 방법으로 임시 파일을 제거할 수 있습니다.

### 오류 1601: Windows 설치 프로그램에 액세스할 수 없습니다. {#error-1601}

You could say this is a particular subcategory of Error 1603. 가능한 해결책은 비슷합니다:

- Microsoft 설치 관리자 서비스를 시작하고 다시 등록합니다. 약간의 작업이 필요합니다.

    1) *Win + R* 를 누르고 **services.msc**를 입력합니다. 2) 목록에서 *Windows Installer*를 찾아 두 번 클릭합니다. 3) *서비스 상태* 아래에 있는 *시작* 버튼을 누르고 *확인*을 누릅니다. 서비스 상태가 **실행 중**이면 먼저 *중지* 를 클릭한 다음 *시작*을 클릭해야 합니다. 4) *Win + R*를 누르고 ***msiexec /unregister*** 를 입력하고 Enter를 누른 다음 *를 누르고*를 Enter를 누릅니다. 5) *Win + R* 를 다시 누르고 ***msiexec /regserver*** 를 입력하고 Enter를 누릅니다. *Enter*

- PC를 재부팅하고 설치를 처음부터 다시 시작하세요. 때로는 그것만으로도 문제를 해결할 수 있습니다.

### 오류 1602: 사용자에 의해 취소됨 {#error-1602}

이 오류 코드가 표시되었다면 어떤 식으로든 설치 프로세스를 수동으로 중단했을 가능성이 있습니다. 할 수 있는 일은

- 설치 프로그램 창을 닫지 마세요. 설치가 완료되면 자동으로 닫힙니다.

- 설치 중에 대화창이 나타나면 '예'를 눌러 설치 프로그램에 필요한 권한을 부여합니다. '아니요'를 클릭하면 설치가 취소됩니다.

- 설치 프로세스가 진행되는 동안에는 다른 프로세스를 시작하지 마세요.

### 오류 1603: 설치 중 치명적인 오류 {#error-1603}

이 오류는 실제보다 더 무섭게 들립니다. 실제로 이것은 여러 가지 원인이 있을 수 있는 다소 일반적인 오류이며 일부는 쉽게 수정할 수 있습니다. 다음 해결 방법을 시도해 보세요:

- *Win* 키를 누르고 *명령 프롬프트* 를 검색하여 실행합니다. 거기에서 `sfc /scannow를` 입력하고 *Enter* 키를 누릅니다.

- 다른 설치 폴더를 선택하세요. 현재 설치 폴더에 일부 액세스 제한이 있을 수 있습니다. 또한 외장 드라이브, 가상 드라이브 등을 선택하지 않았는지 확인하세요.

- 전용 [제거 도구를](../../installation#advanced) 사용하여 AdGuard를 제거한 다음 설치를 반복하세요.

- Microsoft 설치 관리자 서비스를 시작하고 다시 등록합니다. 약간의 작업이 필요합니다.

    1) *Win + R을* 누르고 ***services.msc***. 2) 목록에서 *Windows Installer*를 찾아 두 번 클릭합니다. 3) *서비스 상태* 아래에 있는 *시작* 버튼을 누르고 *확인*을 누릅니다. 서비스 상태가 **실행 중**이면 먼저 *중지* 를 클릭한 다음 *시작*을 클릭해야 합니다. 4) *Win + R*를 누르고 ***msiexec /unregister*** 를 입력하고 Enter를 누른 다음 *를 누르고*를 Enter를 누릅니다. 5) *Win + R* 를 다시 누르고 ***msiexec /regserver*** 를 입력하고 Enter를 누릅니다. *Enter*

- 설치를 위해 드라이브에 대한 전체 권한을 획득합니다. 파일 위치에 대한 전체 권한이 없기 때문에 오류 1603이 발생할 수 있습니다. 또한 다른 솔루션만큼 쉽지 않습니다:

    1) *파일 탐색기를* 열고 설치 위치가 포함된 드라이브를 마우스 오른쪽 버튼으로 클릭한 다음 *속성을* 선택합니다. 2) *보안* 탭으로 이동하여 *편집을* 클릭합니다. 3) *시스템을* 한 번 클릭하고 *시스템에 대한 권한의* 모든 항목의 *허용* 상자가 선택되어 있는지 확인합니다(선택 가능한 경우). *관리자에* 대해서도 동일한 확인을 수행합니다. 4) *확인을* 클릭하여 *속성* 대화 상자로 돌아갑니다. 그런 다음 *고급을* 클릭합니다. 5) *권한 변경을* 클릭합니다. 6) *권한* 탭에서 *관리자를* 두 번 클릭합니다. 7) *적용 대상* 필드에서 *이 폴더, 하위 폴더 및 파일을* 선택하고 사용 가능한 모든 *기본 권한을* 확인합니다. 그런 다음 *확인을* 누릅니다. 8) *시스템에서* 위와 동일한 작업(7번 항목부터)을 수행합니다. 9) *확인을* 끝까지 클릭합니다. AdGuard를 다시 설치해 보세요.

### 오류 1618: 다른 설치가 이미 진행 중입니다. {#error-1618}

이 오류는 여러 개의 AdGuard 설치 관리자가 동시에 실행될 때 발생합니다. 이 오류가 발생하면 어떻게 해야 하나요?

- PC를 재부팅하고 설치 프로그램을 다시 시작합니다. 컴퓨터를 다시 시작하면 설치 프로그램의 모든 복사본을 포함하여 진행 중인 모든 프로세스가 중지됩니다.

- Don't make multiple clicks on the installer even if it doesn't start right away. 설치 프로그램 UI를 표시하는 데 몇 초가 걸릴 수 있습니다.

### 오류 1638: 이 제품의 다른 버전이 이미 설치되어 있습니다. {#error-1638}

이전에 이미 AdGuard를 설치하셨을 가능성이 높습니다.

- 컴퓨터에 AdGuard가 이미 설치되어 있는지 확인하세요. *Win* 키를 누르고 다음을 입력하면 됩니다. ***AdGuard***.

- Maybe there're some leftover files from a previous AdGuard installation. 전용 [제거 도구를](../../installation#advanced) 사용하여 AdGuard를 제거한 다음 설치를 반복하세요.

### 기타 오류 {#other}

위에 나열되지 않은 오류가 발생한 경우 저희가 직접 해결할 수 있을 수도 있습니다. 하지만 이를 위해서는 사용자의 로그 파일이 필요합니다. 다음 단계를 수행하세요:

- Find and archive the **AdGuard installation logs** as it is described in [this article](../installation-logs).

- Find and save to disk the **Event Viewer** logs. [이 문서에서는](../system-logs) 이를 수행하는 방법을 설명합니다.

- 이전 두 단계의 모든 파일을 지원팀 이메일( **support@adguard.com** )로 보내주시고 메시지 본문에 문제를 설명해 주세요. 기술 지원 담당자가 최대한 빨리 답변해 드립니다.
