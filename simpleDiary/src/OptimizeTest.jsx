import React, { useEffect, useState } from 'react'


//최적화 2 - React.memo
//컴포넌트 재사용
// const Textview = React.memo(({text})=>{
//   useEffect(()=>{
//     console.log(`업데이트 text : ${text}`)
//   })
//   return <div>{text}</div>
// })
// const Countview = React.memo(({count})=>{
//   useEffect(()=>{
//     console.log(`업데이트 count : ${count}`)
//   })
//   return <div>{count}</div>
// })
const CounterA = React.memo(({count})=>{
  useEffect(()=>{
    console.log(`업데이트 카운트 ${count}`)
  })
  return <div>{count}</div>
})
const CounterB = React.memo(({obj})=>{
  useEffect(()=>{
    console.log(`업데이트 카운트 ${obj.count}`)
  })
  return <div>{obj.count}</div>
})

export default function OptimizeTest() {
  const [count, setCount] = useState(1)
  // const [text, setText] = useState("")
  const [obj, setObj] = useState({count:1})

  return (
    <div>
      {/* <div>
      <h2>count</h2>
      <Countview count={count}/>
      <button onClick={()=>setCount(count+1)}>+</button>
      </div>
      <div>
      <h2>text</h2>
      <Textview text={text}/>
      <input value={text} onChange={(e)=> setText(e.target.value)} />
      </div> */}
      <div>
        <h2>Counter A</h2>
        <CounterA count={count}/>
        <button onClick={()=>setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <CounterB obj={obj}/>
        <button onClick={()=>setObj({count:obj.count})}>B button</button>
      </div>
    </div>
  )
}
