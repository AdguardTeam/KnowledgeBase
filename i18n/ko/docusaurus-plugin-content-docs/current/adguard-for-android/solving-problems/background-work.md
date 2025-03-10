---
title: AdGuard가 시스템에 의해 비활성화되지 않도록 보호하는 방법
sidebar_position: 9
---

:::정보

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Android용 AdGuard에 관한 내용입니다. 어떻게 작동하는지 확인하려면, [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)하세요.

:::

경우에 따라 Android OS 최적화 기능 또는 소위 '배터리 절약 모드'로 인해 앱이 백그라운드(절전 모드)에서 유지되지 않을 수 있으며, 이 기능은 백그라운드 앱을 종료할 수 있습니다. 앱이 닫힐 때마다 다시 실행해야 하는 불편함이 있을 수 있습니다. 백그라운드 앱 종료를 방지하려면 Android OS의 제조사(버전)별로 별도로 설명한 단계를 따라야 합니다. 제조사별 지침은 대부분 매우 유사합니다.

## Asus

Asus 기기에 대한 정보는 아직 완전하지 않으므로 여기에 나열된 것보다 더 많은 문제가 있을 수 있습니다. 자세한 내용이 파악되는 대로 이 부분을 업데이트할 예정입니다.

Asus 장치에서 백그라운드 작업과 관련된 잠재적 문제의 주요 원인은 Power Master라는 최적화 앱과 관련이 있습니다. 사전 설치되어 있으며 앱 시작을 차단하고 화면이 꺼지면 백그라운드 작업을 종료하는 등 매우 공격적인 기본 설정이 있습니다. 앱 백그라운드 처리가 작동하도록 하려면 다음을 설정하세요:

1. **모바일 관리자** → **PowerMaster** → **설정**(또는 **배터리 절약 옵션**)으로 이동 → **일시 중단 시 정리**를 선택 취소합니다.

1. **모바일 관리자** → **PowerMaster** → **설정**(또는 **배터리 절약 옵션**)으로 이동 → **자동 시작에서 앱 자동 거부**를 선택 취소합니다.

또는 **자동 시작에서 앱 자동 거부**를 완전히 선택 해제하는 대신 **설정** → **배터리 절약 옵션** → **자동 시작 관리자** → **AdGuard**로 이동하여 선택을 해제할 수 있습니다.

## Xiaomi

Xiaomi(특히 MIUI) 기기는 백그라운드 작업과 관련하여 가장 문제가 많은 기기 중 하나입니다. 백그라운드 프로세스를 제한하고 비표준 권한이 있으며 적절한 지침이 부족한 것으로 알려져 있습니다. 때때로 앱이 Xiaomi 휴대폰에서 제대로 작동하지 않으며, 이에 대해 할 수 있는 조치가 거의 없습니다. 다음은 다양한 Xiaomi 기기에서 AdGuard의 백그라운드 작업과 관련하여 문제가 발생하는 경우 시도할 수 있는 몇 가지 조치입니다.

### MIUI 13+ 및 HyperOS

MIUI 및 HyperOS 버전에 따라 휴대폰의 배터리 최적화 설정을 변경하고 광고를 더 효율적으로 차단하는 두 가지 방법이 있습니다.

옵션 1

1. **설정** → **앱** → **권한** → **백그라운드 자동 시작으로** 이동하여 AdGuard가 백그라운드에서 실행되도록 허용합니다.

1. **설정** → **앱** → **앱 관리** → **AdGuard**로 돌아가서 **사용하지 않는 경우 앱 활동 일시 중지**를 선택 취소합니다.

1. **배터리 절약**으로 이동하여 **제한 없음**을 탭합니다.

옵션 2

1. **설정** → **앱** → **앱 관리** → **AdGuard**로 이동하여 **자동 시작**을 활성화합니다.

1. **배터리 절약**으로 이동하여 **제한 없음**을 탭합니다.

