---
title: Firewall
sidebar_position: 1
---

:::info

Tento článek popisuje AdGuard pro Android, multifunkční blokátor reklam, který chrání vaše zařízení na úrovni systému. Chcete-li se podívat, jak to funguje, [stáhněte si AdGuard pro Android](https://agrd.io/download-kb-adblock)

:::

K modulu Firewall se dostanete klepnutím na kartu _Ochrana_ (druhá ikona vlevo dole na obrazovce) a výběrem možnosti _Firewall_.

Tato funkce pomáhá spravovat přístup k internetu pro konkrétní aplikace nainstalované v zařízení a pro zařízení obecně.

![Firewall \*mobile\_border](https://cdn.adtidy.org/blog/new/gdn94firewall.png)

### Globální pravidla brány firewall

Tato část umožňuje řídit přístup k internetu pro celé zařízení.

![Global firewall rules \*mobile\_border](https://cdn.adtidy.org/blog/new/4zx2nhglobal_rules.png)

Tato pravidla platí pro všechny aplikace v zařízení, pokud jste pro ně nenastavili vlastní pravidla.

### Vlastní pravidla brány firewall

V této části můžete řídit přístup k internetu pro konkrétní aplikace — omezit oprávnění pro ty, které nepovažujete za důvěryhodné, nebo naopak odblokovat ty, u kterých chcete obejít globální pravidla brány firewall.

1. Otevřete _Vlastní pravidla brány firewall_. V části _Aplikace s vlastními pravidly_ klepněte na _Přidat aplikaci_.

   ![Custom firewall rules \*mobile\_border](https://cdn.adtidy.org/blog/new/qkxpecustom_rules.png)

2. Vyberte aplikaci, pro kterou chcete nastavit jednotlivá pravidla.

   ![Adding an app to Custom firewall rules \*mobile\_border](https://cdn.adtidy.org/blog/new/2db47fadding_app.png)

3. V části _Dostupná vlastní pravidla_ vyberte ta, která chcete nakonfigurovat a klepněte na ikonu “+”. Pravidla se nyní objeví části _Použitá vlastní pravidla_.

   ![Added rule \*mobile\_border](https://cdn.adtidy.org/blog/new/6fzjladded_rule.png)

4. Pokud potřebujete zablokovat určitý typ připojení, přepněte přepínač doleva. Pokud to chcete povolit, ponechte přepínač zapnutý. **Vlastní pravidla jsou nadřazena globálním pravidlům**: jakékoli změny provedené v části _Globální pravidla_ brány firewall nebudou mít na tuto aplikaci vliv.

Chcete-li odstranit pravidlo nebo aplikaci v části _Vlastní pravidla_, přejeďte prstem doleva.

### Upozornění

If enabled, this feature notifies you when an app is attempting to violate an applicable firewall rule, e.g. attempts to access mobile data from which it is blocked. Upozornění můžete zapnout a vypnout pro všechny aplikace nebo pro každou aplikaci zvlášť.

Klepnutím na upozornění získáte přístup k nastavení brány firewall aplikace nebo můžete dočasně zakázat všechna pravidla brány firewall pro danou aplikaci klepnutím na příslušné tlačítko v upozornění. Můžete také ztlumit všechna upozornění brány firewall pro aplikaci klepnutím na tlačítko _Ztlumit_ v upozornění pro danou aplikaci.

Vezměte na vědomí, že pokud by se zobrazovala upozornění pro více aplikací, budou místo toho sdružena do jednoho upozornění.
