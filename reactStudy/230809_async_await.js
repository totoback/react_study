//async&await
function hello() {
  return " hello";
}
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function helloAsync() {
  return delay(3000).then(() => {
    return "hello Async";
  });
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}
main();
// helloAsync().then((res) => {
//   console.log(res); //hello Async
// });



//더 쉽게 접근하기
// async와 await는 Promise를 더 쉽게 사용할 수 있도록 도와줍니다.
// async 함수는 항상 Promise를 반환합니다.
// await는 Promise가 완료될 때까지 함수의 실행을 일시 중지합니다.