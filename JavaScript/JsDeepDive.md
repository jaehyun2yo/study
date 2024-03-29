# 📍 22장 this

# this란?

메서드를 정의하는 시점 이 객체를 생성하는 시점보다 먼저오게되 자신을 호출할 객체의 값을 this 로 표현한다.

즉, 자신이 속한 객체 / 자신이 생설할 인스턴스를 가르키는 참조변수 이다.

# this 바인딩

this바인딩은 함수가 호출되는 방식에따라 동적으로 결정된다.

- 일반함수 호출 → 전역객체
- 전역 호출 → 전역객체
- 메서드내부 호출→ this를 호출한 객체
- 생성자 함수 호출→ 생성자함수가 생성할 인스턴스
- Function.prototype.apply/call/bind 메서드에 의한 간접 호출

# this 명시적 변경

1. `Function.prototype.apply(thisArg[, argsArray])thisArg`로 변경, 호출할 함수에 전달할 인수를 두 번째 매개변수에 배열로 만들어서 넣기 ( 함수호출 )
2. `Function.prototype.call(thisArg[, arg1, arg2, ...])thisArg`로 변경, 호출할 함수에 전달할 인수를 두 번째 매개변수부터 넣기 ( 함수호출 )
3. `Function.prototype.bind(thisArg)this`값을 `thisArg`로 변경한 함수를 리턴

```jsx
// arguments가 유사배열이라 배열메서드 사용이 불가능해서 배열메서드를 빌려쓰기위한 코드

// apply 배열로 전달
function sum() {
  return Array.prototype.reduce.apply(arguments, [(p, c) => p + c, 0]);
}
console.log(sum(1, 2, 3, 4)); // 10

// call 하나씩 인수로 전달
function sum() {
  return Array.prototype.reduce.call(arguments, (p, c) => p + c, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// bind 새로운 함수 반환
function sum() {
  return Array.prototype.reduce.bind(arguments, (p, c) => p + c, 0);
}
console.log(sum(1, 2, 3, 4)()); // 10
```

# 📍21장 빌트인 객체

# 자바스크립트 객체 분류

- 표준 빌트인 객체
- 호스트 객체
- 사용자 정의 객체

# 표준 빌트인 객체

Math, Relect, JSON 을 제외한 표준 빌트인 객체는 생성자 함수 객체다 .

생성자 함수 객체는 프로토타입 메서드 와 정적 메서드를 제공

아닌 객체는 정적 메서드만 제공

## 래퍼객체

문자열,숫자, 불리언 값에 대해 객체처럼( 마침표 표기법) 접근하게되면 생성되는 임시객체

문자열,숫자,불리언,심볼 이외값들은 래퍼객체 생성을 안함 / 생성할시 에러발생

### 래퍼객체의 동작방식

1.  마침표표기법으로 인해 래퍼 객체 생성
2.  내부슬롯 `[[~Data]]` 에 데이터값을 저장
3.  객체 처리가 종료되면 내부슬롯에서 원시값 되돌려주고 가비지 셀렉션이됨

# 전역객체

코드가 실행 되기 이전에 자바스크립트 엔진에 의해 생성되는 최상위 객체

## 전역객체의 특징

1. 개발자가 의도적으로 생성할수없다. 생성자 함수 x
2. 프로퍼티를 참조시 window 를 생략할수있다.
3. 모든 표준 빌트인 객체를 프로퍼티로 가지고있다.
4. var 키워드로 선언한 전역변수 , 암묵적 전역, 전역함수 가 전역객체의 프로퍼티가 된다.

<aside>
💡 let, const 는 해당키워드로  전역변수를 선언해도 보이지 않는 블록 내에 존재하게된다.

</aside>

# 빌트인 전역 프로퍼티

- Infinity - 무한대인 숫자
- NaN - 숫자가 아님
- undefined

# 빌트인 전역 함수

- eval - 인수로 문자열을 받고 문자열이 표현식이라면 런타임에 평가하여 값을 생성 아니라면 런타임에 실행함
  - 실행할때 기존 스코프를 런타임에 동적으로 수정한다 다만 strict mode 에서는 자체 스코프를 갖는다 ( let, const 문자열이 있다면 strict mode 와 동일하게 동작)
  - 보안이 취약하고 처리속도가 느려 일반적으로는 사용안함
- isFinite - 유한수면 true 무한수면 false를 반환 (NaN → F)
- isNaN - NaN 인지 검사하고 불리언값으로 반환
- parseFloat - 실수로 해석해서 반환한다.
- parseInt - 정수로 해석해서 반환한다.
- encodeURI / decodeURI - 완전한 URI 를 이스케이프 처리를 위해 인코딩 / 인코딩된 URI를 이스케이프 처리이전으로 디코딩
    <aside>
    💡 이스케이프란 ? 
    네트워크 정보 공유시 어떤 시스템에서도 읽을수있는 아스키 문자 셋으로 변환하는것
    
    </aside>

- encodeURIComponent/ decodeURIComponent - URI 구성요소를 인수로 받아 인코딩한다 / URI 구성요소를 디코딩한다.
-

# 📍20장 use strict

# use strict 란?

자바스크립트의 문법을 좀더 엄격하게 적용해 오류 발생시킬수있는 코드들을 명시적으로 에러를 발생시키는것

### 사용법

코드 전문에 `‘use strict’;` 를 추가 하거나 함수몸체의 선두에 추가한다.

### 주의사항

- 전역에 적용하지말기
- 함수 단위로 적용하지말기

외부서브파티 앱에서 non-strict mode 일수있기때문에 즉시실행함수로 감싸 사용하는것이 바람직함

## strict mode 가 발생시키는 에러

1. 선언하지 않는 변수 참조시 에러
2. delete 연산자로 변수 , 함수 , 매개변수 삭제시 에러
3. 매개 변수의 이름을 중복사용시 에러
4. with 문 사용시 에러

## strict mode 적용에 의한 변화

1. 일반 함수 내부에서는 this 사용시 undefined 를반환
2. 매개변수에 전달된 인수를 재할당해도 반영안됨

# 2022-04-08~09 까지 휴가입니다.

# 📍19장 프로토타입

프로토 타입을알기전에 객체지향 프로그래밍에대해서 알아보자

자바스크립트는 객체 기반의 프로그래밍 언어이며 원시값을 제외한 나머지값들이 모두 객체이다.

객체지향언어는 특징이나 성질을 나타내는 속성을 통해 여러개의 값을 하나의 단위로 구성한 객체로 이루어져있고 그 객체의 상태 , 동작을 하나의 논리적인 단위로 묶어서 생각한다. 각 객체는 독립적인 부품으로 볼수있지만 다른 객체와의 관계성을 가질수있다.

## 상속이란?

상속은 객체 지향 프로그래밍 핵심 개념으로 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아서 그래도 사용하는 것을 말한다.

자바스크립트는 프로토타입 을 기반으로 상속을 구현하여 불필요한 중복을 제거한다 그방법으로 기존의 코드를 적극 재사용하게되는데 이는 개발비용을 현저히 줄일수있는 잠재력이다.

```jsx
// 프로토타입 을 기반으로 상속 받기

function Circle(radius) {
  this.radius = radius;
}
// 생성자 함수에 prototype 프로퍼티에 해당 내용들이 들어가게된다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩 되어있다.
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};
//인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log(circle1.getArea === circle2.getArea); // true

console.log(circle1.getArea()); // 3.14..
console.log(circle2.getArea()); // 12.56..
```

위처럼 이전 생성자 함수로만 생성했을때는 불필요한 getArea 함수를 계속 생성했기에 메모리 에 낭비가 심했다

프로토타입으로 인해 불필요한 중복을 제거하고 각 인스턴스는 하나의 함수를 공유하기때문에 메모리 효율이 좋다.

# 📍18장 함수와 일급객체

다음 조건을 만족하는 객체를 일급객체라 한다.

- 무명의 리터럴로 생성할 수 있다. 즉 런타임에 생성이 가능하다.
- 변수나 자료구조( 객체, 배열 ) 에 저장할수있다.
- 함수의 매게 변수에 전달할수있다.
- 함수의 반환값으로 사용할수있다.

**자바스크립트의 함수는 일급객체이다.**

```jsx
// 1. 무명의 리터럴로 생성가능하다
// 2. 변수, 자료구조에 저장가능하다.
const incresase = function (num) {
  return ++num;
};
//3. 함수의 매개변수에 전달할 수 있다.
//4. 함수의 반환값으로 사용할수있다.
function makeCounter(aux) {
  let num = 0;
  return function () {
    num = aux(num);
    return num;
  };
}
```

함수가 일급 객체라는것은 **함수를 객체와 동일하게 사용할 수 있다는 의미**다.

객체는 값이므로 함수는 값과 동일하게 취급할 수 있다.

다만 **일반객체는 호출할수없지만 함수객체는 호출이 가능하다.**

## argument 객체

함수 객체의 arguments 객체는 **함수 호출시 전달된 인수들의 정보를 담고있는 유사 배열 객체 이다.**

함수 내부에서 지역변수처럼 사용가능하기에 외부에서 참조는 불가능하다.

```jsx
// 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지않는다
function multiply(x, y) {
  console.log(arguments);
  return x * y;
}
console.log(multiply()); // NaN
console.log(multiply(1)); // NaN
console.log(multiply(1, 2)); // 2
console.log(multiply(1, 2, 3)); // 2
```

**자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지않는다**

그렇기때문에 함수 호출시 매개변수만큼 인수를 전달하지않아도 에러가 발생하지않는다

함수를 정의할때 선언한 매개변수는 함수 몸체 내부에서 변수와 동일하게 취급 하고

함수가 호출하면 함수 몸체 내에서 암묵적으로 매개변수가 선언 되고 undefined로 초기화 된이후 인수가 할당된다. **선언된 매개변수보다 적게 인수가 할당되면 매개변수는 undefined를 유지하고 더 많이 전달될경우는 초과된 인수는 무시해버린다. 다만 초과됬다고 초과된 인수가 버려지는것은 아니다. 암묵적으로 arguments 객체의 프로퍼티로 보관된다.**

### arguments 객체의 Symbol 프로퍼티

arguments 객체를 순회 가능한 자료구조인 이터러블로 만들기 위한 프로퍼티 이다.

```jsx
// # arguments 객체의 Sysmbol 프로퍼티
function multiply(x, y) {
  //이터레이터
  const iterator = arguments[Symbol.iterator]();

  // 이터레이터의 next 메서드를 호출해서 arguments 를 순회
  console.log(iterator.next()); // {value : 1, done: false}
  console.log(iterator.next()); // {value : 2, done: false}
  console.log(iterator.next()); // {value : 3, done: false}
  console.log(iterator.next()); // {value : 4, done: false}

  return x * y;
}
multiply(1, 2, 3);
```

### length 프로퍼티

arguments 객체의 length 프로퍼티와 함수객체의 length 프로퍼티는 값이 다를 수 있기때문에 조심해야한다. **arguments 객체의 length 는 인자의 개수 를 가르키고**, **함수 객체의 length 프로퍼티는 매개변수의 개수 를 가리킨다.**

```jsx
// length 프로퍼티

function foo() {}
console.log(foo.length); // 0

function bar(x) {
  return x;
}
console.log(bar.length); // 1

function baz(x, y) {
  return x * y;
}
console.log(baz.length); // 2
```

### name 프로퍼티

함수 객체의 name 프로퍼티는 함수 이름을 나타낸다 . ES6이후로 정식표준이되어 ES5 와 동작을 달리하니 주의하자. 함수 객체를 가르키는 식별자를 값으로 갖는다

### ** proto ** 접근자 프로퍼티

모든 객체는`[[Prototype]]` 이라는 내부 슬롯을 갖는데 객체 지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다. 해당 접근자 프로퍼티는`[[Prototype]]` 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티 이다.

### prototype 프로퍼티

생성자 함수로 호출할수있는 consturctor 만이 소유하는 프로퍼티이다.

해당 프로퍼티는 함수가 객체를 생성하는 생성자 함수로 호출될때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가르키게된다.

# 📍17장 생성자 함수에 의한 객체 생성

객체 리터럴로 객체를 생성하는것이 일반적이나 생성자 함수로도 객체를 생성하는 방법이있다.

`생성자 함수`란 **new 연산자와 함께 호출하여 객체를 생성하는 함수**이다.

**생성자 함수에의해 생성된 객체**를 **`인스턴스`**라 한다.

이방법의 장단점을 알아보자

## Object 생성자 함수

`new Object()` 함수를통해 빈객체를 생성할수있고 이후에 프로퍼티를 추가하여 객체를 완성할수있다.

물론 빈객체를 생성하지않고 프로퍼티 값을 넣을수있긴하다.

```jsx
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
```

## 생성자 함수

### 객체 리터럴에 의한 객체 생성 방식의 문제점

객체 리터럴에 의한 생성방식은 직관적이고 간편하다 다만 동일한 프로퍼티를 갖는 객체를 여러개 생성해야하는 경우 매번 같은 프로퍼티를 기술해야 하기때문에 비효율적이다.

```jsx
//객체 리터럴로 객체 생성하는 방식의 문제점
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
```

위코드의 getDiameter 메서드는 완전동일하다 프로퍼티 구조가 같음에도 불구하고 같은 프로퍼티와 메서드를 기술해야되는점이 객체 리터럴이 가진 단점이다.

### 생성자 함수에 의한 객체 생성 방식의 장점

