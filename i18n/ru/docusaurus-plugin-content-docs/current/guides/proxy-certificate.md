---
title: Как установить прокси-сертификат
sidebar_position: 2
---

Наши десктопные приложения AdGuard для Windows и AdGuard для Mac можно использовать в качестве прокси для других устройств. Это означает, что вы можете направлять трафик других устройств через AdGuard (весь трафик или трафик определённых приложений и браузеров).

:::note

Эти устройства должны находиться в одной сети с ПК или Mac, на котором установлен AdGuard.

:::

HTTP-трафик будет фильтроваться в любом случае, но чтобы AdGuard мог фильтровать HTTPS-трафик, необходимо вручную установить сертификат AdGuard на подключённое устройство.

## Как загрузить и установить сертификат

В зависимости от операционной системы устройства, трафик которого вы хотите фильтровать, следуйте одной из инструкций:

### Windows {#windows}

1. Note the IP address of your desktop computer with AdGuard installed.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. On the same computer with AdGuard, follow this link: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Нажмите кнопку **Скачать** . If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Windows device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. On that device, press **Win**, type `Manage computer certificates` and press **Enter**.

1. On the *Certificates — Local Computer* page, find the *Trusted Root Certification Authorities* → *Certificates* folder.

1. Щёлкните правой кнопкой мыши папку *Сертификаты* и выберите **Все задачи** → **Импорт...**.

1. На странице *Мастер импорта сертификатов* нажмите **Далее**.

1. Щёлкните **Обзор...**, чтобы импортировать сертификат.

1. Navigate to the **cert.cer** certificate file, select it, click **Open**, then **Next**.

1. Установите флажок **Поместить все сертификаты в следующее хранилище**.

1. Make sure that the *Certificate store* field displays *Trusted Root Certification Authorities* and click **Next**.

1. Нажмите **Готово**.

1. Press **Win**, then open **Settings**.

1. Выберите **Сеть и интернет** → **Прокси-сервер**.

1. Отключите *Определять параметры автоматически*.

1. Нажмите **Настройка** во вкладке *Использовать прокси-сервер*.

1. Включите эту опцию. For **Proxy IP address**, type the IP address of your desktop computer that you noted in step 1. В поле **Порт** введите порт, выбранный в сетевых настройках десктопного приложения AdGuard.

1. Нажмите **Сохранить**.

### Mac {#mac}

1. Узнайте IP-адрес вашего десктопного компьютера, на котором установлен AdGuard.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. Follow this link using a web browser: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Нажмите кнопку **Скачать**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Mac device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Дважды щёлкните загруженный файл сертификата.

1. Введите пароль администратора и нажмите **Изменить связку ключей**.

1. Go to **Spotlight** (the search icon in the top right corner), type in `Keychain Access`, and then select **Keychain Access** from the search results.

1. В разделе *Система* выделите добавленный сертификат.

1. Right-click it and select **Get Info** from the context menu.

1. Разверните *Доверие*, чтобы увидеть политики доверия для сертификата.

1. В разделе *Протокол защищённых сокетов (SSL)* выберите **Всегда доверять**.

1. Open **System Preferences** → **Network** and select the active connection at the top.

1. Нажмите **Подробности...** и перейдите на вкладку **Прокси**.

1. Tick two checkboxes: *Web proxy (HTTP)* and *Secure web proxy (HTTPS)*. In the **Server** field, type the IP address of your computer that you noted in step 1. В поле **Порт** введите порт, выбранный в сетевых настройках десктопного приложения AdGuard.

### Android {#android}

1. Узнайте IP-адрес вашего десктопного компьютера, на котором установлен AdGuard.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. На том же компьютере с AdGuard перейдите по этой ссылке, используя браузер: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Нажмите кнопку **Скачать**. If the download doesn’t start, try another browser, for example Firefox.

1. Transfer the downloaded **cert.cer** file to the Android device whose traffic you want to route through AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. Locate and tap the previously downloaded **cert.cer** certificate to open the file and follow the instructions to install the certificate.

1. Android devices do not trust certificates by default, so there will be a warning — you can ignore it. On some phones you may be asked to enter your device password. Do so, then press **OK**. The certificate will be installed.

1. Откройте настройки активной сети Wi-Fi.

1. Change the **Proxy type** to **Manual**. For **Proxy hostname**, enter the noted IP address of your desktop computer you noted in step 1. В поле **Порт** введите порт, выбранный в сетевых настройках десктопного приложения AdGuard.

### iOS {#ios}

1. Узнайте IP-адрес вашего десктопного компьютера, на котором установлен AdGuard.

1. Make sure that AdGuard protection is enabled. On a Windows computer, check the box **Use AdGuard as an HTTP proxy** in the **Network** tab of its settings. For Mac, go to **Settings** → **Preferences** → **Network** and enable **HTTP proxy**.

1. На том же компьютере с AdGuard перейдите по этой ссылке, используя браузер: [http://local.adguard.org/cert](http://local.adguard.org/cert).

1. Нажмите кнопку **Скачать** . If the download doesn’t start, try another browser, for example Firefox.

1. Перенесите загруженный файл **cert.cer** на устройство с iOS, трафик которого вы хотите направлять через AdGuard. You can use a USB cable, Bluetooth, or cloud services to do this.

1. На устройстве iOS откройте **Настройки** → **Профиль загружен** и нажмите **Установить** в правом верхнем углу. Введите пароль и подтвердите установку. Нажмите **Готово**.

1. Перейдите на страницу **Настройки** → **Основные** → **Об этом устройстве** → **Доверие сертификатам**. Включите переключатель рядом с *Adguard Personal CA*. Сертификат установлен.

1. На этом устройстве откройте настройки активной сети Wi-Fi.

1. Change the **Proxy type** to **Manual**. В поле **Имя узла прокси** введите IP-адрес из пункта 1. В поле **Порт** введите порт, выбранный в сетевых настройках десктопного приложения AdGuard.
