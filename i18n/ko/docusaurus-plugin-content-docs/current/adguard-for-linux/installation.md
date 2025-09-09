---
title: 설치, 설정 및 제거
sidebar_position: 2
---

## Linux용 AdGuard 설치

컴퓨터에서 명령줄을 엽니다. Linux에서는 키보드 단축키 **Ctrl+Alt+T**를 사용합니다. Mac에서는 검색 필드에 **터미널**을 입력합니다.

AdGuard를 설치하려면 자신에게 더 적합한 버전(정식, 베타 또는 nightly)을 선택하고 해당 명령을 입력합니다.

**정식 버전**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

**베타**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

**나이틀리 버전**:

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

필요한 경우 관리자 비밀번호를 입력합니다.

`y`를 눌러 `/usr/local/bin`에 실행 파일에 대한 링크를 생성하고 설치가 완료될 때까지 기다립니다.

:::note

`gpg` 도구를 사용하여 서명을 확인하고 AdGuard의 공식 버전인지 확인할 수 있습니다. [GitHub에서 자세히 보기](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## 초기 설정

Linux용 AdGuard에는 [AdGuard 라이선스](https://adguard.com/license.html)가 필요합니다. 아직 라이선스가 없는 경우, 로그인하거나 계정을 만들어 14일 무료 체험판을 이용할 수 있습니다. 이미 라이선스가 있는 경우, 로그인하여 활성화하세요. 이렇게 하려면 다음 단계별 가이드를 따르세요.

1. 설치 후 다음을 입력합니다.

   ```sh
   adguard-cli activate
   ```

2. 그런 다음 원하는 옵션을 선택합니다.

   ![adguard-cli 활성화 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation1.png)

3. 링크를 클릭하여 라이선스를 활성화합니다.

   ![라이선스 활성화 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation2.png)

4. 활성화 후에는 프로그램을 계속 사용할 수 있습니다.

   ![성공적인 활성화 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation3.png)

5. 입력하여 라이선스를 초기화할 수도 있습니다.

   ```sh
   adguard-cli reset-license
   ```

   또는 다음을 입력하여 라이선스 정보를 확인합니다.

   ```sh
   adguard-cli license
   ```

6. 이제 AdGuard CLI를 설정해야 합니다. 구성 마법사를 실행하려면 다음을 입력합니다.

   ```sh
   adguard-cli configure
   ```

   ![설정 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation4.png)

   마법사는 초기 설정에 필요한 기본적인 질문을 합니다.

7. 그 후, 다음을 입력하여 AdGuard 보호를 시작할 수 있습니다.

   ```sh
   adguard-cli start
   ```

   ![보호 시작 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation5.png)

8. 다음을 사용하여 보호 상태를 확인할 수 있습니다.

   ```sh
   adguard-cli status
   ```

   다음을 사용하여 보호를 비활성화할 수 있습니다.

   ```sh
   adguard-cli stop
   ```

   ![중지 보호 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

9. 현재 구성을 확인하려면 다음을 입력합니다.

   ```sh
   adguard-cli config show
   ```

   ![현재 설정 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

   구성 파일의 경로도 표시되며, 직접 편집할 수 있습니다. 여기에는 모든 추가 옵션에 대한 설명이 포함되어 있습니다.

   또는 다음 명령을 사용할 수 있습니다.

   ```sh
   adguard-cli config get
   ```

   또는

   ```sh
   adguard-cli config set
   ```

   하지만 주로 스크립트 작성에 사용됩니다.

사용 가능한 명령에 대한 자세한 내용은 [설정 및 보호 관리](https://adguard.com/kb/adguard-for-linux/settings/) 섹션을 참조하세요.

## Linux용 AdGuard 제거

AdGuard를 제거하려면 다음을 입력합니다.

정식 버전

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

베타 버전

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

나이틀리 버전

```sh
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

필요한 경우 관리자 비밀번호를 입력합니다.
