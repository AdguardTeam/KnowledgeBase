---
title: AdGuard 필터 정책
sidebar_position: 6
---

:::note 주의사항

필터를 활성화하기 전에 이 필터 정책을 읽어주세요.

AdGuard 광고 차단기, AdGuard DNS 및 해당 필터를 사용하면 타사 웹사이트 및 서비스가 작동하는 방식에 영향을 미칠 수 있습니다. 귀하는 사용하시는 모든 웹사이트 또는 서비스의 정책 및 약관을 검토하고 준수할 책임이 있습니다.

타사에서 제공하는 필터를 활성화하기 전에 해당 약관을 검토하고 정보에 입각하여 필터 사용에 대한 결정을 내리는 데 동의합니다. AdGuard는 타사 필터의 작동 방식이나 약관에 대해 책임을 지지 않으며, 타사 필터가 AdGuard 제품에 포함되어 있다고 해서 사용을 권장하는 것은 아닙니다.

:::

AdGuard는 필터를 제작할 때 오랫동안 특정 원칙을 준수해 왔으며, 필터 설명과 함께 필터링 정책의 일부로 아래에 설명되어 있습니다.

## 일반 기준

이러한 기준은 모든 필터의 규칙에 동일하게 적용됩니다.

- 사이트별 규칙은 사이트에 충분한 트래픽이 있는 경우에만 추가됩니다. 트래픽은 공개 통계(사용 가능한 경우) 또는 소셜 네트워크의 구독자 수와 같은 간접 지표에 의해 결정됩니다. 사이트의 트래픽이 한 달에 100,000회에 도달하면 충분한 것으로 간주합니다. 인기가 많지 않은 사이트에 대한 규칙 추가를 고려하겠지만 최종 결정은 필터 개발자에게 맡기겠습니다. 트래픽이 적은 사이트도 타사 분석 및 광고 네트워크가 있는지 확인해야 합니다.
- 콘텐츠 팜(주로 검색 결과에서 높은 가시성을 확보하고 광고 수익을 창출하는 것을 목적으로 대량의 콘텐츠를 생산하는 웹사이트)에 대한 결정은 콘텐츠의 품질에 따라 필터 개발자가 내립니다.

필터링 규칙에 대한 품질 요구 사항:

- 규칙은 웹사이트의 성능에 부정적인 영향을 미치지 않아야 합니다.
- 차단 해제 규칙은 불필요한 차단이 해제되지 않도록 최대한 구체적으로 작성해야 합니다.
- 자바스크립트 규칙은 가능한 한 적게 사용해야 하며, 규칙이 없으면 광고 차단이 불가능한 경우에만 사용해야 합니다.

## 광고 차단 필터

### 용어

**광고 차단기**는 웹페이지의 광고 및 기타 요소를 필터링, 숨기거나 차단하는 소프트웨어 또는 하드웨어 도구입니다. 광고 차단기는 웹사이트를 방문하거나 앱을 사용할 때 페이지를 더 빠르게 로드하고, 인터넷 트래픽을 덜 사용하며, 광고와 성가신 요소를 차단하고, 개인정보를 보호하도록 설계되었습니다.

**필터** (또는 **필터 목록**)는 광고 차단기를 사용하여 콘텐츠를 필터링하고 다양한 유형의 광고 및 기타 유형의 콘텐츠를 차단하도록 설계된 필터링 규칙 집합입니다. 이러한 필터는 일반적으로 웹 브라우저, 프로그램 또는 DNS 서버 수준에서 작동합니다.

**안티애드블록(** )은 웹사이트나 애플리케이션에서 광고 차단을 감지하고 추적, 광고 재주입, 광고 차단기 비활성화 유도(소위 '광고 차단 벽') 등 다양한 방식으로 대응하기 위해 사용하는 기술입니다. 안티블록은 여러 유형이 있을 수 있습니다.

