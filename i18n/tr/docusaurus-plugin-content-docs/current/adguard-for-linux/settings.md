---
title: Ayarlar ve koruma yönetimi
sidebar_position: 3
---

Mevcut tüm AdGuard komutlarının listesini almak için şunu yazın:

```
adguard-cli --help-all
```

## Enable and disable protection

Korumayı etkinleştirmek için şunu yazın:

```
adguard-cli start
```

Korumayı devre dışı bırakmak için şunu yazın:

```
adguard-cli stop
```

Koruma durumunu görüntülemek için şunu yazın:

```
adguard-cli status
```

## Güncellemeleri denetleyin

Güncellemeleri denetlemek için şunu yazın:

```
adguard-cli check-update
```

Linux için AdGuard'ı güncellemek için şunu yazın:

```
adguard-cli update
```

To view the update script output, enter:

```
adguard-cli update -v
```

## Linux için AdGuard'ı yapılandırma

Linux için AdGuard'ı yapılandırmak için `config` komutunu kullanın. Alt komutlar:

- `show`: Show the current configuration in `proxy.yaml`
- `set`: Configure an option in `proxy.yaml`
    - `listen_ports.http_proxy`: HTTP listening port
    - `proxy_mode`: Proxy mode (`manual` or `auto`)
- `get`: Get the current status of the above options

## Manage filters

Use the `filters` command to configure AdGuard for Linux. Alt komutlar:

- `list`: List installed filters
    - `--all`: View all filters
- `install`: Install a filter. Yüklemek istediğiniz filtrenin URL'sini girin
- `enable`: Enable a filter. Filtrenin adını veya kimliğini girin
- `disable`: Disable a filter. Filtrenin adını veya kimliğini girin
- `update`: Update filters