끝! 백그라운드에서 작동하도록 AdGuard를 설정했습니다.

### MIUI 12.0.8

백그라운드에서 AdGuard 앱이 실행되도록 하려면 다음을 수행하세요.

**설정** → **앱** → **앱 관리**에서 스크롤하여 **AdGuard**를 찾아 **자동 시작**을 '켜기'로 설정합니다.

![Xiaomi 설정 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

아래로 스크롤하여 **배터리 절약**을 탭하고 '제한 없음'으로 설정합니다.

![Miui *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_0a.png)

**기타 권한**에서 가능한 모든 권한을 '켜기'로 설정합니다.

**보안** 앱을 실행합니다.

화면 오른쪽 상단의 **톱니바퀴** 아이콘을 탭합니다.

![Miui 설정 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_1.jpeg)

설정에서 **속도 향상**을 탭합니다.

![Miui 설정 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_2.png)

**앱 잠금**을 탭합니다.

![Miui 설정 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_3.jpeg)

**앱 잠금** 화면에서 전환 스위치를 AdGuard 앱의 상태를 켜기로 설정합니다.

![Miui 설정 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/miui12_en_4.jpeg)

AdGuard 앱을 고정했습니다.

### MIUI 12

**설정** → **앱** → **앱 관리** → **AdGuard**로 이동합니다.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi4en.jpeg)

- 자동 시작을 '켜기'로 설정합니다.
- 기타 권한에서 가능한 모든 권한을 '켜기'로 설정합니다.
- 배터리 절약을 **제한 없음**으로 설정합니다.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi5en.jpeg)

이제 화면 하단에서 위로 스와이프하여 활성 앱 관리자를 실행하고 AdGuard 앱을 찾습니다.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi6.jpeg)

메뉴가 나타날 때까지 길게 누릅니다. 잠금 아이콘을 선택합니다.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi7en.jpeg)

잠금 아이콘이 앱 창 위에 나타나야 합니다.

![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomi8en.jpeg)

### MIUI 10-11

앱이 백그라운드에서 실행되도록 하려면 다음과 같이 설정을 구성하세요.

- 자동 시작을 '켜기'로 설정합니다.

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi1en.png)

- **설정** → **배터리 & 성능** → **배터리 절약** 기능을 비활성화합니다.

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi2en.png)

- 그런 다음 **앱 배터리 절약** 설정 → **AdGuard** → **제한 없음**으로 이동합니다.

![Xiaomi *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/xiaomi3en.png)

### 모든 기기

AdGuard 앱이 계속 종료되는 모든 Xiaomi 기기에서 다음 단계를 수행해야 합니다.

#### 전원 관리

다음을 활성화하세요:

- **설정** → **고급 설정** → **배터리 관리자** → **전원 정책**애서 **성능 우선**을 선택합니다.
- **기기 설정** → **고급 설정** → **배터리 관리** → **보호된 앱** - AdGuard가 **보호됨**으로 설정되어 있어야 합니다.
- **기기 설정** → **앱** → **AdGuard** → **배터리** → **특수 앱 액세스** 및 **화면 꺼진 후에도 계속 실행**을 활성화합니다.
- **설정** → **추가 설정** → **배터리 및 성능** → **앱 배터리 사용량 관리** 로 이동합니다.

1. 절전 모드를 '끄기'로 전환합니다.
1. 다음 옵션을 선택하세요: **백그라운드에서 절전** → **앱 선택** → **AdGuard** → **백그라운드 설정** → **제한 없음**

#### 앱 배터리 절약

**보안** → **배터리** → **앱 배터리 세이버** → **AdGuard**를 **제한 없음**으로 설정합니다.

#### 앱 고정

Xiaomi 기기에서 AdGuard의 백그라운드 작업을 설정하려면 배터리 및 권한에 추가 설정이 필요합니다.

- **최근 작업**을 탭하고 AdGuard를 아래로 스와이프하여 *옵션을* (스크린샷과 같이)로 설정합니다.:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirecent.png)

