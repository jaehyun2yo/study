// Partial - 특정 타입의 부분 집합을 만족하는 타입을 정의할수있다.

interface Address {
  email: string;
  address: string;
}

type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {}; // 가능
const you: MayHaveEmail = { email: "test@abc.com" }; // 가능
const all: MayHaveEmail = { email: "capt@hero.com", address: "Pangyo" }; // 가능

// Pick - 특정 타입에서 몇개의 속성을 선택하여 타입을 정할수있다.

interface Person2 {
  name: string;
  age: number;
}
const man: Pick<Person2, "name"> = {
  name: "남자",
};
const person2: Person2 = { name: "재현" };
// 원래는 인터페이스에 정의된 타입 을 모두 속성으로 가지고있어야한다.
console.log(man.name);
console.log(person2.name);
console.log(person2.name);

// Omit - 특정 타입에서 지정된 속성만 제거된 타입을 정의한다.

interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}
const phoneBook: Omit<AddressBook, "address"> = {
  name: "재택근무",
  phone: 12342223333,
  company: "내 방",
};
const chingtao: Omit<AddressBook, "address" | "company"> = {
  name: "중국집",
  phone: 44455557777,
};
