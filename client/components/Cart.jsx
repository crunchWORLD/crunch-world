import React, {useState, useEffect, useReducer, useContext} from 'react';
import MaterialCards from './MaterialCards.jsx'
import ProductDisplay from './display_comps/ProductDisplay.jsx';
import { AppContext } from "./App.jsx";
const Cart = () =>{
    const [state, dispatch] = useContext(AppContext);
    console.log(state);
    return(
        <div className="cart-container">
            {state.map(products =>{
                  return <MaterialCards key={products.id} description={products.description} name={products.name} origin={products.origin} price={products.price} img={products.img_url}/>
            })}
         
        </div>
    )
}


export default Cart;