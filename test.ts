// 타입 앨리어스
type Person = {
  name: string;
  age?: number;
};

// 빈 객체를 Person 타입으로 지정
const person = {} as Person;
person.name = "Lee";
person.age = 20;
// person.address = "Seoul"; // Error

//

console.log(person.age);
