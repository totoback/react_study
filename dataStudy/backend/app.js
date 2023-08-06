const express = require("express");
const cors = require("cors");
const app = express();

//포트 넘버 정의
const PORT = 5500;

//서버와 클라이언트를 서버통일에 필요
app.use(cors());

//req.body를 사용하기 위해 기본으로 사용해야함(body-parsing)
app.use(express.json())
app.use(express.urlencoded({extends:true}))

//샘플데이터
let id = 2;
const todoList = [
  {
    id:1,
    text:"오늘 할일 1",
    done: true
  }
];

//접속 확인용
app.get("/", (req, res) => {
  res.send("hello world");
});

//읽기용 데이터
app.get("/api/todo", (req,res) => {
  res.json(todoList) 
});

//새로 추가하는 데이터
app.post("/api/todo",(req,res)=>{
  const {text,done} = req.body;
  todoList.push({
    id:id++,
    text,
    done
  })
  return res.send("성공")
})

//서버 작동 확인용
app.listen(PORT, () => {
  console.log(`server는 ${PORT}번에서 실행중!`);
});
