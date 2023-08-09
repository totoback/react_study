//API&Fetch

//1번방법
//async*await
async function getData(){
  const rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts") // 가져온 데이터의 포장지(아직 뜯지 않음)
  const jsonResponse = await rawResponse.json() // 가져온 데이터의 포장지를 뜯은 형태 즉, 데이터
  console.log(jsonResponse)
// 
}
getData()//호출

//2번방법
//Promise의 then 메서드 체이닝을 사용하여 데이터를 처리
// function getData(){
//   fetch("https://jsonplaceholder.typicode.com/posts") // 가져온 데이터의 포장지(아직 뜯지 않음)
//   .then((response)=>response.json())
//   .then((data) => console.log(data));
//   // 가져온 데이터의 포장지를 뜯은 형태 즉, 데이터
// // 
// }
// getData()//호출 