import React, { useRef, useState } from "react";

function DiaryEditor({onCreate}) {
  //react DOM : authorInput.current.으로 접근
  const authorInput = useRef() 
  const contentArea = useRef()

  // state 오브젝트로 데이터 저장
  const [state,setState] = useState({
    author:"",
    content:"",
    emotion:1,
  })
  // onChange로 state 업데이트
  const handleChangeState = (e)=>{
    setState({
      ...state, //스프레드연산자로 복사본을 만든 다음
      [e.target.name]: e.target.value, //name:value 값을 업데이트함
    })
  }
  // dom으로 focus 및 저장
  const handleSubmit = ()=>{
    if(state.author.length < 1 ){
      //focus
      authorInput.current.focus()
      return
    }
    if(state.content.length < 5){
      //focus
      contentArea.current.focus()
      return
    }
    onCreate(state.author, state.content, state.emotion)
    alert("저장 성공")
    setState({
      author:"",
      content:"",
      emotion:1,
    })
  }
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <div>
        <input ref={authorInput} name="author" value={state.author} onChange={handleChangeState}/>
        </div>
        <div>
          <textarea ref={contentArea} name="content" value={state.content} onChange={handleChangeState}/>
        </div>
        <div>
          <span>오늘의 감정 점수 :</span>
          <select name="emotion" value={state.emotion} onChange={handleChangeState}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <button onClick={handleSubmit}>일기 저장하기</button>
          </div>
      </div>
    </div>
  );
}
export default React.memo(DiaryEditor);