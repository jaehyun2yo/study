// 함수 레벨 스코프

var x = 10;
if (true) {
  var x = 1;
}

console.log(x);

var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

// 렉시컬 스코프

var x = 1;
function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo();
bar();

//전역 변수 억제방법중 즉시 실행함수 이용

(function () {
  var foo = 10;

}());

// 전역 변수 억제방법중 네임스페이스 객체를 사용해서 하는방법

ver MYAPP = {} // 전역 스페이스 객체 

MYAPP.person = {
  name: "Lee",
  address: "Seoul",
};

console.log(MYAPP.person.name); // lee


// 모듈화 

var Counter = (function () {
  var num = 0;

  return {
    incresase() {
      return ++num;
    },
    decrease() {
      return --num;
    }
  };
});
// private 변수는 외부로노출이 되지않음
console.log(Counter.num) // undefined

console.log(Counter.incresase()) // 1
console.log(Counter.incresase()) // 2
console.log(Counter.decrease()) // 1
console.log(Counter.decrease()) // 0

// 모듈화한 메소드를 통해서 Counter 안에 변수를 조작할수있다.

//ES6 모듈

  < script type = "module" src = "lib.mjs" ></ >

    