import { Star, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CategoryCard({ product }) {
  const navigate = useNavigate();

  function handleClick() {
    // Navigate to another page with product data
    const data = { product };
    navigate("/Product", { state: data });
  }

  return (
    <div
      className="flex justify-around mt-4 border p-4 rounded-lg shadow-md bg-white md:max-w-[900px] w-full mx-auto cursor-pointer"
      onClick={handleClick} // ✅ Corrected the onClick event
    >
      {/* Product Image */}
      <div className="relative min-w-[100px] min-h-[100px]">
        <span className="absolute top-1 left-1 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
          Bestseller
        </span>
        <img
          src={
            product.images?.length > 0
              ? "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/474e6e58-1894-4378-86f1-168cc7266d1a.png"
              : "/placeholder.jpg"
          }
          alt={product.name}
          className="w-[100px] h-[100px] mt-12 md:w-[200px] md:h-[200px] object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="">
        <h2 className="text-lg font-semibold">{product.name}</h2>

        {/* Ratings */}
        <div className="flex items-center text-green-700 font-semibold text-sm mt-1">
          <span className="bg-green-700 text-white px-2 py-0.5 rounded flex items-center">
            {product.ratings} <Star size={14} className="ml-1" />
          </span>
        </div>

        {/* Specifications */}
        <ul className="text-sm text-gray-700 mt-2 space-y-1">
          <li>{product.brand}</li>
          <li className="text-red-500">{product.category}</li>
        </ul>
        <h3 className="md:text-2xl font-bold">Stock {product.stock}</h3>
      </div>

      {/* Pricing & Offers */}
      <div className="">
        <h3 className="md:text-2xl font-bold">₹{product.price}</h3>
        <p className="text-gray-500 line-through">₹79,900</p>
        <p className="text-green-600 font-semibold">6% off</p>
        <p className="text-purple-600 font-semibold text-sm mt-1">Saver Deal</p>

        <div className="flex items-center justify-end text-blue-600 text-sm mt-2">
          <ShieldCheck size={16} className="mr-1 text-blue-600" />
          Assured
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
