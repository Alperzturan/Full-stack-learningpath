import { useState } from "react";

function ArrayOfObjects(){
    
    const [year, setYear] = useState(2026)
    const [maker, setMaker] = useState("")
    const [model, setModel] = useState("")
    const [car, setCar] = useState([])

    const changeYear = (e)=>{
        setYear(e.target.value)
    }
    const changeMaker = (e)=>{
        setMaker(e.target.value)
    }
    const changeModel = (e)=>{
        setModel(e.target.value)
    }
    const changeCar = ()=>{
        const newCar = {
            newYear: year,
            newMaker: maker,
            newModel: model
        }
        setCar(prevCar=>[...prevCar, newCar])

        setYear(2026)
        setMaker("")
        setModel("")
    }
    const removeCar = (index)=>{
        setCar(car.filter((_, i)=> i!==index))
    }

    
    return(
        <>
        <h1>List of Car Objects</h1>
        <ul>
            {car.map((oneCar, index)=>(
                <li key={index} onClick={()=>removeCar(index)}>
                    {oneCar.newYear} {oneCar.newMaker} {oneCar.newModel}
                </li>
            ))}
        </ul>

        <input type="number" value={year} 
        onChange={changeYear} placeholder="Enter year"/><br />
        <input type="text" value={maker} 
        onChange={changeMaker} placeholder="Enter car maker"/><br />
        <input type="text" value={model} 
        onChange={changeModel} placeholder="Enter car model"/><br />
        <button onClick={changeCar}>Add Car</button>

        </>
    )
}
export default ArrayOfObjects