import React from "react"
import { useSelector } from "react-redux"


const AddToCard = () =>{
    const selector = useSelector((state)=>state.cart.value);
    console.log(selector);
    return(
       
            <div className="cart">
               <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" />
                <span className="cart-icon">{selector}</span>
               
            </div>
       
    )
}

export default AddToCard