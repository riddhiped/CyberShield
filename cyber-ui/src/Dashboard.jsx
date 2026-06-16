import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ThreatChart from "./ThreatChart";
import LogsTable from "./LogsTable";
import {
  FaShieldAlt,
  FaBug,
  FaExclamationTriangle,
  FaServer,
} from "react-icons/fa";

export default function Dashboard() {

  const [stats, setStats] = useState({
    total: 0,
    high: 0,
    medium: 0,
    low: 0,
    logs: [],
  });

  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const exportCSV = () => {

  const headers =
    "Time,Event,Threat Score,Severity\n";

  const rows = stats.logs
    .map(
      (log) =>
        `${log.time},${log.message},${log.threat_score},${log.severity}`
    )
    .join("\n");

  const csvContent =
    headers + rows;

  const blob = new Blob(
    [csvContent],
    { type: "text/csv" }
  );

  const url =
    window.URL.createObjectURL(blob);

  const a =
    document.createElement("a");

  a.href = url;
  a.download = "threat_report.csv";

  a.click();

  window.URL.revokeObjectURL(url);
};

  const fetchData = async () => {
    const res = await fetch(
      "http://127.0.0.1:5000/api/dashboard"
    );

    const data = await res.json();

    setStats(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const analyzeThreat = async () => {

    if (!message) return;

    await fetch(
      "http://127.0.0.1:5000/api/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }
    );

    setMessage("");

    fetchData();
  };

  const cards = [
    {
      title: "Total Logs",
      value: stats.total,
      icon: <FaServer size={30} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "High Threats",
      value: stats.high,
      icon: <FaExclamationTriangle size={30} />,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Medium Threats",
      value: stats.medium,
      icon: <FaBug size={30} />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Low Threats",
      value: stats.low,
      icon: <FaShieldAlt size={30} />,
      color: "from-green-500 to-emerald-500",
    },
    {
  title: "Anomalies",
  value: stats.high,
  icon: <FaShieldAlt size={30} />,
  color: "from-purple-500 to-violet-600",
}
  ];

  return (
    <div className="flex bg-[#050816] text-white">
      <Sidebar />

      <div className="flex-1 p-8">

        <div className="flex justify-between items-center mb-8">
  <div className="mb-8">
  <h1 className="text-4xl font-bold">
    Cyber Threat Dashboard
  </h1>

  <p className="text-gray-400 mt-2 text-lg">
    Real-time monitoring and analysis of cybersecurity threats
  </p>

  <div className="mt-4 bg-gradient-to-r from-cyan-600 to-blue-700 p-4 rounded-xl">
    <h3 className="text-xl font-semibold">
      Security Monitoring Active
    </h3>

    <p className="text-gray-100 mt-1">
      System is actively analyzing incoming threat events and generating alerts.
    </p>
  </div>
</div>s

  <button
  onClick={exportCSV}
  className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-semibold shadow-lg"
>
  Export Report
</button>
</div>

        <div className="bg-[#111827] p-8 rounded-2xl mb-8 border border-cyan-500/30 shadow-xl">

          <h2 className="text-xl mb-4">
            Threat Analyzer
          </h2>

          <input
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            placeholder="Failed Login Attempt"
            className="w-full p-3 rounded bg-gray-900 text-white border border-cyan-500"
          />

          <button
            onClick={analyzeThreat}
            className="mt-3 bg-cyan-600 hover:bg-cyan-500 px-5 py-2 rounded-lg shadow-lg"
          >
            Analyze Threat
          </button>

        </div>

        <div className="grid grid-cols-5 gap-6 mb-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${card.color} rounded-2xl p-6 shadow-2xl hover:scale-105 transition duration-300`}
            >
              <div className="flex justify-between">
                <div>
                  <p>{card.title}</p>
                  <h2 className="text-4xl font-bold">
                    {card.value}
                  </h2>
                </div>

                {card.icon}
              </div>
            </div>
          ))}
        </div>

<div className="flex justify-between items-center mb-4 mt-8">
  <h2 className="text-2xl font-bold">
    Threat Analytics
  </h2>

  <div className="bg-green-600 px-4 py-2 rounded-full">
    Monitoring Active
  </div>
</div>

<ThreatChart />

<input
  type="text"
  placeholder="Search Threat Logs..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full p-3 mb-4 mt-6 rounded-lg bg-gray-900 text-white border border-cyan-500"
/>

<LogsTable
  logs={stats.logs.filter((log) =>
    log.message
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )}
/>

      </div>
    </div>
  );
}