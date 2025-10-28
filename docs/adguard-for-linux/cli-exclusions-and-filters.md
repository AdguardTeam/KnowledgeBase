---
title: How to set app exclusions and custom filters
sidebar_position: 5
---

In AdGuard CLI, it’s not possible to import app exclusions from other versions of the program. You can, however, manually create the required exclusions and filters by editing several configuration files in the app’s working directory.

## How to add exclusions

AdGuard CLI working directory:

- Linux: `~/.local/share/adguard-cli/`
- macOS: `~/Library/Application Support/adguard-cli/`

Several key files are located in this folder:

1. `browsers.yaml` — a list of browsers (Safari, Chrome, Firefox, etc.). Here you can enable or disable HTTPS filtering for individual browsers, or completely exclude them from filtering.

**Example browsers.yaml (for Linux)**:

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

**Example `browsers.yaml` (for macOS)**:

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

1. `proxy.yaml` — the main configuration file. It has an apps section where exclusions for any other apps are set.

**Example `proxy.yaml`**:

```sh
  - include-list: browsers.yaml
  - name: '*vpn*'
    action: 'bypass'          
    skip_outbound_proxy: true
  - name: '*'
    action: 'bypass_https'   
```

**Important**: On **Linux**, specify the executable name (`chrome`, `firefox`, etc.). On **macOS**, specify the bundle ID, e.g., `com.google.Chrome`, `org.mozilla.firefox`.

## How to add custom filters

The working directory contains the `user.txt` file, where you can add your own blocking or allowing rules for websites. If you have your own list of rules in `.txt` format, connect it via `proxy.yaml`:

```sh
filters:
  - 'flm://'
  - 'user.txt'
  - 'my_filter.txt' # connecting your own file
```
