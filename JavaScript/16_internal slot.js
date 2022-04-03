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
