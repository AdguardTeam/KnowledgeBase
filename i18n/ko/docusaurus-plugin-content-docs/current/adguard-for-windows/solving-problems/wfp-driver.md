---
title: WFP 드라이버
sidebar_position: 1
---

:::정보

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드하세요](https://agrd.io/download-kb-adblock).

:::

네트워크 트래픽을 필터링하기 위해 AdGuard는 네트워크 드라이버를 사용합니다. TDI 드라이버와 WFP 드라이버 옵션이 있습니다. While a WFP driver is generally preferrable and is enabled by default for all newer Windows OS versions (Windows 8 and newer), it can potentially cause compatibility problems, especially with some antiviruses. 이러한 문제와 그에 따른 오류는 각 경우에 따라 매우 다를 수 있습니다.

이로 인해 발생한 것으로 의심되는 문제가 발생하면 언제든지 이전 버전이지만 더 안정적인 TDI 네트워크 드라이버로 전환할 수 있습니다. 다음와 같이 설정합니다:

1. *설정 → 네트워크로* 이동합니다.

2. Disable the WFP driver as it’s done in this picture:

![WFP 드라이버 *border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/wfp-driver.png)
