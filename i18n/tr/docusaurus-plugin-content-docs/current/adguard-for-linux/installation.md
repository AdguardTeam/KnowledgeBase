---
title: Kurulum, ayarlama ve kaldırma
sidebar_position: 2
---

## Linux için AdGuard'ı yükleme

AdGuard'ı kurmak için şunu girin:

Release

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v
```

Beta

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v
```

Gerekirse, yönetici parolanızı girin.

Press `y` to create a link in `/usr/local/bin` to the executable and wait until the installation is complete.

:::note

AdGuard'ın resmi bir sürümü olduğunu kanıtlamak için `gpg` aracını kullanarak imzayı doğrulayabilirsiniz. [GitHub'da daha fazlasını okuyun](https://github.com/AdguardTeam/AdGuardCLI?tab=readme-ov-file#verify-releases)

:::

## Activate license

AdGuard for Linux requires an [AdGuard license](https://adguard.com/license.html). If you don't have a license yet, you can log in or create an account to get a free 14-day trial. Zaten bir lisansınız varsa, etkinleştirmek için giriş yapın.

Giriş yapmak veya hesap oluşturmak için şunu yazın:

```
adguard-cli activate
```

Lisansınızı sıfırlamak için şunu yazın:

```
adguard-cli reset-license
```

Lisans bilgilerini görüntülemek için şunu yazın:

```
adguard-cli license
```

## İlk kurulum

To get AdGuard up and running, complete the initial setup. Buna AdGuard CA sertifikasının yüklenmesi, gerekli filtrelerin etkinleştirilmesi ve proxy modunun seçilmesi dâhildir.

Yapılandırma sihirbazını çalıştırmak için şunu yazın:

```
adguard-cli configure
```

## Uninstall AdGuard for Linux

AdGuard'ı kaldırmak için şunu yazın:

Release

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/release/install.sh | sh -s -- -v -u
```

Beta

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/beta/install.sh | sh -s -- -v -u
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardCLI/nightly/install.sh | sh -s -- -v -u
```

Gerekirse, yönetici parolanızı girin.
