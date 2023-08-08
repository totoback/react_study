//삼항연산자
let b = -3;
b >= 0 ? console.log("양수") : console.log("음수");
//물음표 다음 참:거짓

//원래 조건문
// if(a>=0){
//   console.log("양수")
// }else{
//   console.log("음수")
// }

let a = [2, 4];
const arrayStatus = a.length === 0 ? "빈배열" : "안빈배열";
console.log(arrayStatus);
// if(a.length === 0){
//   console.log("빈 배열")
// }else{
//   console.log("안 빈배열")
// }

let c = []; //true
const result = a ? true : false;
console.log(result);


//학점 계산 프로그램
//90점 이상 A+
//50점 이상 B+
//둘다 아니면 f

let score = 100; //A+
score >= 90 ? console.log("A+") : score >= 50 ?console.log("B+") : console.log("F")