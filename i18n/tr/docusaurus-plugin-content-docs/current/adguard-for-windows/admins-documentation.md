---
title: Yöneticiler için belgeler
sidebar_position: 5
---

Bu sayfada AdGuard'ın politika ve tercihlere ilişkin merkezi yönetiminin özellikleri ve ayrıntıları açıklanmaktadır.

## 1. MSI'ı indirin {#msi-download}

[AdGuard MSI'yı](https://static.adtidy.org/windows/setup.msi) indirin.

## 2. Ağınız için ayarları yapılandırın {#settings-configuring}

On machines that are joined to an Active Directory domain, policy settings may also be stored in the registry under `HKEY_LOCAL_MACHINE` in the following path: `Software\Policies\AdGuard\`.

The only supported policy is `LicenseKey`. If this policy is set, AdGuard will prefer it over what user can enter in the interface. Bu lisans anahtarı lisans durumunu kontrol etmek için kullanılacaktır.

## 3. AdGuard sunucularının kullanılabilir olduğundan emin olun {#servers-available}

AdGuard connects to two hosts: `api.adguard.org` and `filters.adtidy.org`. Her iki sunucunun da kullanılabilir olduğundan emin olun.

## 4. Push the MSI out to your network {#msi-push}

If you usually use SMS or other tools, use them to push out the AdGuard MSI just as you would normally do with any other installation bundle.

Otherwise, you can run the MSI on the target machine directly (and silently) with this command: `Msiexec /q /i AdGuard.msi`

If you need to roll out an update, use this command: `Msiexec /q /i AdGuard.msi REINSTALL=ALL REINSTALLMODE=vomus`

:::not

You must run these commands with admin privileges.

:::

AdGuard'ı Windows 7 yüklü bir bilgisayara kurmak istiyorsanız, .NET 4 İstemci Profilinin kurulu olduğundan emin olun: https://www.microsoft.com/en-us/download/details.aspx?id=24872

:::bilgi

Windows için AdGuard v7.17 ile başlayarak, uygulamayı MSI'dan kurduğunuzda otomatik güncellemeler varsayılan olarak etkinleştirilir. Windows için AdGuard'ın merkezi olarak güncellenmesi için bir kullanıcı için güncellemeleri devre dışı bırakmanızı öneririz. Bunu yapmak için, aşağıdaki yolda bulunan ForbidCheckUpdates=Yes anahtarını ekleyin: HKEY_LOCAL_MACHINE\SOFTWARE\Adguard.

Windows için AdGuard'ın eski sürümlerinde otomatik güncellemeler varsayılan olarak devre dışıdır. Bir kullanıcı için güncellemelere izin vermek için, `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Adguard` anahtarı için `AllowCheckUpdates` parametresinin değerini `YES` (büyük/küçük harfe duyarlı değil) olarak ayarlayın.

:::not

## 5. Test your installation {#installation-test}

Hedef makinede AdGuard'ı başlatın. Ayarladığınız lisansı kullanıp kullanmadığını kontrol etmek için lisans ekranını açın. AdGuard'ın lisans anahtarını doğrulamasını sağlamak için "Durumu yenile" öğesine tıklamanız gerekebilir.
