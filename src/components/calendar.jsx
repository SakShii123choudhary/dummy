import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  format,
  isSameMonth,
  isToday,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-4xl font-extrabold text-green-500">
        {format(currentMonth, "MMMM, yyyy")}
      </h2>
      <div className="flex space-x-2">
        <button
          onClick={prevMonth}
          className="p-2 rounded-full bg-green-500 hover:bg-gray-300 transition"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextMonth}
          className="p-2 rounded-full bg-green-500 hover:bg-gray-300 transition "
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const date = new Date();
    const startDate = startOfWeek(date, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          key={i}
          className="text-center text-yellow-400 text-xl font-extrabold"
        >
          {format(addDays(startDate, i), "EEE").charAt(0)}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mb-4">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const isCurrentMonth = isSameMonth(day, monthStart);
        const today = isToday(day);

        days.push(
          <div
            key={day}
            className={`text-center text-xl p-2 rounded-full cursor-pointer transition-all ${
              today
                ? "bg-yellow-500 text-white font-extrabold"
                : isCurrentMonth
                ? "text-blue-900 hover:bg-blue-100"
                : "text-gray-800"
            }`}
          >
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div key={day} className="grid grid-cols-7 gap-2 mb-1">
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="bg-white h-[450px] rounded-2xl p-6 w-full">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
