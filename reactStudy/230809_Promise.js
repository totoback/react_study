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
