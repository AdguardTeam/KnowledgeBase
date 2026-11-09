---
title: Sådan opsættes app-undtagelser og tilpassede filtre
sidebar_position: 5
---

Det er i AdGuard CLI ikke muligt at importere app-undtagelser fra andre versioner af programmet. De nødvendige undtagelser og filtre kan dog oprettes manuelt ved redigering af opsætningsfiler i appens arbejdsmappe.

## Sådan tilføjes undtagelser

AdGuard CLI-arbejdsmappe:

- Linux: `~/.local/share/adguard-cli/`
- macOS: `~/Library/Application Support/adguard-cli/`

Flere nøglefiler er placeret i denne mappe:

1. `browsers.yaml` — liste over webbrowsere (Safari, Chrome, Firefox mv.). Her kan HTTPS-filtrering slås til/fra for individuelle webbrowsere eller helt undtage dem fra filtrering.

**Eksempel browsers.yaml (til Linux)**:

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

**Eksempel-`browsers.yaml` (til macOS)**:

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

For at slå HTTPS-filtrering fra, erstat `default` med `bypass_https`. For helt at undtage appen fra filtrering, erstat `default` med `bypass`.

1. `proxy.yaml` — den primære opsætningsfil. Den har et apps-afsnit, hvor undtagelser for øvrige apps angives.

**Eksempel-`proxy.yaml`**:

```sh
  - include-list: browsers.yaml
  - name: '*vpn*'
    action: 'bypass'          
    skip_outbound_proxy: true
  - name: '*'
    action: 'bypass_https'   
```

:::note

I **Linux** angives navnet på den eksekverbare fil (`chrome`, `firefox` mv.). I **macOS**, angiv pakke-ID'et, f.eks. `com.google.Chrome`, `org.mozilla.firefox`.

:::

## Sådan tilføjes tilpasserede filtre

Arbejdsmappen indeholder filen `user.txt`, hvor der kan tilføjes egne sortliste- eller hvidlisteregler for websteder. Haves en egen regelliste i `.txt`-format, forbind den via `proxy.yaml`:

```sh
filters:
  - 'flm://'
  - 'user.txt'
  - 'my_filter.txt' # forbind egen fil
```
