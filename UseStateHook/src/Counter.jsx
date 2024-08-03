import React, {useState} from 'react'

function Counter(){

    let [count,setCount] = useState(0)

    function increment (){

        //takes the PENDING state to calculate NEXT state .
        // react puts your updater function in a queue (waiting in line)
        //During the next render , it will call them in same order 
        setCount(c=>c+1);
        setCount(c=>c+1);
        setCount(c=>c+1);
       
    }
    function decrement (){
        setCount(c=>c-1);
    }
    function reset (){
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
// // /* In React, an updater function is a function that is used to update the state of a component based
// on the previous state. When you call the `useState` hook in a functional component, it returns an
// array with two elements: the current state value and a function that allows you to update that
// state. */

//A function passed as an argument to setState() usually ex:- setYear(arrow functions)
//Allow for safe updates based on the previous state Used with multiple state updates and asynchronous functions good practice to use upates functions