import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const SERVER_URL = "http://localhost:5500/api/todo";
  const [todoList, setTodoList] = useState([]);

  //Fetch데이터 함수로 사용하기 쉽게 만들어줌
  // const fetchData = ()=>{
  //   fetch("http://localhost:5500/api/todo")
  //   .then((response) => response.json())
  //   .then((data) => setTodoList(data));
  // }
  //axios로 데이터 받는법
  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);
  };
  //fetch로 데이터 가져오기
  useEffect(() => {
    fetchData();
  }, []);

  //fetch로 데이터 추가하는 작업
  // const onSubmitHandler = (e) => {
  //   e.preventDefault()
  //   const text = e.target.text.value;
  //   const done = e.target.done.checked;
  //   fetch("http://localhost:5500/api/todo", {
  //     method:"POST",
  //     headers:{
  //       'Content-Type':'application/json',
  //     },
  //     body: JSON.stringify({
  //       text,
  //       done,
  //     }),
  //   }).then(()=>{
  //     fetchData()
  //   })
  // };

  //axios로 데이터 받는법
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post(SERVER_URL, { text, done });
    fetchData(); //응답이 끝나면 fetchData
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>
      {todoList.map((todo) => {
        return (
          <div key={todo.id} style={{ display: "flex" }}>
            <div>{todo.id}</div>
            <div>{todo.text}</div>
            <div>{todo.done ? " Y" : "N"}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
