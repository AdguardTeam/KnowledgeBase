---
title: 배터리 및 트래픽 소비 문제
sidebar_position: 1
---

:::info

이 문서는 시스템 수준에서 기기를 보호하는 다기능 광고 차단기인 Android용 AdGuard에 대해 다룹니다. 어떻게 동작하는지 알고 싶으시다면 [AdGuard 앱을 다운로드](https://adguard.com/download.html?auto=true) 해 보세요.

:::

On Android devices running OS 6 and earlier, built-in statistics often attributed high data and/or battery usage to AdGuard. This was because AdGuard counted all the traffic it filtered from various apps. As a result, AdGuard's share of total data and battery usage was overstated, while other apps were understated.

With Android 7, however, this scenario has improved. Now the data reflected in Android's built-in data usage statistics is very close to reality, although there are minor discrepancies in the battery usage data.

However, AdGuard users can always get a true picture of the situation on the *Battery usage* screen.

### 자체 배터리 사용 통계 화면

You can access it by navigating to *Statistics* → *Battery usage*.

![배터리 통계 *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

Inside you will find a chart that shows the AdGuard battery resource consumption within the last 24 hours, with an option to get more detailed hour-to-hour data by tapping on the chart. 또한 데이터의 숫자 분석과 간단한 기술 설명도 있습니다.

### AdGuard는 실제로 얼마나 많은 배터리를 소비합니까?

First, let us lay down a bit of theory and links with necessary data.

1. Android는 모든 제조업체에서 제공하는 소위 ‘전력 프로필’을 기준으로 트래픽 소비를 유도합니다: <https://source.android.com/devices/tech/power/values.html>

2. 전원 프로필의 주 사항은 기기의 모든 구성 요소에 대한 배터리 소모량을 정의하는 mAh 값들입니다: <https://source.android.com/devices/tech/power/values.html>

예를 들어, 위 표에서

_wifi.active=_ WiFi 데이터 교환으로 인한 mAh 단위의 추가 소비량은 31mA입니다.

_radio.active=_ 모바일 네트워크를 통한 데이터 교환으로 인한 100~300mA 추가 소비량

_cpu.active=_ CPU 사용으로 인한 100~200mA 추가 소비량 (mAh)

3. AdGuard는 트래픽을 거의 소비하지 않으므로 배터리 리소스 소비를 평가하기 위해 '모바일/WiFi 패킷'을 제거하고 'CPU'에 집중합시다.

소비량 계산 공식
> "CPU TIME (ms)" X "cpu.active" / (60 60 1000) = "POWER USE mAh"

이 공식에 숫자를 대입합니다.

두 번째 스크린샷에서 총 CPU를 밀리초(506000)로 변환해 보겠습니다.

2GHz에 대한 _cpu.active_ 계수는 대략 225mAh와 같습니다.

결과
> 506000 225 / (60 60 * 1000) = 31,625mAh

### 결론

실제 소비는 Android 통계에 표시된 것보다 **몇 배나 적습니다**. 220mAh 대신 31~40mAh 정도입니다. 반면 브라우저의 소비량은 66mAh가 아니라 ~ 200mAh 입니다.
