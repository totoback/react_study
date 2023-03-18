
/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let post = '강남 우동 맛집'
  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동 맛집','파이썬 독학'])
  let [따봉, 따봉변경] = useState(0);

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

      <div className="list">
        <h4>{글제목[0]} <sapn onClick={ () => {
          {따봉변경(따봉+1)}
        }}>👍</sapn> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]} <sapn onClick={ () => {
          {따봉변경(따봉+1)}
        }}>👍</sapn> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]} <sapn onClick={ () => {
          {따봉변경(따봉+1)}
        }}>👍</sapn> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
