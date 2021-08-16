import React, {useState, useEffect, useReducer, useContext} from 'react';
import ProductCard from '../ProductCard.jsx'
import useFetch from '../../hooks/useFetch.jsx'
import MaterialCards from '../MaterialCards.jsx'
import Cart from '../Cart.jsx';
import { AppContext } from "../App.jsx";
import Button from '@material-ui/core/Button';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
const ProductDisplay = () =>{

  const AddToCardButtonStyle = withStyles({
    root: {
      width: '400px',
    },
  })(Button);
    
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
                 <Button
                 variant="contained" 
                 onClick={()=> dispatch({ type: "ADD_CART", payload: products })}
                 >Add To Cart</Button> </div>)
            })}
          {/* <Cart key={'cart'} cartItems={[...cartItems]}/> */}
        </div>
    )
}

export default ProductDisplay