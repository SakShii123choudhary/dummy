import { FaTools } from "react-icons/fa"; 
import { FaWrench } from "react-icons/fa";
import { FaBroom } from "react-icons/fa";
import { FaSpa } from "react-icons/fa";
import { FaStar } from "react-icons/fa"; 
import Electrician from '../assets/electrician.png';
import Plumber from '../assets/plumber.png'
import CleaningLogo from '../assets/cleaninglogo.png'
import SalonLogo from '../assets/salonlogo.png'
export default function Service(){
    return(
        <div>
 <h1 className="text-green-300 ml-12 font-bold text-5xl mt-6">Service</h1>
 
<div className="w-[100%] flex flex-row bg-white text-steal p-4 gap-x-6  mt-6  mb-4h-[100px]  font- lato font-bold text-6xl   "> Popular this week</div>
<div className="w-[100%] flex flex-row  p-4 gap-x-6  mt-2  mb-12 h-[300px] animate-scrollX">
<div className="w-[40%] p-6 rounded-2xl shadow-md h-[250px] bg-gradient-to-r from-[#E67E22] to-[#D35400] ">
     <div className="flex items-center gap-4">
    <FaTools className="w-24 h-24 text-blue-700 bg-white p-2 rounded-full shadow-md" />
 <div><h2 className="text-4xl font-extrabold font-roboto text-blue-900">Electrician Service</h2>
      <p className="text-xl text-white-800">Experience: 5+ years</p> </div> </div>
 <p className="text-m mt-4"> Professional electrical repair, maintenance, and installation. On-time, certified and customer-trusted. </p>
 <div className="flex justify-between items-center mt-4">
    <span className="text-xl font-medium bg-white text-blue-800 px-3 py-1 rounded-full shadow-m"> ₹499 / visit </span>
    <span className="bg-blue-500 text-white text-xl px-2 py-2 rounded-full font-bold">  Verified</span>
  </div></div>
   
<div className="w-[40%] p-6 rounded-2xl shadow-md h-[250px] bg-gradient-to-r from-[#76D7C4] to-[#73C6B6]">
    <div className="flex items-center gap-4">
      <FaWrench className="w-24 h-24 text-blue-700 bg-white p-2 rounded-full shadow-md" />

      <div> <h2 className="text-4xl font-extrabold font-roboto text-blue-900">Plumber Service</h2>
        <p className="text-xl text-white">Experience: 7+ years</p> </div> </div>
<p className="text-m mt-4 text-white">Trusted plumbing experts for leak repairs, fittings, and bathroom installations. 24/7 availability. </p>
 <div className="flex justify-between items-center mt-4">
      <span className="text-xl font-medium bg-white text-blue-800 px-3 py-1 rounded-full shadow-md"> ₹399 / visit</span>
      <span className="bg-blue-500 text-white text-xl px-2 py-2 rounded-full font-bold">Verified </span> </div></div>
   
   
   <div className="w-[40%] p-6 rounded-2xl shadow-md h-[250px] bg-gradient-to-r from-[#7FB3D5] to-[#85C1E9]">
    <div className="flex items-center gap-4">
      <FaBroom className="w-24 h-24 text-blue-700 bg-white p-2 rounded-full shadow-md" /> <div>
<h2 className="text-4xl font-extrabold font-poppins text-blue-900">Home Cleaning</h2><p className="text-xl text-white">Experience: 4+ years</p> </div></div>
 <p className="text-m mt-4 text-white"> Deep cleaning, kitchen, bathroom & sofa services by trained professionals. Safe & hygienic products</p>
 <div className="flex justify-between items-center mt-4">
      <span className="text-xl font-medium bg-white text-blue-800 px-3 py-1 rounded-full shadow-md"> ₹699 / visit</span>
      <span className="bg-blue-500 text-white text-xl px-2 py-2 rounded-full font-bold"> Verified</span></div> </div>

 <div className="w-[40%] p-6 rounded-2xl shadow-md h-[250px] bg-gradient-to-r from-[#F7DC6F] to-[#F8C471]">
    <div className="flex items-center gap-4">
    <FaSpa className="w-24 h-24 text-pink-600 bg-white p-2 rounded-full shadow-md" /><div>
 <h2 className="text-4xl font-extrabold font-poppins text-purple-900">Home Salon</h2> <p className="text-xl text-white">Experience: 6+ years</p></div> </div>
 <p className="text-m mt-4 text-white">
      At-home beauty & grooming services for women. Haircuts, facials, waxing — by certified beauticians.</p>
<div className="flex justify-between items-center mt-4">
      <span className="text-xl font-medium bg-white text-purple-800 px-3 py-1 rounded-full shadow-md"> ₹899 / session  </span>
      <span className="bg-blue-500 text-white text-xl px-2 py-2 rounded-full font-bold">Verified</span></div> </div>
 </div>





{/*electrician*/}

<div className="w-[100%] flex flex-row bg-white text-steal p-4 gap-x-6  mt-12  mb-4h-[100px]   font-bold text-6xl  "> All Service</div>
     <div className="w-[100%] flex flex-row  p-4 gap-x-6    h-[800px]">

<div className="w-[40%] mt-6 bg-reded p-6 rounded-2xl shadow-2xl h-[700px] flex flex-col justify-between  ">
 <div className="flex flex-col items-center text-center">
    <img src= {Electrician} alt="Electrician Logo" className="w-36 h-36 mb-4 rounded-full shadow-3xl"/>
    <h2 className="text-6xl font-extrabold text-blue-900 font-roboto">Electrician</h2>
    <p className="text-2xl font-bold text-gray-800 mt-1 ">Experience: 5+ Years</p></div>
 <p className="text-5xl  font-bold text-gray-700 flex items-center   justify-center gap-2 ">
       Rating:
      <span className="flex text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </span>
    </p>
  <div className="space-y-3 px-4">
      
    <p className="text-2xl  font-bold text-gray-700  ">
     :  Specialization: Wiring, Fan Repair, Lighting
    </p>
    <p className="text-2xl  font-bold text-gray-700">
      : Type: On-Demand / Scheduled
    </p>
     <p className="text-2xl  font-bold text-gray-700"> :Salary: ₹18,000 – ₹25,000 / month</p>
  
  </div>
   
  <div className="text-center mt-2">
    <button className="bg-[#E74C3C] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300">
      Provided Service </button></div></div>



{/* plumber*/}
   <div className="w-[40%] mt-6 bg-[#AED6F1] p-6 rounded-2xl shadow-2xl h-[700px] flex flex-col justify-between">
  
  <div className="flex flex-col items-center text-center">
 <img src={Plumber} alt="Plumber Logo" className="w-36 h-36 mb-4 rounded-full shadow-3xl" />
    <h2 className="text-6xl font-extrabold text-blue-900 font-roboto">Plumber</h2>
    <p className="text-2xl font-bold text-gray-800 mt-1">Experience: 4+ Years</p> </div>
 <p className="text-5xl font-bold text-gray-700 flex items-center justify-center gap-2">
    Rating: <span className="flex text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
      ))}  </span> </p>
 <div className="space-y-3 px-4">
    <p className="text-2xl font-bold text-gray-700">
      : Specialization: Pipe Fixing, Leakage, Tap Installation
    </p>
    <p className="text-2xl font-bold text-gray-700">
      : Type: Emergency / Regular
    </p>
    <p className="text-2xl font-bold text-gray-700">
      : Salary: ₹15,000 – ₹22,000 / month
    </p>
  </div> <div className="text-center mt-2">
    <button className="bg-[#5DADE2] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300">
      Provided Service
    </button>
  </div>
