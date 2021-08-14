import React, {useState, useEffect, useReducer} from 'react';
import ProductDisplay from './display_comps/ProductDisplay.jsx';
import Nav from './NavBar.jsx'

const App = () =>{
const [count, setCount] = useState(0);


  return (
    <div className="app-container">
      <div className="header">
        <Nav/>
      </div>
      <div className="app-products">
    <ProductDisplay/>
      </div>
      <section>{count}</section>
       <button onClick={()=> setCount((cs)=> cs + 1)}>+</button>
       <section>{count}</section>
       <button onClick={()=> setCount((cs)=> cs + 5)}>+</button>
    </div>
   
  );
}

export default App;
