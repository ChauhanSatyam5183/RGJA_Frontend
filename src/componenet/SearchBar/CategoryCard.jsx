import { Star, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CategoryCard({ product }) {
  const navigate = useNavigate();

  function handleClick() {
    const data = { product };
    navigate("/Product", { state: data });
  }

  return (
    <div
      className="flex flex-col sm:flex-row items-center sm:justify-between border p-4 my-5 rounded-lg shadow-md bg-white 
                 max-w-[90%] md:max-w-[900px] w-full mx-auto cursor-pointer gap-4"
      onClick={handleClick}
    >
      {/* Product Image */}
      <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] flex-shrink-0">
        <span className="absolute top-1 left-1 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
          Bestseller
        </span>
        <img
          src={
            product.images?.length > 0
              ? product.images[0]
              : "/placeholder.jpg"
          }
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col text-center sm:text-left w-full sm:w-[40%]">
        <h2 className="text-base sm:text-lg font-semibold">{product.name}</h2>

        {/* Ratings */}
        <div className="flex items-center justify-center sm:justify-start text-green-700 font-semibold text-xs sm:text-sm mt-1">
          <span className="bg-green-700 text-white px-2 py-0.5 rounded flex items-center">
            {product.ratings} <Star size={14} className="ml-1" />
          </span>
        </div>

        {/* Specifications */}
        <ul className="text-xs sm:text-sm text-gray-700 mt-2 space-y-1">
          <li>{product.brand}</li>
          <li className="text-red-500">{product.category}</li>
          <li className="text-blue-500">{product.description}</li>
        </ul>

        <h3 className="text-sm sm:text-xl font-bold mt-1">Stock {product.stock}</h3>
      </div>

      {/* Pricing & Offers */}
      <div className="flex flex-col text-center sm:text-right w-full sm:w-[30%]">
        <h3 className="text-base sm:text-2xl font-bold">₹{product.price}</h3>
        <p className="text-gray-500 line-through text-xs sm:text-sm">₹79,900</p>
        <p className="text-green-600 font-semibold text-xs sm:text-sm">{product.discount}% off</p>
        <p className="text-purple-600 font-semibold text-xs sm:text-sm mt-1">Saver Deal</p>

        <div className="flex items-center justify-center sm:justify-end text-blue-600 text-xs sm:text-sm mt-2">
          <ShieldCheck size={16} className="mr-1 text-blue-600" />
          Assured
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
