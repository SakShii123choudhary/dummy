import React from 'react';
import { CalendarDays, Clock } from 'lucide-react';

const upcomingSessions = [
  {
    title: 'upcoming project of cleaning',
    date: 'January 5, 2021',
    time: '09.00 - 10.00 AM',
    provider: 'Ms.  William',
    color: 'bg-blue-600',
  },
  {
    title: 'upcoming project of lighting',
    date: 'January 17, 2021',
    time: '09.00 - 10.00 AM',
    provider: 'Mr. sharma',
    color: 'bg-green-600',
  },
];

export default function UpcomingSchedule() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-extrabold text-gray-800 mt-6 ml-6 text-[#5B2C6F] font-sans animate-slide-x">Upcoming Schedule</h2>
        <button className="font-extrabold text-green-900 p-2 mr-6 rounded-full text-2xl shadow-sm hover:bg-green-600 hover:text-white">
          +
        </button>
      </div>

      {upcomingSessions.map((session, idx) => (
        <div key={idx} className="flex items-start bg-[#F5EEF9] rounded-2xl p-3 mb-6 shadow-sm ml-4 mr-4 transform transition duration-300 hover:-translate-y-3 hover:shadow-xl">
          <div className={`w-1.5 rounded-2xl mr-3 ${session.color}`} />
          <div className="flex flex-col">
            <h3 className="font-medium text-gray-700 text-2xl text-[#0B5345]">{session.title}</h3>
            <div className="flex items-center text-xl text-purple-500 h-[90px]">
              <CalendarDays size={34} className="mr-1" />
              <span>{session.date}</span>
              <span className="mx-2">|</span>
              <Clock size={34} className="mr-1" />
              <span>{session.time}</span>
            </div>
            <p className="text-m text-[#5499C7]  mt-2">{session.teacher}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
