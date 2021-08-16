import React, {useState, useEffect, useReducer} from 'react';
import ProductDisplay from './display_comps/ProductDisplay.jsx';
import Cart from './Cart.jsx'
import Login from './Login.jsx'
import Nav from './NavBar.jsx'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from './Signup.jsx';
const App = () =>{
const [count, setCount] = useState(0);


  return (
    <Router>

    <div className="app-container">
      
      <Nav/> 
      <Switch>
      <Route exact path="/">
        
        <ProductDisplay/>
      </Route>
      <Route exact path="/cart">
        <Cart/>
        </Route>
        <Route exact path="/signin">
        <Login/>
        </Route>
        <Route exact path="/signup">
         <SignUp/>
        </Route>
  </Switch>
     
      <section>{count}</section>
       <button onClick={()=> setCount((cs)=> cs - 1)}>+</button>
       <section>{count}</section>
       <button onClick={()=> setCount((cs)=> cs + 5)}>+</button>
       
    </div>
   </Router>
  );
}

export default App;
