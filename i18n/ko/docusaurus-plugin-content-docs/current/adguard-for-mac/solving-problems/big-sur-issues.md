---
title: 다른 macOS 버전과의 호환성 문제
sidebar_position: 4
---

:::정보

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Mac용 AdGuard에 관한 내용입니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

## 현재 존재하는 문제

매년 Apple은 혁신적인 솔루션을 도입하고 새롭고 유용한 기능을 추가하는 새로운 버전의 macOS를 출시합니다. 그러나 네트워크 확장 API(Big Sur) 또는 iCloud 비공개 릴레이(Monterey)와 같은 일부는 많은 애플리케이션에 몇 가지 문제를 일으키며, AdGuard도 예외는 아닙니다. 이 도움말에서는 각 macOS 버전별로 알려진 문제와 이를 해결할 수 있는 방법을 살펴봅니다.

### Monterey 12: 현재 존재하는 문제

이러한 문제는 아직 Apple에서 해결되지 않았거나 부분적으로만 해결되었습니다.

#### iCloud 비공개 릴레이와의 호환성

현재 AdGuard와 iCloud 비공개 릴레이는 동시에 작동할 수 없습니다. AdGuard가 네트워크 연결을 필터링하기 전에 iCloud 비공개 릴레이가 트래픽을 암호화하기 때문에 광고를 차단할 수 없습니다. iCloud 비공개 릴레이가 활성화되면 모든 필터링(로컬 필터링 포함)이 불가능해집니다. 따라서 AdGard는 Safari에서 트래픽을 필터링하거나 DNS 필터링을 수행할 수 없습니다. 그렇기 때문에 AdGuard는 기본적으로 iCloud 비공개 릴레이를 비활성화하는 '기본 경로'를 사용합니다.

이 문제에 대해 자세히 알아보려면 [이 도움말 문서](../icloud-private-relay)를 참조하세요.

**권장 솔루션**

