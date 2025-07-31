
import Calendar from '../components/calendar'
import { FaRegCalendarAlt } from "react-icons/fa";
import ScheduleBoard from '../components/scheduleBoard';



export default function Booking (){
    return(<div className="flex w-full min-h-screen">
           
    <div className="w-[60%] bg-white p-4">
     <h1 className="text-green-300 ml-12 font-bold text-4xl mt-6">Booking</h1>
    <div className="w-[100%] flex flex-row bg-white text-steal p-4 gap-x-6  mt-12  mb-4h-[100px]   font-bold text-6xl"> Upgoing Booking</div>


<div className="flex flex-row w-full bg-purple-300 p-4 h-[350px] mt-2 gap-x-12 justify-center rounded-2xl">
  {/* UI Design Basic */}
  <div className="w-[50%] bg-white p-6 rounded-2xl shadow-xl h-[300px] flex flex-col justify-between">
    <div className="flex items-center gap-x-4">
      <div className="w-36 h-36 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">
        75%
      </div>
      <div className="text-5xl font-bold text-gray-800">Home Cleaning</div>
    </div> <div className="text-3xl  font-semibold text-gray-400">Provider : mr gupta</div>
    <div className="mt-6">
      <div className="w-full h-3 bg-gray-200 rounded-full">
        <div className="h-full bg-green-500 rounded-full" style={{ width: '70%' }}></div>
      </div>
    </div>
  </div>

  {/* Fullstack Developer */}
  <div className="w-[50%] bg-white p-6 rounded-2xl shadow-md h-[300px] flex flex-col justify-between">
    <div className="flex items-center gap-x-4">
      <div className="w-36 h-36 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-xl font-bold">
        50%
      </div>
      <div className="text-5xl font-bold text-gray-800">AC Repair</div>
    </div><div className="text-3xl  font-semibold text-gray-400">Provider : mr gupta</div>
    <div className="mt-6">
      <div className="w-full h-3 bg-gray-200 rounded-full">
        
        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '50%' }}></div>
      </div>
    </div>
  </div>
</div>





/bottom/
 <div className="w-[100%] flex flex-row bg-white text-steal p-4 gap-x-6  mt-12  mb-4   font-bold text-6xl"> Today Schedule</div>
<div className="flex flex-row w-full bg-gray-200  h-[700px] mt-2 gap-x-6 justify-center rounded-2xl">
<div className="w-[100%]  h-[650px] mt-2 mb-12 ">< ScheduleBoard /></div>
</div>
 </div>


<div className="w-[40%] bg-white p-4 ">
<div className="w-[100%] flex flex-row  text-steal p-4   mt-4  mb-4   font-bold text-6xl"> Today Booking</div>
<div className="w-[100%] bg-white rounded-2xl shadow-md h-[650px] mt-2 mb-12   justify-center flex ">
<div className=" w-[70%] bg-white  rounded-2xl  ">
  <div className=' '>
<h1 className='text-6xl font-extrabold font-poppins text-purple-600  ml-6  mb-4'><FaRegCalendarAlt className="text-purple-600" /> Calendar</h1></div> 
<p className='text-3xl font-bold font-poppins text-[#5499C7] ml-6 mb-6 text-purple-400  '>Booking successfully added to the calendar.</p> <Calendar /> </div>
    <div className="w-[30%] bg-white  rounded-2xl  p-6 flex flex-col items-center justify-center text-center">
 <h2 className="text-2xl font-bold text-purple-600 mb-4">Progress this Month</h2><div className="relative w-40 h-40"> <svg className="w-full h-full transform -rotate-90">
      <circle cx="80"cy="80" r="60"stroke="#E5E7EB"strokeWidth="20"fill="none"/>
      <circle cx="80"cy="80" r="60"stroke="#F4C542" strokeWidth="20"strokeDasharray="377"strokeDashoffset="125"strokeLinecap="round"fill="none" /></svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="text-yellow-500 text-2xl">↑</span>
      <span className="text-3xl font-bold text-gray-800">+15%</span>
    </div> </div>
