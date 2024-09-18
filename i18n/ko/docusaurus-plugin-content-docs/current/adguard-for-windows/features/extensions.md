---
title: 확장 프로그램
sidebar_position: 3
---

:::info

본 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Windows용 AdGuard에 대해 다룹니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

AdGuard는 [유저스크립트 관리자](/general/userscripts) 역할을 수행하여 웹사이트 기능을 크게 확장할 수 있습니다. AdGuard 사용자는 자체 스크립트를 추가할 수 있을 뿐만 아니라 기존 스크립트를 관리할 수도 있습니다.

![확장 프로그램 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/userscripts.png)

**유저스크립트를 자동으로 감지**

이 옵션을 활성화하면 AdGuard가 자동으로 브라우저 검색어를 유저스크립트에 정의하고 설치를 제안합니다. 그렇지 않으면 확장 프로그램을 수동으로 다운로드하여 설치할 수 있습니다.

AdGuard와 함께 설치되는 확장 프로그램은 다음과 같습니다.

![사전 설치된 유저스크립트 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/preinstalled-userscripts.png)

**AdGuard 어시스턴트**

AdGuard 어시스턴트는 브라우저에서 [새 어시스턴트](/adguard-for-windows/browser-assistant.md)를 사용할 수 없는 경우 사용할 수 있는 이전 어시스턴트입니다. 이 확장 프로그램은 사용자가 앱 자체를 열지 않고도 브라우저에서 바로 기본 AdGuard 설정을 변경할 수 있도록 도와줍니다. AdGuard 어시스턴트는 모든 Microsoft Windows 호환 브라우저에서 작동합니다. 또한 사용자가 예외로 지정한 웹사이트와 잘못된 콘텐츠가 표시될 위험이 있는 특정 웹페이지에는 AdGuard 어시스턴트 아이콘이 표시되지 않습니다.

**AdGuard Extra**

이 확장 프로그램은 차단된 광고를 다시 삽입하는 기술(소위 광고 차단기 우회/광고 재삽입)에 대응하기 위해 설계된 맞춤형 확장 프로그램입니다. 이 두 가지 방법 모두 광고주들 사이에서 지속적으로 인기를 얻고 있는 고급 광고 차단 방어 방법입니다.

AdGuard Extra is essentially a miniprogram that changes the way pages work in such a way that it becomes much more difficult for sites to use the above-mentioned methods to bypass blockers.

**AdGuard 팝업 차단기**

이 확장 프로그램은 웹페이지를 볼 때 팝업 창이 열리지 않도록 합니다. 일부 팝업에는 사이트 관리를 위한 설정이나 링크 클릭 시 표시되는 추가 참조 정보가 포함될 수 있으므로 유용한 것으로 간주됩니다. 그렇기 때문에 필요한 경우 차단기를 끌 수 있습니다. 이 확장 프로그램은 AdGuard 예외 목록에 추가된 웹사이트에서도 작동하지 않습니다. 기본적으로 꺼져 있지만 애플리케이션 설정에서 켤 수 있습니다. You will find more detailed information about this extension in our Knowledge Base.

**Web of Trust**

Web of Trust를 사용하면 사용자 의견을 기반으로 각 웹사이트의 평판을 확인할 수 있습니다. 사이트는 신뢰도, 보안 등 여러 가지 특정 기준에 따라 평가됩니다. 이 확장 기능은 기본적으로 꺼져 있지만 애플리케이션 설정에서 켤 수 있습니다. AdGuard는 이 확장 프로그램의 개발자가 아니라는 점에 유의하세요.

### 네트워크

이 모듈은 네트워크 필터링 전용 모듈입니다. 여기에서 네트워크 관련 추가 옵션을 찾을 수 있습니다. Two of them are enabled by default: _Enable traffic filtering_ and _Filter HTTPS_. 이는 웹 공간을 더 잘 필터링하기 위한 중요한 추가 예방 조치입니다. 대부분의 웹 사이트와 광고 네트워크는 현재 HTTPS를 사용하고 있습니다. From many sites, like youtube.com, facebook.com and x.com, it is impossible to remove ads without HTTPS filtering. So keep the _Filter HTTPS_ feature enabled unless you have a strong reason not to.

![네트워크 설정 \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

이 모듈에서 'AdGuard를 HTTP 프록시로 사용' 확인란을 선택하면 AdGuard를 통과하는 모든 트래픽을 필터링하는 일반 HTTP 프록시로 사용할 수 있습니다. **EV 인증서가 있는 웹사이트를 필터링** 기능을 활성화할 수도 있습니다. EV(Extended Validation) SSL 인증서는 더 강력한 안전 보장을 제공하며, 해당 웹사이트 소유자는 EV 가이드라인에 정의된 철저하고 전 세계적으로 표준화된 신원 확인 프로세스를 통과해야 합니다. 그렇기 때문에 일부 사용자는 이러한 인증서가 있는 사이트를 신뢰하고 필터링하지 않기로 선택합니다.

마지막으로 프록시 설정 섹션이 있습니다. 여기에서 필터 업데이트, 새 버전 가져오기 등에 AdGuard가 사용할 프록시 서버를 지정할 수 있습니다.

### AdGuard VPN

마지막 섹션에서는 인터넷 서핑 시 보안과 익명성을 제공하는 도구인 AdGuard VPN을 소개합니다. AdGuard VPN을 다운로드하려면 **다운로드** 버튼을 클릭하거나 **홈페이지** 버튼을 클릭하여 공식 웹사이트로 이동하세요.

AdGuard VPN은 어떻게 작동하나요? VPN은 사용자의 컴퓨터 또는 모바일 기기와 원격 VPN 서버 사이에 암호화된 보안 터널을 생성합니다. 따라서 실제 사용자 IP가 아닌 VPN 서버의 IP 주소가 표시되기 때문에 데이터 기밀성과 사용자 익명성이 유지됩니다.

**AdGuard VPN의 기능:**

- 실제 위치를 숨기고 익명성을 유지합니다.
- 트래커로부터 데이터를 보호하기 위해 IP 주소를 변경합니다.
- 트래픽을 암호화하여 제3자가 읽을 수 없도록 합니다.
- VPN을 사용하는 사이트와 사용하지 않는 사이트를 구성할 수 있습니다 (예외 목록).

AdGuard VPN에 대한 자세한 내용은 [AdGuard VPN 지식 창고](https://adguard-vpn.com/kb/)를 참조하세요.
