# CSS

- html 을 꾸며주기
- display 중요함.
- position 중요함.

## 1.css 작성법 3가지

- 작성법 3가지 중에 누가 최종적으로 적용되는가? (누가 힘이 쎈가?)

## 1.1. inline 방식

- html tag에 직접 작성해주는 방식

## 1.2. link 방식

- file로 작성해서 link 하는 방식 (경로/파일명.css)
- css 폴더/common.css 파일을 생성

## 1.3. @import 방식

-css 파일에서 또다른 css파일을 참조하는 방식

## 2. 모든 태그에 초기화 진행하기

- 웹브라우저 마다 기본적인 css는 적용이 되어있음.
- 그래서, 웹브라우저 마다 모양이 다르게 보인다.
- 아래 내용은 기본 css 값으로 추천합니다.

```css
@charset "utf-8";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* outlind-style: none; */
}
```
## 3. 선택하는 법 (selector)

## 1. 태그 선택법

```css
태그 {

}
```

```css
@charset "utf-8";
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    /* outlind-style: none; */

}

/* 태그 선택 : 추천하는 각 태그별 기본값 */
a {
    text-decoration: none;
    /* 디자인 보고 수정 */
    color: #000000;
    
}
ul {
    list-style: none;
    padding: 10px;
}
html {
    width: 100%;
    /* 디자인 보고 수정 */
    font-size: 12px;
}
body {
    width: 100%;
    font-size: 1rem;
    /* 디자인 보고 수정 */
    color: #000;
    /* 글꼴이 필요로 함 */
}


```

## 2. 클래스 선택법
```css
태그 .클래스명 {

}
```

```css
.클래스명 {
    
}
```
