// html 의  document 가 모두 로드 되면 실행하기
// html 의  이미지, 파일 등등 리소스가 준비되면 실행
// 표준입니다.
// document.onloand 와 같다
window.addEventListener("load", function () {
  const wrap = document.querySelector(".wrap");
  console.log(wrap);
});
// addEventListener 를 사용해서 덮어쓰기가 아닌 합치기
window.addEventListener("load", function () {
  console.log("안녕");
});
// DOMContentLoaded 무조건 첫번째로 실행
// html 만 로드 완료를 체크합니다.
window.addEventListener("DOMContentLoaded", function () {
  console.log("로딩완료");
});
