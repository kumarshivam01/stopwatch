import React, { useEffect, useState } from 'react'
import '../Timer.css'
const Timer = ()=>{
  const [Time,setTime] = useState(0)
  const [Timeron, setTimeon]=useState(false)
  useEffect(()=>{
    let interval = null
    if(Timeron){
      interval = setInterval(() => {
        setTime(prevTime=>prevTime+10)
      }, 10);
    }
    else{
      clearInterval(interval)
    }
    return()=>clearInterval(interval)
  },[Timeron])
  return(
    
    <div>
      <div>
        <span>{("0"+Math.floor((Time/60000)%60)).slice(-2)}:</span>
        <span>{("0"+Math.floor((Time/1000)%60)).slice(-2)}:</span>
        <span>{("0"+((Time/10)%100)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={()=>{setTimeon(true)}}>Start</button>
        <button onClick={()=>{setTimeon(false)}}>Stop</button>
        <button onClick={()=>{setTimeon(true)}}>Resume</button>
        <button onClick={()=>{setTime(0)}}>Reset</button>
      </div>
    </div>
  )
}
export default Timer