- 대안을 제공하지 않고 웹사이트 콘텐츠를 차단하는 안티애드블록: 사이트를 계속 사용하려면 사용자가 해당 사이트에서 광고 차단을 비활성화해야 합니다.
- 광고 차단기를 계속 사용하기 위해 구독을 구매하는 등의 대체 옵션이 제공되는 '안티애드블록 벽'
- 조치를 의무화하지 않는 정보 메시지: 사용자에게 광고 차단기를 비활성화하라는 메시지가 표시되지만, 이러한 메시지는 닫을 수 있으므로 사용자는 제한 없이 사이트를 계속 사용할 수 있습니다.
- 광고 차단기 사용에 대응하여 대체 광고 구현: 광고 차단기가 감지되면 사이트에서 대체 광고를 도입합니다.
- 페이월(Paywall): 콘텐츠를 부분적으로 또는 완전히 사용자에게 숨기고 액세스하려면 구독을 구매하라는 메시지를 표시하는 콘텐츠 수익화 방법입니다.

### 필터

AdGuard 광고 차단 필터에는 다음이 포함됩니다.

- AdGuard 베이스 필터
- AdGuard 모바일 광고 필터
- 언어 원칙에 따라 구분된 지역 필터: 중국어, 네덜란드어, 프랑스어, 독일어, 일본어, 러시아어, 스페인어/포르투갈어, 터키어, 우크라이나어

### 이러한 필터의 목적

- **베이스 필터**는 영어 웹사이트 및 별도의 필터가 없는 웹사이트의 광고를 차단하도록 설계되었습니다. 또한 언어에 관계없이 모든 사이트에 적용되는 일반 필터링 규칙이 포함되어 있습니다.
- **Mobile Ads filter** blocks advertisements on mobile versions of websites and within mobile apps. 언어에 따른 세분화가 없습니다.
- **지역 필터**는 **베이스 필터**와 동일한 정책을 따르지만 특정 언어의 웹사이트로 제한됩니다.

광고 차단 필터의 목표는 인터넷에서 광고를 로드할 수 있는 웹사이트, 애플리케이션 및 특정 디바이스에서 모든 유형의 광고를 차단하는 것입니다.

- 배너는 웹페이지의 여러 부분에 이미지로 표시되는 광고입니다.
- 티저는 방문자의 흥미를 유발하고(감각적인 헤드라인, 시선을 사로잡는 이미지) 배너를 클릭하도록 유도하는(클릭베이트) 텍스트 또는 그래픽 광고로, 종종 애니메이션으로 제작됩니다.
- 텍스트 광고는 링크를 포함한 텍스트 형태의 광고입니다.
- 모달 광고는 모달 창 형태로 현재 콘텐츠 위에 갑자기 표시되는 광고입니다.
- 팝펀더는 페이지의 아무 곳이나 클릭하면 현재 창 아래에 별도의 창으로 열리는 광고입니다.
- 리디렉션 광고는 사용자가 클릭 후 자동으로 다른 사이트로 리디렉션하는 메커니즘입니다.
- 사이트 콘텐츠로 위장한 광고로, 클릭 시 프로모션 제품 또는 관련 없는 콘텐츠가 있는 페이지가 열립니다.
- 동영상 광고는 동영상 콘텐츠 내에 삽입되거나 웹사이트 및 애플리케이션의 별도 광고 요소에 삽입되는 광고 동영상입니다.
- 인터랙티브 광고는 사용자가 상호작용할 수 있는 광고(예: 게임 및 설문조사, 완료 시 광고 아이템이 열림)입니다.
- Interstitial ads — full-screen ads on mobile devices that cover the interface of the app or web browser
- 넓은 공간을 차지하거나 배경과 대비되어 눈에 띄어 방문자의 관심을 끄는 광고(거의 식별할 수 없거나 눈에 띄지 않는 광고 제외)
- 차단 방지 광고는 기본 광고가 차단되었을 때 사이트에 표시되는 대체 광고입니다.
- Bait elements that are used by multiple known adblock detection scripts to detect an ad blocker presence for different goals including changing the way ads are shown, fingerprinting, etc.
- Site’s own advertising, if it has been blocked by general filtering rules (see *Limitations and exceptions*)
- Anti-adblock scripts that prevent site usage (see *Limitations and exceptions*)
- 멀웨어에 의해 삽입된 광고(로딩 방법 또는 재생산 단계에 대한 자세한 정보가 제공된 경우)
- 원치 않는 마이닝은 사용자 동의 없이 암호화폐를 마이닝하는 스크립트입니다.

### 제한 및 예외

