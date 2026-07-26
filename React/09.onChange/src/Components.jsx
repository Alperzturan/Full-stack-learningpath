import { useState } from "react";

function Components(){
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState();
    const [instructions, setInstructions] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const changeName = (a)=>{
        setName(a.target.value)
    }
    const selectQuantity = (a)=>{
        setQuantity(a.target.value)
    }
    const giveDeliveryInstructions = (a)=>{
        setInstructions(a.target.value)
    }
    const choosePaymentMethod = (a)=>{
        setPayment(a.target.value)
    }
    const chooseShippingType = (a)=>{
        setShipping(a.target.value)
    }

    return(
        <>
        <input type="text" onChange={changeName} placeholder="Guest"/>
        <p>Name: {name}</p>

        <input type="number" onChange={selectQuantity} placeholder="1"/>
        <p>Quantity: {quantity}</p>

        <textarea placeholder="Enter delivery instructions"
            onChange={giveDeliveryInstructions}>
        </textarea>
        <p>Comment: {instructions}</p>

        <select onChange={choosePaymentMethod} id="select">
            <option value="">Select a Payment Method</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment Method: {payment}</p>

        <input type="radio" onChange={chooseShippingType}
         id="delivery" name="radio1" value="Delivery"/>
        <label htmlFor="delivery">Delivery</label><br />
        <input type="radio" onChange={chooseShippingType}
         id="pickUp" name="radio1" value="Pick Up"/>
        <label htmlFor="pickUp">Pick Up</label>
        <p>Name: {shipping}</p>
        </>
    )   
}

export default Components
