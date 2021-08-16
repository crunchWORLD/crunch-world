import React, {useState, useEffect, useReducer, useContext} from 'react';
import ProductCard from '../ProductCard.jsx'
import useFetch from '../../hooks/useFetch.jsx'
import MaterialCards from '../MaterialCards.jsx'
import Cart from '../Cart.jsx';
import { AppContext } from "../App.jsx";
const ProductDisplay = () =>{
    
    const productArr = useFetch('/api/products')
      const [state, dispatch] = useContext(AppContext);

    //  const [cartItems, setCartItems] = useState(((arg = []) => 
    // JSON.parse(localStorage.getItem('cartItems'))
    // ));
    useEffect(() =>{
        console.log(state)
    },[state])
    // useEffect(() =>{
    //     localStorage.setItem('cartItems', JSON.stringify(cartItems))
    //   }, [cartItems]);
    
    return (
        <div className="display-container">
             {/* <button onClick={()=> setCartItems(cartItems.concat(products))}> */}
            {productArr.map(products =>{
                
                 return(<div key={products.stock + products.id}>

                 <MaterialCards key={products.id} description={products.description} name={products.name} origin={products.origin} price={products.price} img={products.img_url} />
                 <button onClick={()=> dispatch({ type: "ADD_CART", payload: products })}>click me</button> </div>)
            })}
          {/* <Cart key={'cart'} cartItems={[...cartItems]}/> */}
        </div>
    )
}

export default ProductDisplay