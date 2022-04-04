// 일부 내부 슬롯 메서드한해서 간접적으로 접근 하는 방법.
const { prototype } = require("events");

const o = {};
// o.[[prototype]] // SyntaxError
console.log(o.__proto__); // object.prototype

// 내부슬롯인 프로퍼티 어트리뷰트를 간접적으로 확인하는 메소드 이용 해보기
const person = {
  name: "jaehyun",
};
person.age = 20;
// 객체 참조명 , 프로퍼티 키 값으로 구문작성

console.log(Object.getOwnPropertyDescriptor(person, "name"));

/* 프로퍼티 디스크립터 객체를 반환한다. 
{
  value: 'jaehyun', 프로퍼티 값
	  writable: true, 값의 갱신 가능 여부 
  enumerable: true, 열거 가능 여부
  configurable: true 재정의 가능 여부 
}
*/

console.log(Object.getOwnPropertyDescriptor(person));
// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.

// get/set 접근자 프로퍼티

const person = {
  firstname: "jaehyun",
  lastname: "kim",
  //getter 함수
  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  },
  //setter 함수
  set fullName(name) {
    // 배열 디스트럭처링 할당
    [this.firstname, this.lastname] = name.split(" ");
  },
};

console.log(person.firstname + " " + person.lastname); // jaehyun kim
// 접근자 프로퍼티를 통한 값의 저장
// 접근자 프로퍼티 fullname 에 값을 저장하면 setter 함수가 호출된다.
person.fullname = "Heegun Lee";
console.log(person); // {firstname : "Heegun" , lastname: "Lee"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullname 에 접근하면 getter 함수가 호출된다.
console.log(person.fullName); // Heegun Lee

//firstname 은 데이터 프로퍼티 이다.
let descriptor = Object.getOwnPropertyDescriptor(person, "firstname");
console.log(descriptor);
// {value : "Heegun", writable: true, enumerable: true, configurable : true}

//fullname 은 접근자 프로퍼티 이다.
descriptor = Object.getOwnPropertyDescriptor(person, "fullname");
console.log(descriptor);
// {get : f, set : f, enumerable: true, configurable: true}

const person = {};

// 데이터 프로퍼티 정의
// Object.defineProperty 메서드는 한번에 하나의 프로퍼티만 정의할수있다.
Object.defineProperty(person, "firstname", {
  value: "jaehyun",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, "lastname", {
  value: "kim",
});
// 디스크립터 객체의 프로퍼티를 누락시키면 value , get, set = undefined,
//          writable , configurable, enumerable   = false 가 기본값이다.

// Object.deineProperties 메서드는 여러개의 프로퍼티를 한 번에 정의할 수 있다.
Object.defineProperties(person, {
  // 데이터 프로퍼티
  firstname: {
    value: "jaehyun",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastnaem: {
    value: "kim",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  // 접근자 프로퍼티
  fullname: {
    get() {
      return `${this.firstname}${this.lastnaem}`;
    },
    set() {
      [this.firstname, this.lastnaem] = name.split(" ");
    },
    enumerable: true,
    configurable: true,
  },
});

// 객체 확장 금지
Object.preventExtensions; // 객체의 확장을 금지함  => 추가 금지 / 나머지 사용가능
Object.isExtensible; // 확장가능한 객체인지 확인하는 메서드

// 객체 밀봉
Object.seal; // 객체 밀봉 => 읽고, 쓰기만 가능 / 추가,삭제,재정의 금지
Object.isSealed; // 밀봉된 객체인지 확인하는 메서드

//객체 동결
Object.freeze; // 객체동결 => 추가,삭제,재정의,값갱신 금지 / 읽기만가능
Object.isFrozen; // 동결된 객체인지 확인하는 메서드
