---
title: 설정 및 보호 관리
sidebar_position: 3
---

사용 가능한 모든 AdGuard 명령 목록을 보려면 다음을 입력합니다.

```
adguard-cli --help-all
```

## 보호 활성화 및 비활성화

보호를 활성화하려면 다음을 입력합니다.

```
adguard-cli start
```

보호를 비활성화하려면 다음을 입력하세요.

```
adguard-cli stop
```

보호 상태를 보려면 다음을 입력합니다.

```
adguard-cli status
```

## 업데이트 확인

업데이트를 확인하려면 다음을 입력합니다.

```
adguard-cli check-update
```

Linux용 AdGuard를 업데이트하려면 다음을 입력합니다.

```
adguard-cli update
```

업데이트 스크립트 출력을 보려면 다음을 입력합니다.

```
adguard-cli update -v
```

## Linux용 AdGuard 구성

`config` 명령을 사용하여 Linux용 AdGuard를 구성합니다. 하위 명령:

- `show`: `proxy.yaml`의 현재 설정 표시
- `set`: `proxy.yaml`에서 옵션 설정
    - `listen_ports.http_proxy`: HTTP 수신 포트
    - `proxy_mode`: 프록시 모드(`manual` 또는 `auto`)
- `get`: 위 옵션의 현재 상태 확인

## 필터 관리

`filters` 명령을 사용하여 Linux용 AdGuard를 구성합니다. 하위 명령:

- `list`: 설치된 필터 목록
    - `--all`: 모든 필터 보기
- `install`: 필터 설치 설치하려는 필터의 URL을 입력합니다.
- `enable`: 필터 활성화 필터의 이름이나 ID를 입력합니다.
- `disable`: 필터 비활성화 필터의 이름이나 ID를 입력합니다.
- `update`: 필터 업데이트
