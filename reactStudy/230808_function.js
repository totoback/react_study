// 함수표현식&화살표함수

// console.log(helloA()) //호이스팅 불가능[함수표현식]
// console.log(helloB()) //호이스팅 가능[함수선언식]

//함수표현식 //호이스팅 불가능
let helloA = function () {
  return "helloA";
};
//함수표현식 //화살표함수
let helloA_A = () => {
  return "화살표함수임";
};

//함수선언식 //호이스팅 가능
function helloB() {
  return "helloB";
}

//사용법
// const helloText = helloA();
// console.log(helloText)