- **잠금** 아이콘을 탭합니다. 이제 Xiaomi 기기에서 AdGuard 앱이 자동으로 종료되지 않습니다. 다음과 같이 표시되어야 합니다:

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomilocked.png)

- **배터리로** 이동합니다.

- **배터리 세이버** 앱을 선택합니다.

- **AdGuard** 앱을 찾아 선택합니다.

- **백그라운드 설정**을 구성합니다.

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomirest.png)

- **권한**으로 이동합니다.

- **자동 시작**을 선택합니다.

- AdGuard에 자동 시작 기능이 활성화되어 있는지 확인하세요.

    ![Xiaomi *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/xiaomiautostart.png)

## Galaxy

대부분의 삼성 기기에서는 3일 동안 사용하지 않은 앱이 백그라운드에서 실행되지 않습니다. 이를 방지하려면 **적응형 배터리** 및 **앱 절전** 옵션을 가능한 한 비활성화해야 합니다. 앱 또는 OS 업데이트 후 이러한 설정은 종종 기본값으로 되돌아가며 다시 꺼야 합니다.

### Android 11+

Android 11에서는 사용자가 배터리 최적화에서 제외하지 않는 한 기본적으로 앱(AdGuard 포함)이 백그라운드에서 작동하지 않도록 합니다. AdGuard가 백그라운드에서 종료되지 않도록 하려면 다음 단계를 따르세요:

1. 최근 앱에서 AdGuard 고정

    - **최근 앱**을 엽니다.
    - AdGuard를 찾습니다.
    - AdGuard 앱의 아이콘을 길게 누릅니다.

