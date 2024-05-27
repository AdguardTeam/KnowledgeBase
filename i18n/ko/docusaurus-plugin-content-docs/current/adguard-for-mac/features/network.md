---
title: 네트워크
sidebar_position: 9
---

:::info

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Mac용 AdGuard에 관한 내용입니다. 작동 방식을 확인하려면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)하세요.

:::

## 보통

![네트워크](https://cdn.adtidy.org/content/kb/ad_blocker/mac/network.png)

### 자동으로 애플리케이션 필터

기본적으로 AdGard는 대부분의 브라우저에서 광고와 추적기를 차단합니다([Tor 브라우저는 예외](/adguard-for-mac/solving-problems/tor-filtering)). 이 설정을 사용하면 AdGuard가 앱 내 광고도 차단할 수 있습니다.

필터링된 앱을 관리하려면 **애플리케이션**을 클릭합니다.

### HTTPS 프로토콜 필터

이 설정을 통해 AdGuard는 현재 대부분의 웹사이트와 앱에서 사용되는 보안 HTTPS 프로토콜을 필터링할 수 있습니다. 기본적으로 은행 서비스와 같이 민감한 정보가 포함될 수 있는 웹사이트는 필터링되지 않습니다. HTTPS 제외를 관리하려면 **제외**를 클릭합니다.

기본적으로 AdGuard는 EV(Extended Validation) 인증서가 있는 웹사이트를 필터링하지 않습니다. 필요한 경우, **EV 인증서가 있는 웹사이트를 필터링** 옵션을 활성화할 수 있습니다.

## 아웃바운드 프록시

프록시 서버를 통해 모든 기기의 트래픽을 라우팅하도록 AdGuard를 설정할 수 있습니다.

## HTTP 프록시

AdGuard를 HTTP 프록시 서버로 사용할 수 있습니다. 이렇게 하면 프록시에 연결된 다른 기기의 트래픽을 필터링할 수 있습니다.

Mac과 다른 기기가 동일한 네트워크에 연결되어 있는지 확인하고, 프록시 서버를 통해 라우팅하려는 기기의 프록시 포트(일반적으로 네트워크 설정에 있음)를 입력합니다. HTTPS 트래픽도 필터링하려면 [AdGuard의 프록시 인증서를 이 기기로 전송](http://local.adguard.org/cert)하세요. [프록시 인증서 설치에 대해 자세히 알아보기](/guides/proxy-certificate)
