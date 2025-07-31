import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated login logic (replace with real API call if needed)
    if (email && password) {
      console.log("Email:", email);
      console.log("Password:", password);

      // ✅ Simulate login success
      localStorage.setItem("token", "dummy_token");

      // ✅ Reset the visit count
      localStorage.removeItem("visitCount");

      // ✅ Redirect to dashboard
      navigate("/dashboard");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-blue-100">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[900px] h-[700px]">
        <h2 className="text-6xl font-extrabold text-center text-green-600 mb-6">
          User Sign In
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-700 font-bold text-3xl">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-12 py-8 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-900"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-bold text-3xl">Password</label>
            <input type="password" required value={password}onChange={(e) => setPassword(e.target.value)}className="w-full px-12 py-8 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 
             placeholder-gray-900 text-gray-900"   placeholder="Enter your password"/>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-8 rounded-lg hover:bg-blue-600 transition duration-300 font-extrabold text-2xl"
          >
            Sign In
          </button>
          <p className="text-center text-2xl text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-green-600 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
