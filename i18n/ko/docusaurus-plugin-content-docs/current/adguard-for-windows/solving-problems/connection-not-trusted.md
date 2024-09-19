---
title: 인증서 관련 문제
sidebar_position: 2
---

:::정보

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드하세요](https://agrd.io/download-kb-adblock).

:::

HTTPS 트래픽을 필터링하고 광고 및 추적기를 효율적으로 차단할 수 있도록 AdGuard는 특수한 (고유한) 루트 인증서를 생성하여 시스템 저장소에 설치합니다. 인증서가 필요한 이유에 대한 자세한 내용은 [이 도움말 문서를](/general/https-filtering/what-is-https-filtering) 참조하세요.

일반적으로 브라우저는 설치 프로세스 중에 시스템 인증서 저장소에 추가되면 AdGuard 인증서를 신뢰합니다. 그러나 경우에 따라서는 이것만으로는 충분하지 않고 경고나 오류가 발생할 수 있습니다. 이는 Mozilla Firefox, PaleMoon, Waterfox 등과 같은 Firefox 기반 브라우저 또는 Yandex.Browser에서 가장 자주 발생합니다.

## Firefox 기반 브라우저의 *잠재적 보안 위험* 오류

![보안 위험 오류](https://cdn.adtidy.org/public/Adguard/kb/en/certificate/cert_error_en.png)

이전 FireFox 버전과 이를 기반으로 하는 브라우저는 시스템 저장소의 인증서를 신뢰하지 않고 로컬 저장소에 있는 인증서만 신뢰합니다. v68부터 FireFox는 시스템 인증서를 신뢰하지만 여전히 '연결이 신뢰할 수 없음' 오류가 발생할 수 있습니다. 이런 일이 발생하면 먼저 *인증서 재설치* 버튼을 클릭해 보세요. *네트워크* 탭에서 찾을 수 있습니다.

![인증서 다시 설치](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/reinstall.jpg)

그래도 문제가 해결되지 않는 경우, 수동으로 AdGuard 인증서를 FireFox 저장소에 추가하는 지침을 따르세요.

> 이 지침은 Firefox 브라우저용입니다. 버튼 및 메뉴 항목의 이름은 다른 Firefox 기반 브라우저에서 다를 수 있습니다.

1. AdGuard를 실행합니다.

1. [http://local.adguard.org/cert](http://local.adguard.org/cert)으로 이동하여 *다운로드* 버튼을 클릭합니다. 브라우저에서 **cert.cer** 파일 다운로드가 시작됩니다.

    :::note

    AdGuard 앱의 *설정 → 네트워크 → HTTPS 필터링에서* 링크를 클릭하여 다운로드 페이지를 열 수도 있습니다.


:::

    ![인증서 설정](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/link.jpeg)

1. 브라우저를 연 다음 *설정을* 엽니다.

1. *개인정보 & 보안* 탭으로 이동합니다.

1. *인증서까지* 아래로 스크롤하여 *인증서 보기* 버튼을 클릭합니다.

    ![인증서 보기 창](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import1.jpeg)

1. *권한* 탭을 선택합니다.

1. *가져오기...*를 클릭합니다.

    ![인증서 설정 - 가져오기](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/import2.jpeg)

1. 다운로드한 **cert.cer** 파일을 찾아서 *열기를* 클릭합니다.

1. *이 CA를 신뢰하여 웹사이트 식별 확인란을* 선택한 다음 *확인을* 클릭합니다.

    ![인증서 설정 - 확인란](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/cert_checkbox.jpg)

AdGuard 인증서를 성공적으로 설치했습니다. 브라우저를 다시 시작하면 오류가 사라집니다.

## Yandex.Browser 인증서 경고

Windows용 AdGuard와 Yandex.Browser를 모두 사용하는 경우 이 경고가 표시될 수 있습니다:

![Yandex 인증서 경고](https://cdn.adtidy.org/content/kb/ad_blocker/windows/solving-problems/yandex-cert.png)

### 이런 일이 발생하는 이유

AdGuard와 Yandex는 모두 인터넷에서 사용자의 보안을 매우 중요하게 생각합니다. 현재 Yandex 정책은 브라우저에서 인식하지 못하는 인증서에 대해 사용자에게 경고하는 것입니다. 때로는 악성 앱이 자체 인증서를 삽입하고 이를 사용하여 시스템을 손상시키고 개인 데이터를 훔칠 수 있기 때문에 이는 근거가 없는 것은 아닙니다.

그러나 AdGuard는 신뢰할 수 있는 인증서에 인증서를 추가합니다. 이렇게 하면 경고 메시지가 표시됩니다.

### 문제 해결 방법

가장 쉬운 방법은 **사이트로 이동** 버튼을 클릭하는 것입니다. 이렇게 하면 Yandex.Browser가 적어도 한동안은 AdGuard 인증서를 신뢰할 수 있는 인증서로 기억하도록 지시합니다. 일반적으로 이 메시지는 더 이상 표시되지 않지만, 어떤 이유로든 가끔씩 표시될 가능성이 전혀 없는 것은 아닙니다. 이러한 경우 동일한 버튼을 다시 누르기만 하면 * 됩니다(AdGuard 인증서인지 확인하세요!)*.

AdGuard에서 HTTPS 필터링을 비활성화하면 Yandex.Browser에서 이 메시지가 다시 표시되지 않지만 큰 비용이 발생합니다. HTTPS로 로드된 모든 광고( **Yandex 자체 광고**포함)가 YouTube, Facebook, Instagram 등의 웹사이트에 표시됩니다. 광고 차단 품질을 높게 유지하려면 이 기능을 사용하지 않는 것이 좋습니다.
