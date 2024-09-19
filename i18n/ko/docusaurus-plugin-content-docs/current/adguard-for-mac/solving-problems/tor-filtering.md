---
title: Tor Browser에서 필터링 설정
sidebar_position: 10
---

:::정보

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Mac용 AdGuard에 관한 내용입니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

기본적으로 Tor 브라우저는 AdGuard의 필터링된 애플리케이션 목록에 추가됩니다. 하지만 이를 필터링하기 위해서는 AdGuard가 Tor의 보안 설정을 변경해야 합니다. 이렇게 하면 Tor가 AdGuard의 CA 인증서를 신뢰하게 됩니다.

Tor를 필터링하고 *설정* → *네트워크* → *애플리케이션*에서 선택하면 AdGuard에 이 대화 상자가 표시됩니다.

![AdGuard 대화 상자](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

Tor 설정을 업데이트하면 AdGuard는 다음을 설정합니다.

`security.enterprise_roots.enabled`: true

이 설정은 Tor가 루트 인증서를 신뢰하도록 합니다. [자세히 알아보기](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

공개 키 고정(Public Key Pinning)은 웹사이트가 사이트와 사용자 간의 연결의 신뢰성을 보장할 수 있도록 하는 보안 조치입니다. 여기에는 웹사이트가 신뢰하는 공개 키 또는 핀 목록을 게시하는 것이 포함됩니다. 적용 수준을 1로 설정하면 사용자 정의 CA에 대해 고정이 적용되지 않습니다. [자세히 알아보기](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

변경 사항을 적용하려면, Tor 브라우저를 재시작해야 합니다.

이러한 설정을 수동으로 변경하면 Tor 필터링이 중지됩니다.
