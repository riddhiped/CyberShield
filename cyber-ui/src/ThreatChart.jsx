import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", threats: 12 },
  { day: "Tue", threats: 18 },
  { day: "Wed", threats: 9 },
  { day: "Thu", threats: 24 },
  { day: "Fri", threats: 16 },
  { day: "Sat", threats: 30 },
];

export default function ThreatChart() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">
        Threat Trends
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#333" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="threats"
            stroke="#00E5FF"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}