// import React, { useEffect, useState } from "react";

// const UnmountTest = ()=>{
//   useEffect(()=>{
//     console.log("mount")

//     return ()=>{
//       //언마운트 시점에 실행되게 됨
//       console.log("unmount")
//     }
//   },[])
//   return <div>언마운트 </div>
// }

// export default function Lifesycle() {
//   const [isvisible, setIsvisible] = useState(false)
//   const toggle = () => setIsvisible(!isvisible)
  
//   return (
//     <div>
//       <button onClick={toggle}>On/Off</button>
//       {isvisible && <UnmountTest/>}
//     </div>
//   )
// }
