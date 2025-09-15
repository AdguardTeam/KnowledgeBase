---
title: Geri bildirim gönderme
sidebar_position: 4
---

## Report a problem or suggest a feature

Linux için AdGuard'da bir hata bulduysanız veya yeni bir özellik önermek istiyorsanız, bunu şu şekilde yapabilirsiniz:

- [Geri bildirim formunu](https://surveys.adguard.com/en/adguard_linux/form.html) doldurun.
- [GitHub sorunu](https://github.com/AdguardTeam/AdGuardCLI/issues/new/choose) oluşturun. Ancak bunu yapmadan önce benzer sorunlar için [depoyu](https://github.com/AdguardTeam/AdGuardCLI/issues?q=is%3Aissue) kontrol edin.

:::note

If you want to support the implementation of a new feature or bugfix, you can vote for it on GitHub. To vote, just react with some emoji.

:::

## Günlükleri toplama ve gönderme

1. Hata ayıklama günlüğünü etkinleştir:

   `adguard-cli config set log_level debug`

2. Sorunu yeniden oluşturun ve tam olarak ne zaman oluştuğunu hatırlamaya çalışın.

3. Bir süre bekleyin, ardından günlükleri dışarı aktarın:

   `adguard-cli export-logs`

   Arşivlenen günlük dosyası varsayılan olarak uygulama klasörüne indirilecek ve günlüklerin yolu konsola yazılacaktır.

4. Günlük dosyasını <devteam@adguard.com> adresine gönderin. Hatanın zamanını belirtin ve GitHub sorununuza veya numarasına bir bağlantı ekleyin (başlığın yanında #sayı olarak görünür). Alternatif olarak, günlük dosyasını Google Drive'a yükleyebilir ve <devteam@adguard.com> ile paylaşabilirsiniz. Attach the file link to your GitHub issue.

5. Switch the logging mode back to `info`:

   `adguard-cli config set log_level info`
