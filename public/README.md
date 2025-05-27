# CSS 정리

## 1. 추천 라이브러리(팀에서 협의)

- reset.css (https://meyerweb.com/eric/tools/css/reset/)
- normalize.css (https://necolas.github.io/normalize.css/)

- 예제

```html
<link
  rel="stylesheet"
  href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
/>
```

## 2. 추천

- header.css 는 무조건 z-index: 999 이상
- header 영역이 margin 의 오류로 padding 변경

```
margin-top 의 오류라고 해서 유명합니다. (웹브라우저 문제)
이런 경우 padding-top  또는 테두리를 주어서 해결합니다.
```

- header 영역이 스크롤시 `postion:fixed 되면서 높이가 반영안됨.`

```
postion:fixed 라고 셋팅하면 높이값이 반영이 안됩니다.
강제로 main 영역의 상단에 공간으 padding-top 으로 적용 해결.
```

- 배너 슬라이드는 단방향이라서, 즉 무한루프 가 아니므로 버튼 출력이 수정 필요.

## 3. CSS 자동 정리 도구 활용

- 필수 사항은 아닙니다.
- https://h-owo-ld.tistory.com/184
- `PostCSS Sorting` 검색 및 설치

```json
"postcssSorting.config": {
    "order": [
      "custom-properties",
      "dollar-variables",
      "at-variables",
      {
        "type": "at-rule",
        "name": "extend"
      },
      {
        "type": "at-rule",
        "name": "include"
      },
      "declarations",
      {
        "type": "at-rule",
        "name": "media"
      },
      "rules"
    ],
    "properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",

      "display",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-direction",
      "flex-wrap",
      "justify-content",
      "align-items",
      "align-content",
      "order",

      "float",
      "clear",
      "box-sizing",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "margin",
      "padding",
      "overflow",
      "overflow-x",
      "overflow-y",

      "font",
      "font-family",
      "font-size",
      "font-weight",
      "line-height",
      "letter-spacing",
      "text-align",
      "text-decoration",
      "text-transform",
      "color",

      "background",
      "background-color",
      "background-image",
      "background-size",
      "background-position",
      "background-repeat",

      "border",
      "border-width",
      "border-style",
      "border-color",
      "border-radius",

      "box-shadow",
      "opacity",
      "transition",
      "transform",

      "cursor",
      "visibility",
      "content"
    ],
    "unspecified-properties-position": "bottom"
  }
```

- 단축키 설정하기 : 설정 > Keyvoard Shortcuts 선택
- 검색어로 `PostCSS Sorting Run` 선택 : Shift + Alt + P

## 4. 반응형 작업

### 4.1. 필수 체크 사항

- 아래 구문이 없으면 화면 체크를 못해서 반응형 곤란

```html
<meta name="viewport" content="width=device, initial-scale=1.0" />
```

- 포토샵 또는 Figma 로 디자인 제공되어집(PC, 타블렛, 모바일)
- 가능하면 큰 화면에서 모두 배치하고, 점점 줄여가면서 배치하기를 구너장
- 필요하면 작업하면서 계속 @media 를 추가해 갑니다.

```css
/* 최대 크기 */
@media all and (max-width: 1280px) {
}
@media all and (max-width: 1024px) {
}
@media all and (max-width: 960px) {
}
@media all and (max-width: 760px) {
}
@media all and (max-width: 540px) {
}
```

### 4.2. 작업시 참조

- `웹브라우저 F12` 를 활용한다.
- `Dock 위치를 조절`하거나

### 4.3. css 작업

- header 영역 css 작업
- header 와 반응형 header를 분리해서 만들면 편하다.

## 5. 자연스러운 반응형 계산법

(ex)

- PC 디자인 영역 너비가 1280px이다.
- 특정 영역의 너비가 650px, 높이가 400px 이다.
- 자연스러운 너비, 높이를 적용한다면?

-정리

- max-width: 650px, max-height: 400px
- `영역너비(650px)/ 디자인 전체 영역 너비 (1280px) * 100 = 결과 vw`
- `영역너비(400px)/ 디자인 전체 영역 너비 (1280px) * 100 = 결과 vw`

```html
<div class="box_wrap">
  <div class="box">내용</div>
</div>
```

```css
.box_wrap {
  position: relative;
  width: 1280px;
  background-color: hotpink;
  margin: 0 auto;
}
.box {
  position: relative;
  max-width: 650px;
  width: 50.78vw;
  max-height: 400px;
  height: 31.25vw;
  background-color: yellowgreen;
}
```

## 6.

```css
.popup {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999999999999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.popup_content {
  position: relative;
  width: 50.78vw;
  max-width: 650px;
  height: 31.25vw;
  max-height: 400px;
  margin: 0 auto;
  background-color: yellowgreen;
}
```
