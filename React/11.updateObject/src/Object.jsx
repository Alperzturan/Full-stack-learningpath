import { useState } from "react";

function Object(){
    const [car, setCar] = useState({
        year: 2024,
        maker: "Ford",
        model: "Mustang"
    })

    const changeYear = (e)=>{
        setCar((prevCar)=>({...prevCar, year: e.target.value}))
    }
    const changeMaker = (e)=>{
        setCar((prevCar)=>({...prevCar, maker: e.target.value}))
    }
    const changeModel = (e)=>{
        setCar((prevCar)=>({...prevCar, model: e.target.value}))
    }

    return(
        <>
        <p>The car you chose {car.year} {car.maker} {car.model}</p>

        <input type="number" value={car.year} onChange={changeYear}/><br />
        <input type="text" value={car.maker} onChange={changeMaker}/><br />
        <input type="text" value={car.model} onChange={changeModel}/>

        </>
    )
}
export default Object