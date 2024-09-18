---
title: How to generate a HAR file
sidebar_position: 1
---

HAR dosyaları teknik destek ekiplerimizin karmaşık sorunları gidermesine yardımcı olur. Bu dosyaları oluşturmak için Chrome veya Firefox kullanmanızı tavsiye ederiz. Ancak, IE 11, Edge ve Safari de `.har` dosyası oluşturma ve dışa aktarma özelliği sağlar.

## Chrome {#chrome}

Chrome'da bir HAR dosyası oluşturmak için şu adımları izleyin:

1. Sorunun oluştuğu URL'ye gidin. Sorunu henüz yeniden oluşturmayın.

1. Open **Developer Tools**:

    - From menu: **Menu → More Tools → Developer Tools**.
    - Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

1. **Ağ sekmesi** öğesine tıklayın.

1. Ağ sekmesinin sol üst köşesindeki yuvarlak düğmeyi bulun ve kırmızı kayıt modunda olduğunu onaylayın. If it's grey, click to turn red to start recording.

1. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

1. Select the **Preserve log** check box on the Network tab.

1. Check the **Disable cache** check box.

    ![Chrome](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/chrome.png)

1. Sorunu oluşturan adımları yeniden oluşturun.

1. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

1. Sorunun ayrıntılı açıklamasıyla birlikte AdGuard desteğine (support@adguard.com) gönderin. Destekleyici ekran görüntüleri de yardımcı olabilir.

## Edge {#edge}

1. Sorunun oluştuğu URL'ye gidin. Sorunu henüz yeniden oluşturmayın.

1. Open **Developer Tools**:

    - From menu: **Menu → More Tools → Developer Tools**.
    - Keyboard: **Ctrl+Shift+C**, or **Ctrl+Alt+I**, or **⌥+⌘+I for Mac**.

1. **Ağ sekmesi** öğesine tıklayın.

1. Ağ sekmesinin sol üst köşesindeki yuvarlak düğmeyi bulun ve kırmızı kayıt modunda olduğunu onaylayın. If it's grey, click to turn red to start recording.

1. Use the **Clear** button (the circle button with a line through it next to the record button) to clear all previous activity.

1. Select the **Preserve log** check box on the Network tab.

1. Check the **Disable cache** check box.

    ![edge](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/edge.png)

1. Sorunu oluşturan adımları yeniden oluşturun.

1. Save session as a .har file by right-clicking the grid and selecting **Save as HAR with content**.

1. Sorunun ayrıntılı açıklamasıyla birlikte AdGuard desteğine (support@adguard.com) gönderin. Destekleyici ekran görüntüleri de yardımcı olabilir.

## Firefox {#firefox}

Firefox'ta bir HAR dosyası oluşturmak için şu adımları izleyin:

1. Sorunun oluştuğu URL'ye gidin. Sorunu henüz yeniden oluşturmayın.

1. Open Developer Tools in **Network** mode:

    - From menu: **Menu → Web Developer → Network**.
    - Klavye: **Ctrl+Shift+C** veya **⌥+⌘+E (Mac)**.

1. Note the **Play/Pause** button at the top left of the Network tab.

    - Button should be in play mode.

1. If any information is currently displayed in the grid, clear by clicking the **Empty trash can** button next to the play/pause button.

1. Select the **Persist Logs** check box on the Network tab.

1. Check the **Disable cache** check box.

    ![firefox](https://cdn.adtidy.org/content/Kb/ad_blocker/guides/firefox.png)

1. Sorunu oluşturan adımları yeniden oluşturun.

1. Save session as a .har file by right-clicking the grid and selecting **Save all as HAR**.

1. Sorunun ayrıntılı açıklamasıyla birlikte AdGuard desteğine (support@adguard.com) gönderin. Destekleyici ekran görüntüleri de yardımcı olabilir.

## Internet Explorer 11 {#ie11}

To create a HAR file in Internet Explorer 11, follow these steps:

1. Sorunun oluştuğu URL'ye gidin. Sorunu henüz yeniden oluşturmayın.

1. Open Developer Tools in **Network** mode:

    - From Tools cog wheel menu: **Developer Tools** → **Network tab**.
    - Keyboard: **F12 → Network** tab.

1. Note the start profiling session **Play** button and stop profiling **Stop** button at top left of Network tab.

    - Play button will be gray when recording and Stop button will be red. Put in **Play** mode.

1. Clear any session info appearing in the lower grid using the **Clear session** button on Network tab. Hover over icons to see names.

    - **Clear session** button is a three line icon with an x on it.

1. Check the **Disable cache** check box.

1. Sorunu oluşturan adımları yeniden oluşturun.

1. Save session as a .har file by clicking the **Save to disk** button (Export as HAR) on Network tab.

1. Sorunun ayrıntılı açıklamasıyla birlikte AdGuard desteğine (support@adguard.com) gönderin. Destekleyici ekran görüntüleri de yardımcı olabilir.

## Safari {#safari}

Safari'de bir HAR dosyası oluşturmak için şu adımları izleyin:

1. Check the Safari menu bar at the top of the screen for a **Develop** menu.

    - If not visible, turn it on by going to **Safari → Settings → Advanced**.
    - Check the checkbox at the bottom next to **Show Develop menu in menu bar**.

1. Sorunun oluştuğu URL'ye gidin. Sorunu henüz yeniden oluşturmayın.

1. Open **Network** tab in Web Inspector:

    - From menu: **Develop → Show Web Inspector → Network**.
    - Keyboard: **⌥+⌘+I → Network**

1. Check **Preserve Log** checkbox on left side of the Network tabs, within the **Other filter options...** menu.

    ![safari](https://cdn.adtidy.org/content/kb/ad_blocker/safari/preserve-log.png)

1. Clear current Network items by clicking the **Delete Trash** icon at the far right of Network tabs.

    - Klavye: **⌘+K**

1. Check the **Disable caches** check box.

1. Sorunu oluşturan adımları yeniden oluşturun.

1. Save session as a .har file by clicking the **Export** icon next to the **Delete Trash** icon.

1. Sorunun ayrıntılı açıklamasıyla birlikte AdGuard desteğine (support@adguard.com) gönderin. Destekleyici ekran görüntüleri de yardımcı olabilir.

## Android {#android}

HAR dosyaları oluşturmak için şu adımları izleyin:

1. Adguard'ı açın ve **Ayarlar** öğesine gidin.

1. Menüden **Gelişmiş** öğesini seçin.

1. **Alt Seviye Ayarlar** öğesini seçin

1. Activate `pref.har.capture` (you will have to restart the protection).

1. Şimdi sorunu yeniden oluşturun — uygulamayı açın, reklamın görünmesi için gerekli eylemleri gerçekleştirin.

1. Şimdi `pref.har.capture` öğesini tekrar kapatın.

1. Go back and tap **Export logs and system info** → **Save**.

## Windows {#windows}

1. Open **Settings*** → **General settings** → **Advanced settings** and scroll down.

1. Check the **Enable HAR writing** box.

1. Sorunu yeniden oluşturun.

1. Go to **General settings** → Click **Export logs** → **Save**.

1. İlgili kutunun işaretini kaldırarak HAR yazmayı devre dışı bırakın.
