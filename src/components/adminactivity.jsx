import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, CartesianGrid,
  BarChart, Bar
} from 'recharts';

const ActivityData = [
  { name: 'Mon', lastWeek: 30, thisWeek: 45 },
  { name: 'Tue', lastWeek: 60, thisWeek: 65 },
  { name: 'Wed', lastWeek: 40, thisWeek: 50 },
  { name: 'Thu', lastWeek: 50, thisWeek: 70 },
  { name: 'Fri', lastWeek: 55, thisWeek: 60 },
  { name: 'Sat', lastWeek: 40, thisWeek: 80 },
  { name: 'Sun', lastWeek: 65, thisWeek: 75 },
];

const newProviderData = [
  { day: 'Mon', count: 20 },
  { day: 'Tue', count: 45 },
  { day: 'Wed', count: 38 },
  { day: 'Thu', count: 50 },
  { day: 'Fri', count: 55 },
  { day: 'Sat', count: 48 },
  { day: 'Sun', count: 60 },
];

export default function ProviderOverview() {
  return (
    <div className="w-full flex flex-col gap-y-6">
      
      {/* Total Providers */}
      <div className="bg-[#4CBC9A] h-[250px] rounded-xl p-4 flex items-center justify-between shadow">
        <div>
          <p className="text-5xl font-extrabold text-white">Total Providers</p>
          <h2 className="text-2xl font-bold text-gray-200">2,420</h2>
        </div>
        <div className="bg-white p-3 rounded-full">
          <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 100 12A6 6 0 0010 2zM2 18a8 8 0 0116 0H2z" />
          </svg>
        </div>
      </div>

      {/* New Providers */}
      <div className="bg-green-100 rounded-xl shadow h-[450px] p-4">
        <p className="text-2xl font-extrabold text-green-500">New Providers</p>
        <div className="flex items-center justify-between mt-2 mb-4">
          <h2 className="text-2xl font-bold text-yellow-500">+168</h2>
          <span className="text-green-600 text-xl">+12%</span>
        </div>
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={newProviderData}>
              <XAxis dataKey="day" hide />
              <YAxis hide />
              <Tooltip />
              <defs>
                <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e8d672" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#e8d672" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Line
                type="monotone"
                dataKey="count"
                stroke="#e8d672"
                strokeWidth={4}
                dot={false}
                activeDot={{ r: 6, stroke: '#e8d672', fill: '#fff' }}
              />
              <Area
                type="monotone"
                dataKey="count"
                fill="url(#colorCount)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Admin Activity */}
      <div className="bg-white rounded-xl p-4 shadow h-[450px]">
        <div className="flex justify-between items-center mb-6">
          <p className="text-2xl font-bold text-blue-700">Admin Activity</p>
          <span className="text-xl text-gray-400">This Month</span>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={ActivityData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" stroke="#888" />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="thisWeek" fill="#3cdc7e" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
