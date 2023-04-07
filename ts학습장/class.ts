// 클래스 타입 호환시 주의사항 

class Hulk {
  handSize: number;
  constructor(name: string, numHand: number) {}
}

class Captain {
  handSize: number;
  constructor(numHand: number) {}
}

let a: Hulk;
let s: Captain;

a = s; // OK
s = a; // OK
