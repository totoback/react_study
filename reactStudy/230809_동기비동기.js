//동기와 비동기
// 동기(Synchronous): 명령이 순서대로 실행됩니다. 한 작업이 끝난 후 다음 작업이 시작됩니다.
// 비동기(Asynchronous): 명령이 동시에 실행될 수 있습니다. 특정 작업의 완료를 기다리지 않고 다음 작업을 시작합니다.

//비동기처리
function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}
function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 2000);
}
function taskC(a, cb) {
  setTimeout(() => {
    const res = a - 1;
    cb(res);
  }, 1000);
}

// taskA(3, 4, (res) => {
//   console.log("A TASK RESULT : ", res);
// });
// taskB(7, (res) => {
//   console.log("B TASK RESULT : ", res);
// });
// taskB(14, (res) => {
//   console.log("C TASK RESULT : ", res);
// });

//콜백지옥
taskA(4, 5, (a_res) => {
  console.log("A RESULT : ", a_res);
  taskB(a_res, (b_res) => {
    console.log("B RESULT :", b_res);
    taskC(b_res, (c_res) => {
      console.log("C RESULT : ", c_res);
    });
  });
});
console.log("코드 끝");


// promise로 변경
function taskD(a, b) {
  return new Promise ((resolve, reject)=>{
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  })
}
function taskE(a) {
  return new Promise ((resolve, reject)=>{
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 2000);
  })
}
function taskF(a) {
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      const res = a * -1;
      resolve(res)
    })
  },1000)
}

//promise callback식
// taskD(5,1).then((a_res)=>{
//   console.log("A RESULT : ", a_res),
//   taskE(a_res).then((b_res)=>{
//     console.log("B RESULT :", b_res),
//     taskF(b_res).then((c_res)=>[
//       console.log("C RESULT : ", c_res)
//     ])
//   })
// })

//promise
taskD(5,1).then((a_res)=>{
  console.log("A RESULT : ", a_res);
  return taskE(a_res)
}).then((b_res)=>{
  console.log("B RESULT : ", b_res);
  return taskF
}).then((c_res)=>{
  console.log("C RESULT : ", c_res)
})