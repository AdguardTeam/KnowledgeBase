---
title: v8.0로 업데이트한 후 이전 버전으로 되돌리는 방법
sidebar_position: 12
---

:::info

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

Windows용 AdGuard v8.0의 변경 사항은 매우 중요하며, 새 버전이 마음에 드셨으면 좋겠습니다. 하지만 예상한 대로 일이 진행되지 않을 가능성도 있습니다. 8.0 버전은 최초의 nightly 버전이라는 점에서 매우 다릅니다. v8.0 인터페이스가 불편하거나 기능 또는 안정성 문제가 너무 많이 발생하는 경우, 설정과 함께 이전 버전으로 복원할 수 있습니다.

To ensure your settings are preserved during the whole process, it’s recommended to export them before upgrading to v8.0. If needed, you can then reinstall the version 7 and import back your saved settings.

다음 방법도 사용할 수 있습니다.

1. 8 버전으로 업그레이드한 후 `C:\ProgramData\Adguard\Backups` 폴더를 열고 `adguard_settings_7.21.5008.0-08-04-2025-13_42_15.276.zip`와 유사한 이름의 ZIP 파일을 찾습니다.
2. Copy this ZIP file somewhere outside of `C:\ProgramData\Adguard`, for example, to the desktop. This is important because it will be deleted in the next step.
3. **설정 제거** 옵션을 켜서 8.0 버전을 제거합니다.
4. Install the previous build. You can find the download link in the _Assets_ section [on GitHub](https://github.com/AdguardTeam/AdguardForWindows/releases/tag/v7.21.0-rc-2).
5. 시스템 트레이에서 7 버전을 종료하여 필터링을 중지합니다.
6. 첫 번째 단계에서 ZIP 파일의 내용을 압축을 풀고 다음 파일을 교체합니다.
   - `adguard.db` → `C:\ProgramData\Adguard`
   - `agflm_dns.db` and `agflm_standard.db` → `C:\ProgramData\Adguard\FLM`
7. AdGuard를 실행합니다.

모두 준비되었습니다!
