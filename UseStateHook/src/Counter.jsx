import React, {useState} from 'react'

function Counter(){

    let [count,setCount] = useState(0)

    const increment = ()=>{
        setCount(count++);
    }
    const decrement = ()=>{
        setCount(count--);
    }
    const reset = ()=>{
        setCount(0);
    }

    return(
       <div className='counter'>
        <p className='display'>{count}</p>

        <button className='decrement' onClick={decrement}>Decrement</button>
        <button className='reset' onClick={reset}>Reset</button>
        <button className='increment' onClick={increment}>Increment</button>
       
       </div>
    )
}

export default Counter;