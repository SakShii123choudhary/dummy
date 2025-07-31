import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Mon', lastWeek: 40, thisWeek: 24 },
  { name: 'Tue', lastWeek: 70, thisWeek: 68 },
  { name: 'Wed', lastWeek: 30, thisWeek: 65 },
  { name: 'Thu', lastWeek: 80, thisWeek: 50 },
  { name: 'Fri', lastWeek: 30, thisWeek: 30 },
  { name: 'Sat', lastWeek: 50, thisWeek: 80 },
  { name: 'Sun', lastWeek: 65, thisWeek: 90 },
];

export default function ProgressChart() {
  return (
    <div className="w-[100%] h-[550px]  rounded-2xl shadow-md bg-white text-black p-6 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Progress</h2>
        <button className="bg-white  text-2xltext-black px-8 py-4 rounded-md text-sm">This Week</button>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#737373" />
          <XAxis dataKey="name" stroke="#fffff" />
          <YAxis stroke="#fffff" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="lastWeek" stroke="#F5B041" strokeWidth={6} dot={{ r: 6 }} name="Last Week" />
          <Line type="monotone" dataKey="thisWeek" stroke="#58D68D" strokeWidth={6} dot={{ r: 6 }} name="This Week" />
        </LineChart>
      </ResponsiveContainer>

      <div className="flex justify-end gap-x-6 mt-4 pr-2">
        <div className="text-xl">
          <span className="text-green-300 font-extrabold">+32%</span> <span className="text-gray-400  font-bold ">This Week</span>
        </div>
        <div className="text-xl">
          <span className="text-yellow-300 font-extrabold">+24%</span> <span className="text-gray-400 font-bold">Last Week</span>
        </div>
      </div>
    </div>
  );
}
