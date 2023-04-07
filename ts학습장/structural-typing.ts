interface Avengers {
  name: string;
}

let hero: Avengers;
// 타입스크립트가 추론한 y의 타입은 { name: string; location: string; } 입니다.
let capt = { name: "Captain", location: "Pangyo" };
hero = capt;


function assemble(a: Avengers) {
  console.log("어벤져스 모여라", a.name, );
  console.log("어벤져스 모여라", a.location, );
}
// 위에서 정의한 capt 변수. 타입은 { name: string; location: string; }
assemble(capt);