import React, {useState, useEffect, useReducer, useContext} from 'react';
import MaterialCards from './MaterialCards.jsx'
import ProductDisplay from './display_comps/ProductDisplay.jsx';
import { AppContext } from "./App.jsx";

const Cart = () =>{
    const [state, dispatch] = useContext(AppContext);
    console.log(state);
    function poster(data){
        fetch('/api/order', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(data)
          })
            .then(resp => resp.json())
            .then((data) => {
              console.log(data);
            })
            
            .catch(err => console.log('Login error:', err));
        };
        const priceSum =(...args)=>{
              return  args.reduce((acc,cv) =>{
                    return acc + cv
                })
        }
        
        const sum = priceSum(state.map(products=> products.price))

        const totaler = (arr) =>{
            let count = 0
            for(let ele of arr) count +=ele
            return count
        }
        console.log('pricer', totaler(sum) )
    return(
        <div className="cart-container">
            {state.map((products, i) => {
                  return <MaterialCards key={i} description={products.description} name={products.name} origin={products.origin} price={products.price} img={products.img_url}/>
            })}
         <button onClick={()=> dispatch({ type: "CHECKOUT_CART", payload: state })} >Checkout</button>
        </div>
    )
}


export default Cart;