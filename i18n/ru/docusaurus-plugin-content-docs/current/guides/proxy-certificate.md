---
title: Как установить прокси-сертификат
sidebar_position: 2
---

Десктопные приложения AdGuard (AdGuard для Windows и AdGuard для Mac) можно использовать в качестве прокси. Это означает, что вы можете направлять трафик других устройств через AdGuard (полностью или трафик определённых приложений/браузеров).

> Обратите внимание, что эти устройства должны находиться в одной сети с ПК или Mac, на котором установлен AdGuard.

HTTP-трафик будет фильтроваться в любом случае, но чтобы AdGuard мог фильтровать HTTPS-трафик, необходимо вручную установить сертификат AdGuard на подключённое устройство.

## Как загрузить и установить сертификат

Depending on the operation system of your device (Windows/Mac/Android/iOS), follow one of this instructions:

### Windows {#windows}

1. Activate AdGuard on your computer with installed AdGuard and check the box **Use AdGuard as an HTTP proxy** in the **Network** settings of the desktop app.

2. On the same device with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert)

3. Нажмите кнопку **Скачать** .

4. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

5. On that device, press the **Win** button, type `Manage computer certificates` and press **Enter**.

6. On the *Certificates - Local Computer* page, find the *Trusted Root Certification* > *Certificates* folder.

7. Right-click the *Certificates* folder and click **All Tasks** > **Import**.

8. On the *Certificate Import Wizard* page, click Next.

9. Click **Browse** to import the certificate.

10. Navigate to the **cert.cer** certificate file, select it, then click **Open**.

11. Click **Next**.

12. Select the **Place all certificates in the following store** check box.

13. Ensure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

14. Click **Finish**.

15. Press the **Win** key, then open **Settings**.

16. Select **Network & Internet** > **Proxy**.

17. Toggle *Automatically detect settings* off.

18. Click **Set up** in the *Use a proxy server* tab.

19. Turn the toggle on. For **Proxy IP address**, enter the noted IP-address of your desktop computer (step 1). For **Port**, enter the port chosen in desktop AdGuard's network settings.

20. Click **Save**.

### Mac {#mac}

1. Узнайте IP-адрес вашего десктопного компьютера, на котором установлен AdGuard.

2. Activate AdGuard on your computer and check the box **Use AdGuard as an HTTP proxy** in the **Network** settings of the desktop app.

3. On the same computer with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert)

4. Нажмите кнопку **Скачать** .

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. Double-click the downloaded certificate file.

7. Enter the administrator password, and then click **Modify Keychain**.

8. Go to **Spotlight** (the search icon in the top right corner), type in “Keychain Access”, and then select **Keychain Access** from the search results.

9. Under *System*, highlight the certificate that you added.

10. Right-click on it and choose **Get Info** from the context menu.

11. Expand *Trust* to display the trust policies for the certificate.

12. Under *Secure Sockets Layers (SSL)*, select **Always Trust**.

13. Open **System Preferences** > **Network** > **Wi-Fi**.

14. Navigate to the **Proxies** tab.

15. Tick the checkbox *Web Proxy (HTTP)*. For **Web Proxy Server**, enter the noted IP-address of your computer (step 1). In the field next to it (separated with a colon), enter the port chosen in desktop AdGuard's network settings.

### Android {#android}

1. Узнайте IP-адрес вашего десктопного компьютера, на котором установлен AdGuard.

2. Activate AdGuard on your computer and check the box **Use AdGuard as an HTTP proxy** in the **Network** settings of the desktop app.

3. On the same computer with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert)

4. Нажмите кнопку **Скачать** .

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. Locate and tap the previously downloaded **cert.cer** certificate to open the file.

7. На некоторых телефонах вам может быть предложено ввести пароль устройства. Сделайте это, затем нажмите **OK**. Сертификат установлен.

8. Open advanced settings of the active WiFi network.

9. Переключите **Тип прокси** на **Ручной**.  В поле **Имя хоста** введите IP-адрес из пункта 1). В поле **Порт прокси** введите номер порта, указанный в настройках сети десктопного приложения AdGuard.

### iOS {#ios}

1. Узнайте IP-адрес вашего десктопного компьютера, на котором установлен AdGuard.

2. Activate AdGuard on your computer and check the box **Use AdGuard as an HTTP proxy** in the **Network** settings of the desktop app.

3. On the same computer with AdGuard follow this link using any browser: [http://local.adguard.org/cert](http://local.adguard.org/cert)

4. Нажмите кнопку **Скачать** .

5. Transfer the downloaded **cert.cer** file to the device which traffic you want to route through AdGuard.

6. Locate the downloaded certificate in *Files*. A popup should show up, telling you about a downloaded profile.

7. Open **Settings** > **Profile Donwloaded** and tap **Install** in the top right corner. Введите пароль и подтвердите установку. Нажмите **Готово**.

8. Go to **Settings** > **General** > **About** > **Certificate Trust Settings**. Enable the switch beside *Adguard Personal CA*. Сертификат установлен.

9. On that device, open advanced settings of the active WiFi network.

10. Переключите **Тип прокси** на **Ручной**.  В поле **Имя хоста** введите IP-адрес из пункта 1). В поле **Порт прокси** введите номер порта, указанный в настройках сети десктопного приложения AdGuard.