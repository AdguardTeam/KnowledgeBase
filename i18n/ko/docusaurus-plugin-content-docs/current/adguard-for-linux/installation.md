---
title: 설치, 설정 및 제거
sidebar_position: 2
---

## Linux용 AdGuard 설치

AdGuard를 설치하려면 다음을 입력합니다.

정식 버전

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

베타 버전

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

나이틀리 버전

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

필요한 경우 관리자 비밀번호를 입력합니다.

`y`를 눌러 `/usr/local/bin`에 실행 파일에 대한 링크를 생성하고 설치가 완료될 때까지 기다립니다.

:::note

`gpg` 도구를 사용하여 서명을 확인하고 AdGuard의 공식 버전인지 확인할 수 있습니다. [GitHub에서 자세히 보기](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## 라이선스 활성화

Linux용 AdGuard에는 [AdGuard 라이선스](https://adguard.com/license.html)가 필요합니다. 아직 라이선스가 없는 경우, 로그인하거나 계정을 만들어 14일 무료 체험판을 이용할 수 있습니다. 이미 라이선스가 있는 경우, 로그인하여 활성화하세요.

로그인하거나 계정을 만들려면 다음을 입력합니다.

```
adguard-cli activate
```

라이선스를 재설정하려면 다음을 입력합니다.

```
adguard-cli reset-license
```

라이선스 정보를 보려면 다음을 입력합니다.

```
adguard-cli license
```

## 초기 설정

AdGuard를 시작하고 실행하려면 초기 설정을 완료하세요. 여기에는 AdGuard CA 인증서 설치, 필요한 필터 활성화, 프록시 모드 선택이 포함됩니다.

구성 마법사를 실행하려면 다음을 입력합니다.

```
adguard-cli configure
```

## Linux용 AdGuard 제거

AdGuard를 제거하려면 다음을 입력합니다.

정식 버전

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

베타 버전

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

나이틀리 버전

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

필요한 경우 관리자 비밀번호를 입력합니다.
