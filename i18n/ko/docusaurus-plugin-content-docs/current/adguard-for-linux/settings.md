---
title: 설정 및 보호 관리
sidebar_position: 3
---

## 사용 가능한 명령

사용 가능한 모든 AdGuard 명령 목록을 보려면 다음을 입력합니다.

```sh
adguard-cli --help-all
```

## 보호 활성화 및 비활성화

### 보호 사용

보호를 활성화하려면 다음을 입력합니다.

```sh
adguard-cli start
```

이 명령은 프록시로의 리디렉션을 구성하려고 시도합니다.

![보호 시작 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/start-protection.gif)

### 보호 비활성화

보호를 비활성화하려면 다음을 입력하세요.

```sh
adguard-cli stop
```

이 명령은 프록시를 중지할 뿐만 아니라 트래픽이 프록시로 리디렉션되는 것도 중지합니다.

### 보호 상태 확인

보호 상태를 보려면 다음을 입력합니다.

```sh
adguard-cli status
```

![상태/보호 중지 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation6.png)

## 업데이트

### 업데이트 확인

업데이트를 확인하려면 다음을 입력합니다.

```sh
adguard-cli check-update
```

### Linux용 AdGuard 업데이트

Linux용 AdGuard를 업데이트하려면 다음을 입력합니다.

```sh
adguard-cli update
```

### 스크립트 출력 업데이트

업데이트 스크립트 출력을 보려면 다음을 입력합니다.

```sh
adguard-cli update -v
```

## Linux용 AdGuard 구성

`config` 명령을 사용하여 Linux용 AdGuard를 구성합니다. 하위 명령:

- `show`: `proxy.yaml`의 현재 설정 표시

  ![현재 설정 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/activation7.png)

- `set`: `proxy.yaml`에서 옵션 설정
  - `listen_ports.http_proxy`: HTTP 수신 포트
  - `proxy_mode`: 프록시 모드(`manual` 또는 `auto`)

- `get`: 위 옵션의 현재 상태 확인

## 필터 관리

`filters` 명령을 사용하여 Linux용 AdGuard를 구성합니다. 하위 명령:

- `list`: 설치된 필터 목록

  - `--all`: 모든 필터 보기

  ![필터 목록 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/filter-list.png)

- `install`: 필터 설치 설치하려는 필터의 URL을 입력합니다.

- `enable`: 필터 활성화 필터의 이름이나 ID를 입력합니다.

  ![필터 활성화 \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/linux/built-in-filters.png)

- `disable`: 필터 비활성화 필터의 이름이나 ID를 입력합니다.

- `update`: 필터 업데이트

## 수동 프록시 모드에서 프록시 서버 수신 주소 변경

기본적으로 프록시 서버는 `127.0.0.1`(루프백 네트워크 인터페이스 주소)를 감시합니다.
프록시 서버가 다른 인터페이스를 감시하도록 설정할 수 있습니다. 두 가지 방법이 있습니다.

1. `adguard-cli config set listen_address <address>` 명령어를 실행하세요. 여기서 `<address>`는 감시할 주소입니다.
2. 구성 파일을 직접 편집합니다.
   - 구성 파일의 위치를 확인하려면 `adguard-cli config show | grep "Config location"`를 실행합니다.
   - `listen_address` 키를 찾아서 그에 맞는 값을 설정합니다. 사용 가능한 모든 네트워크 인터페이스에서 수신하려면 수신 주소를 `0.0.0.0` 또는 `::`으로 설정합니다.

수신 주소가 `127.0.0.1`이 아닌 다른 주소로 설정된 경우 프록시 클라이언트 인증이 필요합니다. 프록시 인증이 구성되지 않으면 AdGuard CLI가 시작되지 않습니다.

- `adguard-cli config set listen_address <address>`를 실행할 때 `<address>`가 127.0.0.1이 아닌 경우, AdGuard CLI는 프로xy 인증이 아직 설정되지 않았다면 사용자 이름과 비밀번호를 요청합니다.
- 구성 파일을 직접 편집할 때는 `listen_auth` 키를 찾습니다. `enabled` 하위 키를 `true`로 설정하고, `username`과 `password`를 비어 있지 않은 값으로 설정합니다.

## Configure outbound proxy

You can configure `outbound_proxy` if you want AdGuard CLI to work through another proxy server.

There are two ways to configure it:

### 1. Configure via URL (recommended)

Instead of setting each option step by step, you can set all parameters in a single line using a URL:

```sh
adguard-cli config set outbound_proxy https://user:pass@host:port
```

:::info

Supported modes are HTTP, HTTPS, SOCKS4, and SOCKS5.

:::

You can also quickly enable or disable `outbound_proxy`:

```sh
adguard-cli config set outbound_proxy false
```

Or quickly clear the settings:

```sh
adguard-cli config set outbound_proxy ""
```

### 2. Configure individual parameters

The ability to adjust specific parameters is also available:

```sh
adguard-cli config set outbound_proxy.enabled true
adguard-cli config set outbound_proxy.host localhost
adguard-cli config set outbound_proxy.port 3128
adguard-cli config set outbound_proxy.username user
adguard-cli config set outbound_proxy.password pass
```

Disable certificate verification for HTTPS proxies:

```sh
adguard-cli config set outbound_proxy.trust_any_certificate true
```

Enable SOCKS5 proxy for UDP traffic:

```sh
adguard-cli config set outbound_proxy.udp_through_socks5_enabled true
```

:::note

If your SOCKS5 proxy does not support UDP, connections may fail.

:::

### Checking the current configuration

To view the current `outbound_proxy` configuration, enter:

```sh
adguard-cli config show outbound_proxy
```

:::info 호환성

Configuring `outbound_proxy` via URL is available starting from AdGuard for Linux v1.1.26 nightly and v1.1 stable release.

:::
