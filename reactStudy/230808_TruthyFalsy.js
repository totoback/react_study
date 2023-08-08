// Truthy&Falsy
let a = ""; //false
if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
  //Nan, undefined, 0, ""은 false로 인식함
}

const getName = (person) => {
  if (!person) { //false에 NOT 붙이면 => true로 변하는 성질
    return "객체가 아닙니다";
  }
  return person.name;
};
let person = { name: "지용쨩" };
const name = getName(person);
// console.log(getName(person))

