---
title: Günlükler arka plan sayfasından nasıl dışa aktarılır
sidebar_position: 1
---

## Uzantının arka plan sayfasından günlükleri dışa aktarma

### Chrome

1. AdGuard Tarayıcı Uzantısını açın ve mümkünse hataya neden olan işlemleri tekrarlayın. Hatanın oluştuğu tam zamana dikkat edin.

2. `chrome://extensions` adresine gidin.

3. _Geliştirici modu_ öğesini etkinleştirin.

   ![Developer mode \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_extensions.png)

4. Find AdGuard Browser Extension and click `service worker`.

   ![Background \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_developer_mode.png)

5. Open the tab _Console_, right-click anywhere inside the console area, and select _Save as…_.

   ![Save as \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/chrome_console_save.png)

### Firefox

1. AdGuard Tarayıcı Uzantısını açın ve mümkünse hataya neden olan işlemleri tekrarlayın. Hatanın oluştuğu tam zamana dikkat edin.

2. `about:addons` adresine gidin.

3. Click the gear icon and select _Debug Add-ons_.

   ![Debug Add-ons \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_debug_addons.png)

4. _İncele_ öğesine tıklayın.

   ![Inspect \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_inspect.png)

5. In the tab _Console_ tab, right-click anywhere inside the console area and select _Save all Messages to File_.

   ![Console \*border](https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/firefox_console_save.png)

## Günlükleri gönderme

:::note

AdGuard gizliliğinizi korumaya kararlıdır. [Gizlilik Politikamıza](https://adguard.com/privacy/browser-extension.html) kesinlikle uyuyoruz ve kullanıcılar hakkında herhangi bir özel bilgi toplamıyoruz. Günlüklerinizi destek ekibine göndermeden önce, paylaşmak istemediğiniz ek bilgiler içerebileceğinden lütfen dosyayı inceleyin. Bu tür kişisel bilgiler içeriyorsa öncelikle onu silmenizi öneririz.

:::

Artık günlükleri topladığınıza göre, bunları geliştirme ekibimize göndermek için lütfen aşağıdaki adımları izleyin:

1. Hatayı [GitHub'dan](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose) bildirin.
2. Günlükleri ve yeniden oluşturma süresini içeren arşivinizi `devteam@adguard.com` adresine gönderin ve GitHub sorununuz için bir bağlantı ekleyin. Ayrıca arşivi Google Drive'a yükleyebilir ve dosyayı eklemek yerine bağlantıyı arşive ekleyebilirsiniz.
