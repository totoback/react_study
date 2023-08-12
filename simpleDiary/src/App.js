import React, { useRef, useState } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id: 1,
//     author: "최지영",
//     content: "하이",
//     emotion: 5,
//     created_date: new Date().getTime(), //현재 시간 기준 시간을 반환하는 메서드 : getTime
//   },
//   {
//     id: 2,
//     author: "홍길동",
//     content: "하이2",
//     emotion: 5,
//     created_date: new Date().getTime(), //현재 시간 기준 시간을 반환하는 메서드 : getTime
//   },
//   {
//     id: 3,
//     author: "토토",
//     content: "하이3",
//     emotion: 2,
//     created_date: new Date().getTime(), //현재 시간 기준 시간을 반환하는 메서드 : getTime
//   },
// ];

function App() {
  //데이터
  const [data, setData] = useState([]);
  //id 카운트
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
    //새로운 아이템을 먼저 정렬
  };
  //삭제하기 
  const onRemove = (targetId) =>{
    console.log(`${targetId}가 삭제됨`)
    const newDiaryList = data.filter((item)=> item.id !== targetId)
    console.log(newDiaryList)
    setData(newDiaryList)
  }
  //수정하기
  const onEdit = (targetId, newContent)=>{
    setData(
      data.map((item)=>item.id === targetId ? {...item, content:newContent} : item
      )
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <DiaryEditor onCreate={onCreate} />
        <DiaryList onRemove={onRemove} diaryList={data} onEdit={onEdit} />
      </header>
    </div>
  );
}

export default App;
