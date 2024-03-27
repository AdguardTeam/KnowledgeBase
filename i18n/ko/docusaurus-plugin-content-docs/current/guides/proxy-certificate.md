---
title: 프록시 인증서를 설치하는 방법
sidebar_position: 2
---

Our desktop apps, AdGuard for Windows and AdGuard for Mac, can be used as a proxy for other devices. This means that you can route other devices’ traffic through AdGuard (all traffic or traffic of specific apps and browsers).

:::note

These devices must be in the same network as the PC or Mac with AdGuard.

:::

HTTP traffic will be filtered in any case, but for AdGuard to be able to filter HTTPS traffic you need to manually install the AdGuard certificate on the connected device.

## 인증서를 다운로드하고 설치하는 방법

Depending on the operating system of the device whose traffic you want to filter, follow one of these instructions:

### Windows {#windows}

1. Note the IP address of your desktop computer with AdGuard installed.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. On the same computer with AdGuard, follow this link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. **다운로드** 버튼을 클릭합니다. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Windows device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On that device, press **Win**, type `Manage computer certificates` and press **Enter**.

1. On the *Certificates — Local Computer* page, find the *Trusted Root Certification Authorities* → *Certificates* folder.

1. *인증서* 폴더를 마우스 오른쪽 버튼으로 클릭하고 **모든 작업** → **가져오기**를 클릭합니다.

1. *인증서 가져오기 마법사* 페이지에서 **다음**을 클릭합니다.

1. **찾아보기**를 클릭하여 인증서를 가져옵니다.

1. Navigate to the **cert.cer** certificate file, select it, click **Open**, then **Next**.

1. **모든 인증서를 다음 스토어에 배치** 확인란을 선택합니다.

1. Make sure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

1. **마침**을 클릭합니다.

1. Press **Win**, then open **Settings**.

1. **네트워크 & 인터넷** → **프록시**를 선택합니다.

1. *자동 감지 설정* 끄기.

1. *프록시 서버 사용* 탭에서 **설정**을 클릭합니다.

1. 토글을 켭니다. For **Proxy IP address**, type the IP address of your desktop computer that you noted in step 1. **포트**, 데스크톱 AdGuard 앱의 네트워크 설정에서 선택한 포트를 입력합니다.

1. **저장**을 클릭합니다.

### Mac {#mac}

1. AdGuard가 설치된 데스크톱 컴퓨터의 IP 주소를 기록해 두세요.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. **다운로드** 버튼을 클릭합니다. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Mac device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. 다운로드한 인증서 파일을 두 번 클릭합니다.

1. 관리자 비밀번호를 입력한 다음 **키체인 수정**을 클릭합니다.

1. Go to **Spotlight** (the search icon in the top right corner), type in `Keychain Access`, and then select **Keychain Access** from the search results.

1. *시스템*에서 추가한 인증서를 강조 표시합니다.

1. Right-click it and select **Get Info** from the context menu.

1. *신뢰*를 확장하여 인증서에 대한 신뢰 정책을 표시합니다.

1. *보안 소켓 계층(SSL)*에서 **항상 신뢰**를 선택합니다.

1. Open **System Preferences** → **Network** and select the active connection at the top.

1. **세부 정보...** 를 클릭하고 **프록시** 탭으로 이동합니다.

1. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, type the IP address of your computer that you noted in step 1. **포트** 필드에 AdGuard 데스크톱 앱의 네트워크 설정에서 선택한 포트를 입력합니다.

### Android {#android}

1. AdGuard가 설치된 데스크톱 컴퓨터의 IP 주소를 기록해 두세요.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. AdGuard가 설치된 컴퓨터에서 웹 브라우저를 사용하여 다음 링크를 따르세요: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. **다운로드** 버튼을 클릭합니다. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Android device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Locate and tap the previously downloaded **cert.cer** certificate to open the file and follow the instructions to install the certificate.

1. Android devices do not trust certificates by default, so there will be a warning — you can ignore it. On some phones you may be asked to enter your device password. Do so, then press **OK**. The certificate will be installed.

1. 활성 Wi-Fi 네트워크의 고급 설정을 엽니다.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your desktop computer you noted in step 1. **프록시 포트**, AdGuard 데스크톱 앱의 네트워크 설정에서 선택한 포트를 입력합니다.

### iOS {#ios}

1. AdGuard가 설치된 데스크톱 컴퓨터의 IP 주소를 기록해 두세요.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. AdGuard가 설치된 컴퓨터에서 웹 브라우저를 사용하여 다음 링크를 따르세요: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. **다운로드** 버튼을 클릭합니다. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the iOS device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On your iOS device, open **Settings** → **Profile Downloaded** and tap **Install** in the top right corner. 비밀번호를 입력하고 설치를 확인합니다. **완료**를 탭합니다.

1. **설정** → **일반** → **정보** → **인증서 신뢰 설정**으로 이동합니다. 옆의 스위치를 활성화합니다 *Adguard Personal CA*. 이제 인증서가 설치되었습니다.

1. 해당 장치에서 활성 Wi-Fi 네트워크의 고급 설정을 엽니다.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, type the IP address of your computer you noted in step 1. **프록시 포트**, AdGuard 데스크톱 앱의 네트워크 설정에서 선택한 포트를 입력합니다.
