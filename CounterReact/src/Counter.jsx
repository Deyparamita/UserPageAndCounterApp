import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(1);

  function increment()
  {
    setCount(count+1);
  }

  function decrement()
  {
    setCount(count-1);
  }
  return (
    <div className='count'>
    <h2 style={{color:"white"}}>Count : {count}</h2>
   
   <div className='btn'>
   <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
   </div>
    
    </div>
  )
}

export default Counter
