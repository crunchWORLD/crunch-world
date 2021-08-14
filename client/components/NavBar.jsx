import React, {useState, useEffect, useReducer} from 'react';
import Cart from './Cart.jsx'
const Nav = () =>{

    return (
<div className="nav-container">
   <div className="logo">

   </div>
   <div className="interactables">
       <Cart/>
   </div>
    
</div>
    )
} 


export default Nav;