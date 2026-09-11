---
title: macOS에서 실행 문제
sidebar_position: 6
---

:::정보

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Mac용 AdGuard에 관한 내용입니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

때때로 macOS로 인해 AdGuard의 네트워크 확장 모듈이 손상되어 앱을 사용할 수 없는 경우가 있습니다. 이 경우 사용 중인 OS 버전에 따라 다음 지침 중 하나를 따라야 합니다.

## macOS 11 이상에서 실행 문제

Big Sur 및 Monterey 운영 체제에서 Mac용 AdGuard를 실행하는 데 문제가 있는 경우 이 지침을 사용하세요.

1. Mac을 재부팅하고 [복구 모드](https://support.apple.com/en-us/HT201255)로 들어갑니다.
1. SIP를 비활성화합니다(**유틸리티** 메뉴에서 **터미널**을 실행하고 `csrutil disable`을 입력합니다).
1. Mac을 재부팅합니다.
1. AdGuard 앱을 닫고 **터미널**을 연 다음 `systemextensionsctl 재설정`을 입력합니다.
1. Mac을 재부팅하고 복구 모드로 들어갑니다.
1. SIP를 활성화합니다(**유틸리티** 메뉴에서 **터미널**을 실행하고 `csrutil enable`을 입력합니다).
1. AdGuard 앱을 실행하고 보호 기능을 활성화합니다.

## macOS 10에서 실행 문제

Sierra, Mojave 및 Catalina 운영 체제에서 Mac용 AdGuard를 실행하는 데 문제가 있는 경우 이 지침을 따르세요.

1. **터미널**을 열고 `ls -@lOae /private/var/db/KernelExtensionManagement` 명령을 입력합니다.
1. 스크린샷과 같이 `restricted` 플래그가 없는지 확인합니다. ![명령어 예시 *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/restricted-flag.jpg)
1. 복구 모드에서 Mac을 재부팅합니다.
1. **유틸리티** → **터미널**을 엽니다.
1. `csrutil disable`를 입력합니다.
1. 관리자 비밀번호를 입력합니다.
1. Mac을 재부팅합니다.
1. **터미널**을 열고 다음 명령을 입력합니다: `sudo chflags restricted /private/var/db/KernelExtensionManagement`.
1. 복구 모드에서 Mac을 재부팅합니다.
1. **유틸리티** → **터미널**을 열고 `csrutil enable`를 입력한 후 관리자 비밀번호를 입력합니다. 그 다음 Mac을 재부팅합니다.
1. AdGuard 보호를 활성화합니다.
