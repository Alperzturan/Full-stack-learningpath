import { useState } from 'react'

function Component(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(true);

    const updateName = ()=>{
        setName("aaaa")
    }
    const incrementAge = ()=>{
        setAge(age+1)
    }
    const changeEmployementState = ()=>{
        setIsEmployed(!isEmployed) 
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Age</button>

            <p>Is Employed: {isEmployed ?  "Yes" : "No"}</p>
            <button onClick={changeEmployementState}>Set Is Employed</button>
        </div>
    )
}

export default Component