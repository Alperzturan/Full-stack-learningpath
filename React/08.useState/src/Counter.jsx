import { useState } from 'react'

function Counter(){
    const [count, setCount] = useState(0);

    const incrementCount = ()=>{
        setCount(count+1);
    }
    const decrementCount = ()=>{
        setCount(count-1);
    }
    const resetCount = ()=>{
        setCount(0);
    }

    return(
        <div className='box'>
            <h1 id='number'>{count}</h1>
            <button onClick={decrementCount} className='button'>Decrement</button>
            <button onClick={resetCount} className='button'>Reset</button>
            <button onClick={incrementCount} className='button'>Increment</button>
        </div>
        
    )
    
}

export default Counter