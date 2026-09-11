---
title: AdGuard VPN for Linux との併用
sidebar_position: 5
---

## AdGuard VPN for Linux との併用

AdGuard VPN ofr Linux を**トンネルモード**で使用し、AdGuard CLIを**自動プロキシモード**で使用することは、ルーティングループのため不可能です。AdGuard VPN for Linux のトラフィックは現在、AdGuard for Linux によって自動的にプロキシされることを除外できず、AdGuard for Linux のトラフィックは AdGuard VPN for Linux のトンネルを通過する必要があります。

考えられる解決策は2つです：

- AdGuard for Linux を**手動プロキシモード**に切り替える
  - この場合、AdGuard VPN for Linux は**トンネルモード**で使用できますが、広告ブロックが必要なアプリに関しては、AdGuard for Linux のプロキシを使用するようにそれぞれ手動で設定する必要があります。
- AdGuard VPN for Linux を**SOCKS5モード**に切り替え、AdGuard VPN for Linux のSOCKS5インターフェイスを指す送信プロキシでAdGuard for Linuxを構成します。 この場合、以下の点に留意することが重要です：
  - アプリのトラフィックがVPNトンネルを通過するには、そのトラフィックがAdGuard for Linuxによって透過的にプロキシされるか（デフォルトではすべてのアプリでそうなっています）、AdGuard VPN for LinuxのSOCKS5インターフェイスを使用するように手動で設定する必要があります。
  - ルーティングループを避けるには、AdGuard VPN for Linux のアプリ設定セクションで、`skip_outbound_proxy` オプションを有効にする必要があります。 デフォルトでは、`skip_outbound_proxy`は、名前に`vpn`が含まれるすべてのアプリ（AdGuard VPN for Linux を含む）で有効です。
