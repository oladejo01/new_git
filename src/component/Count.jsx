import React from 'react'
import { useState } from 'react'
 


const Count = () => {
    const[count, setCount] = useState(0)

    const increaseValue = () =>{
        setCount(count+ 1)
    }
    const decreaseValue = () =>{
        setCount(count- 1)
}
  return (
    <container>
        <div> I have clicked my button in {count} times</div>
        <button onClick ={increaseValue}> Increase </button>

        <button onClick ={decreaseValue}> Decrease </button>
    </container>
  )
}


export default Count 