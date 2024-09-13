---
title: 수동 인증서 설치
sidebar_position: 1
---

:::정보

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Mac용 AdGuard에 관한 내용입니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

Mac용 AdGuard는 루트 인증서를 인증서 저장소에 설치해야 [HTTPS 트래픽을 필터링](/general/https-filtering/what-is-https-filtering)할 수 있습니다. 대부분의 경우 이 작업은 애플리케이션을 처음 시작할 때 자동으로 수행되지만 브라우저에 마스터 비밀번호를 설치한 Gecko 기반 브라우저(Firefox, Waterfox 등) 사용자는 이러한 브라우저가 시스템 인증서 대신 자체 인증서 저장소를 사용하므로 추가 단계를 수행해야 할 수 있습니다. 메시지가 표시되면 마스터 비밀번호를 입력하거나(인증서 저장소에 대한 AdGuard 액세스 권한을 부여하기 위해) 인증서를 수동으로 설치해야 합니다.

Firefox와 같은 브라우저에 인증서를 수동으로 설치하려면 다음 단계를 따르세요.

  1. *설정*을 엽니다.

  2. *개인정보 보호와 보안* → *인증서*로 이동합니다.

  3. *인증서 보기*를 클릭합니다.

  4. *인증* 탭으로 이동하여 *가져오기...* 버튼을 클릭합니다.

  5. `Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer` 파일을 선택하거나 http://local.adguard.org/cert 에서 Chromium 기반 브라우저(예: Google Chrome 또는 새로운 Edge)를 사용하여 AdGard에서 HTTPS 필터링이 실행되는 상태에서 다운로드합니다.

Gecko 기반 브라우저마다 필요한 정확한 작업은 다를 수 있지만 일반적인 순서와 `AdGuard Personal CA.cer` 파일의 경로는 동일합니다.

참고: [Setapp 애플리케이션 버전의](https://setapp.com/apps/adguard) 경우 파일 경로는 다음과 같습니다: `/Library/Application Support/com.adguard.mac.adguard-setapp/AdguardCore/Adguard Personal CA.cer`.
