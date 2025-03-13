/* eslint-disable no-unused-vars */
import { ShoppingCart, Bolt, ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {}; // Destructure product safely

  if (!product) {
    return <div className="text-center text-red-500">No product data found.</div>;
  }

  // Calculate discount percentage (Assuming an original price for reference)
  const originalPrice = 799;
  const discountPercentage = ((originalPrice - product.price) / originalPrice) * 100;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-3 px-4 bg-blue-700 flex items-center justify-between sticky top-0 z-10">
        <div
          onClick={() => navigate(-1)}
          className="flex items-center text-black hover:text-gray-900"
        >
          <ArrowLeft className="w-8 h-8" />
        </div>
        <h1 className="text-xl font-bold text-gray-800">RGJASHOPs Products</h1>
        <div></div> {/* Placeholder for spacing */}
      </nav>

      {/* Product Details */}
      <div className="max-w-5xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Images */}
          <div className="flex flex-col space-y-4">
            <img
              src={product.images?.[0] || "/placeholder.jpg"}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="flex space-x-2">
              {product.images?.slice(0, 3).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="w-16 h-16 border border-gray-300 rounded-md cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 text-sm mt-1">{product.description}</p>

            {/* Ratings */}
            <div className="flex items-center space-x-2 mt-3">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                {product.ratings} ★
              </span>
              <span className="text-gray-500 text-sm">
                {product.category} - {product.subcategory}
              </span>
            </div>

            {/* Price */}
            <div className="mt-4">
              <div className="text-3xl font-semibold text-gray-900">₹{product.price}</div>
              <div className="text-gray-500 line-through text-sm">₹{originalPrice}</div>
              <div className="text-green-600 font-medium">
                {discountPercentage.toFixed(1)}% off
              </div>
            </div>

            {/* Stock Availability */}
            <div
              className={`mt-2 text-lg font-semibold ${
                product.stock > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {product.stock > 0 ? `In Stock (${product.stock} left)` : "Out of Stock"}
            </div>

            {/* Offers */}
            <div className="mt-4 space-y-2">
              <div className="text-green-600 font-medium">Extra ₹100 off</div>
              <div className="text-green-600 font-medium">{product.description}</div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Bank Offer:</span> 10% Cashback on selected credit
                cards
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Purchase Options
          </h3>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
            <button className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow w-full md:w-auto">
              <ShoppingCart className="w-5 h-5 mr-2" /> ADD TO CART
            </button>
            <button className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow w-full md:w-auto">
              <Bolt className="w-5 h-5 mr-2" /> BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