1. AdGuard가 제대로 작동하도록 하려면 다음 단계를 따르세요.

    **설정** → **앱** → **AdGuard** → **배터리** → **배터리 사용량 최적화**로 이동합니다.

    ![Galaxy](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    하위 메뉴에서 **모든 앱**을 선택합니다. 그런 다음 목록에서 AdGuard를 찾아 상태를 **최적화하지 않음** (일부 기기에서는 스위치를 꺼야 할 수 있음)으로 설정합니다.

    ![Galaxy](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    일부 장치에서는 해당 설정의 이름이 다르게 지정되어 다른 위치에 있을 수 있습니다. 다른 가능한 경로는 다음과 같습니다.

    **설정** → **앱** → (⁝) 메뉴 → **특수 액세스** → **배터리 사용 최적화** → 목록에서 AdGuard를 찾아 선택 해제합니다.

1. 자동 최적화를 비활성화하려면 다음와 같이 설정합니다:

    **배터리** → (⁝) 메뉴 열기 → **자동화** → 모든 설정 비활성화

    다시 말하지만, 일부 장치에서는 경로가 다를 수 있습니다:

    휴대폰 **설정** → **기기 관리** → (⁝) 3점 메뉴 → **고급** → **자동 최적화 비활성화** 및 **설정 최적화하기**를 누릅니다.

1. 기기에 적응형 배터리 기능이 있는 경우 비활성화합니다.

    **설정** → **배터리** → **추가 배터리 설정** → **적응형 배터리** 항목을 비활성화합니다.

1. 사용하지 않는 앱 절전 비활성화 (이 설정의 정확한 이름과 경로는 장치에 따라 다를 수 있음):

    휴대폰 **설정** → **배터리** → **백그라운드 사용 제한** → **사용하지 않는 앱 절전 모드**로 전환을 엽니다.

### Android 9 & 10

- **휴대폰 설정** → **기기 관리** → **배터리** → **(⁝) 3점 메뉴** → **설정**으로 이동하여 **사용하지 않는 앱 절전 모드** 전환 및 사용하지 않는 앱 **자동 비활성화<0>를 선택 취소합니다.</p></li>

- **휴대폰 설정** → **앱** → **Android로 절전 모드** → **배터리** → **백그라운드 제한**이 AdGuard의 **앱이 백그라운드에서 배터리를 사용할 수 있음**으로 설정되어 있는지 확인하세요.

- 잠자기 앱에서 AdGard를 제거합니다. 잠자기 앱에서 AdGuard를 제거하려면 다음과 같이 하세요.

    1. **휴대폰 설정** → **기기 관리**로 이동합니다.

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. **배터리** 항목을 탭하니다.

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. **3점 메뉴** → **설정**을 탭합니다.

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. **절전 상태 앱** 항목을 탭합니다.

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. 휴지통 아이콘을 사용하여 AdGuard를 **깨웁니다**.

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)</ul>

### 구형 삼성 기기

구형 Samsung 기기의 경우 백그라운드 작업을 설정할 필요가 크지 않지만 잠시 후 AdGuard 앱이 닫히거나 최근 작업에서 사라지면 다음을 수행하세요.

- **최근 작업** 항목을 탭하고 **추가 설정** 아이콘을 탭합니다. 다음과 같이 표시되어야 합니다:

 ![Samsung 설정 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- **앱 잠금**을 탭합니다.

 ![Samsung 설정 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- 잠금 아이콘을 탭합니다.

 ![Samsung 설정 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

화웨이 기기에 탑재된 커스텀롬 **EMUI**의 비표준 백그라운드 프로세스 제한은 시장에서 가장 문제가 많은 측에 속합니다. 기본 설정에서는 백그라운드에서 작동하는 거의 모든 앱에 문제가 발생하여 결국 중단됩니다.

### 일부 EMUI 8, 9 및 10 디바이스(Huawei P20, Huawei P20 Lite, Huawei Mate 10…)에서는 앱이 구동됩니다.

이 기능은 모든 기기에서 사용 가능하거나 불가능할 수 있으며, 레이블이 다르게 표시될 수도 있습니다.

1. 휴대폰 **설정** → **배터리** → **앱 실행**으로 이동합니다.

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. **자동 관리**를 비활성화합니다.

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. AdGuard를 **수동으로 관리**로 설정하고 모든 설정을 활성화합니다.

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. 휴대전화가 켜진 이후 앱을 자동으로 시작하게 하는 **시작 관리자**를 비활성화합니다.

    **설정** → **모두** → **시작 관리자** → AdGuard 끄기로 이동합니다.

    또한 안정적인 백그라운드 프로세스를 위해 아래에 서술되어 있는 **PowerGenie**를 제거해야 할 수도 있습니다.

### EMUI 9+ 장치 및 PowerGenie

:::note

EMUI 9+(Android P+) 가 설치된 휴대폰에는 Huawei에서 허용하지 않은 모든 앱을 강제로 종료하고 사용자에게 설정을 제공하지 않는 PowerGenie라는 작업 종료 앱이 있습니다. 제거 방법은 아래를 참조하세요.

:::

Huawei는 자사의 기기에서 앱을 망가뜨리는데 매우 독창적입니다. 아래에 설명된 모든 비표준 전원 관리 조치 외에도 Android Pie의 EMUI 9에 내장된 작업 종료 앱을 도입했습니다.

**PowerGenie**라는 이 앱은 화이트리스트에 없는 모든 앱을 종료합니다. 미리 정의된 화이트리스트에는 사용자 지정 앱을 추가할 수 없습니다. 즉, Huawei에서 제대로 된 앱 기능을 사용하려면 PowerGenie를 제거하는 것 외에는 다른 방법이 없습니다.

안타깝게도 이 앱은 ADB(Android 디버그 브릿지)를 통해서만 완전히 제거할 수 있는 시스템 앱입니다.

:::note 출처

[XDA 포럼](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

PowerGenie 문제 **해결 방법:**

확인되지는 않았지만 **휴대폰 설정** → **앱**에서 PowerGenie를 비활성화할 수 있습니다. 기기 설정에 이 설정이 있는 경우 다음 단계를 건너뛸 수 있습니다. 그러나 기기를 재부팅할 때마다 설정을 다시 적용해야 합니다. 해당 설정이 없는 경우 이 지침을 따르세요.

1. 컴퓨터에 [ADB를 설치](https://www.xda-developers.com/install-adb-windows-macos-linux/)합니다.

1. 데이터 케이블로 휴대폰을 연결합니다.

1. [개발자 옵션](https://developer.android.com/studio/debug/dev-options.html)을 활성화합니다.

1. 휴대폰의 개발자 옵션에서 **USB 디버깅**을 활성화합니다.

1. 컴퓨터에서 다음 명령을 실행합니다.

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

이 조치 이후 AdGuard가 계속 종료되는 경우, 다음 명령도 실행해 보세요:

`adb shell pm stopservice hwPfwService`

### EMUI 6+ 기기(및 일부 EMUI 5 기기)

- **휴대폰 설정** → **고급 설정** → **배터리 관리** → **전원 요금제**를 **성능**으로 설정합니다.
- **휴대폰 설정** → **고급 설정** → **배터리 관리** → **보호된 앱** — AdGuard를 **보호됨**으로 설정합니다.
- **휴대폰 설정** → **앱** → **내 앱** → **배터리** → **전력 집약적 프롬프트** `[선택 취소]` 및 **화면 꺼진 후 계속 실행** `[선택]`을 선택합니다.
- **휴대폰 설정** → **앱** → **고급(하단)** → **최적화 무시** → 허용됨 → **모든 앱** → 목록에서 AdGuard를 찾아 **허용**으로 설정합니다.

#### Huawei P9 Plus

기기 설정 → **앱** → **설정** → **특수 액세스**를 열고 **배터리 최적화 무시** → AdGuard **허용**을 선택합니다.

### Huawei P20, Huawei Honor 9 Lite 및 Huawei Mate 9 Pro

기기 설정 열기 → **배터리** → **앱 실행** → AdGuard를 **수동으로 관리**로 설정한 뒤 모든 항목이 켜져 있는지 확인합니다.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**휴대폰 설정** → **배터리** → **앱 실행** → AdGuard를 **수동 관리**로 설정하고 모든 항목이 켜져 있는지 확인합니다. 또한 안정적인 백그라운드 프로세스를 위해 위에 서술되어 있는 PowerGenie를 제거해야 할 수도 있습니다.

### 초기 Huawei 모델

구형 Huawei 디바이스는 설정하기 가장 쉬우며, 배터리 절약 또는 백그라운드 종료 프로세스에 의해 종료되지 않도록 백그라운드에서 AdGuard를 잠금하는 간단한 두 단계만 수행하면 됩니다.

- **최근 작업** 버튼을 클릭합니다:

    ![Huawei 최근 앱 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- 잠금 아이콘을 탭합니다.

    ![Huawei 고정 *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

또한 AdGuard의 백그라운드 작업을 보다 효과적으로 설정하려면 기기 설정을 열고 다음을 수행합니다.

- **설정**으로 이동 → **배터리 관리** 열기 → **전원 요금제**를 **성능**으로 설정합니다.
- 그런 다음 **배터리 관리자**에서 **보호된 앱**을 선택하고 AdGuard가 보호되는지 확인합니다.
- 기본 설정에서 **앱**으로 이동하여 AdGuard를 탭하고 → **배터리** 선택 → **전력 집중 프롬프트** 및 **화면이 꺼진 후에도 계속 실행**을 활성화합니다.
- 그런 다음 **앱** 섹션에서 **설정**(하단) → **특수 액세스** → **배터리 최적화 무시**를 선택하고 **허용됨** → **모든 앱**을 누른 다음 목록에서 AdGuard를 찾아 **거부**로 설정합니다.

## Meizu

Meizu는 백그라운드 프로세스 제한에 대한 접근 방식이 Huawei 및 Xiaomi와 거의 동일합니다. 따라서 다음 설정을 조정하여 AdGuard 및 기타 앱의 백그라운드 작업을 비활성화하지 않을 수 있습니다.

- **고급 설정**으로 이동 → **배터리 관리**를 열고 → **전원 요금제**를 **성능**으로 설정합니다.
- 그런 다음 **배터리 관리자**에서 **보호된 앱**을 선택하고 AdGuard가 보호되는지 확인합니다.
- **앱** 섹션으로 이동하여 AdGuard를 탭하고 → **배터리** 선택 → **전력 집중 프롬프트** 및 **화면이 꺼진 후에도 계속 실행**을 활성화합니다.

## Nokia

Android 9+를 실행하는 Nokia 기기에서는 백그라운드 프로세스를 죽이는 주범인 **The Evenwell Power saver** 기능이 비활성화되어 있습니다. Nokia 휴대폰에서 AdGuard가 여전히 종료되는 경우, [이전 버전에 대한 도움말](https://dontkillmyapp.com/hmd-global)을 확인하세요.

### Nokia 1(Android Go)

1. 컴퓨터에 [ADB를 설치](https://www.xda-developers.com/install-adb-windows-macos-linux/)합니다.

1. 데이터 케이블로 휴대폰을 연결합니다.

1. [개발자 옵션](https://developer.android.com/studio/debug/dev-options.html)을 활성화합니다.

1. 휴대폰의 개발자 옵션에서 **USB 디버깅**을 활성화합니다.

1. 다음 ADB 명령을 통해 **com.evenwell.emm** 패키지를 제거합니다.

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 및 5.1

이러한 기기에는 모든 백그라운드 앱을 종료하는 **DuraSpeed**라는 태스크 킬러가 있습니다. 일반적인 방법으로는 제거하거나 비활성화할 수 없습니다. 이러한 작업에는 ADB가 필요하며, 비활성화되어 있어도 재부팅 시 DuraSpeed가 다시 활성화됩니다. DuraSpeed를 자동으로 비활성화하려면 [MacroDroid와](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) 같은 태스커 앱이 필요합니다.

1. 컴퓨터에 [ADB를 설치](https://www.xda-developers.com/install-adb-windows-macos-linux/)합니다.

1. 데이터 케이블로 휴대폰을 연결합니다.

1. [개발자 옵션](https://developer.android.com/studio/debug/dev-options.html)을 활성화합니다.

1. 휴대폰의 개발자 옵션에서 **USB 디버깅**을 활성화합니다.

1. 이 명령을 입력하여 MacroDroid(또는 선택한 자동화 앱)에 글로벌 설정 저장소에 쓸 수 있는 권한을 부여합니다.

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. **기기 부팅** 시 트리거되는 태스크를 생성하여 다음을 수행합니다.

    - 시스템 설정: 유형 **Global**, 이름 `setting.duraspeed.enabled`, 값 **-1**
    - 시스템 설정: 유형 **System**, 이름 `setting.duraspeed.enabled`, 값 **-1**
    - 시스템 설정: 유형 **Global**, 이름 `setting.duraspeed.enabled`, 값 **0**
    - 시스템 설정: 유형 **System**, 이름 `setting.duraspeed.enabled`, 값 **0**

    ![Nokia tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    **Global** 및 **System** 유형 설정이 모두 필요합니다. 스크린샷에는 Global만 예시로 나와 있습니다.


:::

### 기타 Nokia 모델

- 휴대폰 **설정** → **앱** → **모든 앱 보기로** 이동합니다.

- 오른쪽 상단 모서리 메뉴 → **시스템 보기**를 탭합니다.

목록에서 **절전 앱**을 찾아서 선택한 다음 **강제 종료**를 탭합니다. 잠시 동안 중지된 상태로 유지되지만 언젠가는 다시 시작됩니다.

이제부터 AdGuard는 절전 모드가 다시 시작될 때까지 정상적으로 작동하며 표준 Android 배터리 최적화를 사용합니다.

기술에 정통한 사용자를 위한 보다 영구적인 대안 솔루션입니다.

1. 컴퓨터에 [ADB를 설치](https://www.xda-developers.com/install-adb-windows-macos-linux/)합니다.

1. 데이터 케이블로 휴대폰을 연결합니다.

1. [개발자 옵션](https://developer.android.com/studio/debug/dev-options.html)을 활성화합니다.

1. 휴대폰의 개발자 옵션에서 **USB 디버깅**을 활성화합니다.

1. 다음 ADB 명령을 통해 **com.evenwell.powersaving.g3** 패키지를 제거합니다.

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## Oppo

화면을 끌 때 백그라운드 서비스(접근성 서비스 등 다시 활성화해야 하는 서비스 포함)가 종료되는 경우가 있습니다. 이 문제를 해결하는 방법은 다음과 같습니다.

**보안 센터**로 이동 → **개인정보 보호 권한** → **시작 관리자**를 탭하고 AdGuard 앱이 백그라운드에서 실행되도록 허용합니다.

기타 솔루션:

- 최근 앱 화면에 AdGuard를 고정합니다.
- 보안 앱의 '시작 관리자' 및 '플로팅 앱 목록'(com.coloros.safecenter / com.coloros.safecenter.permission.Permission) 내 앱 목록에서 AdGuard를 사용 설정합니다.
- 배터리 최적화를 끕니다.

## OnePlus

OxygenOS가 탑재된 기기는 OS 최적화를 포함하여 OS별 캐시 정리 및 여유 RAM이 가장 문제가 됩니다. 또한, 한동안 사용하지 않으면 OxygenOS가 AdGuard의 작동을 중단할 수 있습니다. 이러한 원치 않는 결과를 방지하려면 다음 단계를 따르세요.

### 앱 잠금

- **설정**로 이동합니다.

- **배터리** → **배터리 최적화**

- AdGuard를 찾습니다.

- AdGuard를 탭하고 **최적화하지 않음** 옵션을 선택합니다.

- **완료**를 탭하여 저장합니다.

- 최근 앱 메뉴를 엽니다(이 스크린샷에 표시된 대로).

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- AdGuard 앱을 잠급니다.

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::caution

일부 OnePlus 휴대폰에는 앱 자동 실행 및 심층 최적화라는 기능이 있어 기본적으로 앱이 백그라운드에서 작동하는 것을 방지합니다. AdGuard에 대해 비활성화하세요.

:::

### 배터리 최적화

- 기기 설정 → **배터리** → **배터리 최적화** → **모든 앱** 목록(상단 메뉴)으로 전환 → AdGuard → **최적화 안 함**을 활성화합니다.

- 기기 설정 → **배터리** → **배터리 최적화** → (⁝) 점 3개 메뉴 → **고급 최적화** → 심층 최적화 사용 안 함으로 설정합니다.

### 앱 자동 실행

앱 자동 실행(일부 OnePlus 휴대폰의 경우)은 기본적으로 앱이 백그라운드에서 작동하는 것을 방지합니다. AdGuard에 대해 비활성화하세요.

### 향상된/고급 최적화

OnePlus 6 이상의 경우:

- **시스템 설정** → **배터리** → **배터리 최적화** → (⁝) 점 3개 메뉴 → **고급 최적화**를 엽니다.
- **심층 최적화** / **적응형 배터리**를 비활성화합니다.
- **절전 대기 최적화**를 비활성화합니다. OnePlus는 사용자가 일반적으로 잠들어 있는 시간을 파악한 다음 해당 시간에는 휴대폰의 네트워크 연결을 비활성화합니다. 이 설정은 푸시 알림이 전달되지 않도록 합니다.

OnePlus 6 미만의 경우:

- **시스템 설정** → **배터리** → **배터리 최적화** → (⁝) 세 점 메뉴 → **향상된 최적화** 기능을 끕니다.

### 최근 앱 지우기 동작

일반적으로 앱을 스와이프하면 앱이 닫히지 않습니다. 그러나 OnePlus에서는 다른 방식으로 작동할 수 있습니다. 최근 앱 지우기 동작 관리자는 앱을 스와이프하여 닫으면 앱이 종료되도록 설정되어 있을 수 있습니다. '일반' 모드로 되돌리려면 다음과 같이 하세요.

**설정** → **고급** → **최근 앱 관리** → **일반 지우기**로 전환합니다.

## Sony

Sony는 비표준 백그라운드 프로세스 최적화를 도입한 최초의 모바일 OS 개발사입니다. **Stamina 모드**라고 하며 활성화하면 모든 백그라운드 프로세스를 즉시 중단합니다. 이 문제를 해결하려면 다음과 같이 하세요.

**설정** → **배터리** → **STAMINA 모드** 비활성화로 이동합니다.

![Sony Stamina mode *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

Android 11 이상에서는 STAMINA 모드와 같은 화면에 **적응형 배터리**라는 설정이 있으므로 이 설정도 비활성화해야 합니다.

또한 절전 기능에서 AdGuard를 예외로 설정해야 합니다.

**시스템 설정** → **앱 및 알림** → **고급** → **특수 앱 액세스** → **절전 기능** → AdGuard를 **예외**로 전환합니다.

## Wiko

Wiko 기기는 비표준 백그라운드 프로세스 최적화 측면에서 문제가 있습니다. AdGuard가 백그라운드에서 작동하도록 하려면 다음을 수행하세요.

- **휴대폰 어시스턴트** → **배터리** → **절전 모드** 끄기로 이동합니다.
- 돌아가서 **수동 모드**로 이동합니다.
- 오른쪽 상단의 **톱니바퀴** 아이콘 → **백그라운드 앱 화이트리스트** → **AdGuard**를 선택합니다.

## Android 스톡 기기 Pixel/Nexus/Nubia/Essential

Android 기본 OS는 일반적으로 백그라운드에서 작동하는 앱과 충돌하지 않지만, 문제가 발생하면 **항상 켜져 있는 VPN** 모드를 켜야 합니다.

- **설정** → **네트워크 및 인터넷**으로 이동합니다.

    ![Stocknetwork *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- **VPN**을 탭하고 **AdGuard**를 선택합니다.

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- **항상 켜져 있는 VPN** 모드를 설정합니다.

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)

## Realme

Realme UI 4.0을 실행하는 기기에서 AdGuard가 백그라운드에서 제대로 작동하도록 하기 위한 세 가지 주요 구성이 있습니다.

1. AdGuard 앱을 설정합니다.

    - AdGuard 아이콘을 길게 누릅니다.
    - 표시되는 메뉴에서 **앱 정보**를 선택합니다.
    - **배터리 사용량**으로 이동하여 모든 옵션을 활성화합니다.
        - 백그라운드 활동을 허용합니다.
        - 포그라운드 활동을 허용합니다.
        - 자동 실행을 허용합니다.
    - **앱 정보** 섹션에서 아래로 스크롤하여 사용하지 않는 경우 **앱 활동 일시 중지** 옵션을 끕니다.

    ![항상 켜져 있는 VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. 배터리를 설정합니다.

    - **설정 → 배터리 → 추가 설정 → 배터리 사용 최적화로** 이동합니다.
    - 목록에서 AdGuard를 찾아 **최적화 안 함**을 활성화합니다.
    - **기타 설정**에서 **앱 빠른 동결** 섹션을 선택하고 AdGuard에 대해 비활성화합니다.

    ![항상 켜져 있는 VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. AdGuard에 *항상 켜져 있는 VPN*을 활성화합니다.

    - **설정 → 연결 & 공유 → VPN**으로 이동합니다.
    - **AdGuard**를 찾아 **항상 켜져 있는 VPN** 옵션을 활성화합니다.

    ![항상 켜져 있는 VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)
