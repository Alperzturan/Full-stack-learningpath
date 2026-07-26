import { useState, useEffect } from 'react'

function UseEffect(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("Green")

    const addCount = ()=>{
        setCount(c => c+1)
    }
    const subCount = ()=>{
        setCount(c => c-1)
    }
    const changeColor = ()=>{
        setColor(prevColor => prevColor==="Green" ? "Red" : "Green")
    }

    useEffect(()=>{
        document.title = count + color 
    },[count, color])//ikinci argüman bunlar değişince otomatik günceller,
    //eğer hiç argüman olmazsa olmazsa herhangi bir güncellemede,
    // boş [] olursa sadece sayfa yenilenmesinde güncellenir

    
    

    return(
        <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Substract</button><br />
        <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default UseEffect