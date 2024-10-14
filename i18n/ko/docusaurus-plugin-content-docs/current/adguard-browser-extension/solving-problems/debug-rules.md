---
title: Chrome MV3에서 AdGuard 규칙을 디버그하는 방법
sidebar_position: 2
---

[Chrome MV3용 AdGuard](/adguard-browser-extension/mv3-version) 에서, 필터링 로그는 적용된 규칙들 중에서 '추정 규칙'이라고 부르는 대략적인 것들만 보여줍니다. 이는 확장 프로그램이 '압축 해제'된 형식이 아닌 경우, 브라우저에서 어떤 규칙을 사용하였는지 구체적으로 알려주지 않기 때문입니다. 정확한 정보를 얻기 위해서는, 브라우저에 확장 프로그램의 압축 해제된 버전을 직접 설치해야 합니다.

이 설명서는 확장 프로그램과 함께 제공되는 고정 규칙을 바꾸고 싶은 경우와 같은 곤란한 상황에도 도움이 될 것입니다. 대부분의 경우에는 확장 프로그램의 **사용자 규칙**을 활용하는 것으로도 충분할 것입니다.

## 전제 조건

1. **Git:** [Git 설치](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. **Node:** [Node.js 설치](https://nodejs.org/en/download/package-manager)

3. **Yarn:** [Yarn 설치](https://classic.yarnpkg.com/lang/en/docs/install)

## 확장 프로그램을 복제하는 방법

1. 레포지터리를 복제합니다:

   ```bash
   git clone git@github.com:AdguardTeam/AdguardBrowserExtension.git
   ```

2. 디렉토리로 이동합니다:

   ```bash
   cd AdguardBrowserExtension
   ```

3. `v5.0` 브랜치로 전환합니다:

   ```bash
   git checkout v5.0
   ```

4. 종속성 설치:

   ```bash
   yarn install
   ```

## 확장 프로그램을 빌드하는 방법

1. `v5.0` 브랜치로 전환합니다:

   ```bash
   git checkout v5.0
   ```

2. 터미널에서 다음 명령을 실행하세요:

   ```bash
   yarn dev chrome-mv3
   ```

3. 빌드된 확장 프로그램은 다음 디렉토리에 있습니다:

   ```bash
   ./build/dev/chrome-mv3
   ```

## 브라우저에서 압축 해제된 버전을 설치하는 방법

1. 개발자 모드를 켜세요:

   ![개발자 모드](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

2. \*\*압축해제된 확장 프로그램을 로드합니다.\*\*를 클릭하세요:

   ![Load unpacked](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

3. 확장 프로그램 디렉토리를 선택하고 **선택**을 클릭합니다:

   ![선택](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

다 되었습니다!

## 규칙을 디버그하는 방법

1. `./Extension/filters/chromium-mv3` 디렉토리의 `.txt` 파일에서 필요한 규칙을 찾아 수정하세요.

2. txt에서 규칙을 선언적 형식으로 변경합니다:

   ```bash
   yarn convert-declarative
   ```

3. 확장프로그램을 다시 빌드하세요:

   ```bash
   yarn dev chrome-mv3
   ```

4. 브라우저에서 확장프로그램을 다시 불러오세요:

   ![확장 프로그램 다시 로드](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)
