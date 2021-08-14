import React, {useState, useEffect, useReducer} from 'react';
import Cart from './Cart.jsx'
import Login from './Login.jsx'
const Nav = () =>{

    return (
<div className="nav-container">
   <div className="logo">
logo
   </div>
   <div className="interactables">
     <button><Cart/></button>  
      <button><Login/></button> 
   </div>
    
</div>
    )
} 


export default Nav;