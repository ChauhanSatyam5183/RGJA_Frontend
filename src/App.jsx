import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./componenet/Home";
import Category from "./componenet/Category/Category";
import Product from "./componenet/Product/Product";


function App() {
  
  return (
       
    <> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/Product" element={<Product/>}/>
      </Routes>
    </>
     

    
    
      
  );
}

export default App