<p className="text-xl text-purple-700 mt-6 mb-4 px-4"> Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor </p>
<div className="grid grid-cols-2 gap-2 text-left text-sm text-purple-900 font-medium mt-6">
    <div className="flex items-center gap-2 text-xl">
      <span className="w-3 h-3 rounded-full bg-green-500 "></span> Design
    </div>
    <div className="flex items-center gap-2 text-xl">
      <span className="w-3 h-3 rounded-full bg-pink-400 "></span> Soft Skill
    </div>
    <div className="flex items-center gap-2 text-xl">
      <span className="w-3 h-3 rounded-full bg-yellow-400 "></span> Developer
    </div>
    <div className="flex items-center gap-2 text-xl">
      <span className="w-3 h-3 rounded-full bg-red-400 "></span> Science
    </div>
  </div>
</div>  </div>

{/* 3 vali */}
<div className="w-[100%] flex flex-row  text-steal p-4 gap-x-6  mt-12    mb-4h-[100px]   font-bold text-6xl"> Upcoming Schedule</div>
<div className="flex  w-[100%] flex-col w-full bg-purple-300 p-4 h-[500px] mt-2 gap-y-4  justify-center rounded-2xl">
   {/* 1*/}
<div className="flex h-[400px] items-center bg-gray-50 rounded-xl  px-4 py-3 ">
 <div className="w-3 h-32 bg-green-500 rounded-full mr-4"></div>
<div className="flex-1">
      <h3 className="font-bold text-2xl text-gray-800">UX Research</h3>
      <p className="text-sm text-gray-500">Ms. Samantha William</p>
 <div className="flex items-center gap-4 mt-1 text-gray-400 text-sm"><div className="flex items-center gap-1"> <i className="fas fa-calendar-alt"></i> 
          <span>January 5, 2021</span> </div>
        <div className="flex items-center gap-1"><i className="fas fa-clock"></i> <span>07.00 - 08.00 AM</span> </div></div></div> <div className="text-green-400 text-xl font-bold">&gt;</div>
  </div>
 {/* 2*/}
<div className="flex h-[400px] items-center bg-gray-50 rounded-xl  px-4 py-3">
 <div className="w-3 h-32 bg-green-500  mr-4"></div>
<div className="flex-1">
      <h3 className="font-bold text-2xl text-gray-800">UX Research</h3>
      <p className="text-sm text-gray-500">Ms. Samantha William</p>
 <div className="flex items-center gap-4 mt-1 text-gray-400 text-sm"><div className="flex items-center gap-1"> <i className="fas fa-calendar-alt"></i> 
          <span>January 5, 2021</span> </div>
        <div className="flex items-center gap-1"><i className="fas fa-clock"></i> <span>07.00 - 08.00 AM</span> </div></div></div> <div className="text-green-400 text-xl font-bold">&gt;</div>
  </div> {/* 3*/}
<div className="flex h-[400px] items-center bg-gray-50 rounded-xl  px-4 py-3 ">
 <div className="w-3 h-32 bg-green-500 rounded-full mr-4"></div>
<div className="flex-1">
      <h3 className="font-bold text-2xl text-gray-800">UX Research</h3>
      <p className="text-sm text-gray-500">Ms. Samantha William</p>
 <div className="flex items-center gap-4 mt-1 text-gray-400 text-sm"><div className="flex items-center gap-1"> <i className="fas fa-calendar-alt"></i> 
          <span>January 5, 2021</span> </div>
        <div className="flex items-center gap-1"><i className="fas fa-clock"></i> <span>07.00 - 08.00 AM</span> </div></div></div> <div className="text-green-400 text-xl font-bold">&gt;</div>
  </div>

 </div>
</div>
  
  

</div> )}