

import React ,{useState} from 'react'
import Click from './Click';

function MyCounnter() {
    const [count, setCount] = useState(0);
    
    const increment = () =>{
        setCount(count + 1);
    }
    const decrement = () =>{
        setCount(count - 1);
    }
    const reset = () =>{
        setCount(0);
    }
 
  return (
    <div>
        <Click  button="Delete"/>       
        <h1> Counter : {count}</h1> 
       <button onClick={increment}> Increment </button>
       <button onClick={decrement}> decrement </button>
       <button onClick={reset}> Rest </button>
    </div>

  )
}

export default MyCounnter