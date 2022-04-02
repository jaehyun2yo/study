// var 의 중복선언

var x = 1;
var y = 1;
// 같은 스코프 내에 중복 선언을 허용한다.
// 초기화문이 있는 변수선언문은 var 키워드가 없는 것처럼 동작한다.


var x = 100;
// 초기화 문이 없는 변수 선언문은 무시된다.
var y;
console.log(x); // 100
console.log(y); //1

// 함수 레벨 스코프 
var x = 1;
if (true) {
    var x = 10;
}
console.log(x); // 10

var i = 10;
// for 문에서 선언한 i 는 전역변수이다. 이미선언한 변수가있으므로 중복선언된다.
for (var i = 0; i < 5; i++) {
    console.loe(i);
}
console.log(i); // 5

// 변수 호이스팅
console.log(foo); // undefined
foo = 123; // 변수 에 값 할당
console.log(foo); // 123
var foo; // 변수 선언은 런타임이전에 자바스크립트엔진에의해 암묵적으로 실행된다.

// 전역객체와 let 

//var의 전역변수는 모두 전역객체 window의 프로퍼티가 된다.
var x = 1;
y = 2;
function foo() { }

console.log(window.x); // 1
console.log(window.y); // 2
console.log(window.foo); // foo() {}
console.log(x); // 1
console.log(y); // 2
console.log(foo); // foo() {}

// 전역변수로 선언한 let 은 전역객체의 프로퍼티가 아니다
let x = 1;
console.log(window.x); // undefined
console.log(x); // 1


//
