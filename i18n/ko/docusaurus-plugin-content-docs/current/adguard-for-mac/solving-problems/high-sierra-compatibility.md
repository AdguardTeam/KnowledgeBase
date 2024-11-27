---
title: macOS High Sierra 이상에 AdGuard를 설치하는 방법
sidebar_position: 3
---

:::정보

이 글은 시스템 수준에서 기기를 보호하는 광고 차단기인 Mac용 AdGuard에 관한 내용입니다. 이용하고자 한다면 [AdGuard 앱을 다운로드](https://agrd.io/download-kb-adblock)해 보세요.

:::

During the installation of AdGuard on macOS High Sierra (or later), you may receive the message "System Extension Blocked". This is a new security mechanism introduced in High Sierra that requires you to explicitly allow the installation of a third-party system extension.

To complete the installation of AdGuard you have to manually allow loading the extension by clicking the "Allow" button in *System Preferences* → *Security & Privacy* → *General*.

On macOS Sequoia, you can do it in *System Preferences* → *Security & Privacy* → *General* → *Login Items & Extensions*. Once there, click the "i" icon next to *Network Extensions* and toggle the AdGuard option.

![설정에서 확장 프로그램 설치 허용](https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/highsierra.png)

After that you will be able to proceed with the installation as usual.
