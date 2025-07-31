import { Wrench, CalendarCheck, ArrowRight  } from 'lucide-react';
import { UserCheck,ShieldCheck } from "lucide-react";
import BookingActivityChart from '../components/bookingactivity ';
import Progress from '../components/progress';
import ScoreChart from '../components/scorechart';
import Calendar from '../components/calendar'
import Upcoming from '../components/upcoming';



export default function Dashboard(){
    return(<div className="flex w-full  min-h-screen">
  
  <div className="w-[70%] bg-white p-4">  <div className="">
    <h1 className="text-green-300 ml-12 font-bold text-5xl">Dashboard</h1>
    
  </div>
    




{/* pehli div*/}
<div className="w-[98%] bg-[#4CBC9A] p-6 rounded-2xl shadow-2xl h-[400px] mt-2 ml-4  hover:shadow-xl flex flex-col justify-between ">
 <div>{/*heading ki div*/}<div className="flex items-center space-x-4 mb-4"><Wrench size={72} className="text-white" />
  <h2 className="text-6xl font-extrabold mt-6 leading-tight "> Need a Service? Get Instant Help from Verified Experts!</h2></div>
  <p className="text-4xl mt-4 opacity-90 ml-20 font-medium "> Book professionals like plumbers, tutors, and more near you. Fast, affordable & reliable.</p>
  </div> {/* buttons  ki div */}
  <div className="flex justify-left ml-20 gap-6 mt-6">
    <button className="bg-white text-[#4CBC9A] font-extrabold text-2xl px-12 py-6 rounded-2xl w-[300px] h-[80px] flex items-center justify-center gap-3 shadow transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-gray-100">
       Services <ArrowRight size={32} />
    </button>
    <button className="bg-white text-[#4CBC9A] font-extrabold text-2xl px-12 py-6 rounded-2xl w-[300px] h-[80px] flex items-center justify-center gap-3 shadow transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-gray-100">
      Book Now <CalendarCheck size={32} />
    </button>
  </div>
</div>




 <div className="flex flex-row w-full bg-white p-4 h-[450px] mt-12 gap-x-6 justify-center rounded-2xl">
  <div className="w-[40%] bg- bg-[#4CBC9A] p-6 rounded-2xl shadow-md h-[400px] transform transition duration-300 hover:-translate-y-3 hover:shadow-xl ">
     <UserCheck size={99} className="text-white mt-4 mb-4" />
    <h3 className="text-5xl font-extrabold text-white mb-4">Verified Experts</h3>
    <p className="text-2xl text-[#F4F6F7] mt-4">
      All service providers are background-checked and certified for quality assurance.
    </p></div>

  <div className="w-[40%] bg-[#FEC64F] p-6 rounded-2xl shadow-md h-[400px] transform transition duration-300 hover:-translate-y-3 hover:shadow-xl ">
     <Wrench size={99} className="text-white mt-4 mb-4" />
    <h3 className="text-5xl font-extrabold text-white mb-4">Wide Range of Services</h3>
    <p className="text-2xl text-[#F4F6F7] mt-4">
      From plumbing to tutoring, book exactly what you need — anytime, anywhere.
    </p>
  </div>
  <div className="w-[40%] bg-[#374557] p-6 rounded-2xl shadow-md h-[400px] transform transition duration-300 hover:-translate-y-3 hover:shadow-xl">
    <ShieldCheck size={99} className="text-white mt-4 mb-4" />
    <h3 className="text-5xl font-extrabold text-white mb-4">Trusted & Secure</h3>
    <p className="text-2xl text-[#F4F6F7] mt-4">
      Your safety and satisfaction are our priority. Secure payments and guaranteed services.
    </p> </div>
</div>

<div className="flex flex-row w-full bg-white p-4 h-[450px] mt-4 gap-x-6 justify-center rounded-2xl">
     <div className="w-[60%] bg-red-300  rounded-2xl shadow-md h-[450px] ">< BookingActivityChart /></div>
  <div className="w-[40%] bg-white   h-[450px] "><Progress /></div>
</div>

  </div>




 {/*right vali */}
  <div className="w-[30%] bg-white ">
  <div className="w-[97%] bg-purple-200 ml-4  rounded-2xl shadow-md h-[400px] mt-8  mb-4 ">< ScoreChart /></div> 
  <div className="w-[94%] bg-blue-500 rounded-2xl shadow-2xl h-[400px] mt-12 ml-6  border-bold  justify-center text-blue-900 text-32">< Calendar /></div> 
 
  <div className='mt-32'>
  <div className="w-[94%] bg-purple-200 rounded-2xl shadow-md h-[450px] mt-2 mb-4  ml-4 "><Upcoming /></div> 
  </div>
  </div>




</div>  )
}