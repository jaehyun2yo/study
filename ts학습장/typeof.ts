// 타입스크립트의 typeof 에 대해서 


// 1. typeof 연산자

/* 
typeof : [객체 데이터]를 [객체 타입]으로 변환시켜주는 연산자 

객체에 쓰인 타입구조를 가져와 독립된 타입으로 만들고싶을때 사용한다.
함수, 클래스도 가능 다만 클래스는 클래스 자체가 객체타입이 될수있으므로 typeof 를 안붙여도 가능 

*/

// 1. 예제코드 
const obj = {
    one: 1,
    two: 2,
    three: 3
}

type num = typeof obj;

// 2. 함수 예제 코드 
function obj2(num: number, str: string): string {
    return num.toString();
}

type function_Type = typeof obj2

// 3. 클래스 예제 코드 
class Classes {
  constructor(public name: string, public age: number) {}
}

type Class_Type = Classes;

const cc: Class_Type = {
  name: "임꺾정",
  age: 18888,
};