[AdGuard VPN](https://adguard-vpn.com/)과 같은 기존 VPN 서비스와 함께 사용하는 것을 권장합니다.

**대안 솔루션**

'기본 경로'를 비활성화하여 AdGuard가 '기본 경로'를 사용하지 못하도록 할 수 있습니다. 고급 설정 → `network.extension.monterey.force.split.tunnel`을 통해 이 작업을 수행할 수 있습니다. 이 설정을 활성화하면 위에서 설명한 문제가 발생할 수 있습니다.

![고급 설정 *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/mac_adguard_advanced_settings.jpg)

#### 메일의 개인 정보 보호(Protect Mail Activity)와의 호환성

이제 Apple의 메일 앱은 이메일에서 이미지를 다운로드할 때 프록시를 사용하여 사용자의 IP 주소를 숨깁니다. 하지만 활성 VPN 연결이 있는 경우에는 작동하지 않습니다. AdGuard를 VPN으로 취급하기 때문에 이미지를 자동으로 미리 로드하지 않습니다.

이 문제에 대해 자세히 알아보려면 [이 도움말 문서](../protect-mail-activity)를 참조하세요.

**권장 솔루션**

현재로서는 최신 Apple 개인정보 보호 기능 대신 [AdGuard VPN](https://adguard-vpn.com/)과 같은 일반적인 VPN 서비스를 사용하는 것을 권장합니다.

### Monterey 12, Big Sur 11.6 이후 버전: 현재 존재하는 문제

이러한 문제는 아직 Apple에서 해결되지 않았거나 부분적으로만 해결되었습니다.

#### Cisco AnyConnect와의 호환성

AdGuard는 *네트워크 확장* 모드에서는 Cisco AnyConnect와 함께 작동하지 않습니다. AdGuard를 *자동 프록시* 모드로 전환해야 합니다. 이렇게 하려면 [다음 지침](#automatic-proxy)을 따르세요.

#### Flutter와의 호환성

이 문제는 2021년 6월에 출시된 Flutter 2.2에서 해결되었습니다. 하지만 Flutter에서 개발된 애플리케이션에서 이 문제를 해결하려면 업데이트를 기다려야 합니다.

Monterey 또는 Big Sur에서 '네트워크 확장' 모드(또는 기타 '투명 프록시' 유형 앱)에서 AdGuard와 함께 Flutter를 사용하는 경우, 프로젝트가 열리지 않고 Flutter가 사실상 중단되는 문제가 발생할 수 있습니다. 이미 이 버그를 Apple에 신고했습니다. 그동안 다음과 같은 임시 해결책을 사용할 수 있습니다.

1. [자동 프록시](#automatic-proxy) 모드에서 AdGuard를 사용하세요.

1. [여기](#kernel-extension)에 설명된 대로 SIP를 비활성화하고 AdGuard를 커널 확장 모드로 전환합니다.

#### 이전 API를 사용하는 VPN 앱

AdGuard는 시스템 설정에서 VPN으로 표시되지만, 다른 VPN 기반 앱과 함께 사용할 때 충돌을 일으키지 않습니다. 그러나 App Store 외부에서 다운로드한 VPN 기반 앱을 사용하는 경우, 이전 VPN API를 사용할 위험이 있으므로 필터링에서 제외해야 합니다.

1. AdGuard의 메뉴를 엽니다.
1. *설정...*을 선택합니다.
1. *네트워크* 탭으로 전환합니다.
1. *애플리케이션...* 버튼을 클릭합니다.
1. 제외하려는 앱을 찾아 옆에 있는 확인란을 선택 취소합니다.

![필터링된 애플리케이션](https://cdn.adtidy.org/content/kb/ad_blocker/mac/legacy.jpg)

## 이미 해결된 문제

이러한 문제는 현재 Apple에서 수정되었지만 이전 버전의 macOS Big Sur에서 발생할 수 있습니다.

### Little Snitch 5와의 호환성

현재 AdGuard의 네트워크 확장 모드는 [Little Snitch 5](https://obdev.at/products/littlesnitch/index.html)와 호환되지 않습니다. 두 가지를 모두 실행하면 AdGuard에서 필터링하지 않더라도 다양한 앱의 동작에 문제가 발생할 위험이 있습니다. 이 문제는 Big Sur의 버그로 인해 직접적으로 발생했으며, 이미 Apple에 이 사실을 알렸습니다. 따라서 다음 업데이트 중 하나에서 이 문제가 해결될 것으로 예상됩니다.

하지만 Little Snitch에서 연결 모니터링을 비활성화해도 시스템 메모리에서 Little Snitch 확장 프로그램이 언로드되지 않으므로 문제가 해결되지는 않습니다. 최소한 Apple이 버그를 수정할 때까지는 Big Sur에서 Little Snitch와 함께 AdGuard를 실행할 때 [**자동 프록시**](#automatic-proxy) 필터링 모드로 전환할 것을 권장합니다.

### 로컬 프록시와의 호환성

:::note

이제 AdGuard는 문제 없이 로컬 프록시를 필터링할 수 있습니다. OS 버전 11.1 이상에서 문제가 발생하거나 Big Sur 11.0을 사용하는 경우, 시스템 설정에서 로컬 프록시를 제거하고 아래 지침에 따라 AdGuard에서 업스트림 프록시를 구성하세요.

:::

Big Sur의 Mac용 AdGuard에서 업스트림 프록시를 구성하려면 다음과 같이 하세요.

1. AdGuard의 설정 *설정 → 네트워크 → 아웃바운드 프록시*를 엽니다.
2. 프록시 유형에 따라 HTTP, HTTPS, SOCKS4 또는 SOCKS5를 선택합니다.
3. 다음 필드를 입력하세요.
    - `host`는 프록시 서버의 IP 주소입니다.
    - `port`는 프록시 서버에서 사용할 원하는 포트 번호입니다.
    - `user`와 `password`는 프록시의 해당 사용자 아이디와 비밀번호(필요한 경우)입니다. 해당되지 않는 경우 둘 중 하나 또는 둘 다 무시합니다.

문제가 발생하면 기술 지원팀(support@adguard.com)으로 문의하시기 바랍니다.

#### 예제 1: 업스트림 Shadowsocks 프록시 구성

다음은 [Shadowsocks](https://shadowsocks.org)에 대한 업스트림 프록시를 구성하는 방법의 예시입니다.

우선, 프록시를 위한 서버 측이 작동해야 합니다. 대부분의 경우 다음과 같은 JSON 파일을 사용하여 설정합니다(`server` 및 `password` 값은 여기서 임의로 선택됨):

```json
{
   "server":"111.222.333.444",
   "server_port":8388,
   "local_port":1080,
   "password":"barfoo!",
   "timeout":600,
   "method":"chacha20-ietf-poly1305"
}
```

:::tip

시작하는 방법에 대한 자세한 내용은 [Shadowsocks 웹사이트](https://shadowsocks.org/guide/what-is-shadowsocks.html)에서 확인할 수 있습니다.

:::

그런 다음 Mac에 Shadowsocks 클라이언트를 설치해야 합니다. 설정에서 '수동 모드' 또는 '자동 모드'를 선택했는지 확인하세요. 'Global Mode'(또는 11.1 이전 Big Sur 버전에서는 '자동 모드')를 선택하면 구성이 작동하지 않습니다.

![설정에서 수동 모드 또는 자동 모드를 선택하세요 *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/mac/shadowsocks.jpg)

이제 *AdGuard 메뉴 → 고급 → 고급 설정...*으로 이동하여 `upstream.proxy` 설정의 *값* 영역을 `socks5://localhost:1080`으로 설정합니다. 여기서 JSON 파일의 'local_port' 값을 사용해야 한다는 점에 유의하세요.

Shadowsocks는 SOCKS5를 사용하기 때문에 AdGuard 고급 설정에서 `upstream.proxy.socks5udp` 설정 값을 `true`로 설정해야 AdGuard가 UDP 트래픽을 프록시 서버로 라우팅할 수 있습니다.

#### 예제 2: 업스트림 Surge 프록시 구성

Big Sur v11.1+에서는 AdGuard와 Surge 프록시 간에 알려진 충돌이 없습니다. 이전 버전의 Big Sur(11.1 이전 버전)를 사용 중인 경우 오른쪽 하단의 **시스템 프록시**가 비활성화되어 있는지 확인하세요. 그렇지 않으면 Surge는 AdGuard와 함께 작동하지 않습니다. 반면에 **Enhanced Mode**는 모든 Big Sur 버전에서 충돌을 일으키지 않고 활성화할 수 있습니다.

![업스트림 Surge 프록시 구성 *border](https://cdn.adtidy.org/content/kb/ad_blocker/mac/outbound-proxy.png)

이제 *설정 → 네트워크 → 아웃바운드 프록시*로 이동하여 입력란을 채웁니다. SOCKS5 프록시 유형의 경우:

- `host`: localhost
- `포트`: 6153 HTTP 프록시 유형의 경우:
- `host`: localhost
- `port`: 6152

## 네트워크 확장(Network Extension) 대신 사용할 수 있는 방법

Big Sur나 Monterey에서 발생할 수 있는 모든 문제를 예측하는 것은 불가능하며, 하드웨어/소프트웨어 및 설정 구성은 무수히 다양합니다. 호환성 문제가 발생하면 지원팀에 문의하시되, 먼저 이러한 해결 방법 중 하나를 시도해 보세요.

### '자동 프록시' 필터링 모드 사용 {#automatic-proxy}

위의 방법으로 해결할 수 없는 문제가 Big Sur 또는 Monterey에서 발생하는 경우, AdGuard를 *자동 프록시* 모드로 전환해 보세요.

1. AdGuard의 메뉴를 엽니다.
1. *설정...*을 선택합니다.
1. *네트워크* 탭으로 전환합니다.
1. *모드 선택...* 버튼을 클릭합니다.
1. *자동 프록시*를 선택합니다.

![AdGuard를 자동 프록시 모드로 전환하기](https://cdn.adtidy.org/content/kb/ad_blocker/mac/automatic-proxy_en.jpg)

이제 AdGuard가 Mac의 네트워크 설정에 **.pac** 파일을 자동으로 추가하여 시스템이 AdGuard를 프록시로 간주하고 모든 트래픽을 AdGuard를 통해 전송하려고 시도합니다.

:::note

일부 앱은 이 시스템 설정을 무시하고 트래픽이 필터링되지 않을 수 있습니다.

:::

### Big Sur 및 Monterey에서 커널 확장 프로그램 활성화 {#kernel-extension}

Big Sur 및 Monterey에서는 기존 커널 확장 프레임워크가 비활성화되어 있으므로 기본적으로 AdGuard는 네트워크 확장 프레임워크를 사용합니다. 이로 인해 일부 호환성 문제가 발생할 수 있지만 커널 확장 프로그램을 다시 사용하려면 먼저 SIP(System Integrity Protection, 시스템 무결성 보호)를 비활성화해야 합니다. SIP를 비활성화하려면 다음 지침을 따르세요.

1. 메뉴 표시줄에서 *Apple 기호*를 클릭합니다.
1. *다시 시작...*을 클릭합니다.
1. *Command-R*을 길게 눌러 복구 모드로 재부팅합니다.
1. *유틸리티*를 클릭합니다.
1. *터미널*을 선택합니다.
1. `csrutil disable`을 입력합니다.
1. 키보드에서 *Return* 또는 *Enter* 키를 누릅니다.
1. 메뉴 표시줄에서 *Apple 기호*를 클릭합니다.
1. *다시 시작...*을 클릭합니다.

이제 SIP가 비활성화되었으므로 커널 확장 프로그램을 사용하도록 설정하는 방법은 다음과 같습니다.

![커널 확장 프로그램 활성화](https://cdn.adtidy.org/content/kb/ad_blocker/mac/kernel_en.jpg)

1. AdGuard의 메뉴를 엽니다.
1. *설정...*을 선택합니다.
1. *네트워크* 탭으로 전환합니다.
1. *모드 선택...* 버튼을 클릭합니다.
1. *커널 확장 프로그램*을 선택합니다.
1. 커널 확장 프로그램으로 전환할 것인지 확인합니다.

:::caution

그러나 이 방법은 예기치 않은 문제가 발생할 수 있으므로 다른 모든 방법이 실패한 경우에만 사용하는 것이 좋습니다.

:::
