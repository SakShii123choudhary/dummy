import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", thisMonth: 80, lastMonth: 90 },
  { name: "Feb", thisMonth: 65, lastMonth: 50 },
  { name: "Mar", thisMonth: 45, lastMonth: 40 },
  { name: "Apr", thisMonth: 70, lastMonth: 55 },
  { name: "May", thisMonth: 100, lastMonth: 70 },
  { name: "Jun", thisMonth: 85, lastMonth: 78 },
  { name: "Jul", thisMonth: 60, lastMonth: 85 },
  { name: "Aug", thisMonth: 50, lastMonth: 42 },
  { name: "Sep", thisMonth: 60, lastMonth: 45 },
  { name: "Oct", thisMonth: 80, lastMonth: 65 },
  { name: "Nov", thisMonth: 95, lastMonth: 85 },
  { name: "Dec", thisMonth: 75, lastMonth: 60 },
];

export default function ScoreChart() {
  return (
    <div className="w-[100%] bg-white rounded-2xl shadow-md h-[400px] mt-1 mb-4 p-4">
      <h2 className="text-xl font-extrabold mb-4 text-gray-800">Provider Activity</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} barCategoryGap={15}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="lastMonth" fill="#facc15" name="Last Month" />
          <Bar dataKey="thisMonth" fill="#10b981" name="This Month" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
