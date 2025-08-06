---
title: "'MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE` 오류 수정 방법"
sidebar_position: 12
---

:::info

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

[HTTPS 필터링](/general/https-filtering/what-is-https-filtering)이 활성화된 Windows용 AdGuard의 일부 사용자는 google.com 및 youtube.com과 같은 특정 웹사이트를 방문할 수 없습니다. 엄격한 인증서 고정을 사용하는 브라우저는 웹사이트를 여는 대신 `MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE` 오류를 표시합니다.

영향을 받는 브라우저 목록은 다음과 같습니다.

- Arkenfox
- Brace
- Cachy Browser
- Dove
- FireDragon
- LibreWolf
- Mull
- Mullvad Browser
- Phoenix
- Tor 브라우저

기본 브라우저가 이러한 브라우저 중 하나인 경우 문제를 해결하려면 다음을 수행하세요.

1. 브라우저의 주소창에 `about:config`를 입력합니다.
2. 표시되는 메뉴에서 검색 필드에 'security.cert_pinning.enforcement_level'을 입력합니다.
3. security.cert_pinning.enforcement_level\` 매개 변수를 2에서 1로 변경합니다.
