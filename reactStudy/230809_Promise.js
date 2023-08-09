//Promise - 더이상 콜백지옥 X, 더직권적이게 가능
//콜백지옥 = 비동기를 처리할때 ->해결위한 promise
function isPositive(number, resolve, reject) {
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        //성공 -> Resolve
        console.log(number);
        resolve(number >= 0 ? "양수" : "음수");
      }
      //실패 -> reject
      else reject("숫자형 값이 아닙니다.");
    }, 2000);
  };

  const asyncTask = new Promise(executor);
  return asyncTask;
}
const res = isPositive([]);

res
  .then((res) => {
    console.log("작업 성공 : ", res);
  })
  .catch((err) => {
    console.log("작업 실패 : ", err);
  });

// isPositive(10, (res) => {
//   console.log("성공적으로 수정 됨 :", res);
// }),
//   (err) => {
//     console.log("실해 하였음 : ", err);
//   };

//다시 쓴 쉽게 접근하기
//Promise-JavaScript에서 비동기 작업을 처리하기 위한 객체
let promise = new Promise(function (resolve, reject) {
  // 비동기 작업 수행...

  // 작업 성공
  resolve("성공 결과"); //resolve는 작업이 성공적으로 완료되었음을 의미

  // 또는 작업 실패
  reject("실패 사유"); //reject는 작업에 실패했음을 의미
});
