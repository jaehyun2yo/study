const somPeople = {
  age: 24,
  name: "vue",

  toSting() {
    return this.name;
  },

  valueOf() {
    return this.age;
  },
};

console.log(somPeople);
console.log(somPeople + somPeople);
console.log(+somPeople);
