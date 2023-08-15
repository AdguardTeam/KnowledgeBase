---
title: How to setup outbound proxy
sidebar_position: 8
---

:::info

이 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Android용 AdGuard에 대해 다룹니다. 어떻게 동작하는지 알고 싶으시다면 [AdGuard 앱을 다운로드](https://adguard.com/download.html?auto=true) 해 보세요.

:::

AdGuard allows you to route your device's traffic through a proxy server. To access proxy settings, open **Settings** and then proceed to **Filtering** → **Network** → **Proxy**.

## Proxy configuration examples

In this article we give examples of how to set up some of the most popular proxies to work with AdGuard.

### Tor와 함께 AdGuard를 사용하는 방법

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy**. Download "Orbot: Proxy with Tor" directly from [Google Play](https://play.google.com/store/apps/details?id=org.torproject.android&noprocess) or by tapping **Integrate with Tor** and then **Install**.

2. Orbot을 열고 애플리케이션의 메인 화면에서 **시작** 버튼을 누릅니다.

3. Go back to the **Proxy** screen of AdGuard.

4. **Tor와 통합** 버튼을 누릅니다.

5. 모든 필수 필드는 다음과 같이 미리 채워집니다.

    | 필드      | 값                    |
    | ------- | -------------------- |
    | 프록시 유형  | *SOCKS4* 또는 *SOCKS5* |
    | 프록시 호스트 | *127.0.0.1*          |
    | 프록시 포트  | *9050*               |

Or you can tap **Proxy server** → **Add proxy server**, enter these values manually, and set Orbot as a default proxy.

6. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

Now AdGuard will forward all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable outbound proxy settings in AdGuard.

### PIA(Private Internet Access)와 함께 AdGuard를 사용하는 방법

*Here we presume that you are already a PIA VPN client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. **프록시 서버 추가** 버튼을 누르고 다음 데이터를 입력합니다.

    | 필드      | 값                                    |
    | ------- | ------------------------------------ |
    | 프록시 유형  | *SOCKS5*                             |
    | 프록시 호스트 | *proxy-nl.privateinternetaccess.com* |
    | 프록시 포트  | *1080*                               |

3. 프록시 **사용자 이름과 비밀번호** 필드도 작성해야 합니다. 프록시 사용자 이름과 비밀번호 필드를 작성하려면 PIA 웹 사이트의 [클라이언트 제어판](https://www.privateinternetaccess.com/pages/client-sign-in)에 로그인하세요. **PPTP/L2TP/SOCKS 비밀번호** 생성 섹션에서 **비밀번호 생성** 버튼을 클릭하신 다음, ‘x’로 시작하는 사용자 이름과 임의의 비밀번호가 표시됩니다. Use them to fill out the **Proxy username** and **Proxy password** fields in AdGuard.

4. Tap **Save and select**.

5. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### TorGuard와 함께 AdGuard를 사용하는 방법

*Here we presume that you are already a TorGuard client and have it installed on your device.*

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. **프록시 서버 추가** 버튼을 누르고 다음 데이터를 입력합니다.

    | 필드      | 값                                           |
    | ------- | ------------------------------------------- |
    | 프록시 유형  | *SOCKS5*                                    |
    | 프록시 호스트 | *proxy.torguard.org* or *proxy.torguard.io* |
    | 프록시 포트  | *1080* 또는 *1085* 또는 *1090*                  |

3. 프록시 사용자 이름과 비밀번호 필드에 TorGuard 가입 시 선택한 프록시 **사용자 이름**과 **비밀번호**를 입력합니다.

4. Tap **Save and select**.

5. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### NordVPN과 함께 AdGuard를 사용하는 방법

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. **프록시 서버 추가** 버튼을 누르고 다음 데이터를 입력합니다.

    | 필드      | 값                                                                              |
    | ------- | ------------------------------------------------------------------------------ |
    | 프록시 유형  | *SOCKS5*                                                                       |
    | 프록시 호스트 | *any server from [this list](https://support.nordvpn.com/Connectivity/Proxy/)* |
    | 프록시 포트  | *1080*                                                                         |

3. **사용자 이름** 및 **비밀번호** 필드에 NordVPN 사용자 이름과 비밀번호를 입력하십시오.

4. Tap **Save and select**.

5. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### Shadowsock과 함께 AdGuard를 사용하는 방법

*Here we presume that you have already configured a Shadowsocks server and a client on your device.*

:::note

You should remove Shadowsocks app from filtering before setting up the process (**App management** → **Shadowsocks** → **Route traffic through AdGuard**) to avoid infinite loops and drops.

:::

1. Open AdGuard and go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.

2. Tap the **Add proxy server** and fill in the fields:

    | 필드      | 값           |
    | ------- | ----------- |
    | 프록시 유형  | *SOCKS5*    |
    | 프록시 호스트 | *127.0.0.1* |
    | 프록시 포트  | *1080*      |

3. Tap **Save and select**.

4. Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy.

### How to use AdGuard with Clash

*Here we presume that you are already a Clash client and have it installed on your device.*

1. Open Clash and go to **Settings** → **Network** → **Route System Traffic** and toggle the switch. This will set Clash to proxy mode.
2. Open AdGuard and go to **App management**. Choose **Clash For Android** and disable **Route traffic through AdGuard**. This will eliminate traffic looping.
3. Then go to **Settings** → **Filtering** → **Network** → **Proxy** → **Proxy server**.
4. Tap **Add proxy server** and fill in the fields:

    | 필드      | 값           |
    | ------- | ----------- |
    | 프록시 유형  | *SOCKS5*    |
    | 프록시 호스트 | *127.0.0.1* |
    | 프록시 포트  | *7891*      |

## 제한

There is a factor that can prevent certain traffic from being routed through the outgoing proxy. AdGuard will only re-route traffic that goes through it. Basically, it means apps that have **Ad blocking** flag enabled in the **Apps Management** tab.