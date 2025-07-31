export default function ScheduleCard({ time, title, subtitle, color, duration = 60 }) {
  return (
    <div
      className="absolute left-[110px] w-[75%] bg-white rounded-xl shadow-md flex items-center px-4"
      style={{ top: time, height: `${duration}px` }}
    >
      {/* Color bar */}
      <div
        className="w-3 h-full rounded-full mr-4"
        style={{ backgroundColor: color }}
      ></div>

      {/* Title & Subtitle */}
      <div className="flex flex-col flex-1">
        <h2 className="font-bold text-xl text-yellow-800">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      {/* Circles */}
      <div className="flex gap-2">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-blue-500 rounded-full"></div>
        ))}
      </div>
    </div>
  );
}
