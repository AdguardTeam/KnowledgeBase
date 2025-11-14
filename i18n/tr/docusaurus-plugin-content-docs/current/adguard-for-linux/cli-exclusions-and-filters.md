---
title: Uygulama istisnaları ve özel filtreler nasıl ayarlanır
sidebar_position: 5
---

In AdGuard CLI, it’s not possible to import app exclusions from other versions of the program. You can, however, manually create the required exclusions and filters by editing several configuration files in the app’s working directory.

## İstisnalar nasıl eklenir

AdGuard CLI working directory:

- Linux: `~/.local/share/adguard-cli/`
- macOS: `~/Library/Application Support/adguard-cli/`

Bu klasörde birkaç önemli dosya bulunmaktadır:

1. `browsers.yaml` — tarayıcıların bir listesi (Safari, Chrome, Firefox, vb.). Here you can enable or disable HTTPS filtering for individual browsers, or completely exclude them from filtering.

**Örnek browsers.yaml (Linux için)**:

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

**Örnek `browsers.yaml` (macOS için)**:

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

To disable HTTPS filtering, replace `default` with `bypass_https`. To completely exclude the app from filtering, replace `default` with `bypass`.

1. `proxy.yaml` — ana yapılandırma dosyası. Diğer uygulamalar için istisnaların ayarlandığı bir uygulamalar bölümü vardır.

**Örnek `proxy.yaml`**:

```sh
  - include-list: browsers.yaml
  - name: '*vpn*'
    action: 'bypass'          
    skip_outbound_proxy: true
  - name: '*'
    action: 'bypass_https'   
```

:::note

On **Linux**, specify the executable name (`chrome`, `firefox`, etc.). On **macOS**, specify the bundle ID, e.g., `com.google.Chrome`, `org.mozilla.firefox`.

:::

## Özel filtreler nasıl eklenir

Çalışma dizini, siteler için kendi engelleme veya izin verme kurallarınızı ekleyebileceğiniz `user.txt` dosyasını içerir. Eğer `.txt` biçiminde kendi kural listeniz varsa, bunu `proxy.yaml` aracılığıyla bağlayın:

```sh
filters:
  - 'flm://'
  - 'user.txt'
  - 'my_filter.txt' # connecting your own file
```
