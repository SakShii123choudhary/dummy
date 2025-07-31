import React from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // ⛔ Remove token
    navigate("/login"); // 🔁 Redirect to login
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center justify-center px-12 py-8 bg-custom text-green-500 rounded-lg shadow-md 
        hover:bg-green-600 hover:text-white cursor-pointer transition duration-300 text-3xl tracking-widest text-center mb-4 font-bold"
    >
      <LogIn size={42} className="mr-4" />
      Logout
    </button>
  );
}