- 사이트 자체의 광고는 의도적으로 차단해서는 안 됩니다. 단, 일반 필터링 규칙으로 인해 차단된 경우에는 차단을 해제해서는 안 됩니다.
- Content access measures like paywalls are not blocked by Ad blocking filters. However, they may be blocked by Tracking protection filters if their operation results in a violation of user privacy
- 다음과 같은 경우 Anti-adblock wall이 차단됩니다.
    - 광고 차단기를 비활성화하거나 제거할 것을 적극적으로 요구하거나 웹사이트 사용을 효과적으로 막습니다.
    - 광고 차단기 사용 시 발생할 수 있는 결과에 대한 부정확하고 오해의 소지가 있는 설명이 포함되어 있습니다.
    - 차단되지 않은 광고가 모호한 출처에서 오는 경우, 방문자는 멀버타이징의 위험에 노출될 수 있습니다.
    - They violate or negatively impact user privacy
- 다음 기준 중 하나 이상을 충족하는 광고 차단기 탐지 메시지는 차단하지 않습니다:
    - 웹 사이트 사용을 허용하고 상당한 양의 콘텐츠를 오버레이하지 않습니다.
    - 이 대안은 사용자의 개인정보나 보안을 위험에 빠뜨리지 않는다는 점에서 광고 차단기를 비활성화하는 대안이 될 수 있습니다.
    - They allow the user to proceed to the website’s content
    - 일부 레거시 규칙은 이러한 기준 중 하나 이상을 충족하는 메시지를 계속 차단할 수 있습니다. 이러한 규칙이 확인되면 이 정책에 따라 처리됩니다.
- 마이닝 풀이 공개되어 있고 악의적인 목적으로만 사용되지 않는 경우 마이닝 풀은 차단되지 않습니다.

## 추적 보호 필터

### 용어

**추적**은 마케팅 목적으로 사용자와 웹사이트 및 애플리케이션과의 상호작용에 대한 데이터를 모니터링하고 수집하는 과정이며, 웹사이트 또는 애플리케이션의 작동을 분석하기 위한 목적으로 웹사이트 또는 애플리케이션의 기능에 대한 원격 측정을 수행하는 과정입니다. 이 프로세스에는 방문한 페이지, 소요 시간, 웹사이트 요소와의 상호작용(예: 클릭, 양식 제출) 및 기타 메트릭을 추적하는 것이 포함됩니다. 이를 통해 웹사이트 및 애플리케이션 소유자는 사용자 행동을 더 잘 이해하고, 기능을 최적화하며, 마케팅 전략을 조정할 수 있습니다. 추적은 성능, 사용 패턴을 모니터링하고 문제를 식별하여 개발자에게 웹사이트 또는 애플리케이션의 안정성과 품질을 개선하는 데 필요한 데이터를 제공하는 데도 사용됩니다. 수집한 데이터에서 개인의 신원을 확인할 수 없더라도 이러한 행위는 여전히 추적에 해당합니다.

**추적기**는 웹사이트나 애플리케이션에서 사용되는 소프트웨어로, 운영 및 방문자의 행동에 대한 정보를 수집하도록 설계되었습니다. 웹사이트 또는 애플리케이션과의 사용자 상호 작용을 추적하여 페이지 조회, 소요 시간, 클릭, 양식 제출 및 기타 이벤트에 대한 데이터를 기록합니다. 웹사이트 및 애플리케이션 소유자에게 사용자 행동 분석, 사용자 경험 개선, 콘텐츠 및 광고 최적화를 위한 도구를 제공하는 것이 목적입니다.

**URL 추적 매개변수**는 분석 시스템에 의해 링크에 추가되거나 웹 페이지의 일부 링크에 존재하는 주소의 일부입니다. 요청이 이루어지면 이 URL 추적 매개변수는 분석 시스템 또는 웹사이트의 백엔드에서 처리되어 정보를 추출할 수 있습니다. 예를 들어 URL 추적 매개변수는 클릭 또는 광고 캠페인에 대한 정보를 전송할 수 있습니다. URL 추적 매개변수는 사기 방지 또는 봇 탐지 시스템에서도 사용할 수 있습니다.

**쿠키**는 웹사이트가 기기에 전송하고 저장하는 파일입니다. 이러한 파일에는 기기에서 사이트가 작동하는 데 필요하고 분석 목적으로 사용되는 다양한 정보(웹사이트에서의 방문자 활동 추적에 사용되는 고유 식별자, 광고 매개변수 등)가 포함되어 있습니다.

