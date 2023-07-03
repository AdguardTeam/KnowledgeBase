---
title: How to setup outbound proxy
sidebar_position: 8
---

:::info

This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://adguard.com/download.html?auto=true)

:::

인기 프록시와 AdGuard를 함께 작동하도록 하기 위해 설정해야하는 방법을 확인하세요.

### Tor와 함께 AdGuard를 사용하는 방법

1. Open AdGuard and go to **Settings** → **Network** → **Proxy settings**. **Tor와 통합** 버튼을 누르거나 [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess)에서 ‘Orbot: Proxy with Tor’를 다운로드합니다.

2. Orbot을 열고 애플리케이션의 메인 화면에서 **시작** 버튼을 누릅니다.

2. AdGuard의 **프록시 섹션**으로 돌아갑니다.

3. **Tor와 통합** 버튼을 누릅니다.

4. 모든 필수 필드는 다음과 같이 미리 채워집니다.

| 필드      | 값                    |
| ------- | -------------------- |
| 프록시 유형  | *SOCKS4* 또는 *SOCKS5* |
| 프록시 호스트 | *127.0.0.1*          |
| 프록시 포트  | *9050*               |

또는 **프록시 서버 추가**를 탭하고 값을 수동으로 입력한 후, Orbot 프록시를 기본으로 설정할 수 있습니다.

5. AdGuard 보호를 활성화합니다.

Now AdGuard will forward all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable outbound proxy settings in AdGuard.

### PIA(Private Internet Access)와 함께 AdGuard를 사용하는 방법

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Network** → **Proxy settings**.

2. **프록시 서버 추가** 버튼을 누르고 다음 데이터를 입력합니다.

| 필드      | 값                                    |
| ------- | ------------------------------------ |
| 프록시 유형  | *SOCKS5*                             |
| 프록시 호스트 | *proxy-nl.privateinternetaccess.com* |
| 프록시 포트  | *1080*                               |

3. 프록시 **사용자 이름과 비밀번호** 필드도 작성해야 합니다. 프록시 사용자 이름과 비밀번호 필드를 작성하려면 PIA 웹 사이트의 [클라이언트 제어판](https://www.privateinternetaccess.com/pages/client-sign-in)에 로그인하세요. **PPTP/L2TP/SOCKS 비밀번호** 생성 섹션에서 **비밀번호 생성** 버튼을 클릭하신 다음, ‘x’로 시작하는 사용자 이름과 임의의 비밀번호가 표시됩니다. AdGuard에서 이 **사용자 이름**과 임의의 **비밀번호**를 작성하세요.

4. 스위치를 전환하여 이 프록시를 기본으로 설정한 후 **저장**을 누릅니다.

5. AdGuard 보호를 활성화합니다.

### TorGuard와 함께 AdGuard를 사용하는 방법

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Network** → **Proxy settings**.

2. **프록시 서버 추가** 버튼을 누르고 다음 데이터를 입력합니다.

| 필드      | 값                                           |
| ------- | ------------------------------------------- |
| 프록시 유형  | *SOCKS5*                                    |
| 프록시 호스트 | *proxy.torguard.org* or *proxy.torguard.io* |
| 프록시 포트  | *1080* 또는 *1085* 또는 *1090*                  |

3. 프록시 사용자 이름과 비밀번호 필드에 TorGuard 가입 시 선택한 프록시 **사용자 이름**과 **비밀번호**를 입력합니다.

4. 스위치를 전환하여 이 프록시를 기본으로 설정한 후 **저장**을 누릅니다.

5. AdGuard 보호를 활성화합니다.

### NordVPN과 함께 AdGuard를 사용하는 방법

1. Open AdGuard and go to **Settings** → **Network** → **Proxy settings**.

2. **프록시 서버 추가** 버튼을 누르고 다음 데이터를 입력합니다.

| 필드      | 값                                                             |
| ------- | ------------------------------------------------------------- |
| 프록시 유형  | *SOCKS5*                                                      |
| 프록시 호스트 | *[이 목록](https://nordvpn.com/servers/)에서 ‘난독화’ 외에 모든 서버 사용 가능* |
| 프록시 포트  | *1080*                                                        |

3. **사용자 이름** 및 **비밀번호** 필드에 NordVPN 사용자 이름과 비밀번호를 입력하십시오.

4. 스위치를 전환하여 이 프록시를 기본으로 설정한 후 **저장**을 누릅니다.

5. AdGuard 보호를 활성화합니다.

### Shadowsock과 함께 AdGuard를 사용하는 방법

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

**Note: You should remove Shadowsocks application from filtering before setting up the process (AdGuard - Apps management - Shadowsocks - Disable AdGuard protection) to avoid infinite loops and drops.**

1. Open AdGuard and go to **Settings** → **Network** → **Proxy settings**.

2. **프록시 서버 추가**를 탭하고 필드를 입력합니다.

| 필드      | 값           |
| ------- | ----------- |
| 프록시 유형  | *SOCKS5*    |
| 프록시 호스트 | *127.0.0.1* |
| 프록시 포트  | *1080*      |

3. **저장 및 선택**을 누릅니다.

### 제한

There is a factor that can prevent certain traffic from being routed through the outgoing proxy. AdGuard will only re-route traffic that goes through it. Basically, it means apps that have **Ad blocking** flag enabled in the **Apps Management** tab.
