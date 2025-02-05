---
title: 관리자를 위한 문서
sidebar_position: 5
---

이 페이지에서는 정책 및 환경설정 중앙 관리 기능에 대한 자세한 내용을 설명합니다.

## 1. MSI 다운로드 {#msi-download}

[AdGuard MSI x86](https://cdn.adtidy.org/distr/windows/AdGuard_x86.msi)을 다운로드하세요

[AdGuard MSI x64](https://cdn.adtidy.org/distr/windows/AdGuard_x64.msi)을 다운로드하세요.

## 2. 네트워크 설정 구성 {#settings-configuring}

Active Directory 도메인에 가입된 컴퓨터의 경우 정책 설정은 다음 경로의 `HKEY_LOCAL_MACHINE` 아래에 있는 레지스트리에 저장될 수도 있습니다: `Software\Policies\AdGuard\`.

지원되는 유일한 정책은 `LicenseKey`입니다. 이 정책이 설정되어 있으면 사용자가 인터페이스에 입력할 수 있는 내용보다 이 정책이 우선 적용됩니다. 이 라이선스 키는 라이선스 상태를 확인하는 데 사용됩니다.

## 3. AdGuard 서버를 사용할 수 있는지 확인하세요. {#servers-available}

AdGuard는 두 개의 호스트, 즉 `api.adguard.org`와 `filters.adtidy.org`에 연결됩니다. 두 서버를 모두 사용할 수 있는지 확인하세요.

## 4. MSI를 네트워크로 밀어내기 {#msi-push}

평소 SMS 또는 기타 도구를 사용하는 경우, 다른 설치 번들과 마찬가지로 해당 도구를 사용하여 AdGuard MSI를 푸시하세요.

또는 다음 명령을 사용하여 대상 시스템에서 MSI를 직접(그리고 백그라운드에서) 실행할 수 있습니다: `Msiexec /q /i AdGuard.msi`

업데이트를 롤아웃해야 하는 경우 다음 명령을 사용하세요: `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

관리자 권한으로 이러한 명령을 실행해야 합니다.

:::

Windows 7 컴퓨터에 AdGuard를 설치하려면 .NET 4 클라이언트 프로필이 설치되어 있는지 확인하세요(https://www.microsoft.com/en-us/download/details.aspx?id=24872).

:::note

MSI 파일에서 Windows용 AdGuard를 설치한 경우, AdGuard는 자동으로 업데이트되지 않습니다. 수동 업데이트를 허용하려면 다음 단계를 수행하세요.

- v7.16 이후 출시된 버전에서는 `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` 아래의 레지스트리에서 `ForbidCheckUpdates` 매개 변수를 삭제하거나 해당 값을 `NO`(대소문자 구분)로 설정합니다.

- v7.16 이하 버전에서는 x86 OS의 `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` 키 또는 x64 OS의 `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` 키의 `AllowCheckUpdates` 매개 변수를 `YES`(대소문자 구분)로 설정합니다. 이 매개변수에 다른 값을 입력하거나 값을 입력하지 않으면 자동 업데이트가 비활성화됩니다.

이러한 애플리케이션 설치 및 수동 업데이트는 권장되지 않으며 기술적인 문제를 일으킬 수 있습니다.

:::

## 5. 설치 테스트 {#installation-test}

대상 컴퓨터에서 AdGuard를 실행합니다. 라이선스 화면을 열어 지정된 라이선스를 사용하고 있는지 확인합니다. '상태 새로 고침'을 클릭하여 AdGuard가 라이선스 키를 확인하도록 해야 할 수도 있습니다.
