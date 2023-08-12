import React from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "최지영",
    content: "하이",
    emotion: 5,
    created_date: new Date().getTime(), //현재 시간 기준 시간을 반환하는 메서드 : getTime
  },
  {
    id: 2,
    author: "홍길동",
    content: "하이2",
    emotion: 5,
    created_date: new Date().getTime(), //현재 시간 기준 시간을 반환하는 메서드 : getTime
  },
  {
    id: 3,
    author: "토토",
    content: "하이3",
    emotion: 2,
    created_date: new Date().getTime(), //현재 시간 기준 시간을 반환하는 메서드 : getTime
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DiaryEditor />
        <DiaryList diaryList={dummyList}/>
      </header>
    </div>
  );
}

export default App;
