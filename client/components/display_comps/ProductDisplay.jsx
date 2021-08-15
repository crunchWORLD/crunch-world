import React, {useState, useEffect, useReducer} from 'react';
import ProductCard from '../ProductCard.jsx'
import useFetch from '../../hooks/useFetch.jsx'
const ProductDisplay = () =>{
    const productArr = useFetch('/api/products')
console.log(productArr)
    return (
        <div className="display-container">
            {/* <pre>{productArr}</pre> */}
            <ProductCard/>
        </div>
    )
}

export default ProductDisplay