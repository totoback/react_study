import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
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
//   }
// ];


function App() {
  //데이터
  const [data, setData] = useState([]);
  //api 가져오기
  const getData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res)=>res.json())

    const initData = res.slice(0,20).map((item)=>{
      return {
        author:item.email,
        content:item.body,
        emotion:Math.floor(Math.random()*5)+1,
        created_date : new Date().getTime(),
        id: dataId.current++
      }
    })
    //setData로 업데이트
    setData(initData)
  }

  useEffect(()=>{
    getData();
  },[])
  //id 카운트
  const dataId = useRef(0);

  const onCreate = useCallback((author, content, emotion) => {
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
  },[]);
  //삭제하기 
  const onRemove = useCallback((targetId) =>{
    // console.log(`${targetId}가 삭제됨`)
    // console.log(newDiaryList)
    setData(data=>data.filter((item)=> item.id !== targetId))
  },[])
  //수정하기
  const onEdit = useCallback((targetId, newContent)=>{
    setData((data)=>
      data.map((item)=>item.id === targetId ? {...item, content:newContent} : item
      )
    );
  },[]);

  //최적화 1 - useMemo
  //연산결과를 재사용하는법
  const getDiaryAnalysis = useMemo(()=>{
    console.log("일기 분석 시작");

    const goodCount = data.filter((it)=>it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return {goodCount,badCount,goodRatio}
  },[data.length]); //길이가 변할때만 분석 시작

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis //useMemo를 사용하면 함수로 사용 X -> 값으로 사용

  return (
    <div className="App">
      <header className="App-header">
        <DiaryEditor onCreate={onCreate} />
        <div>전체 일기 : {data.length}</div>
        <div>기분 좋은 일기 개수 : {goodCount}</div>
        <div>기분 나쁜 일기 개수 : {badCount}</div>
        <div>기분 좋은 일기 비율 : {goodRatio} %</div>
        <DiaryList onRemove={onRemove} diaryList={data} onEdit={onEdit} />
      </header>
    </div>
  );
}

export default App;
