---
title: 관리자를 위한 문서
sidebar_position: 5
---

이 페이지에서는 정책 및 환경설정 중앙 관리 기능에 대한 자세한 내용을 설명합니다.

## 1. Download the MSI {#msi-download}

Download the [AdGuard MSI x86](https://agrd.io/adguard_setup86_msi)

Download the [AdGuard MSI x64](https://agrd.io/adguard_setup64_msi)

## 2. Configure the settings for your network {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. 이 정책이 설정되어 있으면 사용자가 인터페이스에 입력할 수 있는 내용보다 이 정책이 우선 적용됩니다. 이 라이선스 키는 라이선스 상태를 확인하는 데 사용됩니다.

## 3. Make sure that AdGuard servers are available {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. 두 서버를 모두 사용할 수 있는지 확인하세요.

## 4. Push the MSI out to your network {#msi-push}

평소 SMS 또는 기타 도구를 사용하는 경우, 다른 설치 번들과 마찬가지로 해당 도구를 사용하여 AdGuard MSI를 푸시하세요.

Otherwise, you can run the MSI on the target machine directly (and silently) with this command:
`Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command:
`Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::note

관리자 권한으로 이러한 명령을 실행해야 합니다.

:::

Windows 7 컴퓨터에 AdGuard를 설치하려면 .NET 4 클라이언트 프로필이 설치되어 있는지 확인하세요(https://www.microsoft.com/en-us/download/details.aspx?id=24872).

:::note

MSI 파일에서 Windows용 AdGuard를 설치한 경우, AdGuard는 자동으로 업데이트되지 않습니다. 수동 업데이트를 허용하려면 다음 단계를 수행하세요.

- In versions released after v7.16, delete the `ForbidCheckUpdates` parameter or set its value to `NO` (case-insensitive) in the registry under `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard`.

- In v7.16 and earlier versions, set to `YES` (case-insensitive) the `AllowCheckUpdates` parameter for the `HKEY_LOCAL_MACHINE\SOFTWARE\Adguard` key on x86 OS or `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` key on x64 OS. 이 매개변수에 다른 값을 입력하거나 값을 입력하지 않으면 자동 업데이트가 비활성화됩니다.

이러한 애플리케이션 설치 및 수동 업데이트는 권장되지 않으며 기술적인 문제를 일으킬 수 있습니다.

:::

## 5. Test your installation {#installation-test}

대상 컴퓨터에서 AdGuard를 실행합니다. 라이선스 화면을 열어 지정된 라이선스를 사용하고 있는지 확인합니다. '상태 새로 고침'을 클릭하여 AdGuard가 라이선스 키를 확인하도록 해야 할 수도 있습니다.
