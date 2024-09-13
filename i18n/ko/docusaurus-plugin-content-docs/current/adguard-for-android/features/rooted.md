---
title: 루팅된 기기
sidebar_position: 7
---

:::info

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Android용 AdGuard에 관한 내용입니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)하세요.

:::

Android OS의 보안 조치로 인해 일부 AdGuard 기능은 루팅된 기기에서만 사용할 수 있습니다. 이 기능은 다음과 같습니다.

- In most cases, **HTTPS filtering in apps** requires [installing a CA certificate into the system store](/adguard-for-android/features/settings#security-certificates), as most apps don't trust certificates in the user store
- [**자동 프록시 라우팅 모드**](/adguard-for-android/features/settings#routing-mode)에서는 시스템 전체 트래픽 필터링에 대한 Android의 제한으로 인해 루트 액세스 권한이 필요합니다.
- [**수동 프록시**](/adguard-for-android/features/settings#routing-mode) 라우팅 모드를 사용하려면 Android 10 이상에서 루트 액세스가 필요하며, AdGuard가 필터링한 연결과 관련된 앱의 이름을 더 이상 확인할 수 없기 때문입니다.
