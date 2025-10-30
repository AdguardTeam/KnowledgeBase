---
title: Jak nastavit výjimky aplikací a vlastní filtry
sidebar_position: 5
---

V AdGuard CLI není možné importovat výjimky aplikací z jiných verzí programu. Můžete však ručně vytvořit požadované výjimky a filtry úpravou několika konfiguračních souborů v pracovním adresáři aplikace.

## Jak přidat výjimky

Pracovní adresář AdGuard CLI:

- Linux: `~/.local/share/adguard-cli/`
- macOS: `~/Library/Application Support/adguard-cli/`

V této složce se nachází několik klíčových souborů:

1. `browsers.yaml` — seznam prohlížečů (Safari, Chrome, Firefox atd.). Zde můžete povolit nebo zakázat HTTPS filtrování pro jednotlivé prohlížeče nebo je zcela vyloučit z filtrování.

**Příklad browsers.yaml (pro Linux)**:

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

**Příklad `browsers.yaml` (pro macOS)**:

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

Chcete-li HTTPS filtrování zakázat, nahraďte `default` za `bypass_https`. Chcete-li aplikaci zcela vyloučit z filtrování, nahraďte `default` za `bypass`.

1. `proxy.yaml` — hlavní konfigurační soubor. Obsahuje sekci aplikací, kde jsou nastaveny výjimky pro všechny ostatní aplikace.

**Příklad `proxy.yaml`**:

```sh
  - include-list: browsers.yaml
  - name: '*vpn*'
    action: 'bypass'          
    skip_outbound_proxy: true
  - name: '*'
    action: 'bypass_https'   
```

:::note

V systému **Linux** zadejte název spustitelného souboru (`chrome`, `firefox` atd.). V systému **macOS** zadejte ID balíčku, např. `com.google.Chrome`, `org.mozilla.firefox`.

:::

## Jak přidat vlastní filtry

Pracovní adresář obsahuje soubor `user.txt`, do kterého můžete přidat vlastní pravidla pro blokování nebo povolení webových stránek. Pokud máte vlastní seznam pravidel ve formátu `.txt`, připojte jej skrze `proxy.yaml`:

```sh
filters:
  - 'flm://'
  - 'user.txt'
  - 'my_filter.txt' # connecting your own file
```
