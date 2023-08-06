import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/api/todo")
      .then((response) => response.json())
      .then((data) => setTodoList(data));
  }, []);

  const onSubmitHandler = (e) =>{}

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onChange={onSubmitHandler}>
        <input name="text"/>
        <input name="done" type="checkbox"/>
        <button type="submit" value="추가"/>
      </form>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
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
