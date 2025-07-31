import { BrowserRouter as Router, Routes, Route,  Link } from "react-router-dom";
import Dashboard from './Pages/dashboard'
import Service from './Pages/service'
import Booking from './Pages/booking'
import Admin from './Pages/admin'
import Help from './Pages/help'
import Sigin from './Pages/sigin'
import Activity from './Pages/activity'
import Heading from './assets/heading.png'
import Header from './assets/header.png'
import { Bell, Settings, MessageCircle,  } from 'lucide-react';
import Delivery from './assets/delivery.png'
import { Search } from "lucide-react";
import {LayoutDashboard, History, Briefcase, CalendarCheck, Shield, LifeBuoy,LogIn} from "lucide-react";
import RouterWatcher from './components/routerwatcher'
import { LogOut } from "lucide-react";

function App() {
   return (
    <div className="App bg-white min-h-screen">
  <header className="flex items-center bg-customTeal h-42  px-8shadow-md">
  <img src={Heading} alt="Logo" className="h-[190px] mr-4 ml-12" />
   <img src={Header} alt="Logo" className="h-38 ml-6" />
    <div className="flex-1 mx-12">
  <div className="flex h-24 bg-white items-center w-[70%] mx-[30%] border-8 border-green-500 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400">
    <Search size={32} className="text-green-600 mr-3 "fill="white" />
    <input
      type="text"
      placeholder="Search here..."
      className="bg-transparent outline-none text-lg w-full"
    />
  </div>
</div>
<div className="flex items-center space-x-12 text-white text-2xl">
  
  <div className="relative group">
<MessageCircle size={68} className="text-green-600 cursor-pointer hover:text-gray-200" /> <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex bg-green-600 text-white text-xl rounded px-2 py-1"> Messages </div> </div> 
<div className="relative group">
<Bell size={68} className="text-green-600 cursor-pointer hover:text-gray-200" />
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex bg-green-600 text-white text-xl rounded px-2 py-1">  Notifications</div></div>
<div className="relative group">
<Settings size={68} className="text-green-600 cursor-pointer hover:text-gray-200" />
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex bg-green-600 text-white text-xl rounded px-2 py-1">Settings</div> </div>
<div className="relative group">
<LogOut size={68} className="text-green-600 cursor-pointer hover:text-gray-200"/>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex bg-green-600 text-white text-xl rounded px-2 py-1">Logout</div></div></div>
 </header>

     
 <Router>  <RouterWatcher />
   <div className="flex  flex-1 overflow-hidden h-screen">
  <div className="w-1/5 bg-customTeal  justify-top shadow-lg p-5 flex flex-col  mt-2%  ">
    <h2 className="text-2xl font-bold text-green-600 mb-10 text-center text-3xl">Explore</h2>
    
    <nav className="flex flex-col space-y-4 text-gray-700 font-medium  ">
   <button className="flex items-center justify-center	px-12 py-8 bg-custom text-green-500 rounded-lg shadow-md 
       hover:bg-green-600 hover:text-white cursor-pointer transition duration-300 text-3xl 	tracking-widest text-center 	font-bold "> <LayoutDashboard size={42} /> 
         <Link to="/dashboard" >Dashboard</Link></button>
         <button className="flex items-center justify-center	px-12 py-8 bg-custom text-green-500 rounded-lg shadow-md 
       hover:bg-green-600 hover:text-white cursor-pointer transition duration-300 text-3xl 	tracking-widest text-center mb-4 	font-bold "><History size={42} /> 
        <Link to="/activity" >Activity</Link></button>
       <button className="flex items-center justify-center	px-12 py-8 bg-custom text-green-500 rounded-lg shadow-md 
       hover:bg-green-600 hover:text-white cursor-pointer transition duration-300 text-3xl 	tracking-widest text-center 	font-bold "> <Briefcase size={42} /> 
       <Link to="/service">Service</Link></button>
        <button className="flex items-center justify-center	px-12 py-8 bg-custom text-green-500 rounded-lg shadow-md 
       hover:bg-green-600  hover:text-white cursor-pointer transition duration-300 text-3xl 	tracking-widest text-center 	font-bold "><CalendarCheck size={42} /> 
        <Link to="/booking" >Booking</Link></button>
         <button className="flex items-center justify-center	px-12 py-8 bg-custom text-green-500 rounded-lg shadow-md 
       hover:bg-green-600 hover:text-white cursor-pointer transition duration-300 text-3xl 	tracking-widest text-center 	font-bold "><Shield size={42} /> 
        <Link to="/admin" >Admin</Link></button>
         <button className="flex items-center justify-center	px-12 py-8 bg-custom text-green-500 rounded-lg shadow-md 
       hover:bg-green-600 hover:text-white cursor-pointer transition duration-300 text-3xl 	tracking-widest text-center 	font-bold "><LifeBuoy size={42} /> 
        <Link to="/help" >Help</Link></button>
         <button className="flex items-center justify-center	px-12 py-8 bg-custom text-green-500 rounded-lg shadow-md 
       hover:bg-green-600 hover:text-white cursor-pointer transition duration-300 text-3xl 	tracking-widest text-center mb-4 	font-bold "><LogIn size={42} /> 
        <Link to="/login" >Sigin</Link></button>

        </nav>

        <div className="w-[100%] h-[20%] shadow-md bg-custom  flex flex-col items-center justify-center mb-2 mt-32 overflow-hidden">
  <img src={Delivery} alt="Delivery Boy" className="h-36 animate-float" />
  <h1 className="text-center text-2xl text-green-900 font-bold">Speedy Service You Can Trust! </h1>
  <p className="text-center text-green-800 font-semibold mt-2">
   "Reliable services,Delivered with care.Your solution is justA click away!"</p>
</div></div>
       
       <div className="w-screen  overflow-auto">
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/activity" element={<Activity />}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/booking" element={<Booking />}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/help" element={<Help />}/>
      <Route path="/login" element={<Sigin />}/>
      </Routes>
      
      </div>
      </div>
      </Router>
  
  
  
  
  
  
 
</div> );
}

export default App;
