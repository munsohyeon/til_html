# 기본 퍼블리싱

## 1. Node.js 설치

- [설치](https://nodejs.org)
  - LTS 버전은 안정된 버전
  - 긍정적인 버튼을 선택해서 기본설치 하면 됨.
    `추후 NVM (Node Version Manager)로 버전 관리`
- Node.js 는 pc 환경에서 JS를 실행하도록 해줌
- Node.js는 server, DBm Clinent 프로그램 제작 지원

## 2. 기본 VSCode 설치

- [설치](http://code.visulastudio.com)

### 2.1 퍼블리싱 추천 Extension (플러그인)

```
- Auto Colse Tag
- Auto Rename Tag
- Bracket Pari Clor DLW
- CSS Peak
- HTML CSS Support
- HTML to CSS autocompletion
- Image preview
- indent-rainbow
- Korean Language Pack for... (VSCode 재실행 후 확인)
- Live Server
- Markdown Preview Enhanced
- Material Icon Theme
- Night Owl (테마)
- Prettier - Code formatter (별도 참조)
```

### 2.2. Prettier 셋팅

- 파일 저장시 자동 정렬

```
- 관리 버튼 클릭 > 설정메뉴 선택 > Format On Save 검색
- Editor:Format On Save 체크 버튼 확인
```

- 기본 문서포맷도구 설정

```
- 관리 버튼 클릭 > 설정메뉴 선택 > Default Formatter 검색
- Prettier - Code formatte 로 선택
```

### 2.3. Live Server 셋팅(일부 실행 오류 발견됨)

- 윈도우 검색 > `시스템 환경 변수 편집` 입력 > 환경변수...
- Adminstrator에 대한 사용자 변수
 - Path 내용 추가 : `C:\Windows\System32`
- 시스템 변수
  - Path 내용 추가 : `C:\Windows\System32`

# WAS(Web Appication service)

## 1. 기본 추천 폴더 구조

- `프로젝트명/puvlic 폴더` 생성
- `프로젝트명/puvlic/images 폴더` 생성

```
jpg, png(추천), gif, svg(추천), webp(추천:용량최소)등
```

- `프로젝트명/puvlic/css 폴더` 생성

```
common.css(공통적용), header.css, footer.css 등 영역별로 생성
```

- `프로젝트명/puvlic/css 폴더` 생성

```

```

- `프로젝트명/puvlic/js 폴더` 생성

```
각 종류의 라이브러리.js, header.js, footer.js 등 영역별로 생성
```

- `프로젝트명/puvlic/assets 폴더` 생성

```
프로젝트 관련 문서(회의록, 요구사항명세서, 계약서 등), 디자인 및 멀티미디어 리소스 등
```

## 2. 홈 페이지 (index. html)

- 파일명 준수 (소문자 기준)
- `프로젝트명/puvlic/index.html 파일` 생성
- 키보드 단축키 활용 : `!Tap`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

### 2.1. 기본 수정 사항

- 문서 기본 언어 수정(ko)

```html
<html lang="en">
  ...
  <html lang="ko"></html>
</html>
```

- 문서 기본 타이틀 수정

```html
<title>서비스명</title>
```

### 2.2 boby 와 내용영역 구문 추천합니다.

```html
<body>
  <!-- full layout -->
  <div>
    <!-- top -->
    <header></header>
    <!-- main -->
    <main></main>
    <!-- bottom -->
    <footer></footer>
  </div>
</body>
```

### 2.3 기본적으로 header, main, footer 를 구분하기를 권장합니다.

- 시멘틱태그 : tag의 단어가 내용을 설명하는 역할을 말함.

### 2.4 위 구조 기본 작성 후 각 내용을 div 태그로 분할한다.

- 인터파크 사이트의 경우

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>나의 til</title>
  </head>
  <body>
    <!-- Full layout -->
    <div>
      <!-- Top -->
      <div>
        <header>
          <div></div>
        </header>
      </div>
      <!-- Main -->
      <main>
        <div></div>
      </main>
      <div>
        <!-- Event -->
        <div></div>
        <!-- Tour -->
        <div></div>
        <!-- Trip -->
        <div></div>
        <!-- Ticket -->
        <div></div>
        <!-- Live -->
        <div></div>
      </div>
      <!-- Bottom -->
      <footer>
        <div></div>
      </footer>
    </div>
  </body>
</html>
```

# Git (버전 관리 도구)

## 1. Git 관리

- 내 PC에서 코딩 버전을 관리하는 도구 (작업)
- [설치](https://git-scm.com/)

```
Other Git for Windows downloads
Standalone Installer
*64-bit Git for Windows Setup*
```

### 1.1 설치 확인 방법

-`윈도우 도구 + R 키 입력` > `cmd 로 터미널` 실행

```bash
git --version
```

### 1.2 VSCode 에서 Git 관리 하기

- 터미널 입력창을 Git Bash 로 셋팅해서 관리
<!--  -->
- Git Bash 를 선택한 이유는 Linux, Mac 운영체제의 터미널 사용

```
관리도구 버튼 > Settings > 입력창: default:windows > Git Bash 선택
```

- 설정호가인

```
 VSCode 주메뉴 > Terminal > New Terminal 선택 후 > Bash 확인
```

```bash
git -v
```

### 1.3. 기본 저장소(Repository) 이름 설정하기

- 옛날에는 브랜치명이 `master 라고 생성`이 되었습니다. (노예라는 어감)
- 현대에는 브랜치명이 `main 라고 생성`해야 합니다.
  <!-- bash는 terminal에 작성한다는 의미 -->
  <!-- terminal 에서 붙이기는 마우스 오른쪽 키 -->

```bash
git config --global init.defaultBranch main
```

### 1.4. Enter 키에 의한 줄내림 통일하기(Linux, Mac, Window)

```bash
git config --global core.autocrlf true
```

### 1.5. git 명령의 추가 내용 작성을 VSCode 로 하도록 설정

```bash
git config --global core.editor "code --wait"
```

### 1.6 사용자 아이디 저장

```bash
git config --global user.name "msh1787"
git config --global user.name "msh1787@gmail.com"
```

<!-- terminal에 clear(타이핑)+enter 깔꼬롬-->

## 2. Git 명령어 실행하기

- Git 에 프로젝트 관리 시작하기
<!-- 앞으로 Git에서 version 관리 하는 것 -->

```bash
git init
```

- Git 의 현재 상태 알아내기

```bash
git status
```

- Git 에서 파일 및 폴더 통째로 추적하기 설정

```bash
git add .
```

- Git 작업내역 메모하기

```bash
git commit
```

- 새로운 작업단위, 즉 브랜치 생성하기

```bash
git branch header
git switch header
```

- 월요일 할거지롱.

## 3. GitHub 관리

- Web에서 나의 계정에 코딩 버전을 관리하는 도구 (업로드)
