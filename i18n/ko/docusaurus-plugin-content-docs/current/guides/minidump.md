---
title: Minidump 파일을 만들어 블루스크린 오류를 수정하는 방법
sidebar_position: 8
---

안타깝게도 거의 모든 Windows 사용자는 [블루스크린(Blue Screen of Death, BSoD)](https://en.wikipedia.org/wiki/Blue_screen_of_death) 오류에 대해 잘 알고 있습니다. BSoD는 Windows 시스템에서 시스템이 안전하게 작동하는 데 영향을 줄 수 있는 문제(예: 타사 드라이버 코드, 하드웨어 또는 Microsoft 코드 문제)가 발생할 때 나타나는 오류입니다. 블루스크린 오류를 해결하기 위해 minidump 파일을 사용할 수 있습니다.

## Minidump 파일이란 무엇인가요?

Minidump 파일은 시스템 크래시의 특성에 대한 정보를 담고 있는 파일입니다. 블루스크린이 나타나기 직전에 생성되며 문제 해결에 사용할 수 있는 최소한의 유용한 정보가 포함되어 있습니다. Minidump 파일의 확장자는 보통 *.dmp*입니다.

:::note
Windows 10에서는 블루스크린에 중지 코드와 QR 코드가 표시됩니다. 사용자는 이 정보를 사용하여 특정 문제에 대한 정보를 인터넷에서 검색할 수 있습니다.

:::

Minidump 파일을 생성하는 옵션은 기본적으로 비활성화되어 있습니다. 따라서 이 파일을 사용하는 방법에 대해 자세히 알아보기 전에 이 파일을 활성화하는 방법을 자세히 살펴보겠습니다.

## Minidump 파일을 생성하도록 Windows를 설정하는 방법

BSoD 오류가 발생하지 않았더라도 이 옵션을 설정하는 것이 좋으며, 이는 일반적인 권장 사항으로 AdGuard 제품과 반드시 관련이 있는 것은 아닙니다. Minidump 파일을 자동으로 생성하려면 아래 지침을 따르세요.

 1. Windows 검색 창에 *sysdm.cpl*을 입력하고 **열기**를 클릭합니다. **시스템 속성 제어판 메뉴** 창이 화면에 나타납니다.

    :::tip

    또는 **설정** → **시스템** → **정보** → **고급 시스템 설정**을 클릭합니다.


:::

    ![시스템 속성 *mobile_border](https://cdn.adtidy.org/blog/new/c2huSystem_Properties.jpeg)

 1. **고급** 탭으로 이동합니다.
 1. **시작 및 복구** 섹션에서 **설정**을 클릭합니다.

    ![시작 및 복구 *mobile_border](https://cdn.adtidy.org/blog/new/1dmybiStartup_and_Recovery.png)

 1. 다음 세 가지 옵션을 활성화합니다.

    - 시스템 로그에 이벤트 기록
    - 자동 재시작
    - 디버깅 정보 기록 → 작은 메모리 덤프(256KB)

    ![세 가지 옵션 *mobile_border](https://cdn.adtidy.org/blog/new/nmr4eThree_options.png)

 1. **확인**을 클릭하여 설정을 적용합니다.
 1. 컴퓨터를 다시 시작합니다.

Minidump 파일을 성공적으로 활성화했습니다. 이제 시스템 크래시 발생 시 minidump 파일이 자동으로 생성됩니다.

:::note

기본적으로 minidump 파일은 **%SystemRoot%\Minidump** 폴더에 저장됩니다. 디렉토리 위치를 원하는 대로 변경할 수 있지만, 많은 프로그램이 기본적으로 이 위치를 찾도록 설정되어 있으므로 위치를 변경하지 않는 것이 좋습니다.

:::
