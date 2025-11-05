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

On many Samsung devices, apps that have been unused for three days will not be able to start from the background. To prevent this, you should turn off the **Adaptive Battery** and **Put apps to sleep** options wherever possible. Note that after an app or OS update, these settings often revert to their default values and must be turned off again.

### Android 11+

On Android 11, Samsung prevents apps (including AdGuard) from working in the background by default, unless you exclude them from battery optimizations. To ensure that AdGuard will not be terminated in the background:

1. Lock AdGuard in **Recent apps**: open **Recent apps**, find AdGuard, and long-press the AdGuard app icon.

1. To keep AdGuard working properly:

    Go to **Settings** → **Apps** → **AdGuard** → **Battery** → **Optimize battery usage**

    ![Galaxy](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize.png)

    In the drop-down menu, select **All**. Then find AdGuard on the list and set the state for it to **Don’t optimize** (on some models, there may be a switch that you need to toggle off).

    ![Galaxy](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/samsung-a11-optimize-2.png)

    On some devices, the relevant setting may be named differently and be located in other places. Among the possible paths is **Settings** → **Apps** → (⁝) menu → **Special access** → **Optimize battery usage**. Find AdGuard on the list and uncheck it.

1. Disable automatic optimization:

    Open **Battery** → (⁝) menu → **Automation** and toggle off all the settings there.

    Again, the exact path may differ. For example, on some devices you should go to phone **Settings** → **Device care** → (⁝) menu → **Advanced** and isable **Auto optimization** and **Optimize settings**.

1. If your phone has this option, disable **Adaptive battery**:

    Open phone **Settings** → **Battery** → **More battery settings** and toggle off **Adaptive battery**

1. Disable **Sleeping apps** (the exact name of this setting and the path to it may vary depending on the device):

    Open phone **Settings** → **Battery** → **Background usage limits** and disable **Put unused apps to sleep**

If you’re still experiencing issues, try these additional battery optimization adjustments:

 1. Navigate to **Settings** → **Apps** → **AdGuard** → **Battery** and turn on the **Optimised** option:

    ![Optimised settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/app__battery_optimised_mode.png)

 1. Go to **Settings** → **Battery** → **Background usage limits** → **Never auto sleeping apps**:

    ![Never auto sleeping apps settings *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/background_usage_limits.png)

 1. Choose AdGuard from the list of apps. If you don’t see it, return to step 1 and make sure that the *Optimized* battery mode is active:

    ![Choose the app *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/never_auto_sleeping_apps.png)

### Android 9 & 10

- Go to **Phone settings** → **Device care**, tap the **Battery** item, go to (⁝) **3-dot menu** → **Settings**, and uncheck **Put unused apps to sleep** and **Auto-disable unused apps**.

- In **Phone settings** → **Apps** → **Sleep as Android** → **Battery**, check that **Background restriction** is set to **App can use battery in background** for AdGuard.

- Remove AdGuard from **Sleeping apps**:

    1. Go to **Phone settings** → **Device care**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung1en.png)

    1. Tap **Battery**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung2en.png)

    1. Tap the **3-dot menu** → **Settings**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung3en.png)

    1. Tap **Sleeping apps**:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung45en.png)

    1. Wake up AdGuard using the trash can icon:

        ![Samsung *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/samsung6en.png)

### 구형 삼성 기기

For early Samsung devices, there is no huge need for setting up the background operation, but if in your case the AdGuard app is getting closed or disappears from the recent tasks after a while, do the following:

- Tap the **Recent tasks** button, tap the **Additional settings** icon. 다음과 같이 표시되어야 합니다:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_1.png)

- Tap **Lock Apps**:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_2.png)

- Tap the lock icon:

 ![Samsung settings *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/oldsamsung_3.png)

## Huawei

Huawei and their Android customization **EMUI** belongs to the most troublesome on the market with respect to non-standard background process limitations. On default settings, virtually all apps that work in background will face problems and ultimately break.

### 일부 EMUI 8, 9 및 10 디바이스(Huawei P20, Huawei P20 Lite, Huawei Mate 10…)에서는 앱이 구동됩니다.

This feature may or may not be available for all devices or may be labeled differently.

1. Go to phone **Settings** → **Battery** → **App launch**:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei1en.png)

1. Turn off **Manage all automatically**:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei2en.png)

