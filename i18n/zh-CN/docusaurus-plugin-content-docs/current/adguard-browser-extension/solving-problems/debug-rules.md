---
title: 在 Chrome MV3 的 AdGuard 中调试规则
sidebar_position: 2
---

在 [用于 Chrome MV3 的 AdGuard](/adguard-browser-extension/mv3-version) 中，过滤日志仅显示所应用的近似规则，我们称之为“假设的规则”。 原因是，除非扩展名为“解压”格式，否则浏览器无法提供关于特定声明式规则的详细信息。 如需获取准确信息，需要自行在浏览器中安装扩展程序的“解压”版本。

此说明对于有问题的情况也很有用，比如，在用户要更改扩展中静态包含的规则的情况下。 在大多数情况下，使用扩展中的「用户规则」就足够了。

## 先决条件

1. **Git**：[安装 Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. **Node**：[安装 Node.js](https://nodejs.org/en/download/package-manager)

3. **Yarn**：[安装 Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

## 克隆扩展的方式

1. 克隆存储库：

    ```bash
    git clone git@github.com:AdguardTeam/AdguardBrowserExtension.git
    ```

2. 转到目录：

    ```bash
    cd AdguardBrowserExtension
    ```

3. 切换到 `v5.0` 分支：

    ```bash
    git checkout v5.0
    ```

4. 安装依赖项：

    ```bash
    yarn install
    ```

## 建构扩展的方式

1. 切换到 `v5.0` 分支：

    ```bash
    git checkout v5.0
    ```

2. 在终端中运行以下命令：

    ```bash
    yarn dev chrome-mv3
    ```

3. 构建的扩展将放置在以下目录中：

    ```bash
    ./build/dev/chrome-mv3
    ```

## 在浏览器中安装解压包

1. 开启「开发者模式」：

    ![开发者模式](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/developer_mode.png)

2. 单击「加载已解压的扩展程序」：

    ![加载已解压的扩展程序](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/load_unpacked.png)

3. 选择扩展目录并点击「选择」：

    ![选择](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/select.png)

完成！

## 调试规则

1. 在 `./Extension/filters/chromium-mv3` 目录中的 `.txt` 文件中找到并修改需要的规则。

2. 将规则从 TXT 格式转换为声明形式：

    ```bash
    yarn convert-declarative
    ```

3. 再次构建扩展：

    ```bash
    yarn dev chrome-mv3
    ```

4. 在浏览器中重新加载扩展：

    ![加载扩展](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/reload_extension.png)
