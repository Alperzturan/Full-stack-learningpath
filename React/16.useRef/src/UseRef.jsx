import { useState, useEffect, useRef } from 'react'

function UseRef(){
    /* const [inputRef1, setInputRef1] = useState() */ //use state ve use refin farkı
    //use state her değişkeni değiştirince sayfayı güncellerken use ref sadece ilk değişimde yapar
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()

    useEffect(()=>{
        console.log("re-rendered")
    })

    const buttonClick1 = ()=>{
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "Yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }
    const buttonClick2 = ()=>{
        inputRef2.current.focus()
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = "Yellow"
        inputRef3.current.style.backgroundColor = ""
    }
    const buttonClick3 = ()=>{
        inputRef3.current.focus()
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = "Yellow"
    }
    return(
        <>
        <button onClick={buttonClick1}>press me 1</button>
        <input type="text" ref={inputRef1}/><br />
        <button onClick={buttonClick2}>press me 2</button>
        <input type="text" ref={inputRef2}/><br />
        <button onClick={buttonClick3}>press me 3</button>
        <input type="text" ref={inputRef3}/>
        </>
    )
}

export default UseRef