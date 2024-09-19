---
title: HTTPS 필터링
sidebar_position: 1
---

### HTTPS란 무엇인가요?

HTTPS(HyperText Transfer Protocol Secure)는 보안을 강화하기 위해 암호화를 지원하는 HTTP 프로토콜의 확장입니다. 이 프로토콜은 개인 데이터, 신용 카드 정보 등과 같은 중요한 지정보를 안전하게 전송하는 데 사용됩니다.

암호화된 트래픽이 제3자에 의해 ‘엿들어지지 않도록’ 보호되므로 HTTPS를 사용하는 것이 좋습니다. HTTPS acceptance has been growing in recent years, mainly because it is [encouraged by Google](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) and also due to the emergence of the free certificate authority [Let’s Encrypt](https://en.wikipedia.org/wiki/Let's_Encrypt).

아래의 그림은일반 HTTP 프로토콜과 보안 HTTPS 프로토콜의 차이점을 보여줍니다.

![HTTPS란 무엇인가요?](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https.png)

### 보안 인증서란 무엇인가요?

간단히 말하면 HTTPS는 데이터 암호화를 의미합니다. 그러나 원하시는 웹 사이트와 암호화된 연결을 했는지 어떻게 확인을 할 수 있을까요? 웹 사이트가 보안 인증서가 있으면 연결이 암호화됩니다. A certificate serves as proof that the website is really who or what it claims to be. 브라우저에서 보안 연결이 될 수 없습니다. 웹 사이트에서 사용하는 인증서를 브라우저에서 신뢰하는 CA(인증 기관)에서 발급받는 것이 중요합니다. 인증 기관은 SSL 인증서가 웹 사이트 소유자에게 발급되는 것을 보장합니다.

### AdGuard가 HTTPS를 필터링해야 하는 이유는 무엇인가요?

대부분의 웹 사이트와 광고 네트워크는 현재 HTTPS를 사용하고 있습니다. Here are a few popular websites where you can’t remove ads without HTTPS filtering: youtube.com, facebook.com, and x.com.

### HTTPS 필터링은 어떻게 작동하나요?

HTTPS 필터링 작업 방식이 쉬웠다면 HTTPS는 그렇게 안전하지 않을 것입니다. 브라우저가 서버에 연결하려고 하면 AdGuard는 두 개의 보안 연결을 설정하는데, 각각 브라우저나 다른 앱, 그리고 서버와 설정하는 것이 그것입니다. 브라우저는 AdGuard와 AdGuard가 생성하는 연결을 신뢰해야 합니다. 이를 위해 AdGuard는 특수 루트 인증서를 생성하여 시스템에 설치하고 필요한 경우, Firefox와 같은 일부 브라우저에도 설치합니다. AdGuard can now see the data packets inside the secure connection and thus do its job — block ads and trackers.

For better understanding, we have depicted this process:

![HTTPS 필터링은 어떻게 작동하나요](https://cdn.adtidy.org/public/Adguard/Blog/https/what_is_https_filtering.png)

### 내 트래픽이 암호화되고 안전하나요?

물론입니다. 원격 서버와의 연결은 암호화되고 안전하게 유지됩니다. AdGuard는 브라우저와 마찬가지로 필터링할지 여부를 결정하기 전에 서버의 인증서를 확인합니다.

그러나 HTTPS 필터링에는 단점이 있습니다. HTTPS 필터링 시 브라우저는 실제 인증서 대신 AdGuard에서 발급한 인증서를 봅니다.

그래서 저희는 연결 보안을 개선하기 위해 몇 가지 추가 조치를 취합니다.

### 금융 웹 사이트 및 민감한 개인 데이터가 있는 웹 사이트

기본적으로 AdGuard는 개인 데이터가 있는 은행 웹 사이트, 결제 시스템 웹 사이트 및 웹 사이트에서 필터링하지 않습니다. 저희는 [수천 개의 그러한 웹 사이트 목록](https://github.com/AdguardTeam/HttpsExclusions)을 유지합니다.

이 목록에 웹 사이트를 추가하려면 [저희에게 알려주십시오](https://github.com/AdguardTeam/HttpsExclusions/issues/new).

### EV(Extended Validation) 인증서

AdGuard는 EV 인증서를 사용하는 모든 웹 사이트를 필터링에서 제외하는 기능을 제공합니다.

EV 인증서는 더 높은 수준의 보안을 의미하며 일반 인증서보다 더 많은 보증을 제공하여 웹 사이트가 사기 또는 위조 웹 사이트가 아님을 증명합니다.

### HTTPS 필터링과 관련된 문제

[2017년 연구](https://cdn.adtidy.org/public/Adguard/Blog/https/interception-ndss17.pdf)에 따르면 HTTPS 연결의 5~10%가 HTTPS 필터링을 사용하는 애플리케이션에 의해 이루어집니다. 이 HTTPS 필터링 애플리케이션 중 대부분 바이러스 백신 소프트웨어입니다. 나쁜 소식은 테스트된 26개의 바이러스 중 24개가 연결 보안 수준을 떨어뜨렸고 3분의 2가 해킹 연결에 취약하다는 것입니다.

연구원들의 결론은 인터넷 보안 커뮤니티가 보안 연결을 필터링하는 애플리케이션에 세심한주의를 기울여야 한다는 것입니다. 그리고 그러한 프로그램의 개발자는 필터링 구현의 품질에 가장 진지하게주의를 진지하게 임해야 합니다.

AdGuard는 연구원들에 의해 테스트되지 않았습니다. We ran estimates according to their set of tests, and at the time of testing, we could have received the maximum score — A\*. 연구원에 의해 확인되었지만 최종 평가에서 고려되지 않은 몇 가지 문제가 있습니다.

AdGuard는 연구원의 결과에 전적으로 동의합니다. 또한 현재 겪고 있는 문제와 필터링 메커니즘의 품질 및 보안을 개선하기 위한 계획에 대해 알려 드리고자 합니다. 이러한 목록은 우선 순위에 따라 정렬됩니다.

위의 연구에서 발견된 대부분의 문제는 인증서 유효성 검사 메커니즘과 관련이 있습니다. 저희는 별도의 인증서 유효성 검사 라이브러리를 생성 중입니다. 또한 인증서 유효성 검사 라이브러리를 오픈 소스로 만들고 싶습니다. AdGuard의 HTTPS 필터링 단점에 대한 [자세한 내용](../known-issues)은 이 기사에서 확인할 수 있습니다.

#### Android 7 이상에서 HTTPS 필터링 문제

[Starting from Android 7](https://adguard.com/en/blog/android-nougat-release-and-what-does-it-mean-for-adguard-users.html), developers have to explicitly indicate that their apps trust user-installed certificates. 이제 AdGuard는 HTTPS 트래픽을 필터링하기 위해 사용자 인증서를 설치합니다. 앱이 이 인증서를 신뢰하지 않으면 HTTPS 트래픽이 필터링되지 않습니다. HTTPS 트래픽이 필터링되지 않으면 어떻게 해야 할까요?

우선, 많은 앱(최신 앱 포함)이 여전히 사용자 인증서를 신뢰합니다. 거의 모든 브라우저는 이러한 인증서도 신뢰합니다. 이 인증서를 신뢰하지 않는 일부 브라우저가 있을 수 있지만 드문 경우입니다.

그리고 기기가 루팅된 경우, AdGuard 인증서를 시스템 저장소로 이동할 수 있습니다. 이렇게하면 특정 앱에 권한이 있는지 여부에 대해 걱정할 필요가 없습니다. HTTPS 트래픽은 이전 앱뿐 아니라 최신 앱에서도 필터링됩니다. 그러나 HPKP 또는 `Expect-CT`와 같은 일부 추가 보안 제한이 AdGuard에 적용됩니다.

### HTTPS 품질을 수동으로 확인하는 방법은 무엇인가요?

특정 웹 사이트에서 HTTPS 연결 품질을 확인할 수 있습니다. 이러한 웹 사이트는 브라우저(또는 AdGuard를 사용 경우, 브라우저 + AdGuard)가 일반적인 취약점에 노출되는지 확인합니다. HTTPS를 필터링하는 프로그램을 사용하려는 경우, 다음과 같은 웹 사이트에서 연결 품질을 확인하는 것이 좋습니다.

- [https://www.ssllabs.com/ssltest/viewMyClient.html](https://www.ssllabs.com/ssltest/viewMyClient.html)
- [https://www.howsmyssl.com/](https://www.howsmyssl.com/)
- [https://badssl.com/](https://badssl.com/)
