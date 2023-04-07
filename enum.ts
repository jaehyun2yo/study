// 숫자형 이넘

enum direction {
  up = 1,
  a,
  b,
  c,
}

console.log(direction.a);

enum Reverse {
  A,
}

let a = Reverse.A;
let keyName = Reverse[a];

// 이넘타입의 호환

enum Status {
  Ready,
  Waiting,
}
enum Name {
  jaehyun,
  gyujin,
  jinho,
}

let s = Status.Ready;
// s = Name.Green; // Error
