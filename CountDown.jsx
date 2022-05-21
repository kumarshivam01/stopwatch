import React,{useState} from 'react'
 const CountDown=()=>{
const [ time, setTime] = useState(60)
React.useEffect(()=>{
  const timer = time > 0 && setInterval(()=>setTime(time-1),10000)
  return()=>clearInterval(timer)
})
   return(
     <>
        <div>
          <form action="">
            <input type="text"/>
            <button type='submit'>submit</button>
          </form>
        </div>
        <div>
          <h1>{time}</h1>
        </div>
     </>
   )
 }

 export default CountDown