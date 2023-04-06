
/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let post = '강남 우동 맛집'
  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동 맛집','파이썬 독학'])
  let [따봉, 따봉변경] = useState(0);
  const [modal,setModal] = useState({id:null, components:null});


  return (
    <div className="App">
      <div className="black-nav">
        {/* <h4 style={ {color:'red', fontSize:'16px'}}>블로그임</h4> */}
        <h4>블로그임</h4>
      </div> 

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <div className="list" >
        <h4>
          <span onClick={()=>{setModal(!modal.components ? {id: 1, components: <Modal/>} : {})}}>{글제목[0]}</span>
          <span onClick={ (event) => {
          event.stopPropagation(); {따봉변경(따봉+1)}}}>👍</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
        {modal.id === 1 ? modal.components:null}
      </div>
      <div className="list">
        <h4>
          {글제목[1]} <span onClick={ () => {{따봉변경(따봉+1)}}}>👍</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
        {글제목[2]} <span onClick={ () => {
          {따봉변경(따봉+1)}
        }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
