// this

// 일반 함수로서 호출하면 this 는 전역 객체를 가르킨다.
function foo() {
  console.log(this);
}
foo(); // window

// 메서드로서 호출 하면 this 는 메서드를 호출한 객체 를 가르킨다.
const obj = { foo };
obj.foo(); // obj

//생성자 함수로서 호출하면 this 는 미래에 생성할 인스턴스를 가르킨다.
const inst = new foo(); // inst
