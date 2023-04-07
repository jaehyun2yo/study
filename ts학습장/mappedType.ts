// 맵드타입 
// 기존에 정의되있는 타입을 -> 새로운 타입으로 변환해주는 문법
// 자바스크립트의 map() 메소드와 유사함



// 예제코드 
interface Obj {
   prop1: string;
   prop2: string;
}

type ChangeType<T> = { 
   [K in keyof T]: number;
};
// 흡사 JS 의 for in 문법과 유사하다.
type Result = ChangeType<Obj>;
/*
{ 
   prop1: number; 
   prop2: number; 
}
*/


// 맵드 타입 문법
// 맵드 타입으로 객체를 속성을 순회해서 속성타입을 다른타입으로 바꿔주는 역할을한다.
{ [ P in K ] : T}
{ [ P in K ] ? : T}
{ readonly [ P in K ] : T}
{ readonly[P in K] ? : T }


//맵드타입 과 제네릭을 사용한 예시 코드 

interface Person3 {
    name: string;
    age: number;
}

type ReadOnly<T> = {
   readonly [P in keyof T]: T[P];
};

type ParTial<T> = {
   [P in keyof T]?: T[P];
};

type PersonPartial = ParTial<Person3>;
type ReadOnlyPerson = ReadOnly<Person3>;

