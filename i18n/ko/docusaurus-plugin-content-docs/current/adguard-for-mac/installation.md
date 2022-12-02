---
title: '설치 방법/ 제거 방법'
sidebar_position: 2
---

## 시스템 요구 사항

**운영 체제 버전**: macOS 10.13 (64 비트) 이상

**RAM**: 2 GB 이상

**브라우저**: Safari, Chrome, Opera, Yandex.Browser, Firefox 및 기타 macOS 호환 브라우저

**디스크 여유 공간**: 120 MB

## 설치 방법

컴퓨터에 Mac용 AdGuard를 설치하려면 브라우저를 열고 주소 표시 줄에 _adguard.com_을 입력한 후 열리는 페이지에서 **다운로드**를 누릅니다.

![앱 다운로드](https://cdn.adguard.com/content/kb/ad_blocker/mac/1.jpg)

_AdguardInstaller.dmg_가 다운로드될 때까지 기다렸다가 Dock 패널에 다운로드된 파일 목록에서 해당 아이콘을 두 번 클릭합니다.

![두 번 클릭하여 파일 열기](https://cdn.adguard.com/content/kb/ad_blocker/mac/installation_open_the_file.jpg)

바탕 화면에 AdGuard 아이콘이 표시될 것입니다. 설치 앱을 열려면 아이콘을 클릭합니다. 다음 열린 설치 창에서 AdGuard 아이콘을 두 번 클릭합니다.

![AdGuard 아이콘을 두 번 클릭하세요](https://cdn.adguard.com/content/kb/ad_blocker/mac/3.jpg)

AdGuard가 처음 시작되면 운영 체제에서 이 프로그램이 인터넷에서 다운로드되었음을 경고합니다. **열기**를 클릭합니다.

![열기를 클릭하세요](https://cdn.adguard.com/content/kb/ad_blocker/mac/4.jpg)

다음에 **Install**를 클릭합니다.

![설치를 클릭하세요](https://cdn.adguard.com/public/Adguard/kb/installation/Mac/en/5.png)

설치 프로그램이 필요한 파일을 다운로드할 때까지 기다립니다.

![필요한 파일이 다운로드될 때까지 기다리세요](https://cdn.adguard.com/content/kb/ad_blocker/mac/6.jpg)

프로그램을 사용하시려면 macOS 계정의 관리자 암호가 필요합니다. 대화 상자에 암호를 입력하고 **확인**를 누릅니다.

![비밀번호 입력](https://cdn.adguard.com/content/kb/ad_blocker/mac/7.jpg)

이제 사용자의 필요에 맞게 보호를 설정할 수 있습니다. 프로그램 기능의 단계별 설정을 조정하려면 '네 알겠습니다'을 클릭합니다. 이 단계를 건너 뛰려면 '아니요 하지않겠습니다'를 누릅니다.

![보호 설정](https://cdn.adguard.com/content/kb/ad_blocker/mac/installation-wizard.jpg)

맥북에 AdGuard가 설치되었습니다!

## 제거 방법

### 일반 제거 방법
Finder 앱을 엽니다.

![폴더 열기](https://cdn.adguard.com/public/Adguard/En/Articles/howtodelete/finder.png)

응용 프로그램 섹션으로 이동하여 AdGuard를 우클릭하고 **휴지통으로 이동**을 선택합니다.

![AdGuard를 휴지통으로 이동](https://cdn.adguard.com/content/kb/ad_blocker/mac/11.jpg)

### 고급 제거 방법

**Use this instruction only if you know what you are doing or if our support service specifically recommended you the 'advanced uninstall'. Also, do all the steps from the 'regular uninstall first'.**

* After that, delete following AdGuard files:
    * /Library/Application Support/AdGuard Software/com.adguard.mac.adguard (폴더)
    * ~/Library/Preferences/com.adguard.mac.adguard.plist (파일)
    * ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac (폴더)
    * /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist (파일)
    * /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist (파일)
    * /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log (파일)
    * /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log (파일)

**이 파일을 삭제하시려면** 터미널 앱을 열고 다음 명령을 입력하고 실행하십시오.

`sudo rm -R "/Library/Application Support/AdGuard Software/com.adguard.mac.adguard"` `rm -R "$HOME/Library/Application Support/com.adguard.mac.adguard"` `rm $HOME/Library/Preferences/com.adguard.mac.adguard.plist` `rm -R "$HOME/Library/Group Containers/TC3Q7MAJXF.com.adguard.mac"` `find "$HOME/Library/Application Support" -name "com.adguard.browser_extension_host.nm.json" -delete` `sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-pac.daemon.plist` `sudo rm /Library/LaunchDaemons/com.adguard.mac.adguard.adguard-tun-helper.daemon.plist` `sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-pac.daemon.log` `sudo rm /Library/Logs/com.adguard.mac.adguard/com.adguard.mac.adguard.adguard-tun-helper.daemon.log`

* '활동 모니터' 앱을 실행합니다.
* 검색 도구를 사용하여 **cfprefsd** 프로세스를 찾습니다.

![활동 모니터 실행](https://cdn.adguard.com/content/kb/ad_blocker/mac/22.jpg)

* 사용자로 실행중인 프로세스를 중지합니다 (루트에서 실행되는 프로세스 제외). 프로세스를 중지하려면 프로세스를 클릭한 후 왼쪽 상단의 X를 클릭합니다. 대화 창에서 종료를 합니다.

![확인](https://cdn.adguard.com/content/kb/ad_blocker/mac/33.jpg)

이제 AdGuard가 맥북에서 제거되었습니다.
