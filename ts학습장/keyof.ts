
// 1. keyof 연산자

/* 
keyof : 객체 형태의 타입을 따로 속성만 뽑아 유니온타입으로 만들어주는 연산자

typeof 와 keyof 를 조합해서 사용하면 객체의 키값이나 값을 상수 타입으로 사용할수있다.


*/

// 1. 예제코드 

type TYPE = {
  name: string;
  age: number;
  married: boolean;
};

type Union = keyof TYPE;
// type Union = name | age | married

const one: Union = "name";
const two: Union = "age";
const three: Union = "married";

// 2. obj -> 키값을 따로 뽑아 상수로 만들고싶을때 

const obj3 = { red: "apple", yellow: "banana", green: "cucumber" };

type Color = keyof typeof obj3

// 3. obj -> 값을 뽑아 상수로 만들고싶을때 

type Key = typeof obj3[keyof typeof obj3]
let ob2: Key = "apple";
let ob3: Key = "banana";
let ob4: Key = "cucumber";

