import Rechart from '../components/rechart'
import Adminactivity from '../components/adminactivity'
import Earning from '../components/earning'
import ScoreChart from '../components/scorechart'

export default function Activity (){
    return( <div >
<h1 className="text-green-300 ml-12 font-bold text-5xl ">Activity</h1>
     
     <div className=" mt-12 flex w-full gap-4 h-[1350px] p-6 ">
   <div className="w-[70%]  rounded-2xl shadow-md bg-gray-200 ">
   <Rechart />
   
   <div className="flex  w-full gap-4">
    <div className='flex flex-col w-[50%]'>
    <div className=""> <ScoreChart /></div>
<div className="mt-1"> <Earning/></div></div>

  
  <div className="w-[48%]ml-4 flex flex-col  border-[7px] border-dashed border-purple-400 space-y-6 bg-white rounded-xl mt-6 h-[650px] p-12">
   <h1 className='text-4xl text-purple-400 font-extrabold '> Activty today</h1>
   <div className="flex items-start gap-4">
      <div className="text-m text-gray-400 w-26">10:10 AM</div>
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-red-200 text-red-600 flex items-center justify-center font-bold">KH</div>
          <p className="text-gray-800 text-2xl">
            <span className="font-bold">Karen Hope</span> attached 2 files to <span className="text-yellow-500 font-medium">Graphic Design</span> Courses
          </p>
        </div>
        <div className="flex gap-2 mt-2 ml-12">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg text-sm">
            <svg className="w-4 h-4 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7.5a1 1 0 00-.293-.707l-4.5-4.5A1 1 0 0012.5 2H4z" /></svg>
            Module1_GraphicDesign.doc <span className="ml-2 text-gray-400">1.5 Mb</span>
          </div>
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg text-sm">
            <svg className="w-4 h-4 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7.5a1 1 0 00-.293-.707l-4.5-4.5A1 1 0 0012.5 2H4z" /></svg>
            Module2_GraphicDesign.doc <span className="ml-2 text-gray-400">1.5 Mb</span>
          </div>
        </div>
      </div>
    </div>

    {/* Activity 2 */}
    <div className="flex items-start gap-4">
      <div className="text-m text-gray-400 w-16">09:30 AM</div>
      <div className="flex-1 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-yellow-300 text-yellow-900 flex items-center justify-center font-bold">JN</div>
        <p className="text-gray-800 text-2xl">
          <span className="font-bold">Jordan Nico</span> has invited you to <span className="text-yellow-500 font-xl">Graphic Design</span> Group Chat
        </p>
      </div>
    </div>

    {/* Activity 3 */}
    <div className="flex items-start gap-4">
      <div className="text-m text-gray-400 w-16">09:10 AM</div>
      <div className="flex-1 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-blue-300 text-white flex items-center justify-center font-bold">JA</div>
        <p className="text-gray-800 text-2xl">
          <span className="font-bold">Johnny Ahmad</span> accepted your invitation to <span className="text-green-500 font-medium">Fullstack Developer</span> Courses
        </p>
      </div>
    </div>

    {/* Activity 4 */}
    <div className="flex items-start gap-4">
      <div className="text-sm text-gray-400 w-16">08:45 AM</div>
      <div className="flex-1 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-green-300 text-white flex items-center justify-center font-bold">SW</div>
        <p className="text-gray-800 text-2xl">
          <span className="font-bold">Samantha William</span> removed you from <span className="text-red-400 font-medium">UI Design</span> Courses group chat
        </p>
      </div>
    </div>
  </div>
</div>

   
   </div>


 
 
 
  <div className="w-[30%] bg-purple-200 p-6 rounded-2xl shadow-md"><Adminactivity /></div>
</div>

     
  </div>  )}