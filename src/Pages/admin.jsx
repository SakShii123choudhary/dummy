import { useState } from "react";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "admin123") {
      alert("Admin Logged In Successfully!");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[900px] h-[700px] rounded-lg shadow-lg"
      >
        <h2 className="text-6xl font-bold mb-6 text-center text-green-600 mt-8">
          Admin Login
        </h2>

        <div className="flex flex-col items-center ">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-4/5 p-8 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-900 "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-4/5 p-8 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-900 placeholder-2xl"
          />

          <button
            type="submit"
            className="w-4/5 bg-green-500 text-white text-3xl font-extrabold p-8 rounded-md hover:bg-green-600 transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
