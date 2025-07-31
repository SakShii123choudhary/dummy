import React from "react";
import ScheduleCard  from '../components/schedulecard'

export default function ScheduleBoard() {
  const timeSlots = [
    { label: "7 AM", top: 0 },
    { label: "8 AM", top: 60 },
    { label: "9 AM", top: 120 },
    { label: "10 AM", top: 180 },
    { label: "11 AM", top: 240 },
    { label: "12 PM", top: 300 },
    { label: "1 PM", top: 360 },
    { label: "2 PM", top: 420 },
    { label: "3 PM", top: 480 },
    { label: "4 PM", top: 540 },
    
  ];

  const scheduleData = [
  { time: 60, duration: 60, title: " AC Repair", subtitle: "A/B Testing", color: "#EB5757" },
  { time: 120, duration: 60, title: " home salon", subtitle: "Wireframe", color: "#2D9CDB" },
  { time: 480, duration: 60, title: " lighting", subtitle: "FormRequest", color: "#F2C94C" },
  { time: 300, duration: 120, title: " cleaning", subtitle: "Figma Wireframe", color: "#00B894" }, // 12 PM - 2 PM
];


  return (
    <div className="  ml-12 w-[95%] h-[650px] bg-white rounded-2xl shadow-md relative px-6 py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Today Schedule</h1>

      {/* Timeline */}
      <div className="relative h-[600px]">
        {timeSlots.map((slot, i) => (
          <div key={i} className="absolute left-0 w-full border-t border-dashed border-gray-600" style={{ top: slot.top }}>
            <span className="absolute -left-14 text-black text-m">{slot.label}</span>
          </div>
        ))}

        {/* Cards */}
        {scheduleData.map((item, index) => (
          <ScheduleCard
            key={index}
            time={item.time}
            title={item.title}
            subtitle={item.subtitle}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}
