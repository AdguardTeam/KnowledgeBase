---
title: How to generate HAR files
sidebar_position: 5
---

:::정보

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

:::note

HAR files are processed in accordance with [the AdGuard Privacy Policy](https://adguard.com/en/privacy.html).

:::

## HAR 파일이란 무엇인가요?

HAR(HTTP ARchive) 형식은 웹 브라우저와 사이트 간의 상호 작용을 로깅하기 위한 JSON 형식의 아카이브 파일로, The specifications of HAR format define archival data for HTTP transactions that a browser uses to export detailed information about the web pages it loads. HAR 파일 형식에 대한 자세한 내용은 [softwareishard.com](http://www.softwareishard.com/blog/har-12-spec/)에서 확인하실 수 있습니다.

## How to generate HAR files

간혹 재생산하기 어려운 특정 광고를 차단하기 위해 HAR 파일 분석이 필요합니다. To get HAR files, follow these steps:

1. Open AdGuard and go to **Settings** (⚙ icon in the lower right corner).
2. Tap **General** →**Advanced** → **Low-level settings**.
3. Scroll down and activate **Capture HAR** in the Filtering section.
4. Open the app and perform the necessary actions to reproduce the problem.
5. Turn **Capture HAR** off.
6. Go back to **Advanced**.
7. Tap **Export logs and system info** → **Allow** (if necessary) → **Save**.

**Send the generated file with the logs to the AdGuard support service.**

:::note

Our support team will process your ticket much faster if you specify the HelpDesk ticket number or the GitHub issue number in your message.

:::

## How to analyze HAR files

다음은 HAR 파일을 분석하기 위한 몇 가지 소스입니다.

- [HTTP 아카이브 뷰어 마스터](https://gitgrimbo.github.io/harviewer/master/)는 HAR 분석기 도구로, HTTP 추적 도구로 생성 된 HTTP 아카이브 (HAR) 로그 파일을 시각화합니다.
- [Fiddler](https://www.telerik.com/fiddler)는 웹 디버깅 프록시로, 컴퓨터와 인터넷 간의 모든 HTTP(S) 트래픽을 캡처, 검사, 모니터링하고 모의 요청을 수행하고 네트워크 문제를 진단할 수 있습니다.
