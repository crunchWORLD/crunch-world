import React, {useState, useEffect, useReducer} from 'react';
import ProductCard from '../ProductCard.jsx'

const ProductDisplay = () =>{

    return (
        <div className="display-container">
            <ProductCard/>
        </div>
    )
}

export default ProductDisplay