---
title: AdGuardフィルタに貢献する
sidebar_position: 4
---

### フィルタリングルール {#filtering-rules}

ご存知かと思いますが、AdGuard はフィルタリング・ルールというものを使用して広告をブロックします。これらのルールは、AdGuardベースフィルタ、モバイル広告フィルタなど、カテゴリ別の[ブロックフィルタ](/general/ad-filtering/adguard-filters)に分けられています。広告ブロックの仕組みについて[詳しくはこちらの記事](/general/ad-filtering/how-ad-blocking-works)をご覧ください。

ウェブサイトは常に広告の埋め込み方を変えており、変化に対応した新しいルールを常にフィルタに追加することで、広告ブロックの効果を維持しています。 フィルターエンジニアチームが新しいルールの作成に取り組んでいますが、有志の方々のご協力やご支援もいつでも大歓迎です。

:::note

All contributors must follow the **AdGuard filter policy** when creating rules. By participating, you agree to comply with the Policy and ensure your rules adhere to its requirements. Also contributors must not create rules intended to deliberately block websites or services that do not meet the criteria for blocking or that fall under exceptions described in the Policy.

:::

### 始め方 {#how-to-start}

ブロックフィルターを扱うには、ある程度のスキルと知識が必要です。 もし、スキルをお持ちで、ルールの作り方をご存知でしたら、[GitHubの「AdGuard Filters」リポジトリ](https://github.com/AdguardTeam/AdguardFilters) に直接アクセスしてください。 Before you start contributing, we recommend reviewing the [guidelines](https://github.com/AdguardTeam/AdguardFilters/blob/master/CONTRIBUTING.md).

In the repository, you will find a lot of open issues, each one referencing a problem with some website problem — a missed ad, a false positive, etc. 好きなissueを選んで、コメントで独自のルールを提案してください。 AdGuardフィルターエンジニアがご提案を確認し、適切と判断した場合、ご指摘のルールはAdGuardのフィルターに追加されます。

If you are not yet familiar with our filtering rule syntax, or maybe need a refresher, you'll find the basics about the syntax [in our Knowledge Base](/general/ad-filtering/create-own-filters).

### 報酬 {#rewards}

ご提案いただいたフィルタリングルールのうちのいくつかが承認された場合、AdGuardから報酬を受け取ることができます。 [st@adguard.com](mailto:st@adguard.com) にGitHubのアカウント名を添えてメールを送っていただければ、AdGuardのライセンスキーを無料で差し上げます。 報酬の対象となるためのルール数に関しては、固い条件はありません。 ルール作成作業は難しいので、通常、ご提案のルールが5件以上採用されれば報酬を受け取れます。