### 필터

AdGuard 추적 보호 필터에는 다음이 포함됩니다.

- AdGuard 추적 보호 필터
- AdGuard URL 추적 필터

### 이러한 필터의 목적

**추적 방지 필터**는 사용자의 개인 데이터를 수집하는 추적기를 차단하고 사용자의 프라이버시를 개선하기 위해 설계되었습니다.

What it blocks:

- 분석 시스템의 스크립트
- 웹사이트 및 애플리케이션의 자체 추적 스크립트
- 마스크된 CNAME 추적기
- 추적 쿠키
- 추적 픽셀
- 브라우저의 추적 API
- Detection of the ad blocker for tracking purposes
- Google 크롬의 개인정보 보호 샌드박스 기능 및 추적에 사용되는 포크(Google 토픽 API, 보호 대상 API)

**URL 추적 필터**는 웹 주소에서 추적 매개 변수를 제거하도록 설계되었습니다.

### 제한 및 예외

추적 방지 필터를 차단하면 웹사이트의 올바른 기능을 방해할 수 있는 경우 추적기를 차단해서는 안 됩니다.

- 사이트 사용을 방해하는 경우 봇 방지 및 사기 방지 기능을 제공합니다. 예를 들어, 사이트가 보안 문자로 방문자를 확인하려고 할 때 PerimeterX 또는 hCaptcha 차단으로 인해 문제가 발생합니다.
- 센트리 또는 버그내그와 같은 오류 추적 시스템은 차단되지 않습니다.

## 방해 요소 필터

성가심 필터는 광고는 아니지만 사이트 상호 작용이나 콘텐츠 소비에 방해가 되는 요소(예: 다양한 모달 창 및 대화형 양식, 쿠키 동의 알림 및 요청, 모바일 앱 배너, 각종 위젯)를 차단하여 웹사이트의 사용성을 개선하기 위해 고안된 기능입니다.

### 용어

**쿠키 고지**는 웹사이트의 쿠키 유형과 사용을 설명하는 양식입니다. 쿠키 알림은 사용자가 웹사이트를 방문할 때 표시되며, 웹사이트가 쿠키 또는 기타 추적 기술을 사용하여 개인정보를 수집 및 사용한다는 사실을 사용자에게 알리고 수집한 정보가 공유되는 이유와 대상을 설명합니다.

**CMP(Consent Management Platform)**는 웹사이트가 쿠키 사용 규칙을 준수할 수 있도록 지원하는 소프트웨어입니다. CMP는 사용자의 동의를 얻을 때까지 쿠키 사용을 제한하여 사용자에게 특정 쿠키를 허용하고 개인정보 설정을 관리할 수 있는 옵션을 제공합니다.

**Widget** — a user interface element that extends the functionality of a website. 웹 위젯은 웹 페이지에 통합되며 버튼, 양식 또는 배너와 같은 대화형 요소를 포함할 수 있습니다. 다른 페이지로 이동하지 않고도 특정 서비스나 콘텐츠에 액세스할 수 있도록 사용자에게 제공할 수 있습니다.

**팝업**은 현재 웹 페이지 위에 표시되는 창입니다. 추가 정보, 광고, 알림 또는 데이터 입력 양식을 표시하기 위한 것입니다. 팝업은 일반적으로 페이지의 주요 콘텐츠 보기를 차단하고 닫으려면 사용자의 조치가 필요하므로 짜증을 유발할 수 있습니다.

### 필터

더 나은 사용자 지정을 위해 성가심 필터는 목적에 따라 구분되어 있습니다.

- AdGuard 쿠키 알림 필터
- AdGuard 팝업 필터
- AdGuard 모바일 앱 배너 필터
- AdGuard 위젯 필터
- AdGuard 기타 방해 요소 필터
- AdGuard 방해 요소 필터 — 5가지 특수 방해 요소 필터를 모두 포함하는 통합 필터

### 이러한 필터의 목적

#### AdGuard 쿠키 알림 필터

이 필터는 쿠키 관리 플랫폼(CMP)의 쿠키 알림과 요청을 모두 차단하도록 설계되었습니다. Depending on how a website implements its consent mechanism, different methods may be applied.

In most cases, simply hiding or blocking the corresponding scripts is sufficient. However, when a website requires a cookie decision for certain features or third-party content to work, the filter automatically handles the request using alternative methods.

