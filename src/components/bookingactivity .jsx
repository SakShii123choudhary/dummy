import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Mon', lastWeek: 60, thisWeek: 40 },
  { day: 'Tue', lastWeek: 70, thisWeek: 45 },
  { day: 'Wed', lastWeek: 80, thisWeek: 35 },
  { day: 'Thu', lastWeek: 75, thisWeek: 60 },
  { day: 'Fri', lastWeek: 50, thisWeek: 95 },
  { day: 'Sat', lastWeek: 65, thisWeek: 40 },
  { day: 'Sun', lastWeek: 85, thisWeek: 90 },
];
<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="day" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="lastWeek" stroke="#fbbf24" strokeWidth={3} />
    <Line type="monotone" dataKey="thisWeek" stroke="#4cbc9a" strokeWidth={3} />
  </LineChart>
</ResponsiveContainer>

export default function BookingActivityChart() {
  return (
    <div className=" bg-[#F7F9F9] h-[450px] rounded-2xl shadow-md w-[100%]">
  <h2 className="text-3xl font-bold  text-gray-800">Booking Activity</h2>
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="lastWeek" stroke="#fbbf24" strokeWidth={3} />
      <Line type="monotone" dataKey="thisWeek" stroke="#4cbc9a" strokeWidth={3} />
    </LineChart>
  </ResponsiveContainer>
</div>
  );
}
