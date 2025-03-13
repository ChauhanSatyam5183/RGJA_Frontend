import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import UseDebounce from "../Debounce/Debouncing";
import Banner1 from "../Banner/Banner1";
import Banner2 from "../Banner/Banner2";
import Work from "../working/Work";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";

import { useNavigate } from "react-router-dom";




function Navbar1() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const[search,setSearch]=useState(); 
  const debounce=UseDebounce((e)=>{
    setSearch(e.target.value);
   }); 

  const navigate = useNavigate(); 
 function handleclick(name){

  //naviget to another page 
  navigate(`/category?Name=${name}`);
 }

  return ( 

  <>
    <div className="w-full fixed top-0 z-[50] border-b shadow-md  bg-blue-100">
      {/* Top Navbar */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-3">
        
        {/* Logo */}
        <div className="md:text-2xl  font-bold text-blue-600">
          RGJA<span className="text-yellow-500">SHOP</span> <span className="text-blue-500 ">s✨</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block relative flex-grow max-w-lg md:mx-4 "> {/* ✅ Limited max width */}
          <FaSearch className="absolute left-3  top-1/3 transform  -translate-y-1/2 text-gray-500" />
          <input
          
            type="search"
            onChange={debounce}
          
            placeholder="Search for Products,brand and more.."
            className="w-auto md:w-full   p-2 pl-10 text-sm border rounded-lg bg-blue-50 focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Icons & Links */}
        <div className="flex items-center md:gap-6">
          
          {/* Login Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className="flex items-center gap-1 text-gray-700 hover:text-black border px-3 py-1 mx-4 rounded-lg transition"
            >
              <FaUser className="text-lg" />
              <span>Login</span>
              
            </button>
            
            {isLoginOpen && (
              <div className="absolute right-0 mt-2 bg-blue-100 shadow-lg rounded-lg w-32 p-2 border z-10 cursor-pointer">
                <a  className="block px-3 py-2 hover:bg-blue-300 ">
                  Login
                </a>
                <a className="block px-3 py-2 hover:bg-blue-300">
                  Signup
                </a>
              </div>
            )}
          </div>

          {/* Cart */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            <FaShoppingCart className="text-lg" />
            <span>Cart</span>
          </div>
        </div> {/* ✅ Properly closed this div */}

      </div>

      
      <div className="block  md:hidden  mt-4 inset-0   flex justify-center">
  <div className="relative w-[60%] max-w-lg"> 
    {/* Search Icon */}
    <FaSearch className="absolute left-3 top-1/3 transform -translate-y-1/2  text-gray-500" />

    {/* Search Input */}
    <input
      type="search"
      onChange={debounce}
      
      placeholder="Search for Products and more.."
      className="p-2 pl-10 text-xs border rounded-lg bg-blue-50 focus:ring focus:ring-blue-200 w-full"
    />
  </div>
</div>


    
<div className="max-w-screen-xl mt-4 bg-blue-400 text-xs py-2 mx-auto  md:text-xl flex flex-row items-center justify-around   md:font-medium">
   <div className="cursor-pointer hover:text-blue-500  px-3 md:text-1xl ">EXPLORE</div>
   <div className="cursor-pointer hover:text-blue-500 " onClick={() => handleclick("Grocery")}>Grocery & Kitchen</div>
<div className="cursor-pointer hover:text-blue-500 " onClick={() => handleclick("Snacks")}>Snacks & Drinks</div>
<div className="cursor-pointer hover:text-blue-500 " onClick={() => handleclick("Beauty")}>Beauty & PersonalCare</div>
<div className="cursor-pointer hover:text-blue-500 " onClick={() => handleclick("Household")}>Household & Essentials</div>

</div>

      

    
    </div>
    {search ? (
        <div>
          <SearchBar name={search}  />
        </div>
      ) : (
        <div>
          <Banner1 />
          <Banner2 />
          <Work/>
          <Footer />
        </div>
      )}
</>
  );
}

export default Navbar1;
