---
title: Filters
sidebar_position: 2
---

:::資訊

這篇文章是關於 AdGuard 瀏覽器擴充套件，它只保護您的瀏覽器。若要保護您的整個裝置，請[下載 AdGuard 應用程式](https://agrd.io/download-kb-adblock)

:::

封鎖廣告是任何廣告封鎖程式的主要功能，AdGuard 瀏覽器擴充套件也不例外。廣告封鎖以過濾器為基礎 - 一套以特殊語言撰寫的規則。這些規則說明哪些元素應該封鎖，哪些不應該。AdGuard 會解析規則，並根據規則修改網頁請求。結果，您就不會在網頁上看到廣告。

![Filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters.png)

所有過濾器都依其角色分類。例如，有廣告封鎖過濾器、隱私保護過濾器、社交媒體相關過濾器等類別。您可以一次啟用個別過濾或整個群組。

![Ad blocking filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_filters1.png)

## 自訂過濾器

雖然其他過濾器群組的功能或多或少是不言而喻的，但有一個稱為 _自訂_ 的群組可能會引起額外的問題。

![Custom filters \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters.png)

在此標籤中，您可以新增預設擴充套件中沒有的過濾條件。網際網路上有許多 [公開可用的過濾條件](https://filterlists.com)。此外，您也可以建立並新增自己的過濾器。事實上，您可以建立任何一組過濾器，並依您喜歡的方式自訂廣告封鎖。

若要新增過濾器，只要按一下 _新增自訂過濾器_，輸入要新增過濾器的 網址 或檔案路徑，然後按一下 _下一步_。

![Add a custom filter \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_custom_filters1.png)

## 使用者規則 {#user-rules}

_使用者規則_ 是另一個協助您自訂封鎖廣告的工具。

![User rules \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_user_rules.png)

新增規則有幾種方法。最直接的方法是直接輸入規則，但需要一些 [規則語法] 的知識。新增規則有幾種方法。最直接的方法是直接輸入規則，但需要一些[規則語法](/general/ad-filtering/create-own-filters)的知識。

您也可以從文字檔匯入即時可用的篩選器清單。**請注意，匯入即用篩選器清單最好在「自訂篩選器」標籤中進行***。

此外，您還可以匯出自己的過濾規則。此選項適合在瀏覽器或裝置之間傳輸您的規則清單。

當您將網站加入 允許列表 (下文將詳細介紹) 或使用 助理 工具隱藏頁面上的元素時，對應的規則也會儲存在 _使用者規則_ 中。

## 允許列表

_允許列表_ 用於從過濾中排除某些網站。封鎖規則不適用於清單上的網站。

![Allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist.png)

允許列表也可以反轉：除了加入此列表的網站外，您可以解除對其他地方廣告的封鎖。要做到這一點，請啟動 _反轉允許清單反轉允許清單_ 選項。

![Invert allowlist \*border](https://cdn.adtidy.org/content/Kb/ad_blocker/browser_extension/ad_blocker_browser_extension_allowlist1.png)

您也可以匯入或匯出現有的允許清單。例如，如果您想在每個瀏覽器中套用相同的允許規則，這將非常有用。
