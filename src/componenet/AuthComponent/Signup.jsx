import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("https://rgja.onrender.com/v1/User", formData);
      if (response.data.success) {
        setMessage("You are signed up successfully!");
      } else {
        setError(response.data.message || "An error occurred");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to connect to the server");
    }
  };

  return (
    <>
    {/* Logo */}
    <div className="md:text-2xl h-[30px] text-center font-bold text-blue-600">
          RGJA<span className="text-yellow-500">SHOP</span> <span className="text-blue-500 ">s✨</span>
        </div>
    <div className="flex h-screen items-center justify-center bg-blue-100 ">
      

      {/* Right Section */}
      <div className="bg-white w-full md:w-1/3 p-8 rounded-lg shadow-md ">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Create an Account</h2>
          {message && <p className="text-green-600">{message}</p>}
          {error && <p className="text-red-600">{error}</p>}

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />

          {/* Address */}
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />

          <p className="text-xs text-gray-500">
            By continuing, you agree to our{" "}
            <span className="text-blue-500 cursor-pointer">Terms of Use</span> and{" "}
            <span className="text-blue-500 cursor-pointer">Privacy Policy</span>.
          </p>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-all"
          >
            SIGN UP
          </button>
      
      <Link to="/">
          <div className="text-center">
            <button className="w-full border p-3 rounded-lg mt-4 text-blue-500 hover:bg-gray-100">
              Existing User? Log in
            </button>
          </div>
          </Link>
        </form>
      </div>
    </div>
    
    </>
  );
}

export default Signup;
