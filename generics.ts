function logText<T>(text: T): T {
  return text;
}

let log = logText(12334);
let log2 = logText("12334");
console.log(log);
console.log(log2);

// 제네릭의 인터페이스

interface GenericLogText {
  <T>(text: T): T;
}

function logText2<T>(text: T): T {
  return text;
}

let myString: GenericLogText = logText2;
let myString2: <T>(text: T) => T = logText2;


// 제네릭 의 호환 

interface Empty<T> {
}
let x: Empty<number>;
let y: Empty<string>;

x = y;  // OK, because y matches structure of x

console.log(x)