import React, {useState, useEffect, useReducer, useContext} from 'react';
import { AppContext } from "./App.jsx";
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Nav = () =>{

    return (
<nav className="nav-container">
   <div className="logo">
<Link to="/"><img src="../../images/logocook.png" id="cooklogo"/></Link>

   </div>
   <div className="interactables">
      <Link to="/cart"><ShoppingCartIcon/></Link>
   <br></br>  <Link to="/signin">Login</Link>
      
   </div>
    
</nav>
    )
} 


export default Nav;