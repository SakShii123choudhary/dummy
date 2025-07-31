import React from "react";

export default function Progress() {
  return (
    <div className="w-[100%] bg-white   h-[450px] ">
      <div className="flex flex-row w-full h-full gap-4">
        {/* my progress */}
        <div className="w-1/2 bg-[#F0F3F4] flex flex-col items-center justify-center rounded-2xl p-4 shadow-1xl transform transition duration-300 hover:-translate-y-3">
          <div className="relative w-[120px] h-[120px] mb-4 ">
            <svg className="w-full h-full rotate-[-90deg]">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="12"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#22c55e"
                strokeWidth="12"
                strokeDasharray={339.292}
                strokeDashoffset={339.292 * 0.25} 
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">75%</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">My Progress</h3>
          <p className="text-sm text-gray-500 text-center mb-2">
            75% of service completed
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg transition transform transition duration-300 hover:-translate-y-3">
            More Details
          </button>
        </div>

        {/*  Task Progress */}
        <div className="w-1/2 bg-[#F0F3F4] rounded-xl shadow-1xl p-4 flex flex-col justify-between transition transform transition duration-300 hover:-translate-y-3">
          <div>
            <div className="flex justify-between items-center mt-12">
              <h2 className="text-2xl font-extrabold text-gray-800">Tasks</h2>
              <div className="text-gray-400 text-xl">•••</div>
            </div>

            <div className="mb-6 mt-12">
              <p className="text-2xl font-medium text-gray-600">House Cleaning</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2 mb-2">
                <div className="bg-yellow-400 h-2 rounded-full w-[70%]"></div>
              </div>
              <p className="text-xl text-gray-500 ">2/3 Tasks Done</p>
            </div>

            <div className="mb-6">
              <p className="text-2xl font-medium text-gray-600">Electrician Job</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1 mb-1">
                <div className="bg-green-500 h-2 rounded-full w-[50%]"></div>
              </div>
              <p className="text-xl text-gray-500">1/2 Tasks Done</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
