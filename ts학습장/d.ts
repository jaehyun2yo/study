// 타입스크립트의 선언 파일 작성

// 전역 변수
declare const globalUser = "jaehyun";

// 전역 함수
declare namespace Myskill {
  function greet(person: string): string;
  let name: string;
}

Myskill.greet("재현");
Myskill.name = "누구?";


