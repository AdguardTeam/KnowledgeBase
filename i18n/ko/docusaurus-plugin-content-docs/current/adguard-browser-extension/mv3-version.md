---
title: Chrome MV3용 AdGuard 브라우저 확장 프로그램
sidebar_position: 5
---

MV2 확장프로그램이 Chrome 웹 스토어에서 사라지면서, Chrome 사용자들은 Chrome의 새로운 API인 매니페스트 V3에 호환되는 MV3 확장 프로그램으로 전환해야 할 수도 있습니다. 이 주제에 대한 저희의 생각은 [블로그](https://adguard.com/en/blog/tag/manifest-v3.html)에서 폭넓게 다루었습니다.

AdGuard MV3 확장 프로그램은 광고와 추적기를 효과적으로 차단하는 동시에 소셜 위젯, 배너, 영상 광고를 빈틈없이 관리합니다. 대부분의 사용자는 기능상의 차이를 느끼지 못할 것입니다만, 알아두어야 할 몇 가지 제한 사항과 변경점들이 있습니다.

## 확장 프로그램을 찾을 수 있는 위치

[Chrome 웹 스토어](https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg)에 있던 기존의 확장 프로그램은 **MV3 버전**으로 대체되었습니다.

**MV3의 베타 버전**은 여전히 [Chrome 웹 스토어](https://chromewebstore.google.com/detail/adguard-adblocker-mv3-exp/apjcbfpjihpedihablmalmbbhjpklbdf)에서 이용하실 수 있습니다.

기존의 베타 확장프로그램은 [**Adguard 광고 차단기 MV2**](https://chromewebstore.google.com/detail/adguard-adblocker-beta/gfggjaccafhcbfogfkogggoepomehbjl)로 이름이 변경되어 Google 지원이 종료될 때까지 유지될 것입니다.

## 기능 및 설정의 주요 변경 사항

- **자동 및 수동 필터 업데이트 불가**. **필터 자동 업데이트** 및 **필터 업데이트 확인** 기능이 **필터** 탭에서 사라집니다. 일부 규칙이 DNR 형태로 적용됨에 따라, 저희는 요청에 따라 필터를 업데이트할 수 없게 되었습니다. 스토어의 검토를 거쳐 확장 프로그램을 업데이트하는 모든 과정을 거쳐야만 합니다.

- **필터링 로그**

  ![필터링 로그 \*border](https://cdn.adtidy.org/content/blog/mv3/new/log.png)

  DNR 제한으로 인해 구체적으로 어떤 규칙이 적용되었는지 표시할 수 없게 되었는데, 대신에 저희의 엔진을 바탕으로 '작동되었을 것으로 추정되는 규칙'을 제공할 예정입니다. 정확한 정보를 얻기 위해서는 '압축 해제된' 형태의 확장 프로그램을 브라우저에 직접 설치해야 합니다. 이 작업을 수행하는 방법에 대한 자세한 설명은 [별도의 문서](/adguard-browser-extension/solving-problems/debug-rules/)에서 확인하실 수 있습니다.

- **추적 보호** (이전 명칭으로는 **스텔스 모드**)

  ![추적 보호 \*border](https://cdn.adtidy.org/content/blog/mv3/new/tracking_screen.png)

  선언적 규칙을 사용하여 쿠키의 TTL을 설정할 수 없게 되었기 때문에, **쿠키**를 비롯한 **퍼스트 파티 쿠키 자동 파괴**, **서드파티 쿠키 자동 파괴** 섹션이 사라졌습니다.

- 일반 설정에서 **피싱, 멀웨어 보호**를 더 이상 사용할 수 없습니다. 악성 웹사이트와 사기로부터 보호받기 위해서는 **필터** 탭에서 적절한 **보안** 필터를 활성화하세요.

  ![보안 \*border](https://cdn.adtidy.org/content/blog/mv3/new/security.png)

## 제한

### 최대 규칙 및 필터 수

매니페스트 V3은 확장 프로그램마다 고정 및 정규식 규칙에 제한을 둡니다. 이러한 제한을 넘었을 경우에 사용자는 알림을 받을 수 있습니다.

![규칙 제한 \*border](https://cdn.adtidy.org/content/blog/new/rulelimits.png)

![너무 많은 확장 프로그램 \*border](https://cdn.adtidy.org/content/blog/new/other_extension.png)

기본적으로, 매니페스트 V3은 규칙을 고정(내장) 규칙과 동적 규칙으로 구분하여 엄격한 제한을 두고 있습니다.

**고정 규칙:** 확장 프로그램당 최소 **30,000** 규칙이고, 개별 사용자가 설치한 모든 확장 프로그램에 대한 누적 한도는 **330,000**입니다.

정규식 규칙에 대해서는 한도가 **확장 프로그램당 1,000**으로 설정되어 있습니다.

동시에 최대로 활성화 가능한 필터의 수는 **50**개 입니다.

**동적 규칙:** 최대 1,000개의 정규식 규칙을 포함한 **5,000** 규칙의 엄격한 한도가 적용됩니다.

If this limit is exceeded, only **5,000 converted rules** will be applied in the following order: first Allowlist, then User rules, Custom filters, and finally — Quick Fixes filter.

> **변환된 규칙**은 [선언적 변환기][github-declarative-converter]를 이용해 \[DNR 형식]으로 변환된 규칙입니다.
> 변환 과정에서 일부 규칙들은 다른 규칙의 (`$badfilter`)를 덮어쓸 수도 있고, (`$removeparam`)와 결합될 수도 있는데, 그 결과 순서가 약간 다른 규칙 목록이 생성됩니다.
>
> 변환된 규칙 목록에서는 5,000개의 규칙만 사용합니다. 나머지는 편집기에 표시는 되지만 적용되지 않습니다.

여기에서는 기본적인 변경자가 있는 규칙이 어떻게 선언적 규칙으로 변환되는지 보여줍니다:

```adblock
||example.org^$script,third-party,domain=example.com
```

이 아래와 같이 변환됩니다.

```json
[
    {
        "id": 1,
        "action": {
            "type": "block"
        },
        "condition": {
            "urlFilter": "||example.org^",
            "domainType": "thirdParty",
            "initiatorDomains": [
                "example.com"
            ],
            "resourceTypes": [
                "script"
            ]
        },
        "priority": 302
    }
]
```

더 많은 예시들은 [GitHub][github-declarative-converter-examples]에서 찾아볼 수 있습니다.

### 네트워크 규칙 수정자

네트워크 규칙 수정자에는 한계가 있습니다: 어떤 것들은 MV3에 적용될 수 없거나, 또는 제한적으로만 구현할 수 있습니다.

한계에 대한 구체적인 내용은 [GitHub][github-declarative-converter]에서 찾아볼 수 있습니다.
수정자에 대한 더 많은 정보를 얻고 싶다면, [지식 창고](/general/ad-filtering/create-own-filters)를 참고하세요.

[DNR format]: https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#build-rules

<!-- TODO: update the following urls after the release/v3.1 branch is merged -->

[github-declarative-converter]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter
[github-declarative-converter-examples]: https://github.com/AdguardTeam/tsurlfilter/tree/release/v3.1/packages/tsurlfilter/src/rules/declarative-converter#basic-examples
