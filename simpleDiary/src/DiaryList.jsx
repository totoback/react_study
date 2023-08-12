import React from "react";
import DiaryItem from "./DiaryItem";

export default function DiaryList({diaryList,onDelete}) {
  console.log(diaryList)
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((item,idx)=>(
         <DiaryItem key={idx} {...item} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  );
}

DiaryList.defaultProps = {
  //defaultProps -> undefined로 들어올 수 있는 props들을 디폴트로 빈배열로 적용시킴
  diaryList:[],
}