</div>


{/*home cleaning*/}
<div className="w-[40%] mt-6 bg-[#A2D9CE] p-6 rounded-2xl shadow-2xl h-[700px] flex flex-col justify-between">
<div className="flex flex-col items-center text-center">
    <img src={CleaningLogo} alt="Cleaning Logo" className="w-36 h-36 mb-4 rounded-full shadow-3xl" />
    <h2 className="text-6xl font-extrabold text-green-800 font-roboto">Home Cleaning</h2>
    <p className="text-2xl font-bold text-gray-800 mt-1">Experience: 3+ Years</p>
  </div>

  
  <p className="text-5xl font-bold text-gray-700 flex items-center justify-center gap-2">
    Rating:
    <span className="flex text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </span>
  </p>

  
  <div className="space-y-3 px-4">
    <p className="text-2xl font-bold text-gray-700">
      : Specialization: Kitchen, Bathroom, Full-Home Cleaning
    </p>
    <p className="text-2xl font-bold text-gray-700">
      : Type: One-Time / Subscription
    </p>
    <p className="text-2xl font-bold text-gray-700">
      : Salary: ₹12,000 – ₹20,000 / month
    </p>
  </div>

  <div className="text-center mt-2">
    <button className="bg-[#45B39D] text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300">
      Provided Service
    </button>
  </div></div>

  



{/*homesalon*/}
  <div className="w-[40%] mt-6 bg-[#E8DAEF] p-6 rounded-2xl shadow-2xl h-[700px] flex flex-col justify-between">
<div className="flex flex-col items-center text-center">
    <img src={SalonLogo} alt="Cleaning Logo" className="w-36 h-36 mb-4 rounded-full shadow-3xl" />
    <h2 className="text-6xl font-extrabold text-green-800 font-roboto">Home Salon</h2>
    <p className="text-2xl font-bold text-gray-800 mt-1">Experience: 4+ Years</p>
  </div>

  
  <p className="text-5xl font-bold text-gray-700 flex items-center justify-center gap-2">
    Rating:
    <span className="flex text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </span>
  </p>

  
  <div className="space-y-3 px-4">
    <p className="text-2xl font-bold text-gray-700">
     : Specialization: Haircut, Facial, Makeup, Manicure
    </p>
    <p className="text-2xl font-bold text-gray-700">
       : Type: Appointment-Based / Packages
    </p>
    <p className="text-2xl font-bold text-gray-700">
      : Salary: ₹15,000 – ₹25,000 / month
    </p>
  </div>

  <div className="text-center mt-2">
    <button className="bg-[#A569BD] text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300">
      Provided Service
    </button>
  </div></div>
   
   
   
   
   
   </div>
</div>
        
    )
}