마치 객체를 생성하기위한 템플릿 처럼 생성자 함수를 사용해 프로퍼티가 구조가 동일한 객체를 여러개 간편하게 생성할수있다.

```jsx
// 생성자 함수에 의한 객체 생성 방식의 장점 / 생성자 함수의 인스턴스 생성 과정 1~3
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

console.log(circle12.geteDiameter()); // 10
console.log(circle13.geteDiameter()); // 20
```

### 생성자 함수의 인스턴스 생성 과정

위 코드의 1~3 순서대로 생성이되는데 내부코드를 보자면 this 에 프로퍼티를 추가하고 전달된 인수를 프로퍼티 초기값으로 할당해 인스턴스를 초기화 한다 이후 인스턴스를 생성하고 반환하는건 자바스크립트 엔진이 암묵적으로 처리를 하는데 **new 연산자와 함게 호출해야 자바스크립트 엔진이 인스턴스를 생성하고 초기화한후 암묵적으로 인스턴스를 반환한다.**

다만 명시적으로 객체를 반환하게되면 this 가 반환되지못하고 return 문에 명시된 객체가 반환되게된다.

또 명시적으로 원시값을 반환하려하면 원시값 반환은 무시가 되고 암묵적으로 this 가 반환된다.

이처럼 생성자 함수 내부에서 명시적으로 this 가 아닌 다른값을 반환하는것은 생성자 함수 의 기본동작을 훼손하기때문에 생성자 함수 내부에서 return 문을 반드시 생략해야한다.

```jsx
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
console.log(circle12);
// 명시적으로 객체 반환했을시  -> {}
// 명시적으로 원시값을 넣었을시 -> Circle {radius : 1 , getDiameter: f}
```

### 내부 메서드 [[Call]] 과 [[Construct]]

함수는 new 연산자를 사용해 생성자 함수로 호출하여 객체를 생성할수있다.

함수는 객체 이므로 일반 객체와 동일하게 동작할 수 있다. 내부슬롯과 내부메서드를 모두 가지고있기때문

다만 함수는 객체이지만 일반객체와는 다른점이있다. 일반객체는 호출할수없지만 함수는 호출할수있다.

일반 객체가 가지고있는 내부 슬롯과 내부 메서드는 가지고있고 + 함수로 동작하기위한 함수객체 또한 추가로 가지고있다.

```jsx
// 내부메서드를 이용해 함수호출
function foof() {}
//일반적인 함수로서 호출 : [[Call]]이 호출된다.
foo();
// 생성자 함수로서 호출 :  [[Construct]] 가 호출된다.
new foo();
```

내부 메서드 `[[Call]]` 을 갖는 함수 객체를 callabel 라고하며

내부 메서드 `[[Construct]]` 를 갖는 함수를 **constructor** 라고한다.

갖고있지않은경우는 **non-constructor** 라 하는데 모든 함수 객체가 `[[Construct]]`를 갖는것은 아니다

