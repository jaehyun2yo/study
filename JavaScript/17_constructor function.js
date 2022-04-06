// ##생성자 함수를 통해 객체 생성
// Object 생성자 함수

// 생성자 함수를 통해 빈객체 생성
const person = new Object();
// 빈객체에 프로퍼티들을 동적으로 추가
person.name = "jaehyun";
person.sayHello = function () {
  console.log(`Hi My name is ${this.name}`);
};

// String 생성자 함수에 의한 객체 생성
const strObj = new String("lee");
console.log(typeof sstrObj); // object
console.log(strObj); // String{"lee"}

// Number 생성자 함수에 의한 객체 생성
const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj); // Number{123}

// boolObj 생성자 함수에 의한 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj); // Boolean{true}

// Function 생성자 함수에 의한 객체 생성
const func = new Function("x", "return x * x");
console.log(typeof func); // Function
console.log(func); // f anonymous{x}

// Array 생성자 함수에 의한 객체 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr); // object
console.log(arr); // [1,2,3]

// RegExp 생성자 함수에 의한 객체 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // object
console.log(regExp); // /ab+c/i

// Date 생성자 함수에 의한 객체 생성
const date = new Date();
console.log(typeof date); // object
console.log(date); // -----시간출력됨

//--------------------------------------------------------------------

//## 객체 리터럴로 객체 생성하는 방식의 문제점
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};
const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};

//--------------------------------------------------------------------

// ## 생성자 함수에 의한 객체 생성 방식의 장점 / 생성자 함수의 인스턴스 생성 과정 1~3
// 1. 생성자 함수를 선언한다
function Circle(radius) {
    // 생성자 함수 내부의 this 는 생성자 함수가 생성할 인스턴스를 가르킨다.
    // 2. 인스턴스 초기화 
    this.radius = radius;
    this.geteDiameter = function () {
        return 2 * this.radius;
    };
}
// 3. 인스턴스 생성 
const circle12 = new Circle(5); // 반지름인 5인 circle 객체를 생성 
const circle13 = new Circle(10); // 반지름인 10인 circle 객체를 생성 

console.log(circle12.geteDiameter()) // 10
console.log(circle13.geteDiameter()) // 20

//--------------------------------------------------------------------

//## 명시적으로 원시값 또는 객체를 반환하는 경우 

function Circle(radius) {
  // 생성자 함수 내부의 this 는 생성자 함수가 생성할 인스턴스를 가르킨다.
  // 2. 인스턴스 초기화
  this.radius = radius;
  this.geteDiameter = function () {
    return 2 * this.radius;
  };
  // 명시적으로 객체 반환 -> this 값이 반환되지못하고 명시한 객체가 반환됨.
    return {};
    // 또는 명시적으로 원시값 반환 -> 원시값은 무시되고 암묵적으로 this 가 반환됨.
    return 100;
}
// 3. 인스턴스 생성
const circle12 = new Circle(5); 
console.log(circle12)
// 명시적으로 객체 반환했을시  -> {}
// 명시적으로 원시값을 넣었을시 -> Circle {radius : 1 , getDiameter: f}

//--------------------------------------------------------------------

// ## 내부메서드를 이용해 함수호출
function foof() {
};
//일반적인 함수로서 호출 : [[Call]]이 호출된다.
foo(); 
// 생성자 함수로서 호출 :  [[Construct]] 가 호출된다.
new foo();

// constructor 와 non-constructor 구분

//constructor 
// 일반 함수 정의 : 선언문, 표현식 
function foo() { }
const bar = function () { };
//프로퍼티 x 의 값으로 할당된 것은 일반 함수로 정의된 함수이다 -> 메서드로 인정하지않음
const baz = {
    x : function () {}
}

//일반 함수로 정의된 함수만이 constructor 이다.
new foo(); // foo {}
new bar(); // bar {}
new baz.x(); // x {}

//non-constructor
//화살표 함수 
const arrow = () => { };
new arrow(); // TypeError 
//메서드 정의 ES6이후 축약표현만 메서드로 인정함
const obj = {
    x() { }
};
new obj.x(); // TypeError

//--------------------------------------------------------------------

//## new 연산자 일반함수 > new 연산자를 사용해 호출 
// 일반함수 
function add(x, y) {
    return x + y;
}
// 일반함수를 new 연산자와 함께 호출 
let inst = new add();
// 함수 객체가 반환되지 않아 반환문이 무시되고 , 빈객체가 생성되 반환된다
consone.log(inst); //  {}

//객체를 반환하는 일반 함수 
function createUser(name, role) {
    return { name, role };
}
//## 일반 함수를 new 연산자와 함께 호출
inst = new createUser('lee', 'admin');
// 함수가 생성된 객체를 반환한다.
console.log(inst); // {name: "lee", role:"admin"}

// new 연산자 없이 생성자 함수를 호출 
function Circle(radius) {
    this.radius = radius;
    this.geteDiameter = function () {
        return 2 * this.radius;
    };
}
// new 연산자 없이 생성자 함수를 호출하면 일반 함수로서 호출된다.
const circle = Circle(5); 
console.log(circle) // undefined

// 일반 함수 내부의 this 는 전역 객체 window 를 가르킨다.
console.log(radius); //5
console.log(getDiameter()) //10;

circle.getDiameter(); // TypeError


//--------------------------------------------------------------------

// ## new.target 을 사용하는 방법 
// 생성자 함수 
function Circle(radius) {
    // 이함수가 new 연산자와 함께 호출되지 않았다면 new.target 은 undefined이다.
    // 즉 false 기 때문에 해당 if 문이 실행된다.
    if (!new.target) {
        // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}
// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);

//--------------------------------------------------------------------
// ## 스코프 세이프 생성자 패턴 Scope-Safe Constructor Pattern
function Circle(radius) {
  // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에 빈 객체를 생성하고 
  // this에 바인딩 한다. 이때 this 와 Circle 은 프로토타입에 의해 연결된다.
  // new 연산자와 함께 호출되지않는다면 this 는 전역객체인 window를 가르키게되고 
  // this 와 Circle은 프로토타입에 의해 연결되지않는다 이점을 이용해 사용한다.
  if (!(this instanceof Circle)) {
    // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
    return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
// new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다.
const circle = Circle(5);

