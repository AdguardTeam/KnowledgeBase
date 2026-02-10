---
title: Как настроить исключения приложений и пользовательские фильтры
sidebar_position: 5
---

В AdGuard CLI невозможно импортировать исключения приложений из других версий программы. Однако вы можете вручную создать необходимые исключения и фильтры, отредактировав несколько файлов конфигурации в рабочей директории приложения.

## Как добавить исключения

Рабочая директория AdGuard CLI:

- Linux: `~/.local/share/adguard-cli/`
- macOS: `~/Library/Application Support/adguard-cli/`

В этой папке находятся несколько ключевых файлов:

1. `browsers.yaml` — список браузеров (Safari, Chrome, Firefox и т. д.). Здесь вы можете включить или отключить HTTPS-фильтрацию для отдельных браузеров или полностью исключить их из фильтрации.

**Пример browsers.yaml (для Linux)**:

```sh
- name: firefox
  action: default
- name: chrome
  action: default
- name: chromium
  action: default
- name: brave
  action: default
```

**Пример `browsers.yaml` (для macOS)**:

```sh
- name: com.apple.Safari
  action: default
- name: com.google.Chrome
  action: default
- name: org.mozilla.firefox
  action: default
- name: com.brave.Browser
  action: default
```

Чтобы отключить HTTPS-фильтрацию, замените `default` на `bypass_https`. Чтобы полностью исключить приложение из фильтрации, замените `default` на `bypass`.

1. `proxy.yaml` — основной файл конфигурации. В нём есть раздел приложений, где настраиваются исключения для любых других приложений.

**Пример `proxy.yaml`**:

```sh
  - include-list: browsers.yaml
  - name: '*vpn*'
    action: 'bypass'          
    skip_outbound_proxy: true
  - name: '*'
    action: 'bypass_https'   
```

:::note

В **Linux** укажите имя исполняемого файла (`chrome`, `firefox` и т. д.). На **macOS** укажите идентификатор пакета, например, `com.google.Chrome`, `org.mozilla.firefox`.

:::

## Как добавить пользовательские фильтры

Рабочий каталог содержит файл `user.txt`, в который вы можете добавить собственные правила блокировки или разрешения для сайтов. Если у вас есть собственный список правил в формате `.txt`, подключите его через `proxy.yaml`:

```sh
фильтры:
  - 'flm://'
  - 'user.txt'
  - 'my_filter.txt' # подключение собственного файла
```
