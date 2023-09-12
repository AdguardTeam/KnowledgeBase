---
title: Проблемы с батареей и потреблением трафика
sidebar_position: 1
---

:::info

В этой статье рассказывается об AdGuard для Android — многофункциональном блокировщике рекламы, который защищает ваше устройство на системном уровне. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

На устройствах Android с ОС 6 и более ранних встроенная статистика часто связывала высокое использование трафика и/или батареи с AdGuard. Это происходило потому, что AdGuard учитывал весь отфильтрованный трафик из разных приложений. В результате доля AdGuard в общем объёме данных и расходе батареи была завышена, а доля других приложений — занижена.

Однако в Android 7 это было исправлено. Теперь информация во встроенной статистике использования данных Android очень близка к реальности, хотя в данных об использовании батареи есть небольшие расхождения.

Тем не менее, пользователи AdGuard всегда могут увидеть реальную картину на экране *Использование батареи*.

### Собственная статистика расхода батареи

Доступ к нему можно получить, перейдя по ссылке *Статистика* → *Использование батареи*.

![Данные о батарее *mobile_border](https://cdn.adtidy.org/content/articles/battery/1.png)

Внутри вы найдёте график, показывающий реальное потребление ресурса батареи AdGuard запоследние 24 часа, с возможностью получить более детальную информацию о почасовом расходе, нажав на график. Кроме того, там также есть числовая разбивка релевантных данных и краткое техническое пояснение.

### Сколько заряда батареи на самом деле потребляет AdGuard?

Для начала приведём немного теории и ссылок с необходимыми данными.

1. Android derives traffic consumption judging on so-called Power Profile, which is given by every manufacturer: <https://source.android.com/devices/tech/power/values.html>

1. Main part of Power Profile is a set of values in mAh which define battery consumption for every component of the device: <https://source.android.com/devices/tech/power/values.html>

    Например, из таблицы выше:

    *wifi.active=* 31mA additional consumption in mAh caused by WiFi data exchange.

    *radio.active=* 100-300mA additional consumption in mAh caused by data exchange over Mobile network.

    *cpu.active=* 100-200mA additional consumption in mAh caused by CPU work.

1. AdGuard by itself almost doesn't consume any traffic, so for the sake of evaluating battery resource consumption let's get rid of 'Mobile/WiFi packets' and stcik to 'CPU'.

    Formula to calculate the consumption:

    > "CPU TIME (ms)" X "cpu.active" / (60 *60* 1000) = "POWER USE mAh"

    Let's put real numbers into this formula.

    Let's take *CPU total* from the second screenshot and convert into milliseconds: 506000

    A coefficient *cpu.active* for 2GHz will be roughly equal to 225mAh

    Финальный результат:

    > 506000 *225 / (60* 60 * 1000) = 31,625mAh

### Итог

Реальное потребление в **разы ниже** показанного в статистике Android. Instead of 220mAh it should be somewhere around 31-40mAh. С другой стороны, потребление браузера должно быть не 66 мАч, а около 200 мАч.
