import { FaShieldAlt, FaHome, FaBug, FaChartLine } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#0B1220] min-h-screen p-6 border-r border-gray-800">
      <div className="flex items-center gap-3 mb-10">
        <FaShieldAlt size={35} className="text-cyan-400" />
        <h1 className="text-xl font-bold">Cyber Shield</h1>
      </div>

      <ul className="space-y-4">
        <li className="flex items-center gap-3 p-3 rounded-lg bg-cyan-600">
          <FaHome /> Dashboard
        </li>

        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800">
          <FaBug /> Threat Logs
        </li>

        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800">
          <FaChartLine /> Analytics
        </li>
      </ul>
    </div>
  );
}