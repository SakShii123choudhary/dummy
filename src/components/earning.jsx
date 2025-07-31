import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Plumber", value: 763, color: "#F6C23E" },       // Yellow
  { name: "Electrician", value: 321, color: "#F87171" },  // Red
  { name: "AC Repair", value: 69, color: "#34D399" },       // Green
];

export default function EarningCourses() {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="bg-white w-[100%] h-[300px] rounded-2xl shadow-lg p-6 border border-blue-500 flex">
      
       <div className="w-[40%] flex flex-col items-center justify-center">
        <h2 className="text-6Xl font-extrabold text-black">Working</h2>
        <p className="text-sm text-gray-400 ">This Month</p>
        <h1 className="text-xl font-semibold text-gray-800 mb-1">53.678</h1>

        <div className="w-full h-[160px]">
      
     
        
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div></div>

      {/* Legend Section */}
      <div className="w-[50%] flex flex-col justify-center gap-4 px-6">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* Colored Circle */}
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>

            {/* Content */}
            <div className="flex flex-col">
              <span className="text-2xl text-gray-700 font-bold">
                {entry.name}
              </span>
              <span className="text-xl text-gray-500">
                {entry.value} ({Math.round((entry.value / total) * 100)}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
