---
title: 설정 및 보호 관리
sidebar_position: 3
---

## Available commands

사용 가능한 모든 AdGuard 명령 목록을 보려면 다음을 입력합니다.

```sh
adguard-cli --help-all
```

## 보호 활성화 및 비활성화

### Enable protection

보호를 활성화하려면 다음을 입력합니다.

```sh
adguard-cli start
```

This command attempts to configure a redirection to the proxy.

![Start protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### Disable protection

보호를 비활성화하려면 다음을 입력하세요.

```sh
adguard-cli stop
```

This command not only stops the proxy but also stops the trafic from redirecting to it.

### Check protection status

보호 상태를 보려면 다음을 입력합니다.

```sh
adguard-cli status
```

![Status/Stop protection \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## Updates

### 업데이트 확인

업데이트를 확인하려면 다음을 입력합니다.

```sh
adguard-cli check-update
```

### Update AdGuard for Linux

Linux용 AdGuard를 업데이트하려면 다음을 입력합니다.

```sh
adguard-cli update
```

### Update script output

업데이트 스크립트 출력을 보려면 다음을 입력합니다.

```sh
adguard-cli update -v
```

## Linux용 AdGuard 구성

`config` 명령을 사용하여 Linux용 AdGuard를 구성합니다. 하위 명령:

- `show`: `proxy.yaml`의 현재 설정 표시

    ![Current setup \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: `proxy.yaml`에서 옵션 설정
    - `listen_ports.http_proxy`: HTTP 수신 포트
    - `proxy_mode`: 프록시 모드(`manual` 또는 `auto`)

- `get`: 위 옵션의 현재 상태 확인

## 필터 관리

`filters` 명령을 사용하여 Linux용 AdGuard를 구성합니다. 하위 명령:

- `list`: 설치된 필터 목록

    - `--all`: 모든 필터 보기

    ![Filter list \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: 필터 설치 설치하려는 필터의 URL을 입력합니다.

- `enable`: 필터 활성화 필터의 이름이나 ID를 입력합니다.

    ![Enable filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: 필터 비활성화 필터의 이름이나 ID를 입력합니다.

- `update`: 필터 업데이트

## Changing the proxy server listen address in manual proxy mode

By default, the proxy server listens on `127.0.0.1` — the address of the loopback network interface.
There are two ways to make the proxy server listen on a different interface:

1. Run `adguard-cli config set listen_address <address>` where `<address>` is the address to listen on.
2. Edit the config file directly:
    - To determine the location of the config file, run `adguard-cli config show | grep "Config location"`.
    - Look for the `listen_address` key and set its value accordingly. To listen on all available network interfaces, set the listen address to `0.0.0.0` or `::`.

If the listen address is set to anything other than `127.0.0.1`, then proxy client authentication is required. AdGuard CLI will not start unless proxy authentication is configured:

- When running `adguard-cli config set listen_address <address>` where `<address>` is not `127.0.0.1`, AdGuard CLI will prompt for a username and password if proxy authentication is not already configured.
- When editing the config file directly, look for the `listen_auth`key. Set the `enabled` sub-key to `true`, and `username` and `password` to non-empty values.
