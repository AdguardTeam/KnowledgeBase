---
title: 피드백 보내기
sidebar_position: 4
---

## 문제 신고 또는 기능 제안

Linux용 AdGuard에서 버그를 발견했거나 새로운 기능을 제안하려면 다음 방법을 따르세요.

- [피드백 양식](https://surveys.adguard.com/en/adguard_linux/form.html)을 작성합니다.
- [GitHub 문제](https://github.com/AdguardTeam/AdGuardCLI/issues/new/choose)를 생성합니다. 하지만 그 전에 [리포지토리](https://github.com/AdguardTeam/AdGuardCLI/issues?q=is%3Aissue)에서 비슷한 문제가 있는지 확인하세요.

:::note

새로운 기능이나 버그 수정의 구현을 지원하려면 GitHub에서 투표할 수 있습니다. 투표하려면 이모티콘으로 반응하기만 하면 됩니다.

:::

## 로그 수집 및 전송

1. 디버그 로깅 활성화:

   `adguard-cli config set log_level debug`

2. 문제를 재현하고 정확한 발생 시간을 기억해 보세요.

3. 잠시 기다렸다가 로그를 내보냅니다.

   `adguard-cli export-logs`

   보관된 로그 파일은 기본적으로 앱 폴더에 다운로드되며 로그 경로가 콘솔에 기록됩니다.

4. 로그 파일을 <devteam@adguard.com>로 보내세요. 오류가 발생한 시간을 지정하고 GitHub 이슈 링크 또는 번호(제목 옆에 #번호로 표시됨)를 첨부합니다. 또는 로그 파일을 Google Drive에 업로드하여 <devteam@adguard.com>와 공유할 수 있습니다. GitHub 문제에 파일 링크를 첨부하세요.

5. 로깅 모드를 다시 `info`로 전환합니다.

   `adguard-cli config set log_level info`
