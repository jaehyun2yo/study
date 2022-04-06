//## 함수와 일급 객체 

// 1. 무명의 리터럴로 생성가능하다
// 2. 변수, 자료구조에 저장가능하다.
const incresase = function (num) {
    return ++num;;
}
//3. 함수의 매개변수에 전달할 수 있다.
//4. 함수의 반환값으로 사용할수있다.
function makeCounter(aux) {
    let num = 0;
    return function () {
        num = aux(num)
        return num;
    }
}

// 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지않는다 
function multiply(x, y) {
    console.log(arguments);
    return x * y;
}
console.log(multiply()); // NaN
console.log(multiply(1)); // NaN
console.log(multiply(1, 2)); // 2 
console.log(multiply(1, 2, 3)); // 2

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

// length 프로퍼티 

function foo() { }
console.log(foo.length); // 0

function bar(x) {
    return x;
}
console.log(bar.length); // 1

function baz(x, y) {
    return x * y; 
}
console.log(baz.length); // 2
