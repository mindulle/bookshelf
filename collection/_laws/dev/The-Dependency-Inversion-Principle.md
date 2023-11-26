---
title:
tab: dev 
mood: # cactus | pizza | star | cupid | cheese | frog
command: # optional. require only to folders
---
### 의존 관계 역전 원칙

[위키피디아의 의존 관계 역전 원칙](https://ko.wikipedia.org/wiki/의존관계_역전_원칙)

> 고수준 모듈은 저수준 구현에 의존해서는 안 된다.

'[솔리드](#솔리드)' 원칙의 다섯 번째이다. 고수준에서 지휘하는 구성 요소는 의존 관계를 알 필요가 없다는 원칙이다.

예시로서, 웹사이트의 메타데이터를 읽는 프로그램이 있다고 하자. 우리는 중심 구성 요소가 웹페이지 내용을 다운로드하는 구성 요소와 메타데이터를 읽을 수 있는 구성 요소를 알아야만 한다고 생각할 수 있다. 만약 의존 관계 역전 원칙을 고려한다면, 중심 구성 요소는 오로지 바이트 데이터를 가져올 수 있는 추상 구성 요소와 바이트 스트림에서 메타데이터를 읽을 수 있는 추상 구성 요소에만 의존하면 된다. TCP/IP, HTTP, HTML 등에 대해서는 알 필요가 없다.

이 원칙은 마치 예상되는 의존 관계를 '역전'하는 것처럼 보일 수 있기 때문에 복잡하다(그래서 이러한 이름이 붙었다). 실제로는, 개별 지휘체가 올바른 구현의 추상 자료형이 사용되었는지도 확실시 해야 함을 뜻한다(위의 예시에서 _무언가_ 가 여전히 메타데이터를 읽는 추상 구성 요소에 HTTP 파일 다운로더와 HTML 메타 태그 리더기를 제공해야 한다). 이것은 [제어 반전](#todo)이나 [의존성 주입](#todo)과 같은 패턴으로 이어진다.

<br>

참고 :

- [객체지향 프로그래밍](#todo)
- [솔리드](#solid)

- [제어 반전](#todo)
- [의존성 주입](#todo)

<br>
