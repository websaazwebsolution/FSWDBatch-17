import React,{useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    const incremnet = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    } 

    return (
    <div>
        <h2>Counter</h2>

        <h1>{count}</h1>
        <button onClick={incremnet}>incremnet</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter