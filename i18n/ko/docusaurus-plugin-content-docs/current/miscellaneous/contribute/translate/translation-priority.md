---
title: Crowdin 파일 번역의 우선순위를 정하는 방법
sidebar_position: 5
---

Crowdin에는 다음과 같이 5개의 주요 AdGuard 프로젝트가 있습니다. [AdGuard Application](https://crowdin.com/project/adguard-applications), [AdGuard Websites](https://crowdin.com/project/adguard-websites), [AdGuard Ad Blocker Knowledge Base](https://crowdin.com/project/adguard-knowledge-base), [AdGuard VPN Knowledge Base](https://crowdin.com/project/adguard-vpn-knowledge-base), [AdGuard DNS Knowledge Base](https://crowdin.com/project/adguard-knowledge-bases)입니다.

*AdGuard Applications* 프로젝트의 어떤 파일 또는 제품부터 시작해야 하는지에 대한 명확한 가이드라인이 없습니다. 원하는 제품을 선택하시면 됩니다.

몇 가지 언급하고 싶은 것이 있습니다.

- 이 앱은 Crowdin에서 모든 번역이 완료된 언어를 사용하는 사용자에게만 제공됩니다.
- 제품 자체의 번역이 없으면 설명이 필요하지 않으므로 앱 스토어용 설명은 두 번째로 번역하는 것이 좋습니다.

*AdGuard Websites* 프로젝트는 상황이 다릅니다. 전체 번역 세트를 사용할 수 없더라도 사이트에 언어를 추가할 수 있습니다. 그러나 이는 이미 번역된 파일에 따라 다릅니다. 따라서 아래에 나열된 가장 중요한 파일부터 시작하는 것이 좋습니다.

[AdGuard 광고 차단기 웹사이트](https://crowdin.com/project/adguard-websites/en#/adguard.com)

- `critical.resx`
- `auth.resx`
- `welcome.resx`

[AdGuard VPN 웹사이트](https://crowdin.com/project/adguard-websites/en#/adguard-vpn.com)

- `critical.resx`
- `auth.resx`

[AdGuard DNS 웹사이트](https://crowdin.com/project/adguard-websites/en#/adguard-dns.com)

- `critical.resx`
- `auth.resx`

이러한 파일에 새 문자열을 추가하고 기존 문자열을 업데이트하려면 프로젝트 번역가와 교정자의 특별한 주의가 필요합니다.

웹사이트 외에도 AdGuard 웹사이트 프로젝트에는 [트랜잭션 이메일](https://crowdin.com/project/adguard-websites/en#/emails) 번역을 위한 파일이 있습니다. 이 파일에 새로 추가된 문자열도 번역 우선 순위가 높습니다.
