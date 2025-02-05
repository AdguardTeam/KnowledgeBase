---
title: Отладка правил в AdGuard для Chrome MV3
sidebar_position: 2
---

В Журнале фильтрации [MV3-расширениия AdGuard](/adguard-browser-extension/mv3-version) отображаются только приблизительные применённые правила, которые мы называем «предполагаемыми правилами». Это связано с тем, что браузер не предоставляет подробную информацию о том, какие именно декларативные правила были использованы, если расширение не «распаковано». Для получения точной информации можно самостоятельно установить «распакованное» расширение в браузере.

Эта инструкция также пригодится для проблемных случаев, когда вы хотите изменить правила, которые статически включены в расширение. В большинстве случаев достаточно использовать _Пользовательские правила_ в расширении.

## Необходимые условия

1. **Git:** [Установите Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. **Node:** [Установите Node.js](https://nodejs.org/en/download/package-manager)

3. **Yarn:** [Установите Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

## Как клонировать расширение

1. Клонируйте репозиторий:

   ```bash
   git clone git@github.com:AdguardTeam/AdguardBrowserExtension.git
   ```

2. Перейдите в каталог:

   ```bash
   cd AdguardBrowserExtension
   ```

3. Переключитесь на ветку `v5.0`:

   ```bash
   git checkout v5.0
   ```

4. Установите зависимости:

   ```bash
   yarn install
   ```

## Как собрать расширение

1. Переключитесь на ветку `v5.0`:

   ```bash
   git checkout v5.0
   ```

2. Выполните следующую команду в терминале:

   ```bash
   yarn dev chrome-mv3
   ```

3. Собранное расширение будет находиться в каталоге:

   ```bash
   ./build/dev/chrome-mv3
   ```

## Как установить распакованное расширение в браузере

1. Включите режим разработчика:

   ![Режим разработчика](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

2. Нажмите _Загрузить распакованное_:

   ![Загрузить нераспакованное](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

3. Выберите каталог расширения и нажмите _Выбрать_:

   ![Выбрать](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

Готово!

## Как отлаживать правила

1. Найдите и измените нужное вам правило в каталоге `./Extension/filters/chromium-mv3` в файлах `.txt`.

2. Преобразуйте правила из txt в декларативный формат:

   ```bash
   yarn convert-declarative
   ```

3. Снова соберите расширение:

   ```bash
   yarn dev chrome-mv3
   ```

4. Перезагрузите расширение в браузере:

   ![Перезагрузка расширения](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)
