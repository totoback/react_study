//구조분해 할당(비 구조화 할당)

let arr = ["1", "2", "3"];

//비 구조화 할당으로 변경
let [one, two, three] = arr;
let [one1, two2, three3] = ["1", "2", "3"];

//기본구조
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

console.log(one, two, three);

let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a, b);

//객체에 비구조화 할당
let object = { one11: "one1000", two22: "two1000", three33: "three1000" };

let { one11: oneOne, two22, three33, abc = "44" } = object;
console.log(oneOne, two22, three33, abc);