1. Set AdGuard to **Manage manually** and enable all toggles:

    ![Huawei *mobile_border](https://cdn.adtidy.org/public/Adguard/screenshots/android/huawei3en.png)

1. Disable **Startup manager** that prevents apps from running automatically after the phone starts up:

    **설정** → **모두** → **시작 관리자** → AdGuard 끄기로 이동합니다.

    또한 안정적인 백그라운드 프로세스를 위해 아래에 서술되어 있는 **PowerGenie**를 제거해야 할 수도 있습니다.

### EMUI 9+ 장치 및 PowerGenie

:::note

On phones with EMUI 9+ (Android P+) there is a task killer app called PowerGenie which forces to quit all apps not whitelisted by Huawei and does not give users any configuration options. See below how to uninstall it.

:::

Huawei is extremely inventive in breaking apps on their devices. In addition to all the non-standard power management measures described below, they introduced a task killer app built right into EMUI 9 on Android Pie.

It is called **PowerGenie** and it kills all apps that are not on its whitelist. You cannot add custom apps on their pre-defined whitelist. This means there is no other way to achieve proper app functionality on Huawei than uninstalling PowerGenie.

Unfortunately, this is a system app that can only be fully uninstalled using ADB (Android Debug Bridge).

:::note Source

[XDA forum](https://forum.xda-developers.com/mate-20-pro/themes/remove-powergenie-to-allow-background-t3890409).

:::

**You need to**:

It is not confirmed, but it might be possible to just disable PowerGenie in **Phone settings** → **Apps**. If this setting is present in your device's settings, you may skip the following steps. However, it would need to be re-applied every time you reboot your device. If there is no such setting, follow this instruction:

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer.

1. Connect your phone with a data cable.

1. [개발자 옵션](https://developer.android.com/studio/debug/dev-options.html)을 활성화합니다.

1. Enable **USB debugging** within Developer options on your phone.

1. 컴퓨터에서 다음 명령을 실행합니다.

`adb shell pm uninstall --user 0 com.huawei.powergenie`

`adb shell pm uninstall -k --user 0 com.huawei.android.hwaps`

If AdGuard keeps getting killed, also try running:

`adb shell pm stopservice hwPfwService`

### EMUI 6+ 기기(및 일부 EMUI 5 기기)

- **Phone settings** → **Advanced Settings** → **Battery manager** → **Power plan** set to **Performance**;
- **Phone Settings** → **Advanced Settings** → **Battery Manager** → **Protected apps** — set AdGuard as **Protected**;
- **Phone Settings** → **Apps** → **Your app** → **Battery** → **Power-intensive prompt** `[uncheck]` and **Keep running after screen off** `[check]`;
- **Phone settings** → **Apps** → **Advanced (At the bottom)** → **Ignore optimizations** → Press Allowed → **All apps** → Find AdGuard on the list and set to **Allow**.

#### Huawei P9 Plus

Open device settings → **Apps** → **Settings** → **Special access** → choose **Ignore battery optimization** → select **Allow** for AdGuard.

### Huawei P20, Huawei Honor 9 Lite 및 Huawei Mate 9 Pro

Open device settings → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on.

### Huawei P20, Huawei P20 Lite, Huawei Mate 10

**Phone settings** → **Battery** → **App launch** → set AdGuard to **Manage manually** and make sure everything is turned on. Also for reliable background processes you may need to uninstall PowerGenie as described above.

### 초기 Huawei 모델

Old Huawei devices are the easiest to set up, it is enough to perform two simple steps to lock AdGuard in the background so it won't be terminated by battery saving or background killer process.

- Tap the **Recent tasks** button:

    ![Huawei recent apps *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweirecentapps.jpeg)

- Tap the lock icon:

    ![Huawei lock *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/huaweilock.jpeg)

Besides, to set up the background work of AdGuard more effectively, you should open device settings and do the following:

- Go to **Settings** → open **Battery Manager** → set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if AdGuard is Protected;
- Go to **Apps** in the main settings and tap AdGuard there → choose **Battery** → enable **Power-intensive prompt** and **Keep running after screen is off**;
- Then in the **Apps** section open **Settings** (at the bottom) → **Special access** → choose **Ignore battery optimization** → press **Allowed** → **All apps** → find AdGuard on the list and set it to **Deny**.

## Meizu

Meizu has almost the same approach to the background process limitations as Huawei and Xiaomi. So you can avoid disabling the background work of AdGuard and any other app by adjusting the following settings:

- Go to **Advanced Settings** → open **Battery Manager** → set **Power plan** to **Performance**;
- Then choose **Protected apps** in the **Battery Manager** and check if AdGuard is Protected;
- Go to **Apps** section and tap AdGuard there → choose **Battery** → enable **Power-intensive prompt** and **Keep running after screen is off**.

## Nokia

Nokia devices running Android 9+ have **The Evenwell Power saver** disabled, which was the main culprit for killing background processes. If AdGuard still gets killed on your Nokia phone, check out the [legacy instruction](https://dontkillmyapp.com/hmd-global).

### Nokia 1(Android Go)

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. [개발자 옵션](https://developer.android.com/studio/debug/dev-options.html)을 활성화합니다.

1. Enable **USB debugging** within Developer options on your phone;

1. 다음 ADB 명령을 통해 **com.evenwell.emm** 패키지를 제거합니다.

    `adb shell` `pm uninstall --user 0 com.evenwell.emm`

### Nokia 3.1 및 5.1

On these devices there is a task killer called **DuraSpeed** that terminates all background apps. It can't be uninstalled or disabled by regular means. These actions require ADB, and even then, when disabled, DuraSpeed will re-enable itself on reboot. You need a tasker app like [MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid) for automatic DuraSpeed's disabling.

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. [개발자 옵션](https://developer.android.com/studio/debug/dev-options.html)을 활성화합니다.

1. Enable **USB debugging** within Developer options on your phone;

1. 이 명령을 입력하여 MacroDroid(또는 선택한 자동화 앱)에 글로벌 설정 저장소에 쓸 수 있는 권한을 부여합니다.

    `adb shell pm grant com.arlosoft.macrodroid android.permission.WRITE_SECURE_SETTINGS`

1. **기기 부팅** 시 트리거되는 태스크를 생성하여 다음을 수행합니다.

    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **-1**
    - System Setting: type **Global**, name `setting.duraspeed.enabled`, value **0**
    - System Setting: type **System**, name `setting.duraspeed.enabled`, value **0**

    ![Nokia tasker *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/nokia_tasker.png)

    :::note

    You need both **Global** and **System** type settings. The screenshot shows only Global as an example.


:::

### 기타 Nokia 모델

- Go to phone **Settings** → **Apps** → **See all apps**.

- Tap on the right top corner menu → **Show system**.

Find **Power saver app** on the list, select it and tap **Force close**. It will remain stopped for a while but will restart at some point.

From now on, AdGuard should work normally and use the standard Android battery optimizations until Power Saver restarts.

An alternative, more permanent solution for more tech-savvy users:

1. [Install ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) on your computer;

1. Connect your phone with a data cable;

1. [개발자 옵션](https://developer.android.com/studio/debug/dev-options.html)을 활성화합니다.

1. Enable **USB debugging** within Developer options on your phone;

1. 다음 ADB 명령을 통해 **com.evenwell.powersaving.g3** 패키지를 제거합니다.

    `adb shell` `pm uninstall --user 0 com.evenwell.powersaving.g3`

## Oppo

Sometimes background services are being killed (including accessibility services, which then need re-enabling) when you turn the screen off. So far, a workaround for this is:

Go to **Security Centre** → tap **Privacy Permissions** → **Startup manager** and allow AdGuard app to run in background.

Other solutions:

- Pin AdGuard to the recent apps screen
- Enable AdGuard in the app list inside the security app’s “startup manager” and “floating app list” (com.coloros.safecenter / com.coloros.safecenter.permission.Permission)
- Turn off battery optimizations

## OnePlus

Devices with OxygenOS on board are the most problematic, with its OS-specific cache cleaning and free RAM, including OS optimization. In addition, OxygenOS can interrupt the AdGuard's work if you do not use it for a while. To avoid these unwanted consequences, follow these steps.

### 앱 잠금

- Go to **Settings**

- **Battery** → **Battery optimization**

- Find AdGuard

- Tap on it and select **Don't optimize** option

- Tap **Done** to save

- Open recent apps menu (as showed on this screenshot):

    ![Onepluslock *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/onepluslock.png)

- Lock AdGuard app:

    ![Oneplusdots *mobile_border](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/android/oneplusdots.png)

:::caution

On some OnePlus phones there is also a thing called App Auto-Launch and Deep Optimization which essentially prevents apps from working in the background. Please disable it for AdGuard.

:::

### 배터리 최적화

- Open device settings → **Battery** → **Battery optimization** → switch to the **All apps** list (top menu) → choose AdGuard → activate **Don’t optimize**

- Open device settings → **Battery** → **Battery Optimization** → (⁝) three-dot menu → **Advanced Optimization** → Disable Deep Optimization

### 앱 자동 실행

App Auto-Launch (on some OnePlus phones) essentially prevents apps from working in the background. Please disable it for AdGuard.

### 향상된/고급 최적화

For OnePlus 6 and above:

- Open **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Advanced optimization**
- Disable **Deep optimization** / **Adaptive Battery**
- Disble **Sleep standby optimization**. OnePlus tries to learn when you are usually asleep, and in those times it will then disable the phone’s network connections. This setting will prevent push notifications from being delivered.

For OnePlus below 6:

- Turn off **System settings** → **Battery** → **Battery optimization** → (⁝) three-dot menu → **Enhanced optimization**.

### 최근 앱 지우기 동작

Normally when you swipe an app away, it won’t close. On OnePlus this may however work in a different way. Recent app clear behaviour manager might be set up in a way that swiping the app to close will kill it. To return it to the “normal” mode:

Go to **Settings** → **Advanced** → **Recent app management** → Switch to **Normal clear**

## Sony

Sony was the first mobile OS developer to introduce non-standard background process optimization. It is called **Stamina mode** and it instantly breaks all background processes if enabled. To solve this:

Go to **Settings** → **Battery** → Disable **STAMINA mode**

![Sony Stamina mode *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/sony_stamina.png)

On Android 11+, on the same screen with STAMINA mode, there is a setting called **Adaptive battery**, you should disable it too.

You also need to be set AdGuard as Excepted from Power-saving feature:

**System settings** → **Apps & Notifications** → **Advanced** → **Special app access** → **Power saving feature** → Switch AdGuard to **Excepted**

## Wiko

Wiko devices are problematic in terms of non-standard background process optimizations. To let AdGuard work in background, do the following:

- Go to **Phone Assistant** → **Battery** → turn off **Eco Mode**
- Go back and go to **Manual mode**
- Tap on the **Gear** icon on top right → **Background apps whitelist** → Select **AdGuard**

## Android 스톡 기기 Pixel/Nexus/Nubia/Essential

Android stock OS normally does not conflict with apps working in the background, but if you are facing any issues you will need to switch on the **Always-on VPN** mode.

- Go to **Settings** → **Network and Internet**

    ![Stocknetwork *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stocknetwork.png)

- Tap **VPN** and choose **AdGuard**

    ![Stockvpn *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockvpn.png)

- Set up **Always-on VPN** mode

    ![Stockadguard *mobile_border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/stockadguard.png)

## Realme

On devices running Realme UI 4.0, there are three key configurations to ensure that AdGuard works properly in the background.

1. AdGuard 앱을 설정합니다.

    - Long press the AdGuard icon
    - From the menu that appears, select **App info**
    - Go to **Battery usage** and enable all options:
        - Allow background activity
        - Allow foreground activity
        - Allow auto launch
    - In the **App info** section, scroll down and turn off the option **Pause app activity if unused**

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme12.png)

1. 배터리를 설정합니다.

    - Go to **Settings → Battery → More settings → Optimize battery use**
    - Find AdGuard in the list and enable **Don't optimize**
    - In **Other settings**, check the **App Quick Freeze** section and disable it for AdGuard

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme345.png)

1. AdGuard에 *항상 켜져 있는 VPN*을 활성화합니다.

    - Go to **Settings → Connection & sharing → VPN**
    - Find **AdGuard** and enable the **Always-on VPN** option

    ![Always-on VPN *border](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/background-work/realme678.png)

## Motorola

On Motorola devices, there are four key configurations to ensure that AdGuard works properly in the background.

1. Allow background usage:

   - Go to **Settings → Apps** and find **AdGuard**
   - Open **App battery usage**
   - Enable **Allow background battery usage**
   - Tap the option with the toggle
   - Set battery usage to **Unrestricted**

1. Remove background activity restrictions:

   - Go to **Settings**
   - Scroll down and tap **Apps & notifications**
   - Find **AdGuard** and open **Advanced → Battery**
   - Tap **Background restriction** or **Background limits**
   - If it says **Background activity restricted**, tap it and then tap **Remove**

1. Manage background apps:

   - Go to **Settings**, then type **Managing background apps** in the search bar
   - Find **AdGuard** and enable the toggle to allow the app to run in the background

1. Disable Adaptive Battery:

   - Go to **Settings → Battery**
   - Turn off the **Adaptive Battery** option
