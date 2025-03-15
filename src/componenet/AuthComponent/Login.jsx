
function Login({onClose }) {
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-lg w-[500px] flex">
            {/* Left Section */}
            <div className="w-1/3 bg-blue-600 p-6 text-white flex flex-col justify-center rounded-l-xl">
              <h2 className="text-xl font-bold">Login</h2>
              <p className="text-sm mt-2">
                Get access to your Orders, Wishlist, and Recommendations.
              </p>
            </div>
    
            {/* Right Section - Form */}
            <div className="w-2/3 p-6 relative">
              {/* Close Button */}
              <button className="absolute top-2 right-3 text-gray-500" onClick={onClose}>
                ✖
              </button>
    
              {/* Input Fields */}
              <form className="space-y-5">
                <div>
                  <label className="text-gray-600 text-sm">Enter Email/Mobile number</label>
                  <input
                    type="text"
                    placeholder="Enter Email/Mobile"
                    className="w-full border-b border-gray-400 py-2 outline-none focus:border-blue-500"
                  />
                </div>
    
                {/* Request OTP Button */}
                <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
                  Request OTP
                </button>
    
                {/* Terms & Privacy Policy */}
                <p className="text-xs text-gray-600">
                  By continuing, you agree to RGJASHOPs{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Privacy Policy
                  </a>.
                </p>
    
                {/* Signup Link */}
                <p className="text-sm text-center text-blue-500 hover:underline cursor-pointer">
                  New to Flipkart? Create an account
                </p>
              </form>
            </div>
          </div>
        </div>
  );
}

export default Login
