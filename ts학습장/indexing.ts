interface StringArray {
  readonly [index: number]: string;
}

const mii: StringArray = ["jaehubn", "name"];
console.log(mii[0]); //
// mii[1] = "안녕";  // error
