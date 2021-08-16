import React, {useState, useEffect, useReducer} from 'react';
import ProductCard from '../ProductCard.jsx'
import useFetch from '../../hooks/useFetch.jsx'
import MaterialCards from '../MaterialCards.jsx'
const ProductDisplay = () =>{
    
    const productArr = useFetch('/api/products')

    return (
        <div className="display-container">
            
            {productArr.map(products =>{
                
                 return <MaterialCards key={products.id} description={products.description} name={products.name} origin={products.origin} price={products.price} img={products.img_url} stock={products.stock}/>
            })}
           
        </div>
    )
}

export default ProductDisplay