import { useState } from "react";

function Array(){
    const [foods, setFoods] = useState(["apple", "orange", "banana"])

    const addFood = ()=>{
        const newFood = document.getElementById("foodName").value
        setFoods(prevFoods=>[...prevFoods, newFood])
        document.getElementById("foodName").value = ""
    }

    const deleteFood = (index)=>{
        setFoods(foods.filter((_,i)=>
            i !== index
        ))
    }
    return(
        <>
            <h1>List of Food</h1>
            <ul>
                {foods.map((food, index)=>
                    <li key={index} onClick={()=>deleteFood(index)}>{food}</li>
                )}
            </ul>

            <input type="text" placeholder="Enter food name" id="foodName"/>
            <button onClick={addFood}>Add</button>
        </>
    )
}

export default Array