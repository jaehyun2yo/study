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
