---
title: 프록시 인증서를 설치하는 방법
sidebar_position: 2
---

데스크톱 앱인 Windows용 AdGuard 및 Mac용 AdGuard는 다른 기기의 프록시로 사용할 수 있습니다. 즉, 다른 기기의 트래픽(전체 또는 특정 앱 및 브라우저의 트래픽)을 AdGuard를 통해 라우팅할 수 있습니다.

:::note

이러한 기기는 AdGuard가 설치된 PC 또는 Mac과 동일한 네트워크에 있어야 합니다.

:::

HTTP 트래픽은 어떤 경우에도 필터링되지만, AdGard가 HTTPS 트래픽을 필터링할 수 있으려면 연결된 기기에 AdGuard 인증서를 수동으로 설치해야 합니다.

## 인증서를 다운로드하고 설치하는 방법

트래픽을 필터링하려는 기기의 운영 체제에 따라 다음 지침 중 하나를 따르세요.

### Windows {#windows}

1. Note the IP address of your computer with AdGuard installed.

1. AdGuard 보호 기능이 활성화되어 있는지 확인하세요. Windows 컴퓨터의 경우, 설정의 **네트워크** 탭에서 **AdGuard를 HTTP 프록시로 사용** 확인란을 선택합니다. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. AdGuard가 설치된 동일한 컴퓨터에서 다음 링크를 따르세요: [http://local.adguard.org/cert](http://local.adguard.org/cert)

1. **다운로드** 버튼을 클릭합니다. 다운로드가 시작되지 않으면 다른 브라우저(예: Firefox)를 사용해 보세요.

1. 다운로드한 **cert.cer** 파일을 AdGuard를 통해 트래픽을 라우팅하려는 Windows 기기로 전송합니다. USB 케이블, 블루투스 또는 클라우드 서비스를 사용하여 이 작업을 수행할 수 있습니다.

1. 해당 기기에서 **Win**을 누르고 `컴퓨터 인증서 관리`를 입력한 다음 **Enter** 키를 누릅니다.

1. *인증서 — 로컬 컴퓨터* 페이지에서 *신뢰할 수 있는 루트 인증 기관* → *인증서* 폴더를 찾습니다.

1. *인증서* 폴더를 마우스 오른쪽 버튼으로 클릭하고 **모든 작업** → **가져오기**를 클릭합니다.

1. *인증서 가져오기 마법사* 페이지에서 **다음**을 클릭합니다.

1. **찾아보기**를 클릭하여 인증서를 가져옵니다.

1. **cert.cer** 인증서 파일로 이동하여 파일을 선택하고 **열기**를 클릭한 후 **다음**을 클릭합니다.

1. **모든 인증서를 다음 스토어에 배치** 확인란을 선택합니다.

1. *인증서 저장소* 필드에 *신뢰할 수 있는 루트 인증 기관*이 표시되는지 확인하고 **다음**을 클릭합니다.

1. **마침**을 클릭합니다.

1. **Win**을 누른 다음 **설정**을 엽니다.

1. **네트워크 & 인터넷** → **프록시**를 선택합니다.

1. *자동 감지 설정* 끄기.

1. *프록시 서버 사용* 탭에서 **설정**을 클릭합니다.

1. 토글을 켭니다. For **Proxy IP address**, type the IP address of your computer that you noted in step 1. **포트**, 데스크톱 AdGuard 앱의 네트워크 설정에서 선택한 포트를 입력합니다.

1. **저장**을 클릭합니다.

### Mac {#mac}

1. Note the IP address of your computer with installed AdGuard.

1. AdGuard 보호 기능이 활성화되어 있는지 확인하세요. Windows 컴퓨터의 경우, 설정의 **네트워크** 탭에서 **AdGuard를 HTTP 프록시로 사용** 확인란을 선택합니다. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. 웹 브라우저를 사용하여 이 링크를 클릭하세요: [http://local.adguard.org/cert](http://local.adguard.org/cert)

1. **다운로드** 버튼을 클릭합니다. 다운로드가 시작되지 않으면 다른 브라우저(예: Firefox)를 사용해 보세요.

1. 다운로드한 **cert.cer** 파일을 AdGuard를 통해 트래픽을 라우팅하려는 Mac 기기로 전송합니다. USB 케이블, 블루투스 또는 클라우드 서비스를 사용하여 이 작업을 수행할 수 있습니다.

1. 다운로드한 인증서 파일을 두 번 클릭합니다.

1. 관리자 비밀번호를 입력한 다음 **키체인 수정**을 클릭합니다.

1. **Spotlight**(오른쪽 상단의 검색 아이콘)로 이동하여 `키체인 액세스`를 입력한 다음 검색 결과에서 **키체인 액세스**를 선택합니다.

1. *시스템*에서 추가한 인증서를 강조 표시합니다.

1. 인증서를 우클릭하고 컨텍스트 메뉴에서 **정보 가져오기**를 선택합니다.

1. *신뢰*를 확장하여 인증서에 대한 신뢰 정책을 표시합니다.

1. *보안 소켓 계층(SSL)*에서 **항상 신뢰**를 선택합니다.

1. **시스템 환경설정** → **네트워크**를 열고 상단에서 활성 연결을 선택합니다.

1. **세부 정보...** 를 클릭하고 **프록시** 탭으로 이동합니다.

1. 두 개의 확인란을 선택합니다: *웹 프록시(HTTP)* 및 *보안 웹 프록시(HTTPS)*. **서버** 필드에 1단계에서 기록한 컴퓨터의 IP 주소를 입력합니다. **포트** 필드에 AdGuard 데스크톱 앱의 네트워크 설정에서 선택한 포트를 입력합니다.

### Android {#android}

1. Note the IP address of your computer with installed AdGuard.

1. AdGuard 보호 기능이 활성화되어 있는지 확인하세요. Windows 컴퓨터의 경우, 설정의 **네트워크** 탭에서 **AdGuard를 HTTP 프록시로 사용** 확인란을 선택합니다. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. AdGuard가 설치된 컴퓨터에서 웹 브라우저를 사용하여 다음 링크를 따르세요: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. **다운로드** 버튼을 클릭합니다. 다운로드가 시작되지 않으면 다른 브라우저(예: Firefox)를 사용해 보세요.

1. 다운로드한 **cert.cer** 파일을 AdGuard를 통해 트래픽을 라우팅하려는 Android 기기로 전송합니다. USB 케이블, 블루투스 또는 클라우드 서비스를 사용하여 이 작업을 수행할 수 있습니다.

1. 이전에 다운로드한 **cert.cer** 인증서를 찾아서 탭하여 파일을 열고 지침에 따라 인증서를 설치합니다.

1. Android 기기는 기본적으로 인증서를 신뢰하지 않으므로 경고가 표시되지만 무시해도 됩니다. 일부 휴대폰에서는 기기 비밀번호를 입력하라는 메시지가 표시될 수 있습니다. 기기 비밀번호를 입력하고 **OK**를 누릅니다. 인증서가 설치됩니다.

1. 활성 Wi-Fi 네트워크의 고급 설정을 엽니다.

1. **프록시 유형**을 **수동**으로 변경합니다. For **Proxy hostname**, enter the noted IP address of your computer you noted in step 1. **프록시 포트**, AdGuard 데스크톱 앱의 네트워크 설정에서 선택한 포트를 입력합니다.

### iOS {#ios}

1. Note the IP address of your computer with installed AdGuard.

1. AdGuard 보호 기능이 활성화되어 있는지 확인하세요. Windows 컴퓨터의 경우, 설정의 **네트워크** 탭에서 **AdGuard를 HTTP 프록시로 사용** 확인란을 선택합니다. On a Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. AdGuard가 설치된 컴퓨터에서 웹 브라우저를 사용하여 다음 링크를 따르세요: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. **다운로드** 버튼을 클릭합니다. 다운로드가 시작되지 않으면 다른 브라우저(예: Firefox)를 사용해 보세요.

1. 다운로드한 **cert.cer** 파일을 AdGuard를 통해 트래픽을 라우팅하려는 iOS 기기로 전송합니다. USB 케이블, 블루투스 또는 클라우드 서비스를 사용하여 이 작업을 수행할 수 있습니다.

1. iOS 기기에서 **설정** → **프로필이 다운로드됨**을 열고 오른쪽 상단에서 **설치**를 탭합니다. 비밀번호를 입력하고 설치를 확인합니다. **완료**를 탭합니다.

1. **설정** → **일반** → **정보** → **인증서 신뢰 설정**으로 이동합니다. 옆의 스위치를 활성화합니다 *Adguard Personal CA*. 이제 인증서가 설치되었습니다.

1. 해당 장치에서 활성 Wi-Fi 네트워크의 고급 설정을 엽니다.

1. **프록시 유형**을 **수동**으로 변경합니다. **프록시 호스트 이름**에 1단계에서 기록한 컴퓨터의 IP 주소를 입력합니다. **프록시 포트**, AdGuard 데스크톱 앱의 네트워크 설정에서 선택한 포트를 입력합니다.
