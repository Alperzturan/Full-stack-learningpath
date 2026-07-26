import { useState, useEffect } from 'react'

function UseEffect2(){   
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    const windowSize = ()=>{
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize", windowSize)

        return ()=>(
            window.removeEventListener("resize", windowSize)
        )})
        

    return(
        <>
        <p>Size: {width} x {height}</p>
        </>
    )
}

export default UseEffect2