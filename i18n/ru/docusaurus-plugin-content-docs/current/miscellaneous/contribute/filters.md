---
title: Помощь в разработке фильтров AdGuard
sidebar_position: 4
---

### Правила фильтрации {#filtering-rules}

Для блокировки рекламы AdGuard использует правила фильтраци. Эти правила объединяются в тематические [фильтры](/general/ad-filtering/adguard-filters), такие как фильтр «Базовый фильтр AdGuard», «Фильтр мобильной рекламы» и т.д. [Подробнее о том, как работает блокировка рекламы](/general/ad-filtering/how-ad-blocking-works).

Веб-сайты постоянно меняют способы встраивания рекламы, и мы добавляем новые правила в наши фильтры, чтобы сохранить их эффективность. Над созданием новых правил работают инженеры фильтров. Однако мы всегда рады помощи и поддержке волонтёров.

:::note

All contributors must follow the **AdGuard filter policy** when creating rules. By participating, you agree to comply with the Policy and ensure your rules adhere to its requirements. Also contributors must not create rules intended to deliberately block websites or services that do not meet the criteria for blocking or that fall under exceptions described in the Policy.

:::

### С чего начать {#how-to-start}

Работа с фильтрами, блокирующими рекламу, требует специальных навыков. Если они у вас есть, и вы знаете, как создавать правила, то направляйтесь прямо в наш репозиторий [AdGuard Filters](https://github.com/AdguardTeam/AdguardFilters) на GitHub. Before you start contributing, we recommend reviewing the [guidelines](https://github.com/AdguardTeam/AdguardFilters/blob/master/CONTRIBUTING.md).

In the repository, you will find a lot of open issues, each one referencing a problem with some website problem — a missed ad, a false positive, etc. Выбирайте любой и предлагайте свои правила в комментариях. Инженеры фильтров AdGuard рассмотрят ваше предложение и добавят правило в фильтры, если оно окажется корректным.

Если вы ещё не знакомы с синтаксисом наших правил фильтрации или просто хотите освежить знания, то вам нужно обратиться к [нашей Базе знаний](/general/ad-filtering/create-own-filters).

### Как мы благодарим помощников {#rewards}

Если вы предложили несколько правил фильтрации, и некоторые из них были одобрены, значит, пришло время получить вознаграждение. Отправьте нам сообщение по адресу [st@adguard.com](mailto:st@adguard.com) с указанием имени вашей учётной записи на GitHub, и вы получите бесплатный лицензионный ключ AdGuard. Не существует жёстких правил относительно точного количество одобренных изменений. Эта задача не из лёгких, поэтому пяти правил (и больше) должно быть достаточно.