Whenever possible, non-essential cookies are declined by default. If this is not technically feasible and consent must be granted for the site to function correctly, the site is additionally reviewed for analytics and tracking technologies, which are then blocked by the **AdGuard Tracking Protection filter**.

**제한 및 예외**

In some cases, the decision to add rules is made independently by filter developers; mostly, when the choice made when simulating actions would affect the site’s functionality (for example, history may not work, or user settings may not be saved on such a site).

#### AdGuard 팝업 필터

This is a filter that blocks various popups on web pages that are not necessary for normal site usage, including but not limited to:

- Requests for permission to receive push notifications
- Popups and forms for subscribing to news, promotions, and various events, including third-party channels for receiving them (such as Google News, Telegram)
- Popups that encourage users to disable ad blocker and violate user’s privacy (at the discretion of the filter developers)
- Other types of popups that may annoy users (at the discretion of filter developers)

**제한 및 예외**

- Push notifications are only blocked on sites where they are not used for practical purposes. For example, in email web clients or tools used for work purposes, such notifications will not be blocked
- Some popups that do not fall into the categories described above but still interfere with the user’s experience may be also blocked. For example, registration prompts on a site or popups that introduce the site’s features. The decision is made by filter developers
- Content access measures that ask the user to pay to access the content must not be circumvented

#### AdGuard 모바일 앱 배너 필터

This is a filter that blocks banners and popups that encourage visitors to install mobile apps.

**제한 및 예외**

Banners located in the headers or in the menus of websites are not blocked if they are not animated and do not occupy a significant portion of usable space. If a banner is located in the footer, the decision is made by filter developers case-by-case. Usually, banners in the footer do not stand out against other elements and are not distracting.

#### AdGuard 위젯 필터

This is a filter that blocks various widgets that are not essential for the functioning of websites or for interaction with them:

- Widgets for content recommendations — related articles, similar websites, various personalized recommendations
- Chat widgets that are not integrated with the content and are not the main content of the page
- Marketing widgets:
    - Chats for communication with assistants or bots
    - Widgets with product recommendations that are shown to the user
    - Call-back forms
- Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations

**제한 및 예외**

This filter doesn’t block:

- Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content
- Widgets for self-promotion and site-specific promotional activities
- Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers

#### AdGuard 기타 방해 요소 필터

This filter is designed to block annoying elements that are not included in other filters, as well as to apply various tweaks. It’s purpose is to:

- Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element
- Block annoying elements that are not included in other categories
- Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked
- Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered
- Apply various rules that may be useful for filter developers. For example, blocking web debugger detection

**제한 및 예외**

This filter may contain rules that are not suitable for all users. Sometimes it is recommended to disable this filter. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis.

## 소셜 미디어 필터

### 필터

AdGuard Social Media filters include:

- AdGuard Social Media filter

### 이러한 필터의 목적

This filter will block social media widgets on third-party websites, such as “Like” and “Share” buttons, group widgets, recommendations, and similar widgets.

### 제한 및 예외

Widgets that are part of the website’s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website’s social media pages are also not blocked.

## 기타 필터

This group contains filters that are not essential for blocking advertisements.

### 용어

**Contextual advertising** is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages.

**Search advertising** is a subclass of contextual advertising where ads are displayed based on the visitor's search query.

**Self-promotion of websites** refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties.

For more details on these types of advertising, refer to the [article on search ads](https://adguard.com/kb/general/ad-filtering/search-ads/).

### 필터

- Filter unblocking search ads and self-promotion
- AdGuard DNS filter
- AdGuard Experimental filter

### 이러한 필터의 목적

#### Filter unblocking search ads and self-promotion

This filter unblocks:

- Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)
- Self-promotion of websites

**제한 및 예외**

- Search advertising is unblocked only if it corresponds to the user’s search query, as it is contextual. Otherwise, the advertising remains blocked
- Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers
- Any other advertising will not be unblocked

#### AdGuard DNS filter

This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters.

**제한 및 예외**

Same as for ad-blocking filters.

#### AdGuard Experimental filter

This filter is intended for testing and debugging rules that potentially may break websites’ functionality. Rules are added by filter developers when there’s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal.

**제한 및 예외**

- Rules should not intentionally break websites’ functionality
- Rules should not unblock advertisements or otherwise violate the Policy
