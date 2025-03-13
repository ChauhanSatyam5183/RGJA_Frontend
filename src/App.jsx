import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./componenet/Home";
import Category from "./componenet/Category/Category";


function App() {
  
  return (
       
    <> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
      </Routes>
    </>
     

    
    
      
  );
}

export default App
