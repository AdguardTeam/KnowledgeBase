---
title: Расширения
sidebar_position: 3
---

:::info

В этой статье рассказывается об AdGuard для Windows — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. [Скачайте приложение AdGuard](https://agrd.io/download-kb-adblock), чтобы увидеть, как оно работает

:::

AdGuard can significantly broaden website functionality working as a [user script manager](/general/userscripts). Пользователи AdGuard могут добавлять собственные скрипты, а также управлять существующими.

![Extensions \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/userscripts.png)

**Automatically detect userscripts**

Если эта опция включена, AdGuard будет автоматически определять запросы браузера к пользовательским расширениям и предлагать их установку. В противном случае расширения можно загрузить и установить вручную.

Вместе с AdGuard устанавливаются следующие расширения:

![Preinstalled userscripts \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/preinstalled-userscripts.png)

**AdGuard Assistant**

AdGuard Assistant is Legacy Assistant that you may use if the [new Assistant](/adguard-for-windows/browser-assistant.md) is not available for your browser. Название этого расширения вполне оправдано: оно действительно помогает пользователю изменить основные настройки AdGuard прямо в браузере, без необходимости открывать само приложение. Помощник AdGuard работает со всеми браузерами, совместимыми с Microsoft Windows. Кроме того, иконка Помощника AdGuard не будет отображаться на сайтах, добавленных пользователем в исключения, и на некоторых веб-страницах, где существует риск некорректного отображения контента.

**AdGuard Extra**

Это пользовательское расширение, предназначенное для борьбы с повторной вставкой заблокированной рекламы — так называемым обходом блокировщика рекламы. Это передовые методы защиты от блокировки рекламы, которые пользуются популярностью среди рекламодателей.

AdGuard Extra is essentially a miniprogram that changes the way pages work in such a way that it becomes much more difficult for sites to use the above-mentioned methods to bypass blockers.

**AdGuard Popup Blocker**

Это расширение блокирует всплывающие окна при просмотре веб-страниц. Некоторые всплывающие окна считаются полезными — они могут содержать настройки для администрирования сайта или справочную информацию, отображаемую при переходе по ссылке. Вот почему вы можете отключить Блокировщик, если это необходимо. Это расширение также не работает на сайтах, добавленных в список исключений AdGuard. По умолчанию это расширение отключено, но вы можете включить его в настройках приложения. You will find more detailed information about this extension in our Knowledge Base.

**Web of Trust**

Web of Trust показывает вам репутацию каждого сайта на основе мнений его пользователей. Сайт оценивается по ряду определённых критериев: доверие, безопасность и т. д. По умолчанию это расширение отключено, но вы можете включить его в настройках приложения. Обратите внимание, что AdGuard не является разработчиком этого расширения.

### Сеть

Предпоследний модуль посвящён сетевой фильтрации, и здесь вы найдёте дополнительные параметры, связанные с сетью. Two of them are enabled by default: _Enable traffic filtering_ and _Filter HTTPS_. Это важная дополнительная мера предосторожности для лучшей фильтрации веб-пространства. Большинство сайтов теперь используют HTTPS, то же самое относится и к рекламным сетям. From many sites, like youtube.com, facebook.com and x.com, it is impossible to remove ads without HTTPS filtering. So keep the _Filter HTTPS_ feature enabled unless you have a strong reason not to.

![Network Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/ad_blocker/windows/overview/network-settings.png)

В этом модуле вы можете установить флажок «Использовать AdGuard как HTTP-прокси», чтобы использовать AdGuard в качестве обычного HTTP-прокси, который будет фильтровать весь проходящий через него трафик. You can also enable the _Filter websites with EV certificates_ feature. EV-сертификаты (от англ. Extended Validation — «расширенная валидация») дают более надёжную гарантию; владельцы таких сайтов должны пройти подробный и всемирно стандартизированный процесс проверки личности, определённый руководящими принципами EV. Именно поэтому некоторые пользователи доверяют сайтам с такими сертификатами и предпочитают не фильтровать их.

Наконец, есть раздел с настройками прокси. Там вы можете указать, какой прокси-сервер AdGuard должен использовать для обновления фильтров, получения новых версий и так далее.

### AdGuard VPN

Последний раздел посвящён AdGuard VPN — идеальному инструменту, обеспечивающему безопасность и анонимность каждый раз, когда вы выходите в интернет. You can download it by clicking the _Download_ button or go to the AdGuard VPN website by clicking the _Homepage_ button.

Как работает AdGuard VPN? VPN создаёт безопасный зашифрованный туннель между компьютером или мобильным устройством пользователя и удалённым VPN-сервером. Таким образом, сохраняется конфиденциальность данных и анонимность пользователя, поскольку сторонний наблюдатель видит IP-адрес VPN-сервера, а не фактический IP-адрес пользователя.

**What AdGuard VPN does:**

- скрывает ваше реальное местоположение и помогает оставаться анонимным
- изменяет ваш IP-адрес, чтобы защитить ваши данные от отслеживания
- encrypts your traffic to make it unreadable to third parties
- позволяет настроить, где использовать VPN, а где нет (функция исключений)

To get more information about AdGuard VPN dive into the [AdGuard VPN Knowledge Base](https://adguard-vpn.com/kb/).