![https://s1.md5.ltd/image/575952b59b46bc33bdd442a91605d4c6.jpg](https://s1.md5.ltd/image/575952b59b46bc33bdd442a91605d4c6.jpg)

자바스크립트 엔진은 함수 정의를 평가하여 함수 객체를 생성할때 함수 정의 방식에 따라 이 둘을 구분한다.

- `constructor` : **일반함수 , 생성자 함수로서 호출할수있는 객체**
  - 함수 선언문 , 함수 표현식 , 클래스
- `non-constructor` : **일반 함수로서만 호출할수있는 객체**
  - 메서드(ES6 메서드 축약 표현), 화살표 함수

```jsx
// constructor 와 non-constructor 구분

//constructor
// 일반 함수 정의 : 선언문, 표현식
function foo() {}
const bar = function () {};
//프로퍼티 x 의 값으로 할당된 것은 일반 함수로 정의된 함수이다 -> 메서드로 인정하지않음
const baz = {
  x: function () {},
};

//일반 함수로 정의된 함수만이 constructor 이다.
new foo(); // foo {}
new bar(); // bar {}
new baz.x(); // x {}

//non-constructor
//화살표 함수
const arrow = () => {};
new arrow(); // TypeError
//메서드 정의 ES6이후 축약표현만 메서드로 인정함
const obj = {
  x() {},
};
new obj.x(); // TypeError
```

일반함수 를 호출할때는 `[[Call]]` 이 호출된다 이건 모든함수 객체면 구현이되있지만

생성자 함수를 호출할때는 `[[Construct]]` 이 호출되기때문에 가지고있지않은 **non-constructor 은 에러가 발생하게된다.**

## New 연산자

일반 함수와 생성자 함수에는 특별한 형식적 차이는 없다 .**따라서 생성자 함수는 일반적으로 첫 문자를 대문자로 기술하는 파스칼 케이스로 작성하여 일반 함수와 구별할수있도록 해야한다.** 다만 **new 연산자와 함께 호출하면 해당함수는 생성자 함수로 동작을 하게된다.** **함수 객체의 내부 메서드 `[[Construct]]` 이 호출하게 된다.**

단 new 연산자와 함께 호출하는 함수는 Non-constructor 가 아닌 constructor 이어야한다.

반대로 **new 연산자 없이 생성자 함수를 호출하면 일반함수 로 동작되고 함수객체 내부메서드 `[[Call]]` 이 호출된다.**

```jsx
// new 연산자 일반함수 > new 연산자를 사용해 호출
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
// 일반 함수를 new 연산자와 함께 호출
inst = new createUser("lee", "admin");
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
console.log(circle); // undefined

// 일반 함수 내부의 this 는 전역 객체 window 를 가르킨다.
console.log(radius); //5
console.log(getDiameter()); //10;

circle.getDiameter(); // TypeError
```

### new.target

생성자 함수가 new 연산자 없이 호출되는것을 방지하기 위해 파스칼 케이스를 사용한다해도 실수는 언제나 발생할수있다. ES6 는 이런 위험을 제거하기위해 [`new.target`](http://new.target)을 지원한다.

# 📍16장 프로퍼티 어트리뷰트

프로퍼티 어트리 뷰트를 이해하기위해 내부 슬롯 과 내부 메소드의 개념을 알아보자

## 내부 슬롯과 내부 메서드

내부 슬롯과 내부 메서드는 자바스크립트 엔진의 구현 알고리즘을 설명하기위해 ECMAScript 사양에서 사용하는 의사 프로퍼티 와 의사 메서드 이다. **[[]] 이중대괄호 로 감싼 이름들이 내부 슬롯과 내부 메서드 이다**.

자바스크립트 엔진 내부 로직이므로 원칙적으로 자바스크립트는 내부 슬롯과 내부 메서드에 직접 접근하거나 호출할수있는 방법을 제공하지 않는다. **단 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할수있는 수단이 제공된다.**

예를 들어 모든 객체를 [[prototype]]이라는 내부 슬롯을 갖는데 `__proto__` 를 통해 간접적으로 접근할수있다.

```jsx
const { prototype } = require("events");

const o = {};
o.[[prototype]] // SyntaxError
console.log(o.__proto__); // object.prototype
```

### 프로퍼티 어트리 뷰트와 프로퍼티 디스크립터 객체

자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다. 프로퍼티 상태란 `프로퍼티의 값` , `값의 갱신 가능 여부` , `열거 가능 여부` , `재정의 가능 여부` 를 말한다.

프로퍼티 어트리 뷰트는 내부 슬롯이기때문에 직접 접근할 수 없지만 `object.getOwnPropertyDescriptor` 메서드를 통해 간접적으로 확인할수있다.

```jsx
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
```

### 접근자 프로퍼티

접근자 프로퍼티는 자체적으로 값을 갖지 않고 **다른 데이터 프로퍼티의 값을 읽거나 저장할때 사용하는 접근자 함수로 구성된 프로퍼티이다.**

### get / set

접근자 함수는 getter / setter 함수라고도 부른다.

```jsx
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
```

위코드의 객체에 `데이터 프로퍼티` 와 `접근자 프로퍼티`가 있는데

**firstname , lastname** 이 `데이터 프로퍼티` , **get/ set 이 붙은 메서드가 있는 함수**가 `접근자 프로퍼티` 이다.

`접근자 프로퍼티`는 **값을 자체적으로 가지고있지않고 데이터의 프로퍼티 값을 읽거나 저장할때 관여한다.**
`데이터 프로퍼티` 와 `접근자 프로퍼티`의 구별법은 `getOwnPropertyDescriptor 함수`를 사용했을때 **반환하는 객체가 다르다.**

### 프로토타입

프로토 타입은 어떤 객체의 상위객체(부모 객체)의 역할을 하는 객체이다.

프로터 타입은 하위 객체에게 자신의 프로퍼티와 메서드를 상속한다. 하위 객체는 자신의 프로퍼티 또는 메서드 인것처럼 자유롭게 사용할수있다.

## 프로퍼티 정의

프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나 , 기존 프로퍼티 의 어트리뷰트를 재정의 하는것을 말한다.

object.defineProperty 메서드를 사용하면 퍼르퍼티의 어트리뷰트를 정의할수있다. 인수로는 객체의 참조 , 데이터 프로퍼티의 키인 문자열, 프로퍼티 디스크립터 객체를 전달한다.

```jsx
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
```

## 객체 변경방지

객체 는 변경 가능한 값이므로 재할당 없이 직접 변경할 수 있다.

다만 자바스크립트 객체 의 변경 을 방지하는 다양한 메서드들은 객체의 변경을 금지하는 강도가 다르다

| 구분           | 메서드                   | 프로퍼티 추가 | 프로퍼티 삭제 | 프로퍼티 값 읽기 | 프로퍼티 값 쓰기 | 프로퍼티 어트리뷰트 재정의 |
| -------------- | ------------------------ | ------------- | ------------- | ---------------- | ---------------- | -------------------------- |
| 객체 확장 금지 | Object.preventExtensions | x             | o             | o                | o                | o                          |
| 객체 밀봉      | Object.seal              | x             | x             | o                | o                | x                          |
| 객체 동결      | Object.freeze            | x             | x             | o                | x                | x                          |

### 객체확장금지

`Object.preventExtensions` 객체의 확장을 금지함 => 추가 금지 / 나머지 사용가능

`Object.isExtensible` 확장가능한 객체인지 확인하는 메서드

### 객체 밀봉

`Object.seal` 객체 밀봉 => 읽고, 쓰기만 가능 / 추가,삭제,재정의 금지

`Object.isSealed` 밀봉된 객체인지 확인하는 메서드

### 객체 동결

`Object.freeze` 객체동결 => 추가,삭제,재정의,값갱신 금지 / 읽기만가능

`Object.isFrozen` 동결된 객체인지 확인하는 메서드

### 불변 객체

이전 변경방지 메서드 들은 얕은 변경 방지로 직속 프로퍼티만 변경이 방지되고 중첩 객체 까지는 영향을 주지못한다. `Object.freeze` 으로 객체 동결을해도 중첩객체까지 동결할수는 없는데 중첩객체까지 동결하여 변경이 불가능한 읽기 전용으로 불변 객체를 구현하려면 객체를 값으로 갖는 모든 프로퍼티에 재귀적으로 `Object.freeze` 을 호출해야된다.

# 📍15장 let, const 키워드와 블록 레벨 스코프

## var 변수의 문제점

### 변수 중복 선언 허용

var 키워드로 선언한 변수는 **중복 선언이 가능하다**

```jsx
var x = 1;
var y = 1;
// 같은 스코프 내에 중복 선언을 허용한다.
// 초기화문이 있는 변수선언문은 var 키워드가 없는 것처럼 동작한다.

var x = 100;
// 초기화 문이 없는 변수 선언문은 무시된다.
var y;
console.log(x); // 100
console.log(y); //1
```

### 함수 레벨 스코프

var 키워드로 선언한 변수는 **함수의 코드 블록만을 지역스코프로 인정**하는데

외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 **전역 변수처리**가 된다.

```jsx
var x = 1;
if (true) {
  // x는 전역 변수이다. 이미선언된 x 가 있으므로 중복선언된다.
  var x = 10;
}
console.log(x); // 10

var i = 10;
// for 문에서 선언한 i 는 전역변수이다. 이미선언한 변수가있으므로 중복선언된다.
for (var i = 0; i < 5; i++) {
  console.loe(i);
}
console.log(i); // 5
```

### 변수 호이스팅

var 키워드로 변수를 선언하면 변수 호이스팅이 발생되는데 변수 선언문 이전에 참조할수있다 다만 할당이전이라면 undefined 를 반환한다.

```jsx
console.log(foo); // undefined
foo = 123; // 변수 에 값 할당
console.log(foo); // 123
var foo; // 변수 선언은 런타임이전에 자바스크립트엔진에의해 암묵적으로 실행된다.
```

## let 키워드

ES6 이후로 var 키워드의 단점을 보안하기위해 만들어졌다.

### 변수 중복 선언 금지

var 키워드와 다른점으로는 var 는 변수 중복 선언이 가능하지만 **let 키워드는 중복선언이 불가능**하다.

중복선언시 **문법 에러가 발생**한다 ( systaxError )

### 블록 레벨 스코프

let 키워드는 **모드 코드 블록 ( 함수 , if , for , while , try/catch 등 ) 을 지역 스코프로 인정하는 블록 레벨 스코프**를 가지고있다.

### 변수 호이스팅

`var 키워드`는 런타임 이전에 자바스크립트 엔진에서 암묵적으로 **선언과 초기화 단계가 한번에 진행**되는데

`let 키워드`로 선언한 **변수는 선언단계와 초기화 단계가 분리되서 진행**된다.

런타임 이전에 자바스크립트 엔진으로 인해 암묵적으로 **선언단계가 먼저 실행되긴 하나** , **초기화 단계는 변수 선언문에 도달했을때 실행이된다**. **초기화 단계 이전에 참조하려하면 참조에러 ( ReferenceError ) 가 발생**한다. let 키워드 선언단계 부터 초기화 단계 전까지 변수를 참조할수없는 구간을 를 **일시적 사각지대** 라고 한다.

결국 var 와 let 모두 변수 호이스팅이 발생하지만 var 는 선언과 초기화 단계가 같이 진행되고

let 은 선언만된상태에서 변수선언문에 코드진행순서가 오면 그때 초기화 진행을 하는 차이점이있어

**변수 호이스팅이 발생 하지않는 것처럼 동작**하게된다.

### 전역 객체와 let

var 키워드로 선언한 전역변수와 , 함수 들은 모두 전역객체 window의 프로퍼티가 된다.

```jsx
var x = 1;
y = 2;
function foo() {}

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
```

다만 let 키워드로 선언한 전역 변수는 전역객체의 프로퍼티가 아니기때문에 window. 으로 접근이 불가능하다. let 의 전역 변수는 보이지 않는 개념적인 블록 내에서 존재하기때문이다

## const 키워드

const 키워드는 **상수를 선언하기위해서 사용**한다.

### 선언과 초기화

const 키워드로 선언한 변수는 반드시 **선언과 동시에 초기화 해야한다.**

const 키워드로 선언한 변수는 let 키워드로 선언한 변수와 마찬가지로 **블록레벨스코프를 가지며** 변**수 호이스팅이 발생하지 않는 것 처럼 동작**한다.

### 재할당 금지

상수 이기때문에 var 와 let 과 같이 **재할당이 금지되있다.** ( typeError )

### 상수

const 키워드로 선언된 변수에 원시 값을 할당할 경우 **원시 값은 변경할수없는 값** 이고 c**onst 키워드에 의해 재할당이 금지**되므로 **할당된 값을 변경할수있는 방법은 없다.**

일반적으로 **상수의 이름은 대문자로 선언해 상수임을 명확히 표현**하고 **여러단어일 경우는 \_ 를 사용**해서 구분하는게 일반적이다.

### const 키워드와 객체

const 키워드로 선언된 변수에 원시값은 변경불가능하지만 const 키워드로 선언된 변수에 객체 값은 변경이 가능하다.

**const 의 키워드는 재할당을 금지할뿐 “ 불변 “ 을 의미하지는 않는다.**

**변수 선언에는 기본적으로 const 를 사용**하고 **let 은 재할당이 필요한 경우 한정에서 사용**하는것이좋다.

**ES6 이후로는 var 는 사용하지않는다**

# 📍14장 전역 변수의 문제점

### 전역변수

전역변수를 선언한 의도는 **코드 어디서든 참조하고 할당할수있는 변수로 사용하겠다는 의미**인데 이는 모든코드가 전역 변수를 참조하고 변경할 수 있는 암묵적 결합을 허용하는것이다. 즉 **해당 코드가 끝날때까지 생명주기가 이어진다.**

또한 스코프 체인상 가장 종점에 위치해있기때문에 검색속도가 가장 느리다. (물론 차이는 그렇게 크진않다)

## 전역변수의 사용을 억제하는방법

### 즉시 실행 함수

함수 정의와 동시에 호출되는 **즉시실행함수는 한번만 호출된**다. 이런특성을 이용해 **전역변수의 사용을 제한하는 방법**이다.

```jsx
(function () {
  var foo = 10;
  // 즉시 실행 함수의 지역 변수 스코프
})();
```

### 네임스페이스 객체

전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고싶은 변수를 프로퍼티로 추가한다.

```jsx
ver MYAPP = {} // 전역 스페이스 객체

MYAPP.person = {
  name: "Lee",
  address: "Seoul",
};
// 네임 스페이스 객체에 또 객체를 프로퍼티로
// 추가해서 계층적으로 구성할수도있다
console.log(MYAPP.person.name); // lee
```

### 모듈패턴

모듈패턴은 클래스를 모방해서 관련된변수와 함수를 모아 즉시실행함수로 감싸 하나의 모듈을 만드는것인데 자바스크립트의 강력한 기능인 클로저 기능을 동반한다.

해당 모듈화의 특징으로는 캡슐화 까지 구현할수있다.

**캡슐화** 는 객체의 **특정 프로퍼티와 메서드를 감출목적으로 하나로 묶는것을말하며 해당 프로퍼티와 메서드를 감출목적으로 사용하기도한다 . 이를 정보 은닉이라 한다.**

대부분의 객체지향 프로그래밍 언어는 클래스를 구성하는데 public, private, protected 등 접근 제한자를 두어 공개범위를 한정할수있는데 자바스크립트는 해당 접근 제한자 를 제공하지않아 모듈패턴을 통해 한정적이지만 정보은닉을 구현하기 위해사용한다.

```jsx
var Counter = function () {
  var num = 0;

  return {
    incresase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
};
// private 변수는 외부로노출이 되지않음
console.log(Counter.num); // undefined

console.log(Counter.incresase()); // 1
console.log(Counter.incresase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0

// 모듈화한 메소드를 통해서 Counter 안에 변수를 조작할수있다.
```

### ES6 모듈

ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공하는데 해당 모듈파일에서는 **var 키워드로 선언한 변수는 더이상 전역변수가 아니며 window 객체 프로퍼티도 아니다.**

```jsx
<script type="module" src="lib.mjs"></script>
```

확장자는 mjs 를 권장하고 스크립트 타입에 module 어리티뷰트를 추가하면 해당 파일은 모듈로써 동작하게된다.

# 📍13장 스코프

# 스코프

모든 식별자는 자신이 선언된 위치에 의해 다른 코드가 자신을 참조할수이쓴ㄴ 유효 범위가 결정되는데 이를 스코프 라고 한다.

## 스코프의 종류

- 전역 스코프
- 지역스코프

### 전역스코프

전역스코프는 코드의 **가장 바깥 영역**을 말한다. 전역에 변수를 선언하면 전연스코프를 갖는 **전역변수가 되는데 전역 변수는 어디든지 참조 가 가능하다.**

### 지역스코프

지역은 **함수 몸체 내부**를 말하는데 지역에서 변수를 선언하면 해당 변수는 지역스코프를 갖게된다. 즉 **함수내부에서만 참조**할수있다.

### 스코프 체인

중첩함수에서 **스코프는 계층적으로 존재**하게되는데 전역 > 함수 > 중첩함수 스코프 가 계층적으로 연결된것을 스코프 체인이라고한다.

변수를 참조할때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하여 선언된 변수를 검색한다. 이를통해 상위 스코프에서 생성한 변수를 하위 스코프에서도 참조할수있다. 즉 전역 스코프 변수를 중첩스코프 내부에서 사용할수있는 동작원리가 이때문이다.

다만 거꾸로 **중첩함수내부에서 상위단계 스코프에서는 참조가 불가능하다**

### 함수레벨 스코프

var 키워드로 선언된 변수는 오로지 함수의 코드블록 만을 지역스코프로 인정한다. 이러한 특성을 함수레벨 스코프라 한다.

```jsx
var x = 10;
if (true) {
  var x = 1;
}

console.log(x); // 1

var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); // 0 1 2 3 4 5
```

C 나 java 등 대부분의 다른언어는 함수 몸체 뿐만아리나 모든 코드블록 if , for , while , try/catch 등 지역스코프를 만드는데 var 에서는 오로지 **함수 만 지역스코프를 인정**하기때문에 의도치않게 위 코드와 같이 값이 변경될수있다.

### 렉시컬 스코프

두가지 패턴을 예측할수있다.

1. **함수를 어디서 호출했는지** 따라 함수 상위 스코프를 결정한다
2. **함수를 어디서 정의 했는지**에 따라 함수 상위 스코프를 결정한다.

프로그래밍은 이 두가지 패턴중 한가지 방식으로 함수 의 상위 스코프를 결정한다.

첫번째 방식은 동적 스코프 라고 하는데 함수를 정의하는 시점에서 함수가 어디서 호출될지 알수없어 함수가 **호출되는 시점에 동적으로 상위 스코프를 결정하기에 동적스코프라 한다**.

두번째는 **렉시컬스코프** 또는 **정적스코프라고** 부른다 동적 스코프처럼 상위 스코프가 동적으로 변하지 않고 **함수 정의가 평가되는 시점에 상위 스코프가 정적으로 결정되기때문에 정적 스코프라 한다 .**

**자바스크립트 를 비롯한 대부분의 프로그래밍 언어는 렉시컬 스코프를 따른다**

자바스크립으는 **렉시컬 스코프**를 따르므로 함수를 어디서 호출했는지가 아니라 **함수를 어디서 정의했는지에따라 상위 스코프를 결정**한다.

```jsx
var x = 1;
function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1
```

---

# **📍12장 함수 -2**

## 참조의 의한 전달과 외부 상태의 변경

**원시값**은 **값에 의한 전달** 이고 **객체**는 **참조에 의한 전달방식**으로 동작한다.

**매개변수또한 타입에따라 동일하게 동작**하기때문에 **매개변수에 원시값을 전달받을때는 값자체가 복사**되어 전달되어 함수내부에서 변경을해도 외부원시값을 가지고있는 변수에는 아무런 영향이 없다. 다만 **객체를 전달받을때는 참조 값이 전달되기때문에 해당 함수에서 변경하면 외부 객체에도 영향**이 간다.

```jsx
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "kim";
}

//외부 값
let num = 100;
let person = { name: "Lee" };

console.log(num); // 100
console.log(person); // name : "Lee"
// 원시값은 값 자체가 복사되고 , 객체는 참조값이 복사되어 매개변수로 전달된다.
changeVal(num, person);

//원시값은 원본이 훼손되지않고
console.log(num); // 100
// 객체는 원본이 훼손된다.
console.log(person); // name : "kim"
```

이렇게 외부객체를 변경시키는것은 **상태변화에 추적에 어렵고 코드의 복잡성을 증가시키고 가독성을 해치는 원인**이된다. 객체의 변경을 추적하려면 옵저버 패턴 등을 통해 객체를 참조를 공유하는 모든이들에게 변경사실을 통지하고 대처하는 추가대응이 필요하다.

이런 문제해결 방법중 하나로 객체를 **불변 객체**로 만들어서 사용하는것인데

**불변객체는 객체를 마치 원시값처럼 변경 불가능한 값으로 동작하게 만드는것이다**.

## 다양한 함수의 형태

### 즉시 실행 함수

**함수의 정의와 동시에 즉시 호출되는 함수이다**. 이 함수는 한번 호출되면 다시 호출할수없으며

일반적으로 익명 함수를 사용하고 즉시 실행 함수는 **반드시** **그룹연산자 (...) 로 감싸야한다.**

```jsx
let res = (function (a, b) {
  return a * b;
})(3, 5);
console.log(res); // 15

// 일반 함수처럼 값을 반환할수도 인수를 전달할수도있다.
```

### 재귀 함수

함수가 자기자신을 호출하는것을 재귀호출이라하고 , **재귀호출을 수행하는 함수를 재귀함수**라한다.

재귀함수는 반복되는 처리를 위해 사용한다.

```jsx
// 10 부터 0 까지 출력하는 함수
function coundown(n) {
  if (n < 0) return;
  console.log(n);
  coundown(n - 1); // 재귀호출
}
coundown(10);
```

**for 반복문 대신 간단히 재귀함수를 통해서 구현**할수있다.

함수내부에서 재귀 함수를 호출할때 함수 이름, 식별자 를 통해서 할수있다

다만 **함수 외부에서 호출시에는 식별자를 통해서 호출**해야한다.

### 중첩 함수

**함수 내부에 정의된 함수를 중첩 함수**라고한다. 중첩함수는 외부 함수 내부에서만 호출이 가능하고 외부함수의 변수를 참조할수있다.

```jsx
function outer() {
  // 외부함수
  let x = 1;
  function inner() {
    // 중첩함수
    let y = 2;
    // 외부함수의 변수 참조 가능
    console.log(x + y); // 3
  }
  inner();
}
outer();
```

### 콜백 함수

**함수의 매개변수를 통해** **다른 함수의 내부로 전달되는함수를 콜백함수** 라고 한다.

또한 매개변수를 통해 함수의 외부에서 콜백함수를 전달받은 함수를 고차 함수라고 한다.

```jsx
function repeat(n, **f)** {
    for (let i = 0; i < n; i++){
        f(i); // i를 전달하면서 f 호출
    }
}

let logAll = function (i) {
    console.log(i);
};
// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll); // 0 1 2 3 4

let logOdds = function (i) {
    if (i % 2) console.log(i);
};

repeat(5, logOdds); // 1 3
```

### 순수 함수와 비순수 함수

**어떤 외부 상태에 의존하지 않고 변경하지도않는 순수 함수**와 **외부상태에 의존하거나 외부상태를 변경하는 비 순수 함수**가 있다.

```jsx
var count = 0;

// 인자를 받지않고 외부상태를 직접 참조
function increase() {
  return ++count;
}
```

## 비순수함수 는 **인수를 전달받지않고 함수 내부에서 외부상태를 직접 참조**하여 외부상태에 의존하여 반환값이 변할수있고 외부상태도 변할수있기때문에 코드 복잡성과 상태변화의 추적이 어려워져 권장되지않는다

# 📍함수정의

함수를 정의하는 방법은 4가지 가 있다.

- 함수 선언문
- 함수 표현식
- function 생정자 함수
- 화살표 함수

## 함수선언문

```jsx
function add(x, y) {
  return x + y;
}
```

함수 리터럴과 유사하지만 **선언문은 함수 이름을 생략할수없고 리터럴은 생략할수있다.**

또 **함수 선언문은 표현식이 아닌 문으로 변수에 할당할수 없다**

하지만 아래코드를 보면 의문점이 생기는데

```jsx
let add = function add(x, y) {
  return x + y;
};
console.log(add(2, 5)); // 7
```

함수 선언문이 변수에 할당되는것처럼 보이는데 이렇게 동작하는 이유는 **자바스크립트 엔진이 코드의 문맥에 따라 함수 리터럴 이나 함수 선언문으로 해석하는 경우가있기때문**인데 간단하게 **함수리터럴을 단독으로 사용하면 함수 선언문 으로 해석**하고 **함수리터럴을 값으로 평가해야되는 문맥이라면 함수 리터럴로 해석**하게된다.

그리고 자바스크립트 엔진은 생성된 함수를 호출하기위해 함수이름과 **동일한 이름의 식별자를 암묵적으로 생성**하고 함수 객체를 할당하게되기때문에 아래와 같은 코드도 호출이 가능하다.

```jsx
function add(x, y) {
  return x + y;
}
console.log(add(2, 5)); // 7
```

따라서 함수는 함수 이름으로 호출하는것이 아니라 자바스크립트 엔진이 암묵적으로 생성한 식별자 를 통해 호출하는것이다.

## 함수 표현식

함수는 객체 타입의 **값의 성질을 가진 일급객체** 이라한다. 일급객체는 함수를 값처럼 자유롭게 사용할수있다는 의미인데 이는 **변수에도 할당할수있다는 얘기다**

함수 표현식은 함수 리터럴로 생성한 함수 객체를 변수에 할당하는것을 얘기한다.

```jsx
let add = function (x, y) {
  return x + y;
};
console.log(add(2, 5)); // 7
```

함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적이며 , 함수 객체를 가르키는 식별자를 통해서 호출할수있다.

### 함수 호이스팅

```jsx
// 함수 참조
console.log(add);
console.log(sub); // undefined

// 함수 호출
console.log(add(2,5)); // 7
console.log(sub(2,5)): // 타입에러

// 함수 선언문
function add(x,y) {
	return x+y;
};

// 함수 표현식
var sub = function(x,y) {
	return x+y;
};
```

함수 선언문은 선언문 이전에 호출해도 동작하게되는데 그이유는 **함수 호이스팅**에 있다.

모든 선언문이 **런타임 이전에 자바스크립트 엔진에 의해 먼저 실행**되는데 함수선언문도 마찬가지로 란타임 이전에 함수 객체가 먼저 생성되고 자바스크립트 엔진은 함수이름과 동일한 식별자를 생성하고 함수객체에 할당한다. 이렇게 함수선언문이 코드의 선두로 끌어올려지는것처럼 동작하는것이 자바스크립트의 고유의 특징인 **함수 호이스팅이라고 한다.**

다만 **함수 호이스팅**과 **변수 호이스팅**에는 미묘한 차이가 존재한다.

먼저 두 호이스팅의 동일한점으로는 런타임 이전에 자바스크립트 엔진에 의해 먼저 실행되고 식별자를 생성한다는점에서는 동일하다 하지만 **var 키워드로 선언된 변수는 은 undefined 로 초기화** 되고 **함수선언문 을 통해 암묵적으로 생성된 식별자는 함수 객체로 초기화된다.**

따라서 함수 표현식 이전에 함수 참조시 undefined 가 나오는이유는 **변수 호이스팅에 의한 결과**라고 볼수있다.

**함수표현식은 표현식 이후에 참조 또는 호출해야한다.**

## function생성자 함수

자바스크립트에 기본 빌트인 함수 function 의 생성자 함수에 매개변수 목록과 함수 몸체를 문자열로 전달하면서 **new 연산자와 호출하면 함수 객체를 생성해서 반환**한다.

```jsx
let add = new Function("x", "y", "return x+y");

console.log(add(2, 5)); // 7
```

이같은 경우는 **클로저를 생성하지않고, 함수선언문이나 표현식으로 생성한 함수와 다르게 동작**하기때문에 일반적이지 않고 바람직하지않다.

## 화살표 함수

ES6 이후 도입된 함수인데 function 키워드 대신 **⇒** 를 사용해 간략한 방법으로 선언할수있다.

```jsx
const add = (x, y) => x + y;
console.log(add(2, 5)); // 7
```

화살표 함수는 **항상** **익명 함수로 정의**한다

기존함수에서 표현만 간략하게 한것이 아니라 **내부 동작도 간략화**되어있다.

## ** 추후에 좀더 내용이 보강되어야힘 **

# 📍원시값과 객체?

자바스크립트에는 7가지 데이터 타입이 존재하는데 크게 **원시타입** 과 **객체 타입**으로 구분할수있다.

- 원시타입
  - 변경 불가능한 값 즉 읽기 전용 값 이다.
  - 변수에 실제값이 저장된다.
- 객체타입
  - 변경 가능한 값
  - 변수에 참조값이 저장된다.

## 원시값

원시값같은경우는 변경불가능한 값이기때문에 **변수값을 재할당하게되**면 변수는 새로운 메모리 공간을 확보하고 재할당한 값을 저장한뒤 변수가 참조하던 **메모리 공간의 주소를 변경**한다. 이런 값의 특성을 **불변성** 이라고한다.

### 문자

원시값을 저장하려면 먼저 확보해야하는 메모리 크기를 결정해야되는데 원시 값인 문자열은 **1개의 문자는 2바이트**의 메모리 공간을 갖고 몇개의 문자로 이뤄진 문자열인지에 따라 메모리 공간이 결정된다.

자바스크립트의 문자열은 원시 타입이며 변경불가능하다

```jsx
let str = "hi";
str = "hello";
```

위의 코드를보면 str변수에 hi 를 할당한뒤 hello 를 **재할당**했다.

문자열은 원시타입이기때문에 **hi 와 hello 는 메모리에 모두 존재**한다 . str **변수가 가르키는것이 변경**된거다.

문자는 **유사 배열 객체인 형태**를 가지고있다.

**유사배열**이란 마치 **배열처럼 인덱스로 프로퍼티 값에 접근**할수있고 **length 프로퍼티를 갖는 객체**를 말한다.

다만 문자열은 원시 값이므로 에러는 나지않지만 **변경**할수없다

여기서 **변경** 과 **재할당** 을 잘 구별해야한다.

```jsx
let str = "abc";
str[0] = "A";
// 해당 문자열을 변경하는것은 불가능하다.
console.log(str); // abc

str = "dce";
// 변수 값을 재할당 하는것은 가능하다.
console.log(str); // dce
```

### 값에 의한 전달

변수에 원시값을 갖는 변수를 할당하게되면 **할당받는 변수** 에는 **할당되는 변수** 의 **원시값이 복사되어 전달**된다.

이같은 경우를 값에 의한 전달 이라고 한다.

이둘은 같은 메모리에 저장된 값을 바라보는것이 아닌 **복사된 별개의 값을 갖게**되는것이다.

## 객체

**객체는 프로퍼티 개수가 정해져있지않고 동적으로 추가되고 삭제 할수있다.**

프로퍼티 값에 제약도없어 **메모리 공간의 크기를 사전에 정해 둘수 없다.**

### 변경 가능한 값

원시값은 변경 불가능한 값이므로 원시 값을 가진 변수는 재할당 외에는 방법이 없다.

다만 객체를 할당한 변수는 재할당 없이 객체를 직접 변경할수있고 동적으로 추가 , 프로퍼티 값을 갱신할수도 삭제할수도있다.

```jsx
let person = {
  name: "jaehyun",
};
// 변수에 객체를 할당

person.name = "kim";
// 프로퍼티 값 갱신
Person.address = "Seoul";
// 프로퍼티 동적 생성
```

결국에 **원시값을 갖는 변수의 값을 변경하려면 재할당을통해 메모리에 새로 생성**해야한다.

**객체는 재할당하지않고 변경 가능하기에 변수의 참조 값은 변경되지않는다** .

### 참조에 의한 전달

객체를 가르키는 **참조값이 복사되어 전달되는것을 의미**하는데 person 과 copy 의 변수 메모리 주소는 다르지만 **모두 동일한 객체를 가르킨다 .** 이것을 **두개의 식별자가 하나의 객체를 공유한다** 라고한다.

여기서 **어느 한쪽의 객체를 변경하면 서로 영향을 주고받는다.**

```jsx
let person = {
  name: "jaehyun",
};
let copy = person;
// 참조값을 복사
```

# 📍객체 리터럴

**자바스크립트는 객체 기반형 프로그래밍 언어**이다.

**`객체`** 는 0개 이상의 **프로퍼티와 메서드로 구성된 집합** 이며

**`프로퍼티`** 는 **객체의 상태를 나타내는 값** 이라 하고 **키와 값**으로 구성된다.

### 객체 리터럴에 의한 객체 생성

**c++**이나 **자바** 같은 `클래스 기반 객체 지향 언어`는 **클래스를 사전에 정의**하고 **new 연산자**와 함께 생성자를 호출해서 **인스턴스를 생성**하는 방식으로 객체를 생성하지만,

**자바스크립트**는 `프로토타입 기반 객체지향 언어`이기때문에 **다양한 객체 생성 방법을 지원**한다.

- 객체 리터럴
  **자바스크립트**에서는 **일반적으로는 객체 리터럴**을 사용해서 객체를 생성하게된다.
  객체 리터럴은 **중괄호({...}) 사용해 객체 생성**을 한다.

  ```jsx
  // 객체 리터럴을 사용해서 객체 생성
  let person = {
    name: "jaehyun",
    sayHello: function () {
      console.log(`hello my name is ${this.name}.`);
    },
  };
  // 중괄호 안에 프로퍼티를 정의하지않으면 빈객체가 생성된다.
  ```

  이러한 방식은 **객체 리터럴에 프로퍼티를 포함**시켜 **객체를 생성함과 동시에 프로퍼티를 만들수있다**
  또 생성한 이후에 **프로퍼티를 동적으로 추가**도 할수있다.

  ### ES6 이후 추가된 객체 리터럴 확장기능 추가

  - 프로퍼티 값은 **변수에 할당된 값**을 넣을수있다.
  - 프로퍼티 값에 변수를 사용하는경우 **키와 이름이 동일**하다면 **프로퍼티 키를 생략할수있다**. 이때 키이름은 **변수 이름으로 자동 생성**된다.
  - **계산된 프로퍼티 이름**

    - 문자열, 문자열로 타입변환할수있는 값으로 평가되는 표현식을 사용해 키를 **동적으로 생성할수있다.**

    ```jsx
    const prefix = "prop";
    let i = 0;

    // 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 키를 동적으로 생성
    const obj = {
      [`${prefix}-${++i}`]: i,
      [`${prefix}-${++i}`]: i,
      [`${prefix}-${++i}`]: i,
    };
    ```

- object 생성자 함수
- 생성자 함수
- object.create 메서드
- 클래스 (ES6)

### 프로퍼티

- `프로퍼티 키` : 빈 문자열을 포함한 **모든 문자열 , 심벌 값**
  - **프로퍼티 값**에 접근할수있는 **식별자 역할**
  - **식별자 네이밍 규칙에 준수**하다면 **따옴표를 생략 가능**하다
  - **식별자 네이밍 규칙에 따르지않는 이름**에는 반드시 **따옴표 를 사용**해야한다.
  - 이미존재하는 프로퍼티 키를 **중복선언하면** 나중에 선언된 값이 **덮어쓰게된다**.
- `프로퍼티 값` : 자바스크립트에서 사용할수있는 **모든 값**

  - 이미 **존재**하는 프로퍼티에 값을 할당하면 값이 **갱신**된다.
  - 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되고 추가된다.

  ```jsx
  let person = { name: "jaehyun" };

  person.age = 20;

  console.log(person); // {name:"jaehyun", age:20}
  ```

### 프로퍼티 접근

프로퍼티에 접근하는 방법은 **2가지**가 있다.

프로퍼티 키가 **식별자 네이밍 규칙**을 준수하는 이름이라면 **2가지 다 사용가능**하다.

그게아니라면 반드시 **대괄호 표기법을 사용**해야한다.

- `마침표 표기법`
- `대괄호 표기법`
  - **프로퍼티 키** 는 **따옴표로 감싼 문자열** 이여야 한다.
  - 아니면 **레퍼랜스 에러**가 발생한다.

```jsx
let person = {
  name: "jaehyun",
};

console.log(person.name);
//마침표 표기법
console.log(person["name"]);
//대괄호 표기법
console.log(person.age);
//존재하지 않은 프로퍼티에 접근하면 undefined 을 반환한다.
```

- `프로퍼티 삭제`
  - 존재하는 프로퍼티를 delete 연산자 사용해서 객체의 프로퍼티를 삭제 할수있다.
  - `delete 객체.프로퍼티키 ;`

### 메서드

**프로퍼티 값이 함수일경우** 일반함수와 구별하기위해 **메서드** 라 부른다.

즉 **메서드**는 **객체에 묶여있는 함수**를 의미한다.
