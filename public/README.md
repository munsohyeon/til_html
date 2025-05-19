# JS 적용

- JS 는 2가지로
- Node와 web(웹)

## JS 코딩 좋은 위치

- 가장 좋은 자리는 html 이 완료되는 시점

```js
// html 의  document 가 모두 로드 되면 실행하기
// html 의  이미지, 파일 등등 리소스가 준비되면 실행
// 표준입니다.
window.addEventListener("load", function () {});

// html 만 로드 완료를 체크합니다.
window.addEventListener("DOMContentLoaded", function () {});
```

## 요소 (Element) 선택법

```js
// DOM 만 완성화면 됩니다. 기준으로 코드를 진행함.
window.addEventListener("DOMContentLoaded", function () {
  // 우리가 원하는 요소(Element) 를 선택하는 법?
  // - Tag 를 선택하고 싶어요. (Tag Element)
  this.document.getElementsByTagName("header");
  this.document.getElementsByClassName("header");
  // - CSS 선택자를 이용해서 선택하고 싶어요. (Css Selector)
  this.document.querySelector(".header"); // 이거 위주로 사용
  this.document.querySelectorAll(".header");
  // - ID 선택자를 이용해서 선택하고 싶어요. (ID)
  this.document.getElementById("header");
});
```

- 예제

```js
// DOM 만 완성화면 됩니다. 기준으로 코드를 진행함.
window.addEventListener("DOMContentLoaded", function () {
  const header = this.document.querySelector(".header");
  console.log(header);
  const logo = this.document.querySelector(".logo");
  console.log(logo);
  const search = this.document.querySelector(".search");
  console.log(search);
  const member = this.document.querySelector(".header_top_right");
  console.log(member);
  const eventMenu = this.document.querySelector(".header_bottom_eventmenu");
  console.log(eventMenu);
});
```

## 다양한 이벤트의 이해

- 웹브라우저가 체크하는 변화를 `이벤트`라고 한다.
- 표준 형태

### 1. 채그에 직접 이벤트 작성하기

```js
<header class="header" onclick="alert('안녕')">
```

### 2. 요소에 속성으로 이벤트 작성하기

### 3. 요소에 이벤트 핸들러로 이벤트 작성하기
