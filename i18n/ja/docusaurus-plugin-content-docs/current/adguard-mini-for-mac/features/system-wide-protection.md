---
title: システム全体の保護
sidebar_position: 9
---

AdGuard Mini for Mac バージョン3.0で、「システム全体の保護」機能を導入しました。この機能は、Safariだけでなく、Mac上の全アプリで広告やトラッカーをブロックします。

この機能は、AdGuardライセンスをお持ちのユーザーが利用できます。[ライセンスを購入する](https://adguard.com/license.html)か、「高度な保護機能」の「無料で試してみるをクリックして14日間の無料トライアルを開始できます。

:::caution

_System-wide protection_ is an experimental feature. It may not work for everyone due to an [unresolved bug on Apple’s side](https://developer.apple.com/forums/thread/848364). Once the feature is stable for everyone, we’ll make it a core part of AdGuard Mini.

:::

The feature does not work correctly on some macOS versions, including **26.7.2** and **27.2**. If you’re on **macOS 26.0 and 27.0**, you can try _System-wide protection_ as usual. Note that if _System-wide protection_ works fine for you on macOS 27.0, it will most likely break after you update to macOS 27.2. Keep this in mind before you update your system.

In the release version, _System-wide protection_ is hidden by default. To show it, go to _Settings_ → _Miscellaneous_ and turn on _Show System-wide protection (Experimental)_. The beta version always shows it.

![実験的切り替え](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/swp-experimental-toggle-ja.png)

## 仕組み

「システム全体の保護」は、Appleの[**URLフィルタ**](https://developer.apple.com/documentation/networkextension/filtering-traffic-by-url)に基づいて構築されています。これは、システム全体のトラフィックフィルタリングに使用されるシステムフィルタリングAPIです。その仕組みは以下のとおりです。

まず、macOS は URL をbloomフィルタ（Mac に保存され、バックグラウンドで更新される事前フィルタ）と照合します。ほとんどのアドレスはローカルでクリアされ、チェック自体のためのネットワークリクエストは発生しません。

プレフィルターで一致する可能性があるものが検出された場合、macOS は Private Information Retrieval（PIR）を使用して AdGuard のサーバーに判定を問い合わせます。この方法により、Macは問い合わせた正確なアドレスを明かすことなく、サーバーからデータをリクエストできます。リクエストはお使いのアカウントまたはデバイスに関連付けられません。サーバーが応答しない場合、ページは通常通り読み込まれます。

[AdGuardブログにて、システム全体フィルタリングへのAppleによるアプローチに関する詳細な分析](https://adguard.com/en/blog/apple-url-filter-system-wide-filtering-api.html)をお読みいただけます。

## 「システム全体の保護」を有効にする方法

AdGuard Miniアプリの「高度な保護機能」の中に「システム全体の保護」があります。有効にするには、スイッチをオンにします。

![システム全体の保護](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/system-wide-protection-ja.png)

初めて「システム全体の保護」を有効にすると、お使いのコンピューターにURLフィルタをインストールするリクエストが表示されます。「インストール」をクリックすると、フィルタ構成の追加を求めるシステムメッセージが表示されます。これはmacOSの標準的な動作です。 AdGuard はこのデータを閲覧または保存することはできません。

![システム全体の保護にはURLフィルタが必要です](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/install-screen-ja.png)

URLフィルターをインストールした後、「システム全体の保護」はデフォルトでオンのままになります。オフにしたい場合は、「高度な保護機能」にある「システム全体の保護」スイッチをオフにしてください。

また、右上隅のコンテキストメニュー (⋮) をクリックして、「URLフィルターを削除」を選択することもできます。接続の問題をトラブルシューティングのために、削除せずにURLフィルターをリセットしたい場合は、「キャッシュをリセット」を選択してください。

また、Macの「システム設定」 → 「ネットワーク」 → 「VPNとフィルタ」 → 「フィルタとプロキシ」でURLフィルタを無効にすることも可能です。「ステータスメニュー」で「有効」を「無効」に変更します。その後、AdGuard Mini は「システム全体の保護」を自動的にオフにします。

## 保護レベル

選択できる保護レベルは 3 つあります。「ベーシック」はデフォルトで選択されています。

- 「ベーシック」 — 広告とトラッカーをブロックします。
- 「安全」 — 広告、トラッカー、フィッシング、マルウェアをブロックします。
- 「ファミリー」 — 広告、トラッカー、フィッシング、マルウェア、成人向けコンテンツをブロックします。

![3つの保護レベル](https://cdn.adtidy.org/content/release_notes/ad_blocker/mini_for_mac/v3.0/levels-of-protection-ja.png)

## お困りの場合・トラブルシューティング

### System-wide protection doesn’t work on macOS 27.2

This is caused by an [unresolved bug on Apple’s side](https://developer.apple.com/forums/thread/848364). Because of it, _System-wide protection_ is currently an experimental feature. It works on macOS 26 and 27.0, but may not work correctly on macOS 27.2 beta. If you’re on an earlier macOS version, we recommend staying on it until Apple fixes the bug.

### 「システム全体の保護」が機能しないアプリやブラウザがある

対象範囲は各アプリがネットワークリクエストをどのように処理するかによって異なるため、一部のアプリはフィルタリングされない場合があります。これはApple仕様の制約です。

Chrome、Edge、Opera、BraveなどのChromiumベースのブラウザは、Appleのフレームワークの代わりに独自のネットワーキングコードを使用しているため、URLフィルタはそのリクエストをチェックできません。

### 「システム全体の保護」がオンにならない

- **お使いのMacのmacOSバージョンが古い。** Appleの「URLフィルター」にはmacOS 26 Tahoe以降が必要です。以前のバージョンでは、設定は無効になっており、アプリからmacOS Tahoe 26以降にアップデートするよう求められます。
- **お使いのアカウントが対象外。**「システム全体の保護」は、Macで最初に作成されたユーザーアカウントでのみ機能します。アカウントが後から追加された場合、設定は無効になり、「このMacアカウントではサポートされていません」と表示されます。下記の「[MacアカウントのユーザーIDを変更できますか？](/adguard-mini-for-mac/features/system-wide-protection/#can-i-change-my-mac-accounts-user-id)」をご覧ください。
- **The setting is hidden.** In the release version, _System-wide protection_ is hidden by default. Go to _Settings_ → _Miscellaneous_ and turn on _Show System-wide protection (Experimental)_.
- **無料版を利用中。** 「システム全体の保護」を使用するには、[AdGuardライセンスを購入する](https://adguard.com/license.html)か、「高度な保護機能」の「無料で試してみる」をクリックして14日間の無料トライアルを開始してください。

### MacアカウントのユーザーIDを変更できますか？

はい。「システム全体の保護」は、ユーザーID（UID）が501である、Macで最初に作成されたユーザーアカウントでのみ機能します。お使いのMacに複数のアカウントがある場合、または古いMacからアカウントを移行した場合は、UIDが異なることがあります。以下の手順に従ってUIDを確認し、必要に応じて501を解放してアカウントに割り当ててください。

:::warning

これはリスクの高い、高度な操作です。他に選択肢がない場合にのみ行ってください。 UID 501を解放することは、既存のアカウントを削除してターミナルから新しいアカウントを作成することを意味します。問題が発生したら、永久的なデータ損失を引き起こす可能性があります。続行する前に、Mac上のすべてのデータをバックアップしてください。

:::

1. **現在のUIDを確認します。** ターミナルを開き、`id -u` と入力して Return を押します。結果が 501 の場合、お使いのアカウントにはすでに適切な UID が設定されています。他に何も行う必要はありません。

2. \*\*UID 501 を持つユーザーを確認します。\*\*あなたの UID が 501 でない場合は、次のコマンドを実行してください:

    ```bash
    dscacheutil -q user -a uid 501 | grep -E '^(name|uid|gecos):'
    ```

   これは、そのアカウントのユーザ名、UID、フルネームを表示します。続行する前に、必要なファイルがないことを確認するか、バックアップを作成してください。

3. \*\*UID 501のアカウントを削除します。\*\*ご自身の管理者アカウントにログインした状態で、「システム設定」 → 「ユーザーとグループ」を開き、ステップ2のアカウントを選択して削除します。 macOSでホームフォルダの処理について尋ねられたら、「ホームフォルダをディスクイメージに保存」を選択してください。これにより、後で必要になった場合に備えてアカウントのファイルが保持されます。

4. **UID 501 で新しいアカウントを作成します。** `username` と `Name Surname` を任意の内容に置き換えて、次のコマンドを実行します:

    ```bash
    sudo sysadminctl -addUser username \
      -fullName "Name Surname" \
      -password - \
      -admin \
      -UID 501
    ```

   `-password -` を指定すると、ターミナルで対話形式でパスワードの入力を求められます。`-admin` を指定すると、新しいアカウントに管理者権限が付与されます。

5. \*\*変更を確認します。\*\*新しいアカウントにログインし、UIDを再度確認します: ターミナルを開き、`id -u`と入力してReturnキーを押します。結果は 501 になるはずです